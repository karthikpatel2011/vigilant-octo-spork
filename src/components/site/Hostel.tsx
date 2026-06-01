import { SectionHeading } from "./SectionHeading";

const DAY = [
  ["7:00 AM", "Wake up"],
  ["8:00 AM", "Breakfast at mess"],
  ["9:00 AM", "Classes start"],
  ["1:00 PM", "Lunch"],
  ["2:00 PM", "Classes / labs"],
  ["5:00 PM", "Free time"],
  ["7:30 PM", "Dinner"],
  ["8:30 PM", "Study / personal"],
  ["11:00 PM", "Lights out"],
];

const PLACES = [
  "Main Academic Block",
  "Library",
  "Cafeteria (Amritam)",
  "Sports Ground",
  "Medical Center",
  "ATM",
];

export function Hostel() {
  return (
    <section id="hostel" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="03 · Campus & Hostel Life"
          title="The rhythm of a day on campus"
          intro="What your first week, your first month, and most days will actually look like."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          {/* Day timeline */}
          <div className="rounded-2xl border hairline bg-secondary p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">A typical day</div>
            <ul className="mt-5 divide-y hairline">
              {DAY.map(([time, what]) => (
                <li key={time} className="flex items-baseline gap-5 py-3">
                  <span className="w-20 font-serif text-sm text-primary">{time}</span>
                  <span className="text-sm text-foreground">{what}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hostel facts */}
          <div className="space-y-5">
            <article className="card-soft rounded-2xl border hairline p-6">
              <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Hostel</div>
              <h3 className="mt-2 font-serif text-xl text-foreground">Living on campus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Separate hostels for boys and girls</li>
                <li>• Mess food, 3 meals a day</li>
                <li>• RO water available on every floor</li>
                <li>• Wi-Fi in rooms (speed varies)</li>
                <li>• Laundry area on-site</li>
              </ul>
            </article>

            <article className="card-soft rounded-2xl border hairline p-6">
              <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Know your campus</div>
              <h3 className="mt-2 font-serif text-xl text-foreground">Important places</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {PLACES.map((p) => (
                  <span key={p} className="rounded-full border hairline px-3 py-1 text-xs text-foreground/80">
                    {p}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border hairline bg-secondary p-7 md:p-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-primary">First week tips</div>
          <h3 className="mt-2 font-serif text-2xl text-foreground">Hit the ground running</h3>
          <ul className="mt-5 grid gap-3 text-sm text-foreground md:grid-cols-2">
            {[
              "Get your ID card on Day 1 — you'll need it everywhere.",
              "Save all faculty numbers and emails.",
              "Walk the entire campus before classes begin.",
              "Introduce yourself to the hostel warden — early.",
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
