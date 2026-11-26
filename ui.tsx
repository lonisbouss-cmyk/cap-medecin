// CAP MÉDECIN — composants d'interface partagés
import React from 'react';
import { View, Text, Pressable, ScrollView, TextInput, StyleSheet, Platform } from 'react-native';

const LIGHT = {
  bg: '#F3F6F8',
  card: '#FFFFFF',
  ink: '#16232E',
  muted: '#66727D',
  line: '#DCE4EA',
  navy: '#12355B',
  navyL: '#E5EDF5',
  red: '#0B7A75',
  redL: '#E0F2F1',
  gold: '#C0772A',
  goldL: '#F8EDDD',
  ok: '#2E7D4F',
  okL: '#E3F2E8',
  ko: '#B3261E',
  koL: '#FBE4E2',
  bar: '#FFFFFF',
};
const DARK = {
  bg: '#0F161C',
  card: '#18222B',
  ink: '#E8EEF2',
  muted: '#9DABB6',
  line: '#283643',
  navy: '#9CC3E6',
  navyL: '#1D3246',
  red: '#5CCFC6',
  redL: '#15332F',
  gold: '#E8B26A',
  goldL: '#3A2C1B',
  ok: '#7BD39A',
  okL: '#1D3527',
  ko: '#F28B82',
  koL: '#3B1F1E',
  bar: '#141D25',
};

export const SOMBRE: boolean = (globalThis as any).__capTheme === 'dark';
export const C = SOMBRE ? DARK : LIGHT;

export const norm = (s: string) =>
  (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[’']/g, ' ');

export function Page({ children, scroll = true }: { children: any; scroll?: boolean }) {
  if (!scroll) return <View style={{ flex: 1, padding: 16 }}>{children}</View>;
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 48 }} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export const H1 = ({ children }: any) => <Text style={u.h1}>{children}</Text>;
export const H2 = ({ children }: any) => <Text style={u.h2}>{children}</Text>;
export const Sub = ({ children }: any) => <Text style={u.sub}>{children}</Text>;

export function Card({ children, onPress, style }: { children: any; onPress?: () => void; style?: any }) {
  if (onPress)
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [u.card, style, pressed && { opacity: 0.75 }]}>
        {children}
      </Pressable>
    );
  return <View style={[u.card, style]}>{children}</View>;
}

export function Btn({ title, onPress, kind = 'primary', disabled }: { title: string; onPress: () => void; kind?: 'primary' | 'ghost' | 'gold'; disabled?: boolean }) {
  const bg = kind === 'primary' ? C.red : kind === 'gold' ? C.gold : 'transparent';
  const fg = kind === 'ghost' ? C.red : '#fff';
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        u.btn,
        { backgroundColor: bg, borderColor: kind === 'ghost' ? C.red : bg, opacity: disabled ? 0.45 : pressed ? 0.8 : 1 },
      ]}
    >
      <Text style={{ color: fg, fontWeight: '800', fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}

export function Back({ onPress, label = 'Retour' }: { onPress: () => void; label?: string }) {
  return (
    <Pressable onPress={onPress} hitSlop={10} style={{ paddingVertical: 6, marginBottom: 4, alignSelf: 'flex-start' }}>
      <Text style={{ color: C.red, fontWeight: '700', fontSize: 15 }}>‹ {label}</Text>
    </Pressable>
  );
}

export function Tag({ label, color }: { label: string; color?: string }) {
  return (
    <View style={[u.tag, color ? { backgroundColor: color } : null]}>
      <Text style={{ color: color ? '#fff' : C.navy, fontWeight: '700', fontSize: 12 }}>{label}</Text>
    </View>
  );
}

export function Chip({ label, on, onPress }: { label: string; on?: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[u.chip, on && { backgroundColor: C.navy, borderColor: C.navy }]}>
      <Text style={{ color: on ? (SOMBRE ? '#12151D' : '#fff') : C.ink, fontWeight: '700', fontSize: 13 }}>{label}</Text>
    </Pressable>
  );
}

export function Chips({ children }: any) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 10, flexGrow: 0 }} contentContainerStyle={{ gap: 8, paddingRight: 16 }}>
      {children}
    </ScrollView>
  );
}

export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (s: string) => void; placeholder: string }) {
  return (
    <View style={u.search}>
      <Text style={{ color: C.muted, marginRight: 8 }}>⌕</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={C.muted}
        style={{ flex: 1, color: C.ink, fontSize: 15, paddingVertical: Platform.OS === 'web' ? 8 : 6 }}
        autoCorrect={false}
      />
      {!!value && (
        <Pressable onPress={() => onChange('')} hitSlop={10}>
          <Text style={{ color: C.muted, fontSize: 16 }}>✕</Text>
        </Pressable>
      )}
    </View>
  );
}

export function Bar({ value, color }: { value: number; color?: string }) {
  const v = Math.max(0, Math.min(1, value || 0));
  return (
    <View style={{ height: 8, backgroundColor: C.line, borderRadius: 4, overflow: 'hidden' }}>
      <View style={{ width: `${v * 100}%`, height: 8, backgroundColor: color || C.red }} />
    </View>
  );
}

export function Notice({ children, tone = 'info' }: { children: any; tone?: 'info' | 'warn' }) {
  return (
    <View style={[u.card, { backgroundColor: tone === 'warn' ? C.goldL : C.navyL, borderColor: 'transparent' }]}>
      <Text style={{ color: C.ink, fontSize: 13, lineHeight: 19 }}>{children}</Text>
    </View>
  );
}

export function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: C.line }}>
      <Text style={{ color: C.muted, flex: 1, marginRight: 10 }}>{label}</Text>
      <Text style={{ color: C.ink, fontWeight: '700', flexShrink: 1, textAlign: 'right' }}>{value}</Text>
    </View>
  );
}

export const u = StyleSheet.create({
  h1: { fontSize: 26, fontWeight: '900', color: C.ink, marginBottom: 6, letterSpacing: -0.3 },
  h2: { fontSize: 18, fontWeight: '800', color: C.ink, marginTop: 14, marginBottom: 8 },
  sub: { fontSize: 14, color: C.muted, marginBottom: 12, lineHeight: 20 },
  card: { backgroundColor: C.card, borderRadius: 16, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: C.line },
  btn: { paddingVertical: 13, paddingHorizontal: 16, borderRadius: 14, alignItems: 'center', marginVertical: 5, borderWidth: 1.5 },
  tag: { alignSelf: 'flex-start', backgroundColor: C.navyL, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3, marginBottom: 6, marginRight: 6 },
  chip: { borderWidth: 1, borderColor: C.line, backgroundColor: C.card, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7 },
  search: { flexDirection: 'row', alignItems: 'center', backgroundColor: C.card, borderWidth: 1, borderColor: C.line, borderRadius: 14, paddingHorizontal: 12, marginBottom: 10 },
  item: { fontSize: 15, color: C.ink, lineHeight: 22 },
  label: { fontSize: 12, fontWeight: '800', color: C.muted, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 6 },
});
