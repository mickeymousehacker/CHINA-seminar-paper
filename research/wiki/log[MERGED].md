# Wiki Log — Konsolidiertes Gesamt-Log

Zentrales, chronologisches Gesamt-Log **aller** Wiki-Operationen über alle drei
Cases (BYD, Geely, SAIC Motor) und den Shared-Ordner. Zusammengeführt aus:
`wiki/log.md`, `wiki/byd/log.md`, `wiki/geely/log.md`, `wiki/saic-motor/log.md`
sowie lückenfüllenden Einträgen, die zuvor nur in den `index.md`-Dateien
dokumentiert waren (markiert mit _↳ rekonstruiert aus index.md_).

Die firmenspezifischen Logs (`byd/`, `geely/`, `saic-motor/`) bleiben bestehen —
sie dienen weiterhin dazu, Git-Merge-Konflikte bei paralleler Gruppenarbeit zu
vermeiden. Dieses Datei ist die zusammengeführte Gesamtsicht.

Format: `## [YYYY-MM-DD HH:MM] <op> | <Titel>` (grep-bar via `grep "^## \[" log.md`).
Gültige `<op>`: `ingest`, `query`, `lint`, `resolve`, `refactor`, `verify`.
Herkunfts-Tag pro Eintrag: `[central]` `[byd]` `[geely]` `[saic]` `[shared]`.

---

## [2026-05-22 00:00] ingest | BYD Vertical Integration Strategy — Web Research (19-angle)  [central]
- Source: [[2026-05-22-byd-vertical-integration-web-research]]
- Input folder: `research/input/web-search/byd-vertical-integration-2026-05-22/` (21 files: index, 19 angle files, urls.md)
- New entities: [[byd-company]], [[wang-chuanfu]], [[lu-xiangyang]], [[berkshire-hathaway]], [[findreams]], [[byd-semiconductor]], [[tesla]], [[catl]]
- New concepts: [[vertical-integration]], [[blade-battery]], [[lfp-chemistry]], [[igbt-semiconductor]], [[founder-led-governance]], [[china-ev-governance-models]], [[dilink-xuanji-architecture]], [[ev-price-war]]
- Updated: [[index]], [[overview]], [[log]]
- Contradictions flagged: none (2024 full-year GM 19,4 % vs. Q2 2025 10–15 % ist Zeitraum-, kein Konflikt)
- Research purpose: Hausarbeit — BYD als "vertikal integriertes Privatunternehmen"-Archetyp

## [2026-05-22 00:00] ingest | Geely M&A Strategy — Web Research (7-angle)  [geely]
- Source: [[2026-05-22-geely-ma-strategy-web-research]]
- Input folder: `research/wiki/geely/input/web-search/geely-ma-strategy-2026-05-22/` (Volvo-Deal, M&A-Portfolio, Technologietransfer-Literatur, Finanzperformance, Volvo-IPO/Smart-JV, Komparatoren SAIC/BYD/NIO)
- Research purpose: Hausarbeit — Geely als "M&A-getriebenes Privatunternehmen"-Archetyp; Vergleich gegen SAIC/BYD/NIO
- ↳ rekonstruiert aus `geely/index.md` (kein ursprünglicher Log-Eintrag; created: 2026-05-22)

## [2026-05-23 00:00] ingest | SAIC Motor Annual Report 2024 (Official Primary Source)  [saic]
- Source: [[2026-05-23-saic-annual-report-2024]]
- Input file: `research/input/pdf/SAIC-Motor-Annual-Report-2024.pdf` (245 pages, PwC-audited)
- New entities: [[saic-motor]], [[saic-gm]], [[saic-volkswagen]], [[shanghai-sasac]]
- New concepts: [[joint-venture-model]], [[state-owned-enterprise]]
- New index: `research/wiki/saic-motor/index.md`
- Contradictions resolved: EPS 2024 = RMB 0,145 (nicht 0,71 — falsche Aktienzahl); Nettogewinn RMB 1,666 Mrd. (nicht 16,66 Mrd. — 亿-Einheit)
- Contradictions flagged: none
- Research purpose: SAIC als "JV-zentrischer SOE"-Archetyp

