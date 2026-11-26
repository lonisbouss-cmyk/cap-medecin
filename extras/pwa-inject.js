// Ajoute le manifeste, l'icône Apple et le service worker dans index.html exporté
const fs = require('fs');
const f = process.argv[2];
let h = fs.readFileSync(f, 'utf8');
const tags = [
  '<link rel="manifest" href="./manifest.webmanifest">',
  '<meta name="theme-color" content="#12355B">',
  '<link rel="apple-touch-icon" href="./icon.png">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="CAP Médecin">',
  '<meta name="description" content="Réviser la médecine, de la PASS/LAS à l’EDN et aux ECOS : cours, QCM, cas cliniques, mémo, calculateurs.">',
].join('');
const sw = '<script>if("serviceWorker" in navigator){window.addEventListener("load",function(){navigator.serviceWorker.register("./sw.js").catch(function(){})})}</script>';
h = h.replace('</head>', tags + '</head>').replace('</body>', sw + '</body>');
h = h.replace(/<html lang="[^"]*"/, '<html lang="fr"');
fs.writeFileSync(f, h);
console.log('PWA OK');
