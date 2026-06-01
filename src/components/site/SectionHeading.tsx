export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-sm text-muted-foreground md:text-base">{intro}</p>}
      <div className="mx-auto mt-6 h-px w-12 bg-primary/60" />
    </div>
  );
}
