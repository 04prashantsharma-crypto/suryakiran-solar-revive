import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/motion/Reveal";

const testimonials = [
  {
    name: "Rajeev Sharma",
    role: "Homeowner, Rajpur Road",
    text: "The team surveyed our rooftop, explained the system clearly and completed the installation on schedule. Our electricity bill has dropped significantly.",
  },
  {
    name: "Meenakshi Negi",
    role: "Business Owner, Dehradun",
    text: "Professional work from quotation to commissioning. The hybrid inverter keeps our shop running even during power cuts.",
  },
  {
    name: "Anil Rawat",
    role: "Factory Manager, Uttarakhand",
    text: "Their engineers handled the industrial rooftop project end to end and support has been prompt whenever we needed it.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = testimonials[index]!;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="bg-[image:var(--gradient-brand)] px-4 py-24 sm:px-6 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
          What Our Clients Say About Us
        </h2>

        <div className="relative mt-12 min-h-[18rem] sm:min-h-[15rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-card p-8 shadow-[var(--shadow-lift)] sm:p-10"
            >
              <motion.span
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-solar)] text-accent-foreground"
              >
                <Quote className="h-6 w-6" />
              </motion.span>
              <motion.blockquote
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg"
              >
                “{active.text}”
              </motion.blockquote>
              <figcaption className="mt-6">
                <div className="flex justify-center gap-1 text-solar">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 font-display font-bold text-foreground">{active.name}</p>
                <p className="text-sm text-muted-foreground">{active.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-primary-foreground transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-primary-foreground transition-colors hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
