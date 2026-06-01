import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

type Answers = { interest?: string; mode?: string; competitive?: string };

const QUESTIONS = [
  {
    key: "interest" as const,
    q: "What lights you up?",
    options: ["Tech", "Arts", "Sports", "Business"],
  },
  {
    key: "mode" as const,
    q: "How do you work best?",
    options: ["Teamwork", "Solo work"],
  },
  {
    key: "competitive" as const,
    q: "Okay with competitive selection?",
    options: ["Yes, bring it on", "I'd rather not"],
  },
];

function recommend(a: Answers): { name: string; why: string } {
  if (a.interest === "Tech") {
    return {
      name: "Chakravyuha Technical Club",
      why: "Hackathons, CP, real builds. The de facto home for tech-minded freshers — and yes, recruitment is competitive, which is exactly what makes it worth it.",
    };
  }
  if (a.interest === "Arts") {
    return a.mode === "Solo work"
      ? { name: "Photography Club", why: "Visual craft, room for a single eye behind the lens, and exhibitions to push your work into the open." }
      : { name: "Music or Dance Club", why: "Ensemble work, stage time, and a tight crew you'll spend many late evenings rehearsing with." };
  }
  if (a.interest === "Sports") {
    return { name: "Sports Club", why: "Inter-college fixtures, daily practice slots, and a built-in friend group across branches." };
  }
  return {
    name: "Entrepreneurship Cell (E-Cell)",
    why: "Pitches, founder talks, and the chance to ship a side-project that might outgrow college. Bonus: brilliant networking.",
  };
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const done = step >= QUESTIONS.length;

  const pick = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const result = done ? recommend(answers) : null;
  const current = QUESTIONS[step];

  return (
    <section id="quiz" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Club Finder"
          title="Find your club in 3 questions"
          intro="No data stored. No accounts. Just a nudge in the right direction."
        />

        <div className="card-soft rounded-2xl border hairline bg-background p-8 md:p-10">
          {/* progress */}
          <div className="mb-8 flex items-center gap-3">
            {QUESTIONS.map((_, i) => (
              <span
                key={i}
                className={`h-1 flex-1 rounded-full ${
                  i < step || done ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {!done && current && (
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">
                Question {step + 1} / {QUESTIONS.length}
              </div>
              <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">{current.q}</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => pick(current.key, opt)}
                    className="rounded-xl border hairline px-5 py-4 text-left text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {done && result && (
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-primary">Your match</div>
              <h3 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">{result.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{result.why}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={reset}
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Retake quiz
                </button>
                <a
                  href="#clubs"
                  className="rounded-full border hairline px-5 py-2.5 text-sm text-foreground hover:border-primary hover:text-primary"
                >
                  Back to all clubs →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
