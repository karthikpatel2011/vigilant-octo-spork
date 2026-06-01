import logoAsset from "@/assets/amrita-logo-new.png.asset.json";
const logo = logoAsset.url;

const LINKS = ["Home", "Academics", "Clubs", "Hostel Life", "Survival Kit", "Resources"];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AmritaUniversity",
    path: "M13.5 21v-7.5h2.5l.4-3H13.5V8.7c0-.87.27-1.46 1.52-1.46H16.5V4.6c-.33-.04-1.27-.13-2.36-.13-2.34 0-3.94 1.42-3.94 4.04V10.5H8v3h2.2V21h3.3z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/amrita_university/",
    path: "M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.6A2.9 2.9 0 0 0 4.6 7.5v9a2.9 2.9 0 0 0 2.9 2.9h9a2.9 2.9 0 0 0 2.9-2.9v-9a2.9 2.9 0 0 0-2.9-2.9h-9zM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 1.6a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zm4.8-2.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/school/amrita-vishwa-vidyapeetham-official/",
    path: "M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5.1 10h3.68v10H5.1V10zm5.6 0h3.52v1.37h.05a3.86 3.86 0 0 1 3.47-1.9c3.71 0 4.4 2.44 4.4 5.62V20h-3.67v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37V20H10.7V10z",
  },
  {
    name: "X",
    href: "https://x.com/AMRITAedu",
    path: "M17.53 3H20.5l-6.5 7.43L21.75 21H15.7l-4.74-6.2L5.5 21H2.53l6.96-7.95L2.25 3h6.2l4.28 5.66L17.53 3zm-1.05 16.2h1.64L7.62 4.7H5.86l10.62 14.5z",
  },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-background py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Amrita" width={56} height={56} className="h-14 w-14 opacity-90" />
          <p className="max-w-xl font-serif text-xl italic text-foreground md:text-2xl">
            Built with <span className="text-primary not-italic">♥</span> for the Batch of 2026
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
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

          <div className="mt-2 flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Follow Amrita
            </span>
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Amrita on ${s.name}`}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border hairline text-foreground/70 transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 h-px w-12 bg-primary/40" />
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Campus Compass · A Build with AI Hackathon project
          </p>
        </div>
      </div>
    </footer>
  );
}
