# Feedback & To-Dos für Batus Präsentation

**Datei:** `research/presentation/china-ev-presentation(batu).pptx`
**Gilt nur für Folien 1–19** (die zweite Hälfte, Folien 20–39, ist eine doppelte Version und wird gelöscht).
**Ziel:** Deck auf Top-Level bringen + Sprech-Notizen 1–19 in einfachem Englisch.

---

## 0. TL;DR — die 6 wichtigsten Schritte

1. **KI-Teil von 6 auf 3 Folien kürzen** (13–18 → 3 Folien). 6 KI-Folien sind zu viel für den 45-Min-Slot.
3. **SAIC fairer & vollständiger darstellen** — 4 inhaltliche Lücken auf Folien 5, 6, 8 (Details in Teil C).
4. **Falsche Speaker-Notes ersetzen** auf Folien 11, 14, 15, 16 (alle tragen dieselbe kopierte Notiz).
5. **Alle Speaker-Notes 1–19 in einfaches Englisch** bringen (fertige Texte in Teil E).

---

## Teil A — Struktur & Aufbau


### A3. KI-Teil straffen: 6 Folien → 3

Aktuell sind die Folien 13–18 alle „AI Reflection" — das sind 6 von 19 Folien (ein Drittel!) nur für den KI-Annex. Für den Slot zu viel. Vorschlag, auf **3 Folien** zu verdichten:

- **Neu 13 — „Architecture: a layered agent system on a shared wiki"**
  (= alte 13 + 14)

  - Models: `claude-sonnet-4-6` (primary) · `claude-opus-4` (cross-case & argument logic)
  - 5 agents: wiki-ingest · wiki-query · wiki-lint · verify-claims · find-references
  - Shared git repo: one folder per case (saic-motor / byd / geely) + shared layer (EU reg, IEA)
  - Discipline: pull before, push after; AI reads all 3 wikis at once → direct cross-case comparison
- **Neu 14 — „What it added: source discipline + 3 errors caught"**
  (= alte 15 + 16 + 17)

  - Source rating Q1–Q5 (journal) × R1–R4 (relevance); arguments built on Q1/Q2 only; per-case writing guide
  - 3 data errors caught pre-submission: EU tariff 36.3%→35.3%; net profit 10× currency-unit inflation; EPS wrong share count — all traced to audited (PwC / E&Y) reports
  - Best prompts: „act as a critical reviewer (Dozent) looking for overclaims & APA errors"; „verify this figure against its source and quote the exact passage"
- **Neu 15 — „Limits, judgment & cost"**
  (= alte 18 + Kosten)

  - Token/context limits on long sessions; output verbose → needs active review
  - Cost: Claude Pro ~€21/month per member, no per-query charge, no paid data services
  - **All analytical judgment, argument and interpretation remained fully human**

→ Dann wird References zu Folie 16, und das Deck hat 16 statt 19 Folien (sauberer fürs Timing). Wenn du unbedingt bei 19 bleiben willst, behalte die 6 KI-Folien — aber ersetze mindestens die kopierten Notizen (Teil E hat Notizen für beide Varianten).

---

## Teil B — Folie-für-Folie-Review (1–19)

