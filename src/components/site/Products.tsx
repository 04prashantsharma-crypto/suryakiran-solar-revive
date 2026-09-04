import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";
import panel from "@/assets/p-solar-panel.jpg";
import hybrid from "@/assets/p-hybrid-inverter.jpg";
import lithium from "@/assets/p-lithium.jpg";
import mppt from "@/assets/p-mppt.jpg";
import pcu from "@/assets/p-pcu.jpg";
import sinewave from "@/assets/p-sinewave.jpg";
import ups from "@/assets/p-ups.jpg";

const products = [
  {
    name: "Solar Panels",
    image: panel,
    text: "High-efficiency mono and poly PV modules suited for rooftop and ground mounted systems.",
  },
  {
    name: "Hybrid Inverter",
    image: hybrid,
    text: "Runs on solar, grid and battery together for uninterrupted power at home or office.",
  },
  {
    name: "Lithium Inbuilt",
    image: lithium,
    text: "Compact inverter with built-in lithium storage — maintenance free and space saving.",
  },
  {
    name: "Solar MPPT Inverter",
    image: mppt,
    text: "MPPT tracking extracts maximum output from your array even in changing sunlight.",
  },
  {
    name: "Solar MPPT PCU",
    image: pcu,
    text: "Power conditioning units that intelligently prioritise solar over grid consumption.",
  },
  {
    name: "Sinewave Inverter",
    image: sinewave,
    text: "Pure sinewave output that safely powers sensitive home and office appliances.",
  },
  {
    name: "Online UPS",
    image: ups,
    text: "Double-conversion UPS systems for zero-transfer-time backup of critical loads.",
  },
];

export function Products() {
  return (
    <section id="products" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Products"
          title="Solar Energy Solutions at their Best"
          subtitle="A complete range of solar products for residential, commercial, industrial and agricultural use."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 0.12}>
              <article className="card-lift group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={`${product.name} available at Surya Kiran Solutions Dehradun`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors group-hover:text-secondary"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
