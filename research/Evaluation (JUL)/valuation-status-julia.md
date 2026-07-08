# Traton SE Valuation — Arbeitsstand & Review (Julia)

Diese Datei dokumentiert, was in `Evaluation (JUL)/` bereits vorhanden ist, was ich geprüft habe, und was für die Abgabe noch fehlt. Alle Arbeiten für diese Aufgabe finden ausschließlich in diesem Ordner statt (Kopie von `research/evaluation/`, unabhängig vom Team-Ordner).

## 1. Aufgabenstellung (aus `SoSe 26 - MATA valuation exercise.pdf`)

- **Ziel:** Ist Traton SE aktuell über- oder unterbewertet? DCF + Multiples-Bewertung zum Stichtag **30.06.2026**, Datenbasis bis inkl. **Q1 2026**.
- **Abgabe:** max. 10 Seiten PDF (inkl. Deckblatt), plus 2 zusätzliche Folien zu DCF-Annahmen + Zusatzinfos für die A-Fragen.
- **Reihenfolge:** zuerst DCF, dann Multiples; wenn Zeit bleibt: eigene WACC-Herleitung + A-Fragen.
- **Zusatzfragen:**
  - A.1 — Einfluss von unterschiedlichem Verschuldungsgrad/-struktur der Peers auf die relative Bewertung ggü. Traton?
  - A.2 — Gibt es Synergien zwischen den Traton-Geschäftsbereichen (Scania, MAN, International, VW Truck & Bus)?
  - A.3 — Unterschiede zwischen Bloomberg- und LSEG-Daten? Relevanz für die Bewertung?
- Hinweise im Aufgabenblatt, die ich ernst genommen habe: *"nicht alle Daten sind relevant"* und *"Zeigst du wirklich vergleichbare Daten? Was ist mit Währungen?"*

## 2. Dateien im Ordner — was ist was

| Datei | Inhalt | Genutzt für |
|---|---|---|
| `Traton_valuation_FINAL.xlsx` | Fertig ausgefülltes Template (5 Tabs: FCFF & DCF, WACC, Equity Bridge, Multiples, Football-Field) | Kern-Deliverable |
| `Traton_valuation_WORKING.xlsx` | Vorstufe von FINAL — zeigt die Herleitung der Equity-Bridge-Korrektur (siehe 3.3) | Nachvollziehbarkeit der Methodik |
| `SoSe 26 - MATA valuation template.xlsx` | Leeres Original-Template | Referenz |
| `SoSe 26 - MATA valuation exercise.pdf` | Aufgabenstellung | siehe oben |
| `SoSe 26 - MATA valuation introduction.pptx` | Vorlesungsfolien zur Methodik (DCF, WACC, Multiples, Football-Field) | Formelherleitung, Begriffsdefinitionen |
| `SoSe 26 - MATA valuation presentation.pptx` | Struktur-Vorlage für die eigene Abgabe-Präsentation | Foliengerüst |
| `Additional Data/Traton SE annual report 2025.pdf` | Geschäftsbericht 2025 | Detailprüfung Bilanz (Pensionen, Minderheiten, Segmente) |
| `Additional Data/Traton SE factsheet.pdf` | Stand 29.06.2026: Kursspanne, Shareholder-Struktur (VW Finance Luxemburg 87,5 %, Streubesitz 12,5 %), **Segmentzahlen Q1 2026 pro Marke** | A.2 (Synergien), aktueller Kurs/Marktkap. |
| `Bloomberg Data/8TRA_EST.pdf`, `DAIMLER_EST.pdf`, `VOLVO_EST.pdf` | Bloomberg "Financial Statement Analysis" — Umsatz/EBITDA/EBIT/EV historisch + Konsensschätzungen 2026E/2027E | Kern-Inputs für DCF-Forecast und Multiples |
| `Bloomberg Data/PRICE_HISTORY_HARDCOPY.xlsx` | Monatliche Kurs- & Marktkap.-Historie Traton/Daimler/Volvo | Cross-Check Equity-Bridge-Kurs (33,18 €, MCap 16.590), potenzielle Beta-Regression |
| `Bloomberg Data/XCSF_*.xlsm`, `XCVA_TRATON_HARDCOPY.xlsm` | Bloomberg-Rohbildschirme (Ownership/Holder-Beta-Screens) | Randdaten, nicht kritischer Pfad — siehe 4. |
| `LSEG Data/*_BUSINESSLINES_ESTIMATES.xlsx` | LSEG-Segmentdaten + Analysten-Konsens je Firma | A.2 (Segmente), A.3 (Bloomberg-vs-LSEG-Vergleich) |

## 3. Review des bestehenden Modells (`Traton_valuation_FINAL.xlsx`)

Ich habe die Formeln (nicht nur die Werte) durchgesehen und gegen die Bloomberg-/LSEG-Quellen zurückverfolgt.

