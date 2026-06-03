# -*- coding: utf-8 -*-
"""
Generate BYD Seminararbeit Entwurf as PDF using ReportLab.
Output: BYD_Entwurf.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib import colors
import os

# ── Output path ──────────────────────────────────────────────────────────────
OUT = os.path.join(os.path.dirname(__file__), "BYD_Entwurf.pdf")

# ── Colours ───────────────────────────────────────────────────────────────────
DARK   = HexColor("#1a1a2e")
ACCENT = HexColor("#16213e")
LIGHT  = HexColor("#f5f5f5")
MID    = HexColor("#d0d0d0")

# ── Document ──────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUT,
    pagesize=A4,
    leftMargin=3*cm,
    rightMargin=2.5*cm,
    topMargin=2.5*cm,
    bottomMargin=2.5*cm,
    title="BYD – Entwurf Seminararbeit",
    author="Batu Maus",
)

W = A4[0] - 3*cm - 2.5*cm   # usable text width

# ── Styles ────────────────────────────────────────────────────────────────────
styles = getSampleStyleSheet()

def S(name, **kw):
    return ParagraphStyle(name, **kw)

normal = S("N", fontName="Times-Roman",  fontSize=11, leading=16,
           alignment=TA_JUSTIFY, spaceAfter=6)
normal_left = S("NL", fontName="Times-Roman", fontSize=11, leading=16,
                alignment=TA_LEFT, spaceAfter=6)
indent = S("IND", fontName="Times-Roman", fontSize=11, leading=16,
           alignment=TA_JUSTIFY, leftIndent=0.6*cm, spaceAfter=6)
footnote = S("FN", fontName="Times-Roman", fontSize=9, leading=12,
             alignment=TA_JUSTIFY, spaceAfter=4)
h1 = S("H1", fontName="Times-Bold", fontSize=16, leading=22,
        alignment=TA_LEFT, spaceAfter=10, spaceBefore=18,
        textColor=DARK)
h2 = S("H2", fontName="Times-Bold", fontSize=13, leading=18,
        alignment=TA_LEFT, spaceAfter=8, spaceBefore=14,
        textColor=DARK)
h3 = S("H3", fontName="Times-Bold", fontSize=11, leading=16,
        alignment=TA_LEFT, spaceAfter=6, spaceBefore=10)
title_s = S("TIT", fontName="Times-Bold", fontSize=22, leading=28,
             alignment=TA_CENTER, spaceAfter=8, textColor=DARK)
subtitle_s = S("SUB", fontName="Times-Roman", fontSize=13, leading=18,
               alignment=TA_CENTER, spaceAfter=6)
meta_s = S("META", fontName="Times-Roman", fontSize=11, leading=16,
           alignment=TA_CENTER, spaceAfter=4, textColor=HexColor("#555555"))
small_bold = S("SB", fontName="Times-Bold", fontSize=9, leading=12,
               alignment=TA_CENTER)
small = S("SM", fontName="Times-Roman", fontSize=9, leading=12,
          alignment=TA_CENTER)
caption = S("CAP", fontName="Times-Italic", fontSize=9, leading=12,
            alignment=TA_LEFT, spaceAfter=4)
bold_inline = S("BI", fontName="Times-Bold", fontSize=11, leading=16,
                alignment=TA_LEFT, spaceAfter=4)
italic = S("IT", fontName="Times-Italic", fontSize=11, leading=16,
           alignment=TA_JUSTIFY, spaceAfter=6)

# ── Helper for tables ────────────────────────────────────────────────────────
def cell(text, bold=False, center=False, size=9, color=black, bg=None):
    fn = "Helvetica-Bold" if bold else "Helvetica"
    al = TA_CENTER if center else TA_LEFT
    return Paragraph(text, ParagraphStyle("c", fontName=fn, fontSize=size,
                                          leading=13, alignment=al,
                                          textColor=color))

def header_row(cells):
    return [cell(c, bold=True, center=True, color=white) for c in cells]

TABLE_BASE = [
    ("BACKGROUND",  (0,0), (-1,0), ACCENT),
    ("TEXTCOLOR",   (0,0), (-1,0), white),
    ("ALIGN",       (0,0), (-1,-1), "LEFT"),
    ("VALIGN",      (0,0), (-1,-1), "MIDDLE"),
    ("FONTNAME",    (0,0), (-1,0), "Helvetica-Bold"),
    ("FONTSIZE",    (0,0), (-1,-1), 9),
    ("ROWBACKGROUNDS", (0,1), (-1,-1), [white, LIGHT]),
    ("GRID",        (0,0), (-1,-1), 0.4, MID),
    ("LEFTPADDING", (0,0), (-1,-1), 6),
    ("RIGHTPADDING",(0,0), (-1,-1), 6),
    ("TOPPADDING",  (0,0), (-1,-1), 5),
    ("BOTTOMPADDING",(0,0), (-1,-1), 5),
]

# ── Story ─────────────────────────────────────────────────────────────────────
story = []
sp = Spacer(1, 0.4*cm)
sp2 = Spacer(1, 0.8*cm)
hr = HRFlowable(width="100%", thickness=0.5, color=MID, spaceAfter=8)

def add(item):  story.append(item)
def P(text, style=normal): story.append(Paragraph(text, style))
def H1(text): story.append(Paragraph(text, h1)); story.append(hr)
def H2(text): story.append(Paragraph(text, h2))
def H3(text): story.append(Paragraph(text, h3))
def SP(n=1):  story.append(Spacer(1, n*0.4*cm))

# ─────────────────────────────────────────────────────────────────────────────
# TITLE PAGE
# ─────────────────────────────────────────────────────────────────────────────
story.append(Spacer(1, 3*cm))
P("Seminar: China Strategies in the Automotive Industry", subtitle_s)
SP(2)
P("BYD Company Limited", title_s)
SP()
P("Das vertikal integrierte Privatunternehmen als Governance-Modell\nim chinesischen Automobilmarkt", subtitle_s)
SP(3)
story.append(HRFlowable(width="60%", thickness=1, color=ACCENT, spaceAfter=20))
SP()
P("Erstellt von: Batu Maus", meta_s)
P("Betreuer: Edoardo Pilla", meta_s)
P("Datum: Juni 2026", meta_s)
SP(2)
P("<i>Entwurf — BYD-Abschnitte (Kapitel 2.2 · 3.2 · 4.2 · 5.2)</i>", meta_s)
SP()
P("<i>Gesamtarbeit gemeinsam mit Beiträgen zu SAIC Motor und Geely ZGH</i>", meta_s)
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 1. EINLEITUNG
# ─────────────────────────────────────────────────────────────────────────────
H1("1  Einleitung")
H2("1.1  Forschungsfrage und Relevanz")
P("""Der chinesische Automobilmarkt befindet sich in einem strukturellen Umbruch. Mit einer NEV-Penetration
von 41% im Jahr 2024 — gegenüber 32% im Vorjahr — und der Überschreitung der 50%-Marke im monatlichen
Absatz im Juli 2024 (Roland Berger, 2024) vollzieht sich der Übergang zur Elektromobilität schneller als
in jedem anderen Großmarkt. Bis 2040 projiziert Roland Berger (2024) einen BEV-Anteil von 70–85% am
chinesischen Neuwagenabsatz. In diesem Transformationskontext treten drei fundamental verschiedene
Unternehmensmodelle in unmittelbaren Wettbewerb miteinander.""")
P("""Die zentrale Forschungsfrage dieser Seminararbeit lautet: <i>How can a successful automotive company
be built in China — and which governance and financing structure is most likely to create long-term
shareholder value?</i> Zur Beantwortung werden drei chinesische Automobilkonzerne entlang vier
analytischer Dimensionen verglichen: Governance, Finanzierung (Financing), Kompetenzaufbau
(Capability Building) und langfristige Tragfähigkeit (Long-term Viability).""")

H2("1.2  Die drei Modelle im Überblick")
P("""<b>SAIC Motor</b> repräsentiert das JV-zentrierte SOE-Modell: Die Shanghai SASAC kontrolliert
63,27% der Anteile; das Kerngeschäft wird in 50/50-Joint Ventures mit Volkswagen (seit 1984) und
General Motors (seit 1997) betrieben. Strategische Entscheidungen erfordern den Konsens beider
JV-Partner.""")
P("""<b>BYD</b> steht für das privat-vertikale Modell: Gründer Wang Chuanfu führt als Chairman und CEO
ein Unternehmen, das bewusst auf Joint Ventures verzichtet und alle kritischen Wertschöpfungsstufen —
Batteriezellen, Halbleiter, Software, Fahrzeuge — intern kontrolliert.""")
P("""<b>Geely (ZGH)</b> verkörpert das M&amp;A-getriebene Privatmodell: Li Shufu kontrolliert ca. 76%
über Zhejiang Geely Holding und hat durch die Volvo-Übernahme (2010), Lotus, LEVC und ein Smart-JV
mit Mercedes-Benz ein internationales Marken-Portfolio aufgebaut.""")

H2("1.3  Methodik")
P("""Die Analyse folgt einem strukturierten Fallvergleich (structured focused comparison; George &amp;
Bennett, 2005) entlang vier Dimensionen. Der Schwerpunkt liegt auf quantitativen Primärquellen
(geprüfte Jahresberichte), ergänzt durch peer-reviewed Literatur aus A*/A-geranken Fachzeitschriften.
Alle Finanzdaten für BYD stammen aus den HKEx-Jahresberichten 2024 und 2025, geprüft von Ernst &amp;
Young Hua Ming LLP. Der vorliegende Entwurf deckt die BYD-Abschnitte ab; die SAIC- und Geely-Abschnitte
werden von den Kommilitonen beigesteuert.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 2. GOVERNANCE
# ─────────────────────────────────────────────────────────────────────────────
H1("2  Governance")
P("""<i>Leitfrage: Wer kontrolliert das Unternehmen — und welche Konsequenzen hat das für strategische
Entscheidungsgeschwindigkeit und Zielfunktion?</i>""", italic)
SP()

