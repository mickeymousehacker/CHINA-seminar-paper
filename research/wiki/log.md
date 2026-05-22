# Wiki Log

Append-only chronological record of every wiki operation. Entry prefix is
`## [YYYY-MM-DD HH:MM] <op> | <title>` so the log stays `grep`-parseable:

```
grep "^## \[" research/wiki/log.md | tail -10
```

Valid `<op>` values: `ingest`, `query`, `lint`, `resolve`, `refactor`.

## [2026-05-22 00:00] ingest | BYD Vertical Integration Strategy — Web Research (19-angle)

- Source: [[2026-05-22-byd-vertical-integration-web-research]]
- Input folder: `research/input/web-search/byd-vertical-integration-2026-05-22/` (21 files: index, 19 angle files, urls.md)
- New entities: [[byd-company]], [[wang-chuanfu]], [[lu-xiangyang]], [[berkshire-hathaway]], [[findreams]], [[byd-semiconductor]], [[tesla]], [[catl]]
- New concepts: [[vertical-integration]], [[blade-battery]], [[lfp-chemistry]], [[igbt-semiconductor]], [[founder-led-governance]], [[china-ev-governance-models]], [[dilink-xuanji-architecture]], [[ev-price-war]]
- Updated: [[index]], [[overview]], [[log]]
- Contradictions flagged: none (apparent gross margin discrepancy between 2024 full-year 19.4% and Q2 2025 10–15% is resolved as time-period difference, not a conflict)
- Research purpose: Hausarbeit comparing four Chinese automotive governance/financing models; BYD as the "vertically integrated private" archetype
