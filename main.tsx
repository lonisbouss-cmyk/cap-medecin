// CAP MÉDECIN — Réviser la médecine, de la PASS/LAS à l’EDN et aux ECOS
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Linking, TextInput, Platform, SafeAreaView, StatusBar, BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { C, SOMBRE, Page, H1, H2, Sub, Card, Btn, Back, Tag, Chip, Chips, SearchBox, Bar, Notice, Row, norm, u } from './ui';
import { MATIERES, NIVEAUX, FICHES, CODES, ARTICLES, ARRETS, QCM, CAS, METHODES, LEXIQUE, ADAGES, ITEMS, PARTIES, ITEMS_FICHES, STATIONS, ARBRES, GESTES, RELU, TRIADES } from './data';
import type { Fiche, Article, Arret, Question, CasPratique, Methode, Niveau } from './types';
import { AuthGate, useSync, Signaler, Compte, CLOUD_OK, demanderTuteur, estAdmin, listerSignalements, marquerSignalement, type User } from './cloud';

// ---------- état sauvegardé ----------
type St = {
  fav: Record<string, 1>;
  lu: Record<string, number>;
  maitrise: Record<string, 1>;
  notes: Record<string, string>;
  qTot: number;
  qOk: number;
  parM: Record<string, [number, number]>;
  erreurs: string[];
  casDone: Record<string, number>;
  jours: string[];
  examBest: number;
  ecos?: Record<string, number>;
  favT?: string[];
  carnet?: { stages: { id: string; service: string; periode: string; notes: string }[]; gestes: Record<string, number> };
  niveau: Niveau | 'tous';
  box: Record<string, number>;
  due: Record<string, string>;
  maj?: number;
};
const VIDE: St = { fav: {}, lu: {}, maitrise: {}, notes: {}, qTot: 0, qOk: 0, parM: {}, erreurs: [], casDone: {}, jours: [], examBest: 0, niveau: 'tous', box: {}, due: {} };
const KEY = 'capm:state';
const today = () => new Date().toISOString().slice(0, 10);

const ficheById = (id: string) => FICHES.find((f) => f.id === id);
const artById = (id: string) => ARTICLES.find((a) => a.id === id);
const arretById = (id: string) => ARRETS.find((a) => a.id === id);
const matById = (id: string) => MATIERES.find((m) => m.id === id);
const codeNom = (id: string) => CODES.find((c) => c.id === id)?.court || id;
const qKey = (q: Question) => q.m + ':' + QCM.indexOf(q);

function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

// Mélange l'ordre des réponses (la bonne réponse change de place à chaque fois)
function melanger<T extends { c: string[]; a: number | number[] }>(q: T): T {
  const ordre = shuffle(q.c.map((_, i) => i));
  const a = Array.isArray(q.a) ? q.a.map((x) => ordre.indexOf(x)).sort((x, y) => x - y) : ordre.indexOf(q.a);
  return { ...q, c: ordre.map((i) => q.c[i]), a };
}

// QCM générés automatiquement à partir du mémo (valeurs, scores, formules)
function qcmArticles(n: number, code?: string): Question[] {
  const pool = ARTICLES.filter((a) => !code || a.code === code);
  return shuffle(pool)
    .slice(0, n)
    .map((a) => {
      const autres = shuffle(ARTICLES.filter((b) => b.code === a.code && b.id !== a.id && b.titre !== a.titre)).slice(0, 3);
      const choix = shuffle([a, ...autres]);
      return {
        q: `${codeNom(a.code)} — « ${a.num} » : quelle est la bonne réponse ?`,
        c: choix.map((x) => x.titre),
        a: choix.indexOf(a),
        e: a.texte.length > 260 ? a.texte.slice(0, 260) + '…' : a.texte,
        m: 'articles',
      };
    });
}

function qcmLexique(n: number): Question[] {
  return shuffle(LEXIQUE)
    .slice(0, n)
    .map((t) => {
      const autres = shuffle(LEXIQUE.filter((x) => x.t !== t.t)).slice(0, 3);
      const choix = shuffle([t, ...autres]);
      return { q: `Que signifie « ${t.t} » ?`, c: choix.map((x) => x.d), a: choix.indexOf(t), e: `${t.t} : ${t.d}`, m: 'lexique' };
    });
}

// ---------- application ----------
type Route =
  | { s: 'home' }
  | { s: 'cours' }
  | { s: 'matiere'; id: string }
  | { s: 'fiche'; id: string }
  | { s: 'codes' }
  | { s: 'article'; id: string }
  | { s: 'arrets' }
  | { s: 'arret'; id: string }
  | { s: 'train' }
  | { s: 'qcm'; titre: string; list: Question[]; exam?: boolean }
  | { s: 'caslist' }
  | { s: 'cas'; id: string }
  | { s: 'outils' }
  | { s: 'methodes' }
  | { s: 'methode'; id: string }
  | { s: 'lexique' }
  | { s: 'adages' }
  | { s: 'delais' }
  | { s: 'normes' }
  | { s: 'juridictions' }
  | { s: 'favoris' }
  | { s: 'flashmenu' }
  | { s: 'flash'; deck: string }
  | { s: 'notes' }
  | { s: 'progression' }
  | { s: 'reglages' }
  | { s: 'apropos' }
  | { s: 'compte' }
  | { s: 'items' }
  | { s: 'item'; n: number }
  | { s: 'ecos' }
  | { s: 'station'; id: string }
  | { s: 'arbres' }
  | { s: 'arbre'; id: string }
  | { s: 'carnet' }
  | { s: 'tuteur' }
  | { s: 'admin' }
  | { s: 'triades' };

const TABS: { id: string; label: string; ic: string; root: Route }[] = [
  { id: 'home', label: 'Accueil', ic: '⌂', root: { s: 'home' } },
  { id: 'cours', label: 'Fiches', ic: '❏', root: { s: 'cours' } },
  { id: 'outils', label: 'Outils', ic: '✚', root: { s: 'outils' } },
  { id: 'train', label: 'Réviser', ic: '✓', root: { s: 'train' } },
  { id: 'triades', label: 'Triades', ic: '△', root: { s: 'triades' } },
  { id: 'progres', label: 'Progrès', ic: '◔', root: { s: 'progression' } },
];

export default function Root() {
  return <AuthGate>{(user, sortir) => <MainApp key={user?.id || 'local'} user={user} sortir={sortir} />}</AuthGate>;
}

function MainApp({ user, sortir }: { user: User | null; sortir: () => void }) {
  const cle = user ? KEY + ':' + user.id : KEY;
  const [st, setSt] = useState<St>(VIDE);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState('home');
  const [stack, setStack] = useState<Route[]>([{ s: 'home' }]);

  useEffect(() => {
    (async () => {
      try {
        const raw = (await AsyncStorage.getItem(cle)) || (user ? await AsyncStorage.getItem(KEY) : null);
        if (raw) setSt({ ...VIDE, ...JSON.parse(raw) });
      } catch {}
      setReady(true);
    })();
  }, []);

  const save = (f: (s: St) => St) =>
    setSt((prev) => {
      const n = f(prev);
      const d = today();
      const n1 = n.jours.includes(d) ? n : { ...n, jours: [...n.jours, d].slice(-60) };
      const n2 = { ...n1, maj: Date.now() };
      AsyncStorage.setItem(cle, JSON.stringify(n2)).catch(() => {});
      return n2;
    });

  const sync = useSync(user, st, ready, (t) => {
    const n = { ...VIDE, ...t };
    AsyncStorage.setItem(cle, JSON.stringify(n)).catch(() => {});
    setSt(n);
  });

  const route = stack[stack.length - 1];
  const go = (r: Route) => setStack((s) => [...s, r]);
  const back = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  const switchTab = (id: string) => {
    const t = TABS.find((x) => x.id === id) || TABS[0];
    setTab(id);
    setStack([t.root]);
  };

  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (stack.length > 1) {
        back();
        return true;
      }
      if (tab !== 'home') {
        switchTab('home');
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [stack, tab]);

  const openFiche = (id: string) => {
    if (ficheById(id)) go({ s: 'fiche', id });
  };
  const openArt = (id: string) => {
    if (artById(id)) go({ s: 'article', id });
  };
  const openArret = (id: string) => {
    if (arretById(id)) go({ s: 'arret', id });
  };
  const startQcm = (titre: string, list: Question[], exam?: boolean) => {
    const prep = list.map((q) => ({ ...melanger(q), k: QCM.includes(q) ? qKey(q) : undefined }));
    if (prep.length) go({ s: 'qcm', titre, list: prep, exam });
  };

  if (!ready) return <View style={{ flex: 1, backgroundColor: C.bg }} />;

  const P = { st, save, go, back, openFiche, openArt, openArret, startQcm, switchTab, user, sortir, sync, racine: stack.length === 1 };
  let screen: any = null;
  switch (route.s) {
    case 'home': screen = <Home {...P} />; break;
    case 'cours': screen = <Cours {...P} />; break;
    case 'matiere': screen = <MatiereView {...P} id={route.id} />; break;
    case 'fiche': screen = <FicheView {...P} id={route.id} />; break;
    case 'codes': screen = <Codes {...P} />; break;
    case 'article': screen = <ArticleView {...P} id={route.id} />; break;
    case 'arrets': screen = <Arrets {...P} />; break;
    case 'arret': screen = <ArretView {...P} id={route.id} />; break;
    case 'train': screen = <Train {...P} />; break;
    case 'qcm': screen = <QcmRun key={stack.length + route.titre} {...P} titre={route.titre} list={route.list} exam={route.exam} />; break;
    case 'caslist': screen = <CasList {...P} />; break;
    case 'cas': screen = <CasView key={route.id} {...P} id={route.id} />; break;
    case 'outils': screen = <Outils {...P} />; break;
    case 'methodes': screen = <Methodes {...P} />; break;
    case 'methode': screen = <MethodeView {...P} id={route.id} />; break;
    case 'lexique': screen = <Lexique {...P} />; break;
    case 'adages': screen = <Adages {...P} />; break;
    case 'delais': screen = <Delais {...P} />; break;
    case 'normes': screen = <Normes {...P} />; break;
    case 'juridictions': screen = <Juridictions {...P} />; break;
    case 'favoris': screen = <Favoris {...P} />; break;
    case 'flashmenu': screen = <FlashMenu {...P} />; break;
    case 'flash': screen = <FlashRun key={route.deck} {...P} deck={route.deck} />; break;
    case 'notes': screen = <MesNotes {...P} />; break;
    case 'progression': screen = <Progression {...P} />; break;
    case 'reglages': screen = <Reglages {...P} />; break;
    case 'apropos': screen = <APropos {...P} />; break;
    case 'compte': screen = <CompteView {...P} />; break;
    case 'items': screen = <ItemsView {...P} />; break;
    case 'item': screen = <ItemView key={route.n} {...P} n={route.n} />; break;
    case 'ecos': screen = <EcosList {...P} />; break;
    case 'station': screen = <StationView key={route.id} {...P} id={route.id} />; break;
    case 'arbres': screen = <ArbresList {...P} />; break;
    case 'arbre': screen = <ArbreView key={route.id} {...P} id={route.id} />; break;
    case 'carnet': screen = <Carnet {...P} />; break;
    case 'tuteur': screen = <Tuteur {...P} />; break;
    case 'admin': screen = <AdminView {...P} />; break;
    case 'triades': screen = <TriadesView {...P} />; break;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: C.bg }}>
      <StatusBar barStyle="light-content" backgroundColor="#12355B" />
      <View style={[s.header, { paddingTop: (Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0) + 8 }]}>
        <View style={s.logo}><Text style={{ color: '#fff', fontWeight: '900', fontSize: 17, marginTop: -1 }}>✚</Text></View>
        <Text style={s.brand}>CAP MÉDECIN</Text>
        <Pressable onPress={() => { setTab('outils'); setStack([{ s: 'outils' }, { s: 'compte' }]); }} hitSlop={8} style={s.avatar}>
          <Text style={{ color: '#fff', fontWeight: '900' }}>{user ? user.email.slice(0, 1).toUpperCase() : '👤'}</Text>
        </Pressable>
      </View>
      <View key={String(stack.length) + route.s} style={{ flex: 1 }}>{screen}</View>
      <View style={s.tabbar}>
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <Pressable key={t.id} onPress={() => switchTab(t.id)} style={s.tab} hitSlop={4}>
              <Text style={{ fontSize: 19, color: on ? C.red : C.muted }}>{t.ic}</Text>
              <Text style={{ fontSize: 11, fontWeight: on ? '800' : '600', color: on ? C.red : C.muted, marginTop: 2 }}>{t.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

type PP = {
  st: St;
  save: (f: (s: St) => St) => void;
  go: (r: Route) => void;
  back: () => void;
  openFiche: (id: string) => void;
  openArt: (id: string) => void;
  openArret: (id: string) => void;
  startQcm: (t: string, l: Question[], exam?: boolean) => void;
  switchTab: (id: string) => void;
  user: User | null;
  sortir: () => void;
  sync: string;
  racine: boolean;
};

// ---------- Accueil ----------
function serie(jours: string[]) {
  const set = new Set(jours);
  let n = 0;
  const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
function duJour<T>(arr: T[], sel: number): T {
  const d = new Date();
  const k = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate() + sel;
  return arr[k % arr.length];
}

function Home({ st, go, openFiche, openArt, openArret, startQcm, switchTab, user }: PP) {
  const lus = Object.keys(st.lu).length;
  const pct = st.qTot ? Math.round((100 * st.qOk) / st.qTot) : 0;
  const art = duJour(ARTICLES, 3);
  const arr = duJour(ARRETS, 7);
  const ad = duJour(ADAGES, 11);
  const derniere = Object.entries(st.lu).sort((a, b) => b[1] - a[1])[0];
  const fDer = derniere ? ficheById(derniere[0]) : null;
  return (
    <Page>
      <View style={s.hero}>
        <Text style={s.heroL}>{user ? 'Bon retour !' : 'Bienvenue'}</Text>
        <Text style={s.heroT}>Réviser la médecine, de la PASS/LAS à l’EDN</Text>
        <View style={{ flexDirection: 'row', marginTop: 14, gap: 10 }}>
          <Stat v={String(lus)} l={`fiches lues / ${FICHES.length}`} />
          <Stat v={st.qTot ? pct + ' %' : '—'} l="réussite QCM" />
          <Stat v={String(serie(st.jours))} l="jours d'affilée" />
        </View>
      </View>

      {fDer && (
        <Card onPress={() => openFiche(fDer.id)}>
          <Text style={u.label}>Reprendre</Text>
          <Text style={{ color: C.ink, fontWeight: '800', fontSize: 16 }}>{fDer.titre} ›</Text>
          <Text style={{ color: C.muted, marginTop: 2 }}>{matById(fDer.m)?.nom}</Text>
        </Card>
      )}

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{ flex: 1 }}>
          <Card onPress={() => startQcm('Défi du jour', shuffle(QCM).slice(0, 10))} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
            <Text style={{ fontSize: 22 }}>🎯</Text>
            <Text style={{ fontWeight: '800', color: C.ink, marginTop: 4 }}>Défi du jour</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>10 questions mélangées</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card onPress={() => go({ s: 'caslist' })} style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
            <Text style={{ fontSize: 22 }}>📂</Text>
            <Text style={{ fontWeight: '800', color: C.ink, marginTop: 4 }}>Cas cliniques</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>{CAS.length} sujets corrigés</Text>
          </Card>
        </View>
      </View>

      <H2>Repère du jour</H2>
      <Card onPress={() => openArt(art.id)}>
        <Tag label={codeNom(art.code)} />
        <Text style={{ fontWeight: '800', color: C.ink, marginBottom: 2 }}>{art.num}</Text>
        <Text style={{ fontWeight: '700', color: C.red, marginBottom: 4 }}>{art.titre}</Text>
        <Text style={{ color: C.ink, lineHeight: 21 }} numberOfLines={4}>{art.texte}</Text>
      </Card>

      <H2>Médicament du jour</H2>
      <Card onPress={() => openArret(arr.id)}>
        <Tag label={matById(arr.m)?.nom || ''} color={C.red} />
        <Text style={{ fontWeight: '800', color: C.ink, marginBottom: 4 }}>{arr.nom}</Text>
        <Text style={{ color: C.ink, lineHeight: 21 }} numberOfLines={3}>{arr.apport}</Text>
      </Card>

      <H2>Mnémo du jour</H2>
      <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{ad.la}</Text>
        <Text style={{ color: C.ink, marginTop: 4 }}>« {ad.fr} »</Text>
        <Text style={{ color: C.muted, marginTop: 6, lineHeight: 19 }}>{ad.sens}</Text>
      </Card>

      <H2>Accès rapide</H2>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        {[
          ['📚', 'Fiches', () => switchTab('cours')],
          ['⚕️', 'Mémo', () => go({ s: 'codes' })],
          ['🧮', 'Calculateurs', () => go({ s: 'delais' })],
          ['📂', 'Cas cliniques', () => go({ s: 'caslist' })],
          ['△', 'Triades', () => switchTab('triades')],
          ['📈', 'Progrès', () => switchTab('progres')],
          ['💊', 'Médicaments', () => go({ s: 'arrets' })],
          ['✍️', 'Méthodologie', () => go({ s: 'methodes' })],
          ['🃏', 'Révision express', () => go({ s: 'flashmenu' })],
          ['★', 'Favoris', () => go({ s: 'favoris' })],
        ].map(([ic, l, f]: any) => (
          <Pressable key={l} onPress={f} style={s.quick}>
            <Text style={{ fontSize: 20 }}>{ic}</Text>
            <Text style={{ color: C.ink, fontWeight: '700', fontSize: 12, marginTop: 4, textAlign: 'center' }}>{l}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ color: C.muted, fontSize: 11, marginTop: 18, lineHeight: 16 }}>
        Support de révision pour étudiants. Il ne remplace ni les référentiels des collèges, ni les recommandations officielles, ni un avis médical.
      </Text>
    </Page>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: 10 }}>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900' }}>{v}</Text>
      <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>{l}</Text>
    </View>
  );
}

