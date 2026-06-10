# Wiki Log

Append-only chronological record of every wiki operation. Entry prefix is
`## [YYYY-MM-DD HH:MM] <op> | <title>` so the log stays `grep`-parseable:

```
grep "^## \[" research/wiki/log.md | tail -10
```

Valid `<op>` values: `ingest`, `query`, `lint`, `resolve`, `refactor`.

## [2026-05-23 00:00] ingest | SAIC Motor Annual Report 2024 (Official Primary Source)

- Source: [[2026-05-23-saic-annual-report-2024]]
- Input file: `research/input/pdf/SAIC-Motor-Annual-Report-2024.pdf` (245 pages, PwC-audited)
- Wiki folder: `research/wiki/saic-motor/`
- New entities: [[saic-motor]], [[saic-gm]], [[saic-volkswagen]], [[shanghai-sasac]]
- New concepts: [[joint-venture-model]], [[state-owned-enterprise]]
- New index: `research/wiki/saic-motor/index.md`
- Updated: [[log]]
- Contradictions resolved: EPS 2024 confirmed as RMB 0.145 (not 0.71 as in web source — wrong share count); net profit confirmed RMB 1.666 billion (not 16.66bn — 亿-unit ambiguity in earlier web source). Both flags on [[2026-05-23-saic-motor-financials-2020-2024]] are now resolved.
- Contradictions flagged: none
- Research purpose: Hausarbeit comparing four Chinese automotive governance/financing models; SAIC as the "JV-centric SOE" archetype

## [2026-05-25 00:00] ingest | SAIC Motor — Academic & Industry Sources (Web Research, 21-query)

- Source: [[2026-05-25-saic-motor-sources-web-research]]
- Input folder: `research/input/web-search/saic-motor-sources-2026-05-25/` (5 files: index, 01-academic-papers, 02-primary-sources, 03-industry-reports, urls.md)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-25-saic-motor-sources-web-research]]
- New concept pages: [[quid-pro-quo-policy]] (saic-motor/), [[jv-instability]] (concepts/)
- Updated entity pages: [[saic-motor]] (EU tariff corrected, 2023 data added)
- Updated concept pages: [[joint-venture-model]] (academic citations added, Inkpen-Beamish + Bai et al. + Howell), [[state-owned-enterprise]] (Chan/Wang/Wang&Tan citations added)
- Updated indexes: `research/wiki/saic-motor/index.md`, `research/wiki/index.md`
- Contradictions resolved: EU anti-subsidy tariff on [[saic-motor]] corrected from 36.3% (provisional, Aug 2024) to 35.3% (final, EU Reg. 2024/2754, effective 30 Oct 2024). Conflict callout added to [[saic-motor]] page.
- Contradictions flagged: none new
- Research purpose: Bachelor seminar paper — SAIC as "JV-centric SOE" archetype; source list with confirmed ABS/VHB rankings for academic citation

## [2026-05-22 00:00] ingest | BYD Vertical Integration Strategy — Web Research (19-angle)

- Source: [[2026-05-22-byd-vertical-integration-web-research]]
- Input folder: `research/input/web-search/byd-vertical-integration-2026-05-22/` (21 files: index, 19 angle files, urls.md)
- New entities: [[byd-company]], [[wang-chuanfu]], [[lu-xiangyang]], [[berkshire-hathaway]], [[findreams]], [[byd-semiconductor]], [[tesla]], [[catl]]
- New concepts: [[vertical-integration]], [[blade-battery]], [[lfp-chemistry]], [[igbt-semiconductor]], [[founder-led-governance]], [[china-ev-governance-models]], [[dilink-xuanji-architecture]], [[ev-price-war]]
- Updated: [[index]], [[overview]], [[log]]
- Contradictions flagged: none (apparent gross margin discrepancy between 2024 full-year 19.4% and Q2 2025 10–15% is resolved as time-period difference, not a conflict)
- Research purpose: Hausarbeit comparing four Chinese automotive governance/financing models; BYD as the "vertically integrated private" archetype

