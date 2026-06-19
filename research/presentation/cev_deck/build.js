/* China Strategies in the Automotive Industry — Seminar deck (McKinsey style).
   Structure: präsentation.md (16 slides). Content: 2. Entwurf (seminar paper). */
const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');
const html2pptx = require('C:/Users/Batu/research-template/.claude/skills/pptx/scripts/html2pptx.js');

const DIR = __dirname, HTML = path.join(DIR, 'html');

// Palette
const NAVY='#0B1F3A', TEAL='#00C2A8', RED='#D32F2F', STEEL='#3E6B9A', LGRAY='#F4F6F8',
      ANTH='#2C2C2C', MIDGRAY='#8A94A6', LINE='#D9DEE6', WHITE='#FFFFFF';
const cNAVY='0B1F3A', cTEAL='00C2A8', cRED='D32F2F', cSTEEL='3E6B9A', cANTH='2C2C2C',
      cMID='8A94A6', cLINE='D9DEE6';
// Case colours
const SAIC=RED, BYD=TEAL, GEELY=STEEL;

const BASE_CSS = `
*{margin:0;padding:0;box-sizing:border-box;}
html{background:${WHITE};}
body{width:720pt;height:405pt;font-family:Arial,Helvetica,sans-serif;color:${ANTH};display:flex;flex-direction:column;}
.kicker{color:${TEAL};font-size:10pt;font-weight:bold;letter-spacing:2.5pt;}
h1.title{color:${NAVY};font-size:18pt;font-weight:bold;line-height:1.16;margin-top:6pt;}
.rules{display:flex;gap:5pt;margin-top:8pt;}
.rules>div{height:3pt;}
.bar-teal{width:52pt;background:${TEAL};}
.bar-red{width:16pt;background:${RED};}
.content{flex:1;margin-top:12pt;display:flex;flex-direction:column;}
.footer{display:flex;justify-content:space-between;align-items:flex-end;border-top:1px solid ${LINE};padding-top:5pt;margin-bottom:10pt;}
.footer p{font-size:7pt;color:${MIDGRAY};}
.footer p.pg{font-weight:bold;color:${NAVY};font-size:8pt;}
.cols{display:flex;gap:16pt;flex:1;}
.placeholder{background:#E9EDF2;border-radius:4pt;}
ul{list-style:none;}
li{position:relative;padding-left:12pt;font-size:10pt;line-height:1.38;margin-bottom:6pt;color:${ANTH};}
li:before{content:"";position:absolute;left:0;top:4.5pt;width:5pt;height:5pt;background:${TEAL};border-radius:50%;}
li b{color:${NAVY};}
.card{background:${WHITE};border-radius:4pt;padding:11pt 13pt;}
.cap{color:#fff;font-size:11.5pt;font-weight:bold;}
`;

function lightDoc({ kicker, title, contentHtml, page, foot, section, pad='24pt 32pt 0 32pt' }) {
  return `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body{background:${LGRAY};padding:${pad};}</style></head><body>
    <p class="kicker">${kicker}</p>
    <h1 class="title">${title}</h1>
    <div class="rules"><div class="bar-teal"></div><div class="bar-red"></div></div>
    <div class="content">${contentHtml}</div>
    <div class="footer"><p>${foot}</p><p class="pg">${section} &nbsp;|&nbsp; ${page}</p></div>
  </body></html>`;
}

// Company column card
function caseCard(name, color, innerHtml, { flex=1 }={}) {
  return `<div style="flex:${flex};background:${WHITE};border-radius:4pt;border-top:3pt solid ${color};padding:11pt 13pt;display:flex;flex-direction:column;">
    <p style="color:${color};font-size:12.5pt;font-weight:bold;">${name}</p>
    <div style="width:26pt;height:2pt;background:${color};margin:7pt 0 9pt 0;"></div>
    ${innerHtml}</div>`;
}
function stat(num, label, color=TEAL) {
  return `<div style="background:#F4F6F8;border-left:3pt solid ${color};border-radius:3pt;padding:7pt 10pt;margin-bottom:8pt;">
    <p style="font-size:21pt;font-weight:bold;color:${color};line-height:1;">${num}</p>
    <p style="font-size:8.5pt;color:${ANTH};margin-top:3pt;line-height:1.25;">${label}</p></div>`;
}