## [2026-05-25 00:00] ingest | SAIC Motor — Academic & Industry Sources (Web Research, 21-query)  [saic]
- Source: [[2026-05-25-saic-motor-sources-web-research]]
- Input folder: `research/input/web-search/saic-motor-sources-2026-05-25/` (5 files)
- New concept pages: [[quid-pro-quo-policy]], [[jv-instability]]
- Updated: [[saic-motor]] (EU-Zoll korrigiert, 2023-Daten), [[joint-venture-model]], [[state-owned-enterprise]]
- Updated indexes: `saic-motor/index.md`, `wiki/index.md`
- Contradictions resolved: EU-Antisubventionszoll [[saic-motor]] 36,3 % (vorläufig) → 35,3 % (final, EU-VO 2024/2754)
- Research purpose: SAIC-Quellenliste mit ABS/VHB-Rankings

## [2026-05-26 00:00] ingest | Geely — 7 akademische Paper-Quellen (M&A / Technologietransfer)  [geely]
- New source pages (7):
  - [[balcet-wang-richet-2012]] — IJATM 12(4): Geely als Latecomer, asset-seeking M&A
  - [[alvstam-ivarsson-2014]] — Palgrave: "hybrid" EMNE, Volvo-Übernahme als Paradigmenfall
  - [[alvstam-ivarsson-2020]] — Elgar: Technologietransfer-Mechanismen Geely-Volvo (CMA-Plattform, Greenfield)
  - [[yakob-nakamura-strom-2018]] — Technovation 70–71: Geely-Volvo als strategic asset-creation, nicht bloß asset-seeking
  - [[meng-wang-2021]] — IBR 14(7): Post-Acquisition-Performance langfristig verbessert; M&A-Bewertungsframework
  - [[konda-slepnikov-jin-2022]] — AJTI 31(3): "from transaction to co-creation"; Patentkonvergenz belegt Wissensintegration
  - [[zheng-noorderhaven-du-2022]] — JWB 57(3): Vier-Stufen-Integrationsmodell (distancing → balancing → building → diversifying)
- Research purpose: theoretische + empirische Basis für Geelys M&A-Modell (Capability Building, Technologietransfer)
- ↳ rekonstruiert aus `geely/index.md` (kein ursprünglicher Log-Eintrag; created: 2026-05-26, committed: 2026-05-28)

## [2026-05-27 00:00] ingest | BYD Seminararbeit — Tiefenrecherche alle 4 Dimensionen  [byd]
- Source: [[2026-05-27-byd-seminararbeit-research]]
- Input folder: `research/wiki/byd/input/web-search/byd-seminararbeit-2026-05-27/` (Governance, Financing, Capability Building, Long-term Viability)
- Research purpose: Zweite, dimensionsstrukturierte BYD-Webrecherche als Schreibgrundlage
- Bekannte offene Punkte: ROE-Konflikt (~30 %+ vs. ~14–15 %) — später via AR2024 gelöst (~21–22 %); Stub ohne Entities/Concepts-Sektionen (Lint 2026-06-19)
- ↳ rekonstruiert aus `byd/index.md` (kein ursprünglicher Log-Eintrag; created: 2026-05-27)

## [2026-05-27 00:00] ingest | Holmes, McGrattan & Prescott (2015) — Quid Pro Quo, RES  [saic]
- Source: [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]]
- Input file: `saic-motor/input/pdf/Quid Pro Quo_ Technology Capital Transfers for Market Access in China.pdf` (40 S., pp. 1154–1193)
- Updated: [[quid-pro-quo-policy]]
- Key findings: China ~5 % Wohlfahrtsgewinn, Industrieländer −0,3–0,5 %; Patentrechte China-only (p.1158); 1994er 50 %-Cap (p.1161); DOI 10.1093/restud/rdv008
- Research purpose: quantitativer Makro-Rahmen für SAICs QPQ-JV-Modell

## [2026-05-27 00:00] ingest | Howell (2018) — JVs & Technology Adoption: A Policy That Backfired, Research Policy  [saic]
- Source: [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]
- Input file: `saic-motor/input/pdf/Joint ventures and technology adoption...pdf` (14 S., pp. 1448–1462)
- Updated: [[quid-pro-quo-policy]] (Kannibalisierung, "like opium"-Zitat)
- Key findings: −11 % Drehmoment / −15 % Preis in JV-Firmen (p.1457, Tab.2); Exporte durch Nicht-JV-Firmen (p.1457); Kannibalisierung > Effizienzeffekt (p.1458); DOI 10.1016/j.respol.2018.04.021
- Research purpose: Gegenpunkt — JV-Renten senkten SAICs Innovationsanreiz

