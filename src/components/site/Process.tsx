import { ClipboardList, Headphones, PackageCheck, Truck } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";

const steps = [
  {
    step: "Step 01",
    title: "Inventory Management",
    text: "Genuine solar products stocked and quality-checked before they reach your site.",
    icon: ClipboardList,
  },
  {
    step: "Step 02",
    title: "Order Processing & Fulfillment",
    text: "Clear quotations, documentation and quick processing of your solar order.",
    icon: PackageCheck,
  },
  {
    step: "Step 03",
    title: "Logistics and Delivery",
    text: "Safe transport and on-time delivery of panels, inverters and mounting structures.",
    icon: Truck,
  },
  {
    step: "Step 04",
    title: "Customer Support",
    text: "Installation handover, monitoring guidance and ongoing service support.",
    icon: Headphones,
  },
];

export function Process() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Working Process"
          title="Streamlined Process & Sustainable Solutions"
          subtitle="A simple, transparent journey from your first enquiry to a fully commissioned solar system."
        />
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-12 right-0 left-0 hidden h-px bg-border lg:block" aria-hidden />
          {steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.2}>
              <article className="card-lift relative h-full rounded-2xl border border-border bg-card p-7 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[image:var(--gradient-solar)] text-accent-foreground shadow-[var(--shadow-soft)]">
                  <item.icon className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                  {item.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
