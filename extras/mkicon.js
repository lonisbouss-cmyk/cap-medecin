// CAP Médecin — dessine les icônes (croix médicale et tracé ECG) en PNG, sans dépendance
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function crc32(buf) {
  let c, crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc >>> 8) ^ c;
  }
  return (crc ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function png(w, h, px) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    px.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

// Formes sur une grille de 1024 x 1024
const GOLD = [212, 166, 84], GOLD2 = [240, 200, 120];
function rr(x0, y0, x1, y1, r) {
  return (x, y) => {
    if (x < x0 || x > x1 || y < y0 || y > y1) return false;
    const cx = Math.min(Math.max(x, x0 + r), x1 - r), cy = Math.min(Math.max(y, y0 + r), y1 - r);
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
  };
}
function ell(x0, y0, x1, y1) {
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx = (x1 - x0) / 2, ry = (y1 - y0) / 2;
  return (x, y) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
}
function halfEll(x0, y0, x1, y1) {
  const e = ell(x0, y0, x1, y1), cy = (y0 + y1) / 2;
  return (x, y) => y >= cy && e(x, y);
}
function seg(ax, ay, bx, by, wd) {
  return (x, y) => {
    const dx = bx - ax, dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy)));
    const px = ax + t * dx, py = ay + t * dy;
    return (x - px) ** 2 + (y - py) ** 2 <= (wd / 2) ** 2;
  };
}
const c = 512;
const SHAPES = [];
const add = (f, col) => SHAPES.push([f, col]);
const WHITE = [246, 250, 251];
add(rr(c - 115, 215, c + 115, 809, 48), WHITE);
add(rr(215, c - 115, 809, c + 115, 48), WHITE);
const ECG = [[120, 512], [370, 512], [420, 420], [480, 650], [545, 290], [605, 600], [650, 512], [904, 512]];
for (let i = 0; i < ECG.length - 1; i++) add(seg(ECG[i][0], ECG[i][1], ECG[i + 1][0], ECG[i + 1][1], 34), GOLD);

function render(size, { bg, scale = 1, w = size, h = size, ox = 0, oy = 0 }) {
  const px = Buffer.alloc(w * h * 4);
  const ss = 2;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < ss; sy++)
        for (let sx = 0; sx < ss; sx++) {
          const X = ((x - ox + (sx + 0.5) / ss) / size) * 1024, Y = ((y - oy + (sy + 0.5) / ss) / size) * 1024;
          const gx = (X - 512) / scale + 512, gy = (Y - 512) / scale + 512;
          let col = null;
          for (const [f, cl] of SHAPES) if (f(gx, gy)) col = cl;
          if (col) { r += col[0]; g += col[1]; b += col[2]; a += 255; }
          else if (bg) {
            const t = Math.max(0, Math.min(1, (y / h)));
            r += 18 + (8 - 18) * t; g += 53 + (88 - 53) * t; b += 91 + (86 - 91) * t; a += 255;
          }
        }
      const n = ss * ss, i = (y * w + x) * 4;
      px[i] = a ? r / (a / 255) : 0; px[i + 1] = a ? g / (a / 255) : 0; px[i + 2] = a ? b / (a / 255) : 0; px[i + 3] = a / n;
    }
  }
  return png(w, h, px);
}

const out = path.join(process.cwd(), 'assets');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'icon.png'), render(1024, { bg: true }));
fs.writeFileSync(path.join(out, 'adaptive-icon.png'), render(1024, { bg: false, scale: 0.8 }));
fs.writeFileSync(path.join(out, 'favicon.png'), render(196, { bg: true }));
fs.writeFileSync(path.join(out, 'splash.png'), render(420, { bg: false, w: 420, h: 420 }));
console.log('Icônes générées dans', out);