## [2026-05-27 00:00] ingest | Fan, Wong & Zhang (2007) — Politically Connected CEOs, JFE  [saic]
- Source: [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]]
- Input file: `saic-motor/input/pdf/Politically connected CEOs...pdf` (28 S., pp. 330–357)
- Updated: [[state-owned-enterprise]] ("grabbing hand")
- Key findings: 27 % politisch verbundene CEOs (Tab.1); −15 % 3-J-CAR (Tab.3); −21 % Umsatz-/−24 % Gewinnwachstum (Tab.4); Boards +17pp Bürokraten (Tab.10); DOI 10.1016/j.jfineco.2006.03.008
- Research purpose: ABS 4* Anker Governance-Dimension

## [2026-05-27 00:00] ingest | Jia, Huang & Zhang (2019) — Public Governance & Firm Innovation, AMJ  [saic]
- Source: [[2026-05-27-jia-huang-zhang-2019-public-governance-soe-innovation-amj]]
- Input file: `saic-motor/input/pdf/Public Governance, Corporate Governance...pdf` (28 S., pp. 220–247)
- Updated: [[state-owned-enterprise]] (Quantität-vor-Novität)
- Key findings: Board-Alignment → 30,40 % vs. 11,52 % neuartige Patente (Model 2-6); State-Monitoring → 15,69 % vs. 9,89 %; DOI 10.5465/amj.2016.0543
- Research purpose: Mechanismus Governance → Capability-Gap

## [2026-05-27 00:00] ingest | Megginson & Netter (2001) — From State to Market, JEL  [saic]
- Source: [[2026-05-27-megginson-netter-2001-from-state-to-market-jel]]
- Input file: `saic-motor/input/pdf/From State to Market...pdf` (70 S., pp. 321–389)
- Updated: [[state-owned-enterprise]] (MNR-Benchmarks)
- Key findings: über 211 Firmen +3,96pp Profitabilität, +19,14 % Effizienz, +83,21 % Output, −4,69pp Leverage (pp.354–356); Soft Budget Constraint; JSTOR 2698243
- Research purpose: ABS 4* empirischer Konsens SOE-Nachteil

## [2026-05-27 00:00] ingest | Shleifer & Vishny (1994) — Politicians and Firms, QJE  [saic]
- Source: [[2026-05-27-shleifer-vishny-1994-politicians-and-firms-qje]]
- Input file: `saic-motor/input/pdf/politicians and firms.pdf` (31 S., pp. 995–1025; gescannt, via pymupdf)
- Updated: [[state-owned-enterprise]] (theoretisches Fundament)
- Key findings: Prop.1 Kontrollrechte entscheiden (p.1005); Prop.5 Manager-Kontrolle → niedrigeres L, höheres T (p.1011); Prop.13 (p.1020); JSTOR 2118354
- Research purpose: ABS 4* Fundament aller SOE-Governance-Aussagen

## [2026-05-27 00:00] ingest | Bruton, Peng et al. (2015) — SOEs as Hybrid Organizations, AMP  [saic]
- Source: [[2026-05-27-bruton-peng-et-al-2015-soe-hybrid-organizations-amp]]  ⚠️ **später gelöscht** (Refactor 2026-06-03 18:00 — ABS 3, redundant)
- Key findings: 3×3 Ownership×Control-Matrix (Tab.3); SASAC als High-Control-Instrument (p.100); SAIC = Zelle 3; DOI 10.5465/amp.2013.0069

## [2026-05-27 00:00] ingest | Bortolotti & Faccio (2009) — Government Control of Privatized Firms, RFS  [saic]
- Source: [[2026-05-27-bortolotti-faccio-2009-government-control-privatized-firms-rfs]]
- Input file: `saic-motor/input/pdf/Government Control of Privatized Firms.pdf` (33 S., pp. 2907–2939)
- Updated: [[state-owned-enterprise]] (cross-country incomplete privatization)
- Key findings: 62,4 % "privatisierter" Firmen weiter staatlich kontrolliert (Abstract); Civil-Law-Pyramide vs. Common-Law-Golden-Share (Tab.4-C); 52,18 % tatsächliche Stimmrechte (p.2932); DOI 10.1093/rfs/hhn077
- Research purpose: ABS 4* Baseline — SAICs SASAC-Pyramide als kanonisches Civil-Law-Instrument

## [2026-05-31 00:00] ingest | Luo & Tung (2007) — Springboard Perspective, JIBS  [geely]
- Source: [[2026-05-31-luo-tung-2007-springboard-jibs]]
- Updated: [[index]] (Geely)
- Contradictions flagged: none
- Note: bibliografische Angaben vom Nutzer; Volltext nicht ingestet. Zitiert in Geely-Draft §2.3 als theoretischer Anker für Springboard-M&A
- Research purpose: JIBS 38(4) — EMNEs nutzen Cross-Border-Akquisitionen gegen Latecomer-Nachteile

