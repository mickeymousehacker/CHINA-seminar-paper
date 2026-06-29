# -*- coding: utf-8 -*-
"""Erweitert die Sprech-Notizen der finalen Praesentation auf ~40 Min Vortragszeit.
Einfaches B2-Englisch; 1. Satz = Kernaussage, letzter Satz = Uebergang."""
from pptx import Presentation

F = "research/presentation/China-Strategies-Presentation-FINAL.pptx"
prs = Presentation(F)

N = {
1: """Good afternoon, and welcome. Our seminar paper asks one clear question: how do you build a
successful car company in China, and which ownership and financing structure creates the most value
for shareholders over the long run? We answer it by comparing three real firms that each chose a very
different path. SAIC grew through state-backed joint ventures with Western carmakers. BYD built its
technology in-house, starting from batteries. Geely grew by buying companies abroad, most famously
Volvo. Our central finding, which we will defend across the whole talk, is that governance — who
controls the firm and what they optimise — matters more than the technology a firm starts with. We
move through four lenses in turn: governance, financing, capability building, and long-term
viability. Then we give our verdict, draw three general lessons, and finish by reflecting honestly on
how we used AI in the research. Let us begin with why this question is so urgent right now.""",

2: """The joint-venture era is ending, and these numbers make it clear. Electric vehicles are now more
than half of all new cars sold in China, and Chinese firms make roughly sixty percent of the world's
EVs. For three decades the rule was simple: foreign companies handed over their technology, and a
state-owned Chinese firm provided market access. That trade worked while the hard part of a car was
the engine and the gearbox. In the electric era the hard part has moved — to batteries, power
electronics, and software — and that knowledge now sits with the Chinese independents, not the Western
partners. So the old exchange no longer helps the joint-venture firms. You can see the stress directly
at SAIC, the classic joint-venture champion: its net profit fell eighty-eight percent in a single
year. Now look at the third card. The European Union set different import duties for the three firms —
35.3 percent for SAIC, but only 17 for BYD and 18.8 for Geely. That gap is not about car quality; it
tracks how dependent each firm is on the state. So the market and the regulator point in the same
direction. This sets up the precise question we ask, and the three models we use to answer it.""",

3: """Our question is short to say but hard to answer: which structure builds the most shareholder value
over time, in a market that is both high-growth and technology-intensive. We study it through three
firms that picked three different paths. SAIC is state-owned and grew through joint ventures; the
asset commission, SASAC, controls about seventy-three percent. BYD is founder-led — Wang Chuanfu holds
around seventeen percent — and built its technology itself. Geely is also founder-led, with Li Shufu
holding about forty-one percent, but it grew by acquiring companies abroad. To keep the comparison
fair, we look at all three through the same four lenses, shown in the dark boxes: governance,
financing, capability building, and long-term viability. The same four questions, asked of every
firm, in the same order. This avoids simply describing three companies one after another; instead we
compare one structural choice at a time. Our thesis, in a single line, is at the bottom: the structure
of control matters more than the technology a firm starts with. Now the theory that stands behind
these four lenses.""",

4: """Our argument rests on six well-known ideas, and they all point the same way. Shleifer and Vishny
show that whoever holds the control rights decides where the money goes — and in a state firm that
means political goals, not shareholder value. Megginson and Netter add the evidence across many
countries: private firms outperform state and mixed-ownership firms. Jensen and Meckling explain the
opposite, positive case — a strong founder-owner removes the conflict of interest between owners and
managers. Holmes and Fan describe exactly the joint-venture trade we see in China, and its hidden
cost: politically connected firms lag about eighteen percent in the three years after they list. Luo
and Tung explain why an emerging-market firm buys abroad — to use the acquisition as a springboard
over its late start. And Teece explains why deep, in-house knowledge, built up step by step, is so
hard for rivals to copy. Notice the colours: most of these lenses predict that state control
underperforms, while founder control and built-in knowledge create durable advantage. So the academic
prior is clear before we even look at the data. Next we turn these six lenses into one simple map.""",

5: """This matrix is the map for the rest of the talk, so it is worth one careful minute. The three
rows are the three firms. The four columns are our four lenses. If you read across a row, you see one
firm's whole profile. If you read down a column, you compare the three firms on one topic. The key
message is that the columns are not independent of each other. Look at SAIC's row: state-led
governance, capital-light joint-venture financing, technology that was handed to it, and the weakest
position in the EV shift. Those four cells belong together — the governance choice in the first column
shapes the outcome in the last. BYD shows the opposite pattern straight across: founder control,
self-financing, organic capability, strongest position. Geely sits in between, founder-led but more
complex. Keep this picture in your head, because over the next slides we go column by column and put
the hard evidence behind each cell. We start on the left, with governance.""",

6: """Governance is really two questions: who holds control, and what they try to maximise. SAIC sits
firmly under the state. The asset commission owns about seventy-three percent, and the Party's role is
written directly into the company charter, so its goals reach beyond profit — employment, industrial
policy, and national prestige all count. The cost of that is speed: it cannot leave a failing joint
venture without state approval, which makes capital slow to move. BYD is the opposite. The founder and
his team hold more than a third of the votes under one-share-one-vote, there is one clear commercial
goal, and there is no party committee at the operating level. That is exactly why Wang Chuanfu could
end all petrol-car production in a single year, in 2022, without asking outside shareholders or the
state. Geely is also founder-led and quick on deals, but it pays a coordination cost for running many
brands — Volvo, Polestar, Lotus — and several of them lose money, which becomes a hidden liability for
the group. So control runs on a clear scale, from political at SAIC to commercial at BYD. The next
slide shows that an outside regulator put a real price on exactly this difference.""",

7: """Here is outside proof that governance is not just an internal matter. The European Commission
studied how much state support each firm receives and set import duties accordingly: 35.3 percent on
SAIC, 17 on BYD, and 18.8 on Geely. That gap of about eighteen points between SAIC and BYD is not
about how good the cars are — it is about ownership and state dependence. In SAIC's case the
Commission even had to rely, in its own words, on “facts available,” because the group withheld some
of its financing information; that itself tells you something about transparency under state control.
So a neutral, third-party regulator reached the very same conclusion that we reach from the inside:
control structure drives competitive position. There is also a clean hierarchy here — adaptability
rises as control concentrates, from joint-venture boards that need both partners to agree, to
state oversight, to single founder control. And for a firm that wants to grow through exports, this
tariff is a direct, lasting cost of the governance model it chose. Now we follow the money — how each
firm funds its growth, and who carries the risk when the market turns.""",

8: """Each firm pays for growth in a different way, and the difference only shows up clearly when the
market turns down. SAIC chose a capital-light model: it split the cost and the risk fifty-fifty with
its foreign partners, so it could scale quickly without putting much on its own balance sheet. That
felt safe while sales were rising. But when its main joint venture, SAIC-GM, lost more than half of
its sales in one year, SAIC was still contractually bound to absorb the losses, without the control to
restructure the business. Profit fell eighty-eight percent and return on equity dropped to barely half
a percent — the capital-light model had quietly become a capital trap. BYD funds itself from its own
operating cash, and it even spends more on research than it earns in profit — 54 billion renminbi of
R&D against 40 billion of net profit. Because it sits on net cash, it does not depend on banks; the
trade-off is that its growth is limited by the cash it generates. Geely takes the third route: it
borrows to buy capability quickly, which is how it acquired Volvo, but its gearing has climbed toward
twenty percent. So the real choice across the three is resilience versus speed. The next slide puts
the hard numbers side by side.""",

9: """This table is the financial picture in one place, taken straight from our paper. Let me point to
a few rows. Return on equity: BYD and Geely are both near twenty percent, while SAIC is below one —
that single line captures the whole story of the financing chapter. Research spending: BYD spends more
on R&D than it earns in profit, in both years, which shows how aggressively it reinvests. Operating
cash flow: BYD generates far more cash from its operations than the other two, which is what funds that
reinvestment without debt. One honest note on SAIC: its profit looks like it jumped back in 2025, from
1.7 to 10.1 billion, but that is mostly because the large write-downs of 2024 did not repeat — the
underlying business has stabilised, it has not truly turned around. And the bottom row, the EU tariff,
is the outside marker of the same governance gap. So the numbers and the structure tell one consistent
story. With the money side clear, we move to the third lens: how each firm actually builds its
technology.""",

10: """How a firm learns shapes what it can build later, and our three firms learned in three very
different ways. SAIC took its technology through joint ventures. That genuinely worked at first: a
careful study by Bai and co-authors finds the joint-venture link raised product quality by about
eight percent. But there was a hidden cost. The easy profit from the foreign brands removed the
pressure to develop its own technology — a former Chinese minister even called these rents “like
opium,” good in the short run and harmful in the long run. So when the electric era arrived, SAIC had
decent cars but no battery, power-electronics, or software platform of its own. BYD took the opposite
road. It built everything itself over almost three decades, from battery cells up to vehicle software,
often moving ahead of government policy rather than following it. That kind of deep, hands-on knowledge
is exactly what Teece says competitors cannot simply buy or copy. Geely found a third way: it bought
Volvo and turned the deal into real shared engineering, the CMA platform, and patent data confirm
genuine two-way co-creation rather than one-way copying. So we have three speeds and three depths of
learning. The next slide shows the trade-off, and what the shallow path cost SAIC in hard numbers.""",

11: """This slide sums up capability building as a trade-off between three things: speed, depth, and
independence. Read the three firms left to right. SAIC was the fastest to gain quality — the
joint-venture link added about eight percent — but that speed came shallow and dependent, and the
rents removed the pressure to innovate, so it had no platform of its own when the cycle turned. Geely
sits in a rare and strong place: fast and deep, because it turned the Volvo purchase into genuine
co-development, the CMA platform, with patent data confirming real two-way creation. BYD took the
slowest road but the deepest — three decades from battery cells to vehicle software — and that kind of
hands-on, path-dependent knowledge is exactly what Teece says rivals cannot copy. The cost of the
shallow path shows in the bar at the bottom, and the numbers are striking: SAIC's joint-venture plants
now run at just 14 to 37 percent of capacity. That is what happens when dependency hardens into a
capability deficit — when the technology shifts, there is no in-house platform to fall back on, and the
expensive factories sit half empty. The deeper lesson is that how you build capability decides who can
enter the EV era from strength. That sets up the fourth and final lens: the EV transition itself.""",

12: """The EV transition works like a structural audit — it tests every earlier decision at once. SAIC
is the most exposed, with its joint-venture plants running far below capacity. But we want to be fair
to it, because its own brand is making real progress. Electric sales grew thirty-three percent, to
1.6 million vehicles, and importantly with no direct vehicle subsidies, so that growth stands on a
commercial footing rather than on state money. It even launched a new brand with Huawei using a
first-of-its-kind semi-solid battery. So SAIC's future is a genuine race — falling joint-venture
income against a still-thin own-brand margin — and its state structure decides how fast it can run
that race. BYD is clearly the strongest: no petrol cars since 2022, four straight years as the world's
top maker of new-energy vehicles, and exports up one hundred and forty percent across 119 countries.
Its main pressure is margin, from the domestic price war. Geely is the in-between case — very strong
sales growth and a 51.5 percent electric share in the first half of 2025, but it leans on partners for
its platforms and carries loss-making brands. Same shock, three clearly different results — which
brings us to a direct answer to our central question.""",

13: """Here is our answer to the central question. Of the three models, BYD is the one most likely to
create long-term shareholder value. The evidence is consistent across everything we have shown: the
highest return on equity of the three firms, four straight years as the world's top EV maker, and a
five-point-six-billion-dollar capital raise that sovereign wealth funds chose to join — a strong
outside vote of confidence in the model. But please notice the careful wording in the box, because the
nuance matters for the exam and for the discussion. We are not claiming that building everything
yourself is automatically the best strategy. BYD wins because it combines two things at the same time:
concentrated, commercially-oriented founder control, and a self-financing balance sheet that stays
resilient when the market turns down. Governance and capital discipline working together — that is the
real driver, not vertical integration on its own. This also lines up with the broader finding by Allen
and co-authors that privately governed Chinese firms structurally outperform state-controlled ones.
And we stay honest: BYD's own return fell to thirteen percent in 2025 under the price war, so the model
is strong but not untouchable. From this single answer we can now draw three lessons that travel well
beyond this one industry.""",

14: """From these three cases we draw three lessons that reach beyond cars, into any fast-moving,
uncertain market. The first lesson is about capability: the way you build it decides how long it
lasts. Buying or being handed technology can give quick results, but it can also hollow out a firm so
that it owns nothing of its own when the technology changes — that was SAIC. Building it yourself, or
genuinely co-developing it, preserves that inner strength. The second lesson is about governance: it
is a first-order driver of how fast a firm can adapt. When control sits with commercial owners, the
firm moves quickly; when control is split across political interests and joint-venture partners, it
stalls — and when technology moves faster than your decisions, governance becomes the binding
constraint, the thing that holds you back. The third lesson is about capital structure: it decides who
survives a downturn. Sharing risk feels safe in good times but traps you in bad times; financing
yourself trades some speed for resilience; heavy borrowing trades safety for speed. Three lessons, one
underlying theme — structure decides. Let me now bring the whole argument together in the
conclusion.""",

15: """Let me bring the whole argument down to a single point. Across all four lenses, the evidence
converges on one finding: governance structure, more than the technology a firm starts with, decides
long-term value creation. The joint-venture model that organised Chinese carmaking for thirty years
did not lose to a better battery — it lost to a better way of allocating control and capital. BYD's
combination of founder control and self-financing proved the most adaptive; Geely adapted too, but at
a rising balance-sheet cost; and SAIC's state model, by its very design, serves goals beyond
shareholder value, which shows up as a permanent discount. The years 2020 to 2025 gave us something
very close to a natural experiment — one technology shock, three governance structures, and three
clearly different outcomes. So our closing line is this: when technology moves faster than firms can
decide, governance is no longer a footnote to strategy — it is strategy. Before we take your
questions, we want to be transparent about the limits of the study and about how we used AI in the
research.""",

16: """A short, honest word on limits, since questions usually follow. First, on scope: we study three
firms in one industry and one country, so we cannot claim a statistical law — these are deep case
studies, not a large sample. Second, the EV transition is still young, so today's ranking could shift
as the story keeps unfolding over the next few years. Third, we rely on the figures companies report,
and those reports mix currencies, renminbi and US dollars, which we had to reconcile carefully to keep
the comparison clean. And fourth, we deliberately left NIO out — it represents a fourth,
capital-market-funded model that would round out the picture but was beyond our team's scope. That
last point is also where future work could go. One could add NIO for a fuller typology of ownership
models, follow these same firms over a longer EV cycle to test whether the ranking holds, build a
proper numerical governance index and test it across other emerging markets, and study how the EU
tariffs reshape each firm's export strategy. Now, as the seminar specifically asks us to, we reflect
openly on how we used AI in this project.""",

17: """Now the AI reflection, which the seminar asks us to include. The first thing to say is that we
did not use a simple chatbot. We used Claude Code as a layered system. A main model did most of the
everyday work — reading sources, drafting, checking citations, building the comparison table — and a
stronger model was brought in only for the hard analytical passes, like comparing the three cases and
testing the logic of our argument. Around these two models we ran five small, specialised agents, each
with exactly one job: one to ingest sources into a structured form, one to search that knowledge base,
one to health-check it for broken links and contradictions, one to trace every factual claim back to
its primary source, and one to find supporting literature. Everything lived in a single shared git
repository, with one folder per company and a shared layer for common data like the EU regulation and
the IEA figures. Our simple rule kept three people in sync: pull before each session, push after.
Because the tool could read all three case wikis at once, we could compare the firms directly, without
emailing files back and forth. Next, what this setup actually added to the quality of the work.""",

18: """The single most valuable thing the tool did was catch real mistakes before they reached the
paper. It found three concrete data errors. First, an EU tariff figure we would have quoted as final
was actually only the provisional number — the correct, final figure is 35.3 percent. Second, a
net-profit value had been inflated about ten times by a currency-unit mix-up in a secondary source.
Third, an earnings-per-share figure for BYD had been built on the wrong share count. In every case we
traced the number back to the audited annual report and corrected it before it entered the draft. On
method, two habits made the real difference. Telling the model to act like a strict professor hunting
for overclaims, logical gaps, and citation errors gave much sharper feedback than asking for a
friendly review. And forcing it to quote the exact passage from the source for each fact is precisely
what caught those errors. We also rated every source by journal quality and by how directly it related
to our case, and we built our arguments only on the strongest sources. Finally, the honest limits and
the cost.""",

19: """We also want to be clear about what the tool could not do, because an honest reflection needs
both sides. It cannot open paywalled journals, so some of our reading stayed manual — for example, key
articles behind the university paywall. Geely's annual report PDFs were not machine-readable, which is
why that case leaned more heavily on web sources. On the stronger model we hit token and context
limits fairly quickly in long sessions, and the output was often too wordy, so it always needed
editing down; it even produced a few wrong reference links that we had to fix by hand. The biggest
practical lesson was that this is not a chat box — it took several hours to learn to use the agent
system well, and every single output needed a critical read before we trusted it. The cost itself was
modest, about twenty-one euros a month per person, with no extra per-query charges and no paid data
services. The line we held throughout the project is the one on the bar at the bottom: we used AI as
research infrastructure and as a strict reviewer, never as a ghostwriter. Every argument,
interpretation, and conclusion in the paper is our own. With that, here are our sources, and then we
are very happy to take your questions.""",

20: """These are our main sources, in APA seventh-edition style, split across the two columns. The
theoretical backbone comes from Shleifer and Vishny, Jensen and Meckling, Megginson and Netter, Luo
and Tung, and Teece. The empirical evidence on China comes from Bai and co-authors, Howell, Holmes,
and Allen. The company figures come from the audited annual reports of all three firms, together with
the EU regulation and the IEA Global EV Outlook. The full reference list is in the written paper.
Thank you very much for your attention — we are now happy to take your questions.""",
}

for idx, txt in N.items():
    prs.slides[idx - 1].notes_slide.notes_text_frame.text = " ".join(txt.split())

prs.save(F)
print("notes updated; slides:", len(prs.slides))
