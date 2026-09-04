import { ArrowRight, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import { Counter, Reveal } from "@/components/motion/Reveal";

const points = [
  "Complete on-grid, off-grid and hybrid solar solutions",
  "Sustainable energy that lowers monthly electricity bills",
  "Quality products with professional installation standards",
];

const stats = [
  { value: 13, label: "Years of Trust" },
  { value: 135, label: "On-Grid Solar Projects Completed" },
  { value: 145, label: "Off-Grid Solar Projects Completed" },
  { value: 140, label: "Hybrid Solar Projects Completed" },
];

export function About() {
  return (
    <>
      <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Surya Kiran Solutions team discussing a rooftop solar installation"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="absolute -bottom-6 left-6 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-4 text-primary-foreground shadow-[var(--shadow-lift)]">
                <p className="font-display text-2xl font-extrabold">
                  <Counter target={13} />
                </p>
                <p className="text-xs tracking-wide uppercase">Years of Trust</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="right">
              <span className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                About Us
              </span>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <h2 className="mt-3 font-display text-3xl leading-tight font-bold text-foreground sm:text-4xl">
                Sustainable Solar Energy Solutions for a Brighter Tomorrow
              </h2>
            </Reveal>
            <Reveal direction="right" delay={0.25}>
              <p className="mt-5 text-muted-foreground">
                Surya Kiran Solutions delivers dependable solar energy systems for homes,
                businesses, industries and farms across Dehradun and Uttarakhand. From site survey
                and system design to installation and after-sales service, our team keeps the entire
                journey simple for you.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.35}>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="up" delay={0.5}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[image:var(--gradient-brand)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
              Our Company Legacy
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.12}>
                <div className="text-center text-primary-foreground">
                  <p className="font-display text-4xl font-extrabold text-solar">
                    <Counter target={stat.value} />
                  </p>
                  <p className="mt-2 text-sm opacity-90">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
