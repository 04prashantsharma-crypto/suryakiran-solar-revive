import { Award, BadgeIndianRupee, Headset } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    icon: Award,
    title: "Experienced Staff",
    text: "Trained solar engineers and installers who handle survey, design, installation and commissioning end to end.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    text: "Transparent quotations with the right system sizing so you invest only in the capacity your site actually needs.",
  },
  {
    icon: Headset,
    title: "All Days Support",
    text: "Responsive service for maintenance, monitoring and troubleshooting whenever your solar system needs attention.",
  },
];

export function Highlights() {
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            direction={i === 1 ? "up" : i === 0 ? "left" : "right"}
            delay={i * 0.15}
          >
            <article className="card-lift h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-solar)] text-accent-foreground">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
