import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sun } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Solar Company in Dehradun",
    title: "Power Your Home With Clean Solar Energy",
    text: "Rooftop solar systems engineered, installed and maintained by the Surya Kiran Solutions team across Dehradun and Uttarakhand.",
  },
  {
    image: hero2,
    eyebrow: "Solar Energy Solutions",
    title: "Reliable Solar Products & Expert Installation",
    text: "Solar panels, hybrid inverters, MPPT PCUs and online UPS systems backed by dependable after-sales support.",
  },
  {
    image: hero3,
    eyebrow: "Commercial & Industrial",
    title: "Cut Your Electricity Bills, Not Your Productivity",
    text: "On-grid, off-grid and hybrid solar plants designed for homes, businesses, industries and farms.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const slide = slides[index];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={slide.image}
          src={slide.image}
          alt="Solar energy installation by Surya Kiran Solutions"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={900}
          initial={{ opacity: 0, scale: reduced ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial="hidden" animate="show" exit={{ opacity: 0 }}>
              <motion.span
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase backdrop-blur"
              >
                <Sun className="h-4 w-4 text-solar" />
                {slide.eyebrow}
              </motion.span>
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-5 font-display text-4xl leading-[1.1] font-extrabold text-primary-foreground sm:text-5xl lg:text-6xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg"
              >
                {slide.text}
              </motion.p>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-solar)] px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105"
                >
                  Get Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors duration-300 hover:bg-white/15"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-10 bg-solar" : "w-5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
