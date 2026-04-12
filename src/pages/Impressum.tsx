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
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>Angaben gemäß § 5 TMG:</p>
          <p>Dies ist ein privates, nicht-kommerzielles Projekt.</p>
          <h2 className="text-foreground font-semibold text-lg">Haftungsausschluss</h2>
          <p>Die Inhalte dieser Webseite wurden mit Sorgfalt erstellt. Die Fragen sind KI-generiert und können Fehler enthalten. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.</p>
          <p>Dieses Projekt steht in keiner Verbindung zur IHK, HWK oder anderen offiziellen Prüfungsstellen.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