### 3.1 FCFF & DCF — sauber verknüpft, nachvollziehbar
- Umsatz 2026E/2027E (45.897 / 48.970 €m) entspricht exakt dem Bloomberg-Analysten-Konsens für Traton (`8TRA_EST.pdf`, "Estimate:2026 A/2027 A").
- Ab 2028 fädet das Umsatzwachstum sichtbar aus (~5,0 % → 2,0 %) Richtung LT-Wachstumsrate 1,5 % — kein naives Flat-Wachstum, sondern eine bewusste Konvergenz. Row „Revenue growth rate (historical) / Average" (Zeilen 13–21) ist aktuell **leer** — das ist die einzige Lücke in diesem Tab (siehe 4.1).
- FCFF-Wasserfall (EBITDA → EBIT → Steuern → NI → +Dep −CapEx −ΔNWC → FCF), Diskontierung, Terminal Value (Gordon-Growth) und die Sensitivitätsmatrizen (WACC × LTG) sind vollständig und korrekt verknüpft.

### 3.2 WACC — Peer-Beta-Methodik korrekt angewendet
- Rohbetas Daimler Truck (1,089) und Volvo (0,921) sind bereits **unlevered** peer betas; Relevering auf Tratons Ziel-D/E (0,274) ergibt 1,198 → Cost of Equity 8,57 % (CAPM: r_f 3,5 % + β 1,198 × MRP 4,23 %).
- Cost of Debt über CDS-Spread (1,2 %) + risikofreiem Zins, nach Steuern 3,29 %.
- **Wichtige Beobachtung zu Volvo (Betas/D-E-Ratio):** Volvos Bilanzdaten (Equity 683.894, Net Debt −43.938) stehen bei Bloomberg in **SEK**, nicht in EUR — aber da hier nur das *Verhältnis* D/E gebildet wird, ist das unproblematisch (SEK/SEK kürzt sich). Das ist der relevante Punkt zum Aufgaben-Hinweis "Was ist mit Währungen?" — siehe A.3 unten.

### 3.3 Equity Bridge — durchdachte Korrektur, in WORKING sichtbar dokumentiert
`Traton_valuation_WORKING.xlsx` zeigt den ursprünglichen (naiveren) Ansatz, der dann verworfen wurde:
- **Erster Versuch (WORKING):** Bruttoschulden 28.799 €m 1:1 abgezogen → Equity Value impliziert 60,87 €/Aktie.
- **Korrigierter Ansatz (FINAL):** Nur **industrielle Netto-Verschuldung** (EV−MCap = 4.539 €m) wird abgezogen, weil **~22 Mrd. € der 28,8 Mrd. € Bruttoschulden auf das firmeneigene Financial-Services-Geschäft entfallen** (Kundenfinanzierung für Lkw-Käufer) und durch entsprechende Finanzierungsforderungen (Receivables) gedeckt sind — also kein echtes Fremdkapitalrisiko für die operative Bewertung darstellen.
- Das ist inhaltlich der Kern der Antwort auf **A.1**: Traton trägt viel Bruttoverschuldung, aber der Großteil ist "captive" Finanzierungsgeschäft, nicht Industrieschulden. Ein Peer-Vergleich, der naiv Bruttoschulden verwendet (wie im WORKING-Entwurf), würde Traton systematisch unterbewerten.
- Ergebnis FINAL: Equity Value ≈ Firm Value − 4.539 (Netto-Industrieschuld) − 1.590 (Pensionen) − 3 (Minderheiten) → impliziter Kurs vs. aktueller Kurs 33,18 € (Stand 30.06.2026, Factsheet & Kurshistorie stimmen überein).

### 3.4 Multiples — Peer-Daten korrekt aus Bloomberg übernommen
- Daimler-Truck- und Traton-Zahlen (EV, EBITDA, Revenue, EBIT für LFY/LTM/FY+1/FY+2) stimmen exakt mit `DAIMLER_EST.pdf` bzw. `8TRA_EST.pdf` überein.
- Volvo-Zahlen stimmen mit `VOLVO_EST.pdf` überein — **aber in SEK**, während Daimler/Traton in EUR stehen. Da EV/EBITDA, EV/Revenue, EV/EBIT aber **dimensionslose Verhältnisse** sind (Zähler und Nenner je Firma in derselben Währung), verzerrt das die Multiples selbst nicht. Median/Quartile/Implied-Valuation-Formeln sind korrekt aufgebaut (`MEDIAN`, `QUARTILE`, Rückrechnung auf Traton-EBITDA/-Revenue/-EBIT in EUR).

### 3.5 Football-Field — Werte vorhanden, aber Diskrepanz zu Multiples-Tab
Die Football-Field-Range für "EV/EBITDA FY+1 (peer range)" (48,7–80,9) etc. wirkt wie **Peer-Min/Max** (Daimler vs. Volvo), nicht wie die Quartile/Median-Formeln aus dem Multiples-Tab. Das ist keine falsche Zahl, aber eine andere Bandbreiten-Definition als im Multiples-Sheet — sollte in der Präsentation konsistent benannt werden (Min/Max der zwei Peers vs. Quartilsspanne).