H2("2.1  SAIC Motor: State-owned JV Governance")
P("[Abschnitt von Kommilitonin Julia — SAIC Motor]", footnote)
SP()

H2("2.2  BYD: Founder-led Private Governance")
P("""BYD wurde am 10. Februar 1995 von Wang Chuanfu als Shenzhen BYD Battery Company Limited
gegründet. Wang Chuanfu ist seither Chairman und Chief Executive Officer zugleich und hält per
Mitte 2025 direkt ca. 16,90% der ausgegebenen Aktien; unter Einschluss seines Asset Management
Plans entfallen auf ihn ca. 29% der in Shenzhen notierten Anteile (HKEX, 2025). Die Konzentration
von Gründerstatus, Eigentümerrolle und operativer Führung in einer Person entspricht dem von Jensen
&amp; Meckling (1976) als Agency-Kosten-minimierend beschriebenen Idealtypus: Der Prinzipal-Agenten-Konflikt
zwischen Eigentümern und Management entfällt, weil beide Rollen personell verschmolzen sind.""")
P("""Im Gegensatz zu SAIC Motor, dessen Kontrollkaskade über Shanghai SASAC → SAIC Group → Board
verläuft (drei Ebenen), ist BYDs Entscheidungsstruktur CEO-zentriert und einschichtig. Strategische
Grundsatzentscheidungen — die Einstellung der ICE-Produktion im März 2022, die aggressiven
Preissenkungen von bis zu 30% im Mai 2024 oder der Eintritt in die Halbleiterfertigung — wurden
ohne JV-Konsens oder Holding-Abstimmungsrunden getroffen. Wang Chuanfu selbst formulierte:
<i>„A fast decision-making mechanism is one of BYD's important advantages."</i> (BYD AR2024)""")
P("""Staatliche Einflussnahme ist bei BYD auf der strategischen Ebene strukturell abwesend, obwohl
das Unternehmen 2024 Subventionen in Höhe von RMB 10,41 Mrd. empfangen hat (BYD AR2024). Die
Subventionen sind produktionsgebunden und nicht an Mitspracherechte geknüpft. Dies unterscheidet BYD
fundamental von SAIC Motor, wo die CCP-Einbindung über das Parteikomitee institutionell formalisiert
ist und politische Zielfunktionen (Beschäftigung, Technologietransfer) mit kommerziellen konkurrieren —
ein Muster, das Shleifer &amp; Vishny (1994, S. 996) als inhärentes Charakteristikum staatlicher
Unternehmenskontrolle beschreiben.""")
P("""Zhang et al. (2025) bestätigen diesen Befund empirisch für chinesische High-Tech-Unternehmen
in einem Panel von 2008–2021: Founder Control ist hoch signifikant positiv mit Durchbruchsinnovationen
assoziiert (Koeffizient FC = 0,901, p&lt;0,001, Tabelle 3). Die optimale CEO-Amtszeit liegt gemäß
ihrer Schätzung bei ca. 12,8 Jahren (Tabelle 15). Wang Chuanfus tatsächliche Amtszeit übersteigt
diesen Richtwert deutlich (seit 1995), wobei die Autoren anmerken, dass bei echter Gründer-Kontrolle
der positive Effekt über das lineare Optimum hinaus robust bleibt. Allen et al. (2024) ergänzen
komplementär: In China notierte A-Shares von staatlich kontrollierten Unternehmen underperformen
jährlich um ca. 15%, während von privaten Gründern geführte Unternehmen dieser Abweichung nicht
unterliegen.""")
P("""Vertikale Integration ist bei BYD nicht nur eine Kostenoptimierungsstrategie, sondern Ausdruck
einer Governance-Philosophie: Durch die Internalisierung kritischer Wertschöpfungsstufen (Batterie,
Halbleiter, Software) behält das Management die vollständige strategische Autonomie und ist keinem
Partner gegenüber rechenschaftspflichtig. Dies korrespondiert mit Jensen &amp; Mecklings (1976) Prinzip,
dass Eigentümer-Manager strategische Kontrolle maximieren, um Agency Costs zu minimieren.""")