## [2026-06-03 12:00] ingest | Bai, Barwick, Cao & Li (2025) — Quid Pro Quo, Knowledge Spillovers, AER  [saic]
- Source: [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]]
- Input file: `saic-motor/input/pdf/Bai-Barwick-Cao-Li-2025-Quid-Pro-Quo-AER.pdf` (63 S.)
- Updated: [[quid-pro-quo-policy]], [[saic-motor/index]], `source-rating/source-rating.md`
- Contradictions flagged: Bai et al. +8,3 % Qualität durch JV-Affiliation vs. Howell (2018) Innovationsunterdrückung — **beide markiert, ungelöst**
- Research purpose: stärkstes Q1-Paper Capability Building; SAIC–VW, SAIC–GM, Roewe explizit

## [2026-06-03 12:00] refactor | wiki/shared/ aufgebaut — case-übergreifende Inhalte (Batu)  [shared]
- Neuer Ordner: `research/wiki/shared/` (7 Dateien: [[index]], [[comparison-data]], [[eu-regulation-2024-2754]], [[caam-nev-market-data-2024]], [[roland-berger-automotive-2040]], [[china-ev-market]], [[governance-models]])
- Research purpose: geteilte Referenzbasis für den Vergleichsteil (Abschnitte 2.4, 3.4, 4.4, 5.4)

## [2026-06-03 13:00] ingest | Inkpen & Beamish (1997) — JV Instability, AMR  [saic]
- Source: [[2026-06-03-inkpen-beamish-1997-jv-instability-amr]]
- Input file: `saic-motor/input/pdf/Knowledge, Bargaining Power...pdf` (27 S., JSTOR 259228)
- Key findings: Instabilitätsdefinition (p.182); Prop.1, Prop.7; 2×2-Matrix (Fig.3, p.188); NUMMI
- Research purpose: Standard-IB-Theorie Long-term Viability; erklärt SAIC-GM −56,54 % strukturell

## [2026-06-03 14:00] ingest | Yan & Gray (1994) — Bargaining Power, U.S.–China JVs, AMJ  [saic]
- Source: [[2026-06-03-yan-gray-1994-bargaining-power-jv-amj]]  ⚠️ **später gelöscht** (Refactor 18:00 — redundant mit Inkpen & Beamish 1997)
- Key findings: Ownership ≠ Control (p.1508); chinesischer Partner = Technologieerwerb (p.1512); Shared Control überlegen (p.1510)

## [2026-06-03 15:00] ingest | DeWenter & Malatesta (2001) — SOE vs. Private Firms, AER  [saic]
- Source: [[2026-06-03-dewenter-malatesta-2001-soe-private-firms-aer]]  ⚠️ **später gelöscht** (Refactor 18:00 — redundant mit Megginson & Netter 2001)
- Key numbers: ROS Staat 0,013 vs. privat 0,027; ROE −0,007 vs. 0,089; Leverage −0,087*** post-priv; Labor −2,83*** post-priv (Tab.4)

## [2026-06-03 16:00] ingest | Estrin, Hanousek, Kočenda & Svejnar (2009) — Privatization in Transition Economies, JEL  [saic]
- Source: [[2026-06-03-estrin-et-al-2009-privatization-transition-jel]]
- Input file: `saic-motor/input/pdf/The Effects of Privatization...pdf` (31 S., JSTOR 27739983)
- Key findings: Foreign private → große TFP-Gewinne; domestic private → kleiner/verzögert; State → schlechteste Kategorie; China gemischt (pp.723–724)
- Research purpose: ABS 4* Meta-Survey; erklärt SAIC-JV (foreign) vs. SAIC-eigen (state) strukturell

## [2026-06-03 17:30] ingest | IEA Global EV Outlook 2026 + EU-Verordnung 2024/2754  [saic]
- Sources: [[2026-06-03-iea-global-ev-outlook-2026]], [[2026-06-03-eu-regulation-2024-2754-bev-tariffs]]
- Input files: `GlobalEVOutlook2026.pdf` (295 S.), `COMMISSION IMPLEMENTING REGULATION (EU) 2024_2754.pdf` (231 S.)
- Key numbers: IEA — China NEV ~55 % (2025), >13 Mio. Verkäufe, CN-Hersteller 60 % global, >90 % Prognose 2035; EU — SAIC 35,3 % vs. BYD 17,0 % (Art.1, S.228)
- Research purpose: Marktdaten Long-term Viability (IEA); primärquellenbasierter Subventionsbeleg Governance (EU-VO)

