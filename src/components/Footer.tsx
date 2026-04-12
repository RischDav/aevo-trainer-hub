import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card py-8 mt-auto">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} KI Trainer für AEVO — Privates Projekt</p>
      <nav className="flex gap-6">
        <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
        <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
