// CAP MÉDECIN — comptes (Supabase), sauvegarde de la progression et signalements
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator, Platform, Linking, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { C, SOMBRE, Card, Btn, Notice, u } from './ui';

// Projet Supabase de CAP Médecin (clé publique « anon », protégée par les règles RLS)
export const SUPABASE_URL = 'https://kwrayxoojgsobuqiadpp.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_KYLA_qeDv5UofI_HDJnVBw_bXc7I66j';
export const CLOUD_OK = !!(SUPABASE_URL && SUPABASE_KEY);
export const CONTACT = 'lonisboussouar@gmail.com';

const SESSION = 'capm:session';
const SANS_COMPTE = 'capm:sanscompte';

export type User = { id: string; email: string };
type Session = { access_token: string; refresh_token: string; expires_at: number; user: User };

let session: Session | null = null;

async function api(path: string, opts: { method?: string; body?: any; auth?: boolean; prefer?: string } = {}) {
  const headers: Record<string, string> = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
  if (opts.auth) {
    const t = await jeton();
    if (!t) throw new Error('Session expirée : reconnecte-toi.');
    headers.Authorization = 'Bearer ' + t;
  }
  if (opts.prefer) headers.Prefer = opts.prefer;
  const r = await fetch(SUPABASE_URL + path, { method: opts.method || 'GET', headers, body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined });
  const txt = await r.text();
  let data: any = null;
  try { data = txt ? JSON.parse(txt) : null; } catch { data = txt; }
  if (!r.ok) throw new Error(traduire(data?.msg || data?.error_description || data?.message || data?.error || 'Erreur ' + r.status));
  return data;
}

function traduire(m: string) {
  const s = String(m).toLowerCase();
  if (s.includes('invalid login')) return 'E-mail ou mot de passe incorrect.';
  if (s.includes('email not confirmed')) return 'Confirme d’abord ton adresse : clique sur le lien reçu par e-mail.';
  if (s.includes('already registered') || s.includes('already been registered')) return 'Un compte existe déjà avec cette adresse.';
  if (s.includes('password should be') || s.includes('weak')) return 'Mot de passe trop court : 8 caractères minimum.';
  if (s.includes('rate limit') || s.includes('security purposes')) return 'Trop de tentatives : réessaie dans une minute.';
  if (s.includes('invalid email') || s.includes('unable to validate email')) return 'Adresse e-mail invalide.';
  if (s.includes('network') || s.includes('failed to fetch')) return 'Pas de connexion internet.';
  return m;
}

function garder(d: any): Session {
  const s: Session = {
    access_token: d.access_token,
    refresh_token: d.refresh_token,
    expires_at: d.expires_at || Math.floor(Date.now() / 1000) + (d.expires_in || 3600),
    user: { id: d.user.id, email: d.user.email },
  };
  session = s;
  AsyncStorage.setItem(SESSION, JSON.stringify(s)).catch(() => {});
  return s;
}

async function jeton(): Promise<string | null> {
  if (!session) return null;
  if (session.expires_at - 60 > Date.now() / 1000) return session.access_token;
  try {
    const d = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: session.refresh_token }),
    }).then((r) => (r.ok ? r.json() : null));
    if (!d?.access_token) return null;
    return garder(d).access_token;
  } catch {
    return null;
  }
}

