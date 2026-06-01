import { useEffect, useState } from "react";
import logoAsset from "@/assets/amrita-logo-new.png.asset.json";
const logo = logoAsset.url;

const NAV = [
  { id: "home", label: "Home" },
  { id: "academics", label: "Academics" },
  { id: "clubs", label: "Clubs" },
  { id: "hostel", label: "Hostel Life" },
  { id: "survival", label: "Survival Kit" },
  { id: "resources", label: "Resources" },
];

export function Navbar({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offsets = NAV.map((n) => {
        const el = document.getElementById(n.id);
        if (!el) return { id: n.id, top: Infinity };
        return { id: n.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b hairline bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Amrita Vishwa Vidyapeetham" width={40} height={40} className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-foreground">Campus Compass</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Amrita · Amaravati</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="group relative text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {n.label}
              <span
                className={`pointer-events-none absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-primary transition-all duration-300 ${
                  active === n.id ? "w-5" : "w-0 group-hover:w-3"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            className="rounded-full border hairline px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-primary hover:text-primary"
          >
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
          <button
            className="md:hidden rounded-full border hairline p-2"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t hairline bg-background">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm ${active === n.id ? "text-primary" : "text-foreground/80"}`}
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
