const TIPS = [
  "Always carry your ID card 🪪",
  "Attend the first class of every subject",
  "Save your faculty's email from Day 1",
  "Backup your assignments on Google Drive",
  "Mind 75% attendance — every class counts",
  "Talk to seniors — they're your shortcut",
  "Sleep 7+ hours — your CGPA will thank you",
  "Join one club before September ends",
];

export function Ticker() {
  const loop = [...TIPS, ...TIPS];
  return (
    <div className="overflow-hidden border-y hairline bg-secondary py-2.5">
      <div className="flex animate-ticker whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