export const auth = {
  async connexion(email: string, mdp: string) {
    return garder(await api('/auth/v1/token?grant_type=password', { method: 'POST', body: { email: email.trim(), password: mdp } })).user;
  },
  async inscription(email: string, mdp: string): Promise<User | null> {
    const redir = Platform.OS === 'web' && typeof location !== 'undefined' ? location.origin + location.pathname : 'https://lonisbouss-cmyk.github.io/cap-medecin/';
    const d = await api('/auth/v1/signup?redirect_to=' + encodeURIComponent(redir), { method: 'POST', body: { email: email.trim(), password: mdp } });
    if (d?.access_token) return garder(d).user;
    return null; // confirmation par e-mail nécessaire
  },
  async oubli(email: string) {
    const redir = Platform.OS === 'web' && typeof location !== 'undefined' ? location.origin + location.pathname : 'https://lonisbouss-cmyk.github.io/cap-medecin/';
    await api('/auth/v1/recover?redirect_to=' + encodeURIComponent(redir), { method: 'POST', body: { email: email.trim() } });
  },
  async nouveauMdp(mdp: string) {
    await api('/auth/v1/user', { method: 'PUT', auth: true, body: { password: mdp } });
  },
  async deconnexion() {
    try { if (session) await api('/auth/v1/logout', { method: 'POST', auth: true }); } catch {}
    session = null;
    await AsyncStorage.multiRemove([SESSION, SANS_COMPTE]).catch(() => {});
  },
  async supprimer() {
    await api('/rest/v1/rpc/supprimer_mon_compte', { method: 'POST', auth: true, body: {} });
    session = null;
    await AsyncStorage.multiRemove([SESSION, SANS_COMPTE]).catch(() => {});
  },
};

// ---------- progression ----------
export const db = {
  async charger(): Promise<{ data: any; maj: number } | null> {
    if (!session) return null;
    const rows = await api('/rest/v1/progress?select=data,updated_at&user_id=eq.' + session.user.id, { auth: true });
    if (!rows?.length) return null;
    return { data: rows[0].data, maj: Date.parse(rows[0].updated_at) || 0 };
  },
  async enregistrer(data: any) {
    if (!session) return;
    await api('/rest/v1/progress?on_conflict=user_id', {
      method: 'POST',
      auth: true,
      prefer: 'resolution=merge-duplicates,return=minimal',
      body: { user_id: session.user.id, data, updated_at: new Date().toISOString() },
    });
  },
  async signaler(cible: string, texte: string) {
    await api('/rest/v1/signalements', {
      method: 'POST',
      auth: !!session,
      prefer: 'return=minimal',
      body: { user_id: session?.user.id || null, cible, texte: texte.slice(0, 2000), plateforme: Platform.OS },
    });
  },
};

// ---------- écran de connexion ----------
type Mode = 'connexion' | 'inscription' | 'oubli' | 'reinit';

function Champ(p: { label: string; value: string; onChange: (s: string) => void; secret?: boolean; mail?: boolean }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={u.label}>{p.label}</Text>
      <TextInput
        value={p.value}
        onChangeText={p.onChange}
        secureTextEntry={p.secret}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={p.mail ? 'email-address' : 'default'}
        autoComplete={p.mail ? 'email' : p.secret ? 'password' : 'off'}
        style={{ backgroundColor: C.card, borderWidth: 1, borderColor: C.line, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 11, color: C.ink, fontSize: 16 }}
      />
    </View>
  );
}

function lireLienWeb(): { type?: string; d?: any; erreur?: string } {
  if (Platform.OS !== 'web' || typeof location === 'undefined' || !location.hash) return {};
  const p = new URLSearchParams(location.hash.slice(1));
  try { history.replaceState(null, '', location.pathname + location.search); } catch {}
  if (p.get('error_description')) return { erreur: p.get('error_description')!.replace(/\+/g, ' ') };
  const at = p.get('access_token');
  if (!at) return {};
  return {
    type: p.get('type') || '',
    d: { access_token: at, refresh_token: p.get('refresh_token'), expires_in: Number(p.get('expires_in')) || 3600, expires_at: Number(p.get('expires_at')) || 0 },
  };
}

