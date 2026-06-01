import { SectionHeading } from "./SectionHeading";

const GROUPS = [
  {
    title: "Daily apps",
    items: [
      ["Google Calendar", "Your schedule, in one place"],
      ["Notion", "Notes, planners, second brain"],
      ["Forest", "Focus without breaking the streak"],
      ["LinkedIn", "Start your network from year one"],
      ["GitHub", "Non-negotiable for CSE students"],
    ],
  },
  {
    title: "Learning platforms",
    items: [
      ["NPTEL", "Free certified courses by IITs"],
      ["GeeksforGeeks", "DSA & interview prep"],
      ["LeetCode", "Sharpen problem-solving daily"],
      ["Coursera", "Specializations worth the time"],
      ["YouTube", "Pick one channel per subject"],
    ],
  },
  {
    title: "College portals",
    items: [
      ["Amrita ERP", "Attendance, marks, timetable"],
      ["Email portal", "Official comms — check daily"],
      ["Library portal", "Books, journals, e-resources"],
    ],
  },
  {
    title: "Free tools",
    items: [
      ["Canva", "Posters, decks, social"],
      ["Figma", "UI design & collaboration"],
      ["Google Colab", "Python & ML notebooks"],
      ["Overleaf", "LaTeX for clean reports"],
    ],
  },
];

export function Resources() {
  return (
    <section id="resources" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="05 · Must-have Tools"
          title="The fresher's toolkit"
          intro="Install these in your first week. Future-you will be quietly grateful."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((g) => (
            <div key={g.title} className="rounded-2xl border hairline bg-secondary p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-primary">{g.title}</div>
              <ul className="mt-5 divide-y hairline">
                {g.items.map(([name, desc]) => (
                  <li key={name} className="flex items-baseline justify-between gap-4 py-3">
                    <span className="font-serif text-base text-foreground">{name}</span>
                    <span className="text-right text-xs text-muted-foreground">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
