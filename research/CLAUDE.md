# CLAUDE.md — CHINA Seminar Paper (Gruppenarbeit)

## Was ist dieses Repo?

Gemeinsames Forschungsrepo für eine Seminararbeit über Governance-Modelle in der chinesischen Automobilindustrie.

**Zentrale Frage:** Wie kann ein erfolgreiches Automobilunternehmen in China aufgebaut werden? Welche Governance- und Finanzierungsstruktur ist unter welchen Bedingungen überlegen — und welches Modell schafft am ehesten langfristigen Shareholder Value?

**Gemeinsame Aufgabe:** Die vier Cases in Bezug auf Governance, Finanzierung, Capability Building und langfristige Tragfähigkeit vergleichen. 2–3 allgemeine Lektionen zu Governance und Wertschöpfung in wachstumsstarken Märkten formulieren.

## Zuständigkeiten

| Ordner | Person | Case | Modell |
|---|---|---|---|
| `wiki/byd/` | Batu | BYD | Vertikal integriertes Modell |
| `wiki/geely/` | Kommilitone | Geely | M&A-getriebenes Modell |
| `wiki/saic-motor/` | Kommilitone | SAIC Motor | Joint Venture-Modell |
| `wiki/shared/` | Alle | Vergleichsteil | — |

## Ordnerstruktur (pro Unternehmen)

```
wiki/<unternehmen>/
├── input/
│   ├── pdf/          ← PDF-Quellen ablegen
│   └── web-search/   ← Web-Recherche-Ergebnisse
├── sources/          ← aufbereitete Quelldateien
├── concepts/         ← unternehmensspezifische Konzepte
├── entities/         ← Personen, Firmen, Produkte
└── *.md              ← Wiki-Seiten
```

## Regeln

- Jeder arbeitet **nur in seinem eigenen Ordner**
- `wiki/shared/` nur via Pull Request — kein direktes Pushen
- **Vor jeder Sitzung:** `git pull`
- **Nach jeder Sitzung:** `git push`

## Wie Claude hilft

Claude hat Zugriff auf alle Ordner und kann:
- Zu einem Unternehmen recherchieren und Ergebnisse in den passenden Ordner einpflegen
- Quellen in `sources/`, Konzepte in `concepts/`, Entitäten in `entities/` ablegen
- Unternehmensübergreifende Vergleiche ziehen (liest alle drei Wikis)
- Beim Verfassen des gemeinsamen Vergleichsteils helfen

Claude arbeitet immer lokal — Änderungen müssen danach per `git push` geteilt werden.