export function AuthGate({ children }: { children: (user: User | null, sortir: () => void) => any }) {
  const [etat, setEtat] = useState<'chargement' | 'ecran' | 'ok'>('chargement');
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<Mode>('connexion');
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const [mdp2, setMdp2] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    (async () => {
      if (!CLOUD_OK) return setEtat('ok');
      const lien = lireLienWeb();
      if (lien.erreur) setErr(lien.erreur);
      if (lien.d) {
        try {
          const me = await fetch(SUPABASE_URL + '/auth/v1/user', { headers: { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + lien.d.access_token } }).then((r) => r.json());
          if (me?.id) {
            const s = garder({ ...lien.d, user: me });
            setUser(s.user);
            if (lien.type === 'recovery') { setMode('reinit'); return setEtat('ecran'); }
            return setEtat('ok');
          }
        } catch {}
      }
      try {
        const raw = await AsyncStorage.getItem(SESSION);
        if (raw) {
          session = JSON.parse(raw);
          setUser(session!.user);
          return setEtat('ok');
        }
        if (await AsyncStorage.getItem(SANS_COMPTE)) return setEtat('ok');
      } catch {}
      setEtat('ecran');
    })();
  }, []);

  const sortir = () => { setUser(null); setMdp(''); setMode('connexion'); setEtat('ecran'); };

  const valider = async () => {
    setErr(''); setInfo('');
    if (mode !== 'reinit' && !/^\S+@\S+\.\S+$/.test(email.trim())) return setErr('Saisis une adresse e-mail valide.');
    if ((mode === 'inscription' || mode === 'reinit') && mdp.length < 8) return setErr('Mot de passe trop court : 8 caractères minimum.');
    if ((mode === 'inscription' || mode === 'reinit') && mdp !== mdp2) return setErr('Les deux mots de passe ne correspondent pas.');
    if (mode === 'connexion' && !mdp) return setErr('Saisis ton mot de passe.');
    setBusy(true);
    try {
      if (mode === 'connexion') { setUser(await auth.connexion(email, mdp)); setEtat('ok'); }
      else if (mode === 'inscription') {
        const us = await auth.inscription(email, mdp);
        if (us) { setUser(us); setEtat('ok'); }
        else { setInfo('Compte créé ! Ouvre l’e-mail de confirmation que tu viens de recevoir, clique sur le lien, puis connecte-toi ici.'); setMode('connexion'); setMdp(''); setMdp2(''); }
      } else if (mode === 'oubli') { await auth.oubli(email); setInfo('Si un compte existe pour cette adresse, un e-mail de réinitialisation vient d’être envoyé.'); setMode('connexion'); }
      else { await auth.nouveauMdp(mdp); setMdp(''); setMdp2(''); setEtat('ok'); }
    } catch (e: any) {
      setErr(traduire(e?.message || String(e)));
    }
    setBusy(false);
  };

  if (etat === 'chargement')
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: C.bg }}><ActivityIndicator color={C.red} size="large" /></View>;
  if (etat === 'ok') return children(user, sortir);

  const titres: Record<Mode, string> = { connexion: 'Connexion', inscription: 'Créer un compte', oubli: 'Mot de passe oublié', reinit: 'Nouveau mot de passe' };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="light-content" backgroundColor="#12355B" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ backgroundColor: '#12355B', paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) + 40, paddingBottom: 34, paddingHorizontal: 24, alignItems: 'center' }}>
          <View style={{ width: 68, height: 68, borderRadius: 20, backgroundColor: '#0B7A75', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 40, fontWeight: '900', marginTop: -2 }}>✚</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 26, fontWeight: '900', letterSpacing: 1.5, marginTop: 14 }}>CAP MÉDECIN</Text>
          <Text style={{ color: 'rgba(255,255,255,0.8)', marginTop: 4, textAlign: 'center' }}>Réviser la médecine, de la PASS/LAS à l’EDN et aux ECOS</Text>
        </View>
        <View style={{ padding: 20, width: '100%', maxWidth: 460, alignSelf: 'center' }}>
          <Text style={[u.h1, { fontSize: 22 }]}>{titres[mode]}</Text>
          {mode === 'connexion' && <Text style={u.sub}>Ton compte enregistre ta progression et la retrouve sur tous tes appareils (téléphone et web).</Text>}
          {mode === 'oubli' && <Text style={u.sub}>Indique ton adresse : tu recevras un lien pour choisir un nouveau mot de passe.</Text>}
          {!!info && <Notice>{info}</Notice>}
          {mode !== 'reinit' && <Champ label="Adresse e-mail" value={email} onChange={setEmail} mail />}
          {mode !== 'oubli' && <Champ label={mode === 'reinit' ? 'Nouveau mot de passe' : 'Mot de passe'} value={mdp} onChange={setMdp} secret />}
          {(mode === 'inscription' || mode === 'reinit') && <Champ label="Confirme le mot de passe" value={mdp2} onChange={setMdp2} secret />}
          {!!err && <Text style={{ color: C.ko, fontWeight: '700', marginBottom: 8 }}>{err}</Text>}
          {busy ? <ActivityIndicator color={C.red} style={{ marginVertical: 14 }} /> : <Btn title={mode === 'connexion' ? 'Se connecter' : mode === 'inscription' ? 'Créer mon compte' : mode === 'oubli' ? 'Envoyer le lien' : 'Enregistrer'} onPress={valider} />}
          {mode === 'connexion' && (
            <>
              <Btn kind="ghost" title="Créer un compte gratuit" onPress={() => { setMode('inscription'); setErr(''); setInfo(''); }} />
              <Pressable onPress={() => { setMode('oubli'); setErr(''); setInfo(''); }} style={{ padding: 10, alignItems: 'center' }}>
                <Text style={{ color: C.red, fontWeight: '700' }}>Mot de passe oublié ?</Text>
              </Pressable>
            </>
          )}
          {(mode === 'inscription' || mode === 'oubli') && <Btn kind="ghost" title="J’ai déjà un compte" onPress={() => { setMode('connexion'); setErr(''); }} />}
          {mode === 'inscription' && (
            <Text style={{ color: C.muted, fontSize: 12, marginTop: 6, lineHeight: 17 }}>
              En créant un compte, tu acceptes que ton adresse e-mail et ta progression soient enregistrées pour faire fonctionner l’application. Tu peux supprimer ton compte à tout moment depuis Outils › Mon compte.{' '}
              <Text style={{ color: C.red }} onPress={() => Linking.openURL('https://lonisbouss-cmyk.github.io/cap-medecin/confidentialite.html')}>Politique de confidentialité</Text>
            </Text>
          )}
          {mode !== 'reinit' && (
            <Pressable onPress={async () => { await AsyncStorage.setItem(SANS_COMPTE, '1').catch(() => {}); setEtat('ok'); }} style={{ padding: 14, alignItems: 'center', marginTop: 8 }}>
              <Text style={{ color: C.muted, fontWeight: '700' }}>Continuer sans compte ›</Text>
              <Text style={{ color: C.muted, fontSize: 12 }}>(progression gardée sur cet appareil seulement)</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- synchronisation de la progression ----------
// Fusion simple : la version la plus récente (champ « maj ») l’emporte.
export function useSync<T extends { maj?: number }>(user: User | null, st: T, ready: boolean, remplacer: (t: T) => void) {
  const [etat, setEtat] = useState<'local' | 'sync' | 'ok' | 'erreur'>(user ? 'sync' : 'local');
  const premier = useRef(true);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (!user || !ready) return;
    premier.current = true;
    (async () => {
      setEtat('sync');
      try {
        const r = await db.charger();
        if (r && (r.data?.maj || 0) > (st.maj || 0)) remplacer(r.data);
        else if (st.maj) await db.enregistrer(st);
        setEtat('ok');
      } catch {
        setEtat('erreur');
      }
      premier.current = false;
    })();
  }, [user?.id, ready]);

  useEffect(() => {
    if (!user || !ready || premier.current) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      try { await db.enregistrer(st); setEtat('ok'); } catch { setEtat('erreur'); }
    }, 2500);
    return () => clearTimeout(timer.current);
  }, [st]);

  return etat;
}