// ---------- Cours ----------
function Cours({ st, save, go, openFiche }: PP) {
  const [q, setQ] = useState('');
  const niv = st.niveau;
  const mats = MATIERES.filter((m) => niv === 'tous' || m.niv === niv);
  const res = q.trim().length > 1 ? FICHES.filter((f) => norm(f.titre + ' ' + f.intro + ' ' + f.parts.map((p) => p.t + ' ' + p.l.join(' ')).join(' ')).includes(norm(q.trim()))) : [];
  return (
    <Page>
      <H1>Fiches de cours</H1>
      <Sub>{FICHES.length} fiches dans {MATIERES.length} matières, avec les repères et les médicaments à connaître.</Sub>
      <SearchBox value={q} onChange={setQ} placeholder="Chercher une notion (ex. : sepsis)" />
      {q.trim().length > 1 ? (
        <>
          <Text style={u.label}>{res.length} résultat(s)</Text>
          {res.map((f) => (
            <FicheRow key={f.id} f={f} st={st} onPress={() => openFiche(f.id)} />
          ))}
        </>
      ) : (
        <>
          <Chips>
            <Chip label="Tous niveaux" on={niv === 'tous'} onPress={() => save((x) => ({ ...x, niveau: 'tous' }))} />
            {NIVEAUX.map((n) => (
              <Chip key={n} label={n} on={niv === n} onPress={() => save((x) => ({ ...x, niveau: n }))} />
            ))}
          </Chips>
          {mats.map((m) => {
            const fs = FICHES.filter((f) => f.m === m.id);
            const lus = fs.filter((f) => st.lu[f.id]).length;
            return (
              <Card key={m.id} onPress={() => go({ s: 'matiere', id: m.id })}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 26, marginRight: 12 }}>{m.icone}</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{m.nom}</Text>
                    <Text style={{ color: C.muted, fontSize: 12, marginBottom: 6 }}>{m.niv} · {fs.length} fiches</Text>
                    <Bar value={fs.length ? lus / fs.length : 0} />
                  </View>
                </View>
              </Card>
            );
          })}
        </>
      )}
    </Page>
  );
}

function FicheRow({ f, st, onPress }: { f: Fiche; st: St; onPress: () => void }) {
  return (
    <Card onPress={onPress} style={{ paddingVertical: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: st.maitrise[f.id] ? C.ok : st.lu[f.id] ? C.gold : C.line, fontSize: 16, marginRight: 10 }}>●</Text>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre}</Text>
          <Text style={{ color: C.muted, fontSize: 12 }} numberOfLines={1}>{matById(f.m)?.nom}</Text>
        </View>
        {st.fav[f.id] ? <Text style={{ color: C.gold, marginLeft: 6 }}>★</Text> : null}
      </View>
    </Card>
  );
}