## [2026-06-03 18:00] refactor | Quellenbereinigung SAIC — 4 Quellen entfernt  [saic]
- Gelöscht: [[2026-06-03-yan-gray-1994-bargaining-power-jv-amj]], [[2026-05-27-bruton-peng-et-al-2015-soe-hybrid-organizations-amp]], [[2026-06-03-dewenter-malatesta-2001-soe-private-firms-aer]], [[2026-05-23-saic-motor-financials-2020-2024]]
- Gelöschte PDFs: 3 Dateien
- Updated: [[state-owned-enterprise]], [[saic-motor/index]]
- Verbleibend: 15 Quellen

## [2026-06-03 19:00] ingest | SAIC Motor Annual Report 2025 (FY2025, PwC-geprüft)  [saic]
- Source: [[2026-06-03-saic-annual-report-2025]]
- Input file: `saic-motor/input/pdf/Saic Motor Annual Report 2025.pdf` (236 S.)
- Contradictions flagged: NEV-Subventionen = 0 (AR S.21) vs. EU-VO 35,3 % — interpretierbar, im Callout dokumentiert
- Key numbers: Nettogewinn RMB 10,11 Mrd. (+506 %, Basiseffekt); ROE 3,43 %; NEV 1,643 Mio. (+33 %); SAIC-GM 37 %, SAIC-VW 55 %, VW MEB-Werk 14 %; SASAC 63,71 %; KPCh-Klausel S.35; Huawei SHANGJIE

## [2026-06-03 00:00] ingest | BYD — 9 akademische Paper-Quellen (Web Research, 7-Winkel-Parallelsuche)  [central]
- New source pages (9): [[2026-06-03-williamson-1971-vertical-integration-aer]], [[2026-06-03-harrigan-1985-vertical-integration-amj]], [[2026-06-03-wang-zhao-ruet-2022-specialised-vi-ijatm]], [[2026-06-03-hao-hao-2026-byd-competition-ijio]], [[2026-06-03-vi-social-welfare-china-ev-2026-cer]], [[2026-06-03-he-2025-byd-vi-strategy-ajmss]], [[2026-06-03-zhang-et-al-2025-founder-control-innovation-cer]], [[2026-06-03-xia-2008-founder-control-firm-value-cjar]], [[2026-06-03-allen-et-al-2024-chinese-stock-market-jof]]
- Updated: `byd/index.md`, [[log]]
- Contradictions flagged: keine
- Research purpose: alle 4 Dimensionen — Governance (Zhang, Xia, Allen), Capability (Williamson, Harrigan, Wang, Hao), Financing (He), Viability (VI Social Welfare, Hao, Allen)

## [2026-06-03 00:00] ingest | BYD — 3 PDF-Primärquellen vollständig eingelesen  [central]
- Input files: `zhang.pdf` → [[2026-06-03-zhang-et-al-2025-founder-control-innovation-cer]]; `hao hao.pdf` → [[2026-06-03-hao-hao-2026-byd-competition-ijio]]; `The Journal of Finance - 2024 - ALLEN...pdf` → [[2026-06-03-allen-et-al-2024-chinese-stock-market-jof]]
- Key numbers: Zhang — FC-Koeff. 0,901*** (Tab.3), optimale Amtszeit 12,8 J. (Tab.15); Hao & Hao — Marktanteil Xi'an 85,2 % → 10,6 %, Margen 19–23 % stabil (Tab.5); Allen — A-Share Underperformance −15,0 % p.a., ROA 13 % → 6 % post-IPO
- Contradictions flagged: Allen misst A-Share vs. H-Share (nicht direkt Private vs. SOE) — indirekte Verbindung dokumentiert

## [2026-06-03 00:00] ingest | Masiero et al. (2016) — EVs in China: BYD Strategies & Government Subsidies, RAI  [central]
- Source: [[2026-06-03-masiero-et-al-2016-byd-subsidies-rai]]
- Origin: entdeckt in `byd/input/web-search/.../13-government-subsidies-state-relationship.md`
- Updated: `byd/index.md`, `source-rating/source-rating.md`
- Key findings: Interview-Primärdaten bei BYD; Subventionen + VI komplementär; DOI 10.1016/j.rai.2016.01.001
- Research purpose: Financing-Dimension; einziges Paper mit BYD-Interviews zur Subventionsfrage