// ---------- Slide 1: Title ----------
const titleHtml = `<!DOCTYPE html><html><head><style>${BASE_CSS}
body{background:${NAVY};flex-direction:row;}
.stripe{width:10pt;background:${TEAL};}
.hero{flex:1;padding:44pt 52pt;display:flex;flex-direction:column;justify-content:center;}
.eyebrow{color:${TEAL};font-size:10.5pt;font-weight:bold;letter-spacing:2.5pt;}
h1.big{color:${WHITE};font-size:36pt;font-weight:bold;line-height:1.06;margin-top:16pt;}
.accent-red{width:74pt;height:5pt;background:${RED};margin-top:16pt;}
p.sub{color:#C4D0DE;font-size:15pt;line-height:1.4;margin-top:16pt;max-width:540pt;}
.tags{display:flex;gap:9pt;margin-top:26pt;}
.tag{border:1px solid #2E4A6B;padding:6pt 14pt;border-radius:3pt;}
.tag p{color:#9FB3C8;font-size:9.5pt;font-weight:bold;letter-spacing:1.5pt;}
.meta{margin-top:30pt;}
.meta p{color:#6E83A0;font-size:8.5pt;letter-spacing:.5pt;line-height:1.5;}
</style></head><body>
<div class="stripe"></div>
<div class="hero">
  <p class="eyebrow">SEMINAR &mdash; M&amp;A AS TRANSFORMER OF THE AUTOMOTIVE INDUSTRY</p>
  <h1 class="big">China Strategies in the Automotive Industry</h1>
  <div class="accent-red"></div>
  <p class="sub">Governance, Financing, and Long-Term Value Creation</p>
  <div class="tags"><div class="tag"><p>SAIC MOTOR</p></div><div class="tag"><p>BYD</p></div><div class="tag"><p>GEELY</p></div></div>
  <div class="meta"><p>CHAIR OF BANKING AND FINANCE &nbsp;&middot;&nbsp; GOETHE-UNIVERSIT&Auml;T FRANKFURT</p>
  <p>JULIA ORT &nbsp;&middot;&nbsp; BATUGHAN MAUS &nbsp;&middot;&nbsp; CHIARA STUBNER &nbsp;&middot;&nbsp; 19 JUNE 2026</p></div>
</div></body></html>`;

// ---------- Slide 2: Introduction — research question ----------
const introHtml = `<div class="cols">
  <div style="width:46%;display:flex;flex-direction:column;">
    <ul style="margin-bottom:8pt;">
      <li><b>~55%</b> of new cars sold in China are electric in 2025 (IEA 2026)</li>
      <li>Chinese-HQ makers supply <b>60%</b> of global EV sales</li>
      <li><b>70%</b> of BEVs sold domestically are cheaper than the average car</li>
      <li>IEA forecast: <b>&gt;90%</b> EV share in China by 2035</li>
    </ul>
    <div style="background:${NAVY};border-radius:4pt;padding:11pt 13pt;margin-top:auto;">
      <p style="color:${TEAL};font-size:8.5pt;font-weight:bold;letter-spacing:1.5pt;">RESEARCH QUESTION</p>
      <p style="color:#fff;font-size:11pt;line-height:1.35;margin-top:6pt;">Which governance &amp; financing structure creates long-term shareholder value in a technology-intensive, high-growth market?</p>
      <p style="color:#9FB3C8;font-size:9pt;margin-top:8pt;">Three cases, identical market conditions: <b style="color:#fff;">SAIC &middot; BYD &middot; Geely</b></p>
    </div>
  </div>
  <div style="width:54%;display:flex;align-items:center;justify-content:center;">
    <div id="ev" class="placeholder" style="width:340pt;height:218pt;"></div>
  </div>
</div>`;

// ---------- Slide 3: Three models overview ----------
const ov = (m,c,pl) => `
  <p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:2pt;">MODEL</p>
  <p style="font-size:10pt;color:${NAVY};font-weight:bold;line-height:1.25;margin-top:2pt;">${m}</p>
  <p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:9pt;">CONTROL</p>
  <p style="font-size:9.5pt;color:${ANTH};line-height:1.3;margin-top:2pt;">${c}</p>
  <p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:9pt;">NET PROFIT 2024</p>
  <p style="font-size:9.5pt;color:${ANTH};line-height:1.3;margin-top:2pt;">${pl}</p>`;
const overviewHtml = `<div class="cols">
  ${caseCard('SAIC Motor', SAIC, ov('State-directed JV','Shanghai SASAC (63.71%)',`<b style="color:${RED};">RMB 1.67bn &nbsp;(&minus;88%)</b>`) + `<p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:9pt;">EV READINESS</p><p style="font-size:9.5pt;margin-top:2pt;">Medium &mdash; JV conversion ongoing</p>`)}
  ${caseCard('BYD', BYD, ov('Organic vertical integration','Wang Chuanfu, founder (~17%)',`<b style="color:${TEAL};">RMB 40.25bn &nbsp;(+34%)</b>`) + `<p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:9pt;">EV READINESS</p><p style="font-size:9.5pt;margin-top:2pt;">High &mdash; full ICE exit in 2022</p>`)}
  ${caseCard('Geely', GEELY, ov('M&A-driven private','Li Shufu, private (100% ZGH)',`<b style="color:${STEEL};">RMB 16.8bn &nbsp;(+240%)</b>`) + `<p style="font-size:8.5pt;color:${MIDGRAY};font-weight:bold;letter-spacing:1pt;margin-top:9pt;">EV READINESS</p><p style="font-size:9.5pt;margin-top:2pt;">Medium &mdash; platform-dependent</p>`)}