## 4. Offene Punkte / was noch fehlt

### 4.1 Kleinere Lücken im Workbook
- Zeilen 13–21 im FCFF & DCF-Tab ("historische Kennzahlen 2021–2025, Durchschnitt") sind leer. Das wäre die dokumentierte Herleitung der Annahmen (COGS/Revenue 80,5 %, CapEx/Revenue 7 % etc.) aus den historischen Bloomberg-Daten — aktuell stehen die Annahmen nur als fertige Zahl da, ohne sichtbare Herleitung.
- Football-Field-Range-Definition vs. Multiples-Tab vereinheitlichen (siehe 3.5).

### 4.2 Für die Präsentation noch zu erstellen (siehe `SoSe 26 - MATA valuation presentation.pptx` als Gerüst, max. 10 Seiten)
1. Deckblatt
2. Football-Field (Chart aus Excel)
3. Peer Group — Auswahlbegründung (Daimler Truck, Volvo; warum diese zwei, warum keine weiteren)
4. Multiples-Übersicht
5. DCF-Zusammenfassung + Sensitivitäten
6. Equity Bridge
7. **2 Pflichtfolien:** DCF-Annahmen (explizit erklärt) + Zusatzinfos für A.1–A.3
8. Anhang: AI-Nutzung (die Aufgabenstellung verlangt explizit eine Reflexion, wie KI genutzt wurde)

### 4.3 Antwortentwürfe für A.1–A.3 (auf Basis der Daten, siehe Details oben)
- **A.1 (Verschuldung):** Traton hat mit Abstand die höchste Brutto-Verschuldung (28,8 Mrd. €) der drei Firmen, aber ~22 Mrd. € davon ist Financial-Services-Fremdkapital mit Gegenposten in den Finanzierungsforderungen. Netto-*industrielle* Verschuldung ist mit 4,5 Mrd. € moderat. Peers (Daimler Truck, Volvo) haben strukturell ähnliche Financial-Services-Sparten — ein Vergleich der Multiples auf EV-Basis funktioniert nur, wenn man bei allen dreien konsistent "netto-industriell" rechnet; sonst überzeichnet man Tratons Verschuldung ggü. Peers mit kleineren Financial-Services-Büchern.
- **A.2 (Synergien):** Aus Factsheet/LSEG-Segmentdaten: Scania (11 % RoS, größter Ergebnisbeitrag), MAN (6,4 % RoS), International Motors (0,1 % RoS, klar defizitär in Q1 2026 mit −4,0 %), VW Truck & Bus (11,7 % RoS, klein aber profitabel). Große Marge-Spreizung zwischen den Marken deutet darauf hin, dass die "Synergien" (gemeinsame modulare Plattformen, globaler Einkauf — siehe Intro-Folie) bislang nicht gleichmäßig bei allen Marken ankommen; International bleibt der Sanierungsfall. Das ist ein guter Diskussionspunkt für die Folie.
- **A.3 (Bloomberg vs. LSEG):** Größter Unterschied: **Bloomberg berichtet Volvo in SEK (Heimatwährung)**, während **LSEG die Segmentdaten bereits in EUR umrechnet** (LSEG-Datei enthält explizite FX-Spalten, Kurs ≈ 0,0905–0,0926 SEK/EUR). Für die Multiples-Ratios selbst spielt das keine Rolle (siehe 3.4), aber es ist eine Falle, wenn man LSEG- und Bloomberg-Zahlen für dieselbe Firma unreflektiert nebeneinanderstellt (z. B. absolute Umsatzzahlen vergleichen) — genau der Punkt, auf den der Aufgaben-Hinweis "Was ist mit Währungen?" abzielt.

## 5. Was ich als Nächstes brauche (Entscheidung bei dir, Julia)

Ich habe bewusst noch **keine** der obigen Lücken eigenmächtig geschlossen oder Folien gebaut, bevor ich weiß, wie du weiterarbeiten willst:

1. Soll ich die historische Kennzahlen-Tabelle (4.1) im Excel nachtragen, damit die Annahmen nachvollziehbar hergeleitet sind?
2. Soll ich die 10-seitige Präsentation (PDF) direkt bauen (PowerPoint → PDF), basierend auf dem Gerüst in `SoSe 26 - MATA valuation presentation.pptx` und den obigen A.1–A.3-Antwortentwürfen?
3. Willst du die Peer-Auswahl (nur Daimler Truck + Volvo) so übernehmen, oder soll ich prüfen, ob z. B. Paccar/CNH Industrial als dritter Peer sinnvoll wäre?
4. Für den AI-Appendix: Soll ich eine ehrliche Zusammenfassung schreiben, wie Claude in diesem Workflow eingesetzt wurde (Datenvalidierung, Cross-Check Bloomberg/LSEG, Herleitung der A-Antworten)?
