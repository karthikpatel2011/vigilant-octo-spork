import { SectionHeading } from "./SectionHeading";

const DOS = [
  "Attend all classes from Day 1.",
  "Join at least one club.",
  "Make friends across branches.",
  "Talk to seniors — they save you weeks.",
  "Keep your ERP login saved & ready.",
  "Sleep 7+ hours every night.",
];
const DONTS = [
  "Don't bunk in Semester 1.",
  "Don't ignore CIA marks.",
  "Don't stay isolated.",
  "Don't rely only on the night before exams.",
];
const MISTAKES = [
  "Ignored attendance until it was too late.",
  "Didn't join any club — regretted it by 3rd year.",
  "Never spoke to professors during office hours.",
];

export function Survival() {
  return (
    <section id="survival" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="04 · Survival Kit"
          title="What seniors wish they'd known"
          intro="Distilled from upper-year regrets and wins. Steal these — no shame in shortcuts."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card-soft rounded-2xl border hairline bg-background p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Do's</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">Build the habits early</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {DOS.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 text-primary">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-soft rounded-2xl border hairline bg-background p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Don'ts</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">Avoid the obvious traps</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {DONTS.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 text-primary">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-soft rounded-2xl border hairline bg-background p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Common senior mistakes</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">Learn from their losses</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground">
              {MISTAKES.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-soft rounded-2xl border hairline bg-background p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Time management</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">Own your hours</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Use a weekly planner — even a paper one. Block study time on your calendar like it's a class.
              And don't let social media steal your mornings; that scroll costs you a CIA.
            </p>
          </article>

          <article className="md:col-span-2 rounded-2xl border hairline bg-primary p-7 text-primary-foreground">
            <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">Mental health</div>
            <h3 className="mt-2 font-serif text-2xl">It's okay to feel overwhelmed.</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed opacity-90">
              First semester is a lot. Talk to friends, talk to seniors, and don't hesitate to walk into the
              college counselor's office. Your mental health is worth more than your CGPA — and ironically,
              it's also what protects it.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