| Folie                      | Status       | Konkrete Aktion                                                                                                                             |
| -------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 Title                    | ✅ gut       | Nichts. Saubere Titelfolie.                                                                                                                 |
| 2 Intro + Central Question | ⚠️ dicht   | Inhaltlich top. Prüfen, ob Intro**und** zentrale Frage auf einer Folie nicht zu voll wirken — sonst ggf. splitten. Quellenzeile da. |
| 3 Theory                   | 🔧 klein     | Sonderzeichen „⮕" durch normales „→" ersetzen (Font-Risiko in LibreOffice/PowerPoint).                                                  |
| 4 Governance               | 🔧 SAIC      | Optional SAIC-Fußnote: 2025-Reform (Aufsichtsrat → Audit Committee, Kontrolle unverändert).                                              |
| 5 Financing (ROE)          | 🔧 SAIC      | **Auslöser ergänzen** (SAIC-GM −56,54 %) + ex-exceptionals negativ. Siehe C2. ROE-Schreibweise (0,6 % vs 0,58 %) vereinheitlichen. |
| 6 Financing (risk bearer)  | 🔧 SAIC      | Beim 35,3 %-Zoll**das „Warum"** ergänzen („facts available", withheld data). Siehe C3.                                             |
| 7 Capability               | ✅ gut       | Inhaltlich stark (Speed/Depth/Independence). Ggf. Bai +8,3 % auf die Folie holen (steht nur in Notizen).                                    |
| 8 Long-term viability      | 🔧 SAIC      | **Wichtigste SAIC-Korrektur:** echten EV-Fortschritt + Race-Framing einbauen. Siehe C1.                                               |
| 9 Key Lessons              | ✅ gut       | Die drei Lessons sind klar. Nichts.                                                                                                         |
| 10 Verdict (BYD)           | ✅ gut       | Starke Nuance-Box. Nichts.                                                                                                                  |
|                            |              |                                                                                                                                             |
| 12 Conclusion              | ✅ gut       | „Governance is strategy" sitzt. Nichts.                                                                                                    |
| 13–18 AI Reflection       | ⚠️ zu lang | Auf 3 Folien kürzen (Teil A3). Notizen 14/15/16 sind falsch (Duplikat).                                                                    |
| 19 References              | ✅ gut       | APA-Konsistenz prüfen; Bai-Seitenspanne im Verzeichnis ok.                                                                                 |

---

## Teil C — SAIC inhaltlich vervollständigen (Kernpunkte)

> Alle Zahlen stammen aus dem aktuellen Draft, Abschnitte **2.1 / 3.1 / 4.1 / 5.1** (Julias Teile). Bitte exakt so übernehmen.

### C1. (Folie 8) SAIC nicht nur als Verlierer — echter EV-Fortschritt + Race-Framing

