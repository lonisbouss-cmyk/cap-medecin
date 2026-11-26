// CAP MÉDECIN — démarrage : lit le thème et la taille du texte avant de charger l'appli
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Appearance, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function appliquerTaille(z: number) {
  const T: any = Text;
  if (!T.__capPatched && T.render) {
    const orig = T.render;
    T.render = function (props: any, ref: any) {
      const zoom = (globalThis as any).__capZoom || 1;
      if (zoom === 1) return orig.call(this, props, ref);
      const flat = Array.isArray(props.style) ? Object.assign({}, ...props.style.flat(9).filter(Boolean)) : props.style || {};
      const fs = (flat.fontSize || 14) * zoom;
      const lh = flat.lineHeight ? flat.lineHeight * zoom : undefined;
      return orig.call(this, { ...props, style: [props.style, { fontSize: fs }, lh ? { lineHeight: lh } : null] }, ref);
    };
    T.__capPatched = true;
  }
  (globalThis as any).__capZoom = z;
}

export default function Boot() {
  const [App, setApp] = useState<any>(null);
  useEffect(() => {
    (async () => {
      let theme = 'auto';
      let zoom = 1;
      try {
        theme = (await AsyncStorage.getItem('capm:theme')) || 'auto';
        zoom = Number(await AsyncStorage.getItem('capm:zoom')) || 1;
      } catch {}
      const dark = theme === 'dark' || (theme === 'auto' && Appearance.getColorScheme() === 'dark');
      (globalThis as any).__capTheme = dark ? 'dark' : 'light';
      appliquerTaille(zoom);
      const mod = require('./main');
      setApp(() => mod.default);
    })();
  }, []);
  if (!App)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#12355B' }}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  return <App />;
}