// ---------- bouton « Signaler une erreur » ----------
export function Signaler({ cible, libelle }: { cible: string; libelle: string }) {
  const [ouvert, setOuvert] = useState(false);
  const [txt, setTxt] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const mail = () => Linking.openURL(`mailto:${CONTACT}?subject=${encodeURIComponent('CAP Médecin – ' + libelle)}&body=${encodeURIComponent(txt)}`);
  if (!ouvert)
    return (
      <Pressable onPress={() => { setOuvert(true); setMsg(''); }} style={{ paddingVertical: 10, alignSelf: 'flex-start' }} hitSlop={6}>
        <Text style={{ color: C.muted, fontWeight: '700', fontSize: 13 }}>⚑ Signaler une erreur</Text>
      </Pressable>
    );
  return (
    <Card>
      <Text style={u.label}>Signaler une erreur · {libelle}</Text>
      {msg ? (
        <Text style={{ color: C.ok, fontWeight: '700' }}>{msg}</Text>
      ) : (
        <>
          <TextInput
            value={txt}
            onChangeText={setTxt}
            multiline
            placeholder="Qu’est-ce qui est faux ou imprécis ? (aucune donnée de patient)"
            placeholderTextColor={C.muted}
            style={{ minHeight: 80, borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 10, color: C.ink, textAlignVertical: 'top', fontSize: 15 }}
          />
          {busy ? (
            <ActivityIndicator color={C.red} style={{ marginVertical: 10 }} />
          ) : (
            <Btn
              title="Envoyer"
              disabled={txt.trim().length < 5}
              onPress={async () => {
                if (!CLOUD_OK) return mail();
                setBusy(true);
                try { await db.signaler(cible, txt.trim()); setMsg('Merci ! Ton signalement a bien été envoyé.'); setTxt(''); }
                catch { mail(); }
                setBusy(false);
              }}
            />
          )}
        </>
      )}
      <Btn kind="ghost" title="Fermer" onPress={() => setOuvert(false)} />
    </Card>
  );
}