## [2026-06-03 00:00] ingest | BYD Annual Reports 2024 + 2025 — HKEx-Primärquellen (E&Y-geprüft)  [central]
- Input files: `byd annual report 2024.pdf` (374 S.) → [[2026-06-03-byd-annual-report-2024]]; `annual-report-byd-company-2025.pdf` (369 S.) → [[2026-06-03-byd-annual-report-2025]]
- Updated: `byd/index.md`, `source-rating/source-rating.md`
- Contradictions flagged: ROE-Konflikt aus Web-Research-2026-05-27 gelöst — AR2024 ergibt ~21–22 % (nicht 14–15 %)
- Key numbers: AR2024 — Umsatz RMB 777,1 Mrd. (+29 %), R&D ~54,2 Mrd. (+35,7 %), NEV 4,27 Mio., Marktanteil 33,2 %; AR2025 — Umsatz RMB 804,0 Mrd. (+3,5 %), Nettogewinn 32,6 Mrd. (4,1 %), Exporte >1 Mio. (+140 %), US$5,6 Mrd. Kapitalerhöhung März 2025
- Research purpose: Pflichtprimärquellen alle 4 Dimensionen; Hauptquelle Finanzzahlen

## [2026-06-03 00:00] ingest | Jensen & Meckling (1976) + Teece et al. (1997) — BYD (Batu)  [central]
- Neue Quellseiten: [[2026-06-03-jensen-meckling-1976-agency-costs-jfe]] (JFE A*), [[2026-06-03-teece-pisano-shuen-1997-dynamic-capabilities-smj]] (SMJ A*)
- BYD-Wiki nun 16 Quellen mit vollständigem Rating

## [2026-06-03 21:00] query | Was hat es mit "Quid Pro Quo" im SAIC-Motor-Kontext auf sich?  [saic]
- Pages consulted: [[quid-pro-quo-policy]], [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]], [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]], [[2026-05-27-howell-2018-jv-technology-adoption-backfired]], [[2026-06-03-inkpen-beamish-1997-jv-instability-amr]]
- Coverage: Complete
- Gaps: Bai et al. Datensample endet 2014 — keine EV-Technologielücke; kein Paper zu post-2022 JV-Renegotiation

## [2026-06-03 22:00] query | Was sind SOEs (State-Owned Enterprises)?  [saic]
- Pages consulted: [[state-owned-enterprise]], [[saic-motor]], [[shanghai-sasac]], [[2026-05-27-shleifer-vishny-1994-politicians-and-firms-qje]], [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]], [[2026-05-27-megginson-netter-2001-from-state-to-market-jel]], [[2026-05-27-jia-huang-zhang-2019-public-governance-soe-innovation-amj]], [[2026-05-27-bortolotti-faccio-2009-government-control-privatized-firms-rfs]], [[2026-06-03-estrin-et-al-2009-privatization-transition-jel]]
- Coverage: Complete | Gaps: none

## [2026-06-10 12:00] verify | Claim: "Formalized in the 1994 Automotive Industry Development Policy"  [saic]
- Pages consulted: [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]], [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]], [[quid-pro-quo-policy]]
- Result: verifiziert. Bai et al. (2025, p.7) = direktester Beleg für Vollnamen + 1994 (State Council); Holmes et al. (2015, p.1161) belegt Bestimmungen (50 %-Cap), aber ohne Vollnamen
- Empfehlung: beide zitieren | Coverage: Complete | Gaps: none

## [2026-06-11 00:00] ingest | Batch-Ingest 13 neue Quellen (BYD)  [central]
- Neue Sources: [[2026-06-11-klein-crawford-alchian-1978-vi-jle]], [[2026-06-11-grossman-hart-1986-ownership-jpe]], [[2026-06-11-sun-yang-2025-byd-financial-leverage-fer]], [[2026-06-11-wu-2025-vi-competitiveness-byd-icmred]], [[2026-06-11-jiang-xu-2023-nev-policy-subsidies-ep]], [[2026-06-11-qin-xiong-2024-nev-policy-effectiveness-energy]], [[2026-06-11-tian-wang-zhu-2024-china-nev-industry-ger]], [[2026-06-11-hove-2026-china-nev-update-oies]], [[2026-06-11-xu-wang-1999-ownership-governance-cer]], [[2026-06-11-feng-et-al-2022-rd-collaboration-jtt]], [[2026-06-11-yuan-braso-2025-china-auto-metamorphosis-bh]], [[2026-06-11-whitfield-wuttke-2026-byd-catl-leapfrog-peg]], [[2026-06-11-yang-yuan-xing-2023-china-nev-fiscal-tax-erei]]
- Updated: [[byd/index]] | Contradictions flagged: none

