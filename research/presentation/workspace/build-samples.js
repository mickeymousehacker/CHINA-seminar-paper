const pptxgen = require('pptxgenjs');
const html2pptx = require('C:/Users/Batu/research-template/.claude/skills/pptx/scripts/html2pptx');

const NAVY = "0F172A", BLUE = "2563EB", TEAL = "06B6D4", RED = "DC2626";
const SLATE = "1E293B", MUTED = "64748B", LINE = "E2E8F0";

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Ort, Maus, Stubner';
  pptx.title = "China EV Governance";

  const dir = __dirname + '/slides/';

  // Slide 1 - Title
  const { slide: s1 } = await html2pptx(dir + 's01_title.html', pptx);
  s1.addNotes("Three Chinese automakers, three governance models, one question: which ownership and financing structure best creates long-term shareholder value? The central claim — governance, more than initial technological endowment, determines who enters the EV era from strength. Transition to motivation.");

  // Slide 8 - Capability 2x2 matrix
  const { slide: s8 } = await html2pptx(dir + 's08_matrix.html', pptx);
  s8.addNotes("The mode of capability acquisition sets a durability profile. BYD's organic path is slowest but produces non-imitable tacit knowledge (Teece). Geely bought speed AND achieved genuine co-development (CMA platform, patent convergence). SAIC's JV transfer was fast to production quality but rent cannibalization left it without proprietary EV platforms. This 2x2 is the visual core of the discussion. Transition to the synthesis dashboard.");

  // Slide 10 - Executive dashboard table
  const { slide: s10, placeholders } = await html2pptx(dir + 's10_dashboard.html', pptx);
  const ph = placeholders.find(p => p.id === 'table') || placeholders[0];

  const hcell = (t, bg) => ({ text: t, options: { fill: { color: bg }, color: "FFFFFF", bold: true, fontSize: 11.5, align: "center", valign: "middle" } });
  const metric = (t) => ({ text: t, options: { bold: true, color: SLATE, fontSize: 11, align: "left", valign: "middle", fill: { color: "F1F5F9" } } });
  const cell = (t, color) => ({ text: t, options: { color: color || SLATE, fontSize: 11, align: "center", valign: "middle" } });

  const rows = [
    [hcell("Metric  (FY2024 → FY2025)", NAVY), hcell("SAIC Motor\n(JV / SOE)", RED), hcell("BYD\n(Private / Vertical)", BLUE), hcell("Geely\n(Private / M&A)", TEAL)],
    [metric("Revenue (RMB bn)"), cell("627.6 → 656.2"), cell("777.1 → 804.0"), cell("240.2 → 345.2")],
    [metric("Gross Margin"), cell("9.4%"), cell("19.4% → 17.7%"), cell("15.9% → 16.6%")],
    [metric("Net Profit (RMB bn)"), cell("1.7 → 10.1", RED), cell("40.3 → 32.6"), cell("16.8 → 16.9")],
    [metric("Return on Equity"), cell("0.58% → 3.43%", RED), cell("21.7% → 13.2%"), cell("19.2% → 18.2%")],
    [metric("Net Gearing"), cell("n.a."), cell("−36% → +25%"), cell("8.8% → 19.8%")],
    [metric("EU Anti-Subsidy Tariff"), { text: "35.3%", options: { color: RED, bold: true, fontSize: 11, align: "center", valign: "middle" } }, cell("17.0%"), cell("18.8%")],
  ];

  const colW = [ph.w * 0.30, ph.w * 0.2333, ph.w * 0.2333, ph.w * 0.2334];
  s10.addTable(rows, {
    x: ph.x, y: ph.y, w: ph.w, h: ph.h,
    colW,
    rowH: new Array(7).fill(ph.h / 7),
    border: { pt: 0.75, color: LINE },
    valign: "middle",
    fontFace: "Arial",
  });
  s10.addNotes("One-glance synthesis. The pattern is consistent across all four dimensions: private founder control (BYD, Geely) clears 18%+ ROE while state-JV SAIC collapses to 0.58% and carries the 35.3% EU tariff — more than double its peers. Note Geely FY2024 is as-originally-reported. Transition to the joint lessons.");

  await pptx.writeFile({ fileName: __dirname + '/china-ev-samples.pptx' });
  console.log("OK written china-ev-samples.pptx");
})().catch(e => { console.error("BUILD ERROR:\n", e.message); process.exit(1); });
