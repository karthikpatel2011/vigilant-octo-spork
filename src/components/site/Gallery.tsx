import processionImg from "@/assets/procession.png";
import concertImg from "@/assets/concert.png";
import dancerImg from "@/assets/dancer.png";
import troupeImg from "@/assets/troupe.png";
import { SectionHeading } from "./SectionHeading";
import { TiltImage } from "./TiltImage";

const SHOTS = [
  {
    src: processionImg,
    alt: "Amrita students in traditional dress performing a temple procession",
    label: "Onam Procession",
    caption: "Festival mornings on campus — colour, drums, and devotion.",
    tone: "saffron",
    span: "md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: concertImg,
    alt: "Playback singer performing at the Amrita Amaravati annual fest",
    label: "Anokha · Headliner Night",
    caption: "Pro-night artists. The whole campus shows up.",
    tone: "blue",
    span: "md:col-span-5 aspect-[5/4]",
  },
  {
    src: dancerImg,
    alt: "Amrita student performing a solo classical dance under stage lights",
    label: "Solo Performance",
    caption: "Solo spots open every semester — auditions, no gatekeeping.",
    tone: "magenta",
    span: "md:col-span-5 aspect-[5/6]",
  },
  {
    src: troupeImg,
    alt: "Amrita student dance troupe after a stage performance",
    label: "The Troupe",
    caption: "The friends you'll keep. Backstage after curtain call.",
    tone: "cyan",
    span: "md:col-span-7 aspect-[16/9]",
  },
] as const;

const TONE: Record<string, { dot: string; glow: string }> = {
  saffron: { dot: "var(--saffron)", glow: "color-mix(in oklab, var(--saffron) 55%, transparent)" },
  blue:    { dot: "#5cc6ff", glow: "color-mix(in oklab, #5cc6ff 50%, transparent)" },
  magenta: { dot: "#ff5fa2", glow: "color-mix(in oklab, #ff5fa2 50%, transparent)" },
  cyan:    { dot: "#6ef0d4", glow: "color-mix(in oklab, #6ef0d4 50%, transparent)" },
};

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
      {/* bright ambient wash */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, color-mix(in oklab, var(--saffron) 22%, transparent), transparent 70%), radial-gradient(55% 45% at 85% 90%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), radial-gradient(45% 40% at 50% 50%, color-mix(in oklab, var(--gold) 16%, transparent), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="03 · Life on stage"
          title="The campus you'll actually remember"
          intro="Festivals, fests, and the late-night practices in between. A real look at what Amrita Amaravati feels like after class hours."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {SHOTS.map((shot) => {
            const tone = TONE[shot.tone];
            return (
              <div key={shot.label} className={`${shot.span} group relative`}>
                <TiltImage
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full w-full border hairline shadow-xl"
                  overlay={
                    <>
                      <div
                        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(60% 60% at 50% 30%, ${tone.glow}, transparent 70%)`,
                          mixBlendMode: "screen",
                        }}
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end p-4 md:p-6">
                        <div className="w-full">
                          <div
                            className="inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur"
                          >
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: tone.dot }} />
                            {shot.label}
                          </div>
                          <p className="mt-2 max-w-md text-xs leading-snug text-white drop-shadow md:text-sm">
                            {shot.caption}
                          </p>
                        </div>
                      </div>
                    </>
                  }
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border hairline bg-background/80 px-6 py-5 backdrop-blur">
          <div className="text-sm text-muted-foreground">
            <span className="text-foreground">Anokha, Vivartana, Onam, Cultural Night</span> — four moments,
            same campus. Show up for at least one in your first semester.
          </div>
          <a
            href="#clubs"
            className="rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Find your club →
          </a>
        </div>
      </div>
    </section>
  );
}
