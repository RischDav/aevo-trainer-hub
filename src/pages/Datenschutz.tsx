import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-1 max-w-3xl">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" /> Zurück
        </Button>
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <p>Diese Webseite ist ein privates, nicht-kommerzielles Projekt. Es werden keine personenbezogenen Daten erhoben, gespeichert oder an Dritte weitergegeben.</p>
          <h2 className="text-foreground font-semibold text-lg">Lokale Speicherung</h2>
          <p>Die Anwendung nutzt den localStorage des Browsers, um eine Benutzereinstellung (Disclaimer-Anzeige) zu speichern. Diese Daten verlassen den Browser nicht.</p>
          <h2 className="text-foreground font-semibold text-lg">Cookies</h2>
          <p>Diese Webseite verwendet keine Cookies.</p>
          <h2 className="text-foreground font-semibold text-lg">Kontakt</h2>
          <p>Bei Fragen zum Datenschutz kannst du dich an den Betreiber des Projekts wenden.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
