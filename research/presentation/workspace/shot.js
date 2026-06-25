const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 2 });
  for (const s of ['s01_title', 's08_matrix', 's10_dashboard']) {
    await page.goto('file://' + __dirname + '/slides/' + s + '.html');
    await page.screenshot({ path: __dirname + '/shot_' + s + '.png' });
    console.log('shot', s);
  }
  await browser.close();
})();