</div>`;

// ---------- Slide 4: Theory ----------
const th = (n,t,items) => `<div class="card" style="flex:1;border-left:3pt solid ${TEAL};">
  <p style="color:${TEAL};font-size:9pt;font-weight:bold;">${n}</p>
  <p style="color:${NAVY};font-size:11pt;font-weight:bold;margin-top:4pt;line-height:1.2;">${t}</p>
  <ul style="margin-top:7pt;">${items.map(i=>`<li style="font-size:9pt;margin-bottom:4pt;">${i}</li>`).join('')}</ul></div>`;
const theoryHtml = `
<div style="display:flex;gap:12pt;flex:1;">
  ${th('01','Political governance &amp; SOE efficiency',['Shleifer &amp; Vishny (1994): politicians maximise employment, not firm value','Fan, Wong &amp; Zhang (2007): connected CEOs &rarr; &minus;18% CAR','Megginson &amp; Netter (2001): mixed ownership &ne; more profitable'])}
  ${th('02','JV dynamics &amp; capability transfer',['Holmes et al. (2015): JV as an implicit technology tax','Howell (2018): JV rents crowd out autonomous innovation','Inkpen &amp; Beamish (1997): JVs destabilise as learning ends'])}
</div>
<div style="display:flex;gap:12pt;flex:1;margin-top:11pt;">
  ${th('03','Cross-border M&amp;A &amp; springboard',['Luo &amp; Tung (2007): acquisitions as a latecomer springboard','Zheng, Noorderhaven &amp; Du (2022): 4-stage integration model'])}
  ${th('04','Dynamic capabilities &amp; founder control',['Teece, Pisano &amp; Shuen (1997): advantage from tacit, path-dependent knowledge','Zhang et al. (2025): founder control &rarr; more breakthrough innovation'])}
</div>`;

// ---------- Slide 5: Governance SAIC ----------
const saicGovHtml = `<div class="cols">
  <div style="width:42%;display:flex;align-items:center;justify-content:center;">
    <div id="own" class="placeholder" style="width:248pt;height:212pt;"></div>
  </div>
  <div style="width:58%;display:flex;flex-direction:column;">
    <ul>
      <li><b>~73% state ownership:</b> SASAC 63.71% + COSCO 5.91% + Yuejin 3.60%</li>
      <li>&ldquo;Two consistencies&rdquo;: Party leadership <i>and</i> modern enterprise system &mdash; a <b>formal, constitutive</b> part of governance</li>
    </ul>
    <div class="card" style="background:#FCEDEC;border-left:3pt solid ${RED};margin-top:3pt;">
      <p style="color:${RED};font-size:8.5pt;font-weight:bold;letter-spacing:1pt;">EMPIRICAL PENALTY &mdash; FAN ET AL. 2007 (n=790)</p>
      <p style="font-size:9.5pt;color:${ANTH};margin-top:5pt;line-height:1.45;"><b style="color:${NAVY};">&minus;18%</b> 3-yr post-IPO CAR &nbsp;&middot;&nbsp; sales growth <b style="color:${NAVY};">&minus;21%</b> &nbsp;&middot;&nbsp; earnings <b style="color:${NAVY};">&minus;24%</b> &nbsp;&middot;&nbsp; bureaucrats on <b style="color:${NAVY};">36%</b> of boards (vs. 19%)</p>
    </div>
    <p style="font-size:9pt;color:${MIDGRAY};margin-top:9pt;line-height:1.4;"><b style="color:${NAVY};">2025 reform:</b> Board of Supervisors abolished &rarr; stronger Audit Committee. Formal modernisation only &mdash; the 63.71% SASAC stake and Party mandate are unchanged.</p>
  </div>
</div>`;

// ---------- Slide 6: Governance BYD & Geely ----------
const bydGovHtml = `<ul>
  <li><b>Wang Chuanfu:</b> Chairman + CEO since 1995, ~17% direct; with Lu Xiangyang (5.1%) &gt;1/3 of votes</li>
  <li>No Party committee with directive authority; subsidies (RMB 10.4bn) confer <b>no control rights</b></li>
  <li>Decisions without consensus: <b>ICE exit 2022</b>, BYD Semiconductor, FinDreams spin-off</li>
  <li>&ldquo;Fast decision-making&rdquo; named a core advantage (He 2025)</li></ul>`;
const geelyGovHtml = `<ul>
  <li><b>Li Shufu:</b> 100% owner of unlisted ZGH apex &rarr; ~76% control of Geely Auto (HK 0175)</li>
  <li>No JV-partner or state-committee consent required</li>
  <li>Acquisition path: <b>Volvo 2010</b> ($1.8bn) &rarr; LEVC 2013 &rarr; Lotus 2017 (51%) &rarr; Smart JV 2020 (50:50)</li>
  <li>Multi-brand portfolio &rarr; coordination costs rise with complexity</li></ul>`;
const govBydGeelyHtml = `<div class="cols">
  ${caseCard('BYD &mdash; founder control without political constraint', BYD, bydGovHtml)}
  ${caseCard('Geely &mdash; private conglomerate apex', GEELY, geelyGovHtml)}
