import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { questions as allQuestions, Question, HANDLUNGSFELDER } from "@/data/questions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, Clock, ChevronLeft, ChevronRight, Send, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Footer from "@/components/Footer";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function QuizPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const quizQuestions = useMemo(() => {
    const hf = params.get("hf")?.split(",") ?? [];
    const diff = params.get("diff")?.split(",").map(Number) ?? [];
    const count = parseInt(params.get("count") ?? "10");

    const filtered = allQuestions.filter(
      (q) => hf.includes(q.handlungsfeld) && diff.includes(q.schwierigkeit)
    );
    return shuffle(filtered).slice(0, count);
  }, [params]);

  const totalTime = (parseInt(params.get("time") ?? "10")) * 60;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [submitted, setSubmitted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (submitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimeExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [submitted]);

  const toggleAnswer = useCallback((qIdx: number, key: string, q: Question) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[qIdx] ?? [];
      if (q.question_type === "normal") {
        return { ...prev, [qIdx]: [key] };
      }
      return {
        ...prev,
        [qIdx]: current.includes(key) ? current.filter((k) => k !== key) : [...current, key],
      };
    });
  }, [submitted]);

  const handleSubmit = () => setSubmitted(true);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setSidebarOpen(false);
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-lg text-muted-foreground">Keine Fragen für diese Filterauswahl gefunden.</p>
        <Button onClick={() => navigate("/setup")}>Zurück zur Konfiguration</Button>
      </div>
    );
  }

  // Results view
  if (submitted) {
    const correctCount = quizQuestions.reduce((acc, q, i) => {
      const userAns = answers[i] ?? [];
      const isCorrect =
        userAns.length === q.correct_answer.length &&
        q.correct_answer.every((a) => userAns.includes(a));
      return acc + (isCorrect ? 1 : 0);
    }, 0);

    const percentage = Math.round((correctCount / quizQuestions.length) * 100);

    // per Handlungsfeld stats
    const hfStats: Record<string, { correct: number; total: number }> = {};
    quizQuestions.forEach((q, i) => {
      if (!hfStats[q.handlungsfeld]) hfStats[q.handlungsfeld] = { correct: 0, total: 0 };
      hfStats[q.handlungsfeld].total++;
      const userAns = answers[i] ?? [];
      const isCorrect =
        userAns.length === q.correct_answer.length &&
        q.correct_answer.every((a) => userAns.includes(a));
      if (isCorrect) hfStats[q.handlungsfeld].correct++;
    });

    return (
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Ergebnisse</h1>

          {timeExpired && (
            <div className="flex items-center gap-3 rounded-xl border border-warning/30 bg-warning/10 p-4 mb-6">
              <AlertTriangle className="h-5 w-5 text-warning shrink-0" />
              <p className="text-sm font-medium">Die vorgegebene Zeit wurde überschritten!</p>
            </div>
          )}

          {/* Score */}
          <div className="rounded-xl border bg-card p-8 text-center mb-8 shadow-sm">
            <div className={cn("text-6xl font-extrabold mb-2", percentage >= 50 ? "text-success" : "text-destructive")}>
              {percentage}%
            </div>
            <p className="text-muted-foreground">
              {correctCount} von {quizQuestions.length} Fragen richtig
            </p>
          </div>

          {/* HF breakdown */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {Object.entries(hfStats).map(([hf, s]) => (
              <div key={hf} className="rounded-xl border bg-card p-4">
                <p className="text-xs text-muted-foreground mb-1">Handlungsfeld {hf}</p>
                <p className="font-semibold text-sm">{HANDLUNGSFELDER[hf]}</p>
                <p className="text-lg font-bold mt-2">
                  {s.correct}/{s.total}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({Math.round((s.correct / s.total) * 100)}%)
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Question details */}
          <h2 className="text-xl font-bold mb-4">Detailauswertung</h2>
          <div className="space-y-4">
            {quizQuestions.map((q, i) => {
              const userAns = answers[i] ?? [];
              const isCorrect =
                userAns.length === q.correct_answer.length &&
                q.correct_answer.every((a) => userAns.includes(a));

              return (
                <div key={i} className={cn("rounded-xl border p-5 space-y-3", isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5")}>
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Frage {i + 1} · HF {q.handlungsfeld} · {q.question_type === "multiple_choice" ? "Mehrfachauswahl" : "Einfachauswahl"}</p>
                      <p className="font-medium">{q.question}</p>
                    </div>
                  </div>

                  <div className="grid gap-2 pl-8">
                    {Object.entries(q.answers).map(([key, text]) => {
                      const isUserPick = userAns.includes(key);
                      const isCorrectAnswer = q.correct_answer.includes(key);
                      return (
                        <div
                          key={key}
                          className={cn(
                            "rounded-lg border px-3 py-2 text-sm",
                            isCorrectAnswer && "border-success/50 bg-success/10",
                            isUserPick && !isCorrectAnswer && "border-destructive/50 bg-destructive/10"
                          )}
                        >
                          <span className="font-medium mr-2">{key}.</span>
                          {text}
                          {isCorrectAnswer && <span className="ml-2 text-success text-xs font-medium">✓ Richtig</span>}
                          {isUserPick && !isCorrectAnswer && <span className="ml-2 text-destructive text-xs font-medium">✗ Falsch</span>}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pl-8 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Erklärung:</span> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 mt-8">
            <Button onClick={() => navigate("/setup")} variant="outline" className="flex-1">Neues Training</Button>
            <Button onClick={() => navigate("/")} variant="ghost" className="flex-1">Startseite</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Quiz view
  const q = quizQuestions[current];
  const userAns = answers[current] ?? [];

  const QuestionNav = () => (
    <div className="space-y-1 p-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2 mb-2">Fragen</p>
      {quizQuestions.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={cn(
            "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors",
            i === current ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted",
            answers[i] && i !== current && "text-muted-foreground"
          )}
        >
          Frage {i + 1}
          {answers[i] && <span className="ml-2 text-xs opacity-70">✓</span>}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            {/* Mobile drawer */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 pt-8">
                <QuestionNav />
              </SheetContent>
            </Sheet>
            <span className="font-semibold text-sm">
              Frage {current + 1} / {quizQuestions.length}
            </span>
            <Button variant="destructive" size="sm" className="ml-2 hidden sm:inline-flex" onClick={() => navigate("/")}>
              Training abbrechen
            </Button>
          </div>

          <div className={cn("flex items-center gap-2 text-sm font-mono font-medium", timeExpired && "text-destructive")}>
            <Clock className="h-4 w-4" />
            {timeExpired ? "Zeit abgelaufen!" : formatTime(timeLeft)}
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-60 border-r bg-card shrink-0 overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)]">
          <QuestionNav />
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>HF {q.handlungsfeld}</span>
            <span>·</span>
            <span>{q.question_type === "multiple_choice" ? "Mehrfachauswahl" : "Einfachauswahl"}</span>
            <span>·</span>
            <span>Schwierigkeit {q.schwierigkeit}/3</span>
          </div>

          <h2 className="text-xl font-bold mb-6">{q.question}</h2>

          <div className="space-y-3">
            {Object.entries(q.answers).map(([key, text]) => {
              const selected = userAns.includes(key);
              return (
                <button
                  key={key}
                  onClick={() => toggleAnswer(current, key, q)}
                  className={cn(
                    "w-full text-left rounded-xl border-2 px-4 py-3 text-sm transition-all",
                    selected
                      ? "border-primary bg-primary/5 font-medium"
                      : "border-border hover:border-primary/30 hover:bg-muted/50"
                  )}
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border mr-3 text-xs font-bold shrink-0">
                    {key}
                  </span>
                  {text}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" /> Zurück
            </Button>

            {current === quizQuestions.length - 1 ? (
              <Button onClick={handleSubmit} className="gap-2">
                <Send className="h-4 w-4" /> Abgeben
              </Button>
            ) : (
              <Button onClick={() => setCurrent((p) => Math.min(quizQuestions.length - 1, p + 1))} className="gap-2">
                Weiter <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
