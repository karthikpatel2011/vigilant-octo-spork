import ammaImg from "@/assets/amma.png";
import { SectionHeading } from "./SectionHeading";

export function Chancellor() {
  return (
    <section
      id="chancellor"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Saffron + maroon ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%), radial-gradient(50% 40% at 10% 90%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Our Chancellor"
          title="Mata Amritanandamayi Devi"
          intro="Lovingly known as Amma — the founder and Chancellor of Amrita Vishwa Vidyapeetham. A guiding presence behind every Amrita campus."
        />

        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--gold) 45%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full"
              style={{
                background:
                  "conic-gradient(from 140deg, color-mix(in oklab, var(--primary) 55%, transparent), color-mix(in oklab, var(--gold) 65%, transparent), color-mix(in oklab, var(--primary) 55%, transparent))",
                padding: "2px",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                borderRadius: "9999px",
              }}
            />
            <div className="overflow-hidden rounded-full bg-secondary aspect-square">
              <img
                src={ammaImg}
                alt="Mata Amritanandamayi Devi, Chancellor of Amrita Vishwa Vidyapeetham"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <blockquote className="border-l-2 border-primary/60 pl-5 font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
              “Education is not merely the accumulation of information, but a means
              to lift up the lives of others.”
              <footer className="mt-3 text-xs not-italic uppercase tracking-[0.22em] text-muted-foreground">
                — Amma
              </footer>
            </blockquote>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["1994", "University founded"],
                ["7", "Campuses in India"],
                ["A++", "NAAC accredited"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="rounded-2xl border hairline bg-background/60 px-4 py-5 text-center backdrop-blur-sm transition-colors hover:border-primary"
                >
                  <div className="font-serif text-2xl text-primary">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Amrita is built on a foundation of compassion-driven learning —
              a philosophy you'll feel everywhere on campus, from the way
              faculty teach to the way seniors welcome you on Day 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
