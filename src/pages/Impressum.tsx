import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export default function Impressum() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 max-w-3xl">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" /> Zurück
        </Button>
        
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <p className="font-semibold text-foreground italic">Angaben gemäß § 5 TMG:</p>
            <p className="text-foreground">
              David Rischow<br />
              Leintalstraße 18<br />
              74074 Heilbronn
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">Kontakt</h2>
            <p>
              Telefon: +49 177 5123102<br />
              E-Mail: david.rischow[at]mail.de
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">Redaktionell verantwortlich</h2>
            <p>David Rischow (Anschrift wie oben)</p>
          </section>

          <hr className="my-6 border-border" />

          <section className="space-y-4">
            <h2 className="text-foreground font-semibold text-lg">Haftungsausschluss & Hinweise</h2>
            <p>Dies ist ein privates, nicht-kommerzielles Projekt.</p>
            <p>
              Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. 
              Bitte beachten Sie, dass die Prüfungsfragen <span className="font-semibold">KI-generiert</span> sind 
              und trotz Prüfung Fehler enthalten können. Für die Richtigkeit, Vollständigkeit 
              und Aktualität der Inhalte wird keine Gewähr übernommen.
            </p>
            <p>
              Dieses Projekt steht in keiner offiziellen Verbindung zur IHK, HWK oder 
              anderen staatlichen Prüfungsstellen.
            </p>
            <p className="text-xs italic">Quelle: Erstellt mit e-recht24.de</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}