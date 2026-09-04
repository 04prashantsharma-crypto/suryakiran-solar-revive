import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Expand, X } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/motion/Reveal";
import g1 from "@/assets/g-1.jpg";
import g2 from "@/assets/g-2.jpg";
import g3 from "@/assets/g-3.jpg";
import g4 from "@/assets/g-4.jpg";
import g5 from "@/assets/g-5.jpg";
import g6 from "@/assets/g-6.jpg";

const projects = [
  { image: g1, title: "Residential Rooftop", category: "On-Grid Projects" },
  { image: g2, title: "Rural Home System", category: "Off-Grid Projects" },
  { image: g5, title: "Apartment Hybrid Plant", category: "Hybrid Projects" },
];

const portfolio = [
  { image: g3, title: "Ground Mounted Array" },
  { image: g4, title: "Solar Water Pump" },
  { image: g6, title: "Rooftop Installation" },
  { image: g1, title: "Net-Metered Rooftop" },
  { image: g5, title: "Commercial Hybrid Setup" },
  { image: g2, title: "Off-Grid Battery Bank" },
];

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-deep/90 p-4"
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-primary-foreground"
      >
        <X className="h-5 w-5" />
      </button>
      <motion.img
        src={src}
        alt="Solar project preview"
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
      />
    </motion.div>
  );
}

export function Gallery() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <>
      <section id="projects" className="bg-muted/50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Projects"
            title="Building a Brighter Future With Smart Solar Solutions"
            subtitle="On-grid, off-grid and hybrid solar installations delivered across Dehradun and Uttarakhand."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.title} direction="zoom" delay={i * 0.15}>
                <button
                  type="button"
                  onClick={() => setPreview(project.image)}
                  className="card-lift group block w-full overflow-hidden rounded-2xl bg-card text-left shadow-[var(--shadow-soft)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.category} — ${project.title}`}
                      loading="lazy"
                      width={900}
                      height={700}
                      className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-deep/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Expand className="h-7 w-7 text-primary-foreground" />
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Portfolio" title="Let's check our latest portfolio" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, i) => (
              <Reveal key={`${item.title}-${i}`} direction="zoom" delay={(i % 3) * 0.12}>
                <button
                  type="button"
                  onClick={() => setPreview(item.image)}
                  className="group relative block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={900}
                    height={700}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-deep/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-base font-bold text-primary-foreground">
                      {item.title}
                    </span>
                    <span className="rounded-full border border-white/60 px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                      View Project
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {preview && <Lightbox src={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </>
  );
}