function MatiereView({ id, st, back, openFiche, startQcm, go }: PP & { id: string }) {
  const m = matById(id)!;
  const fs = FICHES.filter((f) => f.m === id);
  const qs = QCM.filter((q) => q.m === id);
  const cas = CAS.filter((c) => c.m === id);
  const arr = ARRETS.filter((a) => a.m === id);
  return (
    <Page>
      <Back onPress={back} label="Cours" />
      <Text style={{ fontSize: 34 }}>{m.icone}</Text>
      <H1>{m.nom}</H1>
      <Tag label={m.niv} />
      <Sub>{m.desc}</Sub>
      {qs.length > 0 && <Btn title={`S'entraîner (${qs.length} QCM)`} onPress={() => startQcm(m.nom, shuffle(qs))} />}
      <H2>Fiches</H2>
      {fs.map((f) => (
        <FicheRow key={f.id} f={f} st={st} onPress={() => openFiche(f.id)} />
      ))}
      {cas.length > 0 && (
        <>
          <H2>Cas cliniques</H2>
          {cas.map((c) => (
            <Card key={c.id} onPress={() => go({ s: 'cas', id: c.id })} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{c.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      {arr.length > 0 && (
        <>
          <H2>Médicaments</H2>
          {arr.map((a) => (
            <Card key={a.id} onPress={() => go({ s: 'arret', id: a.id })} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{a.nom}</Text>
              <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}</Text>
            </Card>
          ))}
        </>
      )}
    </Page>
  );
}

function FicheView({ id, st, save, back, openArt, openArret, openFiche, go }: PP & { id: string }) {
  const f = ficheById(id)!;
  const m = matById(f.m);
  const [note, setNote] = useState(st.notes[id] || '');
  useEffect(() => {
    save((x) => ({ ...x, lu: { ...x.lu, [id]: Date.now() } }));
  }, [id]);
  const fav = !!st.fav[id];
  const ok = !!st.maitrise[id];
  const memes = FICHES.filter((x) => x.m === f.m && x.id !== f.id).slice(0, 4);
  return (
    <Page>
      <Back onPress={back} />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Tag label={m?.nom || ''} />
        <Tag label={m?.niv || ''} color={C.navy} />
        {itemsDe(f).map((n) => (
          <Pressable key={n} onPress={() => go({ s: 'item', n })}><Tag label={'Item ' + n} color={C.gold} /></Pressable>
        ))}
      </View>
      <H1>{f.titre}</H1>
      <Text style={[u.item, { marginBottom: 12 }]}>{f.intro}</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 6 }}>
        <View style={{ flex: 1 }}>
          <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Favori' : '☆ Favori'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[id]) delete n[id]; else n[id] = 1; return { ...x, fav: n }; })} />
        </View>
        <View style={{ flex: 1 }}>
          <Btn kind={ok ? 'primary' : 'ghost'} title={ok ? '✓ Maîtrisée' : 'Je maîtrise'} onPress={() => save((x) => { const n = { ...x.maitrise }; if (n[id]) delete n[id]; else n[id] = 1; return { ...x, maitrise: n }; })} />
        </View>
      </View>
      {f.parts.map((p, i) => (
        <Card key={i}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Text style={{ fontWeight: '900', color: C.red, fontSize: 15, flex: 1 }}>{p.t}</Text>
            {!!rangDe(f, i) && <Text style={[s.rang, rangDe(f, i) === 'A' ? { backgroundColor: C.ok } : { backgroundColor: C.gold }]}>Rang {rangDe(f, i)}</Text>}
          </View>
          {p.l.map((l, k) => (
            <View key={k} style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ color: C.gold, fontWeight: '900', marginRight: 8, lineHeight: 22 }}>•</Text>
              <Text style={[u.item, { flex: 1 }]}>{l}</Text>
            </View>
          ))}
        </Card>
      ))}
      <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ink, marginBottom: 8 }}>À retenir</Text>
        {f.retenir.map((r, k) => (
          <Text key={k} style={[u.item, { marginBottom: 4 }]}>✓ {r}</Text>
        ))}
      </Card>
      {!!f.art?.length && (
        <>
          <H2>Repères (valeurs, scores)</H2>
          {f.art.map((aid) => {
            const a = artById(aid);
            if (!a) return null;
            return (
              <Card key={aid} onPress={() => openArt(aid)} style={{ paddingVertical: 12 }}>
                <Text style={{ fontWeight: '800', color: C.navy }}>{a.num} ›</Text>
                <Text style={{ color: C.ink }}>{a.titre}</Text>
              </Card>
            );
          })}
        </>
      )}
      {!!f.arrets?.length && (
        <>
          <H2>Médicaments</H2>
          {f.arrets.map((rid) => {
            const a = arretById(rid);
            if (!a) return null;
            return (
              <Card key={rid} onPress={() => openArret(rid)} style={{ paddingVertical: 12 }}>
                <Text style={{ fontWeight: '800', color: C.red }}>{a.nom} ›</Text>
                <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}</Text>
              </Card>
            );
          })}
        </>
      )}
      <H2>Mes notes</H2>
      <TextInput
        value={note}
        onChangeText={setNote}
        onBlur={() => save((x) => ({ ...x, notes: { ...x.notes, [id]: note } }))}
        multiline
        placeholder="Ajoute tes remarques, moyens mnémotechniques…"
        placeholderTextColor={C.muted}
        style={[u.card, { minHeight: 90, color: C.ink, textAlignVertical: 'top', fontSize: 15 }]}
      />
      {memes.length > 0 && (
        <>
          <H2>Dans la même matière</H2>
          {memes.map((x) => (
            <Card key={x.id} onPress={() => openFiche(x.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{x.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      <Text style={{ color: C.muted, fontSize: 12, lineHeight: 17, marginTop: 6 }}>{'Fiche de synthèse rédigée à visée pédagogique (mise à jour : novembre 2026). Rangs A/B indicatifs. Relecture médicale : ' + (RELU.par ? RELU.par + (RELU.le ? ', ' + RELU.le : '') : 'en cours') + '. Ne remplace ni les référentiels des collèges ni les recommandations officielles.'}</Text>
      <Signaler cible={'fiche:' + f.id} libelle={f.titre} />
    </Page>
  );
}

// ---------- Mémo ----------
function Codes({ st, openArt, go, back }: PP) {
  const [code, setCode] = useState<string>('tous');
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = ARTICLES.filter((a) => (code === 'tous' || a.code === code) && (!nq || norm(a.num + ' ' + a.titre + ' ' + a.texte).includes(nq) || norm('article ' + a.num) === nq));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mémo</H1>
      <Sub>{ARTICLES.length} repères (valeurs normales de l’adulte, scores, formules) et {ARRETS.length} classes de médicaments.</Sub>
      <Card onPress={() => go({ s: 'arrets' })} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>💊 Médicaments : classes, indications, effets indésirables ›</Text>
      </Card>
      <SearchBox value={q} onChange={setQ} placeholder="Valeur, score ou formule (ex. : kaliémie, Glasgow)" />
      <Chips>
        <Chip label="Tous" on={code === 'tous'} onPress={() => setCode('tous')} />
        {CODES.map((c) => (
          <Chip key={c.id} label={c.court} on={code === c.id} onPress={() => setCode(c.id)} />
        ))}
      </Chips>
      {code !== 'tous' && <Text style={u.label}>{CODES.find((c) => c.id === code)?.nom}</Text>}
      {list.map((a) => (
        <Card key={a.id} onPress={() => openArt(a.id)} style={{ paddingVertical: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800', color: C.navy }}>{a.num} <Text style={{ color: C.muted, fontWeight: '600' }}>· {codeNom(a.code)}</Text></Text>
              <Text style={{ color: C.ink }}>{a.titre}</Text>
            </View>
            {st.fav['a:' + a.id] ? <Text style={{ color: C.gold }}>★</Text> : null}
          </View>
        </Card>
      ))}
      {list.length === 0 && <Notice>Aucun repère ne correspond. Essaie un autre mot-clé.</Notice>}
    </Page>
  );
}

const LIENS: Record<string, [string, string]> = {
  formule: ['Calculateurs', 'delais'],
  score: ['Calculateurs', 'delais'],
};

function ArticleView({ id, st, save, back, openFiche, go }: PP & { id: string }) {
  const a = artById(id)!;
  const k = 'a:' + id;
  const fav = !!st.fav[k];
  const fiches = FICHES.filter((f) => f.art?.includes(id));
  const voisins = ARTICLES.filter((x) => x.code === a.code);
  const i = voisins.indexOf(a);
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={CODES.find((c) => c.id === a.code)?.nom || ''} />
      <H1>{a.num}</H1>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>{a.code === 'score' ? 'Score' : a.code === 'formule' ? 'Formule' : 'Valeur de référence'}</Text>
        <Text style={{ color: C.ink, fontSize: 18, fontWeight: '900' }}>{a.titre}</Text>
      </Card>
      <Card style={{ borderLeftWidth: 4, borderLeftColor: C.red }}>
        <Text style={u.label}>Interprétation</Text>
        <Text style={{ color: C.ink, fontSize: 16, lineHeight: 25 }}>{a.texte}</Text>
      </Card>
      <Notice tone="warn">Valeurs indicatives de l’adulte : les normes varient selon les laboratoires et les référentiels.</Notice>
      <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Dans mes favoris' : '☆ Ajouter aux favoris'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[k]) delete n[k]; else n[k] = 1; return { ...x, fav: n }; })} />
      {LIENS[a.code] && <Btn kind="ghost" title={LIENS[a.code][0] + ' ›'} onPress={() => go({ s: 'delais' })} />}
      {fiches.length > 0 && (
        <>
          <H2>Fiches liées</H2>
          {fiches.map((f) => (
            <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <View style={{ flex: 1 }}>{i > 0 && <Btn kind="ghost" title={`‹ ${voisins[i - 1].num}`} onPress={() => go({ s: 'article', id: voisins[i - 1].id })} />}</View>
        <View style={{ flex: 1 }}>{i < voisins.length - 1 && <Btn kind="ghost" title={`${voisins[i + 1].num} ›`} onPress={() => go({ s: 'article', id: voisins[i + 1].id })} />}</View>
      </View>
    </Page>
  );
}

function Arrets({ back, go }: PP) {
  const [q, setQ] = useState('');
  const [m, setM] = useState('tous');
  const mats = MATIERES.filter((x) => ARRETS.some((a) => a.m === x.id));
  const nq = norm(q.trim());
  const list = ARRETS.filter((a) => (m === 'tous' || a.m === m) && (!nq || norm(a.nom + ' ' + a.apport + ' ' + a.jur + ' ' + a.date).includes(nq)));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Médicaments</H1>
      <Sub>Les grandes classes thérapeutiques : molécules, indications, mécanisme, effets indésirables.</Sub>
      <SearchBox value={q} onChange={setQ} placeholder="Classe ou molécule (ex. : héparine)" />
      <Chips>
        <Chip label="Toutes" on={m === 'tous'} onPress={() => setM('tous')} />
        {mats.map((x) => (
          <Chip key={x.id} label={x.nom} on={m === x.id} onPress={() => setM(x.id)} />
        ))}
      </Chips>
      {list.map((a) => (
        <Card key={a.id} onPress={() => go({ s: 'arret', id: a.id })} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{a.nom}</Text>
          <Text style={{ color: C.red, fontSize: 12, fontWeight: '700', marginBottom: 2 }}>{a.jur}</Text>
          <Text style={{ color: C.muted, fontSize: 13 }} numberOfLines={2}>{a.apport}</Text>
        </Card>
      ))}
    </Page>
  );
}

function ArretView({ id, st, save, back, openFiche }: PP & { id: string }) {
  const a = arretById(id)!;
  const k = 'r:' + id;
  const fav = !!st.fav[k];
  const fiches = FICHES.filter((f) => f.arrets?.includes(id));
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={matById(a.m)?.nom || ''} />
      <H1>{a.nom}</H1>
      <Text style={{ color: C.red, fontWeight: '800', marginBottom: 10 }}>{a.jur}</Text>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>Indications principales</Text>
        <Text style={{ color: C.ink, fontSize: 16, lineHeight: 24 }}>{a.date}</Text>
      </Card>
      <Card style={{ borderLeftWidth: 4, borderLeftColor: C.gold }}>
        <Text style={u.label}>Mécanisme, effets indésirables, précautions</Text>
        <Text style={{ color: C.ink, fontSize: 16, lineHeight: 24 }}>{a.apport}</Text>
      </Card>
      <Notice tone="warn">Synthèse pédagogique : se référer au résumé des caractéristiques du produit (RCP) avant toute prescription.</Notice>
      <Btn kind={fav ? 'gold' : 'ghost'} title={fav ? '★ Dans mes favoris' : '☆ Ajouter aux favoris'} onPress={() => save((x) => { const n = { ...x.fav }; if (n[k]) delete n[k]; else n[k] = 1; return { ...x, fav: n }; })} />
      {fiches.length > 0 && (
        <>
          <H2>Fiches liées</H2>
          {fiches.map((f) => (
            <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
            </Card>
          ))}
        </>
      )}
    </Page>
  );
}

// ---------- S'entraîner ----------
function Train({ st, startQcm, go }: PP) {
  const [niv, setNiv] = useState<string>('tous');
  const mats = MATIERES.filter((m) => (niv === 'tous' || m.niv === niv) && QCM.some((q) => q.m === m.id));
  const errs = QCM.filter((q) => st.erreurs.includes(qKey(q)));
  const pool = QCM.filter((q) => niv === 'tous' || matById(q.m)?.niv === niv);
  return (
    <Page>
      <H1>Réviser</H1>
      <Sub>{QCM.length} QCM corrigés, {CAS.length} cas cliniques, et des quiz générés à partir du mémo et du lexique.</Sub>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 4 }}>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.ink }}>{st.qTot}</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>questions faites</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.ok }}>{st.qTot ? Math.round((100 * st.qOk) / st.qTot) : 0} %</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>de réussite</Text>
          </Card>
        </View>
        <View style={{ flex: 1 }}>
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: '900', color: C.gold }}>{st.examBest}/20</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>meilleur examen</Text>
          </Card>
        </View>
      </View>

      <Card onPress={() => startQcm('Examen blanc', shuffle(pool).slice(0, 20), true)} style={{ backgroundColor: C.navy, borderColor: C.navy }}>
        <Text style={{ color: SOMBRE ? '#12151D' : '#fff', fontWeight: '900', fontSize: 16 }}>📝 Examen blanc</Text>
        <Text style={{ color: SOMBRE ? '#12151D' : 'rgba(255,255,255,0.85)', marginTop: 2 }}>20 questions, 20 minutes, note sur 20</Text>
      </Card>
      <Card onPress={() => go({ s: 'flashmenu' })} style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🃏 Révision express (cartes mémoire) ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Médicaments, valeurs, mnémos et lexique, avec répétition espacée.</Text>
      </Card>
      <Card onPress={() => go({ s: 'tuteur' })} style={{ backgroundColor: C.redL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🤖 Tuteur IA ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Pose tes questions de cours, reçois une explication.</Text>
      </Card>
      <Card onPress={() => go({ s: 'ecos' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>🗣️ Stations ECOS chronométrées ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>{STATIONS.length} stations avec grille d’auto-évaluation.</Text>
      </Card>
      <Card onPress={() => startQcm('QRM format EDN', shuffle(QCM.filter((q) => Array.isArray(q.a))).slice(0, 15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>☑️ QRM format EDN ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>{QCM.filter((q) => Array.isArray(q.a)).length} questions à réponses multiples, notation par discordances.</Text>
      </Card>
      <Card onPress={() => go({ s: 'caslist' })}>
        <Text style={{ fontWeight: '800', color: C.ink }}>📂 Cas cliniques corrigés ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>Dossiers progressifs pas à pas, du diagnostic au traitement.</Text>
      </Card>
      <Card onPress={() => startQcm('Valeurs et scores', qcmArticles(15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>⚕️ Valeurs normales et scores ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>15 questions tirées du mémo.</Text>
      </Card>
      <Card onPress={() => startQcm('Vocabulaire médical', qcmLexique(15))}>
        <Text style={{ fontWeight: '800', color: C.ink }}>📖 Vocabulaire médical ›</Text>
        <Text style={{ color: C.muted, fontSize: 13 }}>15 définitions à reconnaître.</Text>
      </Card>
      {errs.length > 0 && (
        <Card onPress={() => startQcm('Mes erreurs', shuffle(errs))} style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>🔁 Mes erreurs ({errs.length}) ›</Text>
          <Text style={{ color: C.muted, fontSize: 13 }}>Une question réussie ici sort de la liste.</Text>
        </Card>
      )}

      <H2>Par matière</H2>
      <Chips>
        <Chip label="Tous niveaux" on={niv === 'tous'} onPress={() => setNiv('tous')} />
        {NIVEAUX.map((n) => (
          <Chip key={n} label={n} on={niv === n} onPress={() => setNiv(n)} />
        ))}
      </Chips>
      {mats.map((m) => {
        const qs = QCM.filter((q) => q.m === m.id);
        const r = st.parM[m.id];
        return (
          <Card key={m.id} onPress={() => startQcm(m.nom, shuffle(qs))} style={{ paddingVertical: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginRight: 10 }}>{m.icone}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: '700', color: C.ink }}>{m.nom}</Text>
                <Text style={{ color: C.muted, fontSize: 12 }}>{qs.length} questions{r ? ` · ${Math.round((100 * r[1]) / Math.max(1, r[0]))} % réussies` : ''}</Text>
              </View>
              <Text style={{ color: C.muted }}>›</Text>
            </View>
          </Card>
        );
      })}
    </Page>
  );
}

// Bonnes réponses (QRU : un nombre ; QRM : une liste)
const bonnes = (q: Question): number[] => (Array.isArray(q.a) ? q.a : [q.a]);
const estQrm = (q: Question) => Array.isArray(q.a);
// Notation de type EDN : 0 discordance = 1 point, 1 = 0,5, 2 = 0,2, 3 ou plus = 0
function noter(q: Question, choix: number[]): number {
  const b = bonnes(q);
  if (!estQrm(q)) return choix.length === 1 && choix[0] === b[0] ? 1 : 0;
  let d = 0;
  q.c.forEach((_, k) => { if (b.includes(k) !== choix.includes(k)) d++; });
  return d === 0 ? 1 : d === 1 ? 0.5 : d === 2 ? 0.2 : 0;
}
const fmt = (x: number) => (Math.round(x * 10) / 10).toString().replace('.', ',');

function QcmRun({ titre, list, exam, st, save, back }: PP & { titre: string; list: Question[]; exam?: boolean }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number[]>([]);
  const [valide, setValide] = useState(false);
  const [score, setScore] = useState(0);
  const [fin, setFin] = useState(false);
  const [reste, setReste] = useState(exam ? list.length * 60 : 0);
  const [rep, setRep] = useState<number[][]>([]);
  const q = list[Math.min(i, list.length - 1)];
  const multi = estQrm(q);

  useEffect(() => {
    if (!exam || fin) return;
    const t = setInterval(() => setReste((r) => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [exam, fin]);
  useEffect(() => {
    if (exam && reste === 0 && !fin) terminer(score);
  }, [reste]);

  const enregistrer = (pts: number) => {
    const ok = pts === 1;
    const k: string | null = (q as any).k || null;
    save((x) => {
      const pm = { ...x.parM };
      if (q.m !== 'articles' && q.m !== 'lexique') {
        const r = pm[q.m] || [0, 0];
        pm[q.m] = [r[0] + 1, r[1] + (ok ? 1 : 0)];
      }
      let er = x.erreurs;
      if (k) er = ok ? er.filter((e) => e !== k) : er.includes(k) ? er : [...er, k];
      return { ...x, qTot: x.qTot + 1, qOk: x.qOk + (ok ? 1 : 0), parM: pm, erreurs: er };
    });
  };

  const valider = (choix: number[]) => {
    if (valide || !choix.length) return;
    const pts = noter(q, choix);
    setValide(true);
    setScore((x) => x + pts);
    setRep((r) => [...r, choix]);
    enregistrer(pts);
    if (exam) setTimeout(() => suivant(score + pts), 350);
  };
  const toucher = (k: number) => {
    if (valide) return;
    if (!multi) { setSel([k]); valider([k]); return; }
    setSel((s0) => (s0.includes(k) ? s0.filter((x) => x !== k) : [...s0, k]));
  };
  const terminer = (sc: number) => {
    setFin(true);
    if (exam) {
      const note = Math.round((20 * sc) / list.length);
      save((x) => ({ ...x, examBest: Math.max(x.examBest, note) }));
    }
  };
  const suivant = (sc = score) => {
    if (i + 1 >= list.length) terminer(sc);
    else {
      setI(i + 1);
      setSel([]);
      setValide(false);
    }
  };

  if (fin) {
    const note = Math.round((20 * score) / list.length);
    return (
      <Page>
        <Back onPress={back} />
        <View style={s.hero}>
          <Text style={s.heroL}>{titre}</Text>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: '900' }}>{exam ? `${note}/20` : `${fmt(score)}/${list.length}`}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.85)' }}>{score >= list.length * 0.8 ? 'Excellent travail !' : score >= list.length * 0.5 ? 'Bonne base, continue.' : 'Relis les fiches puis recommence.'}</Text>
        </View>
        {exam && (
          <>
            <H2>Correction</H2>
            {list.slice(0, rep.length).map((qq, k) => {
              const pts = noter(qq, rep[k] || []);
              return (
                <Card key={k} style={{ borderLeftWidth: 4, borderLeftColor: pts === 1 ? C.ok : pts > 0 ? C.gold : C.ko }}>
                  <Text style={{ fontWeight: '700', color: C.ink, marginBottom: 4 }}>{qq.q}</Text>
                  {bonnes(qq).map((b) => <Text key={b} style={{ color: C.ok, fontWeight: '700' }}>✓ {qq.c[b]}</Text>)}
                  {(rep[k] || []).filter((x) => !bonnes(qq).includes(x)).map((x) => <Text key={x} style={{ color: C.ko }}>✗ {qq.c[x]}</Text>)}
                  {estQrm(qq) && <Text style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{fmt(pts)} point</Text>}
                  <Text style={{ color: C.muted, marginTop: 4, lineHeight: 19 }}>{qq.e}</Text>
                </Card>
              );
            })}
          </>
        )}
        <Btn title="Terminer" onPress={back} />
      </Page>
    );
  }

  const mm = Math.floor(reste / 60);
  const ss = String(reste % 60).padStart(2, '0');
  const pts = valide ? noter(q, sel) : 0;
  return (
    <Page>
      <Back onPress={back} label="Quitter" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: C.muted, fontWeight: '700' }}>{titre} · {i + 1}/{list.length}</Text>
        {exam ? <Text style={{ color: reste < 120 ? C.ko : C.navy, fontWeight: '900' }}>⏱ {mm}:{ss}</Text> : <Text style={{ color: C.ok, fontWeight: '800' }}>{fmt(score)} ✓</Text>}
      </View>
      <Bar value={(i + (valide ? 1 : 0)) / list.length} />
      {multi && <View style={{ marginTop: 12 }}><Tag label="QRM · plusieurs réponses possibles" color={C.gold} /></View>}
      <Text style={{ fontSize: 18, fontWeight: '800', color: C.ink, marginTop: multi ? 4 : 16, marginBottom: 16, lineHeight: 25 }}>{q.q}</Text>
      {q.c.map((c, k) => {
        const show = valide && !exam;
        const isB = bonnes(q).includes(k);
        const pris = sel.includes(k);
        const good = show && isB;
        const bad = show && pris && !isB;
        return (
          <Pressable key={k} onPress={() => toucher(k)} style={[s.choice, !show && pris && { borderColor: C.navy, backgroundColor: C.navyL }, good && { borderColor: C.ok, backgroundColor: C.okL }, bad && { borderColor: C.ko, backgroundColor: C.koL }]}>
            <Text style={{ color: C.ink, fontSize: 15, fontWeight: good || bad || pris ? '700' : '500' }}>
              {multi && !show ? (pris ? '☑ ' : '☐ ') : ''}
              {good ? (pris || !multi ? '✓ ' : '◌ ') : bad ? '✗ ' : ''}
              {c}
            </Text>
          </Pressable>
        );
      })}
      {multi && !valide && <Btn title="Valider mes réponses" disabled={!sel.length} onPress={() => valider(sel)} />}
      {valide && !exam && (
        <>
          <Card style={{ backgroundColor: pts === 1 ? C.okL : pts > 0 ? C.goldL : C.koL, borderColor: 'transparent', marginTop: 6 }}>
            <Text style={{ fontWeight: '900', color: pts === 1 ? C.ok : pts > 0 ? C.gold : C.ko, marginBottom: 4 }}>{pts === 1 ? 'Bonne réponse' : pts > 0 ? `Presque : ${fmt(pts)} point` : 'Pas tout à fait'}</Text>
            {multi && <Text style={{ color: C.muted, fontSize: 12, marginBottom: 4 }}>Notation EDN : 0 discordance = 1 ; 1 = 0,5 ; 2 = 0,2 ; 3 ou plus = 0.{pts < 1 ? ' ◌ = bonne réponse non cochée.' : ''}</Text>}
            <Text style={{ color: C.ink, lineHeight: 21 }}>{q.e}</Text>
          </Card>
          <Btn title={i + 1 >= list.length ? 'Voir mon résultat' : 'Question suivante'} onPress={() => suivant()} />
          <Signaler key={i} cible={'qcm:' + (q as any).m + ':' + q.q.slice(0, 120)} libelle={'QCM ' + (i + 1)} />
        </>
      )}
    </Page>
  );
}

// ---------- Cas cliniques ----------
function CasList({ st, back, go }: PP) {
  const [niv, setNiv] = useState('tous');
  const list = CAS.filter((c) => niv === 'tous' || c.niv === niv);
  return (
    <Page>
      <Back onPress={back} />
      <H1>Cas cliniques</H1>
      <Sub>Chaque cas suit un patient fictif, étape par étape, comme un dossier progressif : diagnostic, examens, traitement.</Sub>
      <Chips>
        <Chip label="Tous" on={niv === 'tous'} onPress={() => setNiv('tous')} />
        {NIVEAUX.map((n) => (
          <Chip key={n} label={n} on={niv === n} onPress={() => setNiv(n)} />
        ))}
      </Chips>
      {list.map((c) => {
        const sc = st.casDone[c.id];
        return (
          <Card key={c.id} onPress={() => go({ s: 'cas', id: c.id })}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              <Tag label={matById(c.m)?.nom || ''} />
              <Tag label={c.niv} color={C.navy} />
            </View>
            <Text style={{ fontWeight: '800', color: C.ink }}>{c.titre}</Text>
            <Text style={{ color: sc !== undefined ? C.ok : C.muted, fontSize: 12, marginTop: 2 }}>{sc !== undefined ? `Fait · ${sc}/${c.etapes.length}` : `${c.etapes.length} étapes`}</Text>
          </Card>
        );
      })}
    </Page>
  );
}

function CasView({ id, save, back, openFiche }: PP & { id: string }) {
  const cas = CAS.find((c) => c.id === id)!;
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const etapes = useMemo(() => cas.etapes.map((e) => melanger(e)), [id]);
  const fini = step >= etapes.length;
  const et = etapes[Math.min(step, etapes.length - 1)];
  const choisir = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    if (i === et.a) setScore((x) => x + 1);
  };
  const suivant = () => {
    if (step + 1 >= cas.etapes.length) save((x) => ({ ...x, casDone: { ...x.casDone, [id]: score } }));
    setStep(step + 1);
    setPicked(null);
  };
  return (
    <Page>
      <Back onPress={back} label="Cas cliniques" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Tag label={matById(cas.m)?.nom || ''} />
        <Tag label={cas.niv} color={C.navy} />
      </View>
      <H1>{cas.titre}</H1>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>Énoncé</Text>
        <Text style={{ color: C.ink, lineHeight: 22, fontSize: 15 }}>{cas.enonce}</Text>
      </Card>
      {!fini ? (
        <>
          <Text style={{ color: C.muted, fontWeight: '700', marginTop: 6 }}>Étape {step + 1} sur {cas.etapes.length}</Text>
          <Text style={{ fontSize: 17, fontWeight: '800', color: C.ink, marginVertical: 10, lineHeight: 24 }}>{et.q}</Text>
          {et.c.map((c, i) => {
            const show = picked !== null;
            const good = show && i === et.a;
            const bad = show && i === picked && i !== et.a;
            return (
              <Pressable key={i} onPress={() => choisir(i)} style={[s.choice, good && { borderColor: C.ok, backgroundColor: C.okL }, bad && { borderColor: C.ko, backgroundColor: C.koL }]}>
                <Text style={{ fontSize: 15, color: C.ink, fontWeight: good || bad ? '700' : '500' }}>
                  {good ? '✓ ' : bad ? '✗ ' : ''}
                  {c}
                </Text>
              </Pressable>
            );
          })}
          {picked !== null && (
            <>
              <Card style={{ backgroundColor: picked === et.a ? C.okL : C.koL, borderColor: 'transparent', marginTop: 6 }}>
                <Text style={{ fontWeight: '900', color: picked === et.a ? C.ok : C.ko, marginBottom: 4 }}>{picked === et.a ? 'Bien raisonné' : 'Pas tout à fait'}</Text>
                <Text style={{ color: C.ink, lineHeight: 21 }}>{et.e}</Text>
              </Card>
              <Btn title={step + 1 >= cas.etapes.length ? 'Voir la synthèse' : 'Étape suivante'} onPress={suivant} />
            </>
          )}
        </>
      ) : (
        <>
          <View style={s.hero}>
            <Text style={s.heroL}>Ton résultat</Text>
            <Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>{score} / {cas.etapes.length}</Text>
          </View>
          <Card style={{ backgroundColor: C.goldL, borderColor: 'transparent' }}>
            <Text style={{ fontWeight: '900', color: C.ink, marginBottom: 6 }}>À retenir</Text>
            {cas.retenir.map((r, k) => (
              <Text key={k} style={[u.item, { marginBottom: 4 }]}>✓ {r}</Text>
            ))}
          </Card>
          {cas.fiches.some((f) => ficheById(f)) && <H2>Fiches à revoir</H2>}
          {cas.fiches.filter((f) => ficheById(f)).map((f) => (
            <Card key={f} onPress={() => openFiche(f)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '700', color: C.ink }}>{ficheById(f)?.titre} ›</Text>
            </Card>
          ))}
          <Btn title="Refaire ce cas" kind="ghost" onPress={() => { setStep(0); setPicked(null); setScore(0); }} />
          <Btn title="Retour aux cas" onPress={back} />
          <Signaler cible={'cas:' + cas.id} libelle={cas.titre} />
        </>
      )}
    </Page>
  );
}

// ---------- Outils ----------
function Outils({ go, user }: PP) {
  const items: [string, string, string, Route][] = [
    ['⚕️', 'Mémo des valeurs et scores', `${ARTICLES.length} repères : biologie, gaz du sang, scores, formules`, { s: 'codes' }],
    ['💊', 'Médicaments', `${ARRETS.length} classes : mécanisme, indications, surveillance`, { s: 'arrets' }],
    ['✍️', 'Méthodologie', 'PASS/LAS, dossier progressif, ECOS, raisonnement clinique', { s: 'methodes' }],
    ['🧮', 'Calculateurs', 'IMC, clairance, DFG, Glasgow, CHA2DS2-VASc, qSOFA…', { s: 'delais' }],
    ['🚨', 'Patient grave : ABCDE', 'Évaluer et traiter dans le bon ordre', { s: 'normes' }],
    ['🔢', 'Items de l’EDN', '367 items, fiches liées, entraînement par item', { s: 'items' }],
    ['🌳', 'Arbres décisionnels', `${ARBRES.length} démarches pas à pas (douleur thoracique, dyspnée…)`, { s: 'arbres' }],
    ['🩺', 'Carnet de stage', 'Stages, gestes et compétences', { s: 'carnet' }],
    ['📖', 'Lexique médical', `${LEXIQUE.length} termes définis`, { s: 'lexique' }],
    ['🧠', 'Mnémos et aphorismes', `${ADAGES.length} moyens mnémotechniques`, { s: 'adages' }],
    ['🎓', 'Les études de médecine', 'PASS/LAS, EDN, ECOS, internat', { s: 'juridictions' }],
    ['📝', 'Mes notes', 'Toutes tes notes personnelles', { s: 'notes' }],
    ['★', 'Mes favoris', 'Fiches, repères et médicaments enregistrés', { s: 'favoris' }],
    ['👤', 'Mon compte', CLOUD_OK ? 'Connexion, sauvegarde, suppression du compte' : 'Sauvegarde de la progression', { s: 'compte' }],
    ...(estAdmin(user) ? [['🛠️', 'Signalements (admin)', 'Lire et traiter les signalements', { s: 'admin' }] as [string, string, string, Route]] : []),
    ['⚙️', 'Réglages', 'Thème, taille du texte, progression', { s: 'reglages' }],
    ['ℹ️', 'À propos', 'Sources, mentions et contact', { s: 'apropos' }],
  ];
  return (
    <Page>
      <H1>Outils</H1>
      {items.map(([ic, t, d, r]) => (
        <Card key={t} onPress={() => go(r)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, marginRight: 12 }}>{ic}</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{t}</Text>
              <Text style={{ color: C.muted, fontSize: 13 }}>{d}</Text>
            </View>
            <Text style={{ color: C.muted }}>›</Text>
          </View>
        </Card>
      ))}
    </Page>
  );
}

function Methodes({ back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Méthodologie</H1>
      <Sub>Méthodes de travail et attendus des épreuves : le savoir-faire compte autant que le savoir.</Sub>
      {METHODES.map((m) => (
        <Card key={m.id} onPress={() => go({ s: 'methode', id: m.id })}>
          <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{m.titre} ›</Text>
          <Text style={{ color: C.muted, fontSize: 13 }}>{m.pour}</Text>
        </Card>
      ))}
    </Page>
  );
}

function MethodeView({ id, back }: PP & { id: string }) {
  const m = METHODES.find((x) => x.id === id)!;
  return (
    <Page>
      <Back onPress={back} label="Méthodologie" />
      <H1>{m.titre}</H1>
      <Tag label={m.pour} />
      <Text style={[u.item, { marginBottom: 12 }]}>{m.intro}</Text>
      {m.etapes.map((e, i) => (
        <Card key={i}>
          <Text style={{ fontWeight: '900', color: C.red, marginBottom: 8 }}>{i + 1}. {e.t}</Text>
          {e.l.map((l, k) => (
            <View key={k} style={{ flexDirection: 'row', marginBottom: 5 }}>
              <Text style={{ color: C.gold, fontWeight: '900', marginRight: 8, lineHeight: 22 }}>•</Text>
              <Text style={[u.item, { flex: 1 }]}>{l}</Text>
            </View>
          ))}
        </Card>
      ))}
      <Card style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
        <Text style={{ fontWeight: '900', color: C.ko, marginBottom: 6 }}>Pièges à éviter</Text>
        {m.pieges.map((p, k) => (
          <Text key={k} style={[u.item, { marginBottom: 4 }]}>✗ {p}</Text>
        ))}
      </Card>
    </Page>
  );
}

function Lexique({ back }: PP) {
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = LEXIQUE.filter((t) => !nq || norm(t.t + ' ' + t.d).includes(nq)).sort((a, b) => a.t.localeCompare(b.t, 'fr'));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Lexique médical</H1>
      <SearchBox value={q} onChange={setQ} placeholder="Chercher un terme" />
      <Text style={u.label}>{list.length} terme(s)</Text>
      {list.map((t) => (
        <Card key={t.t} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '900', color: C.navy, marginBottom: 2 }}>{t.t}</Text>
          <Text style={{ color: C.ink, lineHeight: 21 }}>{t.d}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Adages({ back, startQcm }: PP) {
  const [q, setQ] = useState('');
  const nq = norm(q.trim());
  const list = ADAGES.filter((a) => !nq || norm(a.la + ' ' + a.fr + ' ' + a.sens).includes(nq));
  const quiz = () =>
    startQcm(
      'Mnémos et aphorismes',
      shuffle(ADAGES).slice(0, 10).map((a) => {
        const autres = shuffle(ADAGES.filter((x) => x.la !== a.la)).slice(0, 3);
        const ch = shuffle([a, ...autres]);
        return { q: `« ${a.la} » signifie :`, c: ch.map((x) => x.fr), a: ch.indexOf(a), e: a.sens, m: 'lexique' };
      })
    );
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mnémos et aphorismes</H1>
      <Btn title="Me tester (10 mnémos)" onPress={quiz} />
      <SearchBox value={q} onChange={setQ} placeholder="Chercher un mnémo" />
      {list.map((a) => (
        <Card key={a.la}>
          <Text style={{ fontWeight: '900', color: C.ink, fontSize: 15 }}>{a.la}</Text>
          <Text style={{ color: C.red, marginTop: 2, fontWeight: '700' }}>« {a.fr} »</Text>
          <Text style={{ color: C.muted, marginTop: 6, lineHeight: 19 }}>{a.sens}</Text>
        </Card>
      ))}
    </Page>
  );
}

// ---------- Calculateurs ----------
type Calc = {
  id: string;
  nom: string;
  champs?: [string, string][];
  sexe?: boolean;
  calc?: (v: number[], femme: boolean) => string;
  items?: [string, number][];
  groupes?: [string, [string, number][]][];
  interp?: (n: number) => string;
  note: string;
};
const r1 = (x: number) => (Math.round(x * 10) / 10).toString().replace('.', ',');
const CALCS: Calc[] = [
  {
    id: 'imc', nom: 'IMC', champs: [['Poids (kg)', '70'], ['Taille (cm)', '175']],
    calc: ([p, t]) => { const v = p / (t / 100) ** 2; return r1(v) + ' kg/m² — ' + (v < 18.5 ? 'maigreur' : v < 25 ? 'corpulence normale' : v < 30 ? 'surpoids' : v < 35 ? 'obésité modérée' : v < 40 ? 'obésité sévère' : 'obésité morbide'); },
    note: 'Chez le sujet de 70 ans et plus, un IMC < 22 fait partie des critères de dénutrition.',
  },
  {
    id: 'cockcroft', nom: 'Cockcroft-Gault', champs: [['Âge (ans)', '70'], ['Poids (kg)', '70'], ['Créatininémie (µmol/L)', '90']], sexe: true,
    calc: ([a, p, c], f) => r1(((140 - a) * p * (f ? 1.04 : 1.23)) / c) + ' mL/min',
    note: 'Utilisée pour adapter la posologie de nombreux médicaments. Peu fiable aux poids extrêmes.',
  },
  {
    id: 'ckdepi', nom: 'DFG CKD-EPI', champs: [['Âge (ans)', '70'], ['Créatininémie (µmol/L)', '90']], sexe: true,
    calc: ([a, c], f) => {
      const s = c / 88.4, k = f ? 0.7 : 0.9, al = f ? -0.329 : -0.411;
      const v = 141 * Math.min(s / k, 1) ** al * Math.max(s / k, 1) ** -1.209 * 0.993 ** a * (f ? 1.018 : 1);
      const st = v >= 90 ? 'stade 1 si marqueur d’atteinte rénale' : v >= 60 ? 'stade 2 si marqueur d’atteinte rénale' : v >= 45 ? 'stade 3a' : v >= 30 ? 'stade 3b' : v >= 15 ? 'stade 4' : 'stade 5';
      return Math.round(v) + ' mL/min/1,73 m² — ' + st;
    },
    note: 'Formule CKD-EPI 2009, sans coefficient ethnique. Estimation : à interpréter selon le contexte.',
  },
  {
    id: 'ta', nom: 'Trou anionique', champs: [['Natrémie (mmol/L)', '140'], ['Chlorémie (mmol/L)', '104'], ['Bicarbonates (mmol/L)', '24']],
    calc: ([n, c, b]) => { const v = n - (c + b); return r1(v) + ' mmol/L — ' + (v > 16 ? 'augmenté' : v < 8 ? 'bas' : 'normal (12 ± 4)'); },
    note: 'Augmenté : acidocétose, acidose lactique, insuffisance rénale, intoxications. Normal : pertes de bicarbonates.',
  },
  {
    id: 'osmo', nom: 'Osmolarité', champs: [['Natrémie (mmol/L)', '140'], ['Glycémie (mmol/L)', '5'], ['Urée (mmol/L)', '5']],
    calc: ([n, g, u2]) => r1(2 * n + g + u2) + ' mOsm/L (normale ≈ 285 – 295)',
    note: 'Comparer à l’osmolalité mesurée : un trou osmolaire > 10 fait rechercher une intoxication par un alcool toxique.',
  },
  {
    id: 'cacorr', nom: 'Calcémie corrigée', champs: [['Calcémie (mmol/L)', '2,2'], ['Albuminémie (g/L)', '30']],
    calc: ([c, a]) => { const v = c + 0.025 * (40 - a); return (Math.round(v * 100) / 100).toString().replace('.', ',') + ' mmol/L — ' + (v > 2.6 ? 'hypercalcémie' : v < 2.2 ? 'hypocalcémie' : 'normale'); },
    note: 'En cas de doute, doser le calcium ionisé.',
  },
  {
    id: 'pam', nom: 'PAM', champs: [['PAS (mmHg)', '120'], ['PAD (mmHg)', '70']],
    calc: ([s2, d]) => { const v = d + (s2 - d) / 3; return Math.round(v) + ' mmHg' + (v < 65 ? ' — basse (< 65)' : ''); },
    note: 'Cible ≥ 65 mmHg dans le choc septique.',
  },
  {
    id: 'glasgow', nom: 'Glasgow',
    groupes: [
      ['Ouverture des yeux', [['Spontanée', 4], ['À la demande', 3], ['À la douleur', 2], ['Aucune', 1]]],
      ['Réponse verbale', [['Orientée', 5], ['Confuse', 4], ['Mots inappropriés', 3], ['Sons incompréhensibles', 2], ['Aucune', 1]]],
      ['Réponse motrice', [['Obéit aux ordres', 6], ['Orientée à la douleur', 5], ['Évitement', 4], ['Flexion stéréotypée', 3], ['Extension stéréotypée', 2], ['Aucune', 1]]],
    ],
    interp: (n) => (n <= 8 ? 'Coma : protection des voies aériennes à discuter' : n < 15 ? 'Altération de la conscience' : 'Conscience normale'),
    note: 'Score de 3 à 15. Noter le détail (par exemple Y3 V4 M6) en plus du total.',
  },
  {
    id: 'cha2ds2', nom: 'CHA2DS2-VASc',
    items: [['Insuffisance cardiaque', 1], ['Hypertension artérielle', 1], ['Âge ≥ 75 ans', 2], ['Diabète', 1], ['AVC, AIT ou embolie', 2], ['Maladie vasculaire (infarctus, artériopathie, plaque aortique)', 1], ['Âge 65 – 74 ans', 1], ['Sexe féminin', 1]],
    interp: (n) => (n === 0 ? 'Risque faible : pas d’anticoagulation' : 'Anticoagulation recommandée si ≥ 2 (homme) ou ≥ 3 (femme) ; à discuter à 1 (homme) ou 2 (femme)'),
    note: 'Évalue le risque thromboembolique de la fibrillation atriale non valvulaire. Évaluer aussi le risque hémorragique.',
  },
  {
    id: 'wells', nom: 'Wells (EP)',
    items: [['Signes cliniques de TVP', 3], ['Diagnostic alternatif moins probable que l’EP', 3], ['FC > 100/min', 1.5], ['Immobilisation ou chirurgie récente', 1.5], ['Antécédent de TVP ou d’EP', 1.5], ['Hémoptysie', 1], ['Cancer actif', 1]],
    interp: (n) => (n < 2 ? 'Probabilité faible : D-dimères' : n <= 6 ? 'Probabilité intermédiaire : D-dimères' : 'Probabilité forte : angioscanner thoracique'),
    note: 'D-dimères négatifs : EP exclue si probabilité faible ou intermédiaire.',
  },
  {
    id: 'qsofa', nom: 'qSOFA',
    items: [['Fréquence respiratoire ≥ 22/min', 1], ['PA systolique ≤ 100 mmHg', 1], ['Altération de la conscience', 1]],
    interp: (n) => (n >= 2 ? 'Risque élevé : rechercher un sepsis (SOFA, lactates)' : 'Score < 2 : réévaluer régulièrement'),
    note: 'Outil de repérage chez un patient infecté, pas un critère diagnostique.',
  },
  {
    id: 'crb65', nom: 'CRB-65',
    items: [['Confusion', 1], ['Fréquence respiratoire ≥ 30/min', 1], ['PAS < 90 ou PAD ≤ 60 mmHg', 1], ['Âge ≥ 65 ans', 1]],
    interp: (n) => (n === 0 ? 'Traitement ambulatoire possible' : 'Hospitalisation à discuter'),
    note: 'Tenir compte aussi des comorbidités, de l’isolement et des signes de sepsis.',
  },
  {
    id: 'macisaac', nom: 'Mac Isaac (angine)',
    items: [['Fièvre > 38 °C', 1], ['Absence de toux', 1], ['Adénopathies cervicales sensibles', 1], ['Atteinte amygdalienne (augmentation de volume ou exsudat)', 1], ['Âge ≥ 45 ans', -1]],
    interp: (n) => (n >= 2 ? 'TDR streptococcique recommandé ; antibiotique seulement si positif' : 'Pas de TDR ni d’antibiotique'),
    note: 'Chez l’adulte. Chez l’enfant de 3 ans et plus, le TDR est systématique devant une angine érythémateuse ou érythématopultacée.',
  },
];

function Delais({ back }: PP) {
  const [sel, setSel] = useState(CALCS[0].id);
  const [vals, setVals] = useState<Record<string, string>>({});
  const [femme, setFemme] = useState(false);
  const [coche, setCoche] = useState<Record<string, boolean>>({});
  const [grp, setGrp] = useState<Record<string, number>>({});
  const c = CALCS.find((x) => x.id === sel)!;
  const num = (k: string, d: string) => Number((vals[sel + k] ?? d).replace(',', '.'));
  let res = '';
  if (c.champs && c.calc) {
    const v = c.champs.map(([l, d]) => num(l, d));
    res = v.every((x) => isFinite(x) && x > 0) ? c.calc(v, femme) : 'Valeurs à compléter';
  } else if (c.items && c.interp) {
    const n = c.items.reduce((t, [l, p]) => t + (coche[sel + l] ? p : 0), 0);
    res = r1(n) + ' point(s) — ' + c.interp(n);
  } else if (c.groupes && c.interp) {
    const n = c.groupes.reduce((t, [g, opts]) => t + (grp[sel + g] ?? opts[0][1]), 0);
    res = n + ' / 15 — ' + c.interp(n);
  }
  return (
    <Page>
      <Back onPress={back} />
      <H1>Calculateurs</H1>
      <Sub>Formules et scores usuels, pour s’entraîner. Ils ne remplacent pas le jugement clinique.</Sub>
      <Chips>
        {CALCS.map((x) => (
          <Chip key={x.id} label={x.nom} on={sel === x.id} onPress={() => setSel(x.id)} />
        ))}
      </Chips>
      {c.champs?.map(([l, d]) => (
        <View key={sel + l} style={{ marginBottom: 6 }}>
          <Text style={u.label}>{l}</Text>
          <TextInput value={vals[sel + l] ?? d} onChangeText={(t) => setVals((o) => ({ ...o, [sel + l]: t }))} keyboardType="decimal-pad" style={[u.card, { color: C.ink, fontSize: 18, fontWeight: '800', marginBottom: 4 }]} />
        </View>
      ))}
      {c.sexe && (
        <Chips>
          <Chip label="Homme" on={!femme} onPress={() => setFemme(false)} />
          <Chip label="Femme" on={femme} onPress={() => setFemme(true)} />
        </Chips>
      )}
      {c.items?.map(([l, p]) => {
        const on = !!coche[sel + l];
        return (
          <Pressable key={sel + l} onPress={() => setCoche((o) => ({ ...o, [sel + l]: !on }))} style={[s.choice, on && { borderColor: C.red, backgroundColor: C.redL }]}>
            <Text style={{ color: C.ink, fontWeight: on ? '800' : '500' }}>{on ? '☑' : '☐'} {l} ({p > 0 ? '+' : ''}{r1(p)})</Text>
          </Pressable>
        );
      })}
      {c.groupes?.map(([g, opts]) => (
        <View key={sel + g}>
          <Text style={u.label}>{g}</Text>
          {opts.map(([l, p]) => {
            const on = (grp[sel + g] ?? opts[0][1]) === p;
            return (
              <Pressable key={l} onPress={() => setGrp((o) => ({ ...o, [sel + g]: p }))} style={[s.choice, { paddingVertical: 10 }, on && { borderColor: C.red, backgroundColor: C.redL }]}>
                <Text style={{ color: C.ink, fontWeight: on ? '800' : '500' }}>{p} — {l}</Text>
              </Pressable>
            );
          })}
        </View>
      ))}
      <View style={[s.hero, { marginTop: 10 }]}>
        <Text style={s.heroL}>Résultat</Text>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900', marginTop: 4, lineHeight: 27 }}>{res}</Text>
      </View>
      <Notice>{c.note}</Notice>
    </Page>
  );
}

// ---------- Schémas ----------
function Normes({ back }: PP) {
  const N = [
    ['A — Voies aériennes', 'Le patient parle-t-il ? Obstruction, corps étranger, bruits anormaux (stridor, ronflement).', 'Libérer les voies aériennes, aspirer ; position latérale de sécurité si inconscient qui respire ; intubation à discuter si Glasgow ≤ 8.', C.red],
    ['B — Respiration', 'Fréquence respiratoire, SpO2, signes de lutte, cyanose, auscultation.', 'Oxygène titré, position demi-assise ; ventilation si épuisement ; exsufflation d’un pneumothorax suffocant.', C.navy],
    ['C — Circulation', 'FC, PA, marbrures, temps de recoloration, diurèse, saignement extériorisé.', 'Deux voies veineuses, remplissage, ECG, contrôle de l’hémorragie ; vasopresseurs si besoin.', C.gold],
    ['D — Neurologique', 'Glasgow, pupilles, déficit moteur, convulsions.', 'Glycémie capillaire systématique ; corriger une hypoglycémie, traiter une crise.', C.ok],
    ['E — Exposition', 'Examen de tout le corps : purpura, plaies, éruption, température.', 'Prévenir l’hypothermie ; antibiotique immédiat si purpura fulminans.', C.muted],
  ];
  return (
    <Page>
      <Back onPress={back} />
      <H1>Patient grave : ABCDE</H1>
      <Sub>Évaluer et traiter chaque fonction vitale dans l’ordre, en corrigeant un problème avant de passer au suivant.</Sub>
      {N.map(([t, d, c, col]) => (
        <View key={t} style={[u.card, { borderLeftWidth: 5, borderLeftColor: col }]}>
          <Text style={{ fontWeight: '900', color: C.ink, fontSize: 16 }}>{t}</Text>
          <Text style={{ color: C.ink, fontSize: 14, marginTop: 6, lineHeight: 20 }}>🔎 {d}</Text>
          <Text style={{ color: C.ink, fontSize: 14, marginTop: 6, lineHeight: 20 }}>✚ {c}</Text>
        </View>
      ))}
      <Notice>Réévaluer après chaque intervention. Appeler à l’aide tôt (réanimateur, SAMU : 15). Arrêt cardiaque : massage immédiat et défibrillateur.</Notice>
    </Page>
  );
}

function Juridictions({ back }: PP) {
  const Col = ({ t, items, col }: { t: string; items: [string, string][]; col: string }) => (
    <View style={{ flex: 1 }}>
      <Text style={{ fontWeight: '900', color: col, textAlign: 'center', marginBottom: 8 }}>{t}</Text>
      {items.map(([n, d], i) => (
        <View key={n}>
          <View style={[u.card, { borderTopWidth: 4, borderTopColor: col, padding: 10 }]}>
            <Text style={{ fontWeight: '800', color: C.ink, fontSize: 13 }}>{n}</Text>
            <Text style={{ color: C.muted, fontSize: 11, marginTop: 2, lineHeight: 15 }}>{d}</Text>
          </View>
          {i < items.length - 1 && <Text style={{ textAlign: 'center', color: C.muted, marginTop: -6, marginBottom: 2 }}>▼</Text>}
        </View>
      ))}
    </View>
  );
  return (
    <Page>
      <Back onPress={back} />
      <H1>Les études de médecine</H1>
      <Sub>Le parcours de la première année au diplôme de docteur, depuis la réforme du deuxième cycle (R2C).</Sub>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Col
          t="1er et 2e cycles"
          col={C.red}
          items={[
            ['PASS ou LAS', 'Première année avec accès santé : validation de l’année et admission en médecine, maïeutique, odontologie, pharmacie ou kinésithérapie.'],
            ['DFGSM 2 et 3', 'Sciences fondamentales, sémiologie, premiers stages hospitaliers.'],
            ['DFASM 1 à 3', 'Externat : stages et apprentissage par items de connaissance et situations de départ.'],
            ['EDN et ECOS', 'Épreuves dématérialisées nationales (connaissances) puis examens cliniques objectifs et structurés (compétences), en 6e année.'],
          ]}
        />
        <Col
          t="3e cycle"
          col={C.navy}
          items={[
            ['Matching', 'Affectation selon un classement combinant EDN, ECOS et parcours de l’étudiant, et ses vœux de spécialité et de ville.'],
            ['Internat (DES)', 'Phases socle, d’approfondissement et de consolidation selon la spécialité.'],
            ['Thèse', 'Thèse d’exercice et diplôme d’État de docteur en médecine.'],
            ['Exercice', 'Inscription au tableau de l’Ordre des médecins.'],
          ]}
        />
      </View>
      <Notice tone="warn">Les modalités évoluent régulièrement : se référer aux textes officiels et à sa faculté.</Notice>
    </Page>
  );
}

// ---------- Favoris / Réglages / À propos ----------
function Favoris({ st, back, openFiche, openArt, openArret }: PP) {
  const ks = Object.keys(st.fav);
  const fs = ks.filter((k) => ficheById(k)).map((k) => ficheById(k)!);
  const as = ks.filter((k) => k.startsWith('a:')).map((k) => artById(k.slice(2))).filter(Boolean) as Article[];
  const rs = ks.filter((k) => k.startsWith('r:')).map((k) => arretById(k.slice(2))).filter(Boolean) as Arret[];
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mes favoris</H1>
      {ks.length === 0 && <Notice>Appuie sur ☆ dans une fiche, un repère ou un médicament pour le retrouver ici.</Notice>}
      {fs.length > 0 && <H2>Fiches</H2>}
      {fs.map((f) => (
        <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{f.titre} ›</Text>
        </Card>
      ))}
      {as.length > 0 && <H2>Repères</H2>}
      {as.map((a) => (
        <Card key={a.id} onPress={() => openArt(a.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.navy }}>{a.num}</Text>
          <Text style={{ color: C.ink }}>{a.titre}</Text>
        </Card>
      ))}
      {rs.length > 0 && <H2>Médicaments</H2>}
      {rs.map((a) => (
        <Card key={a.id} onPress={() => openArret(a.id)} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '700', color: C.ink }}>{a.nom}</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{a.jur}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Reglages({ st, save, back }: PP) {
  const [theme, setTheme] = useState('auto');
  const [zoom, setZoom] = useState(1);
  const [msg, setMsg] = useState('');
  const [conf, setConf] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('capm:theme').then((v) => setTheme(v || 'auto'));
    AsyncStorage.getItem('capm:zoom').then((v) => setZoom(Number(v) || 1));
  }, []);
  const setT = (v: string) => { setTheme(v); AsyncStorage.setItem('capm:theme', v); setMsg('Le thème sera appliqué au prochain démarrage de l’appli.'); };
  const setZ = (v: number) => { setZoom(v); AsyncStorage.setItem('capm:zoom', String(v)); (globalThis as any).__capZoom = v; setMsg('Taille du texte enregistrée.'); };
  return (
    <Page>
      <Back onPress={back} />
      <H1>Réglages</H1>
      <H2>Thème</H2>
      <Chips>
        {[['auto', 'Automatique'], ['light', 'Clair'], ['dark', 'Sombre']].map(([v, l]) => (
          <Chip key={v} label={l} on={theme === v} onPress={() => setT(v)} />
        ))}
      </Chips>
      <H2>Taille du texte</H2>
      <Chips>
        {[[0.9, 'Petite'], [1, 'Normale'], [1.15, 'Grande'], [1.3, 'Très grande']].map(([v, l]) => (
          <Chip key={String(v)} label={String(l)} on={zoom === v} onPress={() => setZ(Number(v))} />
        ))}
      </Chips>
      {!!msg && <Notice>{msg}</Notice>}
      <Rappels />
      <H2>Ma progression</H2>
      <Card>
        <Row label="Fiches lues" value={`${Object.keys(st.lu).length} / ${FICHES.length}`} />
        <Row label="Fiches maîtrisées" value={String(Object.keys(st.maitrise).length)} />
        <Row label="Questions répondues" value={String(st.qTot)} />
        <Row label="Cas cliniques faits" value={`${Object.keys(st.casDone).length} / ${CAS.length}`} />
      </Card>
      {!conf ? (
        <Btn kind="ghost" title="Réinitialiser ma progression" onPress={() => setConf(true)} />
      ) : (
        <Card style={{ backgroundColor: C.koL, borderColor: 'transparent' }}>
          <Text style={{ color: C.ink, marginBottom: 8 }}>Effacer toute la progression, les favoris et les notes de cet appareil ? Cette action est définitive.</Text>
          <Btn title="Oui, tout effacer" onPress={() => { save(() => ({ ...VIDE })); setConf(false); setMsg('Progression réinitialisée.'); }} />
          <Btn kind="ghost" title="Annuler" onPress={() => setConf(false)} />
        </Card>
      )}
    </Page>
  );
}

function APropos({ back }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>À propos</H1>
      <Card>
        <Text style={[u.item, { marginBottom: 8 }]}>CAP Médecin est une application gratuite et sans publicité de révision pour les étudiants en médecine, de la PASS/LAS à l’EDN et aux ECOS.</Text>
        <Text style={[u.item, { marginBottom: 8 }]}>Les fiches, QCM, cas cliniques et repères sont des synthèses pédagogiques originales. Ils ne remplacent ni les référentiels des collèges de spécialité, ni les recommandations officielles (HAS, sociétés savantes), ni le RCP des médicaments. Les normes biologiques varient selon les laboratoires.</Text>
        <Text style={u.item}>Cette application n’est pas un dispositif médical : elle ne doit pas servir à prendre en charge un patient. Les cas présentés sont fictifs.</Text>
      </Card>
      <Btn kind="ghost" title="Haute Autorité de santé ↗" onPress={() => Linking.openURL('https://www.has-sante.fr')} />
      <Btn kind="ghost" title="Base de données publique des médicaments ↗" onPress={() => Linking.openURL('https://base-donnees-publique.medicaments.gouv.fr')} />
      <Btn kind="ghost" title="Signaler une erreur par e-mail" onPress={() => Linking.openURL('mailto:lonisboussouar@gmail.com?subject=CAP%20M%C3%A9decin%20-%20signalement')} />
      <Text style={{ color: C.muted, fontSize: 12, marginTop: 10 }}>Version 2.1</Text>
    </Page>
  );
}


// ---------- Triades ----------
function quizTriades(): Question[] {
  const qs: Question[] = [];
  shuffle(TRIADES).forEach((t, k) => {
    const autres = shuffle(TRIADES.filter((x) => x.id !== t.id));
    if (k % 2 === 0) {
      const c = shuffle([t.nom, ...autres.slice(0, 3).map((x) => x.nom)]);
      qs.push({ m: 'triades', q: 'Quelle triade associe : ' + t.el.join(' ; ') + ' ?', c, a: c.indexOf(t.nom), e: t.nom + ' → ' + t.evoque + (t.note ? '. ' + t.note : '') });
    } else {
      const manque = Math.floor(Math.random() * 3);
      const pieges = Array.from(new Set(shuffle(autres.flatMap((x) => x.el)))).filter((x) => !t.el.includes(x)).slice(0, 3);
      const c = shuffle([t.el[manque], ...pieges]);
      const vus = t.el.filter((_, i) => i !== manque).join(' ; ');
      qs.push({ m: 'triades', q: t.nom + ' (' + t.evoque + ') : ' + vus + ' et… ?', c, a: c.indexOf(t.el[manque]), e: t.nom + ' : ' + t.el.join(' ; ') + '.' });
    }
  });
  return qs.slice(0, 15);
}

function TriadesView({ st, save, startQcm }: PP) {
  const [q, setQ] = useState('');
  const [m, setM] = useState('tous');
  const [cache, setCache] = useState(false);
  const [vu, setVu] = useState<string[]>([]);
  const mats = Array.from(new Set(TRIADES.map((t) => t.m)));
  const nq = norm(q.trim());
  const list = TRIADES.filter((t) => (m === 'tous' || t.m === m) && (!nq || norm(t.nom + ' ' + t.evoque + ' ' + t.el.join(' ')).includes(nq)));
  const favs = st.favT || [];
  return (
    <Page>
      <H1>Triades</H1>
      <Sub>{TRIADES.length} triades et associations à connaître par cœur, avec ce qu’elles évoquent.</Sub>
      <Btn title="Quiz triades (15 questions)" onPress={() => startQcm('Quiz triades', quizTriades())} />
      <Chips>
        <Chip label={cache ? '👁 Afficher les réponses' : '🙈 Mode révision (cacher)'} on={cache} onPress={() => { setCache(!cache); setVu([]); }} />
      </Chips>
      <SearchBox value={q} onChange={setQ} placeholder="Rechercher (ex. Beck, tamponnade, ictère)" />
      <Chips>
        <Chip label="Toutes" on={m === 'tous'} onPress={() => setM('tous')} />
        {mats.map((x) => <Chip key={x} label={matById(x)?.nom || x} on={m === x} onPress={() => setM(x)} />)}
      </Chips>
      {list.map((t) => {
        const montre = !cache || vu.includes(t.id);
        const fav = favs.includes(t.id);
        return (
          <Card key={t.id} onPress={cache && !montre ? () => setVu((v) => [...v, t.id]) : undefined}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, fontWeight: '900', color: C.navy, fontSize: 16 }}>{t.nom}</Text>
              <Pressable hitSlop={8} onPress={() => save((x) => ({ ...x, favT: fav ? (x.favT || []).filter((y) => y !== t.id) : [...(x.favT || []), t.id] }))}>
                <Text style={{ fontSize: 18, color: fav ? C.gold : C.muted }}>{fav ? '★' : '☆'}</Text>
              </Pressable>
            </View>
            {montre ? (
              <>
                {t.el.map((e, k) => (
                  <View key={k} style={{ flexDirection: 'row', marginTop: 6 }}>
                    <Text style={s.triNum}>{k + 1}</Text>
                    <Text style={{ flex: 1, color: C.ink, lineHeight: 20 }}>{e}</Text>
                  </View>
                ))}
                <Text style={{ color: C.ok, fontWeight: '800', marginTop: 8 }}>→ {t.evoque}</Text>
                {!!t.note && <Text style={{ color: C.muted, marginTop: 4, lineHeight: 19, fontSize: 13 }}>{t.note}</Text>}
              </>
            ) : (
              <Text style={{ color: C.muted, marginTop: 6 }}>Récite les 3 éléments, puis touche pour vérifier.</Text>
            )}
          </Card>
        );
      })}
      {!list.length && <Text style={{ color: C.muted }}>Aucune triade trouvée.</Text>}
    </Page>
  );
}

// ---------- Items de l'EDN ----------
const itemsDe = (f: Fiche): number[] => f.items || ITEMS_FICHES[f.id]?.items || [];
const rangDe = (f: Fiche, i: number): 'A' | 'B' | undefined => f.parts[i]?.rg || ITEMS_FICHES[f.id]?.rangs?.[i];

function ItemsView({ back, go }: PP) {
  const [q, setQ] = useState('');
  const [p, setP] = useState(-1);
  const couverts = useMemo(() => { const m: Record<number, number> = {}; FICHES.forEach((f) => itemsDe(f).forEach((n) => { m[n] = (m[n] || 0) + 1; })); return m; }, []);
  const nq = norm(q.trim());
  let nums = ITEMS.map((_, n) => n).filter((n) => n > 0);
  if (p >= 0) nums = nums.filter((n) => n >= PARTIES[p][1] && n <= PARTIES[p][2]);
  if (nq) nums = nums.filter((n) => String(n) === nq || norm(ITEMS[n]).includes(nq));
  const nbCouverts = Object.keys(couverts).length;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Items de l’EDN</H1>
      <Sub>Les 367 items du programme (R2C). {nbCouverts} sont déjà reliés à au moins une fiche de l’appli.</Sub>
      <SearchBox value={q} onChange={setQ} placeholder="Numéro ou mot-clé (ex. 339, anémie)" />
      <Chips>
        <Chip label="Tous" on={p === -1} onPress={() => setP(-1)} />
        {PARTIES.map((x, k) => <Chip key={k} label={`${x[1]}–${x[2]} · ${x[0]}`} on={p === k} onPress={() => setP(k)} />)}
      </Chips>
      {nums.slice(0, 120).map((n) => (
        <Card key={n} onPress={() => go({ s: 'item', n })} style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: 46, fontWeight: '900', color: C.navy }}>{n}</Text>
            <Text style={{ flex: 1, color: C.ink }}>{ITEMS[n]}</Text>
            {couverts[n] ? <Text style={{ color: C.ok, fontWeight: '800', marginLeft: 6 }}>{couverts[n]} ✓</Text> : null}
          </View>
        </Card>
      ))}
      {nums.length > 120 && <Text style={{ color: C.muted, textAlign: 'center' }}>Affine la recherche pour voir les autres items.</Text>}
      <Notice>Intitulés abrégés. Pour le libellé officiel et le détail des connaissances de rang A et B, se référer à l’arrêté du 2 septembre 2020 et au référentiel de votre faculté (LiSA).</Notice>
    </Page>
  );
}

