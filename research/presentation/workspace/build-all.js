const pptxgen = require('pptxgenjs');
const html2pptx = require('C:/Users/Batu/research-template/.claude/skills/pptx/scripts/html2pptx');

const NAVY = "0F172A", BLUE = "2563EB", TEAL = "06B6D4", RED = "DC2626";
const SLATE = "1E293B", MUTED = "64748B", LINE = "E2E8F0";
const dir = __dirname + '/slides/';

const notes = {
  s01: "Three Chinese automakers, three governance models, one question: which ownership and financing structure best creates long-term shareholder value? Central claim: governance, more than initial technological endowment, determines who enters the EV era from strength.",
  s02: "The problem and its relevance. EVs are 55% of China's market; JV-dependent firms are losing share while independents lead globally. The EU has even turned governance into a trade variable. Objective stated explicitly. Transition to the theoretical frame.",
  s03: "The governance lens. Control rights drive allocation (Shleifer-Vishny); concentrated ownership removes agency costs (Jensen-Meckling); political connection and mixed ownership empirically underperform (Fan et al.; Megginson-Netter). Transition to capability theory.",
  s04: "Three ways to build capability, each with a different durability profile under technological discontinuity. Note the research gap: no prior work compares all three under one paradigm shift. That gap is our contribution. Transition into the comparison.",
  s05: "The map for the next five slides: three firms as columns, four dimensions as rows, one regulatory regime isolating ownership. One dimension per slide follows.",
  s06: "Governance. SAIC's control is split across SASAC, the Party mandate, and 50/50 JV boards; BYD's founder control enabled the unilateral 2022 ICE exit; Geely is agile but pays multi-brand coordination cost. The EU tariff prices the difference. Transition to financing.",
  s07: "Financing. The capital-light JV model captured upside in growth but became a capital trap in 2024 when SAIC had to absorb losses without control: ROE collapsed to 0.58%. BYD self-finances; Geely leverages for speed. Transition to capability building.",
  s08: "The mode of capability acquisition sets durability. BYD slowest but non-imitable (Teece); Geely fast and genuine co-development (CMA, patent convergence); SAIC fast to quality but rent cannibalization left no proprietary EV platforms. Transition to viability.",
  s09: "The EV transition as a structural audit. SAIC's plants run far below capacity; BYD enters from strength; Geely's core executes but carries periphery risk at Polestar and Lotus. Transition to the synthesis dashboard.",
  s10: "One-glance synthesis: across all four dimensions, private founder control outperforms. SAIC's 0.58% ROE and 35.3% tariff are the signature of state-JV dependency. Note Geely FY2024 is as originally reported. Transition to the joint lessons.",
  s11: "Placeholder. Lesson 1 will argue that the mode of capability acquisition determines durability across technology cycles. Final wording pending.",
  s12: "Placeholder. Lesson 2 will argue that governance structure is a first-order determinant of strategic adaptability. Final wording pending.",
  s13: "Placeholder. Lesson 3 will argue that capital structure determines resilience when markets contract. Final wording pending.",
  s14: "How the work was done. A layered agent system on Claude Code, not a single chatbot: Sonnet for the bulk, Opus for cross-case analysis; five specialized agents over a persistent shared wiki.",
  s15: "Collaboration. One shared git repository, a folder per case plus a shared layer; pull before, push after. Claude Code read all three wikis at once, enabling direct cross-case comparison. One merge conflict, resolved with git stash.",
  s16: "Source discipline. Every source rated on journal quality (Q1-Q5) and direct relevance (R1-R4); arguments anchored only on Q1/Q2. A per-case writing guide kept data and citations consistent across sessions and authors.",
  s17: "Critical use, not blind trust. Asking the model to act as a critical reviewer and to verify each claim against its source caught three real data errors before submission, all traced to audited annual reports.",
  s18: "Where the platform delivered most: research volume that would be unmanageable manually, and persistence that survived a hardware shutdown with full recovery.",
  s19: "An honest balance. Real limits: no paywalled journals, non-readable Geely PDFs, token limits, and AI formulations needing review. Cost was modest at ~21 euros per month. Judgment stayed with the authors.",
  s20: "References. Full citations for all sources in the deck.",
};

