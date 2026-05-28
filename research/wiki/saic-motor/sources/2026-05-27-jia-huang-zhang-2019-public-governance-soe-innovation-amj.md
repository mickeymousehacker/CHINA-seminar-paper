---
title: "Public Governance, Corporate Governance, and Firm Innovation: An Examination of State-Owned Enterprises"
type: source
created: 2026-05-27
updated: 2026-05-27
sources: []
origin: research/wiki/saic-motor/input/pdf/Public Governance, Corporate Governance, and Firm Innovation An Examination of State-Owned Enterprises.pdf
author: Nan Jia, Kenneth G. Huang, Cyndi Man Zhang
date: 2019
aliases: [Jia Huang Zhang 2019, Jia et al. 2019, SOE innovation governance AMJ, quantity vs novelty patents]
---

# Public Governance, Corporate Governance, and Firm Innovation: An Examination of State-Owned Enterprises

**Jia, Huang & Zhang (2019) show that SOEs under weak corporate governance respond to China's 2006 pro-innovation policy by producing more patents but proportionally fewer *novel* ones — agents optimize for the measurable metric (patent count) at the expense of genuinely novel innovation; this bias is reduced by better incentive alignment, stronger state monitoring, and higher-quality public governance.**

**Full citation**: Jia, N., Huang, K.G. and Zhang, C.M. (2019) 'Public governance, corporate governance, and firm innovation: An examination of state-owned enterprises', *Academy of Management Journal*, 62(1), pp. 220–247. https://doi.org/10.5465/amj.2016.0543

**Journal**: Academy of Management Journal — **ABS 4*** (top management journal)
**Affiliations**: Nan Jia (USC Marshall); Kenneth G. Huang (NUS Business School); Cyndi Man Zhang (SMU)
**Data**: Publicly listed Chinese SOEs, 2000–2012; SIPO invention patent data; WIND database; NERI regional governance indices
**Method**: Difference-in-differences, propensity score matching; Fixed-effects Poisson (patent count) + double-censored Tobit (proportion of novel patents); natural experiment = 2006 indigenous innovation procurement policy

---

## Key takeaways

- **Core mechanism — "you get what you pay for"** (Kerr 1975, multitasking model): When principals evaluate agents on quantifiable patent counts without assessing novelty, agents with misaligned incentives over-produce incremental patents and under-produce novel ones. SOEs are especially susceptible because state principals typically lack technical ability to assess quality. (p. 223)
- **Post-2006 policy effect**: The state's indigenous innovation campaign increased *both* total patents and the proportion of novel patents on average — but the novelty increase was **much larger for SOEs with better governance**. (p. 231)
- **Board incentive alignment**: SOEs with high board shareholding (mean + 1 SD) increased novel patent proportion by **30.40%** post-policy vs. **11.52%** for median-alignment firms — a gap of ~19 percentage points. (p. 234, Model 2-6)
- **State monitoring (state share)**: Higher state ownership → more novel patents. SOEs with high state share (+1 SD above mean) increased novel patent proportion by **15.69%** vs. **9.89%** for median firms (~6pp gap, 59% larger). (p. 234, Model 3-6)
- **Public governance quality**: SOEs in high-quality governance provinces increased novel patent proportion by **11.14%** vs. **10.33%** for average provinces — modest direct effect but important *amplifier* of corporate governance. (p. 234, Model 4-6)
- **Complementarity**: Corporate governance (board share alignment) produces the largest positive effect on novel innovation *specifically* in high-quality public governance provinces. In low-quality provinces, better board alignment paradoxically *reduces* the proportion of novel patents. (p. 237, Table 5)
- **Implication**: Good governance is not sufficient alone — both corporate and public governance must be present together to meaningfully shift SOEs toward qualitatively novel innovation. (p. 241-242)

---

## Claims (with journal page numbers)

- "We examine an important outcome created by agency risk — that agents pursue quantity of innovation at the expense of novelty — and investigate how it is influenced by corporate and public governance." (p. 220, Abstract)
- "The state designed comprehensive and actionable plans for faster accumulation of patents... The quantity of patent production became a dominant metric in the incentive system created by the Chinese state." (p. 228)
- "Despite the importance of patent novelty to policymakers, minimal checks on the quality or novelty of patents have been implemented in pro-innovation public policies in China." (p. 228)
- The moral hazard mechanism: "Agents exert greater efforts in activities where outcomes are captured by a certain type of evaluation metric, compared to activities whose outcomes are not captured by the focal metrics." (p. 223, citing Holmstrom & Milgrom 1991)
- Board shareholding × post-policy interaction: firms at moderate board share +54.44% patents after policy; firms at high board share +37.05% — a gap of ~18pp less gaming of quantity metric. (p. 233)
- Board shareholding on proportion of novel patents: moderate board share +11.52%; high board share +30.40% — nearly 19pp more novel innovation with better alignment. (p. 234)
- State share on proportion of novel patents: moderate state ownership +9.89%; high state ownership +15.69% — 59% larger increase with stronger state monitoring. (p. 234)
- "SOEs that suffer from great agency risk continue to lack an inherent interest in increasing firm value through engagement with innovation. However, it does not necessarily manifest as *less* innovation, but rather as a lopsided focus on the *quantity* of innovative outcomes at the expense of novelty." (p. 244)
- "The ability of the state as principal to increase SOEs' innovativeness is more intricate than has been suggested by prior research." (p. 244)

---

## Theoretical mechanism

**Multitasking moral hazard** (Holmstrom & Milgrom 1991; Kerr 1975):