function ItemView({ n, back, openFiche, startQcm }: PP & { n: number }) {
  const fs = FICHES.filter((f) => itemsDe(f).includes(n));
  const mats = Array.from(new Set(fs.map((f) => f.m)));
  const qs = QCM.filter((q) => mats.includes(q.m));
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={'Item ' + n} color={C.navy} />
      <H1>{ITEMS[n]}</H1>
      {fs.length ? (
        <>
          <H2>Fiches liées</H2>
          {fs.map((f) => (
            <Card key={f.id} onPress={() => openFiche(f.id)} style={{ paddingVertical: 12 }}>
              <Text style={{ fontWeight: '800', color: C.ink }}>{f.titre} ›</Text>
              <Text style={{ color: C.muted, fontSize: 12 }}>{matById(f.m)?.nom}</Text>
            </Card>
          ))}
          {qs.length > 0 && <Btn title={`S’entraîner (${Math.min(qs.length, 15)} questions)`} onPress={() => startQcm('Item ' + n, shuffle(qs).slice(0, 15))} />}
        </>
      ) : (
        <Notice>Pas encore de fiche reliée à cet item dans l’appli. Utilise ton référentiel de collège ; tu peux aussi poser une question au tuteur IA.</Notice>
      )}
    </Page>
  );
}

