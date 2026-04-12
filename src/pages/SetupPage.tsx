import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { HANDLUNGSFELDER } from "@/data/questions";
import { ArrowLeft, Play } from "lucide-react";
import Footer from "@/components/Footer";
import DisclaimerModal, { useDisclaimer } from "@/components/DisclaimerModal";

const DIFFICULTIES = [
  { value: 1, label: "Leicht" },
  { value: 2, label: "Mittel" },
  { value: 3, label: "Schwer" },
];

export default function SetupPage() {
  const navigate = useNavigate();
  const disclaimer = useDisclaimer();

  const [selectedHF, setSelectedHF] = useState<string[]>(Object.keys(HANDLUNGSFELDER));
  const [difficulty, setDifficulty] = useState<number[]>([1, 2, 3]);
  const [count, setCount] = useState(10);
  const [time, setTime] = useState(10);

  const toggleHF = (hf: string) =>
    setSelectedHF((prev) => (prev.includes(hf) ? prev.filter((h) => h !== hf) : [...prev, hf]));

  const toggleDiff = (d: number) =>
    setDifficulty((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

  const canStart = selectedHF.length > 0 && difficulty.length > 0;

  const handleStart = () => {
    const params = new URLSearchParams({
      hf: selectedHF.join(","),
      diff: difficulty.join(","),
      count: count.toString(),
      time: time.toString(),
    });
    navigate(`/quiz?${params.toString()}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerModal open={disclaimer.needsShowing} onAccept={disclaimer.accept} />

      <div className="container mx-auto px-4 py-8 flex-1 max-w-2xl">
        <Button variant="ghost" className="mb-6 gap-2" onClick={() => navigate("/")}>
          <ArrowLeft className="h-4 w-4" /> Zurück
        </Button>

        <h1 className="text-3xl font-bold mb-8">Training konfigurieren</h1>

        <div className="space-y-6">
          {/* Handlungsfelder */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Handlungsfelder</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(HANDLUNGSFELDER).map(([key, label]) => (
                <label key={key} className="flex items-start gap-3 cursor-pointer">
                  <Checkbox checked={selectedHF.includes(key)} onCheckedChange={() => toggleHF(key)} className="mt-0.5" />
                  <span className="text-sm">
                    <span className="font-medium">HF {key}:</span> {label}
                  </span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Schwierigkeit */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Schwierigkeit</CardTitle></CardHeader>
            <CardContent className="flex gap-3 flex-wrap">
              {DIFFICULTIES.map((d) => (
                <label key={d.value} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox checked={difficulty.includes(d.value)} onCheckedChange={() => toggleDiff(d.value)} />
                  <span className="text-sm">{d.label}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Anzahl */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Anzahl der Fragen: {count}</CardTitle>
            </CardHeader>
            <CardContent>
              <Slider min={1} max={100} step={1} value={[count]} onValueChange={([v]) => setCount(v)} />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1</span><span>100</span>
              </div>
            </CardContent>
          </Card>

          {/* Zeit */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zeit: {time} Minute{time !== 1 ? "n" : ""}</CardTitle>
            </CardHeader>
            <CardContent>
              <Slider min={1} max={180} step={1} value={[time]} onValueChange={([v]) => setTime(v)} />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1 Min</span><span>180 Min</span>
              </div>
            </CardContent>
          </Card>

          <Button onClick={handleStart} disabled={!canStart} size="lg" className="w-full gap-2 rounded-full h-12 text-base">
            <Play className="h-5 w-5" /> Los geht's!
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