</div>`;

// ---------- Slide 7: Financing SAIC & BYD ----------
const saicFinHtml = stat('0.58%','Weighted ROE 2024 (from 5.84% in 2022)', RED) + `<ul>
  <li>JV model: VW + GM each carry 50% of capex &amp; risk &rarr; dividends without own investment</li>
  <li>2024: SAIC-GM sales <b>&minus;56.5%</b> &rarr; forced to absorb 50% impairment without restructuring control</li>
  <li>Revenue <b>&minus;15.7%</b> (RMB 627.6bn); net profit <b>&minus;88.2%</b> (RMB 1.67bn); EU duty <b>35.3%</b></li></ul>`;
const bydFinHtml = stat('4.9%','Interest-bearing debt as share of total liabilities', BYD) + `<ul>
  <li>FY2024 revenue RMB 777.1bn (+29%); operating CF RMB 133.5bn; cash RMB 154.9bn</li>
  <li>R&amp;D RMB 54.2bn (+35.7%) <b>exceeds</b> net profit RMB 40.3bn &mdash; in 13 of 14 years</li>
  <li>Subsidies RMB 10.4bn (~26% of profit) but <b>no control rights</b></li></ul>`;
const finSaicBydHtml = `<div class="cols">
  ${caseCard('SAIC &mdash; capital-light JV becomes a capital trap', SAIC, saicFinHtml)}
  ${caseCard('BYD &mdash; internal financing as structural strength', BYD, bydFinHtml)}
</div>`;

// ---------- Slide 8: Financing Geely ----------
const geelyFinHtml = `<div class="cols">
  <div style="width:50%;display:flex;flex-direction:column;">
    ${stat('10&times;','Volvo IPO 2021 (~$18.5bn) vs. 2010 buy ($1.8bn)', GEELY)}
    <ul style="margin-top:2pt;">
      <li><b>Volvo 2010:</b> $1.8bn price &rarr; ~$2.7bn total; banks (BoC/CCB/ExIm) ~$2.1bn + ~$932m central-gov (~50%)</li>
      <li>ZGH debt RMB 16.1bn (2009) &rarr; <b>71.1bn (2010)</b>; D/C ratio 73.5%</li>
    </ul>
  </div>
  <div style="width:50%;display:flex;flex-direction:column;">
    <div class="card" style="background:#FCEDEC;border-left:3pt solid ${RED};">
      <p style="color:${RED};font-size:8.5pt;font-weight:bold;letter-spacing:1pt;">PRESENT REFINANCING RISK</p>
      <ul style="margin-top:6pt;">
        <li style="font-size:9pt;"><b>Polestar:</b> &minus;$1.17bn FY23, going-concern (Deloitte), $103m cash, ~$2bn needed to 2028</li>
        <li style="font-size:9pt;"><b>Lotus Tech:</b> ~$3.2bn accumulated deficit; revenue &minus;44% FY25</li>
      </ul>
    </div>
    <p style="font-size:8.5pt;color:${MIDGRAY};margin-top:9pt;line-height:1.4;">Group debt service remains structurally dependent on Volvo's sustained profitability.</p>
  </div>
</div>
<div style="background:${NAVY};border-radius:4pt;padding:9pt 13pt;margin-top:10pt;">
  <p style="color:#fff;font-size:9.5pt;line-height:1.35;"><b style="color:${TEAL};">Trade-off:</b> BYD = growth speed vs. resilience &nbsp;&middot;&nbsp; SAIC = risk-hedging vs. loss of control &nbsp;&middot;&nbsp; Geely = balance-sheet risk vs. strategic speed.</p>
</div>`;

// ---------- Slide 9: Capability SAIC paradox ----------
const capParadoxHtml = `<div class="cols">
  <div style="width:50%;display:flex;flex-direction:column;gap:9pt;">
    <div class="card" style="border-left:3pt solid ${TEAL};">
      <p style="color:${TEAL};font-size:9pt;font-weight:bold;">WHAT THE JV GAVE &mdash; Bai et al. 2025</p>
      <ul style="margin-top:6pt;"><li style="font-size:9pt;"><b>+8.3%</b> quality gain in JV-affiliated models</li><li style="font-size:9pt;">Defect gap: 65% higher (2001) &rarr; 33% (2014)</li><li style="font-size:9pt;">Channel: worker mobility &amp; suppliers &mdash; not patents</li></ul>
    </div>
    <div class="card" style="border-left:3pt solid ${RED};">
      <p style="color:${RED};font-size:9pt;font-weight:bold;">WHAT IT PREVENTED &mdash; Howell 2018</p>
      <ul style="margin-top:6pt;"><li style="font-size:9pt;">Firms cut quality instead of innovating under regulation</li><li style="font-size:9pt;">Cannibalisation: own brand competes with profitable JV stream</li></ul>
    </div>
  </div>
  <div style="width:50%;display:flex;flex-direction:column;justify-content:center;">
    <div style="background:${NAVY};border-radius:4pt;padding:13pt 15pt;">
      <p style="color:${TEAL};font-size:9pt;font-weight:bold;letter-spacing:1pt;">THE CAPABILITY PARADOX</p>
      <p style="color:#fff;font-size:12.5pt;font-weight:bold;line-height:1.32;margin-top:8pt;">&ldquo;JV rents are like opium&rdquo;</p>
      <p style="color:#9FB3C8;font-size:8.5pt;margin-top:3pt;">&mdash; He Guangyan, former Minister of Machinery</p>
      <p style="color:#C4D0DE;font-size:9.5pt;line-height:1.4;margin-top:10pt;">The JV transferred production quality but suppressed the autonomous innovation the EV era needs &mdash; no proprietary battery, no software platform.</p>
    </div>
  </div>
