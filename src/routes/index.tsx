import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Ticker } from "@/components/site/Ticker";
import { Hero } from "@/components/site/Hero";
import { Chancellor } from "@/components/site/Chancellor";
import { Academics } from "@/components/site/Academics";
import { Clubs } from "@/components/site/Clubs";
import { Hostel } from "@/components/site/Hostel";
import { Survival } from "@/components/site/Survival";
import { Resources } from "@/components/site/Resources";
import { Timeline } from "@/components/site/Timeline";
import { Quiz } from "@/components/site/Quiz";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Compass · Amrita Amaravati Fresher Guide" },
      {
        name: "description",
        content:
          "The fresher survival guide for Amrita Vishwa Vidyapeetham, Amaravati — academics, hostel, clubs, and survival tips for the Batch of 2026.",
      },
      { property: "og:title", content: "Campus Compass · Amrita Amaravati" },
      {
        property: "og:description",
        content:
          "Everything a fresher needs to know before Day 1 — academics, hostel, clubs, and survival tips.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <Ticker />
      <main>
        <Hero />
        <Academics />
        <Clubs />
        <Quiz />
        <Hostel />
        <Timeline />
        <Survival />
        <Resources />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
