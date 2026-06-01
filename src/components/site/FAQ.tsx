import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  ["Can I go home on weekends?", "Yes — with prior permission from your hostel warden and parents' consent on record. Plan ahead; last-minute requests rarely work."],
  ["How strict is attendance really?", "Very. Below 75% in any course = detained from that subject's end-semester exam. There are no easy condonations."],
  ["When do clubs recruit?", "August through September. Follow club Instagrams and watch the academic block notice boards for audition dates."],
  ["What's the dress code?", "Smart formals on most academic days; some labs require closed shoes. ID card is mandatory at all times."],
  ["Are laptops compulsory?", "Highly recommended for CSE/ECE from Semester 1. Other branches need one by Semester 2 latest."],
  ["What if I fail a CIA?", "You can recover with the next two CIAs and the ESE — but only if you start working immediately. Don't wait."],
  ["Is the mess food good?", "Decent and rotated weekly. Most freshers adapt within a fortnight; outside options exist near campus."],
  ["How do I talk to professors?", "Use their office hours. Email first, be specific about your question, and show up on time. They respect effort."],
  ["Can I change my branch?", "Branch changes are rare and based strictly on first-year CGPA + available seats. Don't bank on it — perform where you are."],
  ["What's the best advice from seniors?", "Show up, ask questions, join one club, and don't isolate. The rest works itself out."],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions every fresher asks"
          intro="The honest answers, before you have to ask out loud."
        />

        <div className="overflow-hidden rounded-2xl border hairline bg-background">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`${i > 0 ? "border-t hairline" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base text-foreground md:text-lg">{q}</span>
                  <span
                    className={`text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