// ---------- carte « Mon compte » ----------
export function Compte({ user, sortir, sync }: { user: User | null; sortir: () => void; sync: string }) {
  const [conf, setConf] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  if (!CLOUD_OK)
    return <Notice>Les comptes ne sont pas encore activés : ta progression est enregistrée sur cet appareil.</Notice>;
  if (!user)
    return (
      <Card>
        <Text style={[u.item, { marginBottom: 6 }]}>Tu utilises CAP Médecin sans compte : ta progression reste sur cet appareil.</Text>
        <Btn title="Se connecter ou créer un compte" onPress={async () => { await AsyncStorage.removeItem(SANS_COMPTE).catch(() => {}); sortir(); }} />
      </Card>
    );
  const etat = sync === 'ok' ? '✓ Progression sauvegardée dans ton compte' : sync === 'sync' ? '… Synchronisation en cours' : sync === 'erreur' ? '⚠ Hors ligne : la progression sera envoyée plus tard' : '';
  return (
    <Card>
      <Text style={u.label}>Connecté</Text>
      <Text style={{ color: C.ink, fontWeight: '800', fontSize: 16 }}>{user.email}</Text>
      {!!etat && <Text style={{ color: sync === 'erreur' ? C.gold : C.ok, marginTop: 4, fontSize: 13 }}>{etat}</Text>}
      <Btn kind="ghost" title="Se déconnecter" onPress={async () => { await auth.deconnexion(); sortir(); }} />
      {!conf ? (
        <Pressable onPress={() => setConf(true)} style={{ padding: 8, alignItems: 'center' }}>
          <Text style={{ color: C.ko, fontWeight: '700' }}>Supprimer mon compte</Text>
        </Pressable>
      ) : (
        <View style={{ backgroundColor: C.koL, borderRadius: 12, padding: 12, marginTop: 6 }}>
          <Text style={{ color: C.ink, marginBottom: 6 }}>Supprimer définitivement ton compte et ta progression enregistrée en ligne ? Cette action est irréversible.</Text>
          {!!err && <Text style={{ color: C.ko, marginBottom: 6 }}>{err}</Text>}
          {busy ? <ActivityIndicator color={C.ko} /> : (
            <Btn title="Oui, supprimer mon compte" onPress={async () => {
              setBusy(true); setErr('');
              try { await auth.supprimer(); sortir(); } catch (e: any) { setErr(e?.message || 'Échec de la suppression.'); }
              setBusy(false);
            }} />
          )}
          <Btn kind="ghost" title="Annuler" onPress={() => setConf(false)} />
        </View>
      )}
    </Card>
  );
}

export const COULEUR_SOMBRE = SOMBRE;
