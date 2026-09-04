import { ArrowRight, Building2, Factory, Home, Leaf, PanelsTopLeft, Tractor } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";
import commercial from "@/assets/sector-commercial.jpg";
import industrial from "@/assets/sector-industrial.jpg";

const sectors = [
  {
    title: "Commercial Sector",
    image: commercial,
    text: "Rooftop and hybrid solar plants for offices, showrooms, hotels, schools and hospitals that cut operating costs.",
  },
  {
    title: "EPC Industrial Sector",
    image: industrial,
    text: "End-to-end EPC execution for factories and warehouses — design, supply, installation and commissioning.",
  },
];

const services = [
  { icon: Home, name: "Residential Solar", text: "Rooftop systems sized for household consumption and net metering." },
  { icon: Building2, name: "Commercial Solar Service", text: "Solar for businesses with monitoring and preventive maintenance." },
  { icon: Factory, name: "Industrial Solar", text: "High-capacity plants engineered for heavy industrial loads." },
  { icon: Tractor, name: "Agricultural Solar", text: "Solar pumps and off-grid systems for farms and rural sites." },
  { icon: PanelsTopLeft, name: "Rooftop Installation", text: "Structure design and safe mounting on any roof type." },
  { icon: Leaf, name: "Ground Mounted Installation", text: "Ground-mount arrays for open land and large capacities." },
];

export function Sectors() {
  return (
    <section id="services" className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sectors We Serve"
          title="Solar Solutions Built Around Your Sector"
          subtitle="From single homes to industrial EPC projects, we deliver systems matched to real energy demand."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 0.2}>
              <article className="card-lift group relative h-full overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <img
                  src={sector.image}
                  alt={`${sector.title} solar projects`}
                  loading="lazy"
                  width={1000}
                  height={700}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                  <h3 className="font-display text-2xl font-bold">{sector.title}</h3>
                  <p className="mt-2 max-w-md text-sm opacity-90">{sector.text}</p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-solar"
                  >
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 3) * 0.12}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/12 text-secondary">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
