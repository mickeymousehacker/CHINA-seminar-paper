const sharp = require('sharp');
const path = require('path');

const outDir = 'C:/Users/Batu/research-template/research/presentation/workspace';

async function main() {
  // Diagonal gradient stripe: electric blue #00C2FF fading to transparent
  // SVG: 720x405 (matches slide pt dimensions, treated as px for raster)
  // Diagonal stripe from top-left corner area going bottom-right
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="405">
    <defs>
      <linearGradient id="diag" x1="0%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" style="stop-color:#00C2FF;stop-opacity:0.18"/>
        <stop offset="40%" style="stop-color:#00C2FF;stop-opacity:0.07"/>
        <stop offset="100%" style="stop-color:#00C2FF;stop-opacity:0.0"/>
      </linearGradient>
    </defs>
    <polygon points="0,0 420,0 180,405 0,405" fill="url(#diag)"/>
  </svg>`;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outDir, 'gradient_stripe.png'));

  console.log('gradient_stripe.png created');
}

main().catch(e => { console.error(e); process.exit(1); });