// ---------- Stations ECOS ----------
function EcosList({ st, back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Stations ECOS</H1>
      <Sub>{STATIONS.length} stations chronométrées avec grille d’auto-évaluation. Entraîne-toi à voix haute, idéalement avec un camarade qui joue le patient.</Sub>
      {STATIONS.map((x) => {
        const b = st.ecos?.[x.id];
        return (
          <Card key={x.id} onPress={() => go({ s: 'station', id: x.id })} style={{ paddingVertical: 12 }}>
            <Text style={{ fontWeight: '800', color: C.ink }}>{x.titre} ›</Text>
            <Text style={{ color: C.muted, fontSize: 12 }}>{x.dom} · {x.min} min{b !== undefined ? ` · meilleur score ${b} %` : ''}</Text>
          </Card>
        );
      })}
      <Notice>Stations d’entraînement rédigées pour l’application, inspirées des situations de départ du programme. Les grilles officielles varient d’une faculté à l’autre.</Notice>
    </Page>
  );
}

function StationView({ id, back, save }: PP & { id: string }) {
  const x = STATIONS.find((y) => y.id === id)!;
  const [etat, setEtat] = useState<'pret' | 'go' | 'fini'>('pret');
  const [reste, setReste] = useState(x.min * 60);
  const [coche, setCoche] = useState<number[]>([]);
  useEffect(() => {
    if (etat !== 'go') return;
    const t = setInterval(() => setReste((r) => { if (r <= 1) { setEtat('fini'); return 0; } return r - 1; }), 1000);
    return () => clearInterval(t);
  }, [etat]);
  const pct = Math.round((100 * coche.length) / x.grille.length);
  const fini = () => { setEtat('fini'); };
  const enregistrer = () => { save((s0) => ({ ...s0, ecos: { ...(s0.ecos || {}), [id]: Math.max(s0.ecos?.[id] || 0, pct) } })); back(); };
  return (
    <Page>
      <Back onPress={back} />
      <Tag label={x.dom} />
      <H1>{x.titre}</H1>
      <Card style={{ backgroundColor: C.navyL, borderColor: 'transparent' }}>
        <Text style={u.label}>Consigne</Text>
        <Text style={u.item}>{x.consigne}</Text>
      </Card>
      <View style={{ alignItems: 'center', marginVertical: 8 }}>
        <Text style={{ fontSize: 44, fontWeight: '900', color: reste < 60 && etat === 'go' ? C.ko : C.ink }}>{Math.floor(reste / 60)}:{String(reste % 60).padStart(2, '0')}</Text>
      </View>
      {etat === 'pret' && <Btn title="Démarrer la station" onPress={() => setEtat('go')} />}
      {etat === 'go' && <Btn kind="ghost" title="J’ai terminé" onPress={fini} />}
      {etat === 'fini' && (
        <>
          <H2>Grille d’auto-évaluation</H2>
          <Sub>Coche ce que tu as fait.</Sub>
          {x.grille.map((g, k) => {
            const on = coche.includes(k);
            return (
              <Pressable key={k} onPress={() => setCoche((c) => (on ? c.filter((y) => y !== k) : [...c, k]))} style={[s.choice, on && { borderColor: C.ok, backgroundColor: C.okL }]}>
                <Text style={{ color: C.ink }}>{on ? '☑ ' : '☐ '}{g}</Text>
              </Pressable>
            );
          })}
          <Card style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: '900', color: pct >= 70 ? C.ok : pct >= 50 ? C.gold : C.ko }}>{pct} %</Text>
            <Text style={{ color: C.muted }}>{coche.length} / {x.grille.length} items</Text>
          </Card>
          <Btn title="Enregistrer mon score" onPress={enregistrer} />
          <Btn kind="ghost" title="Recommencer" onPress={() => { setCoche([]); setReste(x.min * 60); setEtat('pret'); }} />
        </>
      )}
    </Page>
  );
}

