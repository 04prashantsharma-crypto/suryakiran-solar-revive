import { motion, useInView, useReducedMotion, type Variants } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "none";

const offset = (dir: Direction) => {
  switch (dir) {
    case "up":
      return { y: 32 };
    case "down":
      return { y: -32 };
    case "left":
      return { x: -40 };
    case "right":
      return { x: 40 };
    case "zoom":
      return { scale: 0.96 };
    default:
      return {};
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article";
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    const Static = as as "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offset(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Counter({
  target,
  suffix = "+",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, reduced]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2 className="mt-4 font-display text-3xl leading-tight font-bold text-foreground sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