H2("2.3  Geely: M&A-driven Private Governance")
P("[Abschnitt von Kommilitonin — Geely ZGH]", footnote)
SP()

H2("2.4  Vergleichssynthese")
P("""Die drei Governance-Modelle unterscheiden sich fundamental in ihrer Kontrolllkaskade,
Entscheidungsgeschwindigkeit und Zielfunktion. Tabelle 1 fasst die Kernmerkmale zusammen.""")
SP()

# Table 2.4
tdata = [
    header_row(["Merkmal", "SAIC Motor (SOE/JV)", "BYD (Privat/Vertikal)", "Geely ZGH (Privat/M&A)"]),
    [cell("Ultimativer Kontrolleur"), cell("Shanghai SASAC"), cell("Wang Chuanfu"), cell("Li Shufu")],
    [cell("Eigentümerstruktur"), cell("SAIC Group 63,27% (staatl.)"), cell("~17% direkt + AMP ~29%"), cell("ZGH ~76% (privat)")],
    [cell("Staatseinfluss"), cell("Hoch"), cell("Gering"), cell("Gering")],
    [cell("Entscheidungsgeschw."), cell("Niedrig (JV-Konsens)"), cell("Hoch (CEO-zentriert)"), cell("Mittel (Portfolio)")],
    [cell("Zielfunktion"), cell("Politisch + kommerziell"), cell("Kommerziell"), cell("Kommerziell")],
    [cell("Akademischer Anker"), cell("Fan et al. (2007, JFE);\nShleifer & Vishny (1994)"), cell("Jensen & Meckling (1976);\nZhang et al. (2025)"), cell("Balcet et al. (2012)")],
]
t = Table(tdata, colWidths=[3.2*cm, 3.8*cm, 4.2*cm, 4.2*cm])
t.setStyle(TableStyle(TABLE_BASE))
story.append(t)
story.append(Paragraph("<i>Tabelle 1: Governance-Vergleich der drei Cases.</i>", caption))
SP()
P("""<b>Synthese:</b> Die empirische Evidenz deutet darauf hin, dass das privat-vertikale Modell
(BYD) die höchste strategische Anpassungsgeschwindigkeit aufweist, da weder JV-Konsens noch
staatliche Zielfunktionen die Entscheidungsfindung verlangsamen. Jensen &amp; Meckling (1976) liefern
die theoretische Grundlage: minimale Agency Costs durch Identität von Eigentümer und Manager.
Fan et al. (2007) zeigen die Kehrseite für SAIC: politisch besetzte CEOs performen im Median 18%
schlechter nach dem Börsengang als kommerzielle Manager.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 3. FINANCING
# ─────────────────────────────────────────────────────────────────────────────
H1("3  Financing")
P("""<i>Leitfrage: Wer trägt welches Kapitalrisiko — und zu welchen Kosten?</i>""", italic)
SP()

H2("3.1  SAIC Motor: JV Capital Model")
P("[Abschnitt von Kommilitonin Julia — SAIC Motor]", footnote)
SP()

H2("3.2  BYD: Vertical Integration Financing")
P("""BYDs Finanzierungsmodell basiert primär auf selbst erwirtschafteten Mitteln. Der operative
Cashflow betrug 2024 RMB 133,5 Mrd. bei einem Kassenbestand von RMB 154,9 Mrd. (BYD AR2024).
Die zinstragenden Verbindlichkeiten beliefen sich auf lediglich RMB 28,58 Mrd. — 4,9% der
Gesamtverbindlichkeiten, strukturell der niedrigste Wert unter den großen chinesischen OEMs.
Die Gearing Ratio war per Ende 2024 mit -36% negativ: BYD hielt mehr Kassenbestand als
zinstragenden Schulden.""")
P("""Die Finanzierungslogik der vertikalen Integration ist folgende: FinDreams Battery (Batterietochter)
liefert Zellen an BYDs OEM-Division zu internen Verrechnungspreisen, die keine Drittanbieter-Marge
einschließen. BYD Semiconductor versorgt die Fahrzeugproduktion mit IGBT- und SiC-Chips. Diese
interne Wertschöpfungslogik erklärt, wie eine Bruttomarge von 19% trotz intensivem Preiskrieg
gehalten werden konnte: Wettbewerber mit externen Lieferketten geben Lieferantenmarge ab, die BYD
intern behält. Hao &amp; Hao (2026) belegen empirisch, dass BYDs Bruttomargen selbst bei einem
massiven Marktanteilsverlust (von 85,2% auf 10,6% im Beispielmarkt Xi'an) stabil bei 19–23% blieben.""")
P("""Tabelle 2 zeigt die Finanzkennzahlen der Jahre 2021–2025 aus den geprüften Jahresberichten.""")
SP()

# Table financials
tdata2 = [
    header_row(["Jahr", "Umsatz\n(RMB Mrd.)", "Nettogewinn\n(RMB Mrd.)", "Bruttomarge", "Nettomarge", "Gearing"]),
    [cell("2021"), cell("216,1"), cell("3,0"), cell("12%"), cell("1,4%"), cell("-15%")],
    [cell("2022"), cell("424,1"), cell("16,6"), cell("16%"), cell("3,9%"), cell("-26%")],
    [cell("2023"), cell("602,3"), cell("30,0"), cell("19%"), cell("5,0%"), cell("-44%")],
    [cell("2024"), cell("777,1"), cell("40,3"), cell("19%"), cell("5,2%"), cell("-36%")],
    [cell("2025"), cell("804,0"), cell("32,6"), cell("18%"), cell("4,1%"), cell("+25%")],
]
t2 = Table(tdata2, colWidths=[1.6*cm, 2.8*cm, 2.8*cm, 2.2*cm, 2.2*cm, 1.8*cm])
t2.setStyle(TableStyle(TABLE_BASE + [("ALIGN", (1,1), (-1,-1), "CENTER")]))
story.append(t2)
story.append(Paragraph(
    "<i>Tabelle 2: BYD Finanzkennzahlen 2021–2025. Quelle: BYD AR2024 und AR2025 (E&amp;Y-geprüft, HKEx).</i>",
    caption))
SP()
P("""Der Return on Equity (ROE) für 2024 beläuft sich auf ca. 21,7% (eigene Berechnung:
Nettogewinn RMB 40,254 Mrd. / Nettvermögen RMB 185,251 Mrd.; BYD AR2024). Trotz der moderaten
Nettomarge von 5,2% ergibt sich ein hoher ROE, da der Kapitalumschlag hoch ist: Der Umsatz
beträgt ca. das Vierfache des Eigenkapitals. Im Vergleich: SAICs ROE lag 2024 bei 0,58%
(SAIC AR2024, direkt ausgewiesen).""")
P("""Staatliche Subventionen spielen eine bedeutende, aber nicht dominante Rolle. 2024 erhielt
BYD Subventionen von RMB 10,41 Mrd. — 25,9% des Nettogewinns (BYD AR2024). Das Kiel Institut
für Weltwirtschaft (2024, berichtet durch Bloomberg) schätzt die kumulierten direkten Staatsbeihilfen
2020–2022 auf €3,4 Mrd. Masiero et al. (2016) kommen auf Basis von Interview-Primärdaten zu dem
Schluss, dass Subventionen und vertikale Integrationsstrategie komplementär sind: Subventionen
beschleunigten den Aufbau der Skalierungsinfrastruktur, sind aber nicht die Ursache des
Kostenvorteils. Als regulatorischen Proxy bestätigt der EU-Ausgleichszoll von 17,0% auf BYD-BEVs
(EU-Verordnung 2024/2754) — der niedrigste der drei untersuchten OEMs (SAIC: 35,3%; Geely: 18,8%)
— eine vergleichsweise geringere staatliche Subventionsintensität.""")
P("""Das Finanzierungsbild verschiebt sich 2025: Die Bruttomarge sank auf 18%, der Nettogewinn
fiel um 19% auf RMB 32,6 Mrd. (BYD AR2025). Die Gearing Ratio wechselte von -36% auf +25% —
BYD ist erstmals seit Jahren netto verschuldet. Treiber sind massive Kapitalausgaben für die
globale Fabrikexpansion (Ungarn, Türkei, Brasilien, Thailand) und eine Kapitalerhöhung von
US$5,6 Mrd. im März 2025 unter Beteiligung internationaler Staatsfonds. Das Finanzierungsmodell
verschiebt sich damit von reiner Innenfinanzierung zu einem Hybridmodell, das zunehmend externe
Kapitalquellen einbezieht.""")

H2("3.3  Geely: Acquisition Financing")
P("[Abschnitt von Kommilitonin — Geely ZGH]", footnote)
SP()

H2("3.4  Vergleichssynthese")
SP()

tdata3 = [
    header_row(["Kennzahl", "SAIC Motor", "BYD", "Geely Auto"]),
    [cell("Hauptkapitalquelle"), cell("JV-Equity-Income (hist.)"), cell("Operativer CF + Subventionen"), cell("Leverage + Kapitalmarkt")],
    [cell("Risikotraeger"), cell("50/50 mit JV-Partner"), cell("Eigenkapital (konzentriert)"), cell("Fremdkapitalgeber")],
    [cell("Umsatz 2024 (RMB Mrd.)"), cell("627,6 (-15,7%)"), cell("777,1 (+29,0%)"), cell("~243 (+32%)")],
    [cell("Nettogewinn 2024"), cell("1,7 Mrd. (-88,2%)"), cell("40,3 Mrd. (+34,0%)"), cell("16,8 Mrd. (+240%)")],
    [cell("Nettomarge 2024"), cell("0,27%"), cell("5,2%"), cell("~6,9%")],
    [cell("ROE 2024"), cell("0,58%"), cell("~22% (berechnet)"), cell("k.A.")],
    [cell("EU-Zoll (BEV)"), cell("35,3%"), cell("17,0%"), cell("18,8%")],
    [cell("F&E 2024 (RMB Mrd.)"), cell("35,2 (3,6%)"), cell("54,2 (7,0%)"), cell("k.A.")],
]
t3 = Table(tdata3, colWidths=[4.2*cm, 3.5*cm, 3.5*cm, 4.2*cm])
t3.setStyle(TableStyle(TABLE_BASE))
story.append(t3)
story.append(Paragraph(
    "<i>Tabelle 3: Financing-Vergleich. Quellen: SAIC AR2024 (PwC), BYD AR2024 (E&amp;Y), Geely-Daten, EU-Verordnung 2024/2754.</i>",
    caption))
SP()
P("""<b>Synthese:</b> BYDs internes Finanzierungsmodell erzeugt den höchsten absoluten ROE der
drei Cases (ca. 22%). Das JV-Modell SAICs — historisch kapitaleffizient — erweist sich bei
Marktrückgang als Haftungsrisiko: 2024 trägt SAIC 50% der SAIC-GM-Abschreibungen ohne
Gegenmittel, was den bereinigten Nettogewinn ins Negative drückt (RMB -5,4 Mrd. ex
Non-Recurring; SAIC AR2024). Geelys Leverage-Modell ist wachstumsstark, aber
kapitalmarktabhängig.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 4. CAPABILITY BUILDING
# ─────────────────────────────────────────────────────────────────────────────
H1("4  Capability Building")
P("""<i>Leitfrage: Wie wurden technologische Kernkompetenzen aufgebaut — und reichen sie
für die EV-Ära?</i>""", italic)
SP()

H2("4.1  SAIC Motor: JV-based Technology Transfer")
P("[Abschnitt von Kommilitonin Julia — SAIC Motor]", footnote)
SP()

H2("4.2  BYD: Internal Build")
P("""BYDs Kompetenzaufbaupfad ist ein Paradebeispiel des von Teece, Pisano &amp; Shuen (1997)
entwickelten Dynamic-Capabilities-Rahmens: Das Unternehmen hat über drei Jahrzehnte intern
Kompetenzen aufgebaut, die aufgrund ihrer Pfadabhängigkeit und ihres taciten Charakters für
Wettbewerber schwer imitierbar sind. Williamson (1971) liefert die transaktionskostentheoretische
Grundlage: Wenn Märkte unsicher und Verträge unvollständig sind, überwiegen die Vorteile der
Internalisierung; Harrigan (1985) ergänzt, dass vertikale Integration besonders bei strategisch
kritischen Inputs mit hoher Umweltunsicherheit vorteilhaft ist — beides trifft auf Batteriezellen
und Leistungshalbleiter zu.""")

H3("4.2.1  Blade Battery (LFP-Zellchemie und Cell-to-Pack)")
P("""Die 2020 eingeführte Blade Battery kombiniert Lithium-Eisenphosphat-Chemie (LFP, kein
Kobalt) mit einer Cell-to-Pack-Konstruktion, die das konventionelle Batteriepack-Gehäuse
eliminiert und die volumetrische Raumnutzung um mehr als 50% gegenüber konventionellen
LFP-Packs steigert. Sie besteht den Nageltest (nail penetration test) ohne thermisches Durchgehen
— ein proprietäres Sicherheitsmerkmal, das kein externer Lieferant in dieser Form bietet. BYD
hält vollständiges IP-Eigentum an der Konstruktion (BYD AR2024). Durch FinDreams Battery
liefert BYD zugleich als zweitgrößter globaler Batteriehersteller an externe OEMs: Marktanteil
2024 global 17,2% (CATL: 37,9%), Installationsvolumen 153,7 GWh (+37,5% YoY; CnEVPost/SNE
Research, 2025). Kunden sind u.a. Tesla, Toyota, Ford und Kia.""")
P("""Für 2026 hat BYD die zweite Generation der Blade Battery angekündigt (Vorstellung
5. März 2026): Flash Charging von 10% auf 70% Ladezustand in 5 Minuten, auf 97% in
9 Minuten bei Normaltemperatur; Super e-Platform als weltweit erste serienmäßige
1.000-V-Hochvolt-Vollfahrzeug-Architektur (BYD AR2025). Diese technologische Roadmap
suggeriert eine langfristige Kapitalrendite auf die kumulierten F&amp;E-Investitionen.""")

H3("4.2.2  IGBT-Halbleiter: BYD Semiconductor")
P("""IGBT-Chips und SiC-Module stellen ca. 7–10% der Gesamtherstellungskosten eines EVs dar
und sind nach der Batterie die teuerste Einzelkomponente (TechCrunch, 2020; Nomad Semi, 2024).
BYD gründete BYD Semiconductor 2002 und startete die IGBT-Eigenentwicklung 2005; IGBT 1.0
erschien 2009, IGBT 6.0 (2022) gilt als auf dem Niveau von Infineon. Während der globalen
Chipknappheit 2021–2022 konnte BYD als einziger chinesischer OEM die Produktion steigern,
während Ford und GM Fertigungslinien stoppen mussten (Nomad Semi, 2024). Dies ist ein konkreter,
messbarer Vorteil der vertikalen Integration: Liefersicherheit in Krisenzeiten als strategische
Option, die externe Beschaffung nicht bieten kann.""")

H3("4.2.3  Software: Xuanji, DiLink, DiPilot")
P("""Mit der Xuanji-Architektur (Large-Model AI, zentralisierte Fahrzeugsteuerung), DiLink
(OTA-Konnektivität, App-Ökosystem) und DiPilot 5.0 (Multi-Sensor-Fusion: Kamera,
Millimeterwellenradar, Ultraschall) hat BYD eine proprietäre Software-Plattform entwickelt.
Wang Chuanfu bezeichnete 2024 die Software-Transformation als zweite strategische Gründungsphase
des Unternehmens. Der 2025 vollzogene Rollout von DiPilot (intern „God's Eye") auf alle fünf
Fahrzeugnetzwerke und vier Marken belegt die systemische Integrationstiefe (BYD AR2025).""")

H3("4.2.4  F&E-Investitionsintensität")
P("""BYD investierte 2024 RMB 54,2 Mrd. in F&amp;E (+35,7% YoY) — dies übersteigt den
Nettogewinn desselben Jahres (RMB 40,3 Mrd.) und entspricht ca. 7,0% des Umsatzes,
dem ca. 2,1-Fachen des NEV-Branchenmedians von 3,1% (BYD AR2024). Über >120.000
F&amp;E-Ingenieure (AR2024) meldet BYD täglich ca. 32 Patentanmeldungen; die Gesamtzahl
überstieg >48.000 Anmeldungen und >30.000 erteilte Patente (The Driven, 2024).
Im batterietechnologischen Spezialvergleich hält BYD 1.117 Batterie-Patente gegenüber
Teslas 97 (PatSnap, 2022). In 13 der vergangenen 14 Jahre übertrafen BYDs F&amp;E-Ausgaben
den jeweiligen Nettogewinn — ein strukturelles Signal für langfristige Reinvestitionsdisziplin
über kurzfristige Ausschüttungsoptimierung hinaus.""")
P("""Der Vergleich mit dem JV-Transfer-Modell ist aufschlussreich: Bai et al. (2025) zeigen,
dass JV-Zugehörigkeit in China nur 8,3% Qualitätsverbesserung generierte — <i>„meaningful
but modest."</i> Tacites Wissen, das durch interne Entwicklung entsteht (Teece et al. 1997),
ist nicht transferierbar und nicht imitierbar; kodifizierbares JV-Wissen hingegen schon
(Inkpen &amp; Beamish, 1997). BYDs Blade Battery und IGBT-Kompetenz entsprechen dem
taciten Typ — sie wurden durch Jahrzehnte betriebsspezifischer Lernkurven aufgebaut und
können nicht durch einen einzelnen Lizenzvertrag repliziert werden.""")

H2("4.3  Geely: Acquisition-based Capability Building")
P("[Abschnitt von Kommilitonin — Geely ZGH]", footnote)
SP()

H2("4.4  Vergleichssynthese")
SP()

tdata4 = [
    header_row(["Merkmal", "SAIC (JV-Transfer)", "BYD (Intern)", "Geely (Akquisition)"]),
    [cell("Kompetenzquelle"), cell("JV-Spillover (VW, GM)"), cell("Eigenentwicklung"), cell("M&A (Volvo 2010)")],
    [cell("Geschwindigkeit"), cell("Mittel"), cell("Langsam, aber tief"), cell("Schnell")],
    [cell("EV-Plattform-Eigenst."), cell("Gering"), cell("Hoch (Blade, e-Plat. 3.0)"), cell("Mittel (CMA-Ko-Entw.)")],
    [cell("Nachhaltigkeit"), cell("Fraglich"), cell("Hoch (tacit, nicht imitierb.)"), cell("Integrationsabhaengig")],
    [cell("R&D 2024 (RMB Mrd.)"), cell("35,2 (+7,3%)"), cell("54,2 (+35,7%)"), cell("k.A. (+600% post-Volvo)")],
    [cell("Akademischer Befund"), cell("8,3% Spillover, modest\n(Bai et al. 2025, AER)"), cell("Marginstab. trotz -74pp\n(Hao & Hao 2026, IJIO)"), cell("Patent-Konv. belegt\n(Konda et al. 2022)")],
]
t4 = Table(tdata4, colWidths=[3.6*cm, 3.7*cm, 4.0*cm, 4.1*cm])
t4.setStyle(TableStyle(TABLE_BASE))
story.append(t4)
story.append(Paragraph(
    "<i>Tabelle 4: Capability-Building-Vergleich. Quellen: AR2024 (SAIC/BYD); Bai et al. (2025); Hao &amp; Hao (2026); Konda et al. (2022).</i>",
    caption))
SP()
P("""<b>Synthese:</b> Der interne Aufbaupfad (BYD) erzeugt tacites Wissen, das schwerer imitierbar
ist als JV-Transfer-Wissen (SAIC) oder akquisitionsbasiertes Wissen (Geely). Die Kehrseite ist
Geschwindigkeit: BYD benötigte 25 Jahre, um die aktuelle Technologietiefe zu erreichen. Teece
et al. (1997) würden dies als strategische Stärke bewerten: Kompetenzrenten, die auf
Pfadabhängigkeit beruhen, sind strukturell stabiler als Renten aus lizenzierbarem Wissen.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 5. LONG-TERM VIABILITY
# ─────────────────────────────────────────────────────────────────────────────
H1("5  Long-term Viability")
P("""<i>Leitfrage: Welches Modell überlebt den EV-Übergang — und schafft langfristig
Shareholder Value?</i>""", italic)
SP()

H2("5.1  SAIC Motor")
P("[Abschnitt von Kommilitonin Julia — SAIC Motor]", footnote)
SP()

H2("5.2  BYD: Marktführerschaft, Exportdurchbruch und Margendruck")
P("""BYD steht unter den drei untersuchten Modellen mit der stärksten strukturellen Position
im Übergang zur EV-Ära. Vier Dimensionen belegen dies.""")

H3("5.2.1  Marktführerschaft China")
P("""BYD verkaufte 2024 global 4,27 Mio. NEVs (+40%) und hielt damit 34,1% des chinesischen
NEV-Markts — mehr als die fünf nächsten Konkurrenten zusammen (CAAM, 2025). Die Grundlage
dieser Dominanz — Blade Battery, proprietäre IGBT-Chips, intern entwickelte Software — ist
nicht durch externe Lieferantenbeziehungen replizierbar. Der Meilenstein des zehnmillionsten
NEV vom Band im November 2024 markiert BYD als weltweit erstes Unternehmen mit diesem
kumulativen Produktionsvolumen (BYD AR2024).""")

H3("5.2.2  Exportdurchbruch und EU-Zoll")
P("""Die Auslandsverkäufe stiegen 2024 auf 417.200 Einheiten (+71,9%; BYD AR2024) und 2025
auf erstmals über 1 Mio. Einheiten (+140%); BYD ist damit der führende NEV-Exporteur Chinas
(BYD AR2025). Die Präsenz umfasst 119 Länder, mit Lateinamerika-Führerschaft und europäischem
Durchbruch (UK, Spanien, Italien, Deutschland, Frankreich alle mit Verdoppelung+). Der
EU-Ausgleichszoll von 17,0% auf BYD-BEVs (EU-Verordnung 2024/2754) ist der niedrigste der
drei Cases und begrenzt die Exportbelastung relativ zu SAIC (45,3% Gesamtzoll) und Geely
(28,8% Gesamtzoll). BYD begegnet dem Zoll durch lokale Produktion: Das Werk in Ungarn eröffnete
im Oktober 2025, ein türkisches Werk produziert ab März 2026.""")

H3("5.2.3  Margendruck und finanzielle Resilienz (2025)")
P("""Das Jahr 2025 zeigt erste Spannungen: Die Bruttomarge sank auf 18% (von 19%), der
Nettogewinn fiel um 19% auf RMB 32,6 Mrd. (BYD AR2025). Der EV-Preiskrieg in China —
BYD hatte im Mai 2024 Preise um bis zu 30% gesenkt — belastet auch vertikal integrierte
Hersteller, wenn die Preiselastizität die Volumensteigerung nicht vollständig kompensiert.
Die Gearing Ratio wechselte von -36% auf +25%, was den Kapitalaufwand der globalen
Expansion widerspiegelt.""")
P("""Gleichzeitig ist BYD fundamental profitabel und hat Zugang zu globalem Kapital:
Die Kapitalerhöhung von US$5,6 Mrd. im März 2025 unter Beteiligung internationaler
Staatsfonds und Langfristinvestoren signalisiert Vertrauen in die Strategie. Die Gearing-Erhöhung
ist durch die Expansionsstrategie erklärbar, nicht durch operative Schwäche. Im Vergleich
zu SAICs bereinigtem Nettogewinn von RMB -5,4 Mrd. (ex Non-Recurring; 2024) ist BYDs
Position strukturell überlegen.""")

H2("5.3  Geely ZGH")
P("[Abschnitt von Kommilitonin — Geely ZGH]", footnote)
SP()

H2("5.4  Vergleichssynthese")
SP()

tdata5 = [
    header_row(["Merkmal", "SAIC Motor", "BYD", "Geely ZGH"]),
    [cell("Nettogew.-Trend 2024"), cell("RMB 1,7 Mrd. (-88%)"), cell("RMB 40,3 Mrd. (+34%)"), cell("RMB 16,8 Mrd. (+240%)")],
    [cell("Bereinigt 2024"), cell("RMB -5,4 Mrd."), cell("RMB 40,3 Mrd."), cell("RMB 16,8 Mrd.")],
    [cell("EV-Readiness"), cell("Mittel (JV-abh., kein\neigenes EV-Chassis)"), cell("Hoch (#1 global NEV;\nBlade Battery)"), cell("Mittel (CMA-Umbau;\nEV-Anteil Volvo 16%)")],
    [cell("Exportposition"), cell("Gefaehrdet\n(35,3% EU-Zoll;\nMG EU 4,1%->2,4%)"), cell("Wachsend\n(17% Zoll; >1 Mio. 2025\n+140%)"), cell("Volvo-gestuetzt\n(18,8% Zoll;\nVolvo 763k 2024)")],
    [cell("Groesstes Risiko"), cell("SAIC-GM Impairments;\nJV-Abh. EV-Transition"), cell("Margendruck\n(Bruttomarge 19%->18%)"), cell("Polestar (Going Concern);\nLotus (-46% 2025)")],
    [cell("Modell-Resilienz EV"), cell("Niedrig-Mittel"), cell("Hoch"), cell("Mittel")],
]
t5 = Table(tdata5, colWidths=[3.6*cm, 3.7*cm, 3.7*cm, 4.4*cm])
t5.setStyle(TableStyle(TABLE_BASE))
story.append(t5)
story.append(Paragraph(
    "<i>Tabelle 5: Long-term Viability-Vergleich. Quellen: SAIC AR2024 (PwC); BYD AR2024+AR2025 (E&amp;Y); Geely-Daten; EU-Verordnung 2024/2754.</i>",
    caption))
SP()
P("""<b>Synthese:</b> BYD zeigt die robusteste Positionierung im EV-Übergang der drei Cases:
profitabel, marktführend und technologisch eigenständig. Die vertikale Integration schützt
Margen strukturell besser als JV-Modelle, die Partnergewinne abführen müssen. Dennoch bleibt
Margendruck das kurzfristig größte Risiko: Die Frage, ob 18% Bruttomarge der neue strukturelle
Boden ist, oder ob der Preiskrieg weitere Erosion erzwingt, ist mit verfügbaren Daten noch
nicht abschließend beantwortbar.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 6. GENERALIZABLE LESSONS
# ─────────────────────────────────────────────────────────────────────────────
H1("6  Generalizable Lessons")
P("""Aus dem Vergleich der drei Governance- und Finanzierungsmodelle lassen sich drei
übergreifende Lektionen ableiten, die über den chinesischen Automobilmarkt hinaus relevant sind.""")
SP()

H2("Lektion 1: JV-Renten können Innovationsanreize zerstören")
P("""Erzwungener Technologietransfer durch JV-Strukturen schafft kurzfristig messbare Kompetenzen
(Bai et al. 2025: 8,3% Qualitätsspillovers), hemmt aber gleichzeitig eigene Innovationsinvestitionen
durch einen Kannibalisierungseffekt (Howell, 2018). Wenn der regulatorische Rahmen wegfällt (China:
JV-Pflicht formal abgeschafft 2022) und der technologische Vorsprung des Partners erodiert, bleibt
eine strukturell geschwächte Innovationsbasis zurück — genau die Lage, in der SAIC sich heute
befindet. Inkpen &amp; Beamish (1997) haben diese Dynamik theoretisch vorhergesagt: Sobald der
Lernbedarf des lokalen Partners gesättigt ist, werden die Grundlagen der JV-Stabilität brüchig.""")

H2("Lektion 2: Governance-Struktur determiniert Anpassungsgeschwindigkeit")
P("""Politisch kontrollierte SOEs reagieren in hochdynamischen Märkten langsamer auf technologischen
Wandel als privat-geführte Unternehmen — nicht wegen fehlender Ressourcen (SAIC hat mehr Umsatz
als BYD hatte, als BYD die Blade Battery einführte), sondern wegen gemischter Zielfunktion
(Shleifer &amp; Vishny 1994) und verlangsamter Entscheidungslogik durch JV-Konsenserfordernis
(Fan et al. 2007). BYDs Governance ermöglichte die Einstellung der gesamten ICE-Produktion in
einem einzigen Quartal (Q1 2022) — ein Schritt, den ein SOE mit Beschäftigungszielfunktion kaum
hätte vollziehen können.""")

H2("Lektion 3: Kapitalstruktur und Risikozuweisung entscheiden über Resilienz bei Marktschocks")
P("""Kapitalleichte JV-Modelle funktionieren in stabilen, wachsenden Märkten effizient — wer
aber bei Marktrückgang 50% der Impairments eines Partners trägt, verliert den Kapitalpuffer
für eigene Zukunftsinvestitionen (SAIC 2024: bereinigt -5,4 Mrd. RMB). Vertikale Integration
(BYD) bindet mehr Kapital, bietet aber Autonomie in der Ressourcenallokation und eliminiert
externe Abhängigkeiten. Megginson &amp; Netter (2001) zeigen, dass partielle Privatisierung —
das Modell von SAICs Börsennotierung — systematisch die schwächsten Performance-Gewinne
erzeugt; vollständige Kontrolle durch private Eigentümer (BYD, Geely) oder vollständige
Privatisierung sind überlegen.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 7. CONCLUSION
# ─────────────────────────────────────────────────────────────────────────────
H1("7  Conclusion")
P("""Die Analyse der drei Fälle ergibt ein klares Bild: Unter den Bedingungen des EV-Übergangs
im chinesischen Automobilmarkt ist das privat-vertikale Modell (BYD) der robusteste Pfad zur
langfristigen Shareholder-Value-Schöpfung. BYDs Gründer-Governance minimiert Agency Costs
(Jensen &amp; Meckling 1976), seine interne Kompetenzentwicklung generiert tacites Wissen
(Teece et al. 1997) und seine Finanzierungslogik aus operativen Cashflows schützt vor
partnerinduzierten Abschreibungsrisiken.""")
P("""Das JV-zentrierte SOE-Modell (SAIC) steht vor einem strukturellen Dilemma: Die historische
Stärke — kapitalleichte Finanzierung durch JV-Co-Investment und staatliche Rückendeckung —
verkehrt sich im Technologiewandel zum Nachteil, da JV-Instabilität (Inkpen &amp; Beamish 1997),
gemischte Zielfunktion (Shleifer &amp; Vishny 1994) und fehlende eigene EV-Plattform kumulieren.
Das M&amp;A-Modell (Geely) liegt in der Mitte: schneller Kompetenzerwerb, aber Integrationsrisiken
und Portfoliokomplexität (Polestar, Lotus).""")
P("""Einschränkungen: Die vorliegende Analyse stützt sich auf einen Beobachtungszeitraum von
maximal zwei Geschäftsjahren für den Vollvergleich (2024–2025). Pfadabhängigkeiten und
China-Markt-spezifische Faktoren (staatliche Subventionspolitik, regulatorischer Rahmen)
begrenzen die externe Validität der Lektionen. Langfristige Aktienrenditen — der letztliche
Shareholder-Value-Test — liegen für BYDs aktuelle Marktführerschaft noch nicht in ausreichendem
Zeitfenster vor.""")
story.append(PageBreak())

# ─────────────────────────────────────────────────────────────────────────────
# 8. LITERATURVERZEICHNIS
# ─────────────────────────────────────────────────────────────────────────────
H1("Literaturverzeichnis")

refs = [
    ("A*/A-Journals", [
        "Allen, F., Qian, J., Shan, S.C., & Zhu, J.L. (2024). Dissecting the long-term performance of the Chinese stock market. <i>Journal of Finance, 79</i>(2), 1183-1237.",
        "Bai, J., Barwick, P.J., Cao, S., & Li, S. (2025). Quid pro quo, knowledge spillovers, and industrial quality upgrading. <i>American Economic Review, 115</i>(11), 3825-3852. https://doi.org/10.1257/aer.20221501",
        "Bortolotti, B., & Faccio, M. (2009). Government control of privatized firms. <i>Review of Financial Studies, 22</i>(8), 2907-2939. https://doi.org/10.1093/rfs/hhn077",
        "Bruton, G.D., Peng, M.W., Ahlstrom, D., Stan, C., & Xu, K. (2015). State-owned enterprises around the world as hybrid organizations. <i>Academy of Management Perspectives, 29</i>(1), 92-114.",
        "Fan, J.P.H., Wong, T.J., & Zhang, T. (2007). Politically connected CEOs, corporate governance, and post-IPO performance of China's newly partially privatized firms. <i>Journal of Financial Economics, 84</i>(2), 330-357.",
        "Hao, X., & Hao, Y. (2026). How does vertical integration affect product market competition? Evidence from BYD. <i>International Journal of Industrial Organization.</i> [im Druck / Online First]",
        "Harrigan, K.R. (1985). Vertical integration and corporate strategy. <i>Academy of Management Journal, 28</i>(2), 397-425.",
        "Holmes, T.J., McGrattan, E.R., & Prescott, E.C. (2015). Quid pro quo: Technology capital transfers for market access in China. <i>Review of Economic Studies, 82</i>(3), 1154-1193.",
        "Howell, S.T. (2018). Joint ventures and technology adoption: A Chinese industrial policy that backfired. <i>Research Policy, 47</i>(8), 1448-1462.",
        "Inkpen, A.C., & Beamish, P.W. (1997). Knowledge, bargaining power, and the instability of international joint ventures. <i>Academy of Management Review, 22</i>(1), 177-202.",
        "Jensen, M.C., & Meckling, W.H. (1976). Theory of the firm: Managerial behavior, agency costs and ownership structure. <i>Journal of Financial Economics, 3</i>(4), 305-360.",
        "Masiero, G., Ogasavara, M.H., Jussani, A.C., & Risso, M.L. (2016). Electric vehicles in China: BYD strategies and government subsidies. <i>RAI - Revista de Administracao e Inovacao, 13</i>(1), 3-11.",
        "Megginson, W.L., & Netter, J.M. (2001). From state to market: A survey of empirical studies on privatization. <i>Journal of Economic Literature, 39</i>(2), 321-389.",
        "Shleifer, A., & Vishny, R.W. (1994). Politicians and firms. <i>Quarterly Journal of Economics, 109</i>(4), 995-1025.",
        "Teece, D.J., Pisano, G., & Shuen, A. (1997). Dynamic capabilities and strategic management. <i>Strategic Management Journal, 18</i>(7), 509-533.",
        "Williamson, O.E. (1971). The vertical integration of production: Market failure considerations. <i>American Economic Review, 61</i>(2), 112-123.",
        "Zhang, H., Li, L., Zhou, D., & Zhou, P. (2025). Founder control and breakthrough innovation in China's new energy vehicle sector. <i>China Economic Review</i>. https://doi.org/10.1016/j.chieco.2025.102345",
    ]),
    ("Primärquellen", [
        "BYD Company Limited. (2025). <i>Annual Report 2024</i>. Hong Kong: HKEX (H-Share 01211 / A-Share 002594). Geprüft von Ernst & Young Hua Ming LLP.",
        "BYD Company Limited. (2026). <i>Annual Report 2025</i>. Hong Kong: HKEX. Geprüft von Ernst & Young Hua Ming LLP.",
        "European Commission. (2024). <i>Implementing Regulation (EU) 2024/2754 of 29 October 2024 imposing definitive countervailing duties on imports of battery electric vehicles originating in the People's Republic of China</i>. Official Journal of the European Union.",
        "SAIC Motor Corporation Limited. (2025). <i>Annual Report 2024</i>. Shanghai Stock Exchange: 600104. Geprüft von PricewaterhouseCoopers.",
    ]),
    ("Branchenberichte und sonstige Quellen", [
        "CnEVPost / SNE Research. (2025, 11. Februar). Global EV battery market share in 2024: CATL 37.9%, BYD 17.2%. Abgerufen von https://cnevpost.com.",
        "China Association of Automobile Manufacturers (CAAM). (2025). China NEV sales data 2024. Abgerufen von https://en.caam.org.cn.",
        "Kiel Institut fuer Weltwirtschaft. (2024, April). Staatliche Beihilfen fuer BYD: Schaetzung €3,4 Mrd. kumuliert 2020-2022. Berichtet durch Bloomberg, 10. April 2024.",
        "PatSnap. (2022). Tesla vs. BYD battery R&D: 97 vs. 1,117 patents. Abgerufen von https://www.patsnap.com.",
        "Roland Berger. (2024). <i>Automotive Outlook 2040: China on the Rise</i>. Roland Berger GmbH.",
        "The Driven. (2024, 21. Februar). BYD to boost massive R&D team after applying for 48,000 patents. Abgerufen von https://thedriven.io.",
    ]),
]

for cat, entries in refs:
    story.append(Paragraph(cat, h3))
    for e in entries:
        story.append(Paragraph(e, ParagraphStyle("ref", fontName="Times-Roman",
            fontSize=10, leading=14, leftIndent=1*cm, firstLineIndent=-1*cm,
            spaceAfter=5, alignment=TA_JUSTIFY)))
    SP()

# ─────────────────────────────────────────────────────────────────────────────
# BUILD
# ─────────────────────────────────────────────────────────────────────────────
doc.build(story)
print(f"PDF gespeichert: {OUT}")
