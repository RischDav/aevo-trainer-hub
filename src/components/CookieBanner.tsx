import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent !== "true") {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Heyyy, wir nutzen keine Cookies, viel Spaß dir!
        </p>
        <Button onClick={handleAccept} size="sm">
          Okay
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;