</div>`;

// ---------- Slide 10: Capability BYD & Geely ----------
const bydCapHtml = `<ul>
  <li>1995 phone batteries &rarr; 2003 vehicles &rarr; mid-2000s automotive batteries</li>
  <li><b>&ldquo;Specialised vertical integration&rdquo;</b> &mdash; capabilities stack on each other (Wang, Zhao &amp; Ruet 2022)</li>
  <li>Tacit knowledge in routines &mdash; <b>not</b> transferable by licence or hiring (Teece et al. 1997)</li>
  <li>BYD shaped the policy agenda rather than followed it (Whitfield &amp; Wuttke 2026)</li></ul>`;
const geelyCapHtml = `<ul>
  <li>Volvo 2010: instant access to safety engineering, 3 platforms, 2,400+ dealers</li>
  <li>Strategic asset-seeking FDI (Luo &amp; Tung 2007); 4-stage integration (Zheng et al. 2022)</li>
  <li><b>CMA platform</b> &mdash; bilateral co-development across Volvo, Lynk &amp; Co, Geely</li>
  <li>R&amp;D <b>+600%</b> in 7 years; measurable patent convergence (Konda et al. 2022)</li></ul>`;
const capBydGeelyHtml = `<div class="cols">
  ${caseCard('BYD &mdash; organic build, structurally hard to imitate', BYD, bydCapHtml)}
  ${caseCard('Geely &mdash; M&A as capability compressor', GEELY, geelyCapHtml)}
</div>`;

// ---------- Slide 11: Viability SAIC ----------
const saicViabHtml = `<div class="cols">
  <div style="width:50%;display:flex;align-items:center;justify-content:center;">
    <div id="util" class="placeholder" style="width:300pt;height:216pt;"></div>
  </div>
  <div style="width:50%;display:flex;flex-direction:column;">
    <div class="card" style="background:#FCEDEC;border-left:3pt solid ${RED};">
      <p style="color:${RED};font-size:9pt;font-weight:bold;">DUAL PRESSURE</p>
      <ul style="margin-top:6pt;"><li style="font-size:9pt;">Domestic: JV demand collapses, own-brand still runs</li><li style="font-size:9pt;">Export: EU duty <b>35.3%</b> &mdash; double BYD's 17.0%</li></ul>
    </div>
    <div class="card" style="margin-top:9pt;border-left:3pt solid ${NAVY};">
      <p style="color:${NAVY};font-size:9pt;font-weight:bold;">RESPONSE: &ldquo;JV 2.0&rdquo;</p>
      <p style="font-size:9pt;color:${ANTH};margin-top:5pt;line-height:1.4;">Repurpose JV capacity for own-brand EVs; SAIC SHANGJIE with Huawei (Sep 2025). But SASAC 63.71% + Party mandate cap the speed of capital reallocation.</p>
    </div>
  </div>
</div>`;

// ---------- Slide 12: Viability BYD & Geely ----------
const bydViabHtml = `<ul>
  <li>2022 full ICE exit &mdash; no combustion segment burdens capital allocation</li>
  <li>FY2025: <b>&gt;1M exports (+140%)</b>, 119 countries; 4th year global NEV leader</li>
  <li>USD 5.6bn capital raise (Mar 2025): institutions + sovereign funds</li>
  <li><b>Risks:</b> gross margin 19%&rarr;18%; net profit &minus;19% (RMB 32.6bn); net-cash &rarr; net-debt; EU duty 17% (27% combined)</li></ul>`;
const geelyViabHtml = `<ul>
  <li>Geely Auto: revenue +32% ($33.4bn); net profit <b>+240%</b></li>
  <li>Volvo Cars: SEK 400.2bn, 6.8% EBIT &mdash; second record year; NEVs 51.5% of H1-25 sales</li>
  <li>Geely stock +39% (early 2026) vs. BYD +12%</li>
  <li><b>Risks:</b> Polestar (going concern) + Lotus (&minus;44%) + Smart; EV relies on Volvo/Smart platforms &mdash; no unilateral ZGH access</li></ul>`;
const viabBydGeelyHtml = `<div class="cols">
  ${caseCard('BYD &mdash; EV transition structurally complete', BYD, bydViabHtml)}
  ${caseCard('Geely &mdash; strong core, risky periphery', GEELY, geelyViabHtml)}
</div>`;

// ---------- Slide 13: Lesson 1 ----------
const lesson1Html = `
<div style="flex:1;display:flex;align-items:center;justify-content:center;">
  <div id="l1" class="placeholder" style="width:644pt;height:150pt;background:transparent;"></div>
</div>
<div style="background:#E8F7F4;border-left:4pt solid ${TEAL};border-radius:4pt;padding:9pt 13pt;margin-top:4pt;">
  <p style="font-size:10pt;color:${NAVY};line-height:1.35;"><b>Core:</b> Mandatory technology transfer buys short-run quality but displaces the autonomous innovation needed for the next technology cycle. Voluntary acquisition and organic development avoid this &mdash; trading <b>speed vs. depth vs. independence</b>.</p>