## [2026-05-27 00:00] ingest | Holmes, McGrattan & Prescott (2015) — Quid Pro Quo, RES (Primary PDF)

- Source: [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]]
- Input file: `research/wiki/saic-motor/input/pdf/Quid Pro Quo_ Technology Capital Transfers for Market Access in China.pdf` (40 pages, journal pp. 1154–1193)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]]
- Updated concept pages: [[quid-pro-quo-policy]] (welfare figures and patent evidence added with journal page numbers; source link updated)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: China ~5% welfare gain, advanced economies 0.3–0.5% loss; patent rights China-only (p. 1158); 1994 automotive policy 50% cap (p. 1161); DOI confirmed as 10.1093/restud/rdv008
- Research purpose: Bachelor seminar paper — quantitative macro-level framework for SAIC's QPQ JV model; complements Bai et al. (2025) micro-level evidence

## [2026-05-27 00:00] ingest | Howell (2018) — Joint Ventures and Technology Adoption: A Chinese Industrial Policy That Backfired

- Source: [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]
- Input file: `research/wiki/saic-motor/input/pdf/Joint ventures and technology adoption_A Chinese industrial policy that backfired.pdf` (14 pages, journal pp. 1448–1462)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]
- Updated concept pages: [[quid-pro-quo-policy]] (cannibalization mechanism and "like opium" quote added with journal page numbers; source link updated to direct source page)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none (complements Holmes et al. and Bai et al. — spillover and cannibalization effects operate simultaneously; Howell's net finding is that cannibalization dominated for EV-era competitiveness)
- Key findings ingested: -11% torque/-15% price in JV-linked firms (p. 1457, Table 2); exports by non-JV firms since 2008 (p. 1457, §5.1); "like opium" quote from Former Minister He Guangyan (p. 1448); cannibalization outweighs efficiency effect (p. 1458, §5.3); DOI confirmed as 10.1016/j.respol.2018.04.021
- Research purpose: Bachelor seminar paper — key counterpoint showing JV rents reduced SAIC's innovation incentive; complements Bai et al. (positive spillovers) and Holmes et al. (macro welfare gains)

## [2026-05-27 00:00] ingest | Fan, Wong & Zhang (2007) — Politically Connected CEOs, JFE (Primary PDF)

- Source: [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]]
- Input file: `research/wiki/saic-motor/input/pdf/Politically connected CEOs, corporate governance, and Post-IPO performance of China's newly partially privatized firms.pdf` (28 pages, journal pp. 330–357)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]]
- Updated concept pages: [[state-owned-enterprise]] (Fan et al. "grabbing hand" added with page numbers; academic sources table updated)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: 27% of CEOs politically connected (p. 335, Table 1); −15% 3-yr CAR (p. 340, Table 3); −21% sales growth, −24% earnings growth (p. 341, Table 4); boards +17pp bureaucrats/−13pp professionals (p. 350, Table 10); "grabbing hand" conclusion (p. 353); DOI confirmed as 10.1016/j.jfineco.2006.03.008
- Research purpose: Bachelor seminar paper — ABS 4* quantitative anchor for the governance dimension; explains why SAIC's SASAC-appointed board structure produces systematically weaker performance than private-firm competitors

## [2026-05-27 00:00] ingest | Jia, Huang & Zhang (2019) — Public Governance, Corporate Governance, and Firm Innovation, AMJ (Primary PDF)

- Source: [[2026-05-27-jia-huang-zhang-2019-public-governance-soe-innovation-amj]]
- Input file: `research/wiki/saic-motor/input/pdf/Public Governance, Corporate Governance, and Firm Innovation An Examination of State-Owned Enterprises.pdf` (28 pages, journal pp. 220–247)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-jia-huang-zhang-2019-public-governance-soe-innovation-amj]]
- Updated concept pages: [[state-owned-enterprise]] (SOE innovation-quality mechanism added; Jia et al. entry added to academic sources table)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: quantity-over-novelty bias under weak governance (p. 220); board alignment → 30.40% vs 11.52% novel patent increase (p. 234, Model 2-6); state monitoring → 15.69% vs 9.89% (p. 234, Model 3-6); complementarity of corporate and public governance (p. 237); DOI confirmed as 10.5465/amj.2016.0543
- Research purpose: Bachelor seminar paper — ABS 4* mechanism explaining why SAIC's innovation investments produce visible outputs (model counts) but not deep EV capability; complements Fan et al. (who governs) and Howell (JV disincentive) to give complete governance → capability gap chain

