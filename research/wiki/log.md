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
