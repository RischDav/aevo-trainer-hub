Ja, das ist möglich! Um zu verhindern, dass die Markdown-Syntax (wie Überschriften oder Fettungen) direkt vom Interface gerendert wird, kann ich den gesamten Text in einen **Code-Block** packen.

In der Informatik nutzen wir dafür meistens drei Backticks (```). Hier ist die gewünschte README-Struktur noch einmal in einem sauberen Code-Block zum Kopieren:

```markdown
# 🎓 KI-Trainer für AEVO (AdA-Schein)

Herzlich willkommen beim **KI-Trainer für AEVO**! Dieses Projekt ist ein interaktiver Prüfungstrainer, der angehenden Ausbildern dabei hilft, sich spielerisch und effizient auf die schriftliche Prüfung nach der Ausbilder-Eignungsverordnung (AEVO) vorzubereiten.

> **Hinweis:** Dies ist ein **privates Projekt**. Die Fragen sind KI-generiert und stehen in keiner Verbindung zur Industrie- und Handelskammer (IHK) oder Handwerkskammer (HWK).

## 🚀 Funktionen

- **Individuelles Training:** Wähle gezielt aus den 4 Handlungsfeldern (HF 1 bis HF 4).
- **Anpassbare Schwierigkeit:** Trainiere mit Fragen von "Leicht" (1) bis "Schwer" (3).
- **Prüfungsmodus:** Stelle dir ein Set von bis zu 20 Fragen zusammen und setze dir ein Zeitlimit.
- **Detaillierte Auswertung:** Siehe sofort, was richtig war, und lerne durch Erklärungen zu jeder Frage.
- **Intelligente Navigation:** Nutze die Sidebar, um während des Trainings zwischen Fragen zu springen.
- **Smart-Timer:** Die Zeit läuft im Hintergrund weiter, damit du zu Ende üben kannst, markiert aber Zeitüberschreitungen in der Auswertung deutlich.

---

## 🛠️ Tech-Stack

Dieses Projekt wurde mit modernsten Web-Technologien erstellt:
- **Next.js** (React Framework)
- **Tailwind CSS** (Styling)
- **shadcn/ui** (Benutzeroberflächen-Komponenten)
- **Lucide React** (Icons)

---

## 💻 Anleitung: So startest du das Projekt

Du kannst den Trainer entweder lokal auf deinem Rechner ausführen oder ihn direkt im Browser nutzen (falls bereits auf Vercel/Netlify veröffentlicht).

### Voraussetzungen
Stelle sicher, dass du **Node.js** (Version 18 oder neuer) auf deinem Computer installiert hast.

### Schritt-für-Schritt-Installation

1. **Repository klonen:**
   ```bash
   git clone https://github.com/DEIN-BENUTZERNAME/aevo-ki-trainer.git
   ```

2. **In das Verzeichnis wechseln:**
   ```bash
   cd aevo-ki-trainer
   ```

3. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

4. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

5. **App öffnen:**
   Öffne deinen Browser und gehe auf [http://localhost:3000](http://localhost:3000).

---

## 📂 Datenstruktur

Die Fragen werden in einer lokalen JSON-Datei verwaltet. Jede Frage folgt diesem Schema:

```json
{
  "handlungsfeld": "1",
  "schwierigkeit": 1,
  "question": "Welche gesetzliche Grundlage regelt die Eignung des Ausbilders?",
  "answers": {
    "A": "Betriebsverfassungsgesetz",
    "B": "Berufsbildungsgesetz / AEVO",
    "C": "Jugendarbeitsschutzgesetz"
  },
  "correct_answer": ["B"],
  "explanation": "Die AEVO basiert auf § 30 des BBiG.",
  "question_type": "normal"
}
```

---

## ⚖️ Disclaimer & Datenschutz

Dieses Tool dient ausschließlich zu Lernzwecken. Da die Fragen von einer KI generiert wurden, übernehmen wir keine Gewähr für die Richtigkeit oder Aktualität der Inhalte. 

Beim ersten Start der App muss ein Disclaimer akzeptiert werden. Diese Entscheidung wird lokal in deinem Browser (**localStorage**) gespeichert. Es werden keine persönlichen Daten auf externen Servern gespeichert.

---

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.
```