## [2026-05-27 00:00] ingest | Megginson & Netter (2001) — From State to Market, JEL (Primary PDF)

- Source: [[2026-05-27-megginson-netter-2001-from-state-to-market-jel]]
- Input file: `research/wiki/saic-motor/input/pdf/From State to Market_A Survey of Empirical Studies on Privatization.pdf` (70 pages, journal pp. 321–389)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-megginson-netter-2001-from-state-to-market-jel]]
- Updated concept pages: [[state-owned-enterprise]] (MNR benchmark figures added; empirical consensus section added; Megginson & Netter added to academic sources table)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: MNR Table 5 — weighted average across 211 firms: +3.96pp profitability, +19.14% efficiency, +83.21% output, −4.69pp leverage (p.354–356); soft budget constraint as root cause of SOE inefficiency (p.331); partial privatization insufficient — full private ownership required (p.334–335); China social welfare burden makes full privatization difficult (p.325); JSTOR: 2698243
- Research purpose: Bachelor seminar paper — ABS 4* empirical consensus establishing the scale of SOE efficiency disadvantage vs. private firms; the MNR figures provide quantitative grounding for SAIC's structural disadvantage vs. BYD; China-specific observation confirms why SAIC's reforms fall short

## [2026-05-27 00:00] ingest | Shleifer & Vishny (1994) — Politicians and Firms, QJE (Primary PDF, scanned)

- Source: [[2026-05-27-shleifer-vishny-1994-politicians-and-firms-qje]]
- Input file: `research/wiki/saic-motor/input/pdf/politicians and firms.pdf` (31 pages, journal pp. 995–1025; scanned image PDF — extracted via pymupdf page rendering)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-shleifer-vishny-1994-politicians-and-firms-qje]]
- Updated concept pages: [[state-owned-enterprise]] (Shleifer & Vishny theoretical foundation added; entry added to academic sources table as earliest foundational reference)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: Prop. 1 — control rights (not cash flow rights) determine outcomes (p.1005); Prop. 5 — manager control produces lower L and higher T than politician control (p.1011); Prop. 13 — politicians prefer weak manager ownership stakes (p.1020); privatization determinants: conservative government + low B(L) (p.1022); decency constraint → profitable firms restructure, hopeless firms continue subsidized (pp.1019–1020); JSTOR: 2118354
- Research purpose: Bachelor seminar paper — ABS 4* theoretical foundation for all SOE governance claims; explains why SASAC-controlled SAIC has weak management incentives (Proposition 13) and excess employment orientation; precedes and motivates Fan et al. (2007), Jia et al. (2019), and Bortolotti & Faccio (2009)

## [2026-05-27 00:00] ingest | Bruton, Peng et al. (2015) — SOEs as Hybrid Organizations, AMP (Primary PDF)

- Source: [[2026-05-27-bruton-peng-et-al-2015-soe-hybrid-organizations-amp]]
- Input file: `research/wiki/saic-motor/input/pdf/STATE-OWNED ENTERPRISES AROUND THE WORLD AS HYBRID ORGANIZATIONS.pdf` (24 pages, journal pp. 92–114)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-bruton-peng-et-al-2015-soe-hybrid-organizations-amp]]
- Updated concept pages: [[state-owned-enterprise]] (hybrid framework section added; Bruton et al. entry added to academic sources table as ABS 3)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: 3×3 ownership×control hybrid matrix (pp.100–101, Table 3); ownership ≠ control — separable dimensions; SASAC cited as Chinese high-control instrument (p.100); soft budget constraint → "ignore market signals and many key technologies, particularly during periods of technological ferment" (p.102); CEO government background → employment/social focus over profit/innovation (pp.103–104); SAIC Motor maps to Cell 3 (high ownership + high control = traditional SOE); DOI confirmed as 10.5465/amp.2013.0069
- Research purpose: Bachelor seminar paper — management-oriented framework for SAIC's governance position; the 3×3 matrix provides a taxonomy for the Governance section; the CEO-background and soft-budget-constraint mechanisms complement Fan et al. (2007) and Megginson & Netter (2001); ABS 3 — use as supporting/conceptual reference alongside ABS 4* empirical anchors

