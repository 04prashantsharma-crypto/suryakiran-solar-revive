import { Car, Home, Sun } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

const blocks = [
  {
    icon: Home,
    title: "Home Solutions",
    text: "Inverters, batteries and rooftop solar sized for everyday household needs and backup during outages.",
  },
  {
    icon: Car,
    title: "Automotive Solutions",
    text: "Power and charging solutions supported by reliable batteries and conditioning equipment.",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    text: "Complete on-grid, off-grid and hybrid solar systems with professional installation and service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Shaping Your Future with Reliable Solar Products"
          subtitle="Quality equipment, careful engineering and support you can reach when it matters."
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.15}>
              <article className="card-lift group h-full rounded-2xl border border-border bg-card p-8 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <block.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{block.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
