const { chromium } = require('playwright');
const fs = require('fs');
const slides = ['s02_intro','s03_theory1','s04_theory2','s05_framework','s06_governance',
  's07_financing','s09_viability','s11_lesson1','s12_lesson2','s13_lesson3',
  's14_ai_arch','s15_ai_repo','s16_ai_quality','s17_ai_errors','s18_ai_value','s19_ai_limits','s20_refs'];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 2 });
  for (const s of slides) {
    await page.goto('file://' + __dirname + '/slides/' + s + '.html');
    await page.screenshot({ path: __dirname + '/qa_' + s + '.png' });
  }
  await browser.close();
  console.log('shots done');
})();