## [2026-05-27 00:00] ingest | Bortolotti & Faccio (2009) — Government Control of Privatized Firms, RFS (Primary PDF)

- Source: [[2026-05-27-bortolotti-faccio-2009-government-control-privatized-firms-rfs]]
- Input file: `research/wiki/saic-motor/input/pdf/Government Control of Privatized Firms.pdf` (33 pages, journal pp. 2907–2939)
- Wiki folder: `research/wiki/saic-motor/`
- New source page: [[2026-05-27-bortolotti-faccio-2009-government-control-privatized-firms-rfs]]
- Updated concept pages: [[state-owned-enterprise]] (cross-country incomplete privatization evidence added; Bortolotti & Faccio entry added to academic sources table)
- Updated: `research/wiki/saic-motor/index.md`, [[log]]
- Contradictions flagged: none
- Key findings ingested: 62.4% of "privatized" firms still government-controlled at end-2000 (p.2908, Abstract); civil-law pyramid vs. common-law golden share split (p.2909, Table 4 Panel C); 52.18% actual vs. 37.14% apparent government voting rights — prior studies understated (p.2932); political economy (proportional electoral systems, centralized authority) drives retention (p.2935); "best-foot-forward" selection (p.2932, Table 5); DOI confirmed as 10.1093/rfs/hhn077
- Research purpose: Bachelor seminar paper — ABS 4* cross-country baseline showing SAIC's SASAC pyramid is the canonical civil-law instrument of incomplete privatization; complements Fan et al. (governance consequences) and Jia et al. (innovation misallocation) to show why government control persists despite poor performance

## [2026-06-03 00:00] ingest | BYD — 9 akademische Paper-Quellen (Web Research, 7-Winkel-Parallelsuche)

- Wiki folder: `research/wiki/byd/`
- New source pages (9):
  - [[2026-06-03-williamson-1971-vertical-integration-aer]] — Williamson (1971), AER: Transaction Cost Theory, Grundanker Make-or-Buy
  - [[2026-06-03-harrigan-1985-vertical-integration-amj]] — Harrigan (1985), AMJ: VI-Framework, Umweltunsicherheit und Synergien
  - [[2026-06-03-wang-zhao-ruet-2022-specialised-vi-ijatm]] — Wang, Zhao & Ruet (2022), IJATM: Specialised VI bei chinesischen EV-Batteriefirmen
  - [[2026-06-03-hao-hao-2026-byd-competition-ijio]] — Hao & Hao (2026), IJIO: BYD-Marktevolution, VI-Margenresilienz
  - [[2026-06-03-vi-social-welfare-china-ev-2026-cer]] — VI & Social Welfare China EV (2026), CER: VI senkt EV-Preise
  - [[2026-06-03-he-2025-byd-vi-strategy-ajmss]] — He (2025), AJMSS: Blade Battery CAR +12,41% (Datenpunkt)
  - [[2026-06-03-zhang-et-al-2025-founder-control-innovation-cer]] — Zhang et al. (2025), CER: Founder-Control → Durchbruchsinnovation
  - [[2026-06-03-xia-2008-founder-control-firm-value-cjar]] — Xia (2008), CJAR: Founder-Control → positiver Firm-Value-Effekt
  - [[2026-06-03-allen-et-al-2024-chinese-stock-market-jof]] — Allen et al. (2024), JoF (A*): SOE Langfrist-Underperformance
