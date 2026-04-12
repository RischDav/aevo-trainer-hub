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
        
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-foreground font-semibold text-lg">1. Allgemeine Hinweise</h2>
            <p>
              Diese Webseite ist ein privates, nicht-kommerzielles Projekt. Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">2. Hosting (GitHub Pages)</h2>
            <p>
              Diese Webseite wird über GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA) bereitgestellt. 
              Beim Aufruf dieser Seite erhebt GitHub automatisch Daten, die Ihr Browser an deren Server übermittelt (Logfiles). Dazu gehören u.a. Ihre IP-Adresse, das Datum und die Uhrzeit des Zugriffs sowie der verwendete Browser. 
              Dies ist technisch notwendig, um die Seite anzuzeigen und die Sicherheit zu gewährleisten. 
              Weitere Informationen finden Sie in der <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">Datenschutzerklärung von GitHub</a>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">3. Lokale Speicherung</h2>
            <p>
              Die Anwendung nutzt den <strong>localStorage</strong> Ihres Browsers, um Ihre Fortschritte oder Einstellungen (z. B. die Bestätigung des Disclaimers) zu speichern. 
              Diese Daten verbleiben ausschließlich auf Ihrem Endgerät und werden zu keinem Zeitpunkt an mich oder Dritte übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">4. Cookies & Tracking</h2>
            <p>
              Diese Webseite verwendet keine Cookies und keine Analyse-Tools (wie Google Analytics), die Ihr Verhalten tracken oder Profile erstellen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-lg">5. Verantwortliche Stelle</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich bitte an den im Impressum angegebenen Betreiber.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}