import logoAsset from "@/assets/amrita-logo-new.png.asset.json";
const logo = logoAsset.url;

const LINKS = ["Home", "Academics", "Clubs", "Hostel Life", "Survival Kit", "Resources"];

export function Footer() {
  return (
    <footer className="border-t hairline bg-background py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Amrita" width={56} height={56} className="h-14 w-14 opacity-90" />
          <p className="max-w-xl font-serif text-base text-foreground md:text-lg">
            Built with <span className="text-primary">♥</span> for the Batch of 2026
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Chakravyuha Technical Club · Amrita Vishwa Vidyapeetham, Amaravati
          </p>

          <nav className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                className="text-xs text-foreground/70 transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>

          <div className="mt-6 h-px w-12 bg-primary/40" />
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Campus Compass · A Build with AI Hackathon project
          </p>
        </div>
      </div>
    </footer>
  );
}
