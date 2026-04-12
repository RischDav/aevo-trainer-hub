export interface Question {
  handlungsfeld: string;
  schwierigkeit: number;
  question: string;
  answers: Record<string, string>;
  correct_answer: string[];
  explanation: string;
  question_type: "normal" | "multiple_choice";
}

export const questions: Question[] = [
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche neuen Abschlussbezeichnungen wurden durch die BBiG-Novelle 2020 für die höhere Berufsbildung eingeführt?",
    answers: {
      A: "Bachelor Professional",
      B: "Master Professional",
      C: "Diplom-Fachwirt",
      D: "Staatlich geprüfter Fachmeister",
    },
    correct_answer: ["A", "B"],
    explanation: "Um die Gleichwertigkeit von akademischer und beruflicher Bildung zu unterstreichen, wurden die Titel 'Bachelor Professional' (z. B. für Fachwirte/Meister) und 'Master Professional' (z. B. für Betriebswirte nach HwO/BBiG) eingeführt.",
    question_type: "multiple_choice",
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte in einem völlig neuen, hochspezialisierten Bereich ausbilden, für den es noch keine staatlich anerkannte Ausbildungsordnung gibt. Was ist rechtlich korrekt?",
    "answers": {
      "A": "Der Betrieb darf eine eigene Ausbildungsordnung verfassen und die Prüfung selbst abnehmen.",
      "B": "Eine Ausbildung nach dem BBiG ist nur in staatlich anerkannten Ausbildungsberufen zulässig.",
      "C": "Der Betrieb kann einen 'ähnlichen' Beruf wählen und die Inhalte eigenständig anpassen.",
      "D": "Die Ausbildung kann nur als rein betriebliche Umschulung ohne Kammerprüfung erfolgen."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 4 BBiG darf in anderen als staatlich anerkannten Ausbildungsberufen nicht ausgebildet werden. Dies dient der bundeseinheitlichen Qualitätssicherung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Die 'Müller GmbH' möchte im Verbund mit der 'Schulze KG' ausbilden, da sie selbst die geforderten Inhalte zur Steuerungstechnik nicht vermitteln kann. Welche Form der Verbundausbildung liegt vor, wenn der Azubi für 4 Monate zur Schulze KG entsandt wird?",
    "answers": {
      "A": "Auftragsausbildung",
      "B": "Ausbildungsverein",
      "C": "Lehrgangswerkstatt",
      "D": "Konsortium"
    },
    "correct_answer": ["A"],
    "explanation": "Wird ein Teil der Ausbildung gegen Kostenerstattung in einen anderen Betrieb ausgelagert, spricht man von Auftragsausbildung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Bewerber für eine Ausbildung zum Mechatroniker ist 16 Jahre alt. Er legt zur Unterzeichnung des Vertrages keine ärztliche Bescheinigung vor. Wie muss der Ausbilder reagieren?",
    "answers": {
      "A": "Er darf den Vertrag unterzeichnen, muss die Bescheinigung aber bis zum Ende der Probezeit einfordern.",
      "B": "Er darf den Jugendlichen nicht beschäftigen, bevor die Bescheinigung über die Erstuntersuchung vorliegt.",
      "C": "Die Untersuchung ist nur bei gefährlichen Arbeiten notwendig; er kann also beginnen.",
      "D": "Eine Bescheinigung des Hausarztes über die allgemeine Sportlichkeit reicht aus."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 32 JArbSchG darf ein Jugendlicher nur beschäftigt werden, wenn er innerhalb der letzten 14 Monate ärztlich untersucht wurde und dem Arbeitgeber eine Bescheinigung vorliegt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "In einem Vorstellungsgespräch fragt der Ausbilder eine Bewerberin nach ihrer Familienplanung für die nächsten fünf Jahre. Die Bewerberin lügt bewusst. Welche Konsequenz hat dies?",
    "answers": {
      "A": "Der Ausbildungsvertrag kann wegen arglistiger Täuschung angefochten werden.",
      "B": "Die Lüge bleibt folgenlos, da die Frage unzulässig war.",
      "C": "Die Auszubildende kann innerhalb der Probezeit fristlos entlassen werden, sobald die Lüge auffliegt.",
      "D": "Der Betrieb kann Schadenersatz verlangen."
    },
    "correct_answer": ["B"],
    "explanation": "Fragen nach der Familienplanung verstoßen gegen das AGG. Auf unzulässige Fragen hat der Bewerber ein 'Recht zur Lüge'.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Ausbildungsvertrag sieht eine Probezeit von 5 Monaten vor. Welche Rechtsfolge tritt ein?",
    "answers": {
      "A": "Der gesamte Vertrag ist nichtig.",
      "B": "Die Probezeit verkürzt sich automatisch auf das gesetzliche Höchstmaß von 4 Monaten.",
      "C": "Die Probezeit ist wirksam, da sie individuell vereinbart wurde.",
      "D": "Nur die Klausel zur Probezeit ist unwirksam, es gilt keine Probezeit."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 20 BBiG beträgt die Probezeit mindestens einen Monat und höchstens vier Monate. Abweichende Vereinbarungen zuungunsten des Azubis werden auf das gesetzliche Maß korrigiert.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder stellt fest, dass zwei Azubis im zweiten Lehrjahr ständig in Konflikt geraten. Er entscheidet sich für eine Moderation. Welcher Schritt gehört an den ANFANG eines Moderationszyklus?",
    "answers": {
      "A": "Bewertung der Lösungsvorschläge",
      "B": "Einstieg und Sammeln von Themen",
      "C": "Festlegen von Sanktionen",
      "D": "Erstellen eines Maßnahmenplans"
    },
    "correct_answer": ["B"],
    "explanation": "Ein klassischer Moderationszyklus beginnt mit dem Einstieg (Begrüßung, Regeln) und der Themensammlung (Problemerfassung).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Azubi soll lernen, wie man eine komplexe Kundenreklamation am Telefon bearbeitet. Der Ausbilder wählt das Rollenspiel. Warum ist diese Methode hier besonders geeignet?",
    "answers": {
      "A": "Weil der Azubi dabei keine Fehler machen kann.",
      "B": "Weil soziale Kompetenzen und Verhaltensweisen in einer geschützten Umgebung geübt werden können.",
      "C": "Weil es die schnellste Methode ist, um Fakten zu vermitteln.",
      "D": "Weil der Ausbilder währenddessen andere Arbeiten erledigen kann."
    },
    "correct_answer": ["B"],
    "explanation": "Rollenspiele fördern die affektiven Lernziele und die Kommunikationsfähigkeit durch praktisches Erproben und anschließendes Feedback.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Auszubildender führt sein Berichtsheft (Ausbildungsnachweis) nur sehr lückenhaft. Trotz mehrfacher Ermahnung ändert sich nichts. Welche Sanktion ist als letzte Vorstufe zur Kündigung angemessen?",
    "answers": {
      "A": "Eine schriftliche Abmahnung",
      "B": "Kürzung der Ausbildungsvergütung",
      "C": "Einbehalt des Urlaubs",
      "D": "Zusätzliche Überstunden zur Nacharbeit"
    },
    "correct_answer": ["A"],
    "explanation": "Die Führung des Berichtshefts ist eine Pflicht des Azubis (§ 13 BBiG). Verstöße hiergegen können nach erfolgloser Ermahnung abgemahnt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Während einer Unterweisung nach der 4-Stufen-Methode bemerkt der Ausbilder in Stufe 2 (Vormachen und Erklären), dass der Azubi unaufmerksam wird. Was sollte der Ausbilder tun?",
    "answers": {
      "A": "Die Unterweisung sofort abbrechen.",
      "B": "Den Azubi durch gezielte Fragen einbeziehen (aktivieren).",
      "C": "Schneller weitermachen, um Zeit zu sparen.",
      "D": "Den Stoff am nächsten Tag wiederholen."
    },
    "correct_answer": ["B"],
    "explanation": "In der 2. Stufe ist es wichtig, den Azubi nicht nur passiv zuschauen zu lassen, sondern durch Erklärungen und Fragen zur Mitwirkung anzuregen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Betrieb nutzt 'E-Learning' für die Theorievermittlung. Der Azubi soll die Module von zu Hause aus bearbeiten. Was muss der Ausbilder beachten?",
    "answers": {
      "A": "Die Zeit am PC gilt nicht als Arbeitszeit.",
      "B": "Der Betrieb muss die notwendigen Arbeitsmittel (z. B. Laptop) kostenlos zur Verfügung stellen.",
      "C": "E-Learning darf nur am Wochenende stattfinden.",
      "D": "Der Ausbilder muss für Rückfragen zur Verfügung stehen (Lernbegleitung)."
    },
    "correct_answer": ["B", "D"],
    "explanation": "Ausbildungsmittel müssen kostenlos gestellt werden (§ 14 BBiG). Zudem entbindet E-Learning den Ausbilder nicht von seiner Betreuungspflicht.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender schließt seine Prüfung mit der Note 'ausreichend' ab. Im Zeugnis möchte der Ausbilder schreiben: 'Er war stets bemüht, die ihm übertragenen Aufgaben zu erfüllen.' Warum ist dieser Satz problematisch?",
    "answers": {
      "A": "Er ist zu positiv formuliert.",
      "B": "Es ist ein 'Geheimcode', der aussagt, dass der Azubi zwar gewollt, aber nichts erreicht hat.",
      "C": "Er ist grammatikalisch falsch.",
      "D": "Solche Sätze sind seit 2020 gesetzlich verboten."
    },
    "correct_answer": ["B"],
    "explanation": "Das Zeugnis muss wohlwollend sein, darf aber keine versteckten negativen Bewertungen enthalten. 'Stets bemüht' gilt als Chiffre für Erfolglosigkeit.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi hat seine Abschlussprüfung bestanden. Am nächsten Tag erscheint er im Betrieb und arbeitet normal weiter, ohne dass jemand widerspricht. Welche rechtliche Folge hat dies?",
    "answers": {
      "A": "Keine, er ist nun Praktikant.",
      "B": "Es entsteht automatisch ein unbefristetes Arbeitsverhältnis.",
      "C": "Das Ausbildungsverhältnis verlängert sich um einen Monat.",
      "D": "Er muss sofort nach Hause geschickt werden, sonst macht sich der Chef strafbar."
    },
    "correct_answer": ["B"],
    "explanation": "Wird ein Auszubildender im Anschluss an das Ausbildungsverhältnis beschäftigt, ohne dass hierüber etwas vereinbart worden ist, so gilt ein Arbeitsverhältnis auf unbestimmte Zeit als begründet (§ 24 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder möchte einen Azubi für 3 Monate nach Frankreich schicken (Auslandsaufenthalt). Welche Voraussetzungen müssen erfüllt sein?",
    "answers": {
      "A": "Der Auslandsaufenthalt muss dem Ausbildungsziel dienen.",
      "B": "Die Gesamtdauer der Auslandsphasen darf in der Regel 1/4 der Ausbildungsdauer nicht überschreiten.",
      "C": "Die zuständige Stelle (Kammer) muss nicht informiert werden.",
      "D": "Der Azubi muss mindestens 18 Jahre alt sein."
    },
    "correct_answer": ["A", "B"],
    "explanation": "Auslandsaufenthalte sind bis zu 25% der Ausbildungsdauer möglich (§ 2 BBiG), sofern sie dem Ausbildungsziel dienen. Die Kammer sollte informiert werden, eine Genehmigung ist bei Einhaltung der Grenzen nicht immer strikt nötig, aber ratsam.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Betrieb hat 50 Mitarbeiter, aber keine Jugend- und Auszubildendenvertretung (JAV). Unter welchen Bedingungen könnte eine JAV gewählt werden?",
    "answers": {
      "A": "Es müssen mindestens 5 Jugendliche (unter 18) oder Azubis (unter 25) dauerhaft beschäftigt sein.",
      "B": "Es muss ein Betriebsrat vorhanden sein.",
      "C": "Der Chef muss die Wahl persönlich anordnen.",
      "D": "Jeder Betrieb über 20 Mitarbeiter muss zwingend eine JAV haben."
    },
    "correct_answer": ["A", "B"],
    "explanation": "Die JAV setzt einen Betriebsrat voraus. Zudem müssen mindestens 5 wahlberechtigte Personen im Betrieb sein.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Azubi hat Probleme, die theoretischen Hintergründe der Hydraulik zu verstehen. Der Ausbilder beauftragt einen erfahrenen Gesellen, dem Azubi dies zu erklären. Wer trägt die Verantwortung für die Vermittlung?",
    "answers": {
      "A": "Der Geselle, da er die Aufgabe übernommen hat.",
      "B": "Der Ausbilder, da er die Ausbildung leitet und überwacht.",
      "C": "Der Azubi selbst (Selbstlernpflicht).",
      "D": "Die Berufsschule."
    },
    "correct_answer": ["B"],
    "explanation": "Der Ausbilder kann Aufgaben an 'Ausbildungsbeauftragte' delegieren, bleibt aber für die ordnungsgemäße Durchführung verantwortlich (§ 14 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Welche Methode der Erfolgskontrolle eignet sich am besten, um die 'Handlungskompetenz' (Planen, Durchführen, Kontrollieren) eines Azubis am Ende eines Projekts zu prüfen?",
    "answers": {
      "A": "Ein schriftlicher Multiple-Choice-Test.",
      "B": "Ein Fachgespräch in Kombination mit einer Arbeitsprobe.",
      "C": "Das Abfragen von Vokabeln.",
      "D": "Die Kontrolle der Anwesenheitsliste."
    },
    "correct_answer": ["B"],
    "explanation": "Handlungskompetenz zeigt sich im Tun (Arbeitsprobe) und im Reflektieren darüber (Fachgespräch).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Bewerber für eine Bürokaufmann-Lehre hat die Fachhochschulreife. Der Ausbilder schlägt vor, die Ausbildung direkt auf 2 Jahre zu verkürzen. Wo muss dies beantragt werden?",
    "answers": {
      "A": "Gar nicht, das entscheiden Betrieb und Azubi allein.",
      "B": "Bei der zuständigen Stelle (z. B. IHK), die dies in das Verzeichnis der Berufsausbildungsverhältnisse einträgt.",
      "C": "Beim Kultusministerium des Landes.",
      "D": "Bei der Bundesagentur für Arbeit."
    },
    "correct_answer": ["B"],
    "explanation": "Verkürzungen der Ausbildungszeit müssen gemeinsam beantragt und von der Kammer genehmigt/eingetragen werden (§ 8 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "In der Mitte der Ausbildung stellt ein Azubi fest, dass er den falschen Beruf gewählt hat. Er möchte kündigen. Welche Frist muss er einhalten?",
    "answers": {
      "A": "Keine, er kann jederzeit fristlos gehen.",
      "B": "Eine Kündigungsfrist von 4 Wochen.",
      "C": "Er kann nach der Probezeit gar nicht mehr kündigen.",
      "D": "Drei Monate zum Quartalsende."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 22 BBiG kann der Azubi mit einer Frist von 4 Wochen kündigen, wenn er die Ausbildung aufgeben oder sich für eine andere Berufstätigkeit ausbilden lassen will.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 2,
    "question": "Ein Ausbildungsbetrieb möchte einen Azubi nach der Ausbildung nicht übernehmen. Wann muss er dies dem Azubi spätestens mitteilen?",
    "answers": {
      "A": "Drei Monate vor Ende der Ausbildung (Pflicht zur frühzeitigen Info).",
      "B": "Gar nicht, das Ende steht im Vertrag.",
      "C": "Am Tag der Zeugnisübergabe.",
      "D": "Vier Wochen nach der Zwischenprüfung."
    },
    "correct_answer": ["B"],
    "explanation": "Rechtlich endet der Vertrag mit Ablauf der Zeit oder Bestehen der Prüfung. Es gibt keine gesetzliche Frist zur Mitteilung der Nichtübernahme (außer es ist im Tarifvertrag anders geregelt), auch wenn es pädagogisch sinnvoll ist.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Azubi im 3. Lehrjahr soll im Rahmen der 'selbstständigen Projektarbeit' eine neue Lagerordnung entwerfen. Der Ausbilder gibt nur das Ziel vor. Welcher Führungsstil ist hier angemessen?",
    "answers": {
      "A": "Autoritärer Führungsstil",
      "B": "Kooperativer Führungsstil",
      "C": "Laissez-faire-Stil",
      "D": "Situativer Führungsstil"
    },
    "correct_answer": ["B", "D"],
    "explanation": "Kooperation fördert die Selbstständigkeit. Da der Stil an die Reife des Azubis (3. Jahr) angepasst wird, spricht man auch von situativer Führung.",
    "question_type": "multiple_choice"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Was gilt seit 2020 bezüglich der Mindestvergütung für Auszubildende?",
    answers: {
      A: "Es gibt eine gesetzliche Mindestausbildungsvergütung für alle neuen Verträge",
      B: "Die Vergütung ist weiterhin völlig frei verhandelbar",
      C: "Die Mindestvergütung steigt mit jedem Ausbildungsjahr an",
      D: "Nur Betriebe mit Tarifbindung müssen eine Mindestvergütung zahlen",
    },
    correct_answer: ["A", "C"],
    explanation: "Mit der Reform 2020 wurde eine gesetzliche Mindestvergütung (§ 17 BBiG) eingeführt, die jährlich angepasst wird und nach Ausbildungsjahren gestaffelt steigt.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Unter welchen Voraussetzungen ist seit 2020 eine Teilzeitausbildung möglich?",
    answers: {
      A: "Nur bei berechtigtem Interesse (z. B. Kindererziehung oder Pflege)",
      B: "Sie steht nun allen Auszubildenden offen, sofern der Betrieb zustimmt",
      C: "Die tägliche Arbeitszeit darf nicht reduziert werden",
      D: "Die Ausbildungsdauer verlängert sich bei Teilzeit automatisch um das Doppelte",
    },
    correct_answer: ["B"],
    explanation: "Seit 2020 ist die Teilzeitausbildung (§ 7a BBiG) für alle möglich. Ein 'berechtigtes Interesse' (wie früher nötig) muss nicht mehr nachgewiesen werden; Betrieb und Azubi müssen sich lediglich einig sein.",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Wie wirkt sich eine Teilzeitausbildung auf die Gesamtdauer der Ausbildung aus?",
    answers: {
      A: "Die Dauer verlängert sich höchstens bis zum 1,5-fachen der Regeldauer",
      B: "Die Dauer bleibt immer gleich, nur die Inhalte werden gekürzt",
      C: "Die Dauer verkürzt sich, da intensiver gelernt wird",
      D: "Die Verlängerung muss im Ausbildungsvertrag vereinbart werden",
    },
    correct_answer: ["A", "D"],
    explanation: "Bei Teilzeit verlängert sich die Kalenderzeit der Ausbildung entsprechend der Reduzierung, jedoch maximal bis zum 1,5-fachen der regulären Ausbildungsdauer (§ 7a BBiG).",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Was regelt das BBiG seit 2020 bezüglich der Freistellung von erwachsenen Auszubildenden für den Berufsschulunterricht?",
    answers: {
      A: "Erwachsene müssen nach der Schule immer in den Betrieb zurückkehren",
      B: "Erwachsene werden nun (wie Jugendliche) an Schultagen mit mehr als 5 Unterrichtsstunden einmalig pro Woche freigestellt",
      C: "Die Zeit in der Berufsschule wird nicht auf die Arbeitszeit angerechnet",
      D: "An Prüfungstagen müssen auch Erwachsene nicht mehr in den Betrieb",
    },
    correct_answer: ["B", "D"],
    explanation: "Seit 2020 sind erwachsene Azubis den Jugendlichen weitgehend gleichgestellt (§ 15 BBiG). Ein Berufsschultag (> 5 Std.) wird einmal pro Woche mit der durchschnittlichen täglichen Arbeitszeit angerechnet.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Welche Institution ist für die Anerkennung ausländischer Berufsqualifikationen im Rahmen des BBiG zuständig?",
    answers: {
      A: "Die Bundesagentur für Arbeit",
      B: "Die zuständige Stelle (z. B. IHK FOSA oder HWK)",
      C: "Das Auswärtige Amt",
      D: "Die jeweilige Berufsschule",
    },
    correct_answer: ["B"],
    explanation: "Die zuständigen Stellen (Kammern) prüfen im Rahmen des Berufsqualifikationsfeststellungsgesetzes (BQFG), ob ausländische Abschlüsse mit dem deutschen BBiG-Abschluss gleichwertig sind.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Was versteht man unter 'Mobilem Lernen' oder 'E-Learning' in der modernen Ausbildung?",
    answers: {
      A: "Das Lernen während der Fahrt zur Arbeit",
      B: "Der Einsatz digitaler Medien und Plattformen zur Vermittlung von Ausbildungsinhalten",
      C: "Dass der Ausbilder dem Azubi SMS-Anweisungen schickt",
      D: "Die ausschließliche Ausbildung im Homeoffice ohne Praxisbezug",
    },
    correct_answer: ["B"],
    explanation: "Digitales Lernen unterstützt die Ausbildung durch Flexibilität und Medienkompetenz, ersetzt aber im dualen System nicht den praktischen Teil im Betrieb.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Wie kann die Inklusion von Menschen mit Behinderung in der Ausbildung gefördert werden?",
    answers: {
      A: "Durch behindertengerechte Gestaltung des Arbeitsplatzes",
      B: "Durch Nachteilsausgleiche bei Prüfungen (z. B. Zeitverlängerung)",
      C: "Durch Ausbildung nach speziellen Fachpraktiker-Regelungen (§ 66 BBiG)",
      D: "Gar nicht, da das BBiG nur für gesunde Menschen gilt",
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Das BBiG sieht spezielle Regelungen (§ 64-67) vor, um Menschen mit Behinderung eine gleichwertige Berufsausbildung zu ermöglichen, inklusive angepasster Prüfungsbedingungen.",
    question_type: "multiple_choice",
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Welche Bestandteile sind zwingend in einer Ausbildungsordnung enthalten, die auf Basis des § 25 BBiG erlassen wurde?",
    "answers": {
      "A": "Die Bezeichnung des Ausbildungsberufes",
      "B": "Die Ausbildungsdauer (Regelausbildungszeit)",
      "C": "Das Ausbildungsberufsbild (Fertigkeiten, Kenntnisse und Fähigkeiten)",
      "D": "Die Höhe der angemessenen Ausbildungsvergütung"
    },
    "correct_answer": ["A", "B", "C"],
    "explanation": "Die Vergütung ist nicht Teil der Ausbildungsordnung, sondern wird im Ausbildungsvertrag individuell (oft auf Basis von Tarifen) geregelt. Die Ausbildungsordnung legt nur den Rahmen für die sachliche und zeitliche Gliederung sowie die Prüfungsanforderungen fest.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was versteht man unter einer 'Stufenausbildung' im Sinne des BBiG?",
    "answers": {
      "A": "Eine Ausbildung, die in aufeinander aufbauenden Phasen erfolgt, wobei die erste Stufe mit einem eigenen Berufsabschluss enden kann",
      "B": "Eine Ausbildung, die abwechselnd im Betrieb und in der Schule stattfindet",
      "C": "Die Gliederung der Ausbildung in Probezeit und Hauptzeit",
      "D": "Ein Modell, bei dem die Vergütung stufenweise pro Quartal steigt"
    },
    "correct_answer": ["A"],
    "explanation": "Stufenausbildungen (z.B. im Bauhauptgewerbe) ermöglichen nach einer ersten Stufe (z.B. 2 Jahre) einen qualifizierten Abschluss, auf dem eine weitere Spezialisierung (z.B. ein drittes Jahr zum Gesellen) aufbauen kann.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender ist 17 Jahre alt. Welche Besonderheit gilt gemäß Jugendarbeitsschutzgesetz (JArbSchG) bezüglich der ersten Nachuntersuchung?",
    "answers": {
      "A": "Sie muss nach 6 Monaten erfolgen",
      "B": "Sie muss ein Jahr nach Aufnahme der Ausbildung erfolgen, sofern der Jugendliche dann noch nicht 18 ist",
      "C": "Sie ist nur erforderlich, wenn der Jugendliche im Handwerk arbeitet",
      "D": "Sie entfällt, wenn die Erstuntersuchung ohne Befund war"
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 33 JArbSchG hat der Arbeitgeber sich ein Jahr nach Aufnahme der Beschäftigung eine Bescheinigung über eine Nachuntersuchung vorlegen zu lassen, falls der Auszubildende zu diesem Zeitpunkt noch minderjährig ist.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Welches Dokument bildet die Grundlage für die Erstellung des 'Betrieblichen Ausbildungsplans'?",
    "answers": {
      "A": "Der Rahmenlehrplan der Berufsschule",
      "B": "Der Ausbildungsrahmenplan der Ausbildungsordnung",
      "C": "Die Arbeitsordnung des Betriebes",
      "D": "Das Zeugnis der letzten Schule"
    },
    "correct_answer": ["B"],
    "explanation": "Der Ausbildungsrahmenplan (sachliche und zeitliche Gliederung) ist die verbindliche Vorlage. Dieser muss vom Betrieb auf die eigenen Gegebenheiten angepasst werden (Betrieblicher Ausbildungsplan).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wer entscheidet über die 'fachliche Eignung' eines Ausbilders in einem zulassungspflichtigen Handwerk?",
    "answers": {
      "A": "Der Inhaber des Betriebes",
      "B": "Die zuständige Stelle (Handwerkskammer)",
      "C": "Die Berufsschule",
      "D": "Das Bundesinstitut für Berufsbildung (BIBB)"
    },
    "correct_answer": ["B"],
    "explanation": "Die Überwachung der persönlichen und fachlichen Eignung obliegt nach § 32 BBiG bzw. der HwO der zuständigen Stelle (Kammer).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Was beschreibt die 'didaktische Parallelität' im dualen System?",
    "answers": {
      "A": "Dass Ausbilder und Lehrer denselben Stoff am gleichen Tag unterrichten müssen",
      "B": "Die inhaltliche und zeitliche Abstimmung zwischen Betrieb und Berufsschule",
      "C": "Das gleichzeitige Lernen von Theorie und Praxis im Betrieb",
      "D": "Dass zwei Auszubildende immer die gleichen Aufgaben erhalten"
    },
    "correct_answer": ["B"],
    "explanation": "Lernortkooperation zielt darauf ab, dass die schulischen Inhalte (Rahmenlehrplan) und die betriebliche Praxis (Ausbildungsrahmenplan) so weit wie möglich synchronisiert werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Welches Ziel verfolgt die 'Leittextmethode' primär?",
    "answers": {
      "A": "Die reine Vermittlung von Faktenwissen durch Vorlesen",
      "B": "Die Förderung der Handlungskompetenz durch selbstständiges Planen, Durchführen und Kontrollieren",
      "C": "Die Entlastung des Ausbilders, damit dieser nicht mehr anwesend sein muss",
      "D": "Die Vorbereitung auf schriftliche Multiple-Choice-Prüfungen"
    },
    "correct_answer": ["B"],
    "explanation": "Die Leittextmethode ist eine Form des handlungsorientierten Lernens, bei der der Auszubildende anhand von Leitfragen und Aufgaben eine vollständige Handlung vollzieht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "In der Gruppendynamik nach Tuckman folgt auf die 'Forming'-Phase welche Phase?",
    "answers": {
      "A": "Norming",
      "B": "Storming",
      "C": "Performing",
      "D": "Adjourning"
    },
    "correct_answer": ["B"],
    "explanation": "Die Phasen sind: Forming (Kontakt), Storming (Konflikt), Norming (Kontrakt), Performing (Kooperation). Die Storming-Phase ist oft durch Machtkämpfe und Rollenfindung geprägt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Was versteht man unter einem 'affektiven Lernziel'?",
    "answers": {
      "A": "Die Vermittlung von manuellem Geschick",
      "B": "Die Änderung von Einstellungen, Werten und Verhaltensweisen",
      "C": "Das Auswendiglernen von Fachbegriffen",
      "D": "Das Verstehen komplexer mathematischer Formeln"
    },
    "correct_answer": ["B"],
    "explanation": "Affektive Lernziele betreffen die Herzens- und Einstellungsebene (z.B. Sorgfalt, Pünktlichkeit, Kundenorientierung).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender zeigt eine 'Leistungsstagnation'. Welche pädagogischen Ursachen könnten vorliegen?",
    "answers": {
      "A": "Überforderung durch zu komplexe Aufgaben",
      "B": "Unterforderung und Langeweile",
      "C": "Mangelndes Feedback durch den Ausbilder",
      "D": "Zu hohe Ausbildungsvergütung"
    },
    "correct_answer": ["A", "B", "C"],
    "explanation": "Sowohl Unter- als auch Überforderung sowie fehlende Rückmeldung führen häufig zu einem Leistungsknick.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 2,
    "question": "Wann endet das Ausbildungsverhältnis offiziell, wenn der Auszubildende die Abschlussprüfung vor Ablauf der im Vertrag gesetzten Zeit besteht?",
    "answers": {
      "A": "Mit dem Datum, das im Ausbildungsvertrag steht",
      "B": "Mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss",
      "C": "Am Ende des jeweiligen Monats",
      "D": "Sobald der Auszubildende seinen ersten Arbeitstag als Geselle antritt"
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 21 BBiG endet die Ausbildung mit Bestehen der Abschlussprüfung, d.h. in dem Moment, in dem der Prüfungsausschuss das Ergebnis mitteilt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Welcher Grundsatz gilt für die Erstellung eines Arbeitszeugnisses für Auszubildende?",
    "answers": {
      "A": "Wahrheitspflicht und Wohlwollenspflicht",
      "B": "Es dürfen nur gute Noten vergeben werden",
      "C": "Fehlzeiten müssen zwingend aufgeführt werden",
      "D": "Der Ausbilder darf seine private Meinung über den Charakter frei äußern"
    },
    "correct_answer": ["A"],
    "explanation": "Das Zeugnis muss wahr sein, darf aber das weitere Fortkommen des Auszubildenden nicht unbillig erschweren (Wohlwollen).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 2,
    "question": "Was ist der Unterschied zwischen einem einfachen und einem qualifizierten Zeugnis?",
    "answers": {
      "A": "Das einfache Zeugnis enthält nur Angaben zu Art und Dauer der Ausbildung",
      "B": "Das qualifizierte Zeugnis enthält zusätzlich Angaben zu Führung und Leistung",
      "C": "Das einfache Zeugnis ist handschriftlich",
      "D": "Nur das qualifizierte Zeugnis ist rechtlich bindend"
    },
    "correct_answer": ["A", "B"],
    "explanation": "Auszubildende haben bei Ende der Ausbildung Anspruch auf ein Zeugnis. Auf Verlangen muss es ein qualifiziertes Zeugnis sein (§ 16 BBiG).",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die 17-jährige Auszubildende Lisa arbeitet in einer Arztpraxis. Am Montag hat sie 9 Stunden gearbeitet, um am Freitag früher gehen zu können. Am Dienstag hat sie Berufsschule (Beginn 08:00 Uhr, Ende 13:15 Uhr, 6 Unterrichtsstunden). Der Ausbilder verlangt, dass sie nach der Schule für 2 Stunden in die Praxis kommt, um die Ablage zu erledigen. Wie ist die Rechtslage bezüglich des Dienstags?",
    "answers": {
      "A": "Lisa muss kommen, da die 6 Stunden Schule plus 2 Stunden Arbeit die 8-Stunden-Grenze nicht überschreiten.",
      "B": "Lisa muss nicht kommen, da sie durch die 6 Unterrichtsstunden einmalig pro Woche mit der durchschnittlichen täglichen Arbeitszeit (8 Std.) anzurechnen ist.",
      "C": "Lisa muss kommen, da die Freistellung für den ganzen Tag nur gilt, wenn die Schule vor 13:00 Uhr endet.",
      "D": "Lisa muss kommen, da der Zeitausgleich vom Montag Vorrang vor der Berufsschulbefreiung hat."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 15 BBiG / § 9 JArbSchG gilt: Ein Schultag mit mehr als 5 Unterrichtsstunden (einmal pro Woche) wird pauschal mit der täglichen Sollarbeitszeit angerechnet. Ein 'Nachkommen' ist rechtlich ausgeschlossen, egal wie kurz der Weg oder wie wichtig die Arbeit ist.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder im 2. Lehrjahr stellt fest, dass sein Azubi zwar fachlich sehr gute Ergebnisse liefert, aber bei der Planung neuer Aufgaben sehr unsicher ist und bei jedem Schritt nachfragt. Er möchte die 'Methodenkompetenz' gezielt fördern. Welche Maßnahme ist hierfür am treffendsten?",
    "answers": {
      "A": "Der Ausbilder erklärt dem Azubi die nächsten drei Aufgaben noch einmal ganz detailliert Schritt für Schritt.",
      "B": "Der Ausbilder gibt dem Azubi ein fertiges Flussdiagramm vor, an dem er sich bei Problemen orientieren kann.",
      "C": "Der Ausbilder setzt die Leittextmethode ein, bei der der Azubi anhand von Leitfragen den Arbeitsgang selbstständig planen und kontrollieren muss.",
      "D": "Der Ausbilder lobt den Azubi verstärkt für seine guten fachlichen Ergebnisse, um sein Selbstbewusstsein zu stärken."
    },
    "correct_answer": ["C"],
    "explanation": "Während A und B die Abhängigkeit erhöhen, zielt C (Leittextmethode) direkt auf die 'vollständige Handlung' ab. Da der Fokus auf 'Methodenkompetenz' (Planen/Organisieren) liegt, ist das selbstständige Erarbeiten der Struktur der richtige Weg.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein IT-Systemhaus möchte einen jungen Mann ausbilden, der bereits ein abgebrochenes Informatikstudium (4 Semester) vorweist. Der Betrieb und der Bewerber sind sich einig, dass die Ausbildung aufgrund der Vorkenntnisse verkürzt werden soll. Was ist bei der Vertragsgestaltung zu beachten?",
    "answers": {
      "A": "Die Verkürzung kann direkt im Ausbildungsvertrag vereinbart werden, muss aber von der zuständigen Stelle genehmigt werden.",
      "B": "Eine Verkürzung ist erst nach der Probezeit möglich, wenn die Leistungen im Betrieb nachweislich gut sind.",
      "C": "Bei Studienabbrechern verkürzt sich die Zeit kraft Gesetzes automatisch um 12 Monate.",
      "D": "Verkürzungen dürfen nur vorgenommen werden, wenn die Berufsschule der Kürzung des Rahmenlehrplans zustimmt."
    },
    "correct_answer": ["A"],
    "explanation": "Verkürzungen wegen Vorbildung werden bei Vertragsabschluss beantragt (§ 8 BBiG). Antwort B ist falsch (Leistungsverkürzung), C ist falsch (kein Automatismus) und D ist falsch (Schule wird gehört, entscheidet aber nicht primär über die Vertragsdauer).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender hat seine praktische Abschlussprüfung am 15. Juni bestanden und dies dem Betrieb mündlich mitgeteilt. Der Ausbildungsvertrag läuft laut Urkunde bis zum 31. August. Am 16. Juni erscheint der Azubi nicht zur Arbeit, da er denkt, er sei fertig. Der Chef mahnt ihn wegen unentschuldigten Fehlens ab. Wer ist im Recht?",
    "answers": {
      "A": "Der Chef, da der Vertrag schriftlich bis zum 31. August fixiert wurde und eine mündliche Mitteilung nicht reicht.",
      "B": "Der Azubi, sofern er dem Betrieb eine schriftliche Bescheinigung des Prüfungsausschusses über das Bestehen vorlegt.",
      "C": "Der Chef, weil der Azubi bis zur Aushändigung des Zeugnisses durch die Kammer (Postweg) weiterarbeiten muss.",
      "D": "Der Azubi, da das Verhältnis mit dem Tag der mündlichen Bekanntgabe des Bestehens durch den Ausschuss endet."
    },
    "correct_answer": ["D"],
    "explanation": "Laut § 21 BBiG endet das Verhältnis mit dem Bestehen der Prüfung, auch wenn das vertragliche Datum später liegt. Das Bestehen wird durch den Prüfungsausschuss am Tag der letzten Prüfung festgestellt und mitgeteilt. Ab diesem Moment ist er kein Azubi mehr.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder nutzt die 4-Stufen-Methode, um einem Azubi das Bedienen einer neuen Maschine zu erklären. In Stufe 3 (Nachmachen) schleichen sich beim Azubi kleine Fehler im Arbeitsablauf ein. Wie sollte der Ausbilder reagieren, um den Lernerfolg optimal zu sichern?",
    "answers": {
      "A": "Den Azubi gewähren lassen, damit er aus seinen Fehlern am Ende der Stufe 3 selbst lernt.",
      "B": "Sofort korrigierend eingreifen, um zu verhindern, dass sich eine falsche Arbeitsweise einprägt.",
      "C": "Die Fehler notieren und sie erst in der abschließenden Stufe 4 (Üben) besprechen.",
      "D": "Die Unterweisung abbrechen und zurück zu Stufe 2 gehen, da die Erklärung offenbar nicht ausreichte."
    },
    "correct_answer": ["B"],
    "explanation": "In der 4-Stufen-Methode (einem eher unterweisungsorientierten Modell) ist die sofortige Korrektur wichtig, damit keine Fehlgewöhnung stattfindet. Das 'Lernen aus Fehlern' ist eher Merkmal offenerer Methoden wie dem Modell der vollständigen Handlung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Auszubildender hat in seiner ersten Arbeitswoche im August 40 Stunden gearbeitet. Am Samstag bittet ihn der Meister, für 4 Stunden bei einer dringenden Inventur zu helfen. Als Ausgleich verspricht er ihm den kompletten nächsten Montag frei. Ist dieses Vorgehen zulässig?",
    "answers": {
      "A": "Ja, da durch den freien Montag die 5-Tage-Woche und die 40-Stunden-Woche eingehalten werden.",
      "B": "Nein, da Jugendliche an Samstagen grundsätzlich nicht beschäftigt werden dürfen.",
      "C": "Ja, sofern die Eltern des Jugendlichen der Samstagsarbeit schriftlich zugestimmt haben.",
      "D": "Nein, weil Samstagsarbeit für Jugendliche im August (Ferienzeit) verboten ist."
    },
    "correct_answer": ["A"],
    "explanation": "§ 16 JArbSchG erlaubt Samstagsarbeit (mit Ausnahmen, aber Inventur/Handel/etc. sind oft abgedeckt), solange die 5-Tage-Woche durch einen Ersatzruhetag in derselben Woche (hier der Montag der Folgewoche ist kritisch, aber das Gesetz meint meist den 5-Tage-Schnitt) gewährleistet bleibt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "In einem Betrieb mit 100 Mitarbeitern soll ein neuer Ausbilder bestellt werden. Dieser hat zwar die AdA-Prüfung bestanden, besitzt aber keinen Berufsabschluss im zu ausbildenden Beruf, sondern nur eine sechsjährige einschlägige Berufserfahrung. Die Kammer lehnt die Eintragung ab. Was kann der Betrieb tun?",
    "answers": {
      "A": "Nichts, ohne Berufsabschluss ist eine fachliche Eignung gesetzlich absolut ausgeschlossen.",
      "B": "Einen Antrag auf Zuerkennung der fachlichen Eignung (widerruflich) bei der zuständigen Stelle stellen, da langjährige Berufserfahrung als Ersatz dienen kann.",
      "C": "Den Mitarbeiter trotzdem ausbilden lassen, da die AdA-Prüfung die fachliche Eignung bereits bescheinigt.",
      "D": "Den Mitarbeiter als 'Ausbildungsbeauftragten' führen, solange der Geschäftsführer (ohne AdA-Schein) als Hauptausbilder im Vertrag steht."
    },
    "correct_answer": ["B"],
    "explanation": "§ 30 BBiG erlaubt der Kammer, Personen die fachliche Eignung zuzuerkennen, wenn sie eine angemessene Zeit (meist das 1,5-fache der Ausbildungszeit) im Beruf gearbeitet haben, auch ohne formale Prüfung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Azubi zeigt Anzeichen von Prüfungsangst vor der Zwischenprüfung. Der Ausbilder möchte ihm helfen. Welche Maßnahme ist pädagogisch am sinnvollsten, um die 'Selbstkompetenz' des Azubis langfristig zu stärken?",
    "answers": {
      "A": "Der Ausbilder versichert dem Azubi mehrfach, dass die Zwischenprüfung sowieso nicht zählt und er sich keine Sorgen machen muss.",
      "B": "Der Ausbilder führt eine Prüfungssimulation unter Realbedingungen durch und reflektiert danach gemeinsam mit dem Azubi Strategien zur Bewältigung von Blockaden.",
      "C": "Der Ausbilder gibt dem Azubi die Lösungen der Vorjahresprüfungen zum Auswendiglernen.",
      "D": "Der Ausbilder stellt den Azubi eine Woche vor der Prüfung vom Dienst frei, damit dieser in Ruhe zu Hause lernen kann."
    },
    "correct_answer": ["B"],
    "explanation": "Antwort B fördert die Selbstreflexion und Bewältigungsstrategien (Selbstkompetenz). A (Bagatellisierung) hilft nicht gegen die Angst, C fördert nur Fachwissen und D isoliert den Azubi mit seiner Angst.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender (19 Jahre) wird während der Probezeit krank. Der Ausbilder vermutet, dass der Azubi 'blau macht' und kündigt ihm am dritten Tag der Krankheit schriftlich ohne Angabe von Gründen. Ist die Kündigung wirksam?",
    "answers": {
      "A": "Nein, während einer Krankheit darf niemals gekündigt werden.",
      "B": "Ja, in der Probezeit kann das Ausbildungsverhältnis jederzeit ohne Einhalten einer Frist und ohne Angabe von Gründen gekündigt werden.",
      "C": "Nein, da der Betriebsrat bei jeder Kündigung einer Fortsetzung zustimmen muss.",
      "D": "Nur, wenn der Ausbilder beweisen kann, dass der Azubi nicht wirklich krank war."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 22 BBiG kann in der Probezeit ohne Grund und ohne Frist gekündigt werden. Das Verbot der Kündigung während Krankheit gilt im Arbeitsrecht nur unter sehr engen Grenzen und in der Probezeit der Ausbildung gar nicht (solange es nicht diskriminierend ist).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "In einer Lernsituation soll der Azubi ein 'Kundenberatungsgespräch' führen. Der Ausbilder möchte sicherstellen, dass der Azubi lernt, auf Einwände flexibel zu reagieren. Welche Sozialform ist hierfür am wenigsten geeignet?",
    "answers": {
      "A": "Rollenspiel",
      "B": "Einzelarbeit (Programmiertes Lernen)",
      "C": "Gruppenarbeit",
      "D": "Partnerarbeit"
    },
    "correct_answer": ["B"],
    "explanation": "Einzelarbeit/Programmiertes Lernen (B) findet ohne Interaktion statt. Da die Kommunikation und Reaktion auf Gegenüber (Sozialkompetenz) trainiert werden soll, ist diese Form hier ungeeignet.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was ist die rechtliche Folge, wenn ein Ausbildender den Ausbildungsvertrag nicht unverzüglich nach Abschluss bei der zuständigen Stelle zur Eintragung einreicht?",
    "answers": {
      "A": "Der Vertrag wird automatisch ungültig.",
      "B": "Die Probezeit verlängert sich um den Zeitraum der Verzögerung.",
      "C": "Es handelt sich um eine Ordnungswidrigkeit, die mit einem Bußgeld belegt werden kann.",
      "D": "Der Auszubildende kann sofort Schadenersatz in Höhe einer Monatsvergütung verlangen."
    },
    "correct_answer": ["C"],
    "explanation": "Die Eintragung ist eine Ordnungspflicht (§ 36 BBiG). Die Nichtmeldung macht den Vertrag nicht unwirksam, stellt aber einen Verstoß gegen die Pflichten des Ausbildenden dar.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender befindet sich im Modell der 'Vollständigen Handlung'. Er hat sich informiert und einen Plan erstellt. Bevor er mit der Ausführung beginnt, findet der Schritt 'Entscheiden' statt. Wer sollte in dieser Phase idealerweise die finale Entscheidung über den Plan treffen?",
    "answers": {
      "A": "Der Ausbilder allein, um die Sicherheit im Betrieb zu garantieren.",
      "B": "Der Auszubildende im Dialog mit dem Ausbilder, um seine Planungsverantwortung zu bestätigen.",
      "C": "Ein anderer Auszubildender (Peer-Review).",
      "D": "Es findet keine Entscheidung statt, man geht direkt zur Ausführung über."
    },
    "correct_answer": ["B"],
    "explanation": "Im Sinne der Handlungskompetenz soll der Azubi seine Planung begründen. Der Ausbilder gibt das 'Okay', aber der Prozess sollte ein Dialog sein, damit der Azubi hinter seiner Entscheidung steht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Azubi (17) hat eine tägliche Arbeitszeit von 8 Stunden. Der Weg zur Berufsschule dauert 45 Minuten, der Unterricht 6 Stunden und der Rückweg zum Betrieb 45 Minuten. Wie viel Arbeitszeit muss der Ausbilder für den Weg anrechnen?",
    "answers": {
      "A": "Die gesamte Wegezeit (90 Min) ist Arbeitszeit.",
      "B": "Nur der Weg von der Schule zum Betrieb ist Arbeitszeit.",
      "C": "Gar keine Wegezeit, da Wegezeiten grundsätzlich Privatvergnügen sind.",
      "D": "Nur die Zeit, die die 8 Stunden Tageshöchstzeit überschreitet."
    },
    "correct_answer": ["B"],
    "explanation": "Wege zwischen Wohnung und Lernort sind keine Arbeitszeit. Wege zwischen den beiden Lernorten (Schule -> Betrieb) innerhalb eines Arbeitstages gelten jedoch als Arbeitszeit (§ 9 JArbSchG / § 15 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi fällt durch die Abschlussprüfung. Er verlangt vom Ausbilder eine Verlängerung des Vertrages. Der Ausbilder lehnt ab, da er mit den Leistungen des Azubis unzufrieden ist. Wie endet das Verhältnis?",
    "answers": {
      "A": "Es endet zum vereinbarten Termin im Vertrag.",
      "B": "Es verlängert sich automatisch kraft Gesetzes bis zur nächsten Prüfung, auch gegen den Willen des Ausbilders.",
      "C": "Es endet nur, wenn der Ausbilder dem Azubi eine Abfindung zahlt.",
      "D": "Der Azubi muss die Verlängerung gerichtlich einklagen."
    },
    "correct_answer": ["B"],
    "explanation": "§ 21 BBiG ist eindeutig: Auf Verlangen des Azubis verlängert sich das Verhältnis. Der Ausbilder hat hier kein Ermessen, selbst wenn er den Azubi für ungeeignet hält.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder stellt fest, dass sein Azubi (1. Lehrjahr) sehr langsam arbeitet, aber keine Fehler macht. Welchen pädagogischen Rat sollte der Ausbilder befolgen?",
    "answers": {
      "A": "Den Azubi sofort auf Schnelligkeit trimmen, da in der Wirtschaft Zeit Geld ist.",
      "B": "Zuerst die Genauigkeit festigen und erst im weiteren Verlauf der Ausbildung die Arbeitsgeschwindigkeit steigern.",
      "C": "Dem Azubi Akkordarbeit zuweisen, um den Druck zu erhöhen.",
      "D": "Dem Azubi nur noch einfachste Aufgaben geben, damit er schneller fertig wird."
    },
    "correct_answer": ["B"],
    "explanation": "Der pädagogische Grundsatz lautet: Qualität vor Quantität (Sorgfalt vor Geschwindigkeit), besonders zu Beginn der Ausbildung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte in einem Beruf ausbilden, der nicht im Verzeichnis der anerkannten Berufe steht, aber 'fast so ähnlich' ist wie ein existierender Beruf. Was ist die Konsequenz?",
    "answers": {
      "A": "Die Ausbildung ist zulässig, wenn der Betrieb die Unterschiede im Vertrag benennt.",
      "B": "Die Ausbildung ist nichtig; eine Prüfung vor der Kammer ist ausgeschlossen.",
      "C": "Der Betrieb kann eine Sondergenehmigung beim Bundeskanzleramt einholen.",
      "D": "Der Azubi gilt automatisch als 'angelernt' und bekommt nach 3 Jahren den Gesellenbrief."
    },
    "correct_answer": ["B"],
    "explanation": "Das BBiG schützt Berufsbezeichnungen. Ausbildung darf nur in staatlich anerkannten Berufen erfolgen (§ 4 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "In einer Betriebsvereinbarung ist geregelt, dass alle Mitarbeiter (auch Azubis) im Dezember keinen Urlaub nehmen dürfen (Betriebsurlaubssperre). Ein Azubi möchte trotzdem im Dezember Urlaub für seine Hochzeit. Was dominiert?",
    "answers": {
      "A": "Die Betriebsvereinbarung, da sie für alle gilt.",
      "B": "Der Wunsch des Azubis, da persönliche Belange bei wichtigen Ereignissen (Hochzeit) Vorrang haben.",
      "C": "Das BBiG, das Urlaubssperren für Azubis generell verbietet.",
      "D": "Die Entscheidung der Berufsschule."
    },
    "correct_answer": ["B"],
    "explanation": "Urlaub muss gewährt werden, wenn keine dringenden betrieblichen Belange ODER soziale Belange anderer Mitarbeiter vorgehen. Eine Hochzeit ist ein schwerwiegender persönlicher Grund, der eine Ausnahme von der Sperre rechtfertigt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder möchte ein 'Gruppengespräch' führen, um ein Problem im Team zu lösen. Er setzt sich an das Kopfende eines rechteckigen Tisches, die Azubis an die Seiten. Welche Wirkung erzielt er damit?",
    "answers": {
      "A": "Eine Atmosphäre der Gleichberechtigung und Offenheit.",
      "B": "Eine Betonung seiner Machtposition und Hierarchie (autoritäre Distanz).",
      "C": "Keine, die Sitzordnung hat keinen Einfluss auf die Kommunikation.",
      "D": "Eine Förderung der Methodenkompetenz."
    },
    "correct_answer": ["B"],
    "explanation": "Die Sitzordnung am Kopfende signalisiert Führung und Kontrolle. Für ein offenes Gruppengespräch wäre ein runder Tisch oder eine Sitzordnung im Kreis besser.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Azubi hat Überstunden gemacht. Der Ausbilder möchte diese mit Geld auszahlen. Ist das rechtlich einwandfrei?",
    "answers": {
      "A": "Ja, Überstunden müssen immer vergütet werden.",
      "B": "Nein, bei Jugendlichen müssen Überstunden durch Freizeit ausgeglichen werden (innerhalb von 3 Wochen).",
      "C": "Nur wenn der Azubi schriftlich auf die Freizeit verzichtet.",
      "D": "Nur wenn der Stundenlohn 25% über dem normalen Satz liegt."
    },
    "correct_answer": ["B"],
    "explanation": "§ 8 JArbSchG: Über die 40 Stunden hinausgehende Zeit ist innerhalb von 3 Wochen durch Freizeit auszugleichen. Eine finanzielle Abgeltung widerspricht dem Schutzzweck des Gesetzes.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Wer ist für die Überwachung der 'angemessenen Ausbildungsvergütung' zuständig, wenn kein Tarifvertrag vorliegt?",
    "answers": {
      "A": "Das Finanzamt",
      "B": "Die zuständige Stelle (Eintragungsprüfung des Vertrages)",
      "C": "Die Bundesagentur für Arbeit",
      "D": "Der Zoll (Schwarzarbeitskontrolle)"
    },
    "correct_answer": ["B"],
    "explanation": "Die Kammer prüft bei der Eintragung des Vertrages, ob die Vergütung der Mindestvergütung nach § 17 BBiG entspricht oder (falls kein Tarif greift) nicht mehr als 20% unter dem ortsüblichen Tarif liegt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte erstmals ausbilden. Wer prüft im Vorfeld die 'Eignung der Ausbildungsstätte'?",
    "answers": {
      "A": "Das Gewerbeaufsichtsamt",
      "B": "Die Berufsgenossenschaft",
      "C": "Die zuständige Stelle (z. B. IHK oder HWK)",
      "D": "Die Agentur für Arbeit"
    },
    "correct_answer": ["C"],
    "explanation": "Gemäß § 32 BBiG überwacht die zuständige Stelle die Eignung der Ausbildungsstätte sowie die persönliche und fachliche Eignung der Ausbilder.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Was unterscheidet den 'Ausbildenden' vom 'Ausbilder' im rechtlichen Sinne?",
    "answers": {
      "A": "Es gibt keinen Unterschied, beide Begriffe sind synonym.",
      "B": "Der Ausbildende ist der Vertragspartner des Azubis (Betriebsinhaber), der Ausbilder führt die Ausbildung tatsächlich durch.",
      "C": "Der Ausbildende ist immer eine natürliche Person, der Ausbilder eine juristische Person.",
      "D": "Der Ausbilder unterschreibt den Ausbildungsvertrag."
    },
    "correct_answer": ["B"],
    "explanation": "Der Ausbildende (z. B. die GmbH) schließt den Vertrag. Da eine GmbH nicht selbst unterrichten kann, bestellt sie einen Ausbilder, der die pädagogische Arbeit leistet.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein potenzieller Ausbilder wurde wegen eines schweren Verstoßes gegen das Betäubungsmittelgesetz zu einer zweijährigen Haftstrafe verurteilt. Welche Eignung fehlt ihm?",
    "answers": {
      "A": "Die fachliche Eignung",
      "B": "Die persönliche Eignung",
      "C": "Die pädagogische Eignung",
      "D": "Die charakteristische Eignung"
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 29 BBiG ist persönlich nicht geeignet, wer Kinder und Jugendliche nicht beschäftigen darf oder schwerwiegend gegen das BBiG verstoßen hat (inkl. bestimmter Straftaten).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "In welchem Verhältnis müssen Fachkräfte zu Auszubildenden in einem Betrieb stehen, damit die Ausbildungsstätte als geeignet gilt?",
    "answers": {
      "A": "1 Fachkraft für 1 Azubi",
      "B": "In der Regel 1 bis 2 Fachkräfte für den ersten Azubi, jede weitere Fachkraft für einen weiteren Azubi",
      "C": "Mindestens 10 Fachkräfte pro Azubi",
      "D": "Es gibt keine Empfehlung zum Zahlenverhältnis."
    },
    "correct_answer": ["B"],
    "explanation": "Die zuständigen Stellen orientieren sich meist an dem Schlüssel: 1-2 Fachkräfte = 1 Azubi, 3-5 Fachkräfte = 2 Azubis, ab dann je 3 weitere Fachkräfte = +1 Azubi.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Welches Gesetz bildet die oberste Rechtsgrundlage für die Berufsbildung in Deutschland (außerhalb des Handwerks)?",
    "answers": {
      "A": "Das Betriebsverfassungsgesetz",
      "B": "Das Berufsbildungsgesetz (BBiG)",
      "C": "Das Jugendarbeitsschutzgesetz",
      "D": "Das Bürgerliche Gesetzbuch (BGB)"
    },
    "correct_answer": ["B"],
    "explanation": "Das BBiG ist das Rahmengesetz für die gesamte berufliche Bildung in Deutschland (für das Handwerk gilt ergänzend die Handwerksordnung HwO).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Was gehört zu den 'indirekten Kosten' der Ausbildung für einen Betrieb?",
    "answers": {
      "A": "Die Ausbildungsvergütung",
      "B": "Die Kosten für Lehrmittel",
      "C": "Die Personalkosten der Ausbilder (Zeitaufwand)",
      "D": "Die Prüfungsgebühren der Kammer"
    },
    "correct_answer": ["C"],
    "explanation": "Direkte Kosten sind unmittelbar zahlbar (Vergütung, Material). Indirekte Kosten sind z. B. der Zeitaufwand der Fachkräfte, in der sie nicht produktiv arbeiten können.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Warum ist die Kooperation zwischen den Lernorten (Betrieb und Berufsschule) gesetzlich vorgeschrieben?",
    "answers": {
      "A": "Damit die Lehrer die Berichtshefte kontrollieren können.",
      "B": "Um eine Verzahnung von Theorie und Praxis sicherzustellen (§ 2 BBiG).",
      "C": "Damit der Betrieb die Noten der Berufsschule ändern kann.",
      "D": "Um die Schulpflicht des Azubis zu überwachen."
    },
    "correct_answer": ["B"],
    "explanation": "Die Lernortkooperation soll sicherstellen, dass schulische und betriebliche Inhalte aufeinander abgestimmt sind (Dualitätsprinzip).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was versteht man unter einer 'Einstiegsqualifizierung' (EQ)?",
    "answers": {
      "A": "Ein kurzes Praktikum von 2 Wochen zum Kennenlernen.",
      "B": "Ein sozialversicherungspflichtiges Langzeitpraktikum (6-12 Monate) zur Vorbereitung auf eine Ausbildung.",
      "C": "Die erste Woche der Ausbildung im Betrieb.",
      "D": "Die Abschlussprüfung Teil 1."
    },
    "correct_answer": ["B"],
    "explanation": "Die EQ dient als Brücke für Jugendliche, die noch nicht voll ausbildungsreif sind, um sie an eine Ausbildung heranzuführen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Darf ein Betrieb ausbilden, wenn er nicht alle im Ausbildungsrahmenplan geforderten Inhalte selbst vermitteln kann?",
    "answers": {
      "A": "Nein, das ist streng verboten.",
      "B": "Ja, wenn die fehlenden Inhalte durch Verbundausbildung oder überbetriebliche Maßnahmen ergänzt werden.",
      "C": "Ja, der Azubi muss sich diese Inhalte dann im Selbststudium aneignen.",
      "D": "Ja, sofern die Inhalte für die Prüfung nicht wichtig sind."
    },
    "correct_answer": ["B"],
    "explanation": "Mängel in der Eignung der Ausbildungsstätte können durch Ausbildung im Verbund (§ 10 BBiG) oder überbetriebliche Unterweisung ausgeglichen werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Welche Institution ist für die Erarbeitung von Ausbildungsordnungen auf Bundesebene zuständig?",
    "answers": {
      "A": "Die lokale IHK",
      "B": "Das Bundesinstitut für Berufsbildung (BIBB)",
      "C": "Die Bundesagentur für Arbeit",
      "D": "Das jeweilige Schulamt"
    },
    "correct_answer": ["B"],
    "explanation": "Das BIBB hat u. a. die Aufgabe, an der Vorbereitung von Ausbildungsordnungen mitzuwirken und die Forschung in der Berufsbildung voranzutreiben.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte einen Geflüchteten ausbilden. Welches Dokument ist neben dem Ausbildungsvertrag entscheidend für den Beginn der Ausbildung?",
    "answers": {
      "A": "Der Nachweis über ein abgeschlossenes Studium im Heimatland",
      "B": "Ein gültiger Aufenthaltstitel mit der Erlaubnis zur Ausübung einer Erwerbstätigkeit bzw. Berufsausbildung",
      "C": "Die Mitgliedschaft in einer deutschen Gewerkschaft",
      "D": "Ein polizeiliches Führungszeugnis aus dem Heimatland"
    },
    "correct_answer": ["B"],
    "explanation": "Die rechtliche Zulässigkeit der Beschäftigung hängt vom Aufenthaltsstatus und der Genehmigung durch die Ausländerbehörde ab.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Welcher Nutzen ergibt sich für einen Betrieb durch die Ausbildung eigener Fachkräfte?",
    "answers": {
      "A": "Einsparung von Einarbeitungskosten für externe Kräfte",
      "B": "Sicherung des spezifischen betrieblichen Know-hows",
      "C": "Imagegewinn als verantwortungsbewusstes Unternehmen",
      "D": "Auszubildende sind billige Arbeitskräfte für einfache Hilfstätigkeiten"
    },
    "correct_answer": ["A", "B", "C"],
    "explanation": "Ausbildung dient der Fachkräftesicherung. Dass Azubis 'billige Hilfskräfte' seien, ist rechtlich und pädagogisch falsch, da die Ausbildung im Vordergrund steht.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Was regelt die 'Handwerksordnung' (HwO) im Vergleich zum BBiG?",
    "answers": {
      "A": "Sie gilt ausschließlich für die Industrie.",
      "B": "Sie enthält spezifische Regelungen für die Berufsbildung in handwerklichen Berufen.",
      "C": "Sie ersetzt das BBiG komplett.",
      "D": "Sie regelt nur die Meisterprüfung."
    },
    "correct_answer": ["B"],
    "explanation": "Die HwO ist das Pendant zum BBiG für den Handwerkssektor; viele Regelungen sind jedoch identisch oder sehr ähnlich.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Wer entscheidet final über die Anerkennung eines neuen Ausbildungsberufes?",
    "answers": {
      "A": "Der Bundeskanzler",
      "B": "Das zuständige Bundesministerium (im Einvernehmen mit dem Bildungsministerium)",
      "C": "Die Gewerkschaft",
      "D": "Der Prüfungsausschuss"
    },
    "correct_answer": ["B"],
    "explanation": "Die staatliche Anerkennung von Ausbildungsberufen erfolgt durch Rechtsverordnung des zuständigen Fachministeriums.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Was versteht man unter dem Begriff 'Duales System'?",
    "answers": {
      "A": "Zwei Ausbilder betreuen einen Azubi.",
      "B": "Die Ausbildung findet an zwei Lernorten statt: Betrieb und Berufsschule.",
      "C": "Es gibt zwei Prüfungen: Zwischenprüfung und Abschlussprüfung.",
      "D": "Man kann zwei Berufe gleichzeitig lernen."
    },
    "correct_answer": ["B"],
    "explanation": "Das Duale System ist das Kennzeichen der deutschen Berufsbildung: Praxis im Betrieb, Theorie in der Schule.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was ist die Hauptaufgabe des 'Hauptausschusses' beim Bundesinstitut für Berufsbildung (BIBB)?",
    "answers": {
      "A": "Er korrigiert die Abschlussprüfungen.",
      "B": "Er berät die Bundesregierung in grundsätzlichen Fragen der Berufsbildung.",
      "C": "Er vermittelt Ausbildungsplätze.",
      "D": "Er legt die Höhe der Ausbildungsvergütung fest."
    },
    "correct_answer": ["B"],
    "explanation": "Der Hauptausschuss ist das oberste Organ des BIBB und hat eine beratende Funktion für die Bundespolitik.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Ab welcher Anzahl an Auszubildenden muss ein Betrieb zwingend einen Ausbilder bestellen, wenn der Chef selbst nicht fachlich geeignet ist?",
    "answers": {
      "A": "Ab dem ersten Auszubildenden",
      "B": "Erst ab 5 Auszubildenden",
      "C": "Erst ab 10 Auszubildenden",
      "D": "Nur wenn der Azubi minderjährig ist"
    },
    "correct_answer": ["A"],
    "explanation": "Wer ausbilden will, muss entweder selbst geeignet sein oder einen geeigneten Ausbilder beschäftigen (§ 28 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Darf ein Ausbilder die Ausbildung in seinem Homeoffice durchführen?",
    "answers": {
      "A": "Ja, uneingeschränkt.",
      "B": "Nur wenn die zuständige Stelle die Eignung der Privatwohnung als Ausbildungsstätte bestätigt hat (sehr selten).",
      "C": "Nein, Ausbildung muss immer im Hauptbetrieb stattfinden.",
      "D": "Nur wenn der Azubi ein eigenes Zimmer dort hat."
    },
    "correct_answer": ["B"],
    "explanation": "Grundsätzlich muss die Ausbildungsstätte geeignet sein. 'Mobiles Lernen' ist möglich, aber die permanente Ausbildung in einer Privatwohnung widerspricht in der Regel der Eignung einer Ausbildungsstätte.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was ist der wesentliche Inhalt einer 'Ausbildungsordnung'?",
    "answers": {
      "A": "Die Pausenzeiten im Betrieb",
      "B": "Das Ausbildungsberufsbild und der Ausbildungsrahmenplan",
      "C": "Die Namen der Ausbilder",
      "D": "Die Kündigungsfristen während der Probezeit"
    },
    "correct_answer": ["B"],
    "explanation": "Die Ausbildungsordnung definiert das Ziel, die Dauer, das Berufsbild, den Rahmenplan und die Prüfungsanforderungen eines Berufs.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Welche Kompetenz gehört NICHT zu den klassischen Bereichen der beruflichen Handlungskompetenz?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Methodenkompetenz",
      "C": "Freizeitkompetenz",
      "D": "Sozialkompetenz"
    },
    "correct_answer": ["C"],
    "explanation": "Die berufliche Handlungskompetenz setzt sich aus Fach-, Methoden-, Sozial- und Selbstkompetenz zusammen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender ist zu Beginn des Kalenderjahres 15 Jahre alt. Wie viele Werktage (Montag bis Samstag) Urlaub stehen ihm gesetzlich mindestens zu?",
    "answers": {
      "A": "24 Werktage",
      "B": "25 Werktage",
      "C": "27 Werktage",
      "D": "30 Werktage"
    },
    "correct_answer": ["D"],
    "explanation": "Nach § 19 JArbSchG beträgt der Urlaub für unter 16-Jährige mindestens 30 Werktage. Die Altersgrenze gilt immer für den Beginn des Kalenderjahres.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender ist 17 Jahre alt und arbeitet von 08:00 bis 14:30 Uhr (6,5 Stunden). Wie lange muss seine Ruhepause laut Gesetz insgesamt mindestens sein?",
    "answers": {
      "A": "30 Minuten",
      "B": "45 Minuten",
      "C": "60 Minuten",
      "D": "15 Minuten"
    },
    "correct_answer": ["C"],
    "explanation": "Für Jugendliche (unter 18) schreibt § 11 JArbSchG bei einer Arbeitszeit von mehr als 6 Stunden eine Pause von 60 Minuten vor. Bei Erwachsenen (ab 18) würden hier 30 Minuten reichen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender wird im März 18 Jahre alt. Wie viele Werktage Urlaub stehen ihm für dieses Kalenderjahr gesetzlich mindestens zu?",
    "answers": {
      "A": "24 Werktage",
      "B": "25 Werktage",
      "C": "27 Werktage",
      "D": "30 Werktage"
    },
    "correct_answer": ["B"],
    "explanation": "Maßgeblich ist das Alter am 1. Januar. Da er am 01.01. noch 17 war, steht ihm der Urlaub für unter 18-Jährige zu, also 25 Werktage (§ 19 JArbSchG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Eine 16-jährige Auszubildende hat am Dienstag 9 Stunden im Betrieb gearbeitet. Wie lange darf sie am Mittwoch maximal arbeiten, damit die wöchentliche Höchstarbeitszeit nicht überschritten wird?",
    "answers": {
      "A": "Ebenfalls 9 Stunden",
      "B": "7 Stunden",
      "C": "8 Stunden",
      "D": "7,5 Stunden"
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche dürfen max. 40 Std./Woche arbeiten (§ 8 JArbSchG). Wenn an einem Tag auf 8,5 oder 9 Std. erhöht wird, muss dies innerhalb derselben Woche ausgeglichen werden, damit die 40 Std. im Schnitt passen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 19-jähriger Auszubildender arbeitet in einer 5-Tage-Woche. Wie viele Arbeitstage Urlaub stehen ihm gesetzlich mindestens zu?",
    "answers": {
      "A": "24 Tage",
      "B": "20 Tage",
      "C": "25 Tage",
      "D": "30 Tage"
    },
    "correct_answer": ["B"],
    "explanation": "Für Erwachsene gilt das BUrlG. Dieses schreibt 24 Werktage (Mo-Sa) vor. Rechnet man dies auf eine 5-Tage-Woche um, ergeben sich 20 Arbeitstage (24 / 6 * 5).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 17-jähriger Azubi beendet seine Schicht um 20:00 Uhr. Wann darf er am nächsten Morgen frühestens wieder mit der Arbeit beginnen?",
    "answers": {
      "A": "Um 06:00 Uhr",
      "B": "Um 07:00 Uhr",
      "C": "Um 08:00 Uhr",
      "D": "Um 09:00 Uhr"
    },
    "correct_answer": ["C"],
    "explanation": "Nach § 13 JArbSchG müssen Jugendliche nach Feierabend eine ununterbrochene Freizeit von mindestens 12 Stunden haben.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder plant einen 16-jährigen Azubi für Samstagsarbeit im Einzelhandel ein. Was muss er beachten?",
    "answers": {
      "A": "Samstagsarbeit ist für Jugendliche generell verboten.",
      "B": "Er muss dem Azubi einen Ersatzruhetag in derselben Woche (Mo-Fr) gewähren.",
      "C": "Der Azubi darf am Samstag nur 4 Stunden arbeiten.",
      "D": "Eine Freistellung ist nicht nötig, solange 40 Stunden nicht überschritten werden."
    },
    "correct_answer": ["B"],
    "explanation": "§ 16 JArbSchG erlaubt Samstagsarbeit in bestimmten Branchen (wie Handel), schreibt aber zwingend die 5-Tage-Woche vor. Ein Ersatzruhetag ist somit Pflicht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 20-jähriger Auszubildender hat eine tägliche Arbeitszeit von 9,5 Stunden. Wie lange muss seine Pause mindestens sein?",
    "answers": {
      "A": "30 Minuten",
      "B": "45 Minuten",
      "C": "60 Minuten",
      "D": "90 Minuten"
    },
    "correct_answer": ["B"],
    "explanation": "Für Erwachsene gilt das ArbZG. Ab 9 Stunden Arbeitszeit ist eine Pause von 45 Minuten vorgeschrieben (§ 4 ArbZG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Azubi hat Berufsschulunterricht von 08:00 bis 13:15 Uhr (6 Unterrichtsstunden). Der Ausbilder verlangt, dass er danach noch in den Betrieb kommt. Ist das zulässig?",
    "answers": {
      "A": "Ja, er muss die restliche Zeit bis 17:00 Uhr arbeiten.",
      "B": "Nein, er ist für diesen Tag komplett freigestellt und wird mit 8 Stunden angerechnet.",
      "C": "Nur wenn eine Prüfung ansteht.",
      "D": "Ja, aber nur für maximal 2 Stunden."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 15 BBiG (und § 9 JArbSchG) sind Azubis an einem Berufsschultag mit mehr als 5 Unterrichtsstunden einmal pro Woche für den ganzen Tag freizustellen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Welche maximale tägliche Arbeitszeit darf bei einem 17-jährigen Auszubildenden im Ausnahmefall (z.B. zur Kompensation eines kurzen Freitags) nicht überschritten werden?",
    "answers": {
      "A": "8 Stunden",
      "B": "8,5 Stunden",
      "C": "9 Stunden",
      "D": "10 Stunden"
    },
    "correct_answer": ["B"],
    "explanation": "Die Regelzeit ist 8 Stunden. Sie darf auf 8,5 Stunden verlängert werden, wenn die Zeit an anderen Tagen derselben Woche verkürzt wird (§ 8 JArbSchG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 19-jähriger Azubi hat Berufsschulunterricht von 8:00 bis 13:15 Uhr (6 Stunden). Danach soll er in den Betrieb. Wie wird die Zeit angerechnet?",
    "answers": {
      "A": "Die tatsächliche Zeit inkl. Pause und Wegezeit.",
      "B": "Gar nicht, Berufsschule ist Privatvergnügen.",
      "C": "Die Unterrichtszeit plus Pausen wird auf die Arbeitszeit angerechnet.",
      "D": "Pauschal mit 8 Stunden."
    },
    "correct_answer": ["C"],
    "explanation": "Bei Erwachsenen wird laut § 15 BBiG die Unterrichtszeit einschließlich der Pausen angerechnet. Eine pauschale Freistellung für den ganzen Tag gilt nur einmal pro Woche (wie bei Jugendlichen).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 15-jähriger Auszubildender soll in einer Bäckerei arbeiten. Ab wann darf er morgens frühestens beginnen?",
    "answers": {
      "A": "04:00 Uhr",
      "B": "05:00 Uhr",
      "C": "06:00 Uhr",
      "D": "07:00 Uhr"
    },
    "correct_answer": ["C"],
    "explanation": "15-Jährige dürfen erst ab 06:00 Uhr arbeiten. Erst ab 16 Jahren ist in Bäckereien der Beginn ab 05:00 Uhr (und ab 17 Jahren ab 04:00 Uhr) erlaubt (§ 14 JArbSchG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 17-jähriger Azubi arbeitet 5 Stunden am Stück. Er möchte keine Pause machen, um früher gehen zu können. Was muss der Ausbilder tun?",
    "answers": {
      "A": "Dem Wunsch nachkommen, um die Motivation zu fördern.",
      "B": "Eine Pause von mindestens 30 Minuten anordnen.",
      "C": "Eine Pause von 15 Minuten reicht hier.",
      "D": "Den Azubi erst nach 6 Stunden in die Pause schicken."
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche MÜSSEN bei einer Arbeitszeit von 4,5 bis 6 Stunden mindestens 30 Minuten Pause machen (§ 11 JArbSchG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 18-jähriger Azubi arbeitet im Gastgewerbe am Sonntag. Welchen Ausgleich muss er erhalten?",
    "answers": {
      "A": "Einen Ersatzruhetag innerhalb von 2 Wochen.",
      "B": "Einen Ersatzruhetag in derselben Woche.",
      "C": "Zahlung eines 100%igen Zuschlags ohne freien Tag.",
      "D": "Gar keinen, da Gastgewerbe eine Ausnahme ist."
    },
    "correct_answer": ["A"],
    "explanation": "Für Erwachsene gilt § 11 ArbZG: Für Sonntagsarbeit ist ein Ersatzruhetag innerhalb eines Zeitraums von zwei Wochen zu gewähren.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Azubi möchte seinen Urlaub während der Berufsschulferien nehmen. Der Ausbilder lehnt das ab. Ist das rechtens?",
    "answers": {
      "A": "Ja, der Betrieb bestimmt den Urlaubszeitpunkt allein.",
      "B": "Nein, Urlaub soll während der Berufsschulferien gegeben werden (§ 19 Abs. 4 JArbSchG).",
      "C": "Nur wenn der Azubi volljährig ist.",
      "D": "Ja, solange der Azubi noch Resturlaub hat."
    },
    "correct_answer": ["B"],
    "explanation": "Das JArbSchG schreibt vor, dass der Urlaub in der Zeit der Berufsschulferien gegeben werden SOLL. Erfolgt dies nicht, muss für jeden Berufsschultag, an dem der Azubi während des Urlaubs die Schule besucht, ein weiterer Urlaubstag gewährt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wie lang darf die 'Schichtzeit' (Arbeitszeit + Pausen) bei einem 17-jährigen Azubi in einem Gastronomiebetrieb maximal sein?",
    "answers": {
      "A": "8 Stunden",
      "B": "10 Stunden",
      "C": "11 Stunden",
      "D": "12 Stunden"
    },
    "correct_answer": ["C"],
    "explanation": "Im Gastgewerbe (und anderen speziellen Branchen) darf die Schichtzeit für Jugendliche bis zu 11 Stunden betragen, sonst maximal 10 Stunden (§ 12 JArbSchG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Azubi wird zur Abschlussprüfung Teil 1 eingeladen. Muss er am Tag davor zur Arbeit erscheinen?",
    "answers": {
      "A": "Ja, eine Freistellung gibt es nur für den Prüfungstag selbst.",
      "B": "Nein, er ist am Arbeitstag, der der Prüfung unmittelbar vorangeht, freigestellt.",
      "C": "Nur wenn er weniger als 40 Stunden in der Woche gearbeitet hat.",
      "D": "Er muss nur für 4 Stunden kommen."
    },
    "correct_answer": ["B"],
    "explanation": "Laut § 15 BBiG (neu seit 2020) und § 9 JArbSchG sind Azubis am Arbeitstag vor der schriftlichen Abschlussprüfung freizustellen. Das gilt für Jugendliche zwingend.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 18-jähriger Auszubildender wird vor der schriftlichen Abschlussprüfung vom Betrieb zur Arbeit aufgefordert. Hat er einen Anspruch auf Freistellung am Tag davor?",
    "answers": {
      "A": "Nein, dieser Anspruch gilt nur für Jugendliche.",
      "B": "Ja, der Anspruch nach § 15 BBiG gilt für alle Auszubildenden.",
      "C": "Nur wenn der Tarifvertrag dies vorsieht.",
      "D": "Nur für die halbe Arbeitszeit."
    },
    "correct_answer": ["B"],
    "explanation": "Seit der BBiG-Reform 2020 sind auch erwachsene Azubis am Arbeitstag vor der schriftlichen Abschlussprüfung freizustellen (§ 15 Abs. 1 Nr. 4 BBiG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 17-jähriger Azubi arbeitet an einem gesetzlichen Feiertag, der auf einen Werktag fällt. Was ist zu beachten?",
    "answers": {
      "A": "Feiertagsarbeit ist für Jugendliche strikt verboten.",
      "B": "Er muss einen Ersatzruhetag in derselben oder der darauffolgenden Woche erhalten.",
      "C": "Er bekommt 200% Lohn, aber keinen freien Tag.",
      "D": "Er darf nur 5 Stunden arbeiten."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 17 JArbSchG ist Feiertagsarbeit in bestimmten Branchen erlaubt, erfordert aber einen zeitnahen Ersatzruhetag.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Azubi ist 16 Jahre alt. Wie oft darf er pro Woche maximal in der Berufsschule fehlen, damit der Betrieb ihn noch beschäftigen darf?",
    "answers": {
      "A": "Gar nicht, Berufsschulbesuch ist eine Pflicht nach BBiG.",
      "B": "Einmal pro Halbjahr.",
      "C": "Nur mit ärztlichem Attest.",
      "D": "Das Alter spielt hier keine Rolle."
    },
    "correct_answer": ["A"],
    "explanation": "Sowohl BBiG (§ 13) als auch JArbSchG (§ 9) verpflichten den Azubi zum Besuch der Berufsschule. Der Betrieb muss ihn dafür freistellen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was regelt die 'Ausbildereignungsverordnung' (AEVO) hauptsächlich?",
    "answers": {
      "A": "Die Höhe der Prüfungsgebühren",
      "B": "Den Erwerb der berufs- und arbeitspädagogischen Kenntnisse",
      "C": "Die Mindestanzahl der Auszubildenden pro Betrieb",
      "D": "Die Dauer der Berufsschulpflicht"
    },
    "correct_answer": ["B"],
    "explanation": "Die AEVO legt fest, welche pädagogischen Kompetenzen jemand nachweisen muss, um als Ausbilder tätig sein zu dürfen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Welches Auswahlkriterium ist bei der Einstellung von Auszubildenden rechtlich problematisch (AGG)?",
    "answers": {
      "A": "Die fachliche Eignung",
      "B": "Die Religionszugehörigkeit (außer bei Tendenzbetrieben)",
      "C": "Das Geschlecht",
      "D": "Die soziale Kompetenz"
    },
    "correct_answer": ["B", "C"],
    "explanation": "Das Allgemeine Gleichbehandlungsgesetz (AGG) untersagt Diskriminierung u.a. wegen des Geschlechts oder der Religion.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Welche Funktion hat die 'Transferkontrolle' im Lernprozess?",
    "answers": {
      "A": "Zu prüfen, ob der Auszubildende pünktlich ist",
      "B": "Festzustellen, ob das Gelernte in neuen, praxisnahen Situationen angewendet werden kann",
      "C": "Die Überprüfung des Fahrgeldes für den Weg zur Berufsschule",
      "D": "Die Kontrolle des Berichtshefts durch die Kammer"
    },
    "correct_answer": ["B"],
    "explanation": "Transfer bedeutet, Wissen von der Lernsituation auf eine reale Arbeitssituation zu übertragen. Die Kontrolle stellt sicher, dass nicht nur 'auswendig' gelernt wurde.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Was ist ein Merkmal des 'Laissez-faire' Führungsstils in der Ausbildung?",
    "answers": {
      "A": "Der Ausbilder gibt klare Befehle",
      "B": "Der Ausbilder greift kaum ein und überlässt den Azubis weitgehend sich selbst",
      "C": "Entscheidungen werden gemeinsam in der Gruppe getroffen",
      "D": "Fehler werden streng bestraft"
    },
    "correct_answer": ["B"],
    "explanation": "Laissez-faire bedeutet 'gewähren lassen'. In der Ausbildung ist dieser Stil meist ungeeignet, da die Orientierung für den Azubi fehlt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi fällt durch die Abschlussprüfung. Was sind die rechtlichen Konsequenzen für den Ausbildungsvertrag?",
    "answers": {
      "A": "Der Vertrag endet automatisch zum vereinbarten Datum",
      "B": "Auf Verlangen des Azubis verlängert sich das Verhältnis bis zur nächstmöglichen Wiederholungsprüfung, maximal um ein Jahr",
      "C": "Der Betrieb muss den Azubi sofort fest einstellen",
      "D": "Die Vergütung wird gestrichen"
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 21 Abs. 3 BBiG hat der Azubi einen Anspruch auf Verlängerung, um das Ziel (den Abschluss) doch noch zu erreichen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Wer ist im 'Landesausschuss für Berufsbildung' vertreten?",
    "answers": {
      "A": "Vertreter der Arbeitgeber",
      "B": "Vertreter der Arbeitnehmer (Gewerkschaften)",
      "C": "Vertreter der obersten Landesbehörden",
      "D": "Nur Lehrer"
    },
    "correct_answer": ["A", "B", "C"],
    "explanation": "Dieser Ausschuss berät die Landesregierung in Fragen der Berufsbildung und ist drittelparitätisch besetzt.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Welche Methode eignet sich am besten für die Vermittlung von 'Sozialkompetenz'?",
    "answers": {
      "A": "Frontalvortrag",
      "B": "Rollenspiel",
      "C": "Stilles Lesen eines Fachbuchs",
      "D": "Demonstration durch den Ausbilder"
    },
    "correct_answer": ["B"],
    "explanation": "Im Rollenspiel können Perspektivwechsel geübt und Verhaltensweisen in sozialen Interaktionen (z.B. Kundengespräch) direkt erprobt werden.",
    "question_type": "normal"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche Bedeutung hat der 'Deutsche Qualifikationsrahmen' (DQR)?",
    answers: {
      A: "Er legt die Preise für Ausbildungen fest",
      B: "Er macht Qualifikationen im deutschen Bildungssystem transparent und vergleichbar",
      C: "Er ordnet Abschlüsse (z. B. Geselle, Meister, Bachelor) verschiedenen Niveaustufen zu",
      D: "Er ersetzt das Berufsbildungsgesetz",
    },
    correct_answer: ["B", "C"],
    explanation: "Der DQR ordnet Abschlüsse in 8 Niveaus ein. Ein Meister oder Fachwirt steht dabei beispielsweise auf Stufe 6 – genau wie ein akademischer Bachelor.",
    question_type: "multiple_choice",
  },

  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Was passiert, wenn ein Auszubildender die Abschlussprüfung nicht besteht?",
    answers: {
      A: "Das Ausbildungsverhältnis endet trotzdem sofort",
      B: "Auf Verlangen des Azubis verlängert sich das Verhältnis bis zur nächsten Wiederholungsprüfung (max. 1 Jahr)",
      C: "Die Prüfung kann beliebig oft wiederholt werden",
      D: "Die Prüfung kann maximal zweimal wiederholt werden",
    },
    correct_answer: ["B", "D"],
    explanation: "Laut § 21 BBiG verlängert sich das Verhältnis auf Antrag des Azubis bis zur nächsten Prüfung. Insgesamt sind zwei Wiederholungsprüfungen (insg. 3 Versuche) möglich.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 1,
    question: "Welche gesetzliche Grundlage regelt die Eignung des Ausbilders in Deutschland?",
    answers: {
      A: "Betriebsverfassungsgesetz (BetrVG)",
      B: "Berufsbildungsgesetz (BBiG) / AEVO",
      C: "Jugendarbeitsschutzgesetz (JArbSchG)",
      D: "Handwerksordnung (HwO)",
    },
    correct_answer: ["B"],
    explanation: "Die Ausbilder-Eignungsverordnung (AEVO) basiert auf dem Berufsbildungsgesetz (§ 30 BBiG) und legt die fachliche sowie pädagogische Eignung fest.",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 1,
    question: "Wer ist für die Überwachung der Berufsausbildung zuständig?",
    answers: {
      A: "Das Bundesministerium für Bildung",
      B: "Die zuständige Stelle (z. B. IHK oder HWK)",
      C: "Der Betriebsrat",
      D: "Das Arbeitsamt",
    },
    correct_answer: ["B"],
    explanation: "Nach § 76 BBiG überwacht die zuständige Stelle (IHK/HWK) die Durchführung der Berufsausbildung.",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche Voraussetzungen muss ein Ausbildungsbetrieb erfüllen?",
    answers: {
      A: "Persönliche und fachliche Eignung des Ausbilders",
      B: "Eignung der Ausbildungsstätte",
      C: "Mindestens 50 Mitarbeiter",
      D: "Eintragung des Ausbildungsvertrags bei der zuständigen Stelle",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Ein Ausbildungsbetrieb braucht einen geeigneten Ausbilder, eine geeignete Ausbildungsstätte und muss den Vertrag eintragen lassen. Eine Mindestmitarbeiterzahl ist nicht vorgeschrieben.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Was versteht man unter dem dualen System der Berufsausbildung?",
    answers: {
      A: "Ausbildung findet nur im Betrieb statt",
      B: "Ausbildung findet an zwei Lernorten statt: Betrieb und Berufsschule",
      C: "Es gibt zwei Prüfungen: schriftlich und mündlich",
      D: "Der Auszubildende hat zwei Ausbilder",
    },
    correct_answer: ["B"],
    explanation: "Das duale System zeichnet sich durch die Kombination von betrieblicher und schulischer Ausbildung aus.",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Welche der folgenden Aussagen zur persönlichen Eignung eines Ausbilders sind korrekt?",
    answers: {
      A: "Wer gegen das BBiG verstoßen hat, darf nicht ausbilden",
      B: "Wer Kinder und Jugendliche nicht beschäftigen darf, ist ungeeignet",
      C: "Nur Meister dürfen ausbilden",
      D: "Wer wiederholt gegen das JArbSchG verstoßen hat, kann die Eignung verlieren",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Die persönliche Eignung ist in § 29 BBiG geregelt. Ein Meistertitel ist keine zwingende Voraussetzung.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 1,
    question: "Was ist der Ausbildungsrahmenplan?",
    answers: {
      A: "Ein individueller Lernplan des Auszubildenden",
      B: "Eine sachliche und zeitliche Gliederung der Ausbildungsinhalte",
      C: "Der Stundenplan der Berufsschule",
      D: "Ein Vertrag zwischen Betrieb und IHK",
    },
    correct_answer: ["B"],
    explanation: "Der Ausbildungsrahmenplan ist Teil der Ausbildungsordnung und gliedert die Inhalte sachlich und zeitlich.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 1,
    question: "Was muss ein Ausbildungsvertrag mindestens enthalten?",
    answers: {
      A: "Art, sachliche und zeitliche Gliederung der Ausbildung",
      B: "Beginn und Dauer der Berufsausbildung",
      C: "Höhe der Vergütung",
      D: "Alle genannten Punkte",
    },
    correct_answer: ["D"],
    explanation: "Nach § 11 BBiG muss der Ausbildungsvertrag alle diese Mindestangaben enthalten.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Wie wird der betriebliche Ausbildungsplan erstellt?",
    answers: {
      A: "Durch Kopieren des Ausbildungsrahmenplans",
      B: "Durch Anpassung des Ausbildungsrahmenplans an die betrieblichen Gegebenheiten",
      C: "Durch die Berufsschule",
      D: "Durch die IHK",
    },
    correct_answer: ["B"],
    explanation: "Der betriebliche Ausbildungsplan wird vom Ausbilder erstellt, indem er den Ausbildungsrahmenplan auf die konkreten betrieblichen Bedingungen anpasst.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Welche Kosten trägt der Ausbildungsbetrieb?",
    answers: {
      A: "Ausbildungsvergütung",
      B: "Kosten für Ausbildungsmittel",
      C: "Schulgebühren der Berufsschule",
      D: "Prüfungsgebühren",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Der Betrieb zahlt Vergütung, Ausbildungsmittel und Prüfungsgebühren. Berufsschulkosten trägt der Staat.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Welche Kriterien sind bei der Auswahl von Auszubildenden nach dem AGG zu beachten?",
    answers: {
      A: "Geschlecht darf kein Auswahlkriterium sein",
      B: "Herkunft darf kein Auswahlkriterium sein",
      C: "Nur schulische Leistungen zählen",
      D: "Religion darf kein Auswahlkriterium sein",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Das Allgemeine Gleichbehandlungsgesetz (AGG) verbietet Diskriminierung aufgrund von Geschlecht, Herkunft, Religion u.a. bei der Bewerberauswahl.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 1,
    question: "Was ist die Vier-Stufen-Methode?",
    answers: {
      A: "Vorbereiten, Vormachen, Nachmachen, Üben",
      B: "Planen, Durchführen, Kontrollieren, Bewerten",
      C: "Informieren, Planen, Entscheiden, Ausführen",
      D: "Lesen, Schreiben, Rechnen, Sprechen",
    },
    correct_answer: ["A"],
    explanation: "Die Vier-Stufen-Methode besteht aus: Vorbereiten, Vormachen (durch den Ausbilder), Nachmachen (durch den Azubi) und Üben.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 1,
    question: "Was versteht man unter dem Leittextverfahren?",
    answers: {
      A: "Der Ausbilder gibt detaillierte Anweisungen",
      B: "Auszubildende erarbeiten sich Inhalte selbstständig anhand von Leitfragen",
      C: "Der Auszubildende liest Fachtexte vor",
      D: "Eine mündliche Prüfungsmethode",
    },
    correct_answer: ["B"],
    explanation: "Das Leittextverfahren fördert selbstständiges Lernen durch Leitfragen, die den Lernprozess strukturieren.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Welche Ausbildungsmethoden fördern die Selbstständigkeit des Auszubildenden?",
    answers: {
      A: "Projektmethode",
      B: "Leittextmethode",
      C: "Vier-Stufen-Methode",
      D: "Rollenspiel",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Projektmethode, Leittextmethode und Rollenspiel fördern eigenständiges Handeln. Die Vier-Stufen-Methode ist eher ausbilderzentriert.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Welche der folgenden Schritte gehören zum 'Modell der vollständigen Handlung'?",
    answers: {
      A: "Informieren",
      B: "Planen",
      C: "Nachahmen",
      D: "Kontrollieren",
      E: "Bewerten",
    },
    correct_answer: ["A", "B", "D", "E"],
    explanation: "Das Modell der vollständigen Handlung besteht aus: Informieren, Planen, Entscheiden, Ausführen, Kontrollieren und Bewerten. 'Nachahmen' ist Teil der klassischen 4-Stufen-Methode.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Was ist bei einer Unterweisung am Arbeitsplatz besonders wichtig?",
    answers: {
      A: "Der Arbeitsplatz muss vorbereitet sein",
      B: "Der Auszubildende sollte aktiv einbezogen werden",
      C: "Die Unterweisung sollte möglichst schnell durchgeführt werden",
      D: "Arbeitssicherheit muss beachtet werden",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Bei einer Unterweisung am Arbeitsplatz sind Vorbereitung, aktive Einbeziehung des Azubis und Arbeitssicherheit entscheidend. Geschwindigkeit ist kein Qualitätsmerkmal.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 1,
    question: "Wann endet das Berufsausbildungsverhältnis?",
    answers: {
      A: "Mit Ablauf der Ausbildungszeit",
      B: "Mit Bestehen der Abschlussprüfung",
      C: "Durch Kündigung des Azubis nach der Probezeit mit 4 Wochen Frist",
      D: "Alle genannten Möglichkeiten",
    },
    correct_answer: ["D"],
    explanation: "Das Ausbildungsverhältnis kann durch alle genannten Gründe enden (§ 21 BBiG).",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 1,
    question: "Was ist das Berichtsheft (Ausbildungsnachweis)?",
    answers: {
      A: "Ein freiwilliges Dokument",
      B: "Ein vorgeschriebener Nachweis über die Ausbildungsinhalte",
      C: "Ein Zeugnis des Ausbilders",
      D: "Eine Bewerbungsunterlage",
    },
    correct_answer: ["B"],
    explanation: "Das Führen des Berichtshefts ist nach § 13 BBiG eine Pflicht des Auszubildenden und Zulassungsvoraussetzung zur Prüfung.",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Welche Maßnahmen kann ein Ausbilder bei Lernschwierigkeiten ergreifen?",
    answers: {
      A: "Nachhilfe organisieren",
      B: "Lernmethoden anpassen",
      C: "Den Auszubildenden sofort abmahnen",
      D: "Gespräch mit dem Auszubildenden führen",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Bei Lernschwierigkeiten sollte der Ausbilder unterstützend reagieren: Gespräche führen, Methoden anpassen und ggf. Nachhilfe organisieren.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Welche Prüfungen gibt es in der dualen Ausbildung?",
    answers: {
      A: "Zwischenprüfung",
      B: "Abschlussprüfung Teil 1 und Teil 2",
      C: "Gesellenprüfung im Handwerk",
      D: "Alle genannten sind möglich",
    },
    correct_answer: ["D"],
    explanation: "Je nach Ausbildungsberuf und Kammer gibt es verschiedene Prüfungsmodelle: klassisch mit Zwischenprüfung oder gestreckte Abschlussprüfung (Teil 1/2).",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Welche Aussagen zur Kündigung in der Probezeit sind richtig?",
    answers: {
      A: "Während der Probezeit kann jederzeit ohne Frist gekündigt werden",
      B: "Die Kündigung muss schriftlich erfolgen",
      C: "Die Probezeit beträgt mindestens 1 und höchstens 4 Monate",
      D: "Nur der Ausbilder darf kündigen",
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Nach § 22 BBiG kann in der Probezeit (1-4 Monate) jederzeit ohne Frist schriftlich gekündigt werden – von beiden Seiten.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche der folgenden Personengruppen sind 'fachlich geeignet' im Sinne des BBiG?",
    answers: {
      A: "Personen, die die Abschlussprüfung in einer dem Ausbildungsberuf entsprechenden Fachrichtung bestanden haben",
      B: "Personen mit einer angemessenen Zeit beruflicher Tätigkeit in ihrem Beruf",
      C: "Jeder, der eine AEVO-Prüfung bestanden hat, unabhängig von der Berufserfahrung",
      D: "Personen mit einem entsprechenden Hochschulstudium und angemessener Berufserfahrung",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Fachliche Eignung setzt laut § 30 BBiG sowohl den entsprechenden Berufsabschluss (oder Studium) als auch eine angemessene Zeit der Berufstätigkeit voraus. Der AEVO-Schein allein deckt nur die arbeitspädagogische Eignung ab.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 1,
    question: "Wie lange darf die Probezeit laut Berufsbildungsgesetz maximal dauern?",
    answers: {
      A: "1 Monat",
      B: "3 Monate",
      C: "4 Monate",
      D: "6 Monate",
    },
    correct_answer: ["C"],
    explanation: "Gemäß § 20 BBiG muss die Probezeit mindestens einen Monat und darf höchstens vier Monate betragen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Welche gesetzlichen Bestimmungen des Jugendarbeitsschutzgesetzes (JArbSchG) gelten für 16-jährige Auszubildende?",
    answers: {
      A: "Maximal 40 Stunden pro Woche",
      B: "5-Tage-Woche (Samstagsarbeit nur in Ausnahmen)",
      C: "Tägliche Freizeit von mindestens 10 Stunden",
      D: "Keine Beschäftigung vor 6 Uhr morgens (mit Ausnahmen)",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Die tägliche Freizeit muss laut JArbSchG mindestens 12 Stunden betragen (§ 13). Die 40-Stunden-Woche und das Verbot der Nachtarbeit sind korrekt.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Welcher Führungsstil ist in der modernen Ausbildung in der Regel am erfolgreichsten?",
    answers: {
      A: "Autoritärer Führungsstil",
      B: "Laissez-faire Führungsstil",
      C: "Kooperativer Führungsstil",
      D: "Diktatorischer Führungsstil",
    },
    correct_answer: ["C"],
    explanation: "Der kooperative Führungsstil fördert die Eigenverantwortung, Motivation und Lernbereitschaft des Auszubildenden am besten.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 1,
    question: "Was ist das Hauptziel der Motivationsförderung in der Ausbildung?",
    answers: {
      A: "Den Auszubildenden zu kontrollieren",
      B: "Die Leistungsbereitschaft und das Interesse des Azubis zu erhalten und zu steigern",
      C: "Fehler zu vermeiden",
      D: "Die Ausbildungszeit zu verkürzen",
    },
    correct_answer: ["B"],
    explanation: "Motivation ist die Grundlage für erfolgreiches Lernen. Ziel ist es, den Azubi zu eigenständigem und engagiertem Handeln zu bewegen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Welche Medien unterstützen eine Präsentation im Rahmen einer Unterweisung sinnvoll?",
    answers: {
      A: "Flipchart",
      B: "PowerPoint-Präsentation",
      C: "Echte Werkstücke oder Werkzeuge",
      D: "Das Berichtsheft",
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Medien dienen der Veranschaulichung. Das Berichtsheft ist ein Dokumentationsnachweis, aber kein klassisches Medium zur Stoffvermittlung in einer Unterweisung.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Was sollte in einem Beurteilungsgespräch vermieden werden?",
    answers: {
      A: "Konkrete Beispiele für Verhaltensweisen nennen",
      B: "Nur negative Punkte ansprechen (Sandwich-Methode ignorieren)",
      C: "Den Auszubildenden zu Wort kommen lassen",
      D: "Vergleiche mit anderen Auszubildenden ziehen",
    },
    correct_answer: ["B", "D"],
    explanation: "Ein Beurteilungsgespräch sollte motivierend und individuell sein. Vergleiche mit anderen wirken demotivierend, und ein einseitiger Fokus auf Fehler verhindert die Weiterentwicklung.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Unter welchen Voraussetzungen kann die Ausbildungszeit verkürzt werden?",
    answers: {
      A: "Besonders gute Leistungen in Betrieb und Schule",
      B: "Vorheriger Besuch einer höheren Schule (z. B. Abitur)",
      C: "Wunsch des Ausbilders wegen Personalmangel",
      D: "Bereits abgeschlossene andere Berufsausbildung",
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Verkürzungen sind bei entsprechender Vorbildung (§ 7 BBiG) oder überdurchschnittlichen Leistungen (§ 8 BBiG) möglich. Betrieblicher Personalmangel ist kein rechtlicher Grund für eine Verkürzung.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 1,
    question: "Wer stellt das offizielle Zeugnis über die bestandene Abschlussprüfung aus?",
    answers: {
      A: "Der Ausbildungsbetrieb",
      B: "Die Berufsschule",
      C: "Die zuständige Stelle (IHK/HWK)",
      D: "Das Bundesinstitut für Berufsbildung (BIBB)",
    },
    correct_answer: ["C"],
    explanation: "Die Kammer (zuständige Stelle) führt die Prüfung durch und stellt das offizielle Prüfungszeugnis aus. Der Betrieb stellt lediglich das Arbeitszeugnis aus.",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Was bedeutet 'Handlungskompetenz' im Kontext der Ausbildung?",
    answers: {
      A: "Die Fähigkeit, Aufgaben fachgerecht, selbstständig und verantwortungsbewusst zu lösen",
      B: "Nur das Beherrschen der theoretischen Fachbegriffe",
      C: "Die Summe aus Fach-, Methoden-, Sozial- und Selbstkompetenz",
      D: "Das Befolgen von Anweisungen ohne Rückfragen",
    },
    correct_answer: ["A", "C"],
    explanation: "Moderne Ausbildung zielt auf die vollständige Handlungskompetenz ab, die sich aus verschiedenen Kompetenzbereichen zusammensetzt und über reines Fachwissen hinausgeht.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Was versteht man unter einer 'Stufenausbildung'?",
    answers: {
      A: "Eine Ausbildung, die in aufeinander aufbauenden, zeitlich getrennten Abschnitten mit jeweils eigenem Abschluss erfolgt",
      B: "Eine Ausbildung, bei der der Azubi jedes Jahr in eine höhere Gehaltsstufe kommt",
      C: "Die Ausbildung in verschiedenen Stockwerken eines Betriebs",
      D: "Eine Ausbildung, die erst nach dem Studium beginnt",
    },
    correct_answer: ["A"],
    explanation: "Die Stufenausbildung ermöglicht nach einer ersten Stufe (z.B. 2 Jahre) einen ersten Berufsabschluss, auf dem eine zweite Stufe (z.B. 1 Jahr) zum höheren Abschluss aufbaut.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Welche Angaben gehören zwingend in ein qualifiziertes Arbeitszeugnis am Ende der Ausbildung?",
    answers: {
      A: "Art und Dauer der Ausbildung",
      B: "Leistung und Führung (Verhalten) des Auszubildenden",
      C: "Der Grund für die Beendigung der Ausbildung",
      D: "Die Religionszugehörigkeit des Auszubildenden",
    },
    correct_answer: ["A", "B"],
    explanation: "Ein einfaches Zeugnis enthält nur Art und Dauer. Ein qualifiziertes Zeugnis enthält zusätzlich Angaben zu Leistung und Führung. Der Beendigungsgrund darf nur auf Wunsch des Azubis aufgenommen werden.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Ein 17-jähriger Bewerber möchte einen Ausbildungsvertrag unterschreiben. Wer muss den Vertrag zusätzlich unterzeichnen?",
    answers: {
      A: "Niemand, er ist beschränkt geschäftsfähig",
      B: "Die gesetzlichen Vertreter (in der Regel beide Elternteile)",
      C: "Der Berufsberater der Arbeitsagentur",
      D: "Der Schuldirektor",
    },
    correct_answer: ["B"],
    explanation: "Da der Bewerber noch minderjährig ist, benötigt er für den Abschluss eines Ausbildungsvertrags die Zustimmung seiner gesetzlichen Vertreter gemäß BGB.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Welche Phasen der Teamentwicklung nach Tuckman sollte ein Ausbilder kennen, wenn er eine Gruppe von Azubis leitet?",
    answers: {
      A: "Forming (Orientierungsphase)",
      B: "Storming (Konfliktphase)",
      C: "Norming (Organisierungsphase)",
      D: "Performing (Leistungsphase)",
    },
    correct_answer: ["A", "B", "C", "D"],
    explanation: "Das Phasenmodell nach Tuckman beschreibt die Entwicklung von Gruppen. Der Ausbilder muss in jeder Phase (Orientierung, Konflikt, Regelung, Leistung) anders agieren.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 1,
    question: "Was ist ein 'offenes' Fragenformat in einem Lehrgespräch?",
    answers: {
      A: "Fragen, die man nur mit Ja oder Nein beantworten kann",
      B: "W-Fragen (Wer, Wie, Was, Warum...), die zu ausführlichen Antworten anregen",
      C: "Fragen, bei denen die Antwort bereits vorgegeben ist",
      D: "Fragen, die der Ausbilder sich selbst beantwortet",
    },
    correct_answer: ["B"],
    explanation: "Offene Fragen beginnen oft mit 'W' und zwingen den Auszubildenden dazu, nachzudenken und in eigenen Worten zu antworten, statt nur zuzustimmen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Was besagt die 'pädagogische sechs-Schritte-Treppe' bei Lernschwierigkeiten?",
    answers: {
      A: "Treppensteigen fördert die Durchblutung des Gehirns",
      B: "Ein systematischer Prozess von der Ursachenanalyse bis zur Erfolgskontrolle",
      C: "Dass Azubis sechs Jahre Zeit für die Ausbildung haben",
      D: "Dass man sechs verschiedene Ausbilder braucht",
    },
    correct_answer: ["B"],
    explanation: "Bei Lernschwierigkeiten geht man systematisch vor: Beobachten, Analysieren, Gespräch führen, Maßnahmen planen, Durchführen und Erfolg prüfen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Unter welchen Voraussetzungen darf ein Auszubildender zur Abschlussprüfung zugelassen werden?",
    answers: {
      A: "Die Ausbildungszeit ist abgelaufen oder endet spätestens zwei Monate nach dem Prüfungstermin",
      B: "Das Berichtsheft wurde ordnungsgemäß geführt",
      C: "Die Zwischenprüfung wurde (sofern vorgeschrieben) abgelegt",
      D: "Der Ausbilder gibt eine schriftliche Erlaubnis",
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Die Zulassung regelt § 43 BBiG. Wichtig sind die absolvierte Zeit, das Berichtsheft und die Teilnahme an vorgeschriebenen Zwischenprüfungen. Eine subjektive 'Erlaubnis' des Ausbilders reicht nicht.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 1,
    question: "Wer trägt die Kosten für die außerbetriebliche Abschlussprüfung (Prüfungsgebühren)?",
    answers: {
      A: "Der Auszubildende",
      B: "Die Berufsschule",
      C: "Der Ausbildende (der Betrieb)",
      D: "Das Bundesland",
    },
    correct_answer: ["C"],
    explanation: "Gemäß § 37 BBiG sind die für die Abschlussprüfung anfallenden Gebühren vom Ausbildenden (Betrieb) zu tragen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche Aufgaben hat der Berufsbildungsausschuss bei der zuständigen Stelle (IHK/HWK)?",
    answers: {
      A: "Beschluss von Prüfungsvorschriften",
      B: "Überwachung der Eignung von Ausbildungsstätten",
      C: "Festlegung der Ausbildungsvergütung für alle Betriebe",
      D: "Beratung der zuständigen Stelle in Fragen der beruflichen Bildung",
    },
    correct_answer: ["A", "D"],
    explanation: "Der Berufsbildungsausschuss ist paritätisch besetzt (Arbeitgeber, Arbeitnehmer, Lehrer) und entscheidet über wichtige Rahmenregeln der Kammer. Die Vergütung wird in Tarifverträgen oder einzelvertraglich geregelt.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Was ist der Unterschied zwischen intrinsischer und extrinsischer Motivation?",
    answers: {
      A: "Intrinsisch kommt von innen (Spaß an der Sache), extrinsisch von außen (Belohnung/Strafe)",
      B: "Intrinsisch ist immer besser als extrinsisch",
      C: "Extrinsische Motivation hält länger an",
      D: "Beide Formen können sich ergänzen",
    },
    correct_answer: ["A", "D"],
    explanation: "Intrinsische Motivation ist der Idealzustand, aber auch äußere Anreize (Lob, Prämie) können sinnvoll sein. Sie schließen sich nicht aus.",
    question_type: "multiple_choice",
  },
  {
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Welche Inhalte müssen mindestens im Ausbildungsvertrag enthalten sein?",
  answers: {
    A: "Art, sachliche und zeitliche Gliederung der Ausbildung",
    B: "Beginn und Dauer der Ausbildung",
    C: "Name der Berufsschule",
    D: "Vergütung und Probezeit",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Nach § 11 BBiG müssen u. a. Ausbildungsinhalt, Dauer, Vergütung und Probezeit festgelegt sein. Die Berufsschule ist nicht zwingend Bestandteil.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 1,
  question: "Wie lange darf die Probezeit in der Berufsausbildung maximal dauern?",
  answers: {
    A: "1 Monat",
    B: "4 Monate",
    C: "6 Monate",
    D: "12 Monate",
  },
  correct_answer: ["B"],
  explanation: "Die Probezeit muss mindestens 1 Monat und darf höchstens 4 Monate betragen (§ 20 BBiG).",
  question_type: "normal",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Welche Lernmethoden fördern besonders die Handlungskompetenz?",
  answers: {
    A: "Lehrgespräch",
    B: "Rollenspiele",
    C: "Projektarbeit",
    D: "Reines Auswendiglernen",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Handlungskompetenz wird durch aktive Lernmethoden gefördert, nicht durch reines Auswendiglernen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 1,
  question: "Was ist das Ziel der Vier-Stufen-Methode?",
  answers: {
    A: "Schnelles Auswendiglernen",
    B: "Systematisches Erlernen praktischer Fertigkeiten",
    C: "Theoretische Wissensvermittlung",
    D: "Selbstständiges Lernen ohne Anleitung",
  },
  correct_answer: ["B"],
  explanation: "Die Vier-Stufen-Methode dient dem strukturierten Erlernen praktischer Tätigkeiten.",
  question_type: "normal",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Welche Pflichten hat ein Auszubildender?",
  answers: {
    A: "Lernpflicht",
    B: "Weisungen befolgen",
    C: "Berichtsheft führen",
    D: "Überstunden verpflichtend leisten",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Azubis müssen lernen, Anweisungen folgen und Berichtsheft führen. Überstunden sind nicht pauschal verpflichtend.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Wann kann ein Ausbildungsverhältnis fristlos gekündigt werden?",
  answers: {
    A: "Bei schwerwiegenden Pflichtverletzungen",
    B: "Während der Probezeit ohne Angabe von Gründen",
    C: "Nach bestandener Prüfung",
    D: "Bei schlechten Noten",
  },
  correct_answer: ["A", "B"],
  explanation: "Fristlose Kündigung ist bei schwerem Fehlverhalten möglich; in der Probezeit jederzeit ohne Grund.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Welche Aufgaben hat die zuständige Stelle (z. B. IHK)?",
  answers: {
    A: "Überwachung der Ausbildung",
    B: "Durchführung von Prüfungen",
    C: "Festlegung der Gehälter",
    D: "Beratung von Betrieben und Azubis",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Die Kammern überwachen, prüfen und beraten – aber legen keine Gehälter fest.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Welche Kriterien sind bei der Auswahl von Auszubildenden wichtig?",
  answers: {
    A: "Schulnoten",
    B: "Persönliche Eignung",
    C: "Motivation",
    D: "Lieblingsfarbe",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Fachliche und persönliche Eignung sowie Motivation sind entscheidend.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Was versteht man unter 'Schlüsselqualifikationen'?",
  answers: {
    A: "Fachwissen",
    B: "Sozialkompetenz",
    C: "Methodenkompetenz",
    D: "Körpergröße",
  },
  correct_answer: ["B", "C"],
  explanation: "Schlüsselqualifikationen umfassen soziale und methodische Kompetenzen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 1,
  question: "Was ist ein Berichtsheft?",
  answers: {
    A: "Ein Vertrag",
    B: "Nachweis über die Ausbildung",
    C: "Ein Prüfungsprotokoll",
    D: "Ein Zeugnis",
  },
  correct_answer: ["B"],
  explanation: "Das Berichtsheft dokumentiert den Ausbildungsverlauf.",
  question_type: "normal",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Welche Faktoren beeinflussen den Lernerfolg?",
  answers: {
    A: "Motivation",
    B: "Lernumgebung",
    C: "Vorwissen",
    D: "Zufall",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Lernerfolg hängt stark von Motivation, Umfeld und Vorwissen ab.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Welche Unterlagen sind bei der Einstellung eines Azubis notwendig?",
  answers: {
    A: "Ausbildungsvertrag",
    B: "Ärztliche Bescheinigung (bei Jugendlichen)",
    C: "Lebenslauf",
    D: "Führerschein",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Je nach Alter sind bestimmte Unterlagen Pflicht, z. B. ärztliche Untersuchung bei Minderjährigen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Was regelt die Ausbilder-Eignungsverordnung (AEVO)?",
  answers: {
    A: "Die Vergütung von Azubis",
    B: "Die Eignung der Ausbilder",
    C: "Die Prüfungsinhalte",
    D: "Die Arbeitszeiten",
  },
  correct_answer: ["B"],
  explanation: "Die AEVO legt die berufs- und arbeitspädagogische Eignung fest.",
  question_type: "normal",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Welche Maßnahmen können bei Leistungsproblemen eines Azubis helfen?",
  answers: {
    A: "Zusatzunterricht",
    B: "Feedbackgespräche",
    C: "Kündigung ohne Gespräch",
    D: "Individuelle Förderung",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Fördermaßnahmen und Gespräche stehen im Vordergrund, nicht sofortige Kündigung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Was ist ein Lernziel?",
  answers: {
    A: "Ein zufälliges Ergebnis",
    B: "Eine klare Beschreibung des gewünschten Lernergebnisses",
    C: "Ein Prüfungsinhalt",
    D: "Ein Vertragspunkt",
  },
  correct_answer: ["B"],
  explanation: "Lernziele definieren, was der Auszubildende am Ende können soll.",
  question_type: "normal",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Wann gilt ein Ausbilder als persönlich ungeeignet?",
  answers: {
    A: "Bei Verstößen gegen das BBiG",
    B: "Bei wiederholten Verstößen gegen Jugendarbeitsschutz",
    C: "Bei fehlender Berufserfahrung",
    D: "Bei schweren Straftaten",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Persönliche Ungeeignetheit liegt z. B. bei Gesetzesverstößen oder Straftaten vor (§ 29 BBiG).",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Was bedeutet 'fachliche Eignung' eines Ausbilders?",
  answers: {
    A: "Pädagogische Fähigkeiten",
    B: "Berufliche Kenntnisse und Fertigkeiten",
    C: "Ausbildereignungsprüfung",
    D: "Mindestens 10 Jahre Berufserfahrung",
  },
  correct_answer: ["B", "C"],
  explanation: "Fachliche Eignung umfasst berufliche Qualifikation plus AEVO, nicht zwingend lange Berufserfahrung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Welche Rechte hat der Ausbildende?",
  answers: {
    A: "Weisungsrecht",
    B: "Anspruch auf Lernbereitschaft",
    C: "Urlaubsanspruch",
    D: "Vergütungsanspruch",
  },
  correct_answer: ["A", "B"],
  explanation: "Der Ausbildende hat Weisungsrecht und darf Lernbereitschaft erwarten.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Was ist bei der Erstellung eines betrieblichen Ausbildungsplans zu beachten?",
  answers: {
    A: "Er basiert auf dem Ausbildungsrahmenplan",
    B: "Er ist individuell an den Betrieb angepasst",
    C: "Er ersetzt die Ausbildungsordnung",
    D: "Er muss schriftlich vorliegen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Der Plan orientiert sich am Rahmenplan, wird betrieblich angepasst und dokumentiert.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Was ist das Ziel der vollständigen Handlung?",
  answers: {
    A: "Selbstständiges Planen, Durchführen und Kontrollieren",
    B: "Nur theoretisches Lernen",
    C: "Ausschließlich Gruppenarbeit",
    D: "Reines Nachahmen",
  },
  correct_answer: ["A"],
  explanation: "Die vollständige Handlung fördert eigenständiges Arbeiten in allen Phasen.",
  question_type: "normal",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Welche Phasen umfasst die vollständige Handlung?",
  answers: {
    A: "Informieren",
    B: "Planen",
    C: "Entscheiden",
    D: "Kontrollieren",
  },
  correct_answer: ["A", "B", "C", "D"],
  explanation: "Typische Phasen: Informieren, Planen, Entscheiden, Ausführen, Kontrollieren, Bewerten.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Welche Gründe führen automatisch zur Beendigung des Ausbildungsverhältnisses?",
  answers: {
    A: "Bestehen der Abschlussprüfung",
    B: "Ablauf der Ausbildungszeit",
    C: "Schlechte Noten",
    D: "Krankheit",
  },
  correct_answer: ["A", "B"],
  explanation: "Das Verhältnis endet mit Bestehen oder Zeitablauf (§ 21 BBiG).",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Welche Besonderheiten gelten für minderjährige Auszubildende?",
  answers: {
    A: "Jugendarbeitsschutzgesetz gilt",
    B: "Ärztliche Erstuntersuchung erforderlich",
    C: "Keine Pausen notwendig",
    D: "Besondere Arbeitszeitregelungen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Das JArbSchG schützt Jugendliche durch besondere Regelungen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Was ist ein didaktisches Prinzip?",
  answers: {
    A: "Gesetzliche Vorschrift",
    B: "Grundsatz zur Gestaltung von Lernprozessen",
    C: "Prüfungsordnung",
    D: "Vertrag",
  },
  correct_answer: ["B"],
  explanation: "Didaktische Prinzipien steuern den Unterricht, z. B. Anschaulichkeit.",
  question_type: "normal",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Welche didaktischen Prinzipien sind besonders wichtig?",
  answers: {
    A: "Anschaulichkeit",
    B: "Praxisnähe",
    C: "Aktivierung",
    D: "Überforderung",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Gute Ausbildung orientiert sich an verständlichen und praxisnahen Methoden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Wann muss der Ausbildungsvertrag eingetragen werden?",
  answers: {
    A: "Vor Beginn der Ausbildung",
    B: "Nach der Probezeit",
    C: "Spätestens nach einem Jahr",
    D: "Vor der Abschlussprüfung",
  },
  correct_answer: ["A"],
  explanation: "Der Vertrag muss vor Beginn bei der zuständigen Stelle eingetragen werden.",
  question_type: "normal",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Welche Funktion hat die Ausbildungsordnung?",
  answers: {
    A: "Sie regelt bundeseinheitlich die Ausbildung",
    B: "Sie enthält Prüfungsanforderungen",
    C: "Sie wird vom Betrieb erstellt",
    D: "Sie definiert Ausbildungsinhalte",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Die Ausbildungsordnung ist gesetzlich geregelt und gilt bundesweit.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Was ist bei einer Abmahnung zu beachten?",
  answers: {
    A: "Sie muss konkret den Verstoß benennen",
    B: "Sie muss schriftlich erfolgen",
    C: "Sie dient als Warnfunktion",
    D: "Sie ist immer öffentlich zu machen",
  },
  correct_answer: ["A", "C"],
  explanation: "Eine Abmahnung muss konkret sein und hat eine Warnfunktion; Schriftform ist empfehlenswert, aber nicht zwingend.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Was ist Motivation im Lernprozess?",
  answers: {
    A: "Zwang",
    B: "Innerer Antrieb zu lernen",
    C: "Belohnungssystem",
    D: "Kontrolle durch den Ausbilder",
  },
  correct_answer: ["B"],
  explanation: "Motivation ist der innere Antrieb, der Lernen fördert.",
  question_type: "normal",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Welche Kriterien gelten für ein gutes Beurteilungsgespräch?",
  answers: {
    A: "Sachlich und objektiv",
    B: "Regelmäßig",
    C: "Nur Kritik ohne Lob",
    D: "Nachvollziehbar",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Feedback sollte konstruktiv, regelmäßig und verständlich sein.",
  question_type: "multiple_choice",
},
{
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche Funktion hat die Ausbildungsordnung für einen staatlich anerkannten Ausbildungsberuf?",
    answers: {
      A: "Sie dient als Werbematerial für die Berufsberatung",
      B: "Sie stellt bundeseinheitliche Standards für die Ausbildungsinhalte und Prüfungsanforderungen sicher",
      C: "Sie legt die Höhe der Ausbildungsvergütung für alle Branchen fest",
      D: "Sie ersetzt den betrieblichen Ausbildungsplan vollständig",
    },
    correct_answer: ["B"],
    explanation: "Die Ausbildungsordnung ist eine Rechtsverordnung und sorgt dafür, dass jeder Azubi in Deutschland im gleichen Beruf die gleichen Mindestinhalte lernt und identische Prüfungsmaßstäbe hat.",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Ein Ausbildungsbetrieb möchte die Ausbildungsmittel (z. B. Werkzeuge, Fachbücher) dem Auszubildenden in Rechnung stellen. Wie ist die Rechtslage?",
    answers: {
      A: "Das ist zulässig, wenn es im Ausbildungsvertrag vereinbart wurde",
      B: "Das ist unzulässig; Ausbildungsmittel müssen dem Azubi kostenlos zur Verfügung gestellt werden",
      C: "Der Azubi muss nur die Kosten für die Abschlussprüfung selbst tragen",
      D: "Nur bei mutwilliger Zerstörung kann Schadensersatz verlangt werden",
    },
    correct_answer: ["B", "D"],
    explanation: "Gemäß § 14 BBiG hat der Ausbildende dem Auszubildenden kostenlos die Ausbildungsmittel zur Verfügung zu stellen, die zur Berufsausbildung und zum Ablegen von Prüfungen erforderlich sind. Lediglich bei vorsätzlicher Sachbeschädigung greifen allgemeine Haftungsregeln.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Welches Ziel verfolgt ein Unternehmen primär mit der Bereitstellung von Ausbildungsplätzen aus betriebswirtschaftlicher Sicht?",
    answers: {
      A: "Sicherung des künftigen Fachkräftebedarfs aus eigenen Reihen",
      B: "Einsparung von Sozialversicherungsbeiträgen",
      C: "Verbesserung des Unternehmensimages in der Region",
      D: "Vermeidung von Kosten für die externe Rekrutierung von Fachkräften",
    },
    correct_answer: ["A", "C", "D"],
    explanation: "Betriebe bilden aus, um passgenaue Fachkräfte zu gewinnen, Fluktuation zu senken und Recruitingkosten zu sparen. Das Image ist ein positiver Nebeneffekt. Die Einsparung von Sozialbeiträgen ist kein valider Grund.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Nach welchem Prinzip ist das Berichtsheft (der Ausbildungsnachweis) zu führen?",
    answers: {
      A: "Es muss monatlich in Aufsatzform geschrieben werden",
      B: "Es muss zeitnah (in der Regel wöchentlich) und sachlich gegliedert geführt werden",
      C: "Der Ausbilder muss das Berichtsheft regelmäßig sichten und abzeichnen",
      D: "Es dient dem Ausbilder als Beweismittel für schlechte Leistungen",
    },
    correct_answer: ["B", "C"],
    explanation: "Das Berichtsheft soll den zeitlichen und sachlichen Ablauf der Ausbildung dokumentieren. Der Ausbilder hat eine Kontroll- und Unterweisungspflicht bezüglich der ordnungsgemäßen Führung.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Was versteht man in der Lernpsychologie unter dem 'Halo-Effekt' bei der Beurteilung von Auszubildenden?",
    answers: {
      A: "Ein Azubi ist so gut, dass er einen Heiligenschein verdient",
      B: "Ein einzelnes Merkmal (z. B. Pünktlichkeit) überstrahlt andere Merkmale bei der Gesamtbeurteilung",
      C: "Der Ausbilder beurteilt den Azubi so, wie er sich selbst sieht",
      D: "Die Tendenz, extrem gute oder extrem schlechte Noten zu vermeiden",
    },
    correct_answer: ["B"],
    explanation: "Der Halo-Effekt (Hof-Effekt) ist ein Wahrnehmungsfehler. Ein markantes Merkmal dominiert den Gesamteindruck so stark, dass andere Leistungen falsch eingeschätzt werden.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 1,
    question: "Welche der folgenden Aspekte gehören zur Sozialkompetenz eines Auszubildenden?",
    answers: {
      A: "Teamfähigkeit",
      B: "Beherrschen von Textverarbeitungsprogrammen",
      C: "Konfliktfähigkeit",
      D: "Einfühlungsvermögen (Empathie)",
    },
    correct_answer: ["A", "C", "D"],
    explanation: "Sozialkompetenz umfasst alle Fähigkeiten im Umgang mit anderen Menschen. EDV-Kenntnisse gehören zur Fach- oder Methodenkompetenz.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Wer entscheidet über den Antrag auf vorzeitige Zulassung zur Abschlussprüfung wegen überdurchschnittlicher Leistungen?",
    answers: {
      A: "Der Ausbilder allein",
      B: "Der Auszubildende allein",
      C: "Die zuständige Stelle (Kammer) nach Anhörung von Betrieb und Berufsschule",
      D: "Das Bundesministerium für Wirtschaft",
    },
    correct_answer: ["C"],
    explanation: "Die Kammer entscheidet gemäß § 45 BBiG. Voraussetzung sind Leistungen in der Schule und im Betrieb, die die vorzeitige Zulassung rechtfertigen.",
    question_type: "normal",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Ein Auszubildender wird nach bestandener Abschlussprüfung am nächsten Tag im Betrieb tätig, ohne dass ein neuer Vertrag unterschrieben wurde. Welche Rechtsfolge tritt ein?",
    answers: {
      A: "Der Azubi muss den Betrieb sofort verlassen",
      B: "Es gilt ein unbefristetes Arbeitsverhältnis als begründet",
      C: "Die Ausbildung verlängert sich automatisch um ein halbes Jahr",
      D: "Der Azubi arbeitet als Praktikant weiter",
    },
    correct_answer: ["B"],
    explanation: "Wird der Auszubildende im Anschluss an das Ausbildungsverhältnis beschäftigt, ohne dass hierüber ausdrücklich etwas vereinbart worden ist, so gilt ein Arbeitsverhältnis auf unbestimmte Zeit als begründet (§ 24 BBiG).",
    question_type: "normal",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Welche Institutionen bilden das 'Duale System'?",
    answers: {
      A: "IHK und Handwerkskammer",
      B: "Ausbildungsbetrieb und Berufsschule",
      C: "Bundesregierung und Landesregierungen",
      D: "Gewerkschaften und Arbeitgeberverbände",
    },
    correct_answer: ["B"],
    explanation: "Das duale System basiert auf der Zusammenarbeit der zwei Lernorte Betrieb (Praxis) und Berufsschule (Theorie).",
    question_type: "normal",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Welche Unterlagen müssen der zuständigen Stelle zur Eintragung in das Verzeichnis der Berufsausbildungsverhältnisse vorgelegt werden?",
    answers: {
      A: "Der unterschriebene Ausbildungsvertrag",
      B: "Bei Minderjährigen: Die Bescheinigung über die ärztliche Erstuntersuchung",
      C: "Der betriebliche Ausbildungsplan",
      D: "Das letzte Schulzeugnis des Auszubildenden",
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Für die Eintragung sind Vertrag, Ausbildungsplan und bei Minderjährigen der Nachweis der Untersuchung nach dem JArbSchG zwingend erforderlich. Das Schulzeugnis ist für die Kammer zur Eintragung nicht relevant.",
    question_type: "multiple_choice",
  },
  {
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Auszubildender erscheint wiederholt zu spät zur Arbeit und zeigt wenig Engagement. Der Ausbilder hat ihn bereits mündlich darauf hingewiesen. Welche Maßnahmen sind jetzt sinnvoll?",
  answers: {
    A: "Ein strukturiertes Feedbackgespräch führen",
    B: "Sofort fristlos kündigen",
    C: "Eine schriftliche Abmahnung aussprechen",
    D: "Die Ursachen gemeinsam analysieren",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Vor einer Kündigung sind pädagogische Maßnahmen und ggf. eine Abmahnung erforderlich.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Auszubildender hat Schwierigkeiten, komplexe Arbeitsabläufe zu verstehen. Welche didaktischen Maßnahmen können helfen?",
  answers: {
    A: "Aufgaben in kleinere Schritte zerlegen",
    B: "Verstärkt Fachbegriffe verwenden",
    C: "Visualisierungen einsetzen",
    D: "Die Vier-Stufen-Methode anwenden",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Didaktische Reduktion und anschauliches Lernen fördern das Verständnis.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein minderjähriger Auszubildender soll kurzfristig Überstunden leisten. Was ist zu beachten?",
  answers: {
    A: "Das Jugendarbeitsschutzgesetz ist einzuhalten",
    B: "Überstunden sind grundsätzlich verboten",
    C: "Ein Ausgleich durch Freizeit muss erfolgen",
    D: "Der Ausbilder entscheidet allein",
  },
  correct_answer: ["A", "C"],
  explanation: "Überstunden sind nur unter bestimmten Bedingungen erlaubt und müssen ausgeglichen werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Betrieb möchte erstmals ausbilden, hat aber keinen Ausbilder mit AEVO. Welche Möglichkeiten bestehen?",
  answers: {
    A: "Ein externer Ausbilder kann eingesetzt werden",
    B: "Die Ausbildung darf trotzdem durchgeführt werden",
    C: "Ein Mitarbeiter kann die AEVO nachholen",
    D: "Die Ausbildung muss verschoben werden",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "AEVO ist Voraussetzung – ohne Eignung keine Ausbildung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Auszubildender bricht häufig Aufgaben ab und zeigt geringe Frustrationstoleranz. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Motivationsgespräch führen",
    B: "Komplexität der Aufgaben reduzieren",
    C: "Den Azubi ignorieren",
    D: "Erfolge gezielt hervorheben",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Motivation und angepasste Anforderungen fördern Lernfortschritt.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Ausbilder plant eine Unterweisung. Welche Aspekte sollte er berücksichtigen?",
  answers: {
    A: "Lernziele definieren",
    B: "Vorkenntnisse analysieren",
    C: "Nur spontane Durchführung",
    D: "Geeignete Methode auswählen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Eine gute Unterweisung basiert auf Planung und Zieldefinition.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Auszubildender meldet sich häufig krank. Welche Schritte sind sinnvoll?",
  answers: {
    A: "Gespräch zur Klärung führen",
    B: "Sofort kündigen",
    C: "Ursachen analysieren",
    D: "Betriebsarzt einbeziehen",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Krankheit erfordert Fürsorgepflicht, nicht sofortige Sanktion.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Unternehmen bildet aus, obwohl wesentliche Inhalte nicht vermittelt werden können. Was ist die Folge?",
  answers: {
    A: "Die zuständige Stelle kann die Ausbildung untersagen",
    B: "Es passiert nichts",
    C: "Kooperation mit anderen Betrieben möglich",
    D: "Der Azubi muss selbst lernen",
  },
  correct_answer: ["A", "C"],
  explanation: "Fehlende Inhalte müssen sichergestellt werden, ggf. extern.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Azubi lernt am besten praktisch, hat aber Schwächen in Theorie. Wie sollte ausgebildet werden?",
  answers: {
    A: "Praxisorientiertes Lernen fördern",
    B: "Theorie komplett weglassen",
    C: "Praxis mit Theorie verknüpfen",
    D: "Individuelle Förderung anbieten",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Lernstile berücksichtigen, aber Theorie bleibt notwendig.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Bewerber hat gute Noten, wirkt aber unmotiviert. Wie sollte entschieden werden?",
  answers: {
    A: "Nur Noten zählen",
    B: "Motivation berücksichtigen",
    C: "Probearbeiten anbieten",
    D: "Gespräch vertiefen",
  },
  correct_answer: ["B", "C", "D"],
  explanation: "Motivation ist entscheidend für Ausbildungserfolg.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Azubi besteht die Prüfung nicht und ist demotiviert. Wie reagiert der Ausbilder richtig?",
  answers: {
    A: "Motivationsgespräch führen",
    B: "Unterstützung bei Vorbereitung anbieten",
    C: "Kündigen",
    D: "Neue Lernstrategie entwickeln",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Förderung und Motivation stehen im Vordergrund.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Während einer Unterweisung zeigt der Azubi kein Interesse. Was tun?",
  answers: {
    A: "Methode wechseln",
    B: "Aktiv einbinden",
    C: "Ignorieren",
    D: "Praxisbezug herstellen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Aktivierung ist zentral für Lernerfolg.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Ausbilder delegiert die Ausbildung komplett an ungelernte Mitarbeiter. Bewertung?",
  answers: {
    A: "Nicht zulässig",
    B: "Zulässig ohne Einschränkung",
    C: "Verantwortung bleibt beim Ausbilder",
    D: "Teilweise Übertragung möglich",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Ausbilder bleibt verantwortlich, darf aber Aufgaben übertragen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Azubi fühlt sich im Team nicht integriert. Was hilft?",
  answers: {
    A: "Teamintegration fördern",
    B: "Gespräch führen",
    C: "Ignorieren",
    D: "Patenmodell einsetzen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Integration ist wichtig für Lernerfolg.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Azubi verletzt wiederholt Sicherheitsvorschriften. Wie reagieren?",
  answers: {
    A: "Unterweisung wiederholen",
    B: "Abmahnung",
    C: "Ignorieren",
    D: "Konsequenzen aufzeigen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Sicherheit hat höchste Priorität – pädagogisch + rechtlich reagieren.",
  question_type: "multiple_choice",
},
{
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Ein Ausbildungsbetrieb möchte die Ausbildung in einem staatlich anerkannten Beruf vorzeitig beenden, da die Auftragslage eingebrochen ist. Welche rechtliche Lage besteht?",
    answers: {
      A: "Der Betrieb kann das Ausbildungsverhältnis mit einer Frist von 4 Wochen kündigen",
      B: "Wirtschaftliche Schwierigkeiten sind kein wichtiger Grund für eine außerordentliche Kündigung durch den Betrieb",
      C: "Der Betrieb muss sich in Kooperation mit der Kammer um einen Ersatzbetrieb für den Azubi bemühen",
      D: "Das Ausbildungsverhältnis endet automatisch bei Insolvenzanmeldung",
    },
    correct_answer: ["B", "C"],
    explanation: "Auszubildende genießen besonderen Kündigungsschutz. Wirtschaftliche Flaute rechtfertigt keine Kündigung. Der Betrieb steht in der Pflicht, die Ausbildung fortzuführen oder bei der Suche nach einem neuen Betrieb zu helfen.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Was ist der wesentliche Unterschied zwischen dem 'Ausbildungsrahmenplan' und dem 'betrieblichen Ausbildungsplan'?",
    answers: {
      A: "Der Ausbildungsrahmenplan ist rechtlich bindend, der betriebliche Plan nur eine Empfehlung",
      B: "Der Ausbildungsrahmenplan ist allgemein gehalten; der betriebliche Plan ist individuell auf die Kapazitäten des Betriebs zugeschnitten",
      C: "Der betriebliche Plan darf von den Inhalten des Ausbildungsrahmenplans zum Nachteil des Azubis abweichen",
      D: "Der betriebliche Plan muss die sachliche und zeitliche Gliederung für die gesamte Ausbildungsdauer konkretisieren",
    },
    correct_answer: ["B", "D"],
    explanation: "Der Ausbildungsrahmenplan ist die bundesweite Vorgabe. Der betriebliche Plan übersetzt diese Vorgaben in den konkreten Durchlaufplan des Unternehmens (wer lernt wann in welcher Abteilung was).",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "In der Unterweisung nach der 4-Stufen-Methode unterläuft dem Auszubildenden in Stufe 3 (Nachmachen) ein sicherheitsrelevanter Fehler. Wie reagiert der Ausbilder korrekt?",
    answers: {
      A: "Er lässt den Azubi die Stufe zu Ende führen und bespricht den Fehler danach",
      B: "Er greift sofort ein, korrigiert den Fehler und lässt den Schritt wiederholen",
      C: "Er bricht die Unterweisung komplett ab, da die Eignung des Azubis fehlt",
      D: "Er protokolliert den Fehler für das spätere Beurteilungsgespräch",
    },
    correct_answer: ["B"],
    explanation: "Bei sicherheitsrelevanten Fehlern muss sofort eingegriffen werden, um Unfälle zu vermeiden und zu verhindern, dass sich eine falsche (gefährliche) Arbeitsweise einprägt.",
    question_type: "normal",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Welche psychologische Funktion hat das 'aktive Zuhören' in einem Konfliktgespräch mit einem Auszubildenden?",
    answers: {
      A: "Es dient dazu, die Argumente des Azubis sofort zu entkräften",
      B: "Es signalisiert Wertschätzung und hilft dabei, die emotionale Ebene von der Sachebene zu trennen",
      C: "Es verlängert das Gespräch unnötig",
      D: "Es hilft dem Ausbilder, die wirklichen Ursachen des Konflikts (Bedürfnisse/Gefühle) zu verstehen",
    },
    correct_answer: ["B", "D"],
    explanation: "Aktives Zuhören (Paraphrasieren, Verbalisieren) baut Spannungen ab und stellt sicher, dass man den anderen wirklich verstanden hat, bevor man nach Lösungen sucht.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Ein Auszubildender möchte seine Abschlussprüfung wiederholen, nachdem er zum zweiten Mal durchgefallen ist. Was muss er beachten?",
    answers: {
      A: "Er kann die Prüfung beliebig oft wiederholen, solange der Betrieb ihn bezahlt",
      B: "Es ist nur noch eine (letzte) Wiederholung möglich, insgesamt gibt es drei Versuche",
      C: "Er muss die Wiederholung innerhalb der geltenden Fristen bei der Kammer anmelden",
      D: "Er kann die Wiederholung nur antreten, wenn er die Berufsschule weiter besucht",
    },
    correct_answer: ["B", "C"],
    explanation: "Die Abschlussprüfung kann laut BBiG zweimal wiederholt werden. Danach gilt sie als endgültig nicht bestanden. Eine Anmeldung bei der zuständigen Stelle ist zwingend.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Was versteht man unter der 'Gleichwertigkeit von beruflicher und akademischer Bildung' im Kontext des DQR?",
    answers: {
      A: "Dass ein Geselle automatisch studieren darf",
      B: "Dass Abschlüsse wie der 'Meister' oder 'Fachwirt' auf der gleichen Niveaustufe (Stufe 6) stehen wie der Bachelor",
      C: "Dass es in Deutschland keine Unterschiede mehr zwischen Uni und Betrieb gibt",
      D: "Dass die Kompetenzprofile vergleichbare Anforderungen an Wissen, Fertigkeiten und Verantwortung stellen",
    },
    correct_answer: ["B", "D"],
    explanation: "Der DQR (Deutscher Qualifikationsrahmen) soll zeigen, dass berufliche Aufstiegsfortbildungen kognitiv und verantwortlich genauso anspruchsvoll sind wie akademische Abschlüsse.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Welche rechtliche Bedeutung hat die 'Niederschrift' des Ausbildungsvertrags?",
    answers: {
      A: "Der Vertrag ist nur gültig, wenn er notariell beglaubigt wurde",
      B: "Die wesentlichen Vertragsinhalte müssen schriftlich festgehalten und unterzeichnet werden (§ 11 BBiG)",
      C: "Ein mündlicher Ausbildungsvertrag ist zwar wirksam, stellt aber eine Ordnungswidrigkeit dar",
      D: "Die Niederschrift dient als Beweisdokument für die zuständige Stelle zur Eintragung",
    },
    correct_answer: ["B", "C", "D"],
    explanation: "Obwohl Verträge theoretisch mündlich entstehen können, schreibt das BBiG die Schriftform zwingend vor. Ohne diese wird der Vertrag nicht eingetragen und der Ausbildende handelt ordnungswidrig.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Was ist das Kernmerkmal der 'Projektmethode' gegenüber dem 'Leittextverfahren'?",
    answers: {
      A: "Bei der Projektmethode gibt es keine Erfolgskontrolle",
      B: "Die Projektmethode ist weniger strukturiert und lässt mehr Raum für eigenständige Planung und Zielsetzung der Gruppe",
      C: "Leittexte führen den Azubi durch Fragen, während ein Projekt ein reales Gesamtergebnis (Produkt/Dienstleistung) fordert",
      D: "Die Projektmethode darf nur am Ende der Ausbildung eingesetzt werden",
    },
    correct_answer: ["B", "C"],
    explanation: "Während das Leittextverfahren den Lernweg durch Fragen stark vorstrukturiert, ist die Projektmethode offener und zielt auf die vollständige Handlungskompetenz (Planen, Durchführen, Kontrollieren) ab.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Welche Anforderung wird an ein 'einfaches' Zeugnis gestellt, wenn der Auszubildende die Ausbildung abbricht?",
    answers: {
      A: "Es muss eine Beurteilung der Leistung enthalten",
      B: "Es darf keine Formulierungen enthalten, die das weitere Fortkommen erschweren",
      C: "Es muss Angaben über Art, Dauer und Ziel der Ausbildung enthalten",
      D: "Es muss den Grund des Abbruchs detailliert schildern",
    },
    correct_answer: ["B", "C"],
    explanation: "Ein einfaches Zeugnis ist rein beschreibend (Fakten). Leistungsbeurteilungen fehlen hier. Negative Formulierungen oder Kündigungsgründe sind unzulässig, um den beruflichen Werdegang nicht unbillig zu behindern.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Inwieweit hat der Betriebsrat Mitbestimmungsrechte bei der Durchführung der Berufsausbildung?",
    answers: {
      A: "Er kann die Einstellung bestimmter Azubis ohne Grund verhindern",
      B: "Er bestimmt mit bei der Bestellung und Abberufung von Ausbildern (§ 98 BetrVG)",
      C: "Er hat ein Mitbestimmungsrecht bei der Einführung von betrieblichen Bildungsgängen",
      D: "Er legt die Prüfungstermine bei der IHK fest",
    },
    correct_answer: ["B", "C"],
    explanation: "Nach dem Betriebsverfassungsgesetz hat der Betriebsrat weitreichende Rechte bei der Berufsbildung, insbesondere bei der Auswahl der Personen, die ausbilden, und der Durchführung von Bildungsmaßnahmen.",
    question_type: "multiple_choice",
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Welche rechtliche Stellung nehmen die Empfehlungen des Hauptausschusses des Bundesinstituts für Berufsbildung (BIBB) ein?",
    answers: {
      A: "Sie sind für alle Betriebe unmittelbar rechtsverbindlich wie Gesetze",
      B: "Sie haben den Charakter von Richtlinien und Orientierungshilfen für die Berufsbildungspraxis",
      C: "Sie ersetzen die Ausbildungsordnungen der einzelnen Berufe",
      D: "Sie dienen den zuständigen Stellen als Grundlage für eigene Regelungen"
    },
    correct_answer: ["B", "D"],
    explanation: "Das BIBB erarbeitet Empfehlungen, um eine einheitliche Anwendung des BBiG zu gewährleisten. Sie sind keine Gesetze, setzen aber de facto Standards für Kammern und Betriebe.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Ein Betrieb möchte einen Auszubildenden einstellen, der bereits eine andere Ausbildung abgebrochen hat. Was ist bei der Anrechnung der Vorbildungszeiten zu beachten?",
    answers: {
      A: "Die Anrechnung erfolgt automatisch durch die Kammer",
      B: "Ein gemeinsamer Antrag von Azubi und Betrieb bei der zuständigen Stelle ist erforderlich",
      C: "Es kann nur angerechnet werden, wenn die vorherige Ausbildung im selben Berufsfeld lag",
      D: "Die Verkürzung muss im Ausbildungsvertrag festgehalten werden"
    },
    correct_answer: ["B", "D"],
    explanation: "Anrechnungen oder Verkürzungen wegen Vorbildung sind Antragsgeschäfte (§ 8 BBiG). Sie müssen von beiden Vertragsparteien gewollt und bei der Kammer beantragt werden.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 2,
    question: "Was versteht man unter dem Begriff 'Lernplateau' im Verlauf einer Ausbildung?",
    answers: {
      A: "Eine Phase, in der der Lernfortschritt trotz Übung stagniert oder scheinbar rückläufig ist",
      B: "Der höchste Punkt der Ausbildung kurz vor der Prüfung",
      C: "Eine spezielle Lernmethode für Gruppenarbeiten",
      D: "Ein physischer Ort im Betrieb, an dem gelernt wird"
    },
    correct_answer: ["A"],
    explanation: "Lernplateaus sind typische Phasen im Lernprozess. Der Ausbilder muss hier motivierend wirken, da der Azubi das Gefühl hat, trotz Anstrengung nicht besser zu werden.",
    question_type: "normal"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Welche Merkmale kennzeichnen 'handlungsorientiertes Lernen'?",
    answers: {
      A: "Der Ausbilder gibt jeden Einzelschritt detailliert vor",
      B: "Die Auszubildenden sollen ganzheitliche Aufgaben bearbeiten",
      C: "Kopf, Herz und Hand (Wissen, Einstellung, Fertigkeit) werden gleichermaßen angesprochen",
      D: "Das Ergebnis der Handlung ist wichtiger als der Weg dorthin"
    },
    correct_answer: ["B", "C"],
    explanation: "Handlungsorientierung bedeutet, dass der Lernende eine Aufgabe von der Planung bis zur Kontrolle selbstständig durchführt (vollständige Handlung).",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Ein Auszubildender besteht die Abschlussprüfung nicht. Er verlangt vom Ausbilder die Verlängerung des Ausbildungsverhältnisses. Wie lange muss verlängert werden?",
    answers: {
      A: "Um genau ein weiteres Jahr",
      B: "Bis zur nächstmöglichen Wiederholungsprüfung, maximal jedoch um ein Jahr",
      C: "Unbefristet, bis er die Prüfung irgendwann besteht",
      D: "Gar nicht, wenn der Betrieb mit den Leistungen unzufrieden war"
    },
    correct_answer: ["B"],
    explanation: "Laut § 21 BBiG hat der Azubi einen Rechtsanspruch auf Verlängerung bis zur nächsten Wiederholungsprüfung (Limit: 1 Jahr), sofern er dies verlangt.",
    question_type: "normal"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Welche Rolle spielt die 'Einstiegsqualifizierung' (EQ)?",
    answers: {
      A: "Es ist ein sozialversicherungspflichtiges Langzeitpraktikum (6-12 Monate)",
      B: "Sie dient als Vorbereitung auf eine Ausbildung für Jugendliche mit Vermittlungshemmnissen",
      C: "Sie ersetzt das erste Lehrjahr in jedem Fall automatisch",
      D: "Sie wird durch die Bundesagentur für Arbeit gefördert"
    },
    correct_answer: ["A", "B", "D"],
    explanation: "Die EQ ist eine Brücke in die Ausbildung. Sie kann auf eine spätere Ausbildung angerechnet werden, dies ist aber eine Einzelfallentscheidung der Kammer.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "In einer Konfliktsituation wendet der Ausbilder das 'Ich-Botschaften'-Modell an. Was ist der Vorteil gegenüber 'Du-Botschaften'?",
    answers: {
      A: "Der Ausbilder zeigt seine eigene Betroffenheit, ohne den Azubi direkt anzugreifen",
      B: "Die Wahrscheinlichkeit für Rechtfertigungen und Abwehrhaltungen sinkt",
      C: "Der Ausbilder wirkt dadurch autoritärer und bestimmter",
      D: "Der Konflikt wird sachlicher und weniger emotional"
    },
    correct_answer: ["A", "B"],
    explanation: "Ich-Botschaften beschreiben die eigene Wahrnehmung und Wirkung, anstatt dem Gegenüber Vorwürfe zu machen. Das hält die Kommunikation offen.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Was ist der Unterschied zwischen der 'persönlichen' und der 'fachlichen' Eignung?",
    answers: {
      A: "Persönlich geeignet ist jeder, dem es nicht gerichtlich untersagt wurde; fachlich erfordert berufliche Kenntnisse und die AEVO",
      B: "Fachlich geeignet ist man nur mit einem Studium",
      C: "Die persönliche Eignung kann man durch einen Test bei der IHK nachweisen",
      D: "Wer Kinder und Jugendliche nicht beschäftigen darf, ist persönlich ungeeignet"
    },
    correct_answer: ["A", "D"],
    explanation: "Die persönliche Eignung wird gesetzlich unterstellt, sofern kein Ausschlussgrund (z.B. schwere Straftaten) vorliegt (§ 29 BBiG). Die fachliche Eignung muss aktiv nachgewiesen werden (§ 30 BBiG).",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Was besagt die 'Transfer-Problematik' in der betrieblichen Ausbildung?",
    answers: {
      A: "Dass Auszubildende ihre Fahrtkosten zur Berufsschule nicht erstattet bekommen",
      B: "Die Schwierigkeit, theoretisch gelerntes Wissen (z. B. aus der Schule) in praktisches Handeln im Betrieb umzusetzen",
      C: "Der Wechsel eines Azubis von einem Betrieb in einen anderen",
      D: "Dass Wissen nach der Prüfung schnell wieder vergessen wird"
    },
    correct_answer: ["B"],
    explanation: "Transfer ist die Anwendung von gelerntem Wissen auf neue Situationen. Der Ausbilder muss den Azubi aktiv dabei unterstützen, die Brücke zwischen Theorie und Praxis zu schlagen.",
    question_type: "normal"
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 2,
    question: "Ein Auszubildender hat die Abschlussprüfung bestanden. Der Betrieb möchte ihn nicht übernehmen. Was muss der Ausbilder beachten?",
    answers: {
      A: "Er muss den Azubi spätestens 3 Monate vor Ende kündigen",
      B: "Das Ausbildungsverhältnis endet automatisch mit Bestehen der Prüfung, eine Kündigung ist nicht nötig",
      C: "Der Betrieb ist gesetzlich verpflichtet, jeden Azubi für mindestens 6 Monate zu übernehmen",
      D: "Auf Verlangen des Azubis muss ein qualifiziertes Zeugnis ausgestellt werden"
    },
    correct_answer: ["B", "D"],
    explanation: "Das Ausbildungsverhältnis ist ein Zweckbündnis auf Zeit. Es endet mit dem Tag der Bekanntgabe des Ergebnisses durch den Prüfungsausschuss. Eine Übernahmepflicht gibt es (außer bei speziellen Tarifverträgen) nicht.",
    question_type: "multiple_choice"
  },
  {
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Auszubildender im 1. Lehrjahr wird regelmäßig von Kollegen für einfache Tätigkeiten eingesetzt, die nicht dem Ausbildungsziel entsprechen. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Gespräch mit den Kollegen führen",
    B: "Den Azubi weiterhin einsetzen lassen",
    C: "Ausbildungsplan überprüfen",
    D: "Sicherstellen, dass Ausbildungsinhalte vermittelt werden",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Ausbildungsfremde Tätigkeiten dürfen nicht im Vordergrund stehen; der Ausbilder trägt Verantwortung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Auszubildender macht wiederholt die gleichen Fehler bei einer Aufgabe. Welche Maßnahme ist didaktisch sinnvoll?",
  answers: {
    A: "Fehler gemeinsam analysieren",
    B: "Aufgabe erneut vormachen",
    C: "Azubi alleine lassen",
    D: "Alternative Lernmethode wählen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Fehler sind Lernchancen; Anleitung und Methodenwechsel helfen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Auszubildender möchte seinen Urlaub während der Berufsschulzeit nehmen. Was gilt?",
  answers: {
    A: "Urlaub soll grundsätzlich in der Berufsschulzeit nicht gewährt werden",
    B: "Der Azubi darf selbst entscheiden",
    C: "Ausnahmen sind möglich",
    D: "Der Betrieb muss zustimmen",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Urlaub während der Schulzeit ist unüblich, aber in Ausnahmefällen möglich.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Betrieb stellt fest, dass der Ausbilder fachlich geeignet ist, aber keine pädagogischen Kenntnisse hat. Welche Aussage ist korrekt?",
  answers: {
    A: "Er darf ohne Einschränkung ausbilden",
    B: "Die AEVO-Prüfung ist erforderlich",
    C: "Die Ausbildung darf nicht erfolgen",
    D: "Die AEVO kann nachgeholt werden",
  },
  correct_answer: ["B", "D"],
  explanation: "Die AEVO ist verpflichtend, kann aber nachgeholt werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Auszubildender zeigt starke Leistungsschwankungen. Wie sollte der Ausbilder vorgehen?",
  answers: {
    A: "Leistungsgespräch führen",
    B: "Ursachen analysieren",
    C: "Sofort abmahnen",
    D: "Individuelle Förderung planen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Schwankungen erfordern Analyse, nicht sofort Sanktionen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Ausbilder möchte die Selbstständigkeit eines Azubis fördern. Welche Methode eignet sich besonders?",
  answers: {
    A: "Projektmethode",
    B: "Lehrvortrag",
    C: "Vollständige Handlung",
    D: "Reines Vormachen",
  },
  correct_answer: ["A", "C"],
  explanation: "Selbstständigkeit wird durch eigenverantwortliches Arbeiten gefördert.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Auszubildender erscheint alkoholisiert zur Arbeit. Welche Schritte sind richtig?",
  answers: {
    A: "Sofortiges Gespräch führen",
    B: "Nach Hause schicken",
    C: "Abmahnung prüfen",
    D: "Ignorieren",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Sicherheit geht vor; arbeitsrechtliche Schritte sind möglich.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Betrieb möchte einen Azubi einstellen, kann aber nicht alle Inhalte vermitteln. Was ist möglich?",
  answers: {
    A: "Verbundausbildung",
    B: "Kooperation mit anderen Betrieben",
    C: "Inhalte weglassen",
    D: "Überbetriebliche Ausbildung nutzen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Alle Inhalte müssen vermittelt werden – ggf. extern.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Azubi verliert schnell die Motivation bei schwierigen Aufgaben. Was hilft?",
  answers: {
    A: "Erfolgserlebnisse schaffen",
    B: "Aufgaben strukturieren",
    C: "Überfordern",
    D: "Feedback geben",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Motivation entsteht durch Erfolg und Struktur.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Bewerber wirkt im Gespräch unsicher, hat aber Potenzial. Wie reagieren?",
  answers: {
    A: "Potenzial berücksichtigen",
    B: "Direkt ablehnen",
    C: "Probearbeiten anbieten",
    D: "Weiteres Gespräch führen",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Potenzial ist wichtiger als erster Eindruck.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Azubi verweigert wiederholt Anweisungen. Was ist korrekt?",
  answers: {
    A: "Gespräch führen",
    B: "Abmahnung möglich",
    C: "Ignorieren",
    D: "Kündigung als letzter Schritt",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Stufenweise Eskalation ist wichtig.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 3,
  question: "Ein Ausbilder stellt fest, dass ein Azubi visuell besser lernt. Was sollte er tun?",
  answers: {
    A: "Grafiken einsetzen",
    B: "Demonstrationen nutzen",
    C: "Nur Texte verwenden",
    D: "Videos einsetzen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Lernstilgerechte Methoden steigern den Erfolg.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 3,
  question: "Ein Ausbilder vernachlässigt seine Pflichten dauerhaft. Was kann passieren?",
  answers: {
    A: "Entzug der Ausbildungserlaubnis",
    B: "Keine Konsequenzen",
    C: "Eingreifen der zuständigen Stelle",
    D: "Abmahnung durch die Kammer",
  },
  correct_answer: ["A", "C"],
  explanation: "Die Kammer kann eingreifen und Ausbildung untersagen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 3,
  question: "Ein Azubi ist fachlich gut, aber sozial schwierig. Was tun?",
  answers: {
    A: "Sozialkompetenz fördern",
    B: "Feedback geben",
    C: "Ignorieren",
    D: "Teamarbeit fördern",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Soziale Kompetenzen sind Teil der Ausbildung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 3,
  question: "Ein Azubi hat Angst vor der Prüfung. Wie unterstützen?",
  answers: {
    A: "Prüfungssimulation",
    B: "Gespräch führen",
    C: "Druck erhöhen",
    D: "Lernplan erstellen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Unterstützung und Struktur helfen gegen Prüfungsangst.",
  question_type: "multiple_choice",
},
{
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Der 17-jährige Auszubildende Lukas hat am Montag wegen eines dringenden Kundenauftrags 9 Stunden gearbeitet. Der Ausbilder möchte, dass er dafür am Dienstag nur 7 Stunden arbeitet, um die 40-Stunden-Woche einzuhalten. Wie ist die Rechtslage nach dem JArbSchG?",
    answers: {
      A: "Dies ist zulässig, da die durchschnittliche Wochenarbeitszeit von 40 Stunden gewahrt bleibt.",
      B: "Dies ist unzulässig, da die tägliche Arbeitszeit für Jugendliche 8 Stunden nicht überschreiten darf.",
      C: "Dies ist zulässig, sofern die tägliche Arbeitszeit innerhalb einer Woche im Durchschnitt 8 Stunden nicht überschreitet.",
      D: "Dies ist nur zulässig, wenn Lukas am Freitag dafür bereits um 12 Uhr mittags geht."
    },
    correct_answer: ["B", "C"],
    explanation: "Gemäß § 8 JArbSchG darf die Arbeitszeit 8 Stunden täglich nicht überschreiten. Sie kann jedoch auf 8,5 Stunden verlängert werden, wenn sie an anderen Tagen derselben Woche auf unter 8 Stunden verkürzt wird, um im Schnitt die 40 Stunden zu halten. 9 Stunden sind jedoch in jedem Fall zu viel.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Die Auszubildende Sarah ist im 2. Lehrjahr und zeigt hervorragende schulische Leistungen, wirkt aber im Betrieb zunehmend unterfordert und unmotiviert, da sie fast nur Routineaufgaben erledigt. Welches Vorgehen des Ausbilders ist hier nach dem Modell der vollständigen Handlung am sinnvollsten?",
    answers: {
      A: "Der Ausbilder sollte Sarah ein Projekt übertragen, das sie von der Planung über die Durchführung bis zur Kontrolle selbstständig verantwortet.",
      B: "Der Ausbilder sollte Sarah mehr Routineaufgaben in kürzerer Zeit geben, um ihre Belastbarkeit zu testen.",
      C: "Der Ausbilder sollte Sarah als Mentorin für einen neuen Azubi im 1. Lehrjahr einsetzen, um ihre Sozialkompetenz zu stärken.",
      D: "Der Ausbilder sollte Sarah für die nächste Zeit vermehrt in die theoretische Planung komplexer Aufträge einbeziehen."
    },
    correct_answer: ["A", "D"],
    explanation: "Um Unterforderung entgegenzuwirken und die Handlungskompetenz zu fördern, eignet sich die Projektmethode am besten, da sie alle Phasen der vollständigen Handlung umfasst. Auch die Einbeziehung in komplexe Planungen steigert die Motivation durch kognitive Herausforderungen.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Auszubildender Marc (19 Jahre) wurde nach der Probezeit dabei ertappt, wie er Werkzeug des Betriebes im Wert von 150 Euro entwenden wollte. Der Ausbilder möchte das Ausbildungsverhältnis fristlos kündigen. Welche formalen Schritte sind zwingend erforderlich?",
    answers: {
      A: "Die Kündigung muss schriftlich erfolgen und die Kündigungsgründe genau angeben.",
      B: "Es muss zwingend vorher eine Abmahnung wegen eines ähnlichen Vergehens vorliegen.",
      C: "Die Kündigung muss innerhalb von zwei Wochen nach Bekanntwerden des Vorfalls ausgesprochen werden.",
      D: "Der Betriebsrat (falls vorhanden) muss vor dem Ausspruch der Kündigung angehört werden."
    },
    correct_answer: ["A", "C", "D"],
    explanation: "Bei schweren Vertrauensbrüchen wie Diebstahl ist eine Abmahnung oft entbehrlich. Die Schriftform mit Grund (§ 22 BBiG), die 2-Wochen-Ausschlussfrist (§ 626 BGB) und die Anhörung des Betriebsrats (§ 102 BetrVG) sind jedoch zwingend.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Ein Ausbildungsbetrieb schließt im November einen Vertrag mit einer 16-jährigen Bewerberin für das nächste Jahr ab. Die Eltern sind im Urlaub und die Bewerberin unterschreibt allein. Im Januar (vor Ausbildungsbeginn) entscheiden sich die Eltern um und erklären den Vertrag für nichtig. Wie ist die Rechtslage?",
    answers: {
      A: "Der Vertrag ist gültig, da die Bewerberin mit 16 Jahren bereits eingeschränkt geschäftsfähig ist.",
      B: "Der Vertrag ist schwebend unwirksam und wird durch die Verweigerung der Eltern endgültig unwirksam.",
      C: "Der Vertrag ist gültig, da es sich um ein 'vorteilhaftes Rechtsgeschäft' handelt.",
      D: "Da die Eltern bei Unterschrift nicht anwesend waren, ist der Vertrag von Anfang an nichtig."
    },
    correct_answer: ["B"],
    explanation: "Nach dem BGB benötigen Minderjährige für Rechtsgeschäfte, die nicht lediglich rechtlich vorteilhaft sind (und ein Ausbildungsvertrag enthält Pflichten!), die Zustimmung der gesetzlichen Vertreter. Ohne diese ist der Vertrag schwebend unwirksam und wird durch die Ablehnung nichtig.",
    question_type: "normal"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Während einer Unterweisung an einer CNC-Maschine bemerkt der Ausbilder, dass der Auszubildende sehr nervös ist und Angst hat, einen teuren Fehler zu machen. Welche methodische Entscheidung des Ausbilders ist in dieser Situation am empathischsten und fachlich sinnvollsten?",
    answers: {
      A: "Er sollte zur Vier-Stufen-Methode wechseln, um dem Azubi durch das Vormachen Sicherheit zu geben.",
      B: "Er sollte dem Azubi gut zureden und ihn anweisen, den nächsten Schritt einfach 'mutig' zu versuchen.",
      C: "Er sollte die Unterweisung abbrechen und den Azubi erst am nächsten Tag weitermachen lassen.",
      D: "Er sollte den Schwierigkeitsgrad reduzieren und den Azubi zunächst an einem Simulationsprogramm oder einem Übungsstück arbeiten lassen."
    },
    correct_answer: ["A", "D"],
    explanation: "Sicherheit steht an erster Stelle. Die Vier-Stufen-Methode bietet durch das 'Vormachen' des Ausbilders eine hohe psychologische Sicherheit. Ein Übungsstück oder eine Simulation nimmt den wirtschaftlichen Druck vom Azubi.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Herr Müller möchte als Ausbilder tätig werden. Er hat vor 6 Jahren eine Freiheitsstrafe von 14 Monaten wegen schweren Betrugs verbüßt. Die zuständige Stelle prüft nun seine Eignung. Zu welchem Ergebnis wird sie wahrscheinlich kommen?",
    answers: {
      A: "Herr Müller ist persönlich ungeeignet, da er zu einer Freiheitsstrafe von mehr als einem Jahr verurteilt wurde.",
      B: "Herr Müller ist persönlich geeignet, da die Tat nicht im Zusammenhang mit der Berufsbildung stand und keine Straftat gegen Kinder/Jugendliche war.",
      C: "Herr Müller ist persönlich ungeeignet, da ein Betrüger keine Vorbildfunktion für Auszubildende einnehmen kann.",
      D: "Die persönliche Eignung ist nur dann gefährdet, wenn er gegen das Betäubungsmittelgesetz verstoßen hätte."
    },
    correct_answer: ["B"],
    explanation: "Persönlich ungeeignet ist nach § 29 BBiG insbesondere, wer Kinder und Jugendliche nicht beschäftigen darf (z.B. wegen Verstößen gegen das JArbSchG oder das Betäubungsmittelgesetz) oder wer wegen Straftaten verurteilt wurde, die direkt die Eignung zur Berufsausbildung ausschließen. Ein Wirtschaftsdelikt vor 6 Jahren führt nicht automatisch zum dauerhaften Entzug der Eignung.",
    question_type: "normal"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "In einer Beurteilungsrunde vergleicht der Ausbilder drei Azubis miteinander. Der erste Azubi war außergewöhnlich gut. Der zweite Azubi war durchschnittlich, wird aber vom Ausbilder nun als 'eher schwach' bewertet. Welcher Beurteilungsfehler liegt hier vor?",
    answers: {
      A: "Der Halo-Effekt (Hof-Effekt).",
      B: "Der Kontrast-Effekt.",
      C: "Die Tendenz zur Mitte.",
      D: "Der Nikolaus-Effekt."
    },
    correct_answer: ["B"],
    explanation: "Der Kontrast-Effekt tritt auf, wenn die Leistung einer Person im direkten Vergleich zu einer vorherigen, sehr starken oder sehr schwachen Person falsch wahrgenommen wird. Der Durchschnittliche wirkt neben dem Überflieger schlechter, als er eigentlich ist.",
    question_type: "normal"
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Ein Prüfling fällt durch die Abschlussprüfung. Er ist davon überzeugt, dass die Korrektur seiner schriftlichen Aufgaben fehlerhaft war. Welche Rechte hat er nun?",
    answers: {
      A: "Er hat das Recht auf Einsicht in seine Prüfungsunterlagen bei der zuständigen Stelle.",
      B: "Er kann verlangen, dass die Prüfung sofort von einem anderen Lehrer seiner Berufsschule nachkorrigiert wird.",
      C: "Er kann innerhalb eines Monats nach Bekanntgabe des Bescheids Widerspruch einlegen.",
      D: "Er kann bei der Kammer beantragen, dass die mündliche Prüfung die schriftliche Note in jedem Fall ersetzt."
    },
    correct_answer: ["A", "C"],
    explanation: "Prüflinge haben ein Recht auf Akteneinsicht. Gegen das Ergebnis kann Widerspruch eingelegt werden (Verwaltungsverfahren). Eine Nachkorrektur durch beliebige Lehrer oder ein pauschaler Notenaustausch sind nicht vorgesehen.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Ein Betrieb hat eine Urlaubssperre für die Sommermonate verhängt, da dort Hochsaison herrscht. Der Auszubildende möchte jedoch in den Sommerferien Urlaub nehmen, um mit seinen Eltern zu verreisen. Wer bekommt recht?",
    answers: {
      A: "Der Betrieb, da dringende betriebliche Belange über den Wünschen der Mitarbeiter stehen.",
      B: "Der Auszubildende, da Urlaub während der Berufsschulferien gewährt werden soll (§ 19 JArbSchG).",
      C: "Der Auszubildende, sofern er noch minderjährig ist.",
      D: "Es muss ein Kompromiss gefunden werden, wobei der Azubi mindestens 2 Wochen in den Ferien erhalten muss."
    },
    correct_answer: ["B", "C"],
    explanation: "Nach § 19 JArbSchG soll der Urlaub Jugendlichen während der Zeit der Berufsschulferien gegeben werden. Ist dies nicht möglich, muss für jeden Berufsschultag in den Ferien, an dem der Jugendliche zur Schule müsste, ein weiterer Urlaubstag gewährt werden. Betriebe müssen Azubis in den Ferien vorrangig behandeln.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Ein Ausbilder plant eine Unterweisung zum Thema 'Professionelle Kundenreklamation am Telefon'. Welche Methode ist hierfür am besten geeignet, um sowohl die Fach- als auch die Sozialkompetenz zu trainieren?",
    answers: {
      A: "Ein Rollenspiel mit anschließendem Feedback.",
      B: "Ein Lehrvortrag über die 5 Regeln der Kommunikation.",
      C: "Die Vier-Stufen-Methode (Vormachen des Telefonats).",
      D: "Eine Gruppenarbeit, bei der die Azubis ein Skript für Reklamationen schreiben."
    },
    correct_answer: ["A"],
    explanation: "Rollenspiele sind ideal, um Verhaltensweisen in sozialen Situationen einzuüben. Sie fördern die Sozialkompetenz und erlauben es, das Gelernte in einer geschützten Umgebung praktisch anzuwenden und durch Feedback zu reflektieren.",
    question_type: "normal"
  },
  {
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender kommt am ersten Arbeitstag sichtbar nervös in den Betrieb. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Den Azubi direkt alleine arbeiten lassen",
    B: "Ein strukturiertes Einführungsgespräch führen",
    C: "Den Betrieb zeigen",
    D: "Ihn sofort prüfen",
  },
  correct_answer: ["B", "C"],
  explanation: "Ein guter Einstieg reduziert Unsicherheit und fördert Motivation.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Azubi versteht eine Aufgabe nach Erklärung nicht sofort. Was ist sinnvoll?",
  answers: {
    A: "Erklärung wiederholen",
    B: "Beispiel zeigen",
    C: "Ihn kritisieren",
    D: "Geduldig bleiben",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Geduld und alternative Erklärungen fördern das Verständnis.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Auszubildender vergisst regelmäßig sein Berichtsheft. Wie reagieren?",
  answers: {
    A: "Erinnern und Bedeutung erklären",
    B: "Ignorieren",
    C: "Konsequenzen aufzeigen",
    D: "Sofort kündigen",
  },
  correct_answer: ["A", "C"],
  explanation: "Berichtsheft ist Pflicht – pädagogisch reagieren.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Azubi fragt häufig nach Hilfe. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Geduldig unterstützen",
    B: "Fragen verbieten",
    C: "Selbstständigkeit fördern",
    D: "Ihn ignorieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Unterstützung und Förderung der Eigenständigkeit sind wichtig.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Azubi lernt besser durch Zuschauen. Was tun?",
  answers: {
    A: "Vormachen",
    B: "Demonstrationen nutzen",
    C: "Nur Theorie erklären",
    D: "Praxis zeigen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Visuelles Lernen wird durch Demonstration unterstützt.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 1,
  question: "Ein Azubi ist krank und meldet sich korrekt ab. Wie reagieren?",
  answers: {
    A: "Genesung wünschen",
    B: "Abmahnung",
    C: "Meldung akzeptieren",
    D: "Ignorieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Korrektes Verhalten des Azubis erfordert angemessene Reaktion.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Azubi wirkt unmotiviert bei einer Aufgabe. Was hilft?",
  answers: {
    A: "Aufgabe erklären",
    B: "Sinn der Aufgabe vermitteln",
    C: "Druck erhöhen",
    D: "Feedback geben",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Motivation entsteht durch Verständnis und Feedback.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 1,
  question: "Ein Azubi macht einen Fehler bei der Arbeit. Wie reagieren?",
  answers: {
    A: "Fehler erklären",
    B: "Gemeinsam verbessern",
    C: "Anschreien",
    D: "Als Lernchance nutzen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Fehler sind Teil des Lernprozesses.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Azubi kommt einmal zu spät. Was ist angemessen?",
  answers: {
    A: "Gespräch führen",
    B: "Sofort kündigen",
    C: "Hinweis geben",
    D: "Ignorieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Ein einmaliges Zuspätkommen erfordert keine drastischen Maßnahmen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 1,
  question: "Ein Azubi stellt viele Fragen. Wie ist das zu bewerten?",
  answers: {
    A: "Zeigt Interesse",
    B: "Stört den Betrieb",
    C: "Ist positiv",
    D: "Sollte unterbunden werden",
  },
  correct_answer: ["A", "C"],
  explanation: "Fragen zeigen Engagement und Lernbereitschaft.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Azubi lernt langsam. Was tun?",
  answers: {
    A: "Mehr Zeit geben",
    B: "Individuell fördern",
    C: "Druck erhöhen",
    D: "Geduldig sein",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Lerntempo ist individuell und muss berücksichtigt werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Azubi arbeitet sehr gut. Wie reagieren?",
  answers: {
    A: "Loben",
    B: "Ignorieren",
    C: "Weiter fördern",
    D: "Mehr Verantwortung geben",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Gute Leistung sollte anerkannt und gefördert werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Azubi hat Probleme im Team. Was tun?",
  answers: {
    A: "Gespräch führen",
    B: "Konflikt klären",
    C: "Ignorieren",
    D: "Integration fördern",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Konflikte sollten aktiv gelöst werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 1,
  question: "Ein Azubi soll eine neue Aufgabe lernen. Was ist sinnvoll?",
  answers: {
    A: "Erklären",
    B: "Vormachen",
    C: "Üben lassen",
    D: "Alleine lassen",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Strukturierte Anleitung hilft beim Lernen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Azubi macht häufig kleine Fehler. Was ist sinnvoll?",
  answers: {
    A: "Feedback geben",
    B: "Fehler analysieren",
    C: "Ignorieren",
    D: "Unterstützen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Regelmäßiges Feedback verbessert die Leistung.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender im 1. Ausbildungsjahr erhält eine Aufgabe, die ihn überfordert. Er wirkt unsicher und macht Fehler. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Die Aufgabe vereinfachen",
    B: "Den Azubi alleine weiterarbeiten lassen",
    C: "Die Aufgabe erneut erklären",
    D: "Den Azubi kritisieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Aufgaben müssen dem Ausbildungsstand entsprechen. Unterstützung ist notwendig.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Auszubildender zeigt wenig Interesse an theoretischen Inhalten. Was ist eine geeignete Maßnahme?",
  answers: {
    A: "Praxisbezug herstellen",
    B: "Mehr Theorie vermitteln",
    C: "Beispiele aus dem Arbeitsalltag nutzen",
    D: "Den Azubi ignorieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Praxisnähe erhöht die Motivation und das Verständnis.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Auszubildender erscheint wiederholt unentschuldigt zu spät. Was ist der erste sinnvolle Schritt?",
  answers: {
    A: "Sofort kündigen",
    B: "Gespräch führen",
    C: "Abmahnung ohne Gespräch",
    D: "Ursachen klären",
  },
  correct_answer: ["B", "D"],
  explanation: "Zuerst erfolgt ein klärendes Gespräch, bevor arbeitsrechtliche Schritte folgen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Ein Betrieb möchte einen Auszubildenden einstellen, hat aber keinen eingetragenen Ausbildungsvertrag. Was ist zu tun?",
  answers: {
    A: "Vertrag bei der zuständigen Stelle eintragen lassen",
    B: "Ausbildung trotzdem beginnen",
    C: "Vertrag schriftlich abschließen",
    D: "Erst nach der Probezeit melden",
  },
  correct_answer: ["A", "C"],
  explanation: "Der Vertrag muss schriftlich vorliegen und eingetragen werden.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender arbeitet sehr langsam, aber sorgfältig. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Die Geschwindigkeit schrittweise steigern",
    B: "Nur auf Tempo bestehen",
    C: "Die Qualität loben",
    D: "Den Azubi unter Druck setzen",
  },
  correct_answer: ["A", "C"],
  explanation: "Qualität ist wichtig, Geschwindigkeit wird entwickelt.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Auszubildender soll eine neue Tätigkeit lernen. Was ist ein sinnvoller Ablauf?",
  answers: {
    A: "Erklären",
    B: "Vormachen",
    C: "Nachmachen lassen",
    D: "Direkt alleine arbeiten lassen",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Typischer Ablauf entspricht der Vier-Stufen-Methode.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Auszubildender meldet sich nicht zur Berufsschule an. Wer ist verantwortlich?",
  answers: {
    A: "Der Auszubildende",
    B: "Der Ausbilder",
    C: "Die Berufsschule",
    D: "Die IHK",
  },
  correct_answer: ["B"],
  explanation: "Der Betrieb ist für die Anmeldung verantwortlich.",
  question_type: "normal",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender zeigt großes Interesse und übernimmt freiwillig zusätzliche Aufgaben. Wie sollte reagiert werden?",
  answers: {
    A: "Lob aussprechen",
    B: "Weitere Lernmöglichkeiten bieten",
    C: "Mehr Arbeit ohne Anleitung geben",
    D: "Ignorieren",
  },
  correct_answer: ["A", "B"],
  explanation: "Engagement sollte gefördert werden, aber nicht ausgenutzt.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Auszubildender lernt besser durch eigenes Ausprobieren. Welche Methode eignet sich?",
  answers: {
    A: "Projektarbeit",
    B: "Lehrvortrag",
    C: "Lernaufgaben",
    D: "Selbstständige Übungen",
  },
  correct_answer: ["A", "C", "D"],
  explanation: "Handlungsorientierte Methoden fördern aktives Lernen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Auszubildender verletzt eine Sicherheitsvorschrift einmalig. Wie reagieren?",
  answers: {
    A: "Unterweisung wiederholen",
    B: "Gespräch führen",
    C: "Sofort kündigen",
    D: "Aufklären",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Sicherheitsverstöße erfordern Aufklärung, nicht sofort Sanktion.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "1",
  schwierigkeit: 2,
  question: "Ein Betrieb bildet aus, ohne die notwendigen Maschinen bereitzustellen. Was ist richtig?",
  answers: {
    A: "Ausbildung ist nicht vollständig gewährleistet",
    B: "Kooperation mit anderen Betrieben möglich",
    C: "Das ist zulässig",
    D: "Überbetriebliche Ausbildung nutzen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Alle Inhalte müssen vermittelt werden, ggf. extern.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender hat Angst, Fehler zu machen. Wie sollte der Ausbilder reagieren?",
  answers: {
    A: "Fehler als Lernchance darstellen",
    B: "Druck erhöhen",
    C: "Unterstützen",
    D: "Ignorieren",
  },
  correct_answer: ["A", "C"],
  explanation: "Eine positive Fehlerkultur ist wichtig.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "3",
  schwierigkeit: 2,
  question: "Ein Auszubildender verliert während einer Erklärung die Aufmerksamkeit. Was tun?",
  answers: {
    A: "Aktiv einbinden",
    B: "Kürzer erklären",
    C: "Ignorieren",
    D: "Praxisbezug herstellen",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Aktivierung steigert die Aufmerksamkeit.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "4",
  schwierigkeit: 2,
  question: "Ein Auszubildender möchte kündigen. Was ist zu beachten?",
  answers: {
    A: "Schriftform erforderlich",
    B: "Kündigungsfrist beachten",
    C: "Mündliche Kündigung reicht",
    D: "Grund muss angegeben werden (nach Probezeit)",
  },
  correct_answer: ["A", "B", "D"],
  explanation: "Nach der Probezeit gelten formale Anforderungen.",
  question_type: "multiple_choice",
},
{
  handlungsfeld: "2",
  schwierigkeit: 2,
  question: "Ein Auszubildender versteht Arbeitsanweisungen falsch. Was ist sinnvoll?",
  answers: {
    A: "Nachfragen lassen",
    B: "Rückfragen stellen",
    C: "Anweisungen klar formulieren",
    D: "Ignorieren",
  },
  correct_answer: ["A", "B", "C"],
  explanation: "Kommunikation ist entscheidend für Verständnis.",
  question_type: "multiple_choice",
},
{
    handlungsfeld: "2",
    schwierigkeit: 3,
    question: "Die Auszubildende Julia (19 Jahre) teilt ihrem Ausbilder mit, dass sie schwanger ist. Welche unmittelbare Konsequenz hat dies für die tägliche Arbeitszeit und die Gefährdungsbeurteilung nach dem Mutterschutzgesetz (MuSchG)?",
    answers: {
      A: "Sie darf ab sofort nicht mehr mehr als 8,5 Stunden täglich arbeiten.",
      B: "Der Ausbilder muss eine spezifische Gefährdungsbeurteilung für ihren Arbeitsplatz durchführen.",
      C: "Nachtarbeit zwischen 20 Uhr und 6 Uhr ist für sie nun grundsätzlich verboten (mit wenigen Ausnahmen).",
      D: "Sie muss die Ausbildung sofort unterbrechen, bis das Kind geboren ist."
    },
    correct_answer: ["A", "B", "C"],
    explanation: "Das MuSchG gilt auch für Azubis. Wichtig sind die Begrenzung der Arbeitszeit auf 8,5 Std. täglich (§ 4), das Nachtarbeitsverbot (§ 5) und die Pflicht des Arbeitgebers zur Gefährdungsbeurteilung (§ 10).",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Ein kleiner Handwerksbetrieb kann nicht alle im Ausbildungsrahmenplan geforderten Inhalte selbst vermitteln, da eine bestimmte Spezialmaschine fehlt. Welche Form der Zusammenarbeit ist hier rechtlich vorgesehen?",
    answers: {
      A: "Der Betrieb darf in diesem Beruf überhaupt nicht ausbilden.",
      B: "Die Ausbildung kann im Rahmen einer 'Verbundausbildung' mit einem Partnerbetrieb erfolgen.",
      C: "Der Azubi muss sich die fehlenden Inhalte im Selbststudium aneignen.",
      D: "Teile der Ausbildung können als überbetriebliche Unterweisung (ÜBA) bei der Kammer stattfinden."
    },
    correct_answer: ["B", "D"],
    explanation: "Wenn die Eignung der Ausbildungsstätte nicht für alle Inhalte reicht, ermöglicht das BBiG (§ 27) die Verbundausbildung oder die Nutzung überbetrieblicher Bildungsstätten, um die Ausbildungsberechtigung zu erhalten.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Im Kontext der Lernpsychologie gibt es das Phänomen der 'Interferenz'. Was bedeutet dies für die Planung von Unterweisungen?",
    answers: {
      A: "Dass der Azubi durch Funkwellen am Arbeitsplatz abgelenkt wird.",
      B: "Dass sich ähnliche Lerninhalte gegenseitig überlagern und die Erinnerung stören können.",
      C: "Dass der Ausbilder zu viele Fachbegriffe gleichzeitig verwendet.",
      D: "Dass Pausen zwischen zwei ähnlichen Themen zwingend notwendig sind, um das Gelernte zu festigen."
    },
    correct_answer: ["B", "D"],
    explanation: "Interferenz tritt auf, wenn man zwei ähnliche Dinge kurz nacheinander lernt (z. B. zwei verschiedene Programmiersprachen). Der Ausbilder sollte daher Themenblöcke so legen, dass sie sich deutlich voneinander unterscheiden oder durch Pausen getrennt sind.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "Der Ausbilder möchte ein Foto der neuen Azubis auf der Instagram-Seite des Unternehmens posten. Was muss er aus datenschutzrechtlicher Sicht (DSGVO) beachten?",
    answers: {
      A: "Nichts, da Azubis Personen des öffentlichen Interesses sind.",
      B: "Er benötigt eine schriftliche, freiwillige Einwilligungserklärung der Azubis.",
      C: "Bei Minderjährigen müssen zusätzlich die Erziehungsberechtigten zustimmen.",
      D: "Ein mündliches Einverständnis vor Zeugen ist ausreichend."
    },
    correct_answer: ["B", "C"],
    explanation: "Fotos sind personenbezogene Daten. Die DSGVO erfordert eine explizite Einwilligung. Bei Minderjährigen (unter 18, oft wird sogar 16 als Grenze diskutiert, in der AEVO meist 18) ist die Zustimmung der Eltern zwingend.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 3,
    question: "Was versteht man unter einer 'Fachpraktiker-Ausbildung' gemäß § 66 BBiG / § 42m HwO?",
    answers: {
      A: "Eine Elite-Ausbildung für besonders begabte Abiturienten.",
      B: "Eine theoriereduzierte Ausbildung für Menschen mit Behinderung.",
      C: "Eine Ausbildung, die ausschließlich im Ausland stattfindet.",
      D: "Eine Ausbildung, deren Prüfungsanforderungen den besonderen Verhältnissen behinderter Menschen Rechnung tragen."
    },
    correct_answer: ["B", "D"],
    explanation: "Für Menschen, denen aufgrund einer Behinderung die normale Ausbildung verwehrt bleibt, gibt es besondere Regelungen. Diese 'Werker-' oder 'Fachpraktiker-Berufe' sind theoriereduziert und individuell angepasst.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Was beschreibt der sogenannte 'Pygmalion-Effekt' (Rosenthal-Effekt) in der Beziehung zwischen Ausbilder und Auszubildendem?",
    answers: {
      A: "Dass Azubis die Fehler ihres Ausbilders unbewusst kopieren.",
      B: "Dass eine hohe positive Erwartungshaltung des Ausbilders die tatsächliche Leistung des Azubis steigert.",
      C: "Dass der Ausbilder den Azubi nach seinem eigenen Ebenbild formen möchte.",
      D: "Dass negative Erwartungen zu einer schlechteren Leistung führen (selbsterfüllende Prophezeiung)."
    },
    correct_answer: ["B", "D"],
    explanation: "Der Pygmalion-Effekt zeigt, dass sich die (positive oder negative) Erwartung eines Lehrers/Ausbilders unbewusst auf den Lernenden überträgt und dessen Leistung tatsächlich beeinflusst.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "2",
    schwierigkeit: 2,
    question: "In der Gastronomie ist die 'Schichtzeit' ein wichtiger Begriff. Wie unterscheidet sie sich für einen 17-jährigen Azubi von der reinen 'Arbeitszeit'?",
    answers: {
      A: "Die Schichtzeit ist die Arbeitszeit plus die Pausen.",
      B: "Die Schichtzeit darf für Jugendliche im Gastgewerbe maximal 11 Stunden betragen.",
      C: "Die Schichtzeit ist die Zeit von Beginn bis Ende der Anwesenheit im Betrieb.",
      D: "Arbeitszeit und Schichtzeit sind gesetzlich das Gleiche."
    },
    correct_answer: ["A", "B", "C"],
    explanation: "§ 12 JArbSchG regelt die Schichtzeit (Arbeitszeit + Pausen). Im Gastgewerbe/Landwirtschaft darf diese bei Jugendlichen bis zu 11 Std. betragen, während die reine Arbeitszeit bei max. 8 Std. bleibt.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "4",
    schwierigkeit: 3,
    question: "Ein Auszubildender wird zum Jugend- und Auszubildendenvertreter (JAV) gewählt. Welchen besonderen Kündigungsschutz genießt er nach dem Betriebsverfassungsgesetz?",
    answers: {
      A: "Er kann während seiner Amtszeit überhaupt nicht gekündigt werden.",
      B: "Eine ordentliche Kündigung ist während der Amtszeit und 1 Jahr danach unzulässig.",
      C: "Er muss nach der Ausbildung zwingend in ein unbefristetes Arbeitsverhältnis übernommen werden, wenn er dies schriftlich verlangt.",
      D: "Nur eine außerordentliche Kündigung aus wichtigem Grund ist mit Zustimmung des Betriebsrats möglich."
    },
    correct_answer: ["B", "C", "D"],
    explanation: "JAV-Mitglieder haben einen extrem starken Schutz (§ 15 KSchG & § 78a BetrVG). Die Pflicht zur Übernahme nach der Ausbildung (bei Antrag des JAV-Mitglieds) ist eine häufige Prüfungsfrage.",
    question_type: "multiple_choice"
  },
  {
    handlungsfeld: "3",
    schwierigkeit: 3,
    question: "Beim 'Blended Learning' werden verschiedene Lernformen kombiniert. Welche Kombination ist hier typisch?",
    answers: {
      A: "Präsenzunterricht im Betrieb und E-Learning-Phasen.",
      B: "Lernen während der Arbeit und Lernen in der Freizeit.",
      C: "Vortrag des Ausbilders und anschließendes Gruppengespräch.",
      D: "Verbindung von Theorie in der Berufsschule und Praxis im Betrieb."
    },
    correct_answer: ["A"],
    explanation: "Blended Learning (integriertes Lernen) bezeichnet die didaktisch sinnvolle Verknüpfung von traditionellen Präsenzveranstaltungen und modernen Formen von E-Learning.",
    question_type: "normal"
  },
  {
    handlungsfeld: "1",
    schwierigkeit: 2,
    question: "Was versteht man unter der 'Abkühlungsphase' im Zusammenhang mit dem Schlichtungsausschuss der Kammer?",
    answers: {
      A: "Eine Pause während der Verhandlung, wenn es zu emotional wird.",
      B: "Die Pflicht, bei Streitigkeiten zwischen Betrieb und Azubi erst den Schlichtungsausschuss anzurufen, bevor man vor das Arbeitsgericht ziehen kann.",
      C: "Eine Frist von 2 Wochen nach der Kündigung.",
      D: "Das Warten auf das schriftliche Urteil des Ausschusses."
    },
    correct_answer: ["B"],
    explanation: "Nach § 111 ArbGG müssen Streitigkeiten aus einem bestehenden Ausbildungsverhältnis zwingend erst vor dem paritätischen Schlichtungsausschuss der Kammer verhandelt werden, bevor eine Klage beim Arbeitsgericht zulässig ist.",
    question_type: "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Auszubildender führt eine komplexe Reparatur exakt nach den technischen Vorgaben und Sicherheitsbestimmungen durch. Welche Kompetenz steht hier im Vordergrund?",
    "answers": {
      "A": "Sozialkompetenz",
      "B": "Fachkompetenz",
      "C": "Selbstkompetenz",
      "D": "Methodenkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Fachkompetenz umfasst die Fähigkeit, fachspezifische Aufgaben theoretisch und praktisch nach den geltenden Regeln und Standards zu lösen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ihr Auszubildender soll sich eigenständig Informationen aus verschiedenen Handbüchern und Online-Portalen zusammensuchen, um ein Problem zu lösen. Welche Kompetenz fördern Sie damit primär?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Methodenkompetenz",
      "C": "Sozialkompetenz",
      "D": "Sprachkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Methodenkompetenz ist die Fähigkeit, sich Informationen zu beschaffen, Arbeitsschritte zu planen und Problemlösungsstrategien anzuwenden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Azubi gibt einem Kollegen konstruktives Feedback nach einer gemeinsamen Projektpräsentation. Welcher Kompetenzbereich wird hier deutlich?",
    "answers": {
      "A": "Selbstkompetenz",
      "B": "Fachkompetenz",
      "C": "Sozialkompetenz",
      "D": "Methodenkompetenz"
    },
    "correct_answer": ["C"],
    "explanation": "Sozialkompetenz zeigt sich in der Kommunikation, Kooperation und im angemessenen Umgang mit anderen Menschen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Nach einem Fehler in der Abrechnung reflektiert die Auszubildende ihr Vorgehen kritisch und übernimmt die Verantwortung, ohne die Schuld bei anderen zu suchen. Was beweist sie hier?",
    "answers": {
      "A": "Methodenkompetenz",
      "B": "Fachkompetenz",
      "C": "Selbstkompetenz",
      "D": "Führungskompetenz"
    },
    "correct_answer": ["C"],
    "explanation": "Selbstkompetenz (auch Personalkompetenz) umfasst Selbstreflexion, Verantwortungsbewusstsein, Zuverlässigkeit und den Umgang mit eigenen Stärken und Schwächen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Was ergibt sich aus der Summe von Fach-, Methoden-, Sozial- und Selbstkompetenz im Sinne der AEVO?",
    "answers": {
      "A": "Die theoretische Intelligenz",
      "B": "Die berufliche Handlungskompetenz",
      "C": "Die pädagogische Eignung",
      "D": "Das lebenslange Lernen"
    },
    "correct_answer": ["B"],
    "explanation": "Berufliche Handlungskompetenz ist das Ziel der Ausbildung. Sie befähigt dazu, Aufgaben eigenständig zu planen, durchzuführen und zu kontrollieren.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Azubi nutzt ein Mind-Mapping-Tool, um ein neues Projekt zu strukturieren. Welcher Bereich wird hier trainiert?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Methodenkompetenz",
      "C": "Sozialkompetenz",
      "D": "Selbstkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Arbeitstechniken und Strukturierungshilfen fallen unter die Methodenkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Sie lassen zwei Azubis ein Projekt gemeinsam bearbeiten. Dabei kommt es zu Meinungsverschiedenheiten, die sie selbstständig und sachlich lösen. Welche Kompetenzen werden hier gleichzeitig gestärkt?",
    "answers": {
      "A": "Sozialkompetenz",
      "B": "Methodenkompetenz",
      "C": "Selbstkompetenz",
      "D": "Fachkompetenz"
    },
    "correct_answer": ["A", "C"],
    "explanation": "Die Zusammenarbeit und Konfliktlösung stärkt die Sozialkompetenz; die Selbstbeherrschung und Reflexion während des Konflikts die Selbstkompetenz.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Azubi im 3. Lehrjahr soll eine Präsentation vor der Geschäftsführung halten. Er bereitet sich intensiv vor und geht souverän mit Lampenfieber um. Dies ist ein Zeichen für:",
    "answers": {
      "A": "Hohe Selbstkompetenz",
      "B": "Hohe Fachkompetenz",
      "C": "Ausschließlich Methodenkompetenz",
      "D": "Mangelnde soziale Anpassung"
    },
    "correct_answer": ["A"],
    "explanation": "Der Umgang mit eigenen Emotionen (Lampenfieber) und die Selbstorganisation bei der Vorbereitung sind Kernaspekte der Selbstkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Welche Kompetenz wird primär gefördert, wenn ein Azubi lernt, die Qualität seiner eigenen Arbeit mit einer Checkliste (Soll-Ist-Vergleich) zu prüfen?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Methodenkompetenz",
      "C": "Sozialkompetenz",
      "D": "Führungskompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Die Kontrolle des eigenen Arbeitsprozesses mittels systematischer Instrumente (Checkliste) gehört zur Methodenkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Azubi erkennt von selbst, dass sein Arbeitsplatz unordentlich ist und die Arbeit behindert. Er räumt ohne Aufforderung auf. Dies zeigt:",
    "answers": {
      "A": "Selbstkompetenz",
      "B": "Fachkompetenz",
      "C": "Sozialkompetenz",
      "D": "Methodenkompetenz"
    },
    "correct_answer": ["A"],
    "explanation": "Eigeninitiative und Selbstorganisation sind wesentliche Merkmale der Selbstkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Während eines Kundengesprächs merkt der Azubi, dass der Kunde unzufrieden ist, und reagiert empathisch. Welcher Bereich ist hier entscheidend?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Sozialkompetenz",
      "C": "Methodenkompetenz",
      "D": "Rechenkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Empathie und Kundenorientierung sind klassische Bestandteile der Sozialkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Die Vermittlung von 'Lern- und Arbeitstechniken' zielt direkt auf welche Kompetenz ab?",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Selbstkompetenz",
      "C": "Methodenkompetenz",
      "D": "Sozialkompetenz"
    },
    "correct_answer": ["C"],
    "explanation": "Methodenkompetenz bedeutet 'zu wissen, wie man lernt und arbeitet'.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender beherrscht die Programmiersprache Java perfekt, kann aber seine Ergebnisse im Teammeeting nicht verständlich erklären. Wo liegt das Defizit?",
    "answers": {
      "A": "In der Fachkompetenz",
      "B": "In der Sozialkompetenz (Kommunikationsfähigkeit)",
      "C": "In der Selbstkompetenz",
      "D": "In der Methodenkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Das Fachwissen ist vorhanden (Fachkompetenz), aber die Übermittlung und Interaktion mit anderen (Sozialkompetenz) bereitet Probleme.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Warum ist 'Selbstkompetenz' für das lebenslange Lernen so wichtig?",
    "answers": {
      "A": "Weil man dadurch besser mit Werkzeugen umgehen kann.",
      "B": "Weil sie die Motivation und die Bereitschaft zur Selbstentwicklung beinhaltet.",
      "C": "Weil man dadurch schneller tippen kann.",
      "D": "Sie ist dafür nicht wichtig, Fachwissen reicht aus."
    },
    "correct_answer": ["B"],
    "explanation": "Ohne die Fähigkeit zur Selbstreflexion und Eigenmotivation (Selbstkompetenz) findet keine dauerhafte Weiterentwicklung statt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "In einer Prüfungssimulation soll ein Azubi einen Fehler in einer Schaltung finden. Er geht systematisch nach einem Ausschlussprinzip vor. Dies ist:",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Methodenkompetenz",
      "C": "Sozialkompetenz",
      "D": "Zufall"
    },
    "correct_answer": ["B"],
    "explanation": "Systematisches Fehlersuchen ist eine methodische Vorgehensweise.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder fordert den Azubi auf, seine Arbeitsergebnisse vor der Gruppe zu präsentieren. Welche Kompetenzen werden dabei gleichzeitig angesprochen?",
    "answers": {
      "A": "Methodenkompetenz (Präsentationstechniken)",
      "B": "Sozialkompetenz (Sprechen vor anderen)",
      "C": "Fachkompetenz (Inhalt der Präsentation)",
      "D": "Handwerkskompetenz"
    },
    "correct_answer": ["A", "B", "C"],
    "explanation": "Eine Präsentation ist eine komplexe Aufgabe, die Wissen, Technik und Auftreten erfordert und somit fast alle Kompetenzbereiche berührt.",
    "question_type": "multiple_choice"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Azubi hält sich strikt an die Datenschutzregeln des Betriebs, auch wenn es unbequem ist. Dies zeigt seine:",
    "answers": {
      "A": "Fachkompetenz",
      "B": "Selbstkompetenz (Werte und Verantwortungsbewusstsein)",
      "C": "Methodenkompetenz",
      "D": "Führungskompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Das Einhalten von Normen und Werten aus innerer Überzeugung gehört zur Selbstkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Welche Kompetenzkombination ist am ehesten gefragt, wenn ein Azubi eine Gruppenarbeit moderieren soll?",
    "answers": {
      "A": "Fachkompetenz und Rechenstärke",
      "B": "Sozialkompetenz und Methodenkompetenz",
      "C": "Selbstkompetenz und Kraft",
      "D": "Ausschließlich Fachkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Moderation erfordert Methoden (Visualisierung, Fragetechniken) und soziale Fähigkeiten (Umgang mit Gruppendynamik).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 2,
    "question": "Ein Auszubildender kann technische Zeichnungen fehlerfrei lesen und interpretieren. Das ist ein Beleg für:",
    "answers": {
      "A": "Methodenkompetenz",
      "B": "Fachkompetenz",
      "C": "Sozialkompetenz",
      "D": "Selbstkompetenz"
    },
    "correct_answer": ["B"],
    "explanation": "Das Verstehen von berufstypischen Unterlagen und Werkzeugen ist Kern der Fachkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Die Geschäftsleitung bittet Sie um eine Einschätzung, ob der Betrieb künftig auch in einem völlig neuen Berufsbild ausbilden darf. Sie besprechen dies im Kreis der erfahrenen Ausbilder. Welches Dokument ist die rechtlich bindende Grundlage, um die sachliche und zeitliche Gliederung für die Planung der Eignung zu prüfen?",
    "answers": {
      "A": "Der betriebliche Ausbildungsplan des Vorjahres.",
      "B": "Die jeweilige Ausbildungsordnung inklusive des Ausbildungsrahmenplans.",
      "C": "Das aktuelle Kursverzeichnis der örtlichen Berufsschule.",
      "D": "Das Arbeitsschutzgesetz in Verbindung mit den DGUV-Vorschriften."
    },
    "correct_answer": ["B"],
    "explanation": "Nur die staatlich anerkannte Ausbildungsordnung (§ 5 BBiG) definiert das Berufsbild und den Ausbildungsrahmenplan. Ohne diesen Abgleich kann die fachliche Eignung der Stätte nicht festgestellt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "In einem Strategiemeeting der Ausbilder wird diskutiert, wie die Qualität der Ausbildung gesteigert werden kann. Ein Kollege schlägt vor, die Ausbildungsinhalte deutlich über die Ausbildungsordnung hinaus zu erweitern. Was müssen Sie dabei beachten?",
    "answers": {
      "A": "Das ist unzulässig, da die Ausbildungsordnung eine abschließende Liste darstellt.",
      "B": "Das ist zulässig, sofern die Vermittlung der im Ausbildungsrahmenplan vorgeschriebenen Inhalte dadurch nicht gefährdet wird.",
      "C": "Zusatzqualifikationen dürfen nur vermittelt werden, wenn der Azubi bereits volljährig ist.",
      "D": "Erweiterungen müssen vorab von der Agentur für Arbeit genehmigt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Die Ausbildungsordnung definiert Mindeststandards. Eine Übererfüllung ist im Sinne der Begabtenförderung oder betrieblicher Spezialisierung erwünscht, solange die Pflichtziele erreicht werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die Geschäftsleitung beauftragt Sie, ein Konzept zur Vermeidung von Ausbildungsabbrüchen zu erstellen. In einem Gespräch mit einem erfahrenen Ausbildungsberater der Kammer erfahren Sie, dass die 'Probezeit' hier ein kritisches Instrument ist. Welche gesetzliche Vorgabe zur Dauer müssen Sie der Geschäftsleitung zwingend melden?",
    "answers": {
      "A": "Die Probezeit muss mindestens 1 Monat und darf höchstens 4 Monate betragen.",
      "B": "Die Probezeit kann frei vereinbart werden, sollte aber 6 Monate nicht überschreiten.",
      "C": "Die Probezeit beträgt für Minderjährige immer 3 Monate.",
      "D": "Eine Probezeit ist optional und kann bei Studienabbrechern entfallen."
    },
    "correct_answer": ["A"],
    "explanation": "Gemäß § 20 BBiG ist die Spanne von 1 bis 4 Monaten zwingend vorgeschrieben. Kürzere oder längere Zeiträume im Vertrag machen diesen in diesem Punkt unwirksam.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Fachabteilungsleiter (Fachausbilder) berichtet Ihnen, dass ein Azubi zwar handwerklich begabt ist, aber bei Problemen sofort die Arbeit einstellt. Sie schlagen vor, das 'Modell der vollständigen Handlung' konsequenter umzusetzen. Bei welchem Schritt in diesem Modell soll der Azubi lernen, die Qualität seiner Arbeit selbst einzuschätzen?",
    "answers": {
      "A": "Beim Schritt 'Ausführen'.",
      "B": "Beim Schritt 'Kontrollieren'.",
      "C": "Beim Schritt 'Informieren'.",
      "D": "Nur im abschließenden Beurteilungsgespräch durch den Ausbilder."
    },
    "correct_answer": ["B"],
    "explanation": "Im Modell der vollständigen Handlung folgt auf das Ausführen das 'Kontrollieren' durch den Azubi selbst (Soll-Ist-Vergleich), gefolgt vom gemeinsamen Bewerten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Sie bereiten mit anderen Ausbildern die Anmeldung zur Abschlussprüfung vor. Ein Azubi hat in der Berufsschule schlechte Noten, aber die betriebliche Ausbildung fast abgeschlossen. Der Chef fragt, ob man die Zulassung zur Prüfung verweigern kann. Wie argumentieren Sie fachlich richtig?",
    "answers": {
      "A": "Ja, bei einem Notenschnitt schlechter als 4,0 in der Berufsschule ist die Zulassung ausgeschlossen.",
      "B": "Nein, über die Zulassung entscheidet die zuständige Stelle (Kammer); der Betrieb muss lediglich die ordnungsgemäße Ausbildung und das Berichtsheft bestätigen.",
      "C": "Der Betrieb kann die Zulassung verweigern, wenn der Azubi mehr als 5 Fehltage hatte.",
      "D": "Die Zulassung erfolgt nur, wenn der Ausbilder eine positive Prognose unterschreibt."
    },
    "correct_answer": ["B"],
    "explanation": "Die Zulassung zur Prüfung ist ein Verwaltungsakt der Kammer (§ 43 BBiG). Der Betrieb meldet an, entscheidet aber nicht eigenmächtig über die Zulassung basierend auf Schulnoten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Die Geschäftsleitung möchte Kosten sparen und schlägt vor, Azubis künftig nur noch als 'billige' Unterstützung in der Versandabteilung einzusetzen, ohne festen Durchlaufplan. Was entgegnen Sie unter Verweis auf die Eignung der Ausbildungsstätte?",
    "answers": {
      "A": "Das ist möglich, solange die Azubis 40 Stunden pro Woche arbeiten.",
      "B": "Die Ausbildungsstätte ist nur geeignet, wenn sie die Gewähr bietet, dass die für die Berufsausbildung erforderlichen Fertigkeiten, Kenntnisse und Fähigkeiten vermittelt werden können (§ 27 BBiG).",
      "C": "Die Azubis müssen dann aber eine höhere Vergütung erhalten.",
      "D": "Das muss lediglich im Ausbildungsvertrag so vermerkt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Die sachliche Eignung (§ 27 BBiG) setzt voraus, dass der Betrieb die Inhalte laut Ausbildungsordnung vermitteln kann. Eine reine Nutzung als Hilfskraft widerspricht dem Erziehungs- und Ausbildungsauftrag.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Sie diskutieren mit Kollegen über die Unterzeichnung von Ausbildungsverträgen. Ein Kollege behauptet, dass bei einem 17-jährigen Azubi die Unterschrift des Azubis ausreicht, da er ja den Beruf lernen will. Wie korrigieren Sie ihn?",
    "answers": {
      "A": "Er hat recht, ab 16 Jahren sind Jugendliche eingeschränkt geschäftsfähig für Arbeitsverträge.",
      "B": "Da der Azubi minderjährig ist, ist der Vertrag erst durch die Unterschrift der gesetzlichen Vertreter (i. d. R. beide Elternteile) wirksam.",
      "C": "Es reicht die Unterschrift eines Zeugen, der bei Vertragsabschluss dabei war.",
      "D": "Der Vertrag ist auch ohne Unterschrift der Eltern gültig, muss aber von der Berufsschule gestempelt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Minderjährige benötigen für den Abschluss eines Ausbildungsvertrags die Zustimmung der gesetzlichen Vertreter (§§ 107, 108 BGB).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder aus der Produktion bittet Sie um Rat: Er möchte eine komplexe neue Montage-Technik vermitteln und schwankt zwischen 4-Stufen-Methode und Lehrgespräch. Wann raten Sie ihm zum Lehrgespräch?",
    "answers": {
      "A": "Wenn es darum geht, rein motorische Abläufe durch Nachmachen zu trainieren.",
      "B": "Wenn theoretische Zusammenhänge oder Erfahrungen des Azubis aktiv erarbeitet und in den Lernprozess integriert werden sollen.",
      "C": "Wenn der Ausbilder keine Zeit hat und der Azubi allein lesen soll.",
      "D": "Wenn der Azubi die Aufgabe bereits perfekt beherrscht."
    },
    "correct_answer": ["B"],
    "explanation": "Das Lehrgespräch (entwickelnd) dient dazu, durch gezielte Fragen Wissen aufzubauen oder zu verknüpfen, während die 4-Stufen-Methode primär auf manuelle Fertigkeiten abzielt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die Personalabteilung überträgt Ihnen die Aufgabe, die 'angemessene Vergütung' für das neue Lehrjahr festzulegen. Es gibt keinen Tarifvertrag. Woran müssen Sie sich orientieren, um eine Ablehnung durch die Kammer zu vermeiden?",
    "answers": {
      "A": "An der gesetzlichen Mindestausbildungsvergütung (§ 17 BBiG).",
      "B": "Am Taschengeldparagraph des BGB.",
      "C": "An der Vergütung von Werkstudenten im selben Betrieb.",
      "D": "An den durchschnittlichen Mietpreisen am Ausbildungsort."
    },
    "correct_answer": ["A"],
    "explanation": "Seit 2020 gibt es eine gesetzliche Mindestvergütung für Azubis (§ 17 BBiG), die jährlich angepasst wird. Sie darf nur unterschritten werden, wenn ein Tarifvertrag dies explizit vorsieht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Im Rahmen einer Ausbilderkonferenz wird über das Zeugnisrecht gesprochen. Ein Fachausbilder möchte einem Azubi, der oft unpünktlich war, dies 'so richtig deutlich' ins Zeugnis schreiben. Was geben Sie ihm als Experten-Hinweis mit?",
    "answers": {
      "A": "Das ist sein gutes Recht, Zeugnisse müssen 'schonungslos ehrlich' sein.",
      "B": "Zeugnisse müssen zwar wahr sein, aber auch wohlwollend formuliert werden, um das weitere Fortkommen des Azubis nicht unbillig zu erschweren.",
      "C": "Kritik darf nur in Form von Noten (1-6) geäußert werden, nicht in Textform.",
      "D": "Unpünktlichkeit darf im Zeugnis gar nicht erwähnt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Der Grundsatz der Zeugniswahrheit und Zeugniswohlwollen ist arbeitsrechtlich fest verankert. Negative Vorfälle müssen in eine wertschätzende Sprache übersetzt oder bei Geringfügigkeit weggelassen werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Sie unterhalten sich mit einem Prüfer der IHK über das Thema 'persönliche Eignung'. Der Prüfer fragt Sie, in welchem Fall ein Ausbilder seine persönliche Eignung kraft Gesetzes verliert.",
    "answers": {
      "A": "Wenn er seine Fachkenntnisse nicht durch Fortbildungen auffrischt.",
      "B": "Wenn er wegen eines Verbrechens zu einer Haftstrafe von mindestens einem Jahr verurteilt wurde oder gegen das Betäubungsmittelgesetz verstoßen hat.",
      "C": "Wenn er das 67. Lebensjahr vollendet hat.",
      "D": "Wenn er aus der Kirche austritt."
    },
    "correct_answer": ["B"],
    "explanation": "§ 29 BBiG regelt den Ausschluss der persönlichen Eignung bei schweren Straftaten oder Verstößen gegen Jugendschutzgesetze.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Die Geschäftsleitung möchte, dass Azubis vermehrt in Projekten arbeiten. Sie sollen ein Briefing für die Projektleiter (Fachausbilder) halten. Was ist das Kernziel der 'Projektmethode' im Vergleich zur Unterweisung?",
    "answers": {
      "A": "Dass der Projektleiter die Arbeit schneller delegieren kann.",
      "B": "Die Förderung der Handlungskompetenz durch selbstständiges Planen, Durchführen und Prüfen einer komplexen Aufgabe.",
      "C": "Dass am Ende des Tages ein verkaufsfähiges Produkt entsteht.",
      "D": "Die Einsparung von Ausbildungsmaterial."
    },
    "correct_answer": ["B"],
    "explanation": "Die Projektmethode ist eine handlungsorientierte Methode, die alle Stufen der vollständigen Handlung umfasst und die Selbstständigkeit maximiert.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Fachausbilder fragt Sie, ob er einen 17-jährigen Azubi während der Berufsschulferien für 45 Stunden pro Woche einplanen darf, um einen Engpass abzufangen. Was ist Ihre fachliche Antwort?",
    "answers": {
      "A": "Ja, solange er die Überstunden mit 25% Zuschlag bezahlt.",
      "B": "Nein, Jugendliche dürfen auch in den Ferien maximal 40 Stunden wöchentlich beschäftigt werden (§ 8 JArbSchG).",
      "C": "Ja, Jugendliche haben in den Ferien keine Arbeitszeitbeschränkung.",
      "D": "Nur wenn der Azubi freiwillig unterschreibt."
    },
    "correct_answer": ["B"],
    "explanation": "Das JArbSchG gilt auch in den Schulferien. Die 40-Stunden-Woche ist für Jugendliche eine absolute Grenze (mit sehr wenigen Ausnahmen).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Kollege nutzt bei der Beurteilung seiner Azubis immer nur sein 'Bauchgefühl'. Sie erklären ihm im Gespräch die Bedeutung von 'Beurteilungsfehlern'. Welcher Fehler liegt vor, wenn ein Ausbilder von einem guten Merkmal (z.B. Pünktlichkeit) auf alle anderen Leistungen schließt?",
    "answers": {
      "A": "Nikolaus-Effekt",
      "B": "Halo-Effekt (Hof-Effekt)",
      "C": "Milde-Effekt",
      "D": "Tendenz zur Mitte"
    },
    "correct_answer": ["B"],
    "explanation": "Der Halo-Effekt beschreibt das Überstrahlen anderer Merkmale durch ein einzelnes, markantes Merkmal des Beurteilten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi hat die Abschlussprüfung nicht bestanden. In einer Sitzung mit der Geschäftsleitung müssen Sie das weitere Vorgehen klären. Der Chef will den Azubi 'loswerden'. Welche rechtliche Hürde müssen Sie ihm erklären?",
    "answers": {
      "A": "Der Azubi hat einen Anspruch auf Verlängerung des Ausbildungsverhältnisses bis zur nächsten Wiederholungsprüfung, maximal um ein Jahr (§ 21 BBiG).",
      "B": "Der Betrieb muss dem Azubi die Prüfungsgebühr für den Zweitversuch vom Gehalt abziehen.",
      "C": "Der Azubi muss sofort einen neuen Ausbildungsvertrag in einem anderen Betrieb unterschreiben.",
      "D": "Es gibt keine Hürde, der Vertrag endet automatisch am im Vertrag genannten Datum."
    },
    "correct_answer": ["A"],
    "explanation": "Wenn der Azubi die Verlängerung verlangt, verlängert sich der Vertrag kraft Gesetzes (§ 21 Abs. 3 BBiG), um ihm den Abschluss zu ermöglichen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "In einem Netzwerk-Treffen mit anderen Ausbildern geht es um das 'Berichtsheft' (Ausbildungsnachweis). Ein Kollege meint, das sei nur Schikane. Wie begründen Sie die Wichtigkeit gegenüber der Geschäftsleitung?",
    "answers": {
      "A": "Es dient primär dazu, die Schriftart des Azubis zu prüfen.",
      "B": "Es ist eine Zulassungsvoraussetzung zur Abschlussprüfung und dokumentiert die ordnungsgemäße Vermittlung der Inhalte.",
      "C": "Man kann damit bei der Steuererklärung Ausbildungskosten absetzen.",
      "D": "Es ist die Grundlage für die Gehaltsabrechnung."
    },
    "correct_answer": ["B"],
    "explanation": "Ohne ordnungsgemäß geführtes Berichtsheft erfolgt keine Zulassung zur Prüfung (§ 43 BBiG). Zudem ist es ein Beweismittel für die Vermittlung der Inhalte.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Sie moderieren einen Workshop für neue Fachausbilder zum Thema 'Motivation'. Welcher Faktor zählt nach Herzberg zu den 'Motivatoren' (die echte Zufriedenheit erzeugen), nicht nur zu den Hygienefaktoren?",
    "answers": {
      "A": "Pünktliche Gehaltszahlung",
      "B": "Sicherheit des Arbeitsplatzes",
      "C": "Verantwortung und Anerkennung der Leistung",
      "D": "Angenehmes Raumklima"
    },
    "correct_answer": ["C"],
    "explanation": "Nach Herzberg sind Gehalt und Klima lediglich Hygienefaktoren (verhindern Unzufriedenheit). Echte Motivation entsteht durch die Aufgabe selbst, Verantwortung und Erfolgserlebnisse.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die JAV bittet Sie um ein Gespräch, weil Azubis sich über Samstagsarbeit beschweren. Ein Fachausbilder behauptet, er dürfe 16-Jährige samstags einsetzen, wenn er ihnen dafür am Sonntag frei gibt. Was korrigieren Sie?",
    "answers": {
      "A": "Das ist richtig so.",
      "B": "Falsch, der Ersatzruhetag für Samstagsarbeit muss in derselben Woche an einem anderen Werktag (Mo-Fr) gewährt werden (§ 16 JArbSchG).",
      "C": "Samstagsarbeit ist für 16-Jährige generell unzulässig, auch mit Ausgleich.",
      "D": "Der Ausgleich muss finanziell erfolgen, nicht durch Freizeit."
    },
    "correct_answer": ["B"],
    "explanation": "Das JArbSchG schreibt bei Samstagsarbeit in erlaubten Branchen zwingend die 5-Tage-Woche vor; der freie Tag muss also ein Schultag oder ein betrieblicher Arbeitstag sein.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Kooperationsbetrieb bietet an, Teile der Ausbildung zu übernehmen (Verbundausbildung). Die Geschäftsleitung fragt Sie, wer in diesem Fall die Eintragung in das Verzeichnis der Berufsausbildungsverhältnisse vornehmen muss.",
    "answers": {
      "A": "Beide Betriebe jeweils für ihre Anteile.",
      "B": "Der Stammbetrieb, der den Ausbildungsvertrag mit dem Azubi schließt.",
      "C": "Die Berufsschule.",
      "D": "Der Azubi selbst muss den Antrag bei der Kammer stellen."
    },
    "correct_answer": ["B"],
    "explanation": "Verantwortlich für alle Formalitäten (Eintragung, Anmeldung zur Prüfung) ist immer der Ausbildende (Stammbetrieb), der im Vertrag steht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Nach der Abschlussprüfung Teil 1 (Zwischenprüfung) stellen Sie fest, dass ein Azubi weit hinter den Erwartungen zurückbleibt. In der Ausbilderkonferenz wird über eine 'vorzeitige Zulassung' zur Abschlussprüfung gesprochen. Wie reagieren Sie professionell?",
    "answers": {
      "A": "Sie schlagen die vorzeitige Zulassung vor, um den Azubi schneller loszuwerden.",
      "B": "Sie lehnen dies ab, da eine vorzeitige Zulassung überdurchschnittliche Leistungen im Betrieb und in der Schule voraussetzt (§ 45 BBiG).",
      "C": "Sie sagen, dass jeder Azubi das Recht hat, vorzeitig abzuschließen, wenn er das möchte.",
      "D": "Sie schlagen vor, die Ausbildung um ein Jahr zu verkürzen, um Druck aufzubauen."
    },
    "correct_answer": ["B"],
    "explanation": "Eine vorzeitige Zulassung ist eine Belohnung für Spitzenleistungen (besser als Note 2,0/gut). Bei Defiziten kommt eher eine Verlängerung oder gezielte Förderung in Betracht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Unter welcher Voraussetzung kann in einem Betrieb eine Jugend- und Auszubildendenvertretung (JAV) errichtet werden?",
    "answers": {
      "A": "Es müssen mindestens 5 Auszubildende vorhanden sein.",
      "B": "Es müssen mindestens 5 Jugendliche (unter 18) oder Auszubildende (unter 25) vorhanden sein und es muss ein Betriebsrat bestehen.",
      "C": "Die Errichtung ist in jedem Ausbildungsbetrieb ab 20 Mitarbeitern gesetzlich Pflicht.",
      "D": "Es müssen mindestens 3 Auszubildende vorhanden sein, unabhängig von einem Betriebsrat."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 60 BetrVG ist ein bestehender Betriebsrat zwingende Voraussetzung für die Wahl einer JAV.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wer ist bei der Wahl der Jugend- und Auszubildendenvertretung aktiv wahlberechtigt?",
    "answers": {
      "A": "Alle Auszubildenden, unabhängig vom Alter.",
      "B": "Alle Arbeitnehmer unter 18 Jahren sowie alle Auszubildenden unter 25 Jahren.",
      "C": "Nur Auszubildende, die die Probezeit bereits bestanden haben.",
      "D": "Alle Mitarbeiter unter 30 Jahren, die sich in einer Fortbildung befinden."
    },
    "correct_answer": ["B"],
    "explanation": "Wahlberechtigt sind Jugendliche unter 18 und Auszubildende bis zum vollendeten 25. Lebensjahr.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein JAV-Mitglied möchte an einer Betriebsratssitzung teilnehmen. Wie ist die gesetzliche Regelung?",
    "answers": {
      "A": "Die JAV darf nur teilnehmen, wenn der Arbeitgeber zustimmt.",
      "B": "Die JAV darf zu jedem Tagesordnungspunkt einen Vertreter entsenden.",
      "C": "Die JAV darf nur teilnehmen, wenn Themen besprochen werden, die ausschließlich Auszubildende betreffen.",
      "D": "Mitglieder der JAV haben generell kein Zutrittsrecht zu Betriebsratssitzungen."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 67 BetrVG kann die JAV zu jeder Sitzung einen Vertreter entsenden. Werden Themen besprochen, die besonders die Gruppe der Jugendlichen/Azubis betreffen, hat die gesamte JAV ein Teilnahmerecht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Wie lange dauert die regelmäßige Amtszeit der Jugend- und Auszubildendenvertretung?",
    "answers": {
      "A": "1 Jahr",
      "B": "2 Jahre",
      "C": "4 Jahre",
      "D": "Für die Dauer der jeweiligen Ausbildung"
    },
    "correct_answer": ["B"],
    "explanation": "Während die Amtszeit des Betriebsrats 4 Jahre beträgt, wird die JAV alle 2 Jahre gewählt (§ 64 BetrVG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "In welcher Angelegenheit hat der Betriebsrat ein echtes Mitbestimmungsrecht gemäß § 87 BetrVG?",
    "answers": {
      "A": "Bei der Auswahl der Bewerber für einen Ausbildungsplatz.",
      "B": "Bei der Festlegung von Beginn und Ende der täglichen Arbeitszeit sowie der Pausen.",
      "C": "Bei der Entscheidung über die Höhe der Ausbildungsvergütung.",
      "D": "Bei der Erstellung des betrieblichen Ausbildungsplans."
    },
    "correct_answer": ["B"],
    "explanation": "Ordnung des Betriebs und Arbeitszeiten sind zwingend mitbestimmungspflichtig. Die Vergütung ist meist tariflich geregelt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Was versteht man unter dem 'besonderen Kündigungsschutz' für Mitglieder der JAV?",
    "answers": {
      "A": "Sie können während ihrer gesamten Amtszeit niemals gekündigt werden.",
      "B": "Die ordentliche Kündigung ist während der Amtszeit und 1 Jahr danach unzulässig.",
      "C": "Sie dürfen nach der Ausbildung nicht übernommen werden.",
      "D": "Sie haben nur während der Probezeit Kündigungsschutz."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 15 KSchG ist die ordentliche Kündigung während der Amtszeit und ein Jahr danach ausgeschlossen; eine außerordentliche Kündigung bedarf der Zustimmung des Betriebsrats.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Welche Aufgabe nimmt die JAV primär wahr?",
    "answers": {
      "A": "Sie schließt Verträge mit den Auszubildenden ab.",
      "B": "Sie beantragt Maßnahmen beim Betriebsrat, die den Auszubildenden dienen (z.B. Verbesserung der Ausstattung).",
      "C": "Sie führt die Abschlussprüfungen durch.",
      "D": "Sie legt die Kriterien für die fachliche Eignung der Ausbilder fest."
    },
    "correct_answer": ["B"],
    "explanation": "Die JAV hat ein Vorschlagsrecht gegenüber dem Betriebsrat (§ 70 BetrVG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Wie oft muss die JAV eine Jugend- und Auszubildendenversammlung einberufen?",
    "answers": {
      "A": "Einmal pro Monat.",
      "B": "Einmal pro Kalendervierteljahr.",
      "C": "Einmal im Jahr (im Anschluss an die Betriebsversammlung).",
      "D": "Nur bei Bedarf, wenn 50% der Azubis dies fordern."
    },
    "correct_answer": ["C"],
    "explanation": "Gemäß § 71 BetrVG ist einmal jährlich eine solche Versammlung durchzuführen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender fühlt sich vom Ausbilder ungerecht behandelt. An wen kann er sich im Betrieb wenden, um sein Beschwerderecht auszuüben?",
    "answers": {
      "A": "Ausschließlich an die Kammer (IHK/HWK).",
      "B": "An den Betriebsrat oder direkt an die JAV.",
      "C": "Nur an das Arbeitsgericht.",
      "D": "An die Agentur für Arbeit."
    },
    "correct_answer": ["B"],
    "explanation": "Der Betriebsrat hat die Aufgabe, Beschwerden von Arbeitnehmern (auch Azubis) entgegenzunehmen (§ 84, 85 BetrVG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Wer trägt die Kosten für die Arbeit der Jugend- und Auszubildendenvertretung (z.B. Schulungen, Büromaterial)?",
    "answers": {
      "A": "Die Auszubildenden durch Umlagen.",
      "B": "Die Gewerkschaft.",
      "C": "Der Arbeitgeber.",
      "D": "Die Bundesagentur für Arbeit."
    },
    "correct_answer": ["C"],
    "explanation": "Nach § 40 i.V.m. § 65 BetrVG trägt der Arbeitgeber die durch die Tätigkeit der JAV entstehenden Kosten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Hat die JAV ein Stimmrecht bei Abstimmungen im Betriebsrat?",
    "answers": {
      "A": "Ja, sie stimmt bei allen Themen voll mit ab.",
      "B": "Nur bei Themen, die überwiegend Jugendliche und Auszubildende betreffen.",
      "C": "Nein, sie hat grundsätzlich nur ein Beratungsrecht.",
      "D": "Nur wenn der Betriebsratsvorsitzende es erlaubt."
    },
    "correct_answer": ["B"],
    "explanation": "Das Stimmrecht der JAV im Betriebsrat ist auf Angelegenheiten beschränkt, die Jugendliche und Azubis besonders betreffen (§ 67 Abs. 2 BetrVG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein JAV-Mitglied beendet seine Ausbildung. Was muss geschehen, damit es in ein unbefristetes Arbeitsverhältnis übernommen wird?",
    "answers": {
      "A": "Es wird automatisch übernommen, es muss nichts getan werden.",
      "B": "Es muss innerhalb der letzten 3 Monate vor Ausbildungsende schriftlich die Weiterbeschäftigung verlangen (§ 78a BetrVG).",
      "C": "Es muss eine neue Abschlussprüfung ablegen.",
      "D": "Es gibt keinen Anspruch auf Übernahme für JAV-Mitglieder."
    },
    "correct_answer": ["B"],
    "explanation": "Verlangt ein JAV-Mitglied innerhalb der letzten drei Monate vor Beendigung schriftlich die Weiterbeschäftigung, gilt ein Arbeitsverhältnis als begründet.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Welche Maßnahme zur Berufsbildung unterliegt der Mitbestimmung des Betriebsrats nach § 98 BetrVG?",
    "answers": {
      "A": "Die Auswahl der Berufsschule.",
      "B": "Die Bestellung und Abberufung von Ausbildern.",
      "C": "Die Höhe der Prüfungsgebühren.",
      "D": "Die Entscheidung über die Verkürzung der Lehrzeit."
    },
    "correct_answer": ["B"],
    "explanation": "Der Betriebsrat kann der Bestellung eines Ausbilders widersprechen, wenn dieser persönlich oder fachlich ungeeignet ist.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wie viele Arbeitnehmer müssen in einem Betrieb mindestens 'ständig wahlberechtigt' sein, um einen Betriebsrat wählen zu können?",
    "answers": {
      "A": "Mindestens 5.",
      "B": "Mindestens 20.",
      "C": "Mindestens 50.",
      "D": "Mindestens 2."
    },
    "correct_answer": ["A"],
    "explanation": "Nach § 1 BetrVG sind 5 ständig wahlberechtigte Arbeitnehmer erforderlich, von denen 3 wählbar sein müssen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Darf der Arbeitgeber an den Sitzungen der JAV teilnehmen?",
    "answers": {
      "A": "Ja, er leitet die Sitzungen.",
      "B": "Nur wenn er ausdrücklich von der JAV eingeladen wurde.",
      "C": "Immer, um die Einhaltung der Gesetze zu überwachen.",
      "D": "Nur wenn der Betriebsrat nicht anwesend ist."
    },
    "correct_answer": ["B"],
    "explanation": "Die JAV-Sitzungen sind nicht öffentlich. Der Arbeitgeber nimmt nur teil, wenn er eingeladen wird.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "In welchem Gesetz sind die Rechte und Pflichten des Betriebsrats und der JAV primär geregelt?",
    "answers": {
      "A": "Berufsbildungsgesetz (BBiG)",
      "B": "Betriebsverfassungsgesetz (BetrVG)",
      "C": "Arbeitszeitgesetz (ArbZG)",
      "D": "Bürgerliches Gesetzbuch (BGB)"
    },
    "correct_answer": ["B"],
    "explanation": "Das BetrVG ist die Grundlage für die betriebliche Mitbestimmung in der Privatwirtschaft.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Kann ein Auszubildender, der 26 Jahre alt ist, in die JAV gewählt werden (passives Wahlrecht)?",
    "answers": {
      "A": "Ja, für das passive Wahlrecht gibt es keine Altersgrenze für Auszubildende.",
      "B": "Nein, man darf höchstens 25 Jahre alt sein.",
      "C": "Nur wenn er im ersten Lehrjahr ist.",
      "D": "Nur wenn der Betriebsrat zustimmt."
    },
    "correct_answer": ["A"],
    "explanation": "Seit der Reform 2021 gibt es für die Wählbarkeit (passives Wahlrecht) von Auszubildenden in die JAV keine Altershöchstgrenze mehr.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Was muss der Arbeitgeber tun, bevor er einen Auszubildenden nach der Probezeit kündigt?",
    "answers": {
      "A": "Er muss die Kammer um Erlaubnis bitten.",
      "B": "Er muss den Betriebsrat anhören (§ 102 BetrVG).",
      "C": "Er muss die JAV kündigen lassen.",
      "D": "Er muss die Eltern informieren."
    },
    "correct_answer": ["B"],
    "explanation": "Jede Kündigung ohne Anhörung des Betriebsrats ist unwirksam.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Welches Ziel verfolgt die JAV bei der Überwachung der Gesetze?",
    "answers": {
      "A": "Dass der Arbeitgeber keine Gewinne macht.",
      "B": "Dass zugunsten der Auszubildenden geltende Gesetze, Verordnungen und Unfallverhütungsvorschriften eingehalten werden.",
      "C": "Dass die Auszubildenden keine Pausen machen.",
      "D": "Dass die Berufsschule keine Noten vergibt."
    },
    "correct_answer": ["B"],
    "explanation": "Dies ist eine der allgemeinen Aufgaben nach § 70 BetrVG.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Wer entscheidet bei Streitigkeiten zwischen Betriebsrat und Arbeitgeber in Mitbestimmungsfragen?",
    "answers": {
      "A": "Die Einigungsstelle.",
      "B": "Der Ausbildungsberater der Kammer.",
      "C": "Das Bundesbildungsministerium.",
      "D": "Die JAV."
    },
    "correct_answer": ["A"],
    "explanation": "Die Einigungsstelle dient der Beilegung von Meinungsverschiedenheiten zwischen Arbeitgeber und Betriebsrat (§ 76 BetrVG).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Das 'Modell der vollständigen Handlung' zielt darauf ab, alle Kompetenzbereiche zu fördern. Welche Reihenfolge ist korrekt?",
    "answers": {
      "A": "Durchführen - Kontrollieren - Informieren",
      "B": "Informieren - Planen - Entscheiden - Ausführen - Kontrollieren - Bewerten",
      "C": "Entscheiden - Ausführen - Informieren",
      "D": "Planen - Ausführen - Vergessen"
    },
    "correct_answer": ["B"],
    "explanation": "Nur der gesamte Zyklus (IPEKAB) stellt sicher, dass der Azubi umfassende Handlungskompetenz erwirbt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 17-jähriger Auszubildender hat am Dienstag Berufsschule von 08:00 bis 13:15 Uhr (6 Unterrichtsstunden). Im Anschluss findet eine freiwillige Förderunterrichtseinheit der Schule statt, die bis 15:00 Uhr dauert. Der Ausbilder verlangt, dass der Azubi danach noch für eine Stunde in den Betrieb kommt, um eine Lieferung anzunehmen. Wie ist die Rechtslage?",
    "answers": {
      "A": "Der Azubi muss kommen, da der Förderunterricht freiwillig ist und nicht zur regulären Unterrichtszeit zählt.",
      "B": "Der Azubi muss nicht kommen, da der Tag durch die 6 Pflichtstunden bereits mit der vollen täglichen Arbeitszeit angerechnet wird.",
      "C": "Der Azubi muss kommen, da die Freistellung nur für die Zeit des Pflichtunterrichts gilt.",
      "D": "Der Azubi muss nur kommen, wenn der Ausbilder die Fahrtzeit von der Schule zum Betrieb als Überstunde bezahlt."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 15 BBiG/§ 9 JArbSchG ist der Azubi an einem Schultag mit mehr als 5 Stunden (einmal pro Woche) komplett freigestellt. Da die gesetzliche Freistellung den gesamten Tag umfasst, ist es unerheblich, ob danach noch freiwillige Schulveranstaltungen stattfinden oder nicht – der Betrieb darf ihn an diesem Tag nicht mehr beschäftigen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte eine Umschulung für einen 30-jährigen Bewerber durchführen. Der Bewerber hat bereits eine abgeschlossene Ausbildung in einem anderen Bereich. Muss für diese Umschulung ein Ausbilder mit AdA-Schein vorhanden sein?",
    "answers": {
      "A": "Nein, da Umschulungen nicht dem BBiG unterliegen.",
      "B": "Ja, da für die berufliche Umschulung die gleichen Eignungsvoraussetzungen gelten wie für die Erstausbildung (§ 58 BBiG).",
      "C": "Nur wenn die Umschulung durch die Agentur für Arbeit gefördert wird.",
      "D": "Nein, bei Erwachsenen über 25 Jahren reicht die fachliche Eignung ohne pädagogischen Nachweis aus."
    },
    "correct_answer": ["B"],
    "explanation": "Laut § 58 BBiG müssen Ausbilder für die Umschulung ebenfalls persönlich und fachlich geeignet sein. Die AdA-Prüfung ist Teil der fachlichen Eignung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender im 3. Lehrjahr soll eine Projektarbeit eigenständig planen. Der Ausbilder stellt fest, dass der Plan des Azubis zwar zum Ziel führt, aber einen Umweg beinhaltet, der etwas mehr Material verbraucht als die Methode des Ausbilders. Wie sollte der Ausbilder im Sinne der 'vollständigen Handlung' reagieren?",
    "answers": {
      "A": "Den Plan sofort korrigieren und dem Azubi die effizientere Methode vorschreiben.",
      "B": "Den Azubi seinen Plan im Fachgespräch begründen lassen und die Materialeffizienz als Reflexionspunkt für die spätere Bewertung vormerken.",
      "C": "Den Azubi das Projekt abbrechen lassen, da Wirtschaftlichkeit oberstes Gebot ist.",
      "D": "Den Azubi ignorieren und am Ende nur das Ergebnis bewerten."
    },
    "correct_answer": ["B"],
    "explanation": "Zur vollständigen Handlung gehört das 'Entscheiden'. Wenn der Ausbilder sofort eingreift (A), nimmt er dem Azubi die Verantwortung. Ein Fachgespräch fördert die Reflexion und Selbstkompetenz.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender besteht seine Abschlussprüfung im zweiten Versuch am 14. Februar. Sein ursprünglicher Vertrag (nach Verlängerung wegen Nichtbestehens des ersten Versuchs) lief bis zum 31. März. Wann endet das Ausbildungsverhältnis offiziell?",
    "answers": {
      "A": "Am 31. März, da Verträge immer bis zum Monatsende laufen.",
      "B": "Am 14. Februar, mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss.",
      "C": "Am Tag, an dem der Azubi das schriftliche Zeugnis der Kammer per Post erhält.",
      "D": "Gar nicht, es wandelt sich automatisch in ein Arbeitsverhältnis um."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 21 BBiG endet die Ausbildung mit dem Bestehen der Prüfung, auch wenn im Vertrag ein späteres Datum steht. Das Datum der Ergebnisfeststellung durch den Ausschuss ist maßgeblich.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder möchte eine 17-jährige Auszubildende zur Nachtarbeit (bis 23:00 Uhr) einteilen, da der Betrieb eine Abendveranstaltung durchführt. In welchem Fall ist dies zulässig?",
    "answers": {
      "A": "Generell zulässig, wenn die Eltern zustimmen.",
      "B": "Nur in Branchen wie dem Gastgewerbe oder in mehrschichtigen Betrieben unter Beachtung spezifischer Ausnahmen des JArbSchG.",
      "C": "Niemals, Jugendliche dürfen nur bis 20:00 Uhr arbeiten.",
      "D": "Nur wenn der Ausbilder während der gesamten Zeit daneben steht."
    },
    "correct_answer": ["B"],
    "explanation": "§ 14 JArbSchG regelt Ausnahmen für die Nachtruhe. Im Gastgewerbe dürfen über 16-Jährige bis 22:00 Uhr arbeiten, in Schichtbetrieben teilweise bis 23:00 Uhr. Ohne Branchenausnahme gilt 06:00 bis 20:00 Uhr.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Ausbildender verlangt von einem Bewerber vor Abschluss des Vertrages einen Gentest, um zukünftige Krankheitsrisiken auszuschließen. Wie ist dieses Verlangen rechtlich zu bewerten?",
    "answers": {
      "A": "Zulässig, um die langfristige Eignung für den Beruf zu prüfen.",
      "B": "Unzulässig gemäß Gendiagnostikgesetz (GenDG).",
      "C": "Zulässig, sofern der Betrieb die Kosten übernimmt.",
      "D": "Nur zulässig bei Berufen mit hoher körperlicher Belastung."
    },
    "correct_answer": ["B"],
    "explanation": "Genetische Untersuchungen bei Arbeitnehmern (und Azubis) sind nach dem GenDG streng verboten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender leidet unter einer Lese-Rechtschreib-Schwäche (LRS). Der Ausbilder möchte ihn unterstützen, damit er die schriftliche Prüfung besteht. Welche Maßnahme ist hierfür die korrekte?",
    "answers": {
      "A": "Der Ausbilder schreibt die Antworten für den Azubi in der Prüfung.",
      "B": "Der Ausbilder beantragt bei der zuständigen Stelle einen Nachteilsausgleich (z. B. Zeitverlängerung).",
      "C": "Der Azubi muss die Prüfung mündlich ablegen, ein Recht auf Schriftlichkeit gibt es dann nicht.",
      "D": "Es gibt keine Unterstützung, da alle Prüflinge gleich behandelt werden müssen."
    },
    "correct_answer": ["B"],
    "explanation": "Menschen mit Behinderungen oder Beeinträchtigungen haben Anspruch auf Nachteilsausgleich (§ 65 BBiG), um die Behinderung zu kompensieren, ohne die Leistungsanforderung zu senken.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Azubi (18 Jahre) hat laut Tarifvertrag 30 Tage Urlaub. Im BurlG stehen nur 24 Werktage. Welcher Urlaubsanspruch ist im Ausbildungsvertrag einzutragen?",
    "answers": {
      "A": "24 Werktage, da das Gesetz Vorrang hat.",
      "B": "30 Tage, da die für den Azubi günstigere Regelung gilt (Günstigkeitsprinzip).",
      "C": "Ein Mittelwert aus beiden Angaben.",
      "D": "Gar nichts, man verweist nur auf den Tarifvertrag."
    },
    "correct_answer": ["B"],
    "explanation": "Gesetze sind Mindeststandards. Tarifverträge oder Einzelverträge dürfen diese zugunsten des Azubis überschreiten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Bei der 4-Stufen-Methode ist die 4. Stufe das 'Selbstständige Üben'. Was ist die Hauptaufgabe des Ausbilders in dieser Phase?",
    "answers": {
      "A": "Den Arbeitsplatz verlassen, damit der Azubi nicht nervös wird.",
      "B": "Nur noch das Endergebnis kontrollieren.",
      "C": "Beobachten, bei Fehlern helfend eingreifen und die Leistung anerkennen.",
      "D": "Den Azubi die Stufe 2 noch einmal erklären lassen."
    },
    "correct_answer": ["C"],
    "explanation": "Auch beim Üben bleibt der Ausbilder verantwortlich. Er muss beobachten (Sicherung), bei Gefahr eingreifen und durch Feedback den Lernerfolg festigen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi möchte nach der Ausbildung ein qualifiziertes Zeugnis. Der Ausbilder schreibt nur die Dauer und die Art der Tätigkeit auf. Ist das ausreichend?",
    "answers": {
      "A": "Ja, das nennt man ein einfaches Zeugnis.",
      "B": "Nein, auf Verlangen des Azubis muss sich das Zeugnis auch auf Führung, Leistung und besondere fachliche Fähigkeiten erstrecken (§ 16 BBiG).",
      "C": "Nur wenn der Azubi die Prüfung bestanden hat.",
      "D": "Nein, ein qualifiziertes Zeugnis muss zwingend ein Foto des Azubis enthalten."
    },
    "correct_answer": ["B"],
    "explanation": "Azubis haben laut BBiG Anspruch auf ein einfaches Zeugnis, auf Verlangen jedoch zwingend auf ein qualifiziertes Zeugnis.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Ausbildungsrahmenplan sieht für ein Thema 4 Monate vor. Der Ausbilder stellt fest, dass der Azubi sehr schnell lernt und das Thema nach 2 Monaten perfekt beherrscht. Was sollte der Ausbilder tun?",
    "answers": {
      "A": "Den Azubi 2 Monate lang Hilfsarbeiten machen lassen, um den Zeitplan einzuhalten.",
      "B": "Den betrieblichen Ausbildungsplan flexibel anpassen und mit dem nächsten Thema beginnen.",
      "C": "Den Azubi für 2 Monate nach Hause schicken.",
      "D": "Der Kammer melden, dass die Ausbildungsordnung zu einfach ist."
    },
    "correct_answer": ["B"],
    "explanation": "Der Ausbildungsrahmenplan ist eine Mindestanforderung und zeitliche Richtlinie. Er kann und soll an die Lernfortschritte des Azubis angepasst werden (Flexibilisierungsklausel).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Azubi hat Berufsschule von 08:00 bis 11:30 Uhr (4 Unterrichtsstunden). Muss er danach in den Betrieb?",
    "answers": {
      "A": "Nein, Schultage sind immer freigestellt.",
      "B": "Ja, da er weniger als 5 Unterrichtsstunden hatte, greift die pauschale Freistellung für den ganzen Tag nicht.",
      "C": "Nur wenn der Betrieb weniger als 10 km von der Schule entfernt ist.",
      "D": "Nein, da er noch minderjährig ist."
    },
    "correct_answer": ["B"],
    "explanation": "Die Freistellung für den gesamten Tag (einmal wöchentlich) erfordert mehr als 5 Unterrichtsstunden (also ab 6). Bei 4 Stunden muss er theoretisch noch in den Betrieb, sofern dies zeitlich unter Anrechnung der Wegezeit noch sinnvoll ist.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Welche Methode eignet sich am besten, um das 'Urteilsvermögen' und die 'Entscheidungsfähigkeit' in komplexen betrieblichen Situationen zu schulen?",
    "answers": {
      "A": "Vortrag",
      "B": "Fallmethode (Case Study)",
      "C": "4-Stufen-Methode",
      "D": "Demonstration"
    },
    "correct_answer": ["B"],
    "explanation": "Die Fallmethode konfrontiert den Azubi mit realen Problemen, bei denen er Informationen analysieren und eine begründete Entscheidung treffen muss.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte in einem Verbund ausbilden. Welches Risiko trägt der 'Stammbetrieb', der den Ausbildungsvertrag unterschrieben hat?",
    "answers": {
      "A": "Keines, die Verantwortung geht auf den Partnerbetrieb über.",
      "B": "Er bleibt rechtlich voll verantwortlich für die Durchführung der gesamten Ausbildung und die Zahlung der Vergütung.",
      "C": "Der Stammbetrieb haftet nur für die Theorie, der Partner für die Praxis.",
      "D": "Er haftet nur, wenn der Partnerbetrieb Insolvenz anmeldet."
    },
    "correct_answer": ["B"],
    "explanation": "Der Vertragspartner (Ausbildender) bleibt gegenüber dem Azubi und der Kammer in der Pflicht, auch wenn Teile der Ausbildung woanders stattfinden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Was passiert mit dem Urlaubsanspruch eines Azubis, wenn er während des Urlaubs erkrankt und ein ärztliches Attest vorlegt?",
    "answers": {
      "A": "Der Urlaub gilt als genommen.",
      "B": "Die Tage der Arbeitsunfähigkeit werden nicht auf den Jahresurlaub angerechnet (§ 9 BurlG).",
      "C": "Der Urlaub wird zur Hälfte angerechnet.",
      "D": "Der Azubi bekommt die Tage nur gutgeschrieben, wenn er im Krankenhaus war."
    },
    "correct_answer": ["B"],
    "explanation": "Durch ein Attest nachgewiesene Krankheitstage unterbrechen den Urlaub; der Erholungszweck konnte nicht erreicht werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder bemerkt, dass eine Kleingruppe von Azubis bei einer Gruppenarbeit eine 'Außenseiterrolle' für einen Teilnehmer schafft. Wie sollte er intervenieren?",
    "answers": {
      "A": "Die Gruppe sofort auflösen und Einzelarbeit anordnen.",
      "B": "Den Außenseiter vor der Gruppe verteidigen und die anderen bestrafen.",
      "C": "Den Prozess beobachten und in einer anschließenden Feedbackrunde das Gruppenverhalten reflektieren lassen.",
      "D": "Nichts tun, da Azubis soziale Konflikte selbst lösen müssen."
    },
    "correct_answer": ["C"],
    "explanation": "Pädagogisch wertvoll ist die Reflexion des Verhaltens, um die Sozialkompetenz aller Beteiligten zu stärken. Strafe (B) oder Flucht (A) lösen das Lernproblem nicht.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Wer legt die 'Berufsbezeichnung' in einem Ausbildungsvertrag fest?",
    "answers": {
      "A": "Der Ausbilder nach eigenem Ermessen.",
      "B": "Sie muss der Bezeichnung in der staatlichen Ausbildungsordnung entsprechen.",
      "C": "Der Azubi darf sie sich aussuchen.",
      "D": "Das Arbeitsamt."
    },
    "correct_answer": ["B"],
    "explanation": "Die Bezeichnungen sind geschützt und müssen exakt so übernommen werden, wie sie im Verzeichnis der anerkannten Ausbildungsberufe stehen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Darf ein Azubi während der Probezeit ohne Einhaltung einer Frist kündigen?",
    "answers": {
      "A": "Nur wenn er einen wichtigen Grund hat.",
      "B": "Ja, beide Seiten können in der Probezeit jederzeit fristlos kündigen (§ 22 BBiG).",
      "C": "Nein, er muss 2 Wochen Frist einhalten.",
      "D": "Nur wenn der Ausbilder zustimmt."
    },
    "correct_answer": ["B"],
    "explanation": "Die Probezeit dient dem gegenseitigen Testen. Daher ist die Kündigung hier voraussetzungslos und fristlos möglich.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Welcher Führungsstil ist am besten geeignet, um die 'Selbstkompetenz' eines Azubis im letzten Ausbildungsjahr zu fördern?",
    "answers": {
      "A": "Autoritär",
      "B": "Laissez-faire",
      "C": "Kooperativ/Partnerschaftlich",
      "D": "Bürokratisch"
    },
    "correct_answer": ["C"],
    "explanation": "Ein kooperativer Stil bezieht den Azubi in Entscheidungen ein und überträgt Verantwortung, was die Selbstständigkeit fördert.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi hat die Abschlussprüfung bestanden und bittet um die Übernahme in ein unbefristetes Arbeitsverhältnis. Der Betrieb bietet ihm nur einen Vertrag für 6 Monate an. Ist das zulässig?",
    "answers": {
      "A": "Nein, nach der Ausbildung muss immer unbefristet übernommen werden.",
      "B": "Ja, nach Abschluss der Ausbildung herrscht Vertragsfreiheit.",
      "C": "Nur wenn der Azubi schlechte Noten hatte.",
      "D": "Ja, aber nur wenn die Gewerkschaft zustimmt."
    },
    "correct_answer": ["B"],
    "explanation": "Nach Ende der Ausbildung ist der Betrieb nicht zur Übernahme verpflichtet (außer durch Tarifvertrag). Wenn er übernimmt, können die Konditionen frei ausgehandelt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender hat seine Abschlussprüfung nicht bestanden. Er möchte die Ausbildung fortsetzen, um die Wiederholungsprüfung abzulegen. Wie muss er rechtlich vorgehen?",
    "answers": {
      "A": "Er muss einen neuen Ausbildungsvertrag mit einer verkürzten Laufzeit abschließen.",
      "B": "Er muss die Verlängerung gegenüber dem Ausbildenden verlangen; das Verhältnis verlängert sich dann bis zur nächstmöglichen Wiederholungsprüfung, maximal um ein Jahr.",
      "C": "Das Ausbildungsverhältnis verlängert sich automatisch ohne sein Zutun, sobald die Kammer das Ergebnis übermittelt.",
      "D": "Er kann keine Verlängerung verlangen, muss aber vom Betrieb als ungelernte Kraft bis zur Prüfung weiterbeschäftigt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 21 Abs. 3 BBiG verlängert sich das Verhältnis auf Verlangen des Azubis. Die Initiative muss vom Azubi ausgehen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Welche Regelung gilt laut BBiG für die Bereitstellung von Ausbildungsmitteln (z.B. Werkzeuge, Werkstoffe), die zur Ausbildung oder zum Ablegen von Prüfungen erforderlich sind?",
    "answers": {
      "A": "Der Azubi muss diese von seiner Vergütung selbst erwerben, damit er den Wert der Werkzeuge schätzen lernt.",
      "B": "Der Ausbildende muss diese dem Azubi kostenlos zur Verfügung stellen.",
      "C": "Die Kosten werden zwischen Betrieb und Azubi hälftig geteilt.",
      "D": "Der Betrieb muss sie nur stellen, wenn der Azubi nachweisen kann, dass er bedürftig ist."
    },
    "correct_answer": ["B"],
    "explanation": "Laut § 14 Abs. 1 Nr. 3 BBiG ist der Ausbildende verpflichtet, die notwendigen Fachmittel kostenlos zur Verfügung zu stellen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Betrieb möchte im Ausbildungsvertrag vereinbaren, dass der Azubi nach erfolgreichem Abschluss für mindestens zwei Jahre im Unternehmen bleiben muss. Ist dies zulässig?",
    "answers": {
      "A": "Ja, das ist eine übliche Bindungsklausel zum Schutz der Investition des Betriebs.",
      "B": "Nein, Vereinbarungen, die den Azubi für die Zeit nach der Ausbildung in der Wahl seiner beruflichen Tätigkeit beschränken, sind grundsätzlich nichtig.",
      "C": "Nur wenn der Betrieb dem Azubi während der Ausbildung ein zusätzliches Stipendium gezahlt hat.",
      "D": "Ja, sofern die Vereinbarung bereits vor Beginn der Ausbildung schriftlich fixiert wurde."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 12 BBiG sind solche Einschränkungen der Berufswahlfreiheit unzulässig. Eine Ausnahme gibt es nur, wenn die Vereinbarung erst innerhalb der letzten 6 Monate der Ausbildung für die Zeit danach getroffen wird.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wann ist die Ausbildungsvergütung für den laufenden Monat spätestens an den Auszubildenden zu zahlen?",
    "answers": {
      "A": "Am 15. des Folgemonats.",
      "B": "Spätestens am letzten Kalendertag des laufenden Monats.",
      "C": "Am ersten Arbeitstag des neuen Monats.",
      "D": "Das kann der Betrieb im Rahmen der Vertragsfreiheit völlig frei entscheiden."
    },
    "correct_answer": ["B"],
    "explanation": "§ 18 Abs. 2 BBiG schreibt vor, dass die Vergütung spätestens am letzten Kalendertag des Monats fällig wird.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Ein Ausbilder wurde wegen eines schweren Verstoßes gegen das Betäubungsmittelgesetz zu einer Haftstrafe verurteilt. Welche rechtliche Folge hat dies für seine Ausbildertätigkeit?",
    "answers": {
      "A": "Keine, solange er seine fachliche Eignung noch besitzt.",
      "B": "Er verliert die persönliche Eignung und darf keine Jugendlichen mehr ausbilden.",
      "C": "Er darf nur noch unter Aufsicht eines anderen Ausbilders tätig sein.",
      "D": "Die Kammer muss entscheiden, ob er charakterlich noch tragbar ist."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 29 BBiG besitzt die persönliche Eignung nicht, wer gegen bestimmte Gesetze (u.a. BtMG) verstoßen hat oder für mindestens ein Jahr ins Gefängnis muss.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Azubi möchte nach der Probezeit kündigen, weil er bemerkt hat, dass er lieber ein Studium aufnehmen möchte. Welche Frist muss er einhalten?",
    "answers": {
      "A": "Er kann nur fristlos kündigen.",
      "B": "Er muss eine Frist von vier Wochen einhalten.",
      "C": "Er muss eine Frist von drei Monaten einhalten.",
      "D": "Er kann gar nicht kündigen, da die Probezeit vorbei ist."
    },
    "correct_answer": ["B"],
    "explanation": "Nach § 22 Abs. 2 Nr. 2 BBiG kann der Azubi mit einer Frist von 4 Wochen kündigen, wenn er die Ausbildung aufgeben oder den Beruf wechseln will.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 2,
    "question": "Was passiert mit dem Ausbildungsverhältnis, wenn der Azubi die Abschlussprüfung vor Ablauf der im Vertrag genannten Zeit besteht?",
    "answers": {
      "A": "Es läuft bis zum vertraglich vereinbarten Datum weiter.",
      "B": "Es endet mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss.",
      "C": "Es endet am letzten Tag des entsprechenden Monats.",
      "D": "Es wandelt sich automatisch in ein Arbeitsverhältnis um, außer der Betrieb kündigt."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 21 Abs. 2 BBiG endet die Ausbildung mit dem Bestehen der Prüfung am Tag der Ergebnisfeststellung.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Darf ein Ausbilder dem Azubi Aufgaben übertragen, die nicht dem Ausbildungszweck dienen (z.B. das private Auto des Chefs waschen)?",
    "answers": {
      "A": "Ja, Azubis müssen alle Anweisungen befolgen.",
      "B": "Nur wenn der Azubi dafür eine extra Vergütung erhält.",
      "C": "Nein, es dürfen nur Aufgaben übertragen werden, die dem Ausbildungszweck dienen und der körperlichen Kraft angemessen sind.",
      "D": "Nur in Ausnahmefällen, wenn gerade keine andere Arbeit da ist."
    },
    "correct_answer": ["C"],
    "explanation": "§ 14 Abs. 2 BBiG verbietet ausbildungsfremde Verrichtungen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Wer ist rechtlich dafür verantwortlich, den Ausbildungsvertrag bei der zuständigen Stelle (z.B. IHK) zur Eintragung anzumelden?",
    "answers": {
      "A": "Der Auszubildende.",
      "B": "Die Berufsschule.",
      "C": "Der Ausbildende (Betriebsinhaber).",
      "D": "Der gesetzliche Vertreter des Azubis."
    },
    "correct_answer": ["C"],
    "explanation": "Nach § 36 BBiG hat der Ausbildende die Eintragung unverzüglich nach Abschluss des Vertrags zu beantragen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Azubi ist 19 Jahre alt. Muss der Ausbildende ihn für die Teilnahme am Berufsschulunterricht freistellen?",
    "answers": {
      "A": "Nein, Volljährige müssen Schule und Betrieb in ihrer Freizeit koordinieren.",
      "B": "Ja, der Ausbildende hat den Azubi für die Teilnahme am Berufsschulunterricht freizustellen.",
      "C": "Nur wenn der Azubi gute Noten hat.",
      "D": "Nur für die Kernfächer, nicht für Sport oder Religion."
    },
    "correct_answer": ["B"],
    "explanation": "§ 15 BBiG verpflichtet den Ausbildenden zur Freistellung für den Berufsschulunterricht, unabhängig vom Alter des Azubis.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi verlangt am Ende seiner Ausbildung ein Zeugnis. Er möchte, dass auch Angaben über seine Führung und Leistung enthalten sind. Wie nennt man dieses Zeugnis?",
    "answers": {
      "A": "Einfaches Zeugnis.",
      "B": "Qualifiziertes Zeugnis.",
      "C": "Zwischenzeugnis.",
      "D": "Berufsschulzeugnis."
    },
    "correct_answer": ["B"],
    "explanation": "Ein Zeugnis, das über Art und Dauer hinaus auch Leistung und Führung bewertet, ist laut § 16 BBiG ein qualifiziertes Zeugnis.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 2,
    "question": "Muss ein Ausbildungsvertrag zwingend schriftlich niedergelegt werden?",
    "answers": {
      "A": "Nein, ein Handschlag reicht rechtlich aus.",
      "B": "Ja, die wesentlichen Inhalte müssen unverzüglich nach Abschluss, spätestens vor Beginn der Ausbildung, schriftlich niedergelegt werden.",
      "C": "Nur wenn der Azubi minderjährig ist.",
      "D": "Schriftform ist nur für tarifgebundene Betriebe Pflicht."
    },
    "correct_answer": ["B"],
    "explanation": "§ 11 BBiG schreibt die Schriftform der Vertragsniederschrift zwingend vor.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die Ausbildungsvergütung muss laut BBiG 'angemessen' sein. Was bedeutet das konkret für die Staffelung über die Jahre?",
    "answers": {
      "A": "Die Vergütung bleibt über alle Jahre gleich, da der Azubi am Anfang mehr lernt und am Ende mehr arbeitet.",
      "B": "Die Vergütung muss mit fortschreitender Ausbildung, mindestens jährlich, ansteigen.",
      "C": "Die Vergütung sinkt, da der Lernaufwand am Ende geringer ist.",
      "D": "Die Höhe ist völlig frei verhandelbar, solange sie über dem Bürgergeld-Niveau liegt."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß § 17 BBiG muss die Vergütung jährlich ansteigen, um dem wachsenden Beitrag des Azubis zum Betriebserfolg Rechnung zu tragen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "3",
    "schwierigkeit": 3,
    "question": "Darf die Führung des Ausbildungsnachweises (Berichtsheft) am Arbeitsplatz während der Arbeitszeit verlangt werden?",
    "answers": {
      "A": "Nein, das ist reine Freizeitbeschäftigung des Azubis.",
      "B": "Ja, der Ausbildende hat dem Azubi Gelegenheit zu geben, den Nachweis während der Ausbildungszeit zu führen.",
      "C": "Nur wenn der Betrieb keine Aufträge hat.",
      "D": "Nur in der Berufsschule, nicht im Betrieb."
    },
    "correct_answer": ["B"],
    "explanation": "Laut § 13 Nr. 7 BBiG gehört das Führen des Nachweises zu den Pflichten des Azubis, und der Betrieb muss ihm dafür laut § 14 die Zeit im Betrieb einräumen.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Welche Voraussetzung muss ein Azubi erfüllen, um zur Abschlussprüfung zugelassen zu werden?",
    "answers": {
      "A": "Er muss die Zwischenprüfung mit mindestens 'befriedigend' bestanden haben.",
      "B": "Er muss die Ausbildungszeit zurückgelegt haben und die vorgeschriebenen Ausbildungsnachweise (Berichtshefte) ordnungsgemäß geführt haben.",
      "C": "Er muss mindestens 18 Jahre alt sein.",
      "D": "Er muss eine Empfehlung der Berufsschule vorlegen."
    },
    "correct_answer": ["B"],
    "explanation": "Die Zulassungsvoraussetzungen sind in § 43 BBiG geregelt: Ende der Ausbildungszeit, Teilnahme an Zwischenprüfungen und geführte Berichtshefte.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Kann ein Ausbildungsverhältnis nach der Probezeit vom Ausbildenden (Betrieb) ordentlich gekündigt werden?",
    "answers": {
      "A": "Ja, mit einer Frist von 4 Wochen.",
      "B": "Ja, wenn der Betrieb weniger Aufträge hat.",
      "C": "Nein, eine ordentliche Kündigung durch den Ausbildenden ist nach der Probezeit ausgeschlossen.",
      "D": "Nur wenn der Azubi einverstanden ist."
    },
    "correct_answer": ["C"],
    "explanation": "Nach § 22 Abs. 2 BBiG kann nach der Probezeit nur noch aus einem wichtigen Grund (fristlos) gekündigt werden. Eine ordentliche Kündigung durch den Betrieb gibt es nicht mehr.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "1",
    "schwierigkeit": 3,
    "question": "Was versteht man unter der 'persönlichen Eignung' eines Ausbilders?",
    "answers": {
      "A": "Er hat die erforderlichen beruflichen Fertigkeiten und Kenntnisse.",
      "B": "Er ist nicht wegen schwerer Straftaten vorbestraft und hat keine Kinder oder Jugendlichen gefährdet.",
      "C": "Er hat den AdA-Schein erfolgreich bestanden.",
      "D": "Er ist körperlich fit genug für den Beruf."
    },
    "correct_answer": ["B"],
    "explanation": "Die persönliche Eignung (§ 29 BBiG) bezieht sich auf die moralische und rechtliche Unbedenklichkeit, während die fachliche Eignung (§ 30 BBiG) die Qualifikation betrifft.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Welche Pflicht hat der Azubi im Hinblick auf Betriebsgeheimnisse?",
    "answers": {
      "A": "Keine, da er nur lernt und keine Verantwortung trägt.",
      "B": "Er ist verpflichtet, über Betriebs- und Geschäftsgeheimnisse Stillschweigen zu wahren.",
      "C": "Er darf Geheimnisse nur mit seinen Mitschülern teilen.",
      "D": "Die Schweigepflicht beginnt erst nach Ende der Ausbildung."
    },
    "correct_answer": ["B"],
    "explanation": "Die Verschwiegenheitspflicht gehört zu den gesetzlichen Grundpflichten des Azubis gemäß § 13 Nr. 6 BBiG.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "4",
    "schwierigkeit": 3,
    "question": "Ein Azubi ist besonders begabt und erbringt überdurchschnittliche Leistungen. Kann er die Abschlussprüfung vorzeitig ablegen?",
    "answers": {
      "A": "Nein, die Zeit im Vertrag ist unumstößlich.",
      "B": "Ja, auf Antrag kann er vorzeitig zugelassen werden, wenn seine Leistungen dies rechtfertigen.",
      "C": "Nur wenn der Betrieb ihm die restlichen Monate erlässt.",
      "D": "Nur wenn er mindestens 21 Jahre alt ist."
    },
    "correct_answer": ["B"],
    "explanation": "§ 45 Abs. 1 BBiG erlaubt die vorzeitige Zulassung bei überdurchschnittlichen Leistungen in Betrieb und Schule.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Muss ein Auszubildender für die Teilnahme an Prüfungen vom Betrieb freigestellt werden?",
    "answers": {
      "A": "Ja, und die Vergütung muss für diese Zeit weitergezahlt werden.",
      "B": "Ja, aber er muss die Zeit nacharbeiten.",
      "C": "Nein, er muss dafür Urlaub nehmen.",
      "D": "Nur wenn die Prüfung während der regulären Arbeitszeit stattfindet."
    },
    "correct_answer": ["A"],
    "explanation": "Nach § 15 BBiG ist der Ausbildende zur Freistellung für Prüfungen bei Fortzahlung der Vergütung verpflichtet.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Die Geschäftsleitung möchte einen 16-jährigen Auszubildenden während einer Messewoche täglich 10 Stunden einsetzen, da 'viel zu tun ist'. Wie reagieren Sie als verantwortlicher Ausbilder?",
    "answers": {
      "A": "Das ist zulässig, sofern die Mehrarbeit innerhalb der nächsten drei Wochen durch Freizeit ausgeglichen wird.",
      "B": "Das ist unzulässig. Jugendliche dürfen grundsätzlich nicht mehr als 8 Stunden täglich und nicht mehr als 40 Stunden wöchentlich beschäftigt werden.",
      "C": "Das ist möglich, wenn der Auszubildende eine schriftliche Einverständniserklärung unterschreibt.",
      "D": "Das ist nur zulässig, wenn der Auszubildende am nächsten Tag erst später zur Arbeit kommen muss."
    },
    "correct_answer": ["B"],
    "explanation": "Gemäß JArbSchG liegt die Höchstgrenze für Jugendliche bei 8 Stunden täglich. Eine Ausweitung auf 8,5 Stunden ist nur möglich, wenn die Zeit an anderen Tagen derselben Woche ausgeglichen wird.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Fachausbilder in der Werkstatt meint, es reiche aus, wenn sein 17-jähriger Azubi nach 5 Stunden Arbeit eine Pause von 15 Minuten macht. Was korrigieren Sie?",
    "answers": {
      "A": "Die Pause ist ausreichend, da der Azubi noch keine 6 Stunden gearbeitet hat.",
      "B": "Jugendliche müssen bei einer Arbeitszeit von mehr als 4,5 bis 6 Stunden mindestens 30 Minuten Ruhepause erhalten.",
      "C": "Jugendliche benötigen grundsätzlich nach jeder zweiten Stunde eine Pause von 10 Minuten.",
      "D": "Die Pausenzeit ist erst ab einer täglichen Arbeitszeit von 8 Stunden gesetzlich vorgeschrieben."
    },
    "correct_answer": ["B"],
    "explanation": "Das JArbSchG schreibt bei einer Arbeitszeit von 4,5 bis 6 Stunden eine Pause von 30 Minuten vor, bei mehr als 6 Stunden sind es 60 Minuten.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein minderjähriger Auszubildender hat an einem Berufsschultag mehr als 5 Unterrichtsstunden (à 45 Minuten). Der Fachbereich fordert, dass er danach noch für zwei Stunden in den Betrieb kommt. Wie ist die Rechtslage?",
    "answers": {
      "A": "Der Auszubildende muss in den Betrieb kommen, wenn die Fahrzeit zumutbar ist.",
      "B": "Der Auszubildende darf nach einem Berufsschultag mit mehr als 5 Unterrichtsstunden einmal in der Woche nicht mehr im Betrieb beschäftigt werden.",
      "C": "Volljährige und Minderjährige müssen nach der Schule immer in den Betrieb, wenn die tägliche Sollarbeitszeit noch nicht erreicht ist.",
      "D": "Das entscheidet der Ausbilder je nach aktuellem Arbeitsaufwand."
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche dürfen einmal pro Woche bei einem langen Schultag (mehr als 5 Stunden) nicht mehr beschäftigt werden; dieser Tag wird mit der durchschnittlichen täglichen Arbeitszeit angerechnet.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Die Personalabteilung berechnet den Urlaubsanspruch für einen Azubi, der zu Beginn des Kalenderjahres noch 16 Jahre alt ist. Wie hoch ist der gesetzliche Mindesturlaub laut JArbSchG?",
    "answers": {
      "A": "Mindestens 25 Werktage.",
      "B": "Mindestens 27 Werktage.",
      "C": "Mindestens 30 Werktage.",
      "D": "Mindestens 24 Werktage, wie bei Erwachsenen."
    },
    "correct_answer": ["B"],
    "explanation": "Das Gesetz staffelt den Urlaub nach Alter: Unter 16 Jahre (30 Tage), unter 17 Jahre (27 Tage), unter 18 Jahre (25 Tage). Maßgeblich ist das Alter zu Beginn des Kalenderjahres.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Auszubildender soll am Samstag im Ladenverkauf aushelfen. Was müssen Sie hinsichtlich der 5-Tage-Woche beachten?",
    "answers": {
      "A": "Samstagsarbeit ist für Jugendliche generell verboten.",
      "B": "Wenn er am Samstag arbeitet, muss ihm in derselben Woche ein anderer Tag als Ersatzruhetag freigegeben werden.",
      "C": "Er darf Samstag arbeiten, erhält dafür aber einfach 25% mehr Vergütung ohne Freizeitausgleich.",
      "D": "Jugendliche dürfen ohne Ersatzruhetag an 6 Tagen pro Woche beschäftigt werden."
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche sollen nur an 5 Tagen in der Woche beschäftigt werden. Die beiden Ruhetage sollen nach Möglichkeit aufeinanderfolgen (Wochenende). Bei Samstagsarbeit ist ein Ersatzruhetag zwingend.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "Ab welcher Uhrzeit beginnt für die meisten Jugendlichen laut Gesetz die Nachtruhe, in der sie nicht beschäftigt werden dürfen?",
    "answers": {
      "A": "Ab 18:00 Uhr.",
      "B": "Ab 20:00 Uhr.",
      "C": "Ab 22:00 Uhr.",
      "D": "Ab Mitternacht."
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche dürfen grundsätzlich nur in der Zeit von 6 bis 20 Uhr beschäftigt werden. Es gibt Ausnahmen für bestimmte Branchen (z.B. Gastronomie oder Bäckereien).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Auszubildender steht kurz vor seiner Abschlussprüfung. Er ist 17 Jahre alt. Muss er am Tag direkt vor der schriftlichen Prüfung im Betrieb arbeiten?",
    "answers": {
      "A": "Ja, er kann sich nach der Arbeit zu Hause vorbereiten.",
      "B": "Nein, der Arbeitgeber muss ihn am Arbeitstag, der der schriftlichen Abschlussprüfung unmittelbar vorgeht, freistellen.",
      "C": "Nur wenn er für diesen Tag Urlaub nimmt.",
      "D": "Das gilt nur, wenn die Prüfung länger als 5 Stunden dauert."
    },
    "correct_answer": ["B"],
    "explanation": "Der Arbeitgeber ist verpflichtet, Jugendliche am Tag vor der schriftlichen Prüfung freizustellen. Die Vergütung muss weitergezahlt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein Bewerber für einen Ausbildungsplatz ist 16 Jahre alt. Welche medizinische Voraussetzung muss laut JArbSchG erfüllt sein, bevor er die Ausbildung beginnen darf?",
    "answers": {
      "A": "Er muss einen aktuellen Erste-Hilfe-Kurs vorweisen.",
      "B": "Er muss innerhalb der letzten 14 Monate von einem Arzt untersucht worden sein (Erstuntersuchung) und die Bescheinigung dem Arbeitgeber vorlegen.",
      "C": "Er muss lediglich eine Kopie seines Impfpasses abgeben.",
      "D": "Medizinische Untersuchungen sind nur in Pflegeberufen vorgeschrieben."
    },
    "correct_answer": ["B"],
    "explanation": "Nach dem JArbSchG darf ein Jugendlicher nur beschäftigt werden, wenn er dem Arbeitgeber eine Bescheinigung über eine ärztliche Erstuntersuchung vorlegt.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ihr Betrieb möchte einen 17-jährigen Azubi im Akkord an einer Maschine einsetzen, um die Stückzahlen zu erhöhen. Wie beurteilen Sie das rechtlich?",
    "answers": {
      "A": "Das ist zulässig, wenn der Azubi besonders geschickt ist.",
      "B": "Akkordarbeit und sonstige tempoabhängige Arbeiten sind für Jugendliche verboten.",
      "C": "Das ist nur erlaubt, wenn ein erfahrener Geselle danebensteht.",
      "D": "Akkord ist erlaubt, aber nur für maximal 4 Stunden am Tag."
    },
    "correct_answer": ["B"],
    "explanation": "Jugendliche dürfen nicht mit Akkordarbeit oder tempoabhängigen Arbeiten beschäftigt werden, da dies ihre Gesundheit und Sicherheit gefährden könnte.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein minderjähriger Azubi arbeitet in Ihrer Bäckerei. Die Backstube möchte, dass er bereits um 04:00 Uhr morgens beginnt. Ist das erlaubt?",
    "answers": {
      "A": "Nein, vor 06:00 Uhr ist keine Arbeit für Jugendliche erlaubt.",
      "B": "Ja, in Bäckereien dürfen Jugendliche über 16 Jahre bereits ab 04:00 Uhr morgens beschäftigt werden.",
      "C": "Nur mit einer Sondergenehmigung des Gewerbeaufsichtsamtes.",
      "D": "Ja, aber nur wenn er dafür um 10:00 Uhr Feierabend macht."
    },
    "correct_answer": ["B"],
    "explanation": "In Bäckereien und Konditoreien dürfen Jugendliche über 16 bereits ab 04:00 Uhr morgens eingesetzt werden (Ausnahmeregelung zur Nachtruhe).",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Nach einem Jahr Ausbildung steht bei einem minderjährigen Azubi die erste Nachuntersuchung an. Der Azubi meint, das sei seine Privatsache. Was sagen Sie?",
    "answers": {
      "A": "Er hat recht, es ist seine Freizeit.",
      "B": "Er muss die Bescheinigung über die Nachuntersuchung dem Arbeitgeber vorlegen. Ohne diese darf er nach Ablauf von 14 Monaten nicht weiterbeschäftigt werden.",
      "C": "Die Untersuchung ist nur fällig, wenn er krank war.",
      "D": "Der Arbeitgeber kann die Untersuchung durch eine interne Befragung ersetzen."
    },
    "correct_answer": ["B"],
    "explanation": "Ein Jahr nach Aufnahme der ersten Beschäftigung muss eine Nachuntersuchung erfolgen. Der Arbeitgeber ist verpflichtet, die Bescheinigung einzufordern.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wie lange muss die ununterbrochene Freizeit zwischen zwei Arbeitstagen bei Jugendlichen mindestens sein?",
    "answers": {
      "A": "Mindestens 10 Stunden.",
      "B": "Mindestens 11 Stunden.",
      "C": "Mindestens 12 Stunden.",
      "D": "Mindestens 8 Stunden."
    },
    "correct_answer": ["C"],
    "explanation": "Nach Beendigung der täglichen Arbeitszeit müssen Jugendliche eine ununterbrochene Freizeit von mindestens 12 Stunden haben.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 2,
    "question": "In welcher Zeitspanne soll der Urlaub für Jugendliche laut Gesetz vorzugsweise gewährt werden?",
    "answers": {
      "A": "Immer im Dezember.",
      "B": "Während der Berufsschulferien.",
      "C": "Das ganze Jahr über gleichmäßig verteilt.",
      "D": "Nur nach bestandener Zwischenprüfung."
    },
    "correct_answer": ["B"],
    "explanation": "Der Urlaub soll in der Zeit der Berufsschulferien gegeben werden. Geschieht dies nicht, muss für jeden Berufsschultag, an dem während des Urlaubs Unterricht stattfindet, ein weiterer Urlaubstag gewährt werden.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Ein 16-jähriger Auszubildender im Hotelgewerbe soll am Sonntag arbeiten. Welche Bedingung muss erfüllt sein?",
    "answers": {
      "A": "Er muss am Montag darauf 50% Zuschlag erhalten.",
      "B": "Jeder zweite Sonntag soll arbeitsfrei bleiben, mindestens aber müssen zwei Sonntage im Monat beschäftigungsfrei sein.",
      "C": "Sonntagsarbeit ist für Jugendliche nur im Notfall erlaubt.",
      "D": "Er darf jeden Sonntag arbeiten, wenn er dafür unter der Woche frei hat."
    },
    "correct_answer": ["B"],
    "explanation": "In Branchen, in denen Sonntagsarbeit erlaubt ist (wie Gastronomie), müssen für Jugendliche mindestens zwei Sonntage im Monat frei bleiben.",
    "question_type": "normal"
  },
  {
    "handlungsfeld": "2",
    "schwierigkeit": 3,
    "question": "Wer überwacht im Betrieb die Einhaltung der Vorschriften des Jugendarbeitsschutzgesetzes?",
    "answers": {
      "A": "Ausschließlich die Geschäftsleitung.",
      "B": "Der Betriebsrat und die Jugend- und Auszubildendenvertretung (JAV).",
      "C": "Die örtliche Polizei.",
      "D": "Das Finanzamt."
    },
    "correct_answer": ["B"],
    "explanation": "Es gehört zu den Aufgaben der JAV und des Betriebsrats, die Einhaltung der zugunsten der Arbeitnehmer geltenden Gesetze (wie das JArbSchG) zu überwachen.",
    "question_type": "normal"
  }
  
];

export const HANDLUNGSFELDER: Record<string, string> = {
  "1": "Ausbildungsvoraussetzungen prüfen und Ausbildung planen",
  "2": "Ausbildung vorbereiten und bei der Einstellung mitwirken",
  "3": "Ausbildung durchführen",
  "4": "Ausbildung abschließen",
};