## [2026-06-11 00:00] query | Holmes, McGrattan & Prescott (2015) — zentrale Ergebnisse  [saic]
- Pages consulted: [[2026-05-27-holmes-mcgrattan-prescott-2015-quid-pro-quo-res]], [[quid-pro-quo-policy]], [[sources/source-rating/source-rating]]
- Coverage: Complete | Gaps: none

## [2026-06-12 00:00] query | What are China's 2009 Phase 2 fuel economy standards?  [saic]
- Pages consulted: [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]
- Coverage: Complete | Gaps: none

## [2026-06-12 00:00] query | what is a quasi-experiment (Howell 2018 context)  [saic]
- Pages consulted: [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]
- Coverage: Complete | Gaps: none

## [2026-06-12 00:00] query | What is J.D. Power's Initial Quality Study (IQS)?  [saic]
- Pages consulted: [[2026-06-03-bai-barwick-cao-li-2025-quid-pro-quo-aer]], [[index]]
- Coverage: Partial — IQS nur als Datenquelle in Bai et al. Notes, keine eigene Seite
- Gaps: keine dedizierte Wiki-Seite zu J.D. Power IQS

## [2026-06-12 11:00] lint  [saic]
- Report: [[_lint/2026-06-12-1100]]
- Scope: `research/wiki/saic-motor/` (full) + globaler index/log-Cross-Check
- Orphans: 0 | Stubs: 2 ([[jv-instability]], source-rating.md)
- Conflicts: 2 (aktiv: Bai vs. Howell; kosmetisch: saic-motor EU-Zoll-Callout)
- Missing xrefs behoben: [[general-motors]], [[volkswagen-group]], [[byd-company]] Stubs; toter [[financials-2020-2024]]-Link ersetzt
- Frontmatter: [[shanghai-sasac]] 63,27 % → 63,71 %; R&D-Diskrepanz geflaggt; KPCh-Klausel + Aufsichtsrats-Abschaffung ergänzt

## [2026-06-14 00:00] query | Was ist eine "two-tier state ownership structure" (SAIC Motor)?  [saic]
- Pages consulted: [[shanghai-sasac]], [[saic-motor]], [[state-owned-enterprise]]
- Coverage: Complete | Gaps: none

## [2026-06-19 00:00] ingest | ssrn-5369927 — Hao & Hao Preprint (Duplikat erkannt)  [byd]
- Source attempted: `byd/input/pdf/ssrn-5369927.pdf`
- Identifiziert via CrossRef: Yu Hao & Yiran Hao, SSRN-Preprint 2025-07-29, DOI 10.2139/ssrn.5369927
- Duplikat von: [[2026-06-03-hao-hao-2026-byd-competition-ijio]] (publizierte IJIO-Version)
- Action: keine neue Source-Seite; bestehende Seite um SSRN-Metadaten ergänzt
- Contradictions flagged: none

## [2026-06-19 00:00] ingest | Geely — Annual Reports 2023 + 2024  [geely]
- New source pages: [[2026-06-19-geely-annual-report-2023]] (FY2023, publ. April 2024: Umsatz USD 25,32 Mrd., Galaxy-Launch, Geometry-Konsolidierung, Proton-Integration, ZEEKR 118.685 Auslieferungen), [[2026-06-19-geely-annual-report-2024]] (FY2024, publ. April 2025: Umsatz CN¥ 240,2 Mrd., Gewinn RMB 16,63 Mrd. +213 %, 2,17 Mio. Fahrzeuge, ZEEKR NYSE-IPO, Lynk & Co-Restrukturierung)
- Updated: [[geely-automobile-holdings]], [[zeekr]], [[lynk-co]], [[index]]
- ↳ rekonstruiert aus `geely/index.md` (in geely/log.md kein dedizierter Ingest-Eintrag; created: 2026-06-19; Attribution bestätigt via Resolve-Eintrag 15:30)

## [2026-06-19 00:00] ingest | Geely Automobile Holdings — 2025 Annual Report (zunächst FY2024)  [geely]
- Source: [[2026-06-19-geely-annual-report-2025]]
- Updated: [[geely-automobile-holdings]], [[zhejiang-geely-holding-group]], [[zeekr]], [[polestar]], [[lynk-co]], [[lotus-cars]], [[index]]
- Contradictions flagged: 1 (ZGH + Proper Glory 76 % Web vs. 66,14 % Annual Report — Callout)
- Note: PDF (7,2 MB) nicht maschinenlesbar; Claims aus bestehenden Web-Research-Inputs. **Enthielt zunächst FY2024-Daten** — korrigiert um 15:30 (siehe Resolve)

