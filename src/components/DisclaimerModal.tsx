import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const STORAGE_KEY = "aevo-disclaimer-accepted";

export function useDisclaimer() {
  const [accepted, setAccepted] = useState(() => localStorage.getItem(STORAGE_KEY) === "true");
  const accept = (dontShowAgain: boolean) => {
    if (dontShowAgain) localStorage.setItem(STORAGE_KEY, "true");
    setAccepted(true);
  };
  return { accepted, accept, needsShowing: !accepted };
}

interface Props {
  open: boolean;
  onAccept: (dontShowAgain: boolean) => void;
}

export default function DisclaimerModal({ open, onAccept }: Props) {
  const [dontShow, setDontShow] = useState(false);

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
            <AlertTriangle className="h-6 w-6 text-warning" />
          </div>
          <DialogTitle className="text-center">Wichtiger Hinweis</DialogTitle>
          <DialogDescription className="text-left space-y-3 pt-2">
            <p>Bitte beachte folgende Punkte, bevor du fortfährst:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Die Fragen sind <strong>KI-generiert</strong> und können Fehler enthalten.</li>
              <li>Dieses Projekt steht in <strong>keiner Verbindung zur IHK</strong> und ist ein rein privates Projekt.</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2 pt-2">
          <Checkbox id="dont-show" checked={dontShow} onCheckedChange={(v) => setDontShow(!!v)} />
          <label htmlFor="dont-show" className="text-sm cursor-pointer select-none">Nicht mehr anzeigen</label>
        </div>
        <DialogFooter>
          <Button className="w-full" onClick={() => onAccept(dontShow)}>Verstanden</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
