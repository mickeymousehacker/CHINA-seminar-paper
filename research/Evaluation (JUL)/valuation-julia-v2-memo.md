# Traton SE — bereinigte Valuation (Julia v2)

**Datei:** `Traton_valuation_Julia_v2_reconciled.xlsx`
**Stichtag:** 30.06.2026 · **Ergebnis Basisfall:** impliziter Kurs **€63,25** (Upside +91 % ggü. €33,18)

Diese Version führt die beiden bestehenden Modelle zusammen und behebt ihre Unstimmigkeiten. Sie baut auf meinem `FINAL.xlsx` auf (das solidere der beiden) und übernimmt daraus die eine wirklich gute Entscheidung — die industrielle Netto-Verschuldung —, macht aber alle Zwischenschritte als **lebende Formeln** transparent statt hartkodiert. Der Tab **„Changelog"** in der Datei fasst dasselbe kompakt zusammen.

## Die zwei Ausgangsmodelle

| | Team-Modell (`evaluation/…DCF…`) | Julia FINAL |
|---|---|---|
| WACC | 6,04 % | 7,43 % |
| Impliziter Kurs | €114 (+245 %) | €61 (+84 %) |

Der €114-Wert des Team-Modells ist durch **drei sich verstärkende Fehler** aufgebläht (WACC-Bug, ΔNWC ≈ 0, schrumpfende Kapitalbasis). Mein Modell landet mit €63 nahe an der konservativeren Julia-Version — aber jetzt mit durchweg begründbaren, verknüpften Annahmen.

## Was ich korrigiert habe

1. **WACC — doppelter Steuerschild (Team-Bug).** Das Team-Modell rechnet `E/V·Ke + D/V·Kd·(1−t)`, wobei `Kd` **bereits** die *nach-Steuer*-Fremdkapitalkosten waren → Steuerschild zweimal → WACC künstlich auf 6,04 % gedrückt. Ich rechne live und korrekt: `Kd(1−t)` nur einmal → **WACC 7,43 %**. (Dein FINAL hatte 7,43 % zwar richtig, aber als feste Zahl eingetippt — jetzt formelbasiert und auditierbar.)

2. **CapEx vs. Abschreibung — Kapitalbasis.** Team: CapEx 6 % < Abschreibung 7,16 % → Anlagevermögen schrumpft jährlich, obwohl ewiges Wachstum von 1,5 % unterstellt wird (ökonomisch widersprüchlich). Julia: CapEx = Abschreibung (neutral, aber keine Wachstumsinvestition). Ich: **CapEx 7 % > Abschreibung 6 % → Netto-Reinvestition von 1 % des Umsatzes**, konsistent mit fortlaufendem Wachstum und mit dem Elektrifizierungs-Capex.

3. **EBITDA-Aufbau (dein FINAL).** Deine SG&A-Reihe springt 2026→2027 um −20,6 %, wodurch die implizite EBITDA-Marge ~10 % über dem Bloomberg-Konsens lag. Ich baue **EBITDA = EBIT + Abschreibung** top-down (keine fragile SG&A-Reihe). Ergebnis 2026: 12,6 % Marge = Konsens (12,5 %).

4. **ΔNWC — widersprüchliche Methodik.** Team: 1 % der *Umsatzänderung* (~20 €m/J, zu niedrig). Julia: 1,6 % des *Umsatzniveaus* (~730 €m/J, zu hoch, wächst mit dem Umsatz weiter). Ich: **15 % der Umsatz*änderung*** (NWC-Intensität) — methodisch korrekt, weil Working-Capital-Investition an das Wachstum, nicht an das Niveau gekoppelt gehört.

5. **Diskontierung — Stichtag.** Beide Modelle diskontieren 2026E mit Periode 0 (als läge der Stichtag am 01.01.). Bei Bewertung zum **30.06.2026** nutze ich die **Mid-Year-Convention** (Perioden 0,5 … 6,5).

6. **Equity Bridge — beibehalten aus deinem FINAL.** Nur die **industrielle Netto-Verschuldung** (EV−MCap = 4.539 €m) wird abgezogen, nicht die Bruttoschuld von 28.799 €m — davon sind ~22 Mrd. € captive Financial-Services-Schuld mit Gegenposten in den Finanzierungsforderungen. Das ist der Kern von **A.1** und die beste Einzelentscheidung der beiden Modelle. Das Team-Modell zog stattdessen undokumentierte 5.162 €m ab.

7. **EBIT als Formel.** War in beiden Modellen eine feste Zahl. Jetzt `= EBIT-Marge × Umsatz`, verankert am Bloomberg-Konsens (2026 6,6 %, 2027 8,1 %, danach ~8 % gehalten).

8. **Football-Field — konsistente Bandbreiten.** Peer-Min–Max (Daimler vs. Volvo) klar so benannt, plus DCF-WACC-Band (±0,5 %). Vorher mischten die Tabs Quartils- und Min/Max-Definitionen.

## Ergebnis (Basisfall)

| Kennzahl | Wert |
|---|---|
| WACC | 7,43 % |
| Firm Value | ~37,8 Mrd. € |
| TV-Anteil am Firm Value | 70 % |
| Equity Value | ~31,6 Mrd. € |
| **Impliziter Kurs** | **€63,25** |
| Upside vs. €33,18 | +91 % |
| DCF-Bandbreite (WACC ±0,5 %) | €57 – €70 |
| Multiples (Median-Peer) | EV/EBITDA €65 · EV/Revenue €71 · EV/EBIT €44 |

**Kernaussage:** Traton erscheint auch nach der konservativen, bereinigten Rechnung deutlich **unterbewertet** — die Spanne aus DCF und Multiples liegt geschlossen oberhalb des aktuellen Kurses. Anders als beim Team-Modell (+245 %) beruht dieses Ergebnis nicht auf einem WACC-Fehler, sondern auf begründbaren Annahmen.

## Hinweise zur Datei

- Alle Kernwerte sind **lebende Formeln**; die Datei rechnet beim Öffnen in Excel automatisch neu (fullCalcOnLoad gesetzt).
- Gelb = Eingabe/Annahme, Grün = Kernergebnis.
- Offener Feinschliff-Punkt: EBITDA-Marge 2027 liegt bei 14,1 % vs. Konsens 13,7 % (0,4 pp Überschuss, immateriell; entsteht durch die runde 6-%-Abschreibungsquote). Falls du es exakt haben willst: Abschreibung auf 5,8 % setzen — senkt aber den Kurs minimal.
