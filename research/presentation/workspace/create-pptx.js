'use strict';
const pptxgen = require('pptxgenjs');
const html2pptx = require('C:/Users/Batu/research-template/.claude/skills/pptx/scripts/html2pptx');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function addSlide(pptx, html, fn) {
  const tmp = path.join(os.tmpdir(), `slide_${Date.now()}_${Math.random().toString(36).slice(2)}.html`);
  fs.writeFileSync(tmp, html, 'utf8');
  const { slide, placeholders } = await html2pptx(tmp, pptx);
  fs.unlinkSync(tmp);
  if (fn) fn(slide, placeholders, pptx);
}

function slide(section, title, body) {
  const sz = title.length > 72 ? '13pt' : title.length > 58 ? '15pt' : title.length > 44 ? '17pt' : '19pt';
  const sec = section ? `<p style="color:#7FC8E8;font-size:8pt;font-weight:bold;margin:0 0 3pt 0;">${section.toUpperCase()}</p>` : '';
  return `<!DOCTYPE html>
<html><head><style>
html{background:#fff;}
body{width:720pt;height:405pt;margin:0;padding:0;font-family:Arial,sans-serif;display:flex;flex-direction:column;background:#fff;}
*{box-sizing:border-box;}
</style></head>
<body>
<div style="background:#1F4E79;width:720pt;min-height:60pt;display:flex;flex-direction:column;justify-content:center;padding:8pt 28pt;">
${sec}
<p style="color:#fff;font-size:${sz};font-weight:bold;margin:0;line-height:1.2;">${title}</p>
</div>
<div style="flex:1;padding:10pt 28pt 8pt 28pt;display:flex;flex-direction:column;overflow:hidden;">
${body}
</div>
</body></html>`;
}

const TBL_HDR = { fill: { color: '1F4E79' }, color: 'FFFFFF', bold: true, align: 'center', valign: 'middle', fontFace: 'Arial' };
const TBL_LBL = { fill: { color: '1F4E79' }, color: 'FFFFFF', bold: true, valign: 'middle', fontFace: 'Arial' };