const C = (t, o = {}) => ({ text: t, options: Object.assign({ fontFace: "Arial", valign: "middle" }, o) });

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Ort, Maus, Stubner';
  pptx.title = "China EV Governance — Seminar Presentation";

  const add = async (file) => await html2pptx(dir + file + '.html', pptx);
  const tbl = (slide, ph, rows, colWfrac, fs = 11) => slide.addTable(rows, {
    x: ph.x, y: ph.y, w: ph.w, h: ph.h,
    colW: colWfrac.map(f => ph.w * f),
    rowH: new Array(rows.length).fill(ph.h / rows.length),
    border: { pt: 0.75, color: LINE }, valign: "middle", fontFace: "Arial", fontSize: fs,
  });

  // 1 Title
  (await add('s01_title')).slide.addNotes(notes.s01);
  // 2 Intro
  (await add('s02_intro')).slide.addNotes(notes.s02);
  // 3 Theory I
  (await add('s03_theory1')).slide.addNotes(notes.s03);
  // 4 Theory II
  (await add('s04_theory2')).slide.addNotes(notes.s04);

  // 5 Framework grid
  {
    const { slide, placeholders } = await add('s05_framework');
    const ph = placeholders[0];
    const hc = (t, bg) => C(t, { fill: { color: bg }, color: "FFFFFF", bold: true, align: "center", fontSize: 11 });
    const lab = (t) => C(t, { fill: { color: "F1F5F9" }, color: SLATE, bold: true, align: "left", fontSize: 10.5 });
    const cc = (t, col) => C(t, { align: "center", color: col || SLATE, fontSize: 10.5 });
    tbl(slide, ph, [
      [C("", { fill: { color: "FFFFFF" } }), hc("SAIC Motor\n(JV / SOE)", RED), hc("BYD\n(Private / Vertical)", BLUE), hc("Geely\n(Private / M&A)", TEAL)],
      [lab("Governance"), cc("State / Party\n(SASAC 63.71%)"), cc("Founder\n(Wang ~17%)"), cc("Founder + M&A\n(Li Shufu)")],
      [lab("Financing"), cc("JV capital-light"), cc("Self-financed"), cc("Leveraged acquisition")],
      [lab("Capability"), cc("Mandatory transfer"), cc("Organic build"), cc("Acquisition + co-dev.")],
      [lab("Long-term viability"), cc("Eroding", RED), cc("Leading", BLUE), cc("Adapting", TEAL)],
    ], [0.22, 0.26, 0.26, 0.26], 10.5);
    slide.addNotes(notes.s05);
  }

  // 6 Governance table
  {
    const { slide, placeholders } = await add('s06_governance');
    const ph = placeholders[0];
    const hc = (t, bg) => C(t, { fill: { color: bg }, color: "FFFFFF", bold: true, align: "center", fontSize: 11.5 });
    const lab = (t) => C(t, { fill: { color: "F1F5F9" }, color: SLATE, bold: true, align: "left", fontSize: 10.5 });
    const cc = (t, col, bold) => C(t, { align: "center", color: col || SLATE, fontSize: 10.5, bold: !!bold });
    tbl(slide, ph, [
      [C("", { fill: { color: "FFFFFF" } }), hc("SAIC Motor", RED), hc("BYD", BLUE), hc("Geely", TEAL)],
      [lab("Controller"), cc("SASAC 63.71% + Party"), cc("Wang Chuanfu ~17%, team >1/3"), cc("Li Shufu, apex holding")],
      [lab("Objective function"), cc("State + political"), cc("Commercial"), cc("Commercial")],
      [lab("Decision speed"), cc("Bilateral JV consensus"), cc("Unilateral (ICE exit 2022)"), cc("Agile, multi-brand cost")],
      [lab("EU anti-subsidy tariff"), cc("35.3%", RED, true), cc("17.0%"), cc("18.8%")],
    ], [0.19, 0.27, 0.27, 0.27], 10.5);
    slide.addNotes(notes.s06);
  }

  // 7 Financing chart
  {
    const { slide, placeholders } = await add('s07_financing');
    const ph = placeholders.find(p => p.id === 'chart') || placeholders[0];
    slide.addChart(pptx.charts.BAR, [{ name: "ROE FY2024", labels: ["SAIC", "BYD", "Geely"], values: [0.58, 21.7, 19.2] }], {
      x: ph.x, y: ph.y, w: ph.w, h: ph.h,
      barDir: 'col', chartColors: [BLUE], showLegend: false,
      showValue: true, dataLabelColor: NAVY, dataLabelFontSize: 11, dataLabelFontBold: true, dataLabelPosition: 'outEnd',
      showValAxisTitle: true, valAxisTitle: "Return on equity, FY2024 (%)", valAxisTitleColor: MUTED, valAxisTitleFontSize: 11,
      valAxisMinVal: 0, valAxisMaxVal: 25, valAxisMajorUnit: 5,
      catAxisLabelColor: SLATE, catAxisLabelFontSize: 12, valAxisLabelColor: MUTED,
      valGridLine: { color: "EDF1F5", size: 0.5 }, chartArea: { fill: { color: "FFFFFF" } },
    });
    slide.addNotes(notes.s07);
  }

  // 8 Capability matrix
  (await add('s08_matrix')).slide.addNotes(notes.s08);
  // 9 Viability
  (await add('s09_viability')).slide.addNotes(notes.s09);

  // 10 Dashboard table
  {
    const { slide, placeholders } = await add('s10_dashboard');
    const ph = placeholders.find(p => p.id === 'table') || placeholders[0];
    const hc = (t, bg) => C(t, { fill: { color: bg }, color: "FFFFFF", bold: true, align: "center", fontSize: 11.5 });
    const m = (t) => C(t, { bold: true, color: SLATE, align: "left", fontSize: 11, fill: { color: "F1F5F9" } });
    const cc = (t, col, bold) => C(t, { align: "center", color: col || SLATE, fontSize: 11, bold: !!bold });
    tbl(slide, ph, [
      [hc("Metric  (FY2024 → FY2025)", NAVY), hc("SAIC Motor\n(JV / SOE)", RED), hc("BYD\n(Private / Vertical)", BLUE), hc("Geely\n(Private / M&A)", TEAL)],
      [m("Revenue (RMB bn)"), cc("627.6 → 656.2"), cc("777.1 → 804.0"), cc("240.2 → 345.2")],
      [m("Gross Margin"), cc("9.4%"), cc("19.4% → 17.7%"), cc("15.9% → 16.6%")],
      [m("Net Profit (RMB bn)"), cc("1.7 → 10.1", RED), cc("40.3 → 32.6"), cc("16.8 → 16.9")],
      [m("Return on Equity"), cc("0.58% → 3.43%", RED), cc("21.7% → 13.2%"), cc("19.2% → 18.2%")],
      [m("Net Gearing"), cc("n.a."), cc("−36% → +25%"), cc("8.8% → 19.8%")],
      [m("EU Anti-Subsidy Tariff"), cc("35.3%", RED, true), cc("17.0%"), cc("18.8%")],
    ], [0.30, 0.2333, 0.2333, 0.2334], 11);
    slide.addNotes(notes.s10);
  }

  // 11-13 Lessons
  (await add('s11_lesson1')).slide.addNotes(notes.s11);
  (await add('s12_lesson2')).slide.addNotes(notes.s12);
  (await add('s13_lesson3')).slide.addNotes(notes.s13);

  // 14-16 AI
  (await add('s14_ai_arch')).slide.addNotes(notes.s14);
  (await add('s15_ai_repo')).slide.addNotes(notes.s15);
  (await add('s16_ai_quality')).slide.addNotes(notes.s16);

  // 17 Errors table
  {
    const { slide, placeholders } = await add('s17_ai_errors');
    const ph = placeholders[0];
    const hc = (t) => C(t, { fill: { color: NAVY }, color: "FFFFFF", bold: true, align: "center", fontSize: 11 });
    const cc = (t, col, bold) => C(t, { align: "left", color: col || SLATE, fontSize: 10.5, bold: !!bold });
    tbl(slide, ph, [
      [hc("Data point"), hc("Initial (wrong)"), hc("Corrected (audited)")],
      [cc("EU countervailing tariff", SLATE, true), cc("36.3% (provisional)", RED), cc("35.3% (final regulation)", TEAL)],
      [cc("Net profit figure", SLATE, true), cc("~10× inflated (currency unit)", RED), cc("Corrected via audited report", TEAL)],
      [cc("Earnings per share", SLATE, true), cc("Wrong share count", RED), cc("Recomputed on correct count", TEAL)],
    ], [0.30, 0.35, 0.35], 10.5);
    slide.addNotes(notes.s17);
  }

  // 18-19 AI
  (await add('s18_ai_value')).slide.addNotes(notes.s18);
  (await add('s19_ai_limits')).slide.addNotes(notes.s19);
  // 20 References
  (await add('s20_refs')).slide.addNotes(notes.s20);

  await pptx.writeFile({ fileName: __dirname + '/china-ev-presentation.pptx' });
  console.log("OK written china-ev-presentation.pptx (20 slides)");
})().catch(e => { console.error("BUILD ERROR:\n", e.message); process.exit(1); });