// ---------- Arbres décisionnels ----------
function ArbresList({ back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Arbres décisionnels</H1>
      <Sub>Raisonne pas à pas devant les grands motifs de consultation.</Sub>
      {ARBRES.map((a) => (
        <Card key={a.id} onPress={() => go({ s: 'arbre', id: a.id })} style={{ paddingVertical: 12 }}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{a.titre} ›</Text>
          <Text style={{ color: C.muted, fontSize: 12 }}>{a.d}</Text>
        </Card>
      ))}
      <Notice>Arbres simplifiés à visée pédagogique : ils ne remplacent ni les recommandations ni les protocoles de service.</Notice>
    </Page>
  );
}

function ArbreView({ id, back }: PP & { id: string }) {
  const a = ARBRES.find((x) => x.id === id)!;
  const [chemin, setChemin] = useState<[string, string][]>([]);
  const cur = chemin.length ? chemin[chemin.length - 1][1] : 'start';
  const n = a.n[cur];
  return (
    <Page>
      <Back onPress={back} />
      <H1>{a.titre}</H1>
      {chemin.map(([lab, to], k) => (
        <Text key={k} style={{ color: C.muted, fontSize: 13, marginBottom: 4 }}>{k + 1}. {a.n[k ? chemin[k - 1][1] : 'start'].t.slice(0, 70)}… → <Text style={{ fontWeight: '800', color: C.navy }}>{lab}</Text></Text>
      ))}
      <Card style={n.fin ? { backgroundColor: C.okL, borderColor: 'transparent' } : undefined}>
        {n.fin && <Text style={u.label}>Conduite à tenir</Text>}
        <Text style={[u.item, { fontWeight: n.fin ? '500' : '800' }]}>{n.t}</Text>
      </Card>
      {(n.c || []).map(([lab, to]) => <Btn key={to} kind="ghost" title={lab} onPress={() => setChemin((c) => [...c, [lab, to]])} />)}
      {chemin.length > 0 && <Btn kind="ghost" title="‹ Étape précédente" onPress={() => setChemin((c) => c.slice(0, -1))} />}
      {n.fin && <Btn title="Recommencer" onPress={() => setChemin([])} />}
    </Page>
  );
}

