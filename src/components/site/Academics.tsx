import { SectionHeading } from "./SectionHeading";

const BRANCHES = [
  { code: "CSE", name: "Computer Science & Engineering" },
  { code: "ECE", name: "Electronics & Communication" },
  { code: "EEE", name: "Electrical & Electronics" },
  { code: "MECH", name: "Mechanical Engineering" },
  { code: "CIVIL", name: "Civil Engineering" },
  { code: "CHEM", name: "Chemical Engineering" },
];

export function Academics() {
  return (
    <section id="academics" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="01 · Academic Life"
          title="How learning works at Amrita"
          intro="From branches and labs to attendance and CIAs — here's the academic playbook every fresher should know on Day 1."
        />

        <div>
          <h3 className="font-serif text-xl text-foreground">B.Tech branches offered</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {BRANCHES.map((b) => (
              <div
                key={b.code}
                className="card-soft rounded-xl border hairline px-4 py-4 transition-transform hover:-translate-y-0.5"
              >
                <div className="font-serif text-lg text-primary">{b.code}</div>
                <div className="mt-1 text-xs text-muted-foreground">{b.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="card-soft rounded-2xl border hairline p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Structure</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">Classes, labs & practicals</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A typical week alternates between lecture-style theory classes and hands-on labs.
              Practicals require lab records — start them the same week, don't pile them up.
              Tutorials reinforce theory; treat them as graded homework, not optional.
            </p>
          </article>

          <article className="card-soft rounded-2xl border hairline p-7">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Attendance</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">The 75% rule</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Minimum <span className="font-medium text-foreground">75% attendance</span> in every course
              is mandatory. Drop below this line and you're detained — meaning you can't sit the
              end-semester exam. Track it on the Amrita ERP from week one.
            </p>
          </article>

          <article className="card-soft rounded-2xl border hairline p-7 md:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Exam pattern</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">CIA + ESE = your semester grade</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="rounded-xl bg-secondary p-5">
                <div className="flex items-baseline justify-between">
                  <div className="font-serif text-xl text-foreground">CIA</div>
                  <div className="text-sm text-primary">50 marks</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Continuous Internal Assessment — <span className="text-foreground">3 CIAs per semester</span>,
                  combining assignments, quizzes, and mid-term tests.
                </p>
              </div>
              <div className="rounded-xl bg-secondary p-5">
                <div className="flex items-baseline justify-between">
                  <div className="font-serif text-xl text-foreground">ESE</div>
                  <div className="text-sm text-primary">50 marks</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  End Semester Exam — one paper per subject. Skip CIAs and even a perfect ESE won't save you.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16 rounded-2xl border hairline bg-secondary p-7 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-primary">CGPA · senior-tested tips</div>
          <h3 className="mt-2 font-serif text-2xl text-foreground">How to actually stay on top</h3>
          <ul className="mt-5 grid gap-3 text-sm text-foreground md:grid-cols-2">
            {[
              "Attend regularly — there's no substitute for being in the room.",
              "Submit assignments on time. Late = zero, no exceptions.",
              "Keep your lab records updated weekly, not the night before viva.",
              "Start studying from Week 1, not Week 13.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