- Updated: `research/wiki/byd/index.md`, [[log]]
- Contradictions flagged: keine
- Research purpose: Seminararbeit — BYD als "vertikal integriertes Privatunternehmen"-Modell; Paper decken alle 4 Dimensionen ab: Governance (Zhang, Xia, Allen), Capability Building (Williamson, Harrigan, Wang et al., Hao & Hao), Financing (He), Long-term Viability (VI Social Welfare, Hao & Hao, Allen)

## [2026-06-03 00:00] ingest | BYD — 3 PDF-Primärquellen vollständig eingelesen und Quellseiten angereichert

- Input files (3 PDFs in `research/wiki/byd/input/pdf/`):
  - `zhang.pdf` → [[2026-06-03-zhang-et-al-2025-founder-control-innovation-cer]] — 25 S., China Economic Review
  - `hao hao.pdf` → [[2026-06-03-hao-hao-2026-byd-competition-ijio]] — 30 S., IJIO
  - `The Journal of Finance - 2024 - ALLEN - ...pdf` → [[2026-06-03-allen-et-al-2024-chinese-stock-market-jof]] — 62 S., Journal of Finance
- Alle drei Quellseiten mit konkreten Befunden, Tabellenwerten und Seitenzahlen angereichert
- Key numbers ingested:
  - Zhang (2025): FC-Koeffizient 0,901*** (Tabelle 3); FC×Blocked = +0,544 (Tabelle 11); FC×Techposition = 0,941*** (Tabelle 14); optimale Amtszeit 12,8 Jahre (Tabelle 15)
  - Hao & Hao (2026): BYD Marktanteil Xi'an 85,2% → 10,6%; Margen 19–23% stabil; Subventionsanteil nur 6,5 pp (8,7%); Preference Shocks 47,9 pp (64,3%) — Tabelle 5
  - Allen (2024): A-Share Underperformance −15,0% p.a.; ROA drop 13% → 6% post-IPO; extern gelistete CN-Firmen on par mit Ausland
- Contradictions flagged: Allen et al. messen A-Share vs. H-Share, nicht direkt Private vs. SOE — indirekte Verbindung über Listing-Selektion dokumentiert
- Updated: [[log]]

## [2026-06-03 00:00] ingest | Masiero et al. (2016) — Electric Vehicles in China: BYD Strategies and Government Subsidies, RAI/Elsevier

- Source: [[2026-06-03-masiero-et-al-2016-byd-subsidies-rai]]
- Origin: Entdeckt in `research/wiki/byd/input/web-search/byd-vertical-integration-2026-05-22/13-government-subsidies-state-relationship.md`
- Wiki folder: `research/wiki/byd/`
- New source page: [[2026-06-03-masiero-et-al-2016-byd-subsidies-rai]]
- Updated: `research/wiki/byd/index.md`, `source-rating/source-rating.md`, [[log]]
- Contradictions flagged: keine — konsistent mit Hao & Hao (2026)
- Key findings: Interview-basierte Primärdaten bei BYD; Subventionen + VI komplementär; DOI: 10.1016/j.rai.2016.01.001; Open Access: https://www.redalyc.org/pdf/973/97344680002.pdf
- Research purpose: Seminararbeit — Financing-Dimension; einziges Paper mit BYD-Interviews zur Subventionsfrage

## [2026-06-03 00:00] ingest | BYD Annual Reports 2024 + 2025 — HKEx Primärquellen (je ~370 S., E&Y-geprüft)

- Input files (2 PDFs in `research/wiki/byd/input/pdf/`):
  - `byd annual report 2024.pdf` (374 S.) → [[2026-06-03-byd-annual-report-2024]]
  - `annual-report-byd-company-2025.pdf` (369 S.) → [[2026-06-03-byd-annual-report-2025]]
