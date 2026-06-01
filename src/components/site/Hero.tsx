import campusAsset from "@/assets/campus.png.asset.json";
import { TiltImage } from "./TiltImage";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Bright ambient wash from the Amrita palette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 12% 0%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%), radial-gradient(55% 45% at 95% 10%, color-mix(in oklab, var(--saffron) 16%, transparent), transparent 60%), radial-gradient(50% 45% at 50% 100%, color-mix(in oklab, var(--leaf) 10%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border hairline bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Fresher Survival Guide · Batch of 2026
          </div>
          <h1 className="font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
            Welcome to Amrita, Amaravati —
            <span
              className="block italic"
              style={{
                background:
                  "linear-gradient(95deg, var(--primary), color-mix(in oklab, var(--saffron) 80%, var(--primary)) 60%, var(--primary))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Your Journey Starts Here.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything a fresher needs to know before Day 1 — academics, hostel, clubs, and survival tips —
            all in one place.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#academics"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Start exploring</span>
              <span
                aria-hidden
                className="absolute inset-0 -z-0 translate-y-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--saffron)] transition-transform duration-300 group-hover:translate-y-0"
              />
            </a>
            <a
              href="#survival"
              className="rounded-full border hairline px-6 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Survival kit →
            </a>
          </div>
        </div>

        {/* Campus hero image with interactive tilt */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl"
            style={{
              background:
                "linear-gradient(120deg, color-mix(in oklab, var(--primary) 35%, transparent), color-mix(in oklab, var(--gold) 35%, transparent))",
            }}
          />
          <TiltImage
            src={campusAsset.url}
            alt="Amrita Vishwa Vidyapeetham, Amaravati campus"
            className="aspect-[21/9] border hairline shadow-2xl"
            overlay={
              <div className="flex w-full items-end justify-between p-5 md:p-8">
                <div className="rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur">
                  Amaravati Campus · Andhra Pradesh
                </div>
                <div className="hidden rounded-full bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-primary-foreground md:inline-block">
                  Move your cursor →
                </div>
              </div>
            }
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-border md:grid-cols-4">
          {[
            ["6", "B.Tech branches"],
            ["75%", "Min. attendance"],
            ["350+", "Chakravyuha members"],
            ["1", "Unforgettable year"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="group bg-background px-5 py-6 text-center transition-colors hover:bg-secondary"
            >
              <div
                className="font-serif text-3xl transition-colors"
                style={{ color: "var(--primary)" }}
              >
                {n}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
