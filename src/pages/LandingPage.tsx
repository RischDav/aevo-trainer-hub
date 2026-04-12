import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, GraduationCap, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const features = [
  { icon: BookOpen, title: "4 Handlungsfelder", desc: "Alle Bereiche der AEVO abgedeckt" },
  { icon: CheckCircle, title: "Sofortige Auswertung", desc: "Detailliertes Feedback nach jeder Übung" },
  { icon: Clock, title: "Zeitmanagement", desc: "Trainiere unter realistischen Prüfungsbedingungen" },
  { icon: GraduationCap, title: "KI-generierte Fragen", desc: "Vielfältige Übungsfragen zu allen Themen" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              Ausbildung der Ausbilder
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              KI Trainer für{" "}
              <span className="text-gradient">AEVO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bereite dich effektiv auf die AEVO-Prüfung vor. Übe mit Fragen aus allen vier Handlungsfeldern —
              angepasst an dein Niveau und Tempo.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="text-base px-8 h-12 rounded-full shadow-lg">
                <Link to="/setup">Training starten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Was ist die AEVO?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-12 leading-relaxed">
            Die AEVO (Ausbilder-Eignungsverordnung) ist die rechtliche Grundlage dafür, wer in Deutschland
            Lehrlinge ausbilden darf. Der erfolgreiche Abschluss — umgangssprachlich "AdA-Schein" — ist eine
            bundesweit anerkannte Qualifikation für pädagogische, rechtliche und organisatorische Kompetenzen
            in der Berufsausbildung.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border bg-background p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handlungsfelder */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Die 4 Handlungsfelder</h2>
          <div className="space-y-4">
            {[
              { n: 1, t: "Ausbildungsvoraussetzungen prüfen und Ausbildung planen" },
              { n: 2, t: "Ausbildung vorbereiten und bei der Einstellung mitwirken" },
              { n: 3, t: "Ausbildung durchführen" },
              { n: 4, t: "Ausbildung abschließen" },
            ].map((h) => (
              <div key={h.n} className="flex items-start gap-4 rounded-xl border bg-card p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {h.n}
                </div>
                <div>
                  <h3 className="font-semibold">Handlungsfeld {h.n}</h3>
                  <p className="text-sm text-muted-foreground">{h.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Bereit für die Prüfung?</h2>
          <p className="text-muted-foreground">Starte jetzt dein erstes Training und teste dein Wissen.</p>
          <Button asChild size="lg" className="rounded-full px-8 h-12 text-base">
            <Link to="/setup">Jetzt loslegen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