- New source pages: beide neu angelegt
- Updated: `research/wiki/byd/index.md` (neue Sektion "Primärquellen"), `source-rating/source-rating.md` (Einträge 11+12, Tabelle, Lücken-Status), [[log]]
- Contradictions flagged: ROE-Conflict aus Web-Research-2026-05-27 gelöst — AR2024-Zahlen ergeben ~21–22 % ROE (nicht 14–15 %)
- Key numbers ingested:
  - AR2024: Umsatz RMB 777,1 Mrd. (+29,0 %); Bruttogewinn RMB 151,1 Mrd. (19 %); Nettogewinn RMB 40,3 Mrd. (5,2 %, +34 %); R&D ~RMB 54,2 Mrd. (+35,7 %); NEV-Absatz 4,27 Mio.; Marktanteil 33,2 %; Gearing −36 %
  - AR2025: Umsatz RMB 804,0 Mrd. (+3,5 %); Bruttogewinn RMB 142,7 Mrd. (18 %); Nettogewinn RMB 32,6 Mrd. (4,1 %); Gearing +25 %; Exporte >1 Mio. (+140 %); US$5,6 Mrd. Kapitalerhöhung März 2025
- Research purpose: Seminararbeit — Pflichtprimärquellen für alle 4 Dimensionen (F insbesondere); Hauptquelle für Finanzzahlen in der Hausarbeit

## [2026-06-03 19:00] ingest | SAIC Motor Annual Report 2025 (FY2025, PwC-geprüft)

- Source: [[2026-06-03-saic-annual-report-2025]]
- Input file: `research/wiki/saic-motor/input/pdf/Saic Motor Annual Report 2025.pdf` (236 S.)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-saic-annual-report-2025]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: NEV-Subventionen = 0 (AR S. 21) vs. EU-VO SAIC 35,3 % — interpretierbar (verschiedene Subventionsebenen), im Source-Callout dokumentiert
- Key numbers: Gewinn +506 % (Basiseffekt); ROE 3,43 %; NEV +33 % (1,64 Mio.); SAIC-GM 37 % Auslastung; VW MEB-Werk 14 %; SASAC 63,71 %; Huawei-Partnerschaft; KPCh-Führungsklausel S. 35

## [2026-06-03 18:00] refactor | Quellenbereinigung SAIC — 4 Quellen entfernt

- Wiki folder: `research/wiki/saic-motor/`
- Gelöscht: [[2026-06-03-yan-gray-1994-bargaining-power-jv-amj]] (redundant mit I&B 1997), [[2026-05-27-bruton-peng-et-al-2015-soe-hybrid-organizations-amp]] (ABS 3, redundant), [[2026-06-03-dewenter-malatesta-2001-soe-private-firms-aer]] (redundant mit MNR 2001), [[2026-05-23-saic-motor-financials-2020-2024]] (in Annual Report enthalten)
- PDFs gelöscht: 3 Dateien
- Updated: `research/wiki/saic-motor/log.md`, `research/wiki/saic-motor/index.md`, `concepts/state-owned-enterprise.md`
- Verbleibend: 15 Quellen

## [2026-06-03 17:30] ingest | IEA Global EV Outlook 2026 + EU-Verordnung 2024/2754 (SAIC-Motor)