**Problem:** Folie 8 zeigt SAIC nur negativ (37 %/14 %, „JV 2.0 kommt zu spät"). Der Draft (5.1) ist differenzierter.

**Aktueller SAIC-Block:**

> „SAIC — capability dependency has become capability deficit
> SAIC-GM at 37% capacity utilisation, VW's MEB plant at 14%; the ‚JV 2.0' pivot with Huawei arrives years after BYD's lead."

**Vorschlag (ersetzen):**

> „SAIC — exposed, but the own-brand pivot has real substance
> JV plants run at 14–37% capacity — dependency hardened into deficit. **Yet own-brand NEV reached 1.643 m units (+33%) with zero direct subsidies; ‚JV 2.0' repurposes idle JV plants (SAIC SHANGJIE with Huawei, first mass-market semi-solid battery).** Viability is now a race between eroding JV rents and a still-thin own-brand margin — bounded by how fast state governance lets capital move."

Belege: NEV 1,643 Mio. (+33,14 %), null direkte Subventionen, Semi-Solid-Batterie, SHANGJIE/Huawei → alle aus AR 2025 (SAIC Motor, 2026), Draft 4.1 & 5.1.

### C2. (Folie 5) Kausalkette des Gewinneinbruchs

**Problem:** Folie nennt −88 % ohne Ursache.

**Aktuelle SAIC-Zeile:**

> „SAIC — capital trap: 50/50 risk-sharing inverted; 2024 net profit −88%, ROE 0.58% with no control to restructure."

**Vorschlag:**

> „SAIC — capital trap: **SAIC-GM sales −56.54% (to 435k units) triggered impairments** → 2024 net profit −88%, ROE 0.58%; **excluding one-offs still negative (−RMB 5.4 bn)** — bound to absorb losses it cannot restructure."

Belege (Draft 3.1): SAIC-GM −56,54 % auf 435.007 Einheiten; Umsatz −15,73 % auf RMB 627,59 Mrd.; Nettogewinn −88,19 % auf RMB 1,67 Mrd.; ex-non-recurring −5,41 Mrd.; ROE 0,58 % (von 4,98 % 2023). 2025-„Erholung" = Nicht-Wiederkehr der Impairments (ex-NR 7,42 Mrd. < 2023: 10,04 Mrd.).

### C3. (Folie 6) Beim 35,3 %-Zoll das „Warum"

**Problem:** Nur die Zahl, nicht der starke Governance-Beleg.

**Vorschlag (Zeile in der SAIC-Box ergänzen):**

> „EU priced this state dependence at the highest duty (35.3%) — partly on **‚facts available', after the group withheld key financing data** (European Commission, 2024)."

Beleg (Draft 3.1): höchster Zoll nach dokumentierter präferenzieller Staatsfinanzierung (Loans/Bonds/ABS), teils auf „facts available", weil der Konzern Finanzierungsinfos zurückhielt.

### C4. (Folie 4, optional) Governance-Spezifika

Falls Platz, als Fußnote:

> „2025: Board of Supervisors abolished, folded into a strengthened Audit Committee — procedural reform, ultimate control unchanged (Megginson & Netter, 2001)."
> Optional Eigentumsstruktur: „SASAC 63.71% via Shanghai Automotive Industry Group (two-tier pyramid; + COSCO 5.91%, Yuejin 3.60%)."

### C5. (Folie 8 oder 5, optional) Skala & Eigenmarken-Verschiebung

Kontext aus 3.1: **4,0 Mio. Fahrzeuge 2024**, **Eigenmarken nähern sich ~60 % des Absatzes**, JV-Marken-Beitrag schwindet. Ein Halbsatz reicht: „own-brand now ~60% of a 4.0 m-vehicle base."

---

## Teil D — Konsistenz- & QA-Checkliste

- [ ] **ROE-Schreibweise** einheitlich: 0,6 % (Callout) vs 0,58 % (Text) — eine Variante wählen.
- [ ] **Geely ROE FY2024**: Batu nutzt 19,2 % (= Table 1). Draft-Text nennt an einer Stelle 19,4 % — **im Team final festlegen** und überall gleich.
- [ ] **„⮕" / Sonderpfeile** durch normales „→" ersetzen (Folie 3).
- [ ] **Eine Quellenzeile pro Daten-Folie** (klein, kursiv) — hat Batu meist, lückenlos prüfen.
- [ ] **APA 7** im Verzeichnis einheitlich (Journal voll vs. abgekürzt: „JFE" vs „Journal of Financial Economics" — eine Form).
- [ ] **Annual-Report-Jahre**: AR 2025 = (…, 2026); AR 2024 = (…, 2025). Konsistent.
- [ ] **Speaker-Notes** auf Folien 11, 14, 15, 16 sind aktuell falsch (Duplikat) — ersetzen.
- [ ] Mit Julias Deck abgleichen, dass SAIC-Zahlen/Framings identisch sind (kein Widerspruch im Vortrag).

---

## Teil E — Speaker-Notes 1–19 (einfaches Englisch, fertig zum Einfügen)

**Stilregeln:** B2-Englisch · kurze Sätze · aktiv statt passiv · kein Jargon (kein „herein/thereof/aforementioned") · **max. 5–6 Sätze** · **1. Satz = Kernaussage**, **letzter Satz = Übergang zur nächsten Folie**.

**Slide 1 — Title**
Welcome. Our paper asks one question: how do you build a car company in China that creates lasting value for its owners? We study three real firms with three different models — SAIC, BYD, and Geely. I will show the framework, compare them across four dimensions, give our verdict, and end with how we used AI. Let's start with why this matters now.

**Slide 2 — Introduction & central question**
For thirty years there was one way to build cars at scale in China: foreign technology for market access, with a state firm as partner. That model is now breaking apart. EVs are already 55% of China's market, Chinese makers sell about 60% of the world's EVs, and the EU even taxes the three firms differently — 35.3% for SAIC against 17% for BYD. So our question is simple: which ownership and financing model builds lasting value? Next, what the theory predicts.

**Slide 3 — Theory**
Three lines of theory all point the same way. Agency theory says a founder-owner removes the conflict between owners and managers. Shleifer and Vishny say that in state firms, control pushes money toward political goals, not shareholders. And the data — including Allen et al. on China — show state firms do worse over time. So even before the cases, the prediction is clear: concentrated, commercial control should win. Let's test it, starting with governance.

**Slide 4 — Governance**
Governance is about who holds control and what they want. SAIC is state-led: SASAC owns about 73%, the Party mandate is in the charter, and 50/50 JV boards need both sides to agree — so it moves slowly. BYD's founder and team hold over a third of the votes, so he could exit petrol cars alone in 2022. Geely's founder controls the top and is fast on deals, but pays a cost for managing many brands. The pattern: commercial founder control acts fastest. Next, how each firm pays for growth.

**Slide 5 — Financing (returns)**
Here is the money story in one number: return on equity in 2024. SAIC is almost flat at 0.6%, BYD is 21.7%, Geely 19.2%. This gap is structural, not luck. SAIC's trouble began when SAIC-GM sales fell 56% — that triggered write-downs and an 88% profit drop, and without one-off items the result was still negative. To be honest, BYD's return fell to 13% in 2025 under the price war, but it stays self-funded. Next, who carries the risk.

**Slide 6 — Financing (risk bearer)**
Same goal — fund growth — but the risk lands on different people. SAIC pushed the risk onto its 50/50 JV partners; that felt safe until sales fell and it had to absorb losses it could not fix — a capital trap. BYD funds itself from its own cash and spends more on R&D than it earns, so it needs no lenders. Geely borrows to buy capability fast, which works while profits hold. The EU even put the highest tariff on SAIC, 35.3%, partly because the group held back its financing data. Next, how each firm builds technology.

**Slide 7 — Capability**
There are three ways to build capability, each with a different staying power. SAIC took technology through joint ventures — fast for quality, but the easy money killed its own innovation, so it had no EV platform ready. Geely bought Volvo and turned it into real shared engineering. BYD built everything itself over decades, from battery cells to software — slow, but very hard to copy. The way you build it decides how long the advantage lasts. Next, the EV transition as the real test.

**Slide 8 — Long-term viability**
The EV shift tested every past choice. SAIC is most exposed — its JV plants run at just 14 to 37% — but its own brand shows real progress: EV sales up 33% with no direct subsidies, and a new platform with Huawei. So SAIC's future is a race between falling JV income and a thin own-brand margin, and its state structure decides how fast it can move. BYD is strongest: no petrol cars since 2022, and the world's top EV maker for four years. Geely is the adaptive middle — strong sales, but levered and dependent on partners. Next, the lessons we draw.

**Slide 9 — Key lessons**
From the three cases we draw three lessons that travel beyond cars. One: how you build capability decides how long it lasts when technology changes. Two: governance sets the speed of change — when technology moves faster than your decisions, governance becomes the limit. Three: your capital structure decides if you survive a downturn — self-financing trades speed for safety, debt does the opposite. These hold in any fast, uncertain market. Now our verdict.

**Slide 10 — Verdict (BYD)**
Our answer: BYD is most likely to create lasting shareholder value. It has the highest return, four years as the top EV maker, and a 5.6-billion-dollar raise that sovereign funds joined. But the point is not that building everything yourself is magic. BYD wins because it combines commercial founder control with a self-funded balance sheet that stays strong in a downturn. Next, the same result across all four dimensions.

**Slide 11 — Synthesis dashboard** *(nach Inhalt aus A2 einfügen)*
This table puts the whole comparison on one page. Read each row as one dimension and each column as one firm. SAIC is weak almost everywhere — low return, high tariff, slow to adapt. BYD and Geely both clear 18% return, with BYD strongest overall. The pattern is consistent: private founder control beats the state and JV models on every dimension. Now the conclusion.

**Slide 12 — Conclusion**
Here is the deeper point. Governance is not something you adjust after picking a strategy — it is what lets any strategy happen at all. The old JV model did not lose to a better battery; it lost to a better way of sharing control and capital. And to be fair: BYD's lead depends on the same discipline that built it, now under price-war pressure. The 2020 to 2025 transition is a natural experiment, and it shows governance — more than technology — decides who wins. Now, briefly, how we used AI.

### KI-Notizen — Variante 1: wenn du die 6 Folien behältst (13–18)

**Slide 13 — AI architecture**
We did not use a simple chatbot. We ran Claude Code as a layered system: a main model for most work and a stronger one for the hard analysis. Five small agents each did one job — ingest sources, search them, check links, verify claims, and find references. Everything sat in one shared store we could query. Next, how we worked together in it.

**Slide 14 — Shared git wiki**
All three of us worked in one shared git repository, with a folder for each case and a shared layer for common data. The rule was simple: pull before each session, push after. Because the tool could read all three case wikis at once, we compared cases directly, without sending files back and forth. We hit one merge conflict and fixed it with a quick stash. Next, how we kept quality high.

**Slide 15 — Source quality**
We rated every source on two things: how strong the journal is, and how close it is to our case. We built arguments only on the top tiers. We also kept a short writing guide per case with the verified numbers and citations, so all three of us stayed consistent. This stopped weak sources from supporting strong claims. Next, the most useful part.

**Slide 16 — Critical reviewer / data errors**
The most valuable move was telling the model to act as a strict reviewer and to check each fact against its source. This caught three real data errors before they reached the paper: a wrong EU tariff, a profit figure inflated ten times by a unit mix-up, and an EPS on the wrong share count. We traced all three back to the audited annual reports. Next, the overall value.

**Slide 17 — Advantages**
Where did it help most? It handled a volume of reading we could not do by hand — over thirty papers and many annual reports, all searchable. It caught the three data errors. And it survived a hardware crash with no loss, because everything was stored. Next, the limits.

**Slide 18 — Limitations**
The limits were real, and we stayed honest about them. It cannot open paywalled journals, and Geely's PDFs were not readable, so that case used more web sources. Long sessions hit memory limits and sometimes repeated themselves, and the text was often too wordy and needed editing. The key line: judgment and interpretation stayed fully with us. Finally, our sources.

### KI-Notizen — Variante 2 (empfohlen): wenn du auf 3 Folien kürzt

**Neu 13 — Architecture (layered agents + shared wiki)**
We did not use a simple chatbot — we ran Claude Code as a layered system. A main model did most of the work, and a stronger one handled the hard cross-case analysis. Five small agents each had one job: ingest sources, search them, check links, verify claims, and find references. All of it lived in one shared git repository, with a folder per case and a shared layer, so the tool could compare all three cases at once. Next, what this actually added.

**Neu 14 — Value: source discipline + three errors caught**
Two things made the tool worth it. First, source discipline: we rated every source by journal quality and relevance and only built arguments on the best ones, with a writing guide keeping our numbers consistent. Second, error-catching: asking it to act as a strict reviewer and to check each fact against its source caught three real data errors — a wrong EU tariff, a profit figure inflated ten times, and an EPS on the wrong share count. We traced all three to the audited annual reports. Next, the limits and the cost.

**Neu 15 — Limits, judgment & cost**
We stayed honest about the limits. It cannot open paywalled journals, Geely's PDFs were not readable, long sessions hit memory limits, and the text was often too wordy and needed editing. The cost was small — about 21 euros a month each, with no extra charges. The key line: the tool was our infrastructure and reviewer, but every judgment and interpretation stayed with us. Finally, our sources.

**Slide 19 (bzw. 16) — References**
These are our main sources, in APA style. The theory comes from Shleifer and Vishny, Jensen and Meckling, and Teece; the China evidence from Bai, Howell, and Holmes. Company figures come from the audited annual reports of all three firms, plus the EU regulation and the IEA. Thank you — we are happy to take your questions.

---

## Teil F — Timing (Slot 13:30–14:15, Session 6)

- 45 Min für 3 Cases + Q&A → grob **~10–12 Min Vortrag pro Person + gemeinsames Q&A**.
- Faustregel: ~1–1,5 Min pro Folie. Bei 16 Folien (nach Kürzung) bist du gut im Rahmen; bei 19 wird es eng — ein Grund mehr, den KI-Teil zu straffen.
- KI-Annex bewusst kurz halten (≤3 Min) — Schwerpunkt ist die inhaltliche Analyse.
- Letzte Folie (Conclusion bzw. References) so timen, dass genug Puffer für Rückfragen bleibt.

---

*Erstellt als Feedback zu Batus Deck, abgeglichen mit dem aktuellen Draft (Abschnitte 2.1 / 3.1 / 4.1 / 5.1) und Julias Präsentation.*
