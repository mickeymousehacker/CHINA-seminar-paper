# -*- coding: utf-8 -*-
"""Setzt kurze, einfache Sprech-Notizen (Non-Native-freundlich, sicher unter 40 Min).
1. Satz = Kernaussage, letzter Satz = Uebergang."""
from pptx import Presentation

F = "research/presentation/China-Strategies-Presentation-FINAL.pptx"
prs = Presentation(F)

N = {
1: """Good afternoon, and welcome. Our paper asks one question: which way of building a car company in
China creates the most value for shareholders over time? We compare three real firms with three
models — SAIC uses joint ventures, BYD builds its own technology, and Geely buys companies abroad. Our
main point is simple: governance — who controls the firm — matters more than the technology it starts
with. We go through four lenses, give our verdict, draw three lessons, and end with how we used AI.
Let us start with why this matters now.""",

2: """The joint-venture era is ending. Electric cars are now more than half of new sales in China, and
Chinese firms make about sixty percent of the world's EVs. For thirty years the deal was simple:
foreign firms gave technology, and a state firm gave market access. That worked when the engine was the
hard part. Now the hard part is batteries and software, and that knowledge sits with the Chinese
independents. So the old deal no longer helps. You can see it at SAIC: profit fell eighty-eight percent
in one year. And the EU set very different tariffs — high for SAIC, low for BYD — which tracks how
state-dependent each firm is. Next, our exact question.""",

3: """Our question is short but hard: which structure builds the most value over time? We study three
firms with three paths. SAIC is state-owned, controlled by SASAC. BYD is founder-led, run by Wang
Chuanfu. Geely is also founder-led, under Li Shufu, but it grew by buying firms abroad. We look at all
three through the same four lenses — governance, financing, capability, and viability — in the same
order. So we compare one choice at a time, not three company stories. Our thesis is at the bottom:
structure beats starting technology. Now the theory behind these lenses.""",

4: """Six well-known ideas all point the same way. Shleifer and Vishny: in a state firm, control sends
money to political goals, not shareholders. Megginson and Netter: private firms beat state firms.
Jensen and Meckling: a strong founder-owner removes the conflict between owners and managers. Holmes
and Fan: the joint-venture trade has a hidden cost — connected firms lag about eighteen percent. Luo
and Tung: emerging-market firms buy abroad to catch up. Teece: deep in-house knowledge is hard to copy.
So the prediction is clear before we look at the data: founder control should win. Next, our map.""",

5: """This matrix is the map for the talk. The rows are the firms, the columns are the four lenses. Read
across for one firm; read down to compare. The key point is that the columns are linked. SAIC is
state-led, capital-light, dependent on transferred technology, and weakest in the EV shift — those
cells belong together. BYD shows the opposite all the way across, and Geely is in between. Over the
next slides we go column by column with the evidence. We start with governance.""",

6: """Governance is two questions: who controls, and what they want. SAIC sits under the state — SASAC
owns about seventy-three percent, and the Party role is in the charter, so its goals go beyond profit.
The cost is speed: it cannot leave a failing joint venture without approval. BYD is the opposite — the
founder and his team hold over a third of the votes, so Wang could end petrol-car production in one
year, in 2022, alone. Geely is also founder-led and fast on deals, but it runs many brands, and some
lose money. So control runs from political at SAIC to commercial at BYD. Next, the EU put a price on
this.""",

7: """Here is outside proof. The EU studied state support and set tariffs: 35.3 percent for SAIC, 17 for
BYD, 18.8 for Geely. That gap is not about car quality — it is about state dependence. For SAIC the
Commission even used “facts available,” because the group held back financing data. So a neutral
regulator reached our conclusion from the outside: control structure drives competitive position. And
for exports, that tariff is a direct cost of the governance model. Now we follow the money.""",

8: """Each firm funds growth differently, and it shows in a downturn. SAIC was capital-light — it shared
cost and risk with foreign partners. That felt safe, until SAIC-GM lost half its sales, and SAIC had
to absorb the losses without control to fix them. Profit fell eighty-eight percent; the capital-light
model became a capital trap. BYD funds itself from its own cash and spends more on R&D than it earns,
so it needs no banks; the limit is its own cash. Geely borrows to buy capability fast, but its debt is
rising. So the real choice is resilience versus speed. Next, the numbers.""",

9: """Here are the numbers in one table. Return on equity: BYD and Geely near twenty percent, SAIC below
one — that line says it all. Research: BYD spends more on R&D than it earns in profit. Cash flow: BYD
generates far more than the others. One honest note: SAIC's profit looks recovered in 2025, but that is
mostly because the 2024 write-downs did not repeat, not a real turnaround. The bottom row, the EU
tariff, marks the same governance gap. Next, how each firm builds technology.""",

10: """How a firm learns shapes what it can build. SAIC took technology through joint ventures. It
worked — quality rose about eight percent — but the easy money killed its own research, so it had no EV
platform when the shift came. BYD built everything itself, from battery cells to software; that deep
knowledge is hard to copy. Geely bought Volvo and turned it into real shared engineering, confirmed by
patent data. So the lesson is simple: handed-over technology fades when the cycle turns, but built or
co-developed knowledge lasts. Next, the trade-off.""",

11: """This slide shows the trade-off between speed, depth, and independence. SAIC was fastest to
quality but shallow and dependent, with no platform of its own. Geely is the rare strong case — fast
and deep — because it co-developed with Volvo. BYD was slowest but deepest, thirty years from cells to
software, fully its own. The cost of the shallow path is in the bar at the bottom: SAIC's joint-venture
plants run at just 14 to 37 percent of capacity. When the technology shifts, there is no platform to
fall back on. Next, the EV transition itself.""",

12: """The EV shift tests every earlier choice. SAIC is most exposed — its plants run far below
capacity — but to be fair, its own brand grew thirty-three percent, with no direct subsidies, and it
launched a brand with Huawei. So its future is a race between falling joint-venture income and a thin
own-brand margin, and its slow structure sets the pace. BYD is the strongest: no petrol cars since
2022, world number one for four years, exports up one hundred and forty percent. Geely is in between —
strong growth, but partner-dependent with loss-making brands. Same shock, three outcomes — exactly
what the earlier choices predicted. Now our answer.""",

13: """Here is our answer. Of the three, BYD is most likely to create long-term value. The evidence is
consistent: the highest return on equity, four years as the top EV maker, and a 5.6-billion-dollar
raise that sovereign funds joined. But notice the wording in the box. It is not that building
everything yourself is magic. BYD wins because it combines two things — commercial founder control and
a self-financing balance sheet that stays strong in a downturn. Governance and capital discipline
together. And we stay honest: BYD's return fell to thirteen percent in 2025 under the price war. Now
three lessons.""",

14: """Three lessons that go beyond cars. One: how you build capability decides how long it lasts.
Buying or borrowing technology can hollow out a firm when the technology changes; building or
co-developing keeps the strength. Two: governance sets the speed of change. Commercial owners move
fast; split control stalls — and when technology moves faster than your decisions, governance is the
limit. Three: capital structure decides who survives a downturn — risk-sharing can trap you,
self-financing trades speed for safety, debt does the opposite. One theme: structure decides. Now the
conclusion.""",

15: """Here is the core point. Across all four lenses, structure — more than starting technology —
decided the outcome. The joint-venture model did not lose to a better battery; it lost to a better way
of allocating control and capital. BYD's founder control plus self-financing proved the most adaptive,
while SAIC's state model serves goals beyond profit, which shows up as a discount. So our line, in the
box: when technology moves faster than firms can decide, governance is no longer a footnote to
strategy — it is strategy. Before questions, a word on limits and on how we used AI.""",

16: """A short, honest word on limits. We study three firms in one industry and one country, so this is
deep case work, not a statistical law. The EV shift is still young, so the ranking could change. We
rely on reported figures, and the reports mix currencies, which we reconciled carefully. We left NIO
out — a fourth, capital-market model beyond our scope. Future work could add NIO, follow these firms
longer, build a formal governance score, and study how the EU tariffs reshape exports. Now, how we used
AI.""",

17: """We did not use a simple chatbot. We used Claude Code as a layered system — a main model for most
work, a stronger one for the hard analysis, and five small agents, each with one job. But the heart of
it is the shared repository shown here. We had one folder per case and a shared folder for common data.
The rule was simple: pull before each session, push after. Because the tool could read all three case
wikis at once, we compared the firms directly, with no manual file-sharing. Next, what this added.""",

18: """Where did AI help most? First, it compressed research time — more than thirty papers and reports,
all searchable. Second, it kept us disciplined: every source was rated by quality, and we built
arguments only on the strongest. The sharpest habit was to tell it to act like a strict professor and
to quote the exact source for each fact. That habit also caught three real data errors before
submission — a wrong tariff, a profit figure inflated ten times, and an EPS on the wrong share count —
all fixed against the audited reports. Next, the honest limits.""",

19: """Now the limits, honestly. It cannot download paywalled PDFs — it knows the papers' content, but
we still had to read and check the key claims ourselves. Geely's PDFs were not machine-readable, so
that case used more web sources. On long sessions we hit memory limits, and the output was often too
wordy and needed editing. The lesson: this is not a chat box — it took time to learn, and every output
needed a careful read. The cost was small, about twenty-one euros a month each. The line we held: AI
was our tool and reviewer, never a ghostwriter. The thinking stayed ours.""",

20: """These are our main sources, in APA style. The theory comes from Shleifer and Vishny, Jensen and
Meckling, and Teece; the China evidence from Bai, Howell, and Holmes. The figures come from the audited
annual reports, the EU regulation, and the IEA. The full list is in the paper. Thank you very much —
we are happy to take your questions.""",
}

for idx, txt in N.items():
    prs.slides[idx - 1].notes_slide.notes_text_frame.text = " ".join(txt.split())

prs.save(F)
print("notes updated; slides:", len(prs.slides))