- Sources: [[2026-06-03-iea-global-ev-outlook-2026]], [[2026-06-03-eu-regulation-2024-2754-bev-tariffs]]
- Input files: `GlobalEVOutlook2026.pdf` (295 S.), `COMMISSION IMPLEMENTING REGULATION (EU) 2024_2754.pdf` (231 S.)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-iea-global-ev-outlook-2026]], [[2026-06-03-eu-regulation-2024-2754-bev-tariffs]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: keine
- Key numbers: IEA — China NEV ~55 % (2025), >13 Mio. Verkäufe, CN-Hersteller 60 % global, Prognose >90 % bis 2035; EU — SAIC 35,3 % vs. BYD 17,0 % (Art. 1, S. 228); SAIC-VW + SAIC-GM explizit benannt
- Research purpose: IEA = Marktdaten für Long-term Viability; EU-VO = stärkster primärquellenbasierter Beleg für Governance-Dimension (staatliche Subventionsabhängigkeit)

## [2026-06-03 16:00] ingest | Estrin, Hanousek, Kočenda & Svejnar (2009) — Privatization in Transition Economies, JEL

- Source: [[2026-06-03-estrin-et-al-2009-privatization-transition-jel]]
- Input file: `research/wiki/saic-motor/input/pdf/The Effects of Privatization and Ownership in Transition Economies.pdf` (31 pages, JSTOR 27739983)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-estrin-et-al-2009-privatization-transition-jel]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: none
- Key findings: Foreign private ownership → large rapid TFP gains everywhere; domestic private → smaller, delayed, positive in CEE, nil/negative in CIS; China: mostly positive but mixed; state ownership → worst category; selection bias critical (pp. 699–728)
- Research purpose: ABS 4* meta-survey covering transition economies + China; ownership-performance hierarchy explains SAIC-JV (foreign → better) vs. SAIC-own-brand (state → worse); institutional context (China's gradual reform) moderates all effects

## [2026-06-03 15:00] ingest | DeWenter & Malatesta (2001) — State-Owned vs. Privately Owned Firms, AER

- Source: [[2026-06-03-dewenter-malatesta-2001-soe-private-firms-aer]]
- Input file: `research/wiki/saic-motor/input/pdf/State-Owned and Privately Owned Firms_An Empirical Analysis of Profitability, Leverage, and Labor Intensity.pdf` (16 pages, JSTOR 2677913)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-dewenter-malatesta-2001-soe-private-firms-aer]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: none
- Key numbers: ROS government 0.013 vs. private 0.027***; ROE −0.007 vs. 0.089**; EBIT gains front-loaded before privatization; Debt/assets −0.087*** post-priv; Employees/sales −2.83*** post-priv (Tables 1–4)
- Research purpose: ABS 4* quantitative benchmark for Financing/Governance; global SOE underperformance baseline for SAIC comparison; privatization timing puzzle relevant to SAIC reform expectations

## [2026-06-03 14:00] ingest | Yan & Gray (1994) — Bargaining Power, Management Control, U.S.–China JVs, AMJ

- Source: [[2026-06-03-yan-gray-1994-bargaining-power-jv-amj]]
- Input file: `research/wiki/saic-motor/input/pdf/Bargaining Power, Management Control, and Performance in United States-China Joint Ventures.pdf` (41 pages, JSTOR 256796)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-yan-gray-1994-bargaining-power-jv-amj]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: none
- Key findings ingested: Ownership ≠ control (p. 1508); Chinese partner goal = technology acquisition (p. 1512); foreign partner must continuously reinvest to preserve bargaining position (p. 1512); shared control superior in developing-country JVs (p. 1510); Prop. 3–5; obsolescing bargain concept (p. 1483)
- Research purpose: Seminararbeit — empirical U.S.–China JV evidence; pairs with Inkpen & Beamish (1997) as theory + evidence; explains SAIC-VW/-GM power dynamics and 50/50-on-paper, Chinese-influenced-in-practice reality

## [2026-06-03 13:00] ingest | Inkpen & Beamish (1997) — Knowledge, Bargaining Power, and the Instability of IJVs, AMR

- Source: [[2026-06-03-inkpen-beamish-1997-jv-instability-amr]]
- Input file: `research/wiki/saic-motor/input/pdf/Knowledge, Bargaining Power, and the Instability of International Joint Ventures.pdf` (27 pages, JSTOR 259228)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-inkpen-beamish-1997-jv-instability-amr]]
- Updated: `research/wiki/saic-motor/index.md`, `research/wiki/saic-motor/log.md`
- Contradictions flagged: none — complements Bai et al. (knowledge acquisition) and Howell (dependency trap)
- Key findings ingested: Instability definition (p. 182); Prop. 1 (foreign local knowledge → instability); Prop. 7 (attachment moderates); 2×2 instability matrix (Fig. 3, p. 188); NUMMI example; Yan & Gray 1994 China context
- Research purpose: Standard IB theory für Long-term Viability; erklärt SAIC-GM −56.54% strukturell; knowledge parity trigger = 65% → 33% Qualitätslücke (Bai et al.)

