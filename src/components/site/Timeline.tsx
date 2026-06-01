import { SectionHeading } from "./SectionHeading";

const WEEKS = [
  { w: "Week 1", t: "Orientation & settling in", d: "ID cards, hostel allotment, campus tours, ice-breakers." },
  { w: "Week 2", t: "First classes begin", d: "Time-tables go live, faculty intros, your real schedule kicks in." },
  { w: "Week 3", t: "Club recruitments open", d: "Auditions, written tests, Insta announcements. Apply broadly." },
  { w: "Week 4", t: "First CIA announced", d: "Syllabus drops for CIA-1. This is where consistent students pull ahead." },
];

export function Timeline() {
  return (
    <section id="timeline" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="First Month"
          title="Your first 4 weeks, mapped"
          intro="A simple week-by-week so nothing important sneaks up on you."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2" />
          <div className="space-y-10">
            {WEEKS.map((w, i) => (
              <div
                key={w.w}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="pl-12 md:pl-0 md:text-right md:pr-10">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{w.w}</div>
                  <h3 className="mt-1 font-serif text-2xl text-foreground">{w.t}</h3>
                </div>
                <div className="pl-12 md:pl-10">
                  <div className="card-soft rounded-xl border hairline p-5">
                    <p className="text-sm text-muted-foreground">{w.d}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