async function main() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Julia Ort, Batughan Maus, Chiara Stubner';
  pptx.title = 'China Strategies in the Automotive Industry';

  // SLIDE 1 — TITLE
  await addSlide(pptx, `<!DOCTYPE html>
<html><head><style>
html{background:#1F4E79;}
body{width:720pt;height:405pt;margin:0;padding:0;font-family:Arial,sans-serif;display:flex;flex-direction:column;background:#1F4E79;}
*{box-sizing:border-box;}
</style></head>
<body>
<div style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding:28pt 42pt 22pt 42pt;">
<p style="color:#7FC8E8;font-size:9pt;font-weight:bold;margin:0 0 14pt 0;">SEMINAR &mdash; M&amp;A AS TRANSFORMER OF THE AUTOMOTIVE INDUSTRY</p>
<p style="color:#fff;font-size:30pt;font-weight:bold;margin:0 0 10pt 0;line-height:1.15;">China Strategies in the Automotive Industry</p>
<p style="color:#D5E8F7;font-size:15pt;margin:0;">Governance, Financing, and Long-Term Value Creation</p>
</div>
<div style="background:#fff;height:138pt;display:flex;flex-direction:column;justify-content:center;padding:0 42pt;">
<div style="border-left:4pt solid #2E75B6;padding-left:18pt;">
<p style="color:#1F4E79;font-size:11pt;font-weight:bold;margin:0 0 6pt 0;">Chair of Banking and Finance &mdash; Goethe-Universit&auml;t Frankfurt</p>
<p style="color:#555;font-size:11pt;margin:0 0 4pt 0;">Julia Ort &middot; Batughan Maus &middot; Chiara Stubner</p>
<p style="color:#777;font-size:10pt;margin:0;">Supervisor: Prof. Dr. Mark Wahrenburg | Advisor: Edoardo Pilla | 19. Juni 2026</p>
</div>
</div>
</body></html>`);

  // SLIDE 2 — INTRODUCTION: Ausgangslage
  await addSlide(pptx, slide('Introduction', '55% aller Neuwagen in China sind 2025 elektrisch — wer überlebt?', `
<ul style="margin:0 0 8pt 0;padding-left:18pt;font-size:11pt;color:#1A1A1A;line-height:1.5;">
<li>EV-Anteil China 2025: <b>~55%</b> aller Neuzulassungen (IEA 2026)</li>
<li>Chinesische Hersteller: <b>60%</b> aller globalen EV-Verkäufe</li>
<li>70% der in China verkauften BEV kosten weniger als ein Durchschnitts-PKW</li>
<li>IEA-Prognose: <b>&gt;90%</b> EV-Anteil in China bis 2035</li>
</ul>
<div style="background:#EEF4FB;border-left:4pt solid #2E75B6;padding:10pt 16pt;margin:4pt 0 8pt 0;">
<p style="color:#1F4E79;font-size:11.5pt;font-weight:bold;margin:0 0 5pt 0;">Forschungsfrage</p>
<p style="color:#1A1A1A;font-size:11pt;margin:0;line-height:1.4;">Welche Governance- und Finanzierungsstruktur schafft langfristigen Shareholder Value in einem technologieintensiven, hochdynamischen Markt?</p>
</div>
<p style="color:#444;font-size:10.5pt;margin:0;"><b>Drei Cases unter identischen Marktbedingungen:</b> SAIC Motor &middot; BYD &middot; Geely</p>
`));

  // SLIDE 3 — THREE MODELS (table)
  await addSlide(pptx, slide('Introduction', 'Drei Wege, ein Markt — scharf divergierende Ergebnisse', `
<div id="t3" class="placeholder" style="width:664pt;height:270pt;"></div>
`), (s, ph) => {
    s.addTable([
      [{ text: '', options: TBL_LBL }, { text: 'SAIC Motor', options: TBL_HDR }, { text: 'BYD', options: TBL_HDR }, { text: 'Geely', options: TBL_HDR }],
      ['Modell', 'State-directed JV', 'Organic vertical integration', 'M&A-driven private'],
      ['Kontrolle', 'Shanghai SASAC (63,71%)', 'Wang Chuanfu (Gründer, 17%)', 'Li Shufu (privat, 100% ZGH)'],
      [{ text: 'Nettogewinn 2024', options: { bold: true, valign: 'middle' } }, { text: 'RMB 1,67 Mrd. (−88%)', options: { color: 'C00000', valign: 'middle' } }, { text: 'RMB 40,25 Mrd. (+34%)', options: { color: '375623', valign: 'middle' } }, { text: 'RMB 16,8 Mrd. (+240%)', options: { color: '375623', valign: 'middle' } }],
      ['EV-Readiness', 'Mittel — JV-Umbau läuft', 'Hoch — ICE-Ausstieg 2022', 'Mittel — plattformabhängig'],
    ], { ...ph[0], colW: [1.7, 2.5, 2.5, 2.52], border: { pt: 0.5, color: 'CCCCCC' }, fontSize: 11, valign: 'middle', fontFace: 'Arial' });
  });

  // SLIDE 4 — THEORY
  await addSlide(pptx, slide('Theory & Literature', 'Vier Theoriestränge — ein Analyseraster', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1;overflow:hidden;">
<div style="border-left:3pt solid #2E75B6;padding-left:10pt;margin-bottom:10pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 3pt 0;">1. Politische Governance &amp; SOE-Effizienz</p>
<ul style="margin:0;padding-left:14pt;font-size:9.5pt;color:#1A1A1A;line-height:1.4;">
<li>Shleifer &amp; Vishny (1994): Politiker maximieren Beschäftigung, nicht Firmenwert</li>
<li>Fan, Wong &amp; Zhang (2007): politisch vernetzte CEOs → −18% CAR, −21% Umsatzwachstum</li>
<li>Megginson &amp; Netter (2001): Misch-Eigentumsunternehmen nicht profitabler als reine SOEs</li>
</ul>
</div>
<div style="border-left:3pt solid #2E75B6;padding-left:10pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 3pt 0;">2. JV-Dynamik &amp; Capability Transfer</p>
<ul style="margin:0;padding-left:14pt;font-size:9.5pt;color:#1A1A1A;line-height:1.4;">
<li>Holmes, McGrattan &amp; Prescott (2015): JV als implizite Technologiesteuer</li>
<li>Howell (2018): JV-Renten verdrängen autonome Innovation (&#x201E;wie Opium&#x201C;)</li>
<li>Inkpen &amp; Beamish (1997): JV instabil wenn asymmetrisches Lernen endet</li>
</ul>
</div>
</div>
<div style="flex:1;overflow:hidden;">
<div style="border-left:3pt solid #2E75B6;padding-left:10pt;margin-bottom:10pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 3pt 0;">3. Cross-border M&amp;A &amp; Springboard-Strategie</p>
<ul style="margin:0;padding-left:14pt;font-size:9.5pt;color:#1A1A1A;line-height:1.4;">
<li>Luo &amp; Tung (2007): Emerging-market firms nutzen Akquisitionen als Sprungbrett</li>
<li>Zheng, Noorderhaven &amp; Du (2022): 4-Stufen-Integration (distancing → diversifying)</li>
</ul>
</div>
<div style="border-left:3pt solid #2E75B6;padding-left:10pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 3pt 0;">4. Dynamische Fähigkeiten &amp; Gründerkontrolle</p>
<ul style="margin:0;padding-left:14pt;font-size:9.5pt;color:#1A1A1A;line-height:1.4;">
<li>Teece, Pisano &amp; Shuen (1997): nachhaltiger Vorteil durch pfadabhängiges tacit knowledge</li>
<li>Zhang et al. (2025): Gründerkontrolle → mehr Breakthrough-Innovation</li>
</ul>
</div>
</div>
</div>
`));

  // SLIDE 5 — GOVERNANCE SAIC
  await addSlide(pptx, slide('Governance', 'SAIC: Staat als Kontrolleur — strukturell eingebettete politische Ziele', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1.1;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Eigentumsstruktur</p>
<ul style="margin:0 0 10pt 0;padding-left:16pt;font-size:10.5pt;color:#1A1A1A;line-height:1.45;">
<li>Shanghai SASAC: <b>63,71%</b> + COSCO 5,91% + Yuejin 3,60% = ~73% Staatsanteil</li>
<li>&#x201E;Two consistencies&#x201C;-Prinzip: Party leadership + modern enterprise system</li>
<li>Party Committee formal konstitutiver Bestandteil der Governance</li>
</ul>
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">2025-Reform</p>
<ul style="margin:0;padding-left:16pt;font-size:10.5pt;color:#1A1A1A;line-height:1.45;">
<li>Board of Supervisors abgeschafft → verstärktes Audit Committee</li>
<li>Formale Modernisierung, aber SASAC 63,71% + Party-Mandat strukturell unverändert</li>
</ul>
</div>
<div style="flex:1;background:#EEF4FB;padding:12pt 14pt;overflow:hidden;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 6pt 0;">Empirische Konsequenz</p>
<p style="font-size:9.5pt;color:#555;margin:0 0 4pt 0;">Fan et al. (2007), n=790 IPO-Firmen:</p>
<ul style="margin:0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.45;">
<li>Politisch vernetzte Firmen: <b>−18% CAR</b> (3 Jahre post-IPO)</li>
<li>Umsatzwachstum <b>−21%</b>, Gewinnwachstum <b>−24%</b></li>
<li>Aufsräte mit Politikern: 36% vs. 19% bei nicht-verbundenen Firmen</li>
</ul>
</div>
</div>
`));

  // SLIDE 6 — GOVERNANCE BYD & GEELY
  await addSlide(pptx, slide('Governance', 'Gründerkontrolle ohne politische Einschränkung vs. privater Konglomeratsführer', `
<div style="display:flex;flex-direction:row;gap:0;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11.5pt;font-weight:bold;color:#1F4E79;margin:0 0 6pt 0;">BYD</p>
<ul style="margin:0;padding-left:16pt;font-size:10.5pt;color:#1A1A1A;line-height:1.45;">
<li>Wang Chuanfu: Chairman + CEO seit 1995, ~17% direkt; &gt;1/3 Stimmrechte</li>
<li>Kein Parteikomitee mit Direktive — Subventionen verleihen keine Kontrollrechte</li>
<li>Entscheidungen ohne Konsensprozesse: ICE-Ausstieg 2022, BYD Semiconductor, FinDreams-Spin-off</li>
<li>&#x201E;Fast decision-making&#x201C; als zentraler Wettbewerbsvorteil (He 2025)</li>
<li>Zhang et al. (2025): Gründerkontrolle → mehr Breakthrough-Innovation</li>
</ul>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11.5pt;font-weight:bold;color:#1F4E79;margin:0 0 6pt 0;">Geely</p>
<ul style="margin:0;padding-left:16pt;font-size:10.5pt;color:#1A1A1A;line-height:1.45;">
<li>Li Shufu: 100% Eigentümer ZGH (unlisted apex) → ~76% Kontrolle über Geely Auto HK</li>
<li>Keine Zustimmung von JV-Partnern oder Staatskomitee nötig</li>
<li>Akquisitionsstrategie: Volvo 2010 ($1,8 Mrd.) → LEVC 2013 → Lotus 2017 → Smart JV 2020</li>
<li>Multi-Brand-Portfolio: Koordinationskosten steigen mit Portfoliokomplexität</li>
</ul>
</div>
</div>
`));

  // SLIDE 7 — FINANCING SAIC & BYD
  await addSlide(pptx, slide('Financing', 'Kapitalstruktur als Wettbewerbsfaktor: SAIC und BYD im Vergleich', `
<div style="display:flex;flex-direction:row;gap:0;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">SAIC: Kapitalleichtes JV-Modell wird zur Kapitalfalle</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>JV-Modell: VW + GM tragen je 50% → stabile Dividenden ohne eigene Capex</li>
<li>2024: SAIC-GM-Verkäufe <b>−56,54%</b> → 50% Impairment ohne Restrukturierungskontrolle</li>
<li>Revenue <b>−15,73%</b> (RMB 627,59 Mrd.), Nettogewinn <b>−88,19%</b>, ROE 0,58%</li>
<li>EU-Gegenzoll: <b>35,3%</b> (vs. BYD 17,0%, Geely 18,8%) — höchste Subventionsintensität</li>
</ul>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">BYD: Innenfinanzierung als strukturelle Stärke</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>FY2024: Revenue <b>RMB 777,1 Mrd.</b> (+29%), Operating CF RMB 133,5 Mrd.</li>
<li>Zinsverbindlichkeiten nur <b>4,9%</b> der Gesamtverbindlichkeiten</li>
<li>R&amp;D 2024: <b>RMB 54,2 Mrd.</b> (+35,7%) &gt; Jahresgewinn RMB 40,3 Mrd.</li>
<li>In 13 von 14 Jahren (2011–2024): R&amp;D-Ausgaben &gt; Jahresgewinn</li>
<li>Staatl. Subventionen: RMB 10,4 Mrd. (~26% Nettogewinn) — keine Kontrollrechte</li>
</ul>
</div>
</div>
`));

  // SLIDE 8 — FINANCING GEELY
  await addSlide(pptx, slide('Financing', 'Geely: Leverage für Geschwindigkeit — höchstes Finanzierungsrisiko', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1.05;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Volvo-Deal 2010 (Paradigmafall)</p>
<ul style="margin:0 0 10pt 0;padding-left:15pt;font-size:10.5pt;color:#1A1A1A;line-height:1.4;">
<li>Kaufpreis: <b>$1,8 Mrd.</b> → Gesamtkapital ~$2,7 Mrd.</li>
<li>Finanzierung: Bank of China/CCB/ExIm ~$2,1 Mrd. + ~50% Zentralregierung</li>
<li>ZGH-Schulden: RMB 16 Mrd. (2009) → RMB 71 Mrd. (2010); D/C-Ratio 73,47%</li>
<li>Return: Volvo IPO Okt. 2021 ~$18,5 Mrd. — <b>10× des Kaufpreises</b></li>
</ul>
<p style="font-size:10pt;color:#444;margin:0;line-height:1.4;">BYD = Wachstum vs. Resilienz &nbsp;|&nbsp; SAIC = Risikoabsicherung vs. Kontrollverlust &nbsp;|&nbsp; Geely = Bilanzrisiko vs. strategische Geschwindigkeit</p>
</div>
<div style="flex:1;background:#FFF5F5;border-left:3pt solid #C00000;padding:10pt 14pt;overflow:hidden;">
<p style="font-size:10.5pt;font-weight:bold;color:#C00000;margin:0 0 6pt 0;">Gegenwartsrisiken (2024/25)</p>
<ul style="margin:0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li><b>Polestar:</b> Nettoverlust $1,17 Mrd. FY2023, Going-Concern-Vermerk Deloitte, nur $103 Mio. Cash Ende 2024</li>
<li><b>Lotus Technology:</b> kumuliertes Defizit ~$3,2 Mrd. (FY2025), Revenue <b>−44%</b> FY2025</li>
<li>ZGH als Garantiegeber, ~$2 Mrd. Kapitalbedarf bis 2028</li>
</ul>
</div>
</div>
`));

  // SLIDE 9 — CAPABILITY BUILDING SAIC
  await addSlide(pptx, slide('Capability Building', '„JV-Renten sind wie Opium“ — He Guangyan, ehem. Maschinenminister', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Was das JV-Modell gab</p>
<p style="font-size:9.5pt;color:#555;margin:0 0 3pt 0;">Bai et al. (2025), n=alle KFZ-Modelle 2001–2014:</p>
<ul style="margin:0 0 10pt 0;padding-left:14pt;font-size:10.5pt;color:#1A1A1A;line-height:1.4;">
<li><b>+8,3%</b> Qualitätsverbesserung in JV-affiliierten Modellen</li>
<li>Fehlerquote: 65% höher 2001 → 33% höher 2014</li>
<li>Übertragungsweg: Worker mobility + Zulieferernetzwerke</li>
</ul>
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Kapazitätsauslastung 2025</p>
<ul style="margin:0;padding-left:14pt;font-size:10.5pt;color:#1A1A1A;line-height:1.4;">
<li>SAIC-GM: <b>37%</b> | SAIC-VW: <b>55%</b> | VW MEB-EV: <b>14%</b> | Own-brand: <b>76–95%</b></li>
</ul>
</div>
<div style="flex:1;overflow:hidden;">
<div style="background:#FFF9EC;border-left:3pt solid #FF8C00;padding:10pt 14pt;margin-bottom:8pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#B06000;margin:0 0 5pt 0;">Was das JV-Modell verhinderte (Howell 2018)</p>
<ul style="margin:0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>JV-Firmen reagierten auf Druck mit Qualitätsreduktion statt Innovation</li>
<li>Kannibalisierungsdynamik: eigene Marke vs. profitabler JV-Strom</li>
</ul>
</div>
<div style="background:#EEF4FB;border-left:3pt solid #2E75B6;padding:10pt 14pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Capability Paradox</p>
<p style="font-size:10pt;color:#1A1A1A;margin:0;line-height:1.4;">JV transferierte Produktionsqualität, supprimierte aber die autonome Innovation für die EV-Ära — keine eigene Batterie, keine Software-Plattform.</p>
</div>
</div>
</div>
`));

  // SLIDE 10 — CAPABILITY BUILDING BYD & GEELY
  await addSlide(pptx, slide('Capability Building', 'Organisches Build vs. M&A als Capability-Kompressor', `
<div style="display:flex;flex-direction:row;gap:0;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">BYD: Organisch-internes Build</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>1995: Mobiltelefon-Batterien → 2003: Fahrzeugproduktion → Automotive Batteries</li>
<li>&#x201E;Specialised Vertical Integration&#x201C;: Kompetenzen stapeln sich aufeinander (Wang et al. 2022)</li>
<li>Teece et al. (1997): tacit knowledge in Routinen → nicht durch Lizenz transferierbar</li>
<li>BYD hat die Politikagenda aktiv mitgestaltet, nicht nur befolgt (Whitfield &amp; Wuttke 2026)</li>
<li>R&amp;D-Intensität: konsistent &gt;100% des Jahresgewinns über 13 von 14 Jahren</li>
</ul>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Geely: M&amp;A als Capability-Kompressor</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Volvo 2010: sofortiger Zugang zu Safety Engineering, 3 Plattformen, 2.400+ Dealer</li>
<li>Strategic Asset-seeking FDI (Luo &amp; Tung 2007)</li>
<li>4-Stufen-Integration (Zheng et al. 2022): distancing → balancing → building → diversifying</li>
<li>CMA-Plattform: Co-Entwicklung Volvo + Geely + Lynk &amp; Co — bilateral</li>
<li>R&amp;D-Ausgaben: <b>+600%</b> in 7 Jahren nach Akquisition</li>
<li>Konda et al. (2022): messbare Patentkonvergenz → echter Co-Creation-Effekt</li>
</ul>
</div>
</div>
`));

  // SLIDE 11 — LONG-TERM VIABILITY SAIC (table)
  await addSlide(pptx, slide('Long-term Viability', 'SAIC: JV-Erosion trifft EV-Transition gleichzeitig', `
<div id="t11" class="placeholder" style="width:664pt;height:155pt;"></div>
<div style="display:flex;flex-direction:row;gap:14pt;margin-top:8pt;overflow:hidden;">
<div style="flex:1;overflow:hidden;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Doppelter Druck</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Inland: JV-Nachfrage bricht ein, Eigenmarke läuft</li>
<li>Export: EU-Zoll <b>35,3%</b> — doppelt so hoch wie BYD (17,0%)</li>
</ul>
</div>
<div style="flex:1;overflow:hidden;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Reaktion &#x201E;JV 2.0&#x201C;</p>
<ul style="margin:0;padding-left:15pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Umwidmung JV-Kapazität für Eigenmarken-EVs</li>
<li>SAIC SHANGJIE mit Huawei (Sept. 2025)</li>
<li>SASAC 63,71% + Party-Mandat begrenzen Kapitalumallokation strukturell</li>
</ul>
</div>
</div>
`), (s, ph) => {
    s.addTable([
      [{ text: '', options: TBL_LBL }, { text: 'Kapazität', options: TBL_HDR }, { text: 'Produktion', options: TBL_HDR }, { text: 'Auslastung', options: TBL_HDR }],
      ['SAIC-GM', '1,452 Mio.', '534.000', { text: '37%', options: { bold: true, color: 'C00000', valign: 'middle' } }],
      ['SAIC-VW', '1,920 Mio.', '1,058 Mio.', { text: '55%', options: { bold: true, color: 'C00000', valign: 'middle' } }],
      ['VW MEB (EV)', '240.000', '34.464', { text: '14%', options: { bold: true, color: 'C00000', valign: 'middle' } }],
      ['Own-brand (PVB)', '—', '—', { text: '76–95%', options: { bold: true, color: '375623', valign: 'middle' } }],
    ], { ...ph[0], colW: [2.2, 2.34, 2.34, 2.34], border: { pt: 0.5, color: 'CCCCCC' }, fontSize: 10.5, valign: 'middle', fontFace: 'Arial' });
  });

  // SLIDE 12 — LONG-TERM VIABILITY BYD & GEELY
  await addSlide(pptx, slide('Long-term Viability', 'EV-Transition strukturell abgeschlossen vs. starker Kern mit riskanter Peripherie', `
<div style="display:flex;flex-direction:row;gap:0;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">BYD: Strukturell für EV-Ära gerüstet</p>
<ul style="margin:0 0 6pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>2022: vollständiger ICE-Ausstieg — kein Verbrenner belastet Kapitalallokation</li>
<li>&gt;1 Mio. Exporte FY2025 (+140% YoY), 119 Länder</li>
<li>4. Jahr in Folge globaler NEV-Marktführer</li>
<li>USD 5,6 Mrd. Kapitalerhöhung März 2025 (institutionell + SWF)</li>
</ul>
<div style="background:#FFF5F5;border-left:3pt solid #C00000;padding:6pt 10pt;">
<p style="font-size:9.5pt;font-weight:bold;color:#C00000;margin:0 0 3pt 0;">Strukturelle Risiken BYD</p>
<p style="font-size:9.5pt;color:#1A1A1A;margin:0;line-height:1.3;">Gross Margin 19%→18% | Nettogewinn −19% | EU-Zoll 17% | Net-Cash → Nettoverschuldung durch globale Fabrikexpansion</p>
</div>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Geely: Starker Kern, riskante Peripherie</p>
<ul style="margin:0 0 6pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Geely Auto: Revenue +32% ($33,4 Mrd.), Nettogewinn <b>+240%</b></li>
<li>Volvo Cars: SEK 400,2 Mrd., 6,8% EBIT — zweites Rekordjahr</li>
<li>Geely-Aktie: +39% Anfang 2026 vs. BYD +12%</li>
</ul>
<div style="background:#FFF5F5;border-left:3pt solid #C00000;padding:6pt 10pt;">
<p style="font-size:9.5pt;font-weight:bold;color:#C00000;margin:0 0 3pt 0;">Peripherierisiken</p>
<ul style="margin:0;padding-left:12pt;font-size:9.5pt;color:#1A1A1A;line-height:1.3;">
<li>Polestar: Going Concern + &lt;$103 Mio. Cash Ende 2024</li>
<li>Lotus Technology: −44% Revenue FY2025</li>
<li>Smart JV: &lt;2.000 Einheiten/Monat</li>
</ul>
</div>
</div>
</div>
`));

  // SLIDE 13 — LESSON 1 (table)
  await addSlide(pptx, slide('Generalizable Lessons', 'Lektion 1: Der Modus des Capability-Erwerbs bestimmt die Dauerhaftigkeit über Technologiezyklen', `
<div id="t13" class="placeholder" style="width:664pt;height:170pt;"></div>
<div style="background:#EEF4FB;border-left:4pt solid #2E75B6;padding:10pt 16pt;margin-top:8pt;overflow:hidden;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Kern-Erkenntnis</p>
<p style="font-size:10.5pt;color:#1A1A1A;margin:0;line-height:1.4;">Mandatory Technology Transfer schafft kurzfristige Qualitätsgewinne, verdrängt aber die autonome Innovation für den nächsten Technologiezyklus. Voluntary acquisition und organic development vermeiden das — zu unterschiedlichen Kosten: Geschwindigkeit vs. Tiefe vs. Unabhängigkeit.</p>
</div>
`), (s, ph) => {
    s.addTable([
      [{ text: '', options: TBL_LBL }, { text: 'SAIC (Mandatory JV)', options: TBL_HDR }, { text: 'BYD (Organic)', options: TBL_HDR }, { text: 'Geely (M&A)', options: TBL_HDR }],
      ['Kurzfristiger Effekt', '+8,3% Qualität (Bai et al. 2025)', 'Langsam', 'Sofortige Plattformen'],
      ['Langfristiger Effekt', 'Autonome Innovation verdrängt', 'Proprätär, nicht imitierbar', 'Bilateral co-development'],
      ['EV-Vorbereitung', { text: 'Fehlend', options: { color: 'C00000', bold: true, valign: 'middle' } }, { text: 'Hoch', options: { color: '375623', bold: true, valign: 'middle' } }, 'Plattformabhängig'],
    ], { ...ph[0], colW: [1.9, 2.44, 2.44, 2.44], border: { pt: 0.5, color: 'CCCCCC' }, fontSize: 11, valign: 'middle', fontFace: 'Arial' });
  });

  // SLIDE 14 — LESSONS 2 & 3
  await addSlide(pptx, slide('Generalizable Lessons', 'Lektion 2: Governance als First-Order-Determinant | Lektion 3: Kapitalstruktur und Resilienz', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Lektion 2: Governance &amp; Anpassungsfähigkeit</p>
<p style="font-size:9.5pt;color:#555;margin:0 0 5pt 0;">Anpassungsgeschwindigkeit ist ein Wettbewerbsvorteil — eine Frage der Kontrollrechtsverteilung, nicht der Ressourcen.</p>
<ul style="margin:0 0 8pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li><b>SAIC:</b> Kontrolle auf SASAC, Party + JV-Boards verteilt → langsam</li>
<li><b>BYD:</b> Konsolidierte Gründerkontrolle → ICE-Ausstieg ohne externe Zustimmung</li>
<li><b>Geely:</b> Privater Apex, Multi-Brand-Komplexität → Koordinationskosten</li>
</ul>
<div style="background:#EEF4FB;padding:8pt 10pt;">
<p style="font-size:9.5pt;font-style:italic;color:#1F4E79;margin:0;line-height:1.4;">&#x201E;Wenn die Technologieveränderungsrate die Entscheidungszykluszeit einer Governance-Struktur überschreitet, wird die Governance selbst zur bindenden Wettbewerbseinschränkung.&#x201C;</p>
</div>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Lektion 3: Kapitalstruktur &amp; Resilienz</p>
<ul style="margin:0 0 8pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li><b>SAIC:</b> Capital-light → Capital trap: 50% Impairment-Pflicht ohne Restrukturierungskontrolle</li>
<li><b>BYD:</b> Self-financing → resilient gegen Partnerverluste; verwundbar durch Margenkompression</li>
<li><b>Geely:</b> Leverage for speed → 10× Volvo Return; höchstes Ausfallrisiko durch Portfolioverbindlichkeiten</li>
</ul>
<div style="background:#EEF4FB;padding:8pt 10pt;">
<p style="font-size:9.5pt;font-style:italic;color:#1F4E79;margin:0;line-height:1.4;">Capital structure ist keine statische Optimierung, sondern eine dynamische Wette auf die Fähigkeit des Unternehmens, operative Kontrolle über seine Hauptrisikoexposition zu behalten.</p>
</div>
</div>
</div>
`));

  // SLIDE 15 — CONCLUSION
  await addSlide(pptx, slide('Conclusion', 'Fazit: Governance als bindender Constraint über alle vier Dimensionen', `
<div style="display:flex;flex-direction:row;gap:14pt;flex:1;overflow:hidden;">
<div style="flex:1.1;overflow:hidden;">
<div style="background:#EEF4FB;border-left:4pt solid #2E75B6;padding:10pt 14pt;margin-bottom:10pt;">
<p style="font-size:10.5pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Zentrale Erkenntnis</p>
<p style="font-size:10.5pt;color:#1A1A1A;margin:0;line-height:1.4;">Governance-Struktur ist der bindende Constraint: Sie bestimmt, welche Finanzierungsstrategien möglich sind, welche Fähigkeiten autonom entwickelt werden können, und welche Wettbewerbspositionen unter rapidem technologischen Wandel erreichbar bleiben.</p>
</div>
<div style="background:#F5F5F5;padding:8pt 14pt;">
<p style="font-size:9.5pt;font-weight:bold;color:#777;margin:0 0 4pt 0;">OFFENE FRAGE</p>
<p style="font-size:10.5pt;color:#1A1A1A;margin:0;line-height:1.4;">Kann SAICs &#x201E;JV 2.0&#x201C; die politisch-bürokratische Entscheidungsgeschwindigkeit überwinden, die historisch seine Anpassungsfähigkeit begrenzt hat?</p>
</div>
</div>
<div style="flex:1;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 8pt 0;">Modellbewertung</p>
<div style="background:#E8F5E9;border-left:4pt solid #2E7D32;padding:7pt 10pt;margin-bottom:7pt;">
<p style="font-weight:bold;color:#2E7D32;font-size:10.5pt;margin:0 0 2pt 0;">BYD — Strukturell überlegen für EV-Ära</p>
<p style="color:#1A1A1A;font-size:10pt;margin:0;">Gründerkontrolle + Vertikalintegration + Innenfinanzierung</p>
</div>
<div style="background:#FFF8E1;border-left:4pt solid #F9A825;padding:7pt 10pt;margin-bottom:7pt;">
<p style="font-weight:bold;color:#8A6000;font-size:10.5pt;margin:0 0 2pt 0;">Geely — Starker Kern, strukturelle Vulnerabilität</p>
<p style="color:#1A1A1A;font-size:10pt;margin:0;">Portfoliokomplexität und Leverage als strukturelle Risiken</p>
</div>
<div style="background:#FFEBEE;border-left:4pt solid #C62828;padding:7pt 10pt;">
<p style="font-weight:bold;color:#C62828;font-size:10.5pt;margin:0 0 2pt 0;">SAIC — Doppelte strukturelle Bremse</p>
<p style="color:#1A1A1A;font-size:10pt;margin:0;">JV-Erbe trifft auf politische Governance</p>
</div>
</div>
</div>
`));

  // SLIDE 16 — AI HIGHLIGHTS
  await addSlide(pptx, slide('AI Highlights', 'AI Highlights — Shared Git Repository + Claude (Anthropic)', `
<div style="display:flex;flex-direction:row;gap:0;flex:1;overflow:hidden;">
<div style="flex:1;padding-right:14pt;border-right:1pt solid #D0D0D0;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Was wir genutzt haben</p>
<ul style="margin:0 0 10pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Shared git repository mit drei Company-Wikis (BYD, SAIC, Geely)</li>
<li>Claude Code CLI: wiki-ingest, wiki-query, wiki-lint Agenten</li>
<li>29+ akademische Quellen eingelesen, vernetzt und cross-referenziert</li>
<li>Source-Rating-System für Quellenpriorisierung</li>
</ul>
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Was hilfreich war</p>
<ul style="margin:0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Wiki-Ingest: Automatisches Extrahieren und Vernetzen von Entitäten</li>
<li>Cross-Quellen-Synthese: Widersprüche zwischen Quellen automatisch geflaggt</li>
<li>Schreibhilfe: Abschnitte direkt aus belegten Quellen ausgearbeitet</li>
</ul>
</div>
<div style="flex:1;padding-left:14pt;overflow:hidden;">
<p style="font-size:11pt;font-weight:bold;color:#1F4E79;margin:0 0 5pt 0;">Herausforderungen</p>
<ul style="margin:0 0 10pt 0;padding-left:14pt;font-size:10pt;color:#1A1A1A;line-height:1.4;">
<li>Kein direkter SharePoint/Cloud-Zugriff → Dateien mussten lokal abgelegt werden</li>
<li>Halluzinationen bei Finanzkennzahlen → konsequente Gegenchecks gegen Annual Reports</li>
<li>Wiki-Schema erforderte initiales Setup (~1–2h)</li>
</ul>
<div style="background:#EEF4FB;border-left:4pt solid #2E75B6;padding:10pt 14pt;">
<p style="font-size:13pt;font-weight:bold;color:#1F4E79;margin:0 0 4pt 0;">Claude Pro — ~$20/Monat</p>
<p style="font-size:10.5pt;color:#1A1A1A;margin:0;">Recherche, Synthesis und Schreibunterstützung über die gesamte Seminararbeit</p>
</div>
</div>
</div>
`));

  const out = 'C:/Users/Batu/Desktop/China_Strategies_Presentation.pptx';
  await pptx.writeFile({ fileName: out });
  console.log('Saved:', out);
}

main().catch(e => { console.error(e); process.exit(1); });