// ---------- Carnet de stage ----------
type Stage = { id: string; service: string; periode: string; notes: string };
function Carnet({ st, save, back }: PP) {
  const c = st.carnet || { stages: [], gestes: {} };
  const [service, setService] = useState('');
  const [periode, setPeriode] = useState('');
  const [notes, setNotes] = useState('');
  const maj = (f: (x: { stages: Stage[]; gestes: Record<string, number> }) => { stages: Stage[]; gestes: Record<string, number> }) => save((x) => ({ ...x, carnet: f(x.carnet || { stages: [], gestes: {} }) }));
  const champ = (v: string, set: (s: string) => void, ph: string, multi?: boolean) => (
    <TextInput value={v} onChangeText={set} placeholder={ph} placeholderTextColor={C.muted} multiline={multi} style={{ borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 10, color: C.ink, marginBottom: 8, minHeight: multi ? 70 : undefined, textAlignVertical: 'top', backgroundColor: C.card }} />
  );
  const faits = GESTES.filter((g) => (c.gestes[g] || 0) > 0).length;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Carnet de stage</H1>
      <Notice tone="warn">Carnet personnel. N’y écris jamais de nom, d’initiales ni d’information permettant d’identifier un patient.</Notice>
      <H2>Mes stages</H2>
      {c.stages.map((x) => (
        <Card key={x.id}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{x.service}</Text>
          {!!x.periode && <Text style={{ color: C.muted }}>{x.periode}</Text>}
          {!!x.notes && <Text style={[u.item, { marginTop: 6 }]}>{x.notes}</Text>}
          <Pressable onPress={() => maj((y) => ({ ...y, stages: y.stages.filter((z) => z.id !== x.id) }))} style={{ marginTop: 6 }}><Text style={{ color: C.ko, fontWeight: '700' }}>Supprimer</Text></Pressable>
        </Card>
      ))}
      <Card>
        <Text style={u.label}>Ajouter un stage</Text>
        {champ(service, setService, 'Service (ex. cardiologie, CHU)')}
        {champ(periode, setPeriode, 'Période (ex. janvier – mars 2027)')}
        {champ(notes, setNotes, 'Objectifs, apprentissages, points à revoir', true)}
        <Btn title="Ajouter" disabled={!service.trim()} onPress={() => { maj((y) => ({ ...y, stages: [...y.stages, { id: String(Date.now()), service: service.trim(), periode: periode.trim(), notes: notes.trim() }] })); setService(''); setPeriode(''); setNotes(''); }} />
      </Card>
      <H2>Gestes et compétences ({faits}/{GESTES.length})</H2>
      {GESTES.map((g) => {
        const n = c.gestes[g] || 0;
        return (
          <Card key={g} style={{ paddingVertical: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ flex: 1, color: C.ink }}>{n > 0 ? '✓ ' : ''}{g}</Text>
              <Pressable onPress={() => maj((y) => ({ ...y, gestes: { ...y.gestes, [g]: Math.max(0, n - 1) } }))} hitSlop={8} style={s.cpt}><Text style={{ color: C.ink, fontWeight: '900' }}>−</Text></Pressable>
              <Text style={{ width: 28, textAlign: 'center', fontWeight: '800', color: C.ink }}>{n}</Text>
              <Pressable onPress={() => maj((y) => ({ ...y, gestes: { ...y.gestes, [g]: n + 1 } }))} hitSlop={8} style={s.cpt}><Text style={{ color: C.ink, fontWeight: '900' }}>+</Text></Pressable>
            </View>
          </Card>
        );
      })}
    </Page>
  );
}