| Governance condition | Patent quantity | Proportion novel patents |
|---|---|---|
| Weak incentive alignment (low board share) | **High** — agents game the metric | **Low** — novel patents harder, less rewarded |
| Strong incentive alignment (high board share) | Moderate — agents resist gaming | **High** — agents care about firm value |
| Low state monitoring | No distinction | Lower novel % |
| High state monitoring (high state share) | No distinction | **Higher novel %** |
| Low-quality public governance | — | Governance tools work poorly or perversely |
| High-quality public governance | — | Corporate governance tools **amplified** |

The central insight: **the innovation problem in SOEs is not underinvestment in R&D per se, but misallocation of innovation resources toward measurable-but-low-quality outputs**. This is structural — it follows from the principal-agent architecture of SOE governance.

---

## Empirical design

- **Natural experiment**: China's 2006 indigenous innovation policy (pro-indigenous innovation procurement policy), which mandated government contracts only to firms in designated innovation-active industries — exogenous shock creating treated/control SOEs
- **Quasi-experiment**: DiD comparing pre/post-2006 for treated SOEs (in qualifying industrial categories) vs. propensity-score-matched control SOEs
- **Key DV 1**: Number of invention patents (FE Poisson)
- **Key DV 2**: Proportion of novel patents among all invention patents (double-censored Tobit)
- Novel patent definition: first occurrence of a new combination of patent classes across all SIPO patents ever granted (Fleming, Mingo & Chen 2007 method)
- **Corporate governance proxies**: Board shareholding % (incentive alignment); state ownership % (monitoring)
- **Public governance proxy**: NERI composite index (non-tax fees on firms, fees on rural residents, bureaucratic burden, overstaffing) — principal component analysis
- Sample: ~3,676 firm-year observations (main models); 2000–2012

---

## Relevance for SAIC Motor paper

| Dimension | How to use |
|---|---|
| **Governance** | Direct application: SAIC's board is dominated by SASAC appointees with minimal personal shareholding — exactly the "low incentive alignment" condition Jia et al. study. The model predicts SAIC's innovation would be skewed toward quantifiable outputs (model-launch announcements, patent filing count) rather than genuinely novel EV capabilities. Board composition (see [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]], Table 10) compounds this — bureaucrat-heavy boards have less commercial pressure to distinguish innovation quality from quantity. |
| **Capability Building** | The paper explains *why* SAIC's quantitative innovation metrics (numerous announced EV models, JV new-product plans) have not translated into the deep EV capability that BYD achieved. State procurement-style evaluation metrics push SOE management to optimize for visible deliverables — model counts, production targets, announced partnerships — not underlying technology quality. BYD (founder-led, Wang Chuanfu directly incentivized by share value) faces the opposite incentive: novel innovation creates shareholder and competitive value. |
| **Long-term Viability** | The "lopsided innovation" problem is self-reinforcing: each cycle of low-novelty R&D spending fails to build the distinctive capabilities needed for EV-era competitiveness. SAIC's EV platforms (IM Motors, Roewe) have been commercially weak vs. BYD, which maps to the predicted outcome for SOEs in Jia et al.'s weak-governance condition. |
| **Financing** | State monitoring (state ownership %) modestly helps novel innovation. SASAC's majority ownership could theoretically push toward quality — but this only works when public governance quality also supports it. If SASAC's own evaluation of SAIC prioritizes employment, market share, and JV preservation over R&D novelty, the ownership channel is inert. |

---

## Relation to other sources

- **Complements** [[2026-05-27-fan-wong-zhang-2007-politically-connected-ceos-jfe]]: Fan et al. show *who* governs SOEs (politically connected boards, bureaucrats). Jia et al. show *what* those governance structures produce for innovation: quantity without novelty. Together they provide a full causal chain: state appointees → misaligned incentives → metric gaming → no genuine capability building.
- **Complements** [[2026-05-27-howell-2018-jv-technology-adoption-backfired]]: Howell shows JV rents reduced innovation incentive. Jia et al. add that even when SOEs *try* to innovate (responding to state mandates), weak governance causes them to optimize for the wrong kind of innovation. Two separate mechanisms both point toward the same EV-era outcome for SAIC.
- **Complements** [[2026-05-23-saic-annual-report-2024]]: SAIC has filed many patents and announced many EV models — yet net profit collapsed −88% in 2024. The quantity-without-novelty pattern Jia et al. document is visible in SAIC's product portfolio: many models, weak differentiation.
- **Relates to** [[2026-05-25-saic-motor-sources-web-research]] (Chan 2022, "managed competition"): The state's cascade of quantitative targets (China 5-year plan patent targets → provincial targets → firm targets) is the exact governance mechanism Jia et al. document as producing the innovation-quality problem.

---

## Entities mentioned

- [[saic-motor]] — archetypal case of the SOE innovation governance problem (SASAC-controlled, board not shareholder-aligned)
- [[shanghai-sasac]] — the principal whose governance quality shapes whether board incentives work

## Concepts mentioned

- [[state-owned-enterprise]] — the paper's primary subject
- [[joint-venture-model]] — indirectly: JV governance compounds the weak-incentive-alignment problem
- [[quid-pro-quo-policy]] — background context for the Chinese innovation policy environment

## Notes

- **ABS 4*** — Academy of Management Journal is the top general management journal (alongside AMR and ASQ). Strong citation for the Governance and Capability Building dimensions.
- The 2006 policy quasi-experiment makes this paper's causal claims unusually strong for governance research.
- The paper's sample is SOEs broadly; SAIC is not mentioned by name, but the governance conditions studied are a precise description of SAIC's structure.
- "Lopsided innovation" (quantity over novelty) is a useful framing concept for the seminar paper's Capability Building section.
- DOI: `10.5465/amj.2016.0543` — confirmed from paper header.