## [2026-06-03 12:00] ingest | Bai, Barwick, Cao & Li (2025) — Quid Pro Quo, Knowledge Spillovers, AER

- Source: [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]]
- Input file: `research/wiki/saic-motor/input/pdf/Bai-Barwick-Cao-Li-2025-Quid-Pro-Quo-AER.pdf` (63 pages)
- Wiki folder: `research/wiki/saic-motor/`
- New: [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]], `research/wiki/saic-motor/log.md`
- Updated: [[quid-pro-quo-policy]] (sources, Summary, Key claims), [[saic-motor/index]] (new source entry), `source-rating/source-rating.md` (filename + Warnung aufgelöst)
- Contradictions flagged: Bai et al. (2025) zeigen +8,3 % Qualitätsverbesserung durch JV-Affiliation vs. Howell (2018) zeigt Innovationsunterdrückung durch JV-Renten — beide Seiten markiert, ungelöst
- Research purpose: Stärkstes Q1-Paper für Capability-Building-Dimension; SAIC–VW, SAIC–GM und Roewe explizit als Fallbeispiele; kausalidentifiziert via Within-Modell-Qualitätsdimensionen

## [2026-06-03 12:00] refactor | wiki/shared/ aufgebaut — alle case-übergreifenden Inhalte (Batu)

- Neuer Ordner: `research/wiki/shared/` (7 neue Dateien: index, comparison-data, EU-VO, CAAM, Roland Berger, china-ev-market, governance-models)
- Research purpose: Seminararbeit — geteilte Referenzbasis für Vergleichsteil (Abschnitte 2.4, 3.4, 4.4, 5.4)

## [2026-06-03 00:00] ingest | Jensen & Meckling (1976) + Teece et al. (1997) — BYD-Wiki (Batu)

- Neue Quellseiten: [[2026-06-03-jensen-meckling-1976-agency-costs-jfe]] (JFE A*), [[2026-06-03-teece-pisano-shuen-1997-dynamic-capabilities-smj]] (SMJ A*)
- Wiki folder: `research/wiki/byd/`; BYD-Wiki nun 16 Quellen mit vollständigem Rating

## [2026-05-31 00:00] ingest | Luo & Tung (2007) — Geely wiki

- Source: [[2026-05-31-luo-tung-2007-springboard-jibs]]
- New: [[2026-05-31-luo-tung-2007-springboard-jibs]]
- Updated: [[index]] (Geely)
- Contradictions flagged: none
- Note: bibliographic details provided by user; full text not ingested. Cited in Geely draft sections 2.3 as theoretical anchor for springboard M&A strategy.

## [2026-06-03 21:00] query | Was hat es mit "Quid Pro Quo" im SAIC-Motor-Kontext auf sich?
- Pages consulted: [[quid-pro-quo-policy]], [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]], [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]], [[2026-05-27-howell-2018-jv-technology-adoption-backfired]], [[2026-06-03-inkpen-beamish-1997-jv-instability-amr]], [[saic-motor/index]]
- Coverage: Complete
- Gaps: Bai et al. (2025) Datensample endet 2014 — keine Aussage zur EV-Technologielücke (Batterien, Software); kein eigenes Wiki-Paper zu SAICs post-2022 JV-Renegotiation-Optionen

## [2026-06-03 22:00] query | Was sind SOEs (State-Owned Enterprises)?
- Pages consulted: [[state-owned-enterprise]], [[saic-motor]], [[shanghai-sasac]], [[2026-05-27-shleifer-vishny-1994-politicians-and-firms-qje]], [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]], [[2026-05-27-megginson-netter-2001-from-state-to-market-jel]], [[2026-05-27-jia-huang-zhang-2019-public-governance-soe-innovation-amj]], [[2026-05-27-bortolotti-faccio-2009-government-control-privatized-firms-rfs]], [[2026-06-03-estrin-et-al-2009-privatization-transition-jel]]
- Coverage: Complete
- Gaps: none