// ---------- Tuteur IA ----------
type Msg = { r: 'user' | 'assistant'; t: string };
function Tuteur({ back, user, sortir }: PP) {
  const [msgs, setMsgs] = useState<Msg[]>([{ r: 'assistant', t: 'Bonjour ! Je suis le tuteur IA de CAP Médecin. Pose-moi une question de cours : physiopathologie, sémiologie, conduite à tenir, pharmacologie, LCA… Je ne remplace ni tes enseignants ni les référentiels, et je ne donne pas d’avis sur un patient réel. N’écris jamais de données permettant d’identifier un patient.' }]);
  const [txt, setTxt] = useState('');
  const [busy, setBusy] = useState(false);
  if (!user)
    return (
      <Page>
        <Back onPress={back} />
        <H1>Tuteur IA</H1>
        <Notice>Le tuteur IA est réservé aux comptes (gratuits), pour limiter les abus.</Notice>
        <Btn title="Se connecter ou créer un compte" onPress={async () => { await AsyncStorage.removeItem('capm:sanscompte').catch(() => {}); sortir(); }} />
      </Page>
    );
  const envoyer = async () => {
    const t = txt.trim();
    if (!t || busy) return;
    const nv: Msg[] = [...msgs, { r: 'user', t }];
    setMsgs(nv); setTxt(''); setBusy(true);
    try {
      const rep = await demanderTuteur(nv.slice(1).slice(-12).map((m) => ({ role: m.r, content: m.t })));
      setMsgs([...nv, { r: 'assistant', t: rep }]);
    } catch (e: any) {
      setMsgs([...nv, { r: 'assistant', t: '⚠ ' + (e?.message || 'Le tuteur est indisponible pour le moment.') }]);
    }
    setBusy(false);
  };
  return (
    <Page>
      <Back onPress={back} />
      <H1>Tuteur IA</H1>
      {msgs.map((m, k) => (
        <View key={k} style={{ alignSelf: m.r === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%', backgroundColor: m.r === 'user' ? C.red : C.card, borderColor: C.line, borderWidth: m.r === 'user' ? 0 : 1, borderRadius: 14, padding: 10, marginBottom: 8 }}>
          <Text style={{ color: m.r === 'user' ? '#fff' : C.ink, lineHeight: 21 }}>{m.t}</Text>
        </View>
      ))}
      {busy && <Text style={{ color: C.muted, marginBottom: 8 }}>Le tuteur réfléchit…</Text>}
      <TextInput value={txt} onChangeText={setTxt} placeholder="Ta question (ex. : explique-moi le score CHA2DS2-VASc)" placeholderTextColor={C.muted} multiline style={{ borderWidth: 1, borderColor: C.line, borderRadius: 12, padding: 10, color: C.ink, minHeight: 60, textAlignVertical: 'top', backgroundColor: C.card }} />
      <Btn title="Envoyer" disabled={!txt.trim() || busy} onPress={envoyer} />
      <Text style={{ color: C.muted, fontSize: 11, lineHeight: 16 }}>Réponses générées par une IA : elles peuvent contenir des erreurs. Vérifie toujours dans tes cours et les recommandations officielles.</Text>
    </Page>
  );
}

// ---------- Administration des signalements ----------
function AdminView({ back, user }: PP) {
  const [list, setList] = useState<any[] | null>(null);
  const [tous, setTous] = useState(false);
  const [err, setErr] = useState('');
  const charger = async () => { setErr(''); try { setList(await listerSignalements(tous)); } catch (e: any) { setErr(e?.message || 'Erreur'); setList([]); } };
  useEffect(() => { charger(); }, [tous]);
  if (!estAdmin(user)) return <Page><Back onPress={back} /><Notice>Accès réservé.</Notice></Page>;
  return (
    <Page>
      <Back onPress={back} />
      <H1>Signalements</H1>
      <Chips>
        <Chip label="À traiter" on={!tous} onPress={() => setTous(false)} />
        <Chip label="Tous" on={tous} onPress={() => setTous(true)} />
      </Chips>
      {!!err && <Text style={{ color: C.ko }}>{err}</Text>}
      {list === null && <Text style={{ color: C.muted }}>Chargement…</Text>}
      {list && !list.length && <Text style={{ color: C.muted }}>Aucun signalement.</Text>}
      {(list || []).map((x) => (
        <Card key={x.id} style={x.traite ? { opacity: 0.6 } : undefined}>
          <Text style={u.label}>{new Date(x.created_at).toLocaleString('fr-FR')} · {x.plateforme || ''}</Text>
          <Text style={{ fontWeight: '800', color: C.navy, marginBottom: 4 }}>{x.cible}</Text>
          <Text style={u.item}>{x.texte}</Text>
          {String(x.cible).startsWith('fiche:') && ficheById(String(x.cible).slice(6)) && <Text style={{ color: C.muted, marginTop: 4 }}>Fiche : {ficheById(String(x.cible).slice(6))?.titre}</Text>}
          <Btn kind="ghost" title={x.traite ? 'Marquer à traiter' : '✓ Marquer traité'} onPress={async () => { try { await marquerSignalement(x.id, !x.traite); charger(); } catch (e: any) { setErr(e?.message || 'Erreur'); } }} />
        </Card>
      ))}
    </Page>
  );
}

// ---------- Rappels quotidiens (notifications locales, Android et iOS) ----------
async function planifierRappel(h: number | null): Promise<string> {
  if (Platform.OS === 'web') return 'web';
  try {
    const N: any = require('expo-notifications');
    await N.cancelAllScheduledNotificationsAsync();
    if (h === null) return 'off';
    const p = await N.requestPermissionsAsync();
    if (!p.granted) return 'refus';
    if (Platform.OS === 'android') await N.setNotificationChannelAsync('rappels', { name: 'Rappels de révision', importance: N.AndroidImportance.DEFAULT });
    await N.scheduleNotificationAsync({
      content: { title: 'CAP Médecin', body: 'Quelques QCM aujourd’hui ? 10 minutes suffisent pour garder le rythme.' },
      trigger: { type: N.SchedulableTriggerInputTypes.DAILY, hour: h, minute: 0, channelId: 'rappels' },
    });
    return 'ok';
  } catch {
    return 'erreur';
  }
}

function Rappels() {
  const [v, setV] = useState('off');
  const [msg, setMsg] = useState('');
  useEffect(() => { AsyncStorage.getItem('capm:rappel').then((x) => setV(x || 'off')); }, []);
  const choisir = async (x: string) => {
    const r = await planifierRappel(x === 'off' ? null : Number(x));
    if (r === 'ok' || r === 'off') { setV(x); AsyncStorage.setItem('capm:rappel', x).catch(() => {}); }
    setMsg(r === 'ok' ? `Rappel programmé chaque jour à ${x} h.` : r === 'off' ? 'Rappels désactivés.' : r === 'web' ? 'Les rappels sont disponibles dans l’application Android.' : r === 'refus' ? 'Autorise les notifications dans les réglages du téléphone.' : 'Impossible de programmer le rappel.');
  };
  return (
    <>
      <H2>Rappel de révision</H2>
      <Chips>
        {[['off', 'Désactivé'], ['8', '8 h'], ['12', '12 h'], ['18', '18 h'], ['20', '20 h'], ['21', '21 h']].map(([x, l]) => (
          <Chip key={x} label={l} on={v === x} onPress={() => choisir(x)} />
        ))}
      </Chips>
      {!!msg && <Text style={{ color: C.muted, marginBottom: 8 }}>{msg}</Text>}
    </>
  );
}

// ---------- Mon compte ----------
function CompteView({ back, user, sortir, sync }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mon compte</H1>
      <Compte user={user} sortir={sortir} sync={sync} />
      <Notice>Ton compte sert uniquement à sauvegarder ta progression (fiches lues, scores, favoris, notes) et à la retrouver sur tes autres appareils. N’écris jamais de données de patient dans tes notes.</Notice>
    </Page>
  );
}

// ---------- Révision express (cartes mémoire, système de Leitner) ----------
type Carte = { k: string; recto: string; sous?: string; verso: string; detail?: string };
const INTERVALLES = [0, 1, 3, 7, 14, 30];
function cartes(deck: string): Carte[] {
  if (deck === 'arrets') return ARRETS.map((a) => ({ k: 'fr:' + a.id, recto: a.nom, sous: a.jur, verso: a.date, detail: a.apport }));
  if (deck === 'articles') return ARTICLES.map((a) => ({ k: 'fa:' + a.id, recto: a.num, sous: CODES.find((c) => c.id === a.code)?.nom, verso: a.titre, detail: a.texte }));
  if (deck === 'adages') return ADAGES.map((a) => ({ k: 'fd:' + a.la, recto: a.la, verso: a.fr, detail: a.sens }));
  return LEXIQUE.map((t) => ({ k: 'fl:' + t.t, recto: t.t, verso: t.d }));
}
const DECKS: [string, string, string][] = [
  ['arrets', '💊 Médicaments', 'Classe → indications et précautions'],
  ['articles', '⚕️ Valeurs et scores', 'Repère → valeur et interprétation'],
  ['adages', '🧠 Mnémos', 'Mnémo → signification'],
  ['lexique', '📖 Vocabulaire médical', 'Terme → définition'],
];
function aReviser(st: St, deck: string) {
  const t = today();
  return cartes(deck).filter((c) => !st.due[c.k] || st.due[c.k] <= t);
}

function FlashMenu({ st, back, go }: PP) {
  return (
    <Page>
      <Back onPress={back} />
      <H1>Révision express</H1>
      <Sub>Retourne la carte, puis dis honnêtement si tu savais. Une carte sue revient de plus en plus tard (1, 3, 7, 14 puis 30 jours) ; une carte ratée revient aujourd’hui.</Sub>
      {DECKS.map(([id, t, d]) => {
        const tout = cartes(id);
        const dues = aReviser(st, id).length;
        const sues = tout.filter((c) => (st.box[c.k] || 0) >= 3).length;
        return (
          <Card key={id} onPress={() => go({ s: 'flash', deck: id })}>
            <Text style={{ fontWeight: '800', color: C.ink, fontSize: 16 }}>{t} ›</Text>
            <Text style={{ color: C.muted, fontSize: 13, marginBottom: 8 }}>{d} · {dues} à revoir aujourd’hui</Text>
            <Bar value={tout.length ? sues / tout.length : 0} color={C.gold} />
            <Text style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>{sues} / {tout.length} bien ancrées</Text>
          </Card>
        );
      })}
    </Page>
  );
}

function FlashRun({ deck, st, save, back }: PP & { deck: string }) {
  const [pile] = useState(() => shuffle(aReviser(st, deck)).slice(0, 20));
  const [i, setI] = useState(0);
  const [vu, setVu] = useState(false);
  const [ok, setOk] = useState(0);
  const titre = DECKS.find((d) => d[0] === deck)?.[1] || '';
  const noter = (su: boolean) => {
    const c = pile[i];
    save((x) => {
      const b = su ? Math.min(5, (x.box[c.k] || 0) + 1) : 0;
      const d = new Date();
      d.setDate(d.getDate() + INTERVALLES[b]);
      return { ...x, box: { ...x.box, [c.k]: b }, due: { ...x.due, [c.k]: su ? d.toISOString().slice(0, 10) : today() } };
    });
    if (su) setOk((n) => n + 1);
    setVu(false);
    setI(i + 1);
  };
  if (!pile.length)
    return (
      <Page>
        <Back onPress={back} />
        <H1>{titre}</H1>
        <Notice>Rien à revoir pour aujourd’hui dans ce paquet. Reviens demain, ou essaie un autre paquet.</Notice>
      </Page>
    );
  if (i >= pile.length)
    return (
      <Page>
        <Back onPress={back} />
        <View style={s.hero}>
          <Text style={s.heroL}>{titre}</Text>
          <Text style={{ color: '#fff', fontSize: 36, fontWeight: '900' }}>{ok} / {pile.length}</Text>
          <Text style={{ color: 'rgba(255,255,255,0.85)' }}>cartes sues du premier coup</Text>
        </View>
        <Btn title="Terminer" onPress={back} />
      </Page>
    );
  const c = pile[i];
  return (
    <Page>
      <Back onPress={back} label="Quitter" />
      <Text style={{ color: C.muted, fontWeight: '700', marginBottom: 8 }}>{titre} · {i + 1}/{pile.length}</Text>
      <Bar value={i / pile.length} color={C.gold} />
      <Pressable onPress={() => setVu(true)} style={[u.card, { minHeight: 260, justifyContent: 'center', marginTop: 14, borderWidth: 2, borderColor: vu ? C.gold : C.line }]}>
        <Text style={{ fontSize: 22, fontWeight: '900', color: C.ink, textAlign: 'center', fontStyle: 'normal' }}>{c.recto}</Text>
        {!!c.sous && <Text style={{ color: C.red, textAlign: 'center', marginTop: 6, fontWeight: '700' }}>{c.sous}</Text>}
        {vu ? (
          <View style={{ marginTop: 18, borderTopWidth: 1, borderColor: C.line, paddingTop: 14 }}>
            <Text style={{ fontSize: 16, fontWeight: '800', color: C.navy, textAlign: 'center', lineHeight: 23 }}>{c.verso}</Text>
            {!!c.detail && <Text style={{ color: C.ink, marginTop: 10, lineHeight: 21 }} numberOfLines={12}>{c.detail}</Text>}
          </View>
        ) : (
          <Text style={{ color: C.muted, textAlign: 'center', marginTop: 20 }}>Touchez la carte pour la retourner</Text>
        )}
      </Pressable>
      {vu && (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{ flex: 1 }}><Btn kind="ghost" title="✗ À revoir" onPress={() => noter(false)} /></View>
          <View style={{ flex: 1 }}><Btn title="✓ Je savais" onPress={() => noter(true)} /></View>
        </View>
      )}
    </Page>
  );
}

function MesNotes({ st, back, openFiche }: PP) {
  const ns = Object.entries(st.notes).filter(([k, v]) => v && v.trim() && ficheById(k));
  return (
    <Page>
      <Back onPress={back} />
      <H1>Mes notes</H1>
      {ns.length === 0 && <Notice>Tu n’as pas encore de notes. Ouvre une fiche et écris dans « Mes notes » en bas de page.</Notice>}
      {ns.map(([k, v]) => (
        <Card key={k} onPress={() => openFiche(k)}>
          <Text style={{ fontWeight: '800', color: C.ink }}>{ficheById(k)?.titre} ›</Text>
          <Text style={{ color: C.muted, marginTop: 4, lineHeight: 20 }} numberOfLines={4}>{v}</Text>
        </Card>
      ))}
    </Page>
  );
}

function Progression({ st, back, go, racine, user, sync }: PP) {
  const lus = Object.keys(st.lu).length;
  return (
    <Page>
      {!racine && <Back onPress={back} />}
      <H1>Mes progrès</H1>
      {CLOUD_OK && <Text style={{ color: user ? (sync === 'erreur' ? C.gold : C.ok) : C.muted, marginBottom: 10, fontSize: 13 }}>{user ? (sync === 'erreur' ? '⚠ Hors ligne : sauvegarde en attente' : '☁ Sauvegardé dans ton compte') : 'Sans compte : progression gardée sur cet appareil'}</Text>}
      <Card>
        <Row label="Fiches lues" value={`${lus} / ${FICHES.length}`} />
        <Row label="Fiches maîtrisées" value={String(Object.keys(st.maitrise).length)} />
        <Row label="Questions répondues" value={String(st.qTot)} />
        <Row label="Taux de réussite" value={st.qTot ? Math.round((100 * st.qOk) / st.qTot) + ' %' : '—'} />
        <Row label="Cas cliniques faits" value={`${Object.keys(st.casDone).length} / ${CAS.length}`} />
        <Row label="Cartes mémoire bien ancrées" value={String(Object.values(st.box).filter((b) => b >= 3).length)} />
        <Row label="Jours de révision" value={String(st.jours.length)} />
      </Card>
      <H2>Par matière</H2>
      {MATIERES.map((m) => {
        const fs = FICHES.filter((f) => f.m === m.id);
        const l = fs.filter((f) => st.lu[f.id]).length;
        const r = st.parM[m.id];
        return (
          <Card key={m.id} onPress={() => go({ s: 'matiere', id: m.id })} style={{ paddingVertical: 12 }}>
            <Text style={{ fontWeight: '800', color: C.ink }}>{m.icone} {m.nom} <Text style={{ color: C.muted, fontWeight: '600' }}>· {m.niv}</Text></Text>
            <View style={{ marginTop: 8 }}><Bar value={fs.length ? l / fs.length : 0} /></View>
            <Text style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>{l}/{fs.length} fiches{r ? ` · QCM ${Math.round((100 * r[1]) / Math.max(1, r[0]))} % sur ${r[0]} questions` : ''}</Text>
          </Card>
        );
      })}
    </Page>
  );
}

const s = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#12355B', paddingHorizontal: 16, paddingBottom: 10 },
  logo: { width: 30, height: 30, borderRadius: 9, backgroundColor: '#0B7A75', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  brand: { color: '#fff', fontWeight: '900', fontSize: 17, letterSpacing: 1.2, flex: 1 },
  triNum: { width: 22, height: 22, borderRadius: 11, backgroundColor: C.navy, color: '#fff', textAlign: 'center', fontWeight: '900', fontSize: 12, lineHeight: 22, marginRight: 8, overflow: 'hidden' },
  rang: { color: '#fff', fontWeight: '800', fontSize: 11, paddingHorizontal: 7, paddingVertical: 2, borderRadius: 6, overflow: 'hidden' },
  cpt: { width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: C.line, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center' },
  tabbar: { flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderColor: C.line, backgroundColor: C.bar, paddingBottom: Platform.OS === 'ios' ? 0 : 6, paddingTop: 6 },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 4 },
  hero: { backgroundColor: '#12355B', borderRadius: 20, padding: 18, marginBottom: 12 },
  heroL: { color: 'rgba(255,255,255,0.75)', fontWeight: '800', fontSize: 12, letterSpacing: 1.2, textTransform: 'uppercase' },
  heroT: { color: '#fff', fontWeight: '900', fontSize: 22, marginTop: 4 },
  quick: { width: '31%', backgroundColor: C.card, borderWidth: 1, borderColor: C.line, borderRadius: 14, paddingVertical: 14, alignItems: 'center' },
  choice: { borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card, borderRadius: 14, padding: 14, marginBottom: 8 },
});
