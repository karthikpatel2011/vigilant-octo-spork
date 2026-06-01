import culturalsAsset from "@/assets/culturals.png.asset.json";
import { SectionHeading } from "./SectionHeading";
import { TiltImage } from "./TiltImage";


const CLUBS = [
  { name: "Literary Club", tag: "Words & debate" },
  { name: "Music Club", tag: "Strings & vocals" },
  { name: "Dance Club", tag: "Stage & rhythm" },
  { name: "Sports Club", tag: "Field & court" },
  { name: "Photography Club", tag: "Frame & focus" },
  { name: "Entrepreneurship Cell", tag: "Build & pitch" },
  { name: "IEEE Student Branch", tag: "Research & networking" },
];

export function Clubs() {
  return (
    <section id="clubs" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="02 · Clubs & Extracurriculars"
          title="Where your second education happens"
          intro="Clubs recruit freshers in August–September. Pick one, show up, and your college years change shape."
        />

        {/* Featured: Chakravyuha */}
        <article className="relative overflow-hidden rounded-3xl border hairline bg-background p-8 md:p-12">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary" />
          </div>
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Featured Club
              </div>
              <h3 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                Chakravyuha <span className="italic text-primary">Technical Club</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Amrita Amaravati's premier technical club — <span className="text-foreground">350+ members</span> strong,
                focused on coding, hackathons, competitive programming, and building real tech projects.
                If you're into tech, this is where you belong.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Hackathons", "CP", "Open Source", "Build Nights"].map((t) => (
                  <span key={t} className="rounded-full border hairline px-3 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border hairline bg-border">
              {[
                ["350+", "Members"],
                ["12+", "Events / yr"],
                ["48hr", "Build with AI"],
                ["1st", "Choice for tech"],
              ].map(([n, l]) => (
                <div key={l} className="bg-background px-4 py-5 text-center">
                  <div className="font-serif text-2xl text-primary">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-14">
          <h3 className="font-serif text-xl text-foreground">More clubs on campus</h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CLUBS.map((c) => (
              <div
                key={c.name}
                className="card-soft flex items-center justify-between rounded-xl border hairline bg-background px-5 py-4 transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <div className="font-serif text-base text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.tag}</div>
                </div>
                <span className="text-primary">→</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border hairline bg-background p-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">How to join</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Clubs recruit freshers in <span className="text-foreground">August–September</span> via open
              auditions or written tests. Follow each club's Instagram and keep an eye on the academic block
              notice boards — that's where the dates drop.
            </p>
          </div>
          <div className="rounded-2xl border hairline bg-background p-6">
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary">Why it matters</div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Skill-building, networking, real resume weight — and the people you meet here become your
              friends for the next four years. Don't skip this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
