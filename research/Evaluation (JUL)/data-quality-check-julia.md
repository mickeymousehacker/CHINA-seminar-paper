# Data-Quality-Check — Traton_valuation_FINAL.xlsx

Zeile-für-Zeile-Nachrechnung des Workbooks gegen die Bloomberg-/LSEG-Rohdaten. Keine Skill-Nutzung nötig — ich habe die Formeln direkt aus der xlsx gelesen (nicht nur die Werte) und von Hand nachgerechnet.

## ✅ Sehr gut / sauber verifiziert

| Bereich | Prüfung | Ergebnis |
|---|---|---|
| Revenue-Forecast 2026E/2027E | 45.897 / 48.970 €m | Exakt = Bloomberg-Konsens (`8TRA_EST.pdf`) |
| COGS/Revenue-Annahme (80,5 %) | vs. 2025A-Ist (35.630/44.051 = 80,9 %) | Konsistent (kleine, plausible Abweichung) |
| CapEx/Revenue-Annahme (7,0 %) | 3.212,8 / 45.897 = 7,0 % | Exakt konsistent |
| ΔNWC/Revenue-Annahme (1,6 %) | 734,4 / 45.897 = 1,6 % | Exakt konsistent |
| WACC-Peer-Betas (Daimler 1,089 / Volvo 0,921) | Re-Levering auf Traton-Ziel-D/E (0,274) → β 1,198 → r_E 8,57 % | Formel korrekt (CAPM: 3,5 % + 1,198 × 4,23 %) |
| Equity Bridge — Netto-Industrieschuld (4.539 statt 28.799 Bruttoschuld) | 22 Mrd. € Financial-Services-Schuld korrekt herausgerechnet (siehe WORKING.xlsx als Entwurfsstufe) | Methodisch die richtige Entscheidung — direkt relevant für A.1 |
| Multiples-Peer-Daten (Daimler, Volvo: EV/EBITDA/Revenue/EBIT, LFY/LTM/FY+1/FY+2) | Alle Werte 1:1 aus `DAIMLER_EST.pdf` / `VOLVO_EST.pdf` | Exakte Übereinstimmung, keine Abweichung |
| Aktueller Kurs/Marktkap. (33,18 €, 16.590 €m) | vs. Factsheet + Kurshistorie 30.06.2026 | Exakte Übereinstimmung |

## ⚠️ Gefundene Inkonsistenz — DCF-Tab: EBITDA-Aufbau vs. Bloomberg-Konsens

**Befund:** Die bottom-up berechnete EBITDA im FCFF & DCF-Tab (Gross Profit − SG&A) liegt **~9–10 % über** dem Bloomberg-Analystenkonsens für dieselbe Firma/dasselbe Jahr — obwohl die im Multiples-Tab verwendete EBITDA (direkt aus Bloomberg) korrekt ist. Zwei verschiedene EBITDA-Zahlen für Traton kursieren also im selben Workbook:

| Jahr | EBITDA (DCF-Tab, bottom-up) | EBITDA (Bloomberg-Konsens = Multiples-Tab) | Abweichung |
|---|---|---|---|
| 2026E | 6.260,8 €m | 5.719,3 €m | +9,5 % |
| 2027E | 7.414,0 €m | 6.723,2 €m | +10,3 % |

**Ursache:** Die SG&A-Annahmereihe im DCF-Tab springt von 2026 auf 2027 um **−20,6 %** (2.689,1 → 2.135,2), bevor sie wieder mit 8,4 % / 3,5 % / 2,5 % / 2,0 % / 1,5 % wächst. Das passt nicht zur beschrifteten Annahme "General Cost growth rate: 2 %" (Zelle C7) — diese müsste eine konstante ~2 %-Wachstumsrate ergeben, nicht diesen Sprung. Wahrscheinlich wurde der SG&A-Ausgangswert 2026 zu hoch angesetzt (oder ein Einmaleffekt nicht bereinigt), und ab 2027 korrigiert sich das Modell mit der eigentlich beabsichtigten Wachstumsrate.

**Wichtig — das verzerrt die eigentliche DCF-Bewertung NICHT:** Weil im Modell **Depreciation = CapEx** in jedem Prognosejahr gesetzt ist (beide Zeilen sind identisch: 3.212,8 / 3.427,9 / …), kürzen sich Abschreibung und Investitionen im Free-Cash-Flow exakt heraus:

```
FCF = NI + Dep − CapEx − ΔNWC = EBIT×(1−t) − ΔNWC        (weil Dep = CapEx)
```

Der Free Cash Flow hängt also **nur von EBIT und ΔNWC** ab — nicht von der (zu optimistischen) EBITDA/SG&A-Konstruktion. Und die EBIT-Zeile ist ohnehin **hart einprogrammiert** (nicht als Formel `=Gross Profit − SG&A − Dep`, sondern als fixe Zahl) und trifft den Bloomberg-Konsens praktisch exakt (3.048,0 vs. 3.049,2 in 2026; 3.986,1 vs. 3.986,3 in 2027 — Abweichung < 0,1 %). Der DCF-Output (Firm Value, Football-Field) ist damit **korrekt an den Analystenkonsens verankert**, trotz der fehlerhaften SG&A/EBITDA-Zwischenrechnung.

**Trotzdem zu beheben, weil:**
1. Wer die "2 Pflichtfolien: DCF-Annahmen" erklären muss, sollte keine Folie zeigen, die implizit eine EBITDA-Marge von ~13,6 % (2026) unterstellt, während der Konsens 12,5 % zeigt — das fällt in der Diskussion auf.
2. Die EBIT-Zeile ist nicht formelbasiert (`=Gross Profit − SG&A − Dep`), sondern eine feste Zahl. Ändert jemand künftig COGS-% oder SG&A-Annahme, bleibt EBIT unverändert — die Verknüpfung "sieht" nur zufällig konsistent aus, ist es strukturell aber nicht.

**Empfehlung:** SG&A-Ausgangswert 2026 auf ca. 2.150 €m korrigieren (statt 2.689,1), damit die Reihe glatt mit ~2 % wächst und EBITDA wieder zum Bloomberg-Konsens passt; EBIT-Zeile auf echte Formel umstellen.

## ⚠️ Kleinere Inkonsistenz — Football-Field-Bandbreiten

Die Multiples-Bandbreiten im Football-Field-Tab ("EV/EBITDA FY+1 (peer range)" 48,7–80,9 etc.) entsprechen **Peer-Min/Max** (Daimler vs. Volvo einzeln), nicht den Quartils-/Median-Werten, die im Multiples-Tab (`QUARTILE`, `MEDIAN`) bereits berechnet werden. Beides ist legitim, aber es sollte in der Präsentation klar benannt werden, welche Definition verwendet wird — sonst wirkt es inkonsistent mit dem Multiples-Tab.

## Fazit für die Präsentation

- DCF-Endergebnis (Firm Value, Equity Value, impliziter Kurs) ist **verlässlich**, weil an Bloomberg-EBIT-Konsens verankert.
- Die SG&A/EBITDA-Zwischenrechnung im DCF-Tab sollte vor Abgabe korrigiert werden — kostet ~10 Minuten, verhindert aber eine unangenehme Rückfrage in der Diskussion ("warum ist eure implizite EBITDA-Marge höher als der Konsens?").
- Alles andere (WACC, Equity Bridge, Multiples, Peer-Daten) ist sauber und quellengetreu.