</div>`;

// ---------- Slide 14: Lessons 2 & 3 ----------
const miniCol = (name,color,txt) => `<div style="flex:1;">
  <p style="color:${color};font-size:9.5pt;font-weight:bold;">${name}</p>
  <p style="font-size:9pt;color:${ANTH};margin-top:4pt;line-height:1.35;">${txt}</p></div>`;
const lessons23Html = `
<div class="card" style="border-left:3pt solid ${TEAL};">
  <p style="color:${NAVY};font-size:11.5pt;font-weight:bold;">Lesson 2 &middot; Governance is a first-order determinant of strategic adaptability</p>
  <div style="display:flex;gap:16pt;margin-top:8pt;">
    ${miniCol('SAIC',SAIC,'Control split across SASAC, Party &amp; 50/50 JV boards &rarr; slow')}
    ${miniCol('BYD',BYD,'Consolidated founder control &rarr; ICE exit 2022 with no external approval')}
    ${miniCol('Geely',GEELY,'Private apex, but multi-brand portfolio creates coordination costs')}
  </div>
  <p style="font-size:9pt;color:${MIDGRAY};font-style:italic;margin-top:8pt;line-height:1.35;">&ldquo;When the rate of technological change exceeds a governance structure's decision cycle, governance itself becomes the binding competitive constraint.&rdquo;</p>
</div>
<div class="card" style="border-left:3pt solid ${RED};margin-top:11pt;">
  <p style="color:${NAVY};font-size:11.5pt;font-weight:bold;">Lesson 3 &middot; Capital structure determines resilience when markets contract</p>
  <div style="display:flex;gap:16pt;margin-top:8pt;">
    ${miniCol('SAIC',SAIC,'Capital-light &rarr; capital trap: absorbs 50% of impairment without control')}
    ${miniCol('BYD',BYD,'Self-financing &rarr; resilient to partner losses; vulnerable to margin compression')}
    ${miniCol('Geely',GEELY,'Leverage for speed &rarr; highest return (10&times; Volvo); highest portfolio default risk')}
  </div>