## [2026-06-19 12:00] ingest | Geely Automobile Holdings — 2022 Annual Report (FY2022)  [geely]
- Source: [[2026-06-19-geely-annual-report-2022]]
- Updated: [[geely-automobile-holdings]], [[volvo-cars]], [[zeekr]], [[polestar]], [[lynk-co]], [[smart-automobile-jv]], [[index]]
- Contradictions flagged: none
- Note: PDF nicht maschinenlesbar; Claims aus Trainingswissen + Wiki-Inputs, gegen FY2023-AR quergeprüft. Re-Verifizierung mit poppler empfohlen

## [2026-06-19 15:30] resolve | Korrektur [[2026-06-19-geely-annual-report-2025]] — FY2024- durch FY2025-Zahlen ersetzt  [geely]
- Source: [[2026-06-19-geely-annual-report-2025]] (mit FY2025-Daten überschrieben)
- Updated: [[geely-automobile-holdings]], [[zeekr]], [[lynk-co]], [[index]]
- Daten: Core Profit RMB 14,41 Mrd. (+36 %); Umsatz CN¥ 345,2 Mrd.; Produktion 3.024.567; ZEEKR FY2025 224.133; Lynk & Co 350.495; est. Nettogewinn CN¥ 16,49 Mrd.
- Note: früher Ingest (00:00) enthielt falsche FY2024-Daten wegen binär-komprimiertem PDF; alle Entity-Seiten korrekt attribuiert (FY2024 → AR2024, FY2025 → AR2025)

## [2026-06-19 18:00] lint  [geely]
- Report: Full-Wiki-Health-Check, 2026-06-19
- Pages scanned: 40 (12 Sources, 19 Entities, 11 Concepts)
- Orphans: 6 Source-Seiten ohne Inbound-Links | Stubs: 3
- Conflicts (Callouts): 2 | Datenfehler (unmarkiert): 1 (Lynk & Co 29 % vs. 49 %)
- Missing xrefs: ~12 | Unpaged mentions: 3 (Galaxy, Geometry, CATL)
- Index-Drift: 0 | Log-Lücken: 5+ fehlende Ingest-Einträge | Broken link: [[alvstam-ivarsson]]

## [2026-06-19 19:00] ingest | Geely Wiki Overview + Lint-Fixes  [geely]
- New: [[overview]] (`research/wiki/geely/overview.md`)
- Fixed: Lynk & Co 49 % → 29 % auf [[lynk-co]], [[zeekr]], [[geely-automobile-holdings]], [[zhejiang-geely-holding-group]]
- Fixed: Broken link [[alvstam-ivarsson]] → [[alvstam-ivarsson-2014]] + [[alvstam-ivarsson-2020]]
- Updated: [[index]] (Overview-Eintrag) | Contradictions flagged: none (ZGH-Ownership-Callout übernommen)

## [2026-06-19 23:30] ingest | Geely Automobile Holdings — H1 2025 Interim Results  [geely]
- Source: [[2026-06-19-geely-h1-2025-interim-results]]
- Updated: [[geely-automobile-holdings]], [[zeekr]], [[lynk-co]], [[index]]
- Daten (HKEX 14.08.2025): Umsatz RMB 150,3 Mrd. (+27 %); Bruttomarge 16,4 %; Nettogewinn RMB 9,29 Mrd. (−14 %, verzerrt durch H1-2024-Einmaleffekt RMB 7,73 Mrd.); adj. operativer Gewinn RMB 6,66 Mrd. (+102 %); Absatz 1.409.180 (+47 %); NEV 725.151 (+126 %, 51,5 %); R&D RMB 7,33 Mrd. (+21 %); Netto-Cash RMB 38,9 Mrd.; Gearing 22,2 %

## [2026-06-19 00:00] lint  [byd]
- Orphans: 0 (alle Entity/Concept-Seiten aus index.md verlinkt) — ABER: 8 Entity- + 8 Concept-Seiten fehlplatziert in `input/web-search/` statt `entities/`/`concepts/`
- Stubs: 1 ([[2026-05-27-byd-seminararbeit-research]] ohne Entities/Concepts-Sektionen)
- Unresolved conflicts: 1 (ROE ~30 %+ vs. ~14–15 % in seminararbeit-research)
- Missing xrefs: 5 ([[williamson-1971]], [[coase-1937]], [[transaction-cost-economics]], [[hold-up-problem]], [[property-rights-theory]])
- Index-Drift: `source-rating/source-rating.md` unindexiert; 0 dangling
