export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:px-8 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border hairline px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Fresher Survival Guide · Batch of 2026
          </div>
          <h1 className="font-serif text-4xl leading-[1.1] text-foreground md:text-6xl">
            Welcome to Amrita, Amaravati —
            <span className="block italic text-primary">Your Journey Starts Here.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Everything a fresher needs to know before Day 1 — academics, hostel, clubs, and survival tips —
            all in one place.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#academics"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start exploring
            </a>
            <a
              href="#survival"
              className="rounded-full border hairline px-6 py-3 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Survival kit →
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-border md:grid-cols-4">
          {[
            ["6", "B.Tech branches"],
            ["75%", "Min. attendance"],
            ["350+", "Chakravyuha members"],
            ["1", "Unforgettable year"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background px-5 py-6 text-center">
              <div className="font-serif text-3xl text-primary">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