</div>`;

// ---------- Slide 15: Conclusion (dark) ----------
const conclusionHtml = `<!DOCTYPE html><html><head><style>${BASE_CSS}
body{background:${NAVY};flex-direction:row;}
.stripe{width:10pt;background:${TEAL};}
.wrap{flex:1;padding:32pt 50pt;display:flex;flex-direction:column;justify-content:center;}
.eyebrow{color:${TEAL};font-size:10pt;font-weight:bold;letter-spacing:2.5pt;}
h1.c{color:${WHITE};font-size:18pt;font-weight:bold;margin-top:10pt;line-height:1.28;max-width:600pt;}
.accent{width:64pt;height:4pt;background:${RED};margin:14pt 0;}
.tk{display:flex;gap:13pt;}
.tkc{flex:1;border-top:2pt solid var(--c);padding-top:8pt;}
.tkc p.t{font-size:11pt;font-weight:bold;}
.tkc p.d{color:#AFC0D4;font-size:8.5pt;margin-top:5pt;line-height:1.38;}
.open{color:#9FB3C8;font-size:9.5pt;font-style:italic;margin-top:16pt;line-height:1.4;max-width:600pt;}
</style></head><body>
<div class="stripe"></div>
<div class="wrap">
  <p class="eyebrow">CONCLUSION</p>
  <h1 class="c">Governance is the binding constraint &mdash; it sets which financing strategies are viable, which capabilities can be built autonomously, and which competitive positions stay reachable under rapid technological change.</h1>
  <div class="accent"></div>
  <div class="tk">
    <div class="tkc" style="--c:${TEAL};"><p class="t" style="color:${TEAL};">BYD &mdash; structurally superior</p><p class="d">Founder control + vertical integration + internal financing for the EV era.</p></div>
    <div class="tkc" style="--c:${STEEL};"><p class="t" style="color:#8FB0D0;">Geely &mdash; strong but exposed</p><p class="d">High-performing core; portfolio complexity &amp; leverage are the vulnerability.</p></div>
    <div class="tkc" style="--c:${RED};"><p class="t" style="color:#F08B86;">SAIC &mdash; a double brake</p><p class="d">JV legacy meets political governance; modernisation is formal, not structural.</p></div>
  </div>
  <p class="open">Open question: can SAIC's &ldquo;JV 2.0&rdquo; overcome the politico-bureaucratic decision speed that has historically capped its adaptability?</p>
</div></body></html>`;

// ---------- Slide 16: AI Highlights ----------
const aiCol = (title,color,items) => `<div class="card" style="flex:1;border-top:3pt solid ${color};">
  <p style="color:${color};font-size:11pt;font-weight:bold;">${title}</p>
  <ul style="margin-top:8pt;">${items.map(i=>`<li style="font-size:9pt;margin-bottom:6pt;">${i}</li>`).join('')}</ul></div>`;
const aiHtml = `
<div style="display:flex;gap:13pt;flex:1;">
  ${aiCol('What we used', TEAL, ['Shared git repo with three company wikis (BYD, SAIC, Geely)','Claude Code CLI: wiki-ingest, wiki-query, wiki-lint agents','29+ academic sources ingested, linked &amp; cross-referenced','Source-rating system for prioritisation'])}
  ${aiCol('What helped', NAVY, ['Auto-extraction &amp; linking of entities and concepts across sources','Cross-source synthesis flagged contradictions (e.g. ROE discrepancy)','Drafting assistance directly from cited material'])}
  ${aiCol('Challenges', RED, ['No direct SharePoint/cloud access &rarr; local files','Hallucinated financials &rarr; consistent cross-checks vs. annual reports','Wiki schema setup took ~1&ndash;2h up front'])}
</div>
<div style="background:${NAVY};border-radius:4pt;padding:8pt 13pt;margin-top:10pt;">
  <p style="color:#fff;font-size:9.5pt;"><b style="color:${TEAL};">Cost:</b> Claude Pro ~$20/month &nbsp;&middot;&nbsp; <b style="color:${TEAL};">Workflow:</b> local-first research wiki, shared via git.</p>
</div>`;

// ---------- Assemble ----------
const F = 'Source: 2. Entwurf (seminar paper); SAIC / BYD / Geely Annual Reports; IEA (2026); European Commission (2024).';
const slides = [
  { name:'01_title', html: titleHtml },
  { name:'02_intro', html: lightDoc({ kicker:'INTRODUCTION', title:'55% of new cars in China are electric in 2025 &mdash; which model survives?', contentHtml: introHtml, foot:'IEA (2026). EV share of new-car sales; 2035 figure is an IEA projection.', section:'Introduction', page:'02' }), chart:'ev' },
  { name:'03_overview', html: lightDoc({ kicker:'INTRODUCTION', title:'Three paths, one market &mdash; sharply diverging outcomes', contentHtml: overviewHtml, foot:'Source: company annual reports (FY2024).', section:'Introduction', page:'03' }) },
  { name:'04_theory', html: lightDoc({ kicker:'THEORY &amp; LITERATURE', title:'Four theoretical strands &mdash; one analytical lens', contentHtml: theoryHtml, foot:'See references in the seminar paper.', section:'Theory', page:'04' }) },
  { name:'05_gov_saic', html: lightDoc({ kicker:'GOVERNANCE', title:'SAIC: the state as controller &mdash; politically embedded objectives by design', contentHtml: saicGovHtml, foot:'SAIC Motor (2026); Fan, Wong &amp; Zhang (2007); Shleifer &amp; Vishny (1994).', section:'Governance', page:'05' }), chart:'own' },
  { name:'06_gov_byd_geely', html: lightDoc({ kicker:'GOVERNANCE', title:'Two private models: consolidated founder control vs. a conglomerate apex', contentHtml: govBydGeelyHtml, foot:'BYD Annual Report (2024); He (2025); Zhang et al. (2025); Luo &amp; Tung (2007).', section:'Governance', page:'06' }) },
  { name:'07_fin_saic_byd', html: lightDoc({ kicker:'FINANCING', title:'A capital-light JV becomes a capital trap; BYD&rsquo;s internal financing is a structural strength', contentHtml: finSaicBydHtml, foot:'SAIC Motor (2025); BYD Annual Report (2024); European Commission (2024).', section:'Financing', page:'07' }) },
  { name:'08_fin_geely', html: lightDoc({ kicker:'FINANCING', title:'Geely: leverage for speed &mdash; the highest financing risk of the three', contentHtml: geelyFinHtml, foot:'Balcet, Wang &amp; Richet (2012); company filings (Polestar, Lotus Technology).', section:'Financing', page:'08' }) },
  { name:'09_cap_saic', html: lightDoc({ kicker:'CAPABILITY BUILDING', title:'&ldquo;JV rents are like opium&rdquo; &mdash; the capability paradox', contentHtml: capParadoxHtml, foot:'Bai, Barwick, Cao &amp; Li (2025); Howell (2018); Inkpen &amp; Beamish (1997).', section:'Capability', page:'09' }) },
  { name:'10_cap_byd_geely', html: lightDoc({ kicker:'CAPABILITY BUILDING', title:'Organic build (non-imitable) vs. M&amp;A as a capability compressor', contentHtml: capBydGeelyHtml, foot:'Wang, Zhao &amp; Ruet (2022); Teece et al. (1997); Zheng et al. (2022); Konda et al. (2022).', section:'Capability', page:'10' }) },
  { name:'11_viab_saic', html: lightDoc({ kicker:'LONG-TERM VIABILITY', title:'JV erosion meets the EV transition &mdash; simultaneously', contentHtml: saicViabHtml, foot:'SAIC Motor (2026); European Commission (2024). 2025 capacity-utilisation figures.', section:'Viability', page:'11' }), chart:'util' },
  { name:'12_viab_byd_geely', html: lightDoc({ kicker:'LONG-TERM VIABILITY', title:'BYD: transition structurally complete; Geely: strong core, risky periphery', contentHtml: viabBydGeelyHtml, foot:'BYD Annual Report (2025); Geely Automobile Holdings interim results (2025); Allen et al. (2024).', section:'Viability', page:'12' }) },
  { name:'13_lesson1', html: lightDoc({ kicker:'GENERALIZABLE LESSONS', title:'Lesson 1: The mode of capability acquisition determines durability across technology cycles', contentHtml: lesson1Html, foot:'Bai et al. (2025); Teece et al. (1997); Konda et al. (2022).', section:'Lessons', page:'13' }), table:'l1' },
  { name:'14_lesson23', html: lightDoc({ kicker:'GENERALIZABLE LESSONS', title:'Lesson 2: governance drives adaptability &middot; Lesson 3: capital structure drives resilience', contentHtml: lessons23Html, foot:'Synthesis across the four analytical dimensions.', section:'Lessons', page:'14' }) },
  { name:'15_conclusion', html: conclusionHtml },
  { name:'16_ai', html: lightDoc({ kicker:'APPENDIX &middot; AI HIGHLIGHTS', title:'How we used a shared git repository + Claude (Anthropic)', contentHtml: aiHtml, foot:'Tooling: Claude Code CLI with an APM-managed research wiki.', section:'AI Highlights', page:'16' }) },
];

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Ort · Maus · Stubner';
  pptx.title = 'China Strategies in the Automotive Industry';

  for (const s of slides) {
    const file = path.join(HTML, s.name + '.html');
    fs.writeFileSync(file, s.html);
    const { slide, placeholders } = await html2pptx(file, pptx);
    const ph = placeholders[0];

    if (s.chart === 'ev') {
      slide.addChart(pptx.charts.BAR, [{ name:'EV share', labels:['2020','2022','2024','2025','2035E'], values:[5.4,29,47,55,90] }], {
        ...ph, barDir:'col', chartColors:[cNAVY,cNAVY,cNAVY,cRED,cTEAL],
        showTitle:true, title:'EV share of new-car sales in China, %', titleColor:cNAVY, titleFontSize:11, titleFontFace:'Arial',
        showLegend:false, showValue:true, dataLabelPosition:'outEnd', dataLabelColor:cANTH, dataLabelFontSize:9, dataLabelFontBold:true, dataLabelFormatCode:'0"%"',
        valAxisHidden:true, valGridLine:{style:'none'}, valAxisMaxVal:100, valAxisMinVal:0,
        catAxisLabelColor:cANTH, catAxisLabelFontSize:10, catAxisLineColor:cLINE, barGapWidthPct:45 });
    } else if (s.chart === 'own') {
      slide.addChart(pptx.charts.DOUGHNUT, [{ name:'Ownership', labels:['Shanghai SASAC','COSCO Shipping','Yuejin Motor','Free float / other'], values:[63.71,5.91,3.60,26.78] }], {
        ...ph, chartColors:[cRED,cNAVY,cSTEEL,'C9D2DC'], holeSize:58,
        showTitle:true, title:'SAIC ownership structure, %', titleColor:cNAVY, titleFontSize:11, titleFontFace:'Arial',
        showLegend:true, legendPos:'b', legendColor:cANTH, legendFontSize:8,
        showValue:false, showPercent:true, dataLabelColor:'FFFFFF', dataLabelFontSize:9, dataLabelFontBold:true });
    } else if (s.chart === 'util') {
      slide.addChart(pptx.charts.BAR, [{ name:'Utilisation', labels:['SAIC-GM','VW MEB (EV)','SAIC-VW','PVB own-brand','Wuling own-brand'], values:[37,14,55,76,95] }], {
        ...ph, barDir:'bar', chartColors:[cRED,cRED,cRED,cTEAL,cTEAL],
        showTitle:true, title:'2025 capacity utilisation, %', titleColor:cNAVY, titleFontSize:11, titleFontFace:'Arial',
        showLegend:false, showValue:true, dataLabelPosition:'outEnd', dataLabelColor:cANTH, dataLabelFontSize:9, dataLabelFontBold:true, dataLabelFormatCode:'0"%"',
        valAxisHidden:true, valGridLine:{style:'none'}, valAxisMaxVal:105, valAxisMinVal:0,
        catAxisLabelColor:cANTH, catAxisLabelFontSize:9.5, catAxisLineColor:cLINE, barGapWidthPct:40 });
    } else if (s.table === 'l1') {
      const hdr = (t,c) => ({ text:t, options:{ fill:{color:c}, color:'FFFFFF', bold:true, fontSize:11, align:'center', valign:'middle' } });
      const rl = (t) => ({ text:t, options:{ fill:{color:'EEF1F5'}, color:cNAVY, bold:true, fontSize:9.5, align:'left', valign:'middle' } });
      const c = (t) => ({ text:t, options:{ fontSize:9.5, color:cANTH, align:'center', valign:'middle' } });
      const rows = [
        [{text:'',options:{fill:{color:'FFFFFF'}}}, hdr('SAIC — Mandatory JV',cRED), hdr('BYD — Organic',cTEAL), hdr('Geely — M&A',cSTEEL)],
        [rl('Short-term effect'), c('+8.3% quality (Bai et al. 2025)'), c('Slow to build'), c('Instant platforms & brands')],
        [rl('Long-term effect'), c('Autonomous innovation displaced'), c('Proprietary, non-imitable'), c('Bilateral co-development')],
        [rl('EV readiness'), c('Lacking'), c('High'), c('Platform-dependent')],
      ];
      slide.addTable(rows, { x:ph.x, y:ph.y, w:ph.w, h:ph.h, colW:[ph.w*0.22,ph.w*0.26,ph.w*0.26,ph.w*0.26],
        rowH:ph.h/4, border:{type:'solid',pt:0.75,color:cLINE}, fill:{color:'FFFFFF'}, valign:'middle', margin:[3,5,3,5] });
    }
  }

  await pptx.writeFile({ fileName: path.join(DIR, 'output.pptx') });
  console.log('WROTE output.pptx');
})().catch(e => { console.error(e.message || e); process.exit(1); });
