import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/motion/Reveal";
import { companyInfo, productLinks, serviceLinks } from "@/config/company";

const fields = ["name", "email", "phone", "service", "message"] as const;

export function Contact() {
  const reduced = useReducedMotion();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thank you! We'll get back to you shortly.", {
        description: `You can also call us on ${companyInfo.phone}.`,
      });
    }, 600);
  };

  const anim = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay: 0.1 * (i + 1) },
        };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
              Contact Us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-3xl leading-tight font-bold text-foreground sm:text-4xl">
              Get in Touch for All Your Solar Energy Solution Needs
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-muted-foreground">
              Tell us about your site and requirement — our team in Dehradun will help you choose
              the right solar system and share a clear quotation.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            <Reveal delay={0.3}>
              <a
                href={companyInfo.mapLink}
                target="_blank"
                rel="noreferrer"
                className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold text-foreground">
                    Our Office
                  </span>
                  <address className="mt-1 text-sm not-italic text-muted-foreground">
                    {companyInfo.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={companyInfo.phoneLink}
                  className="card-lift flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">Call Us</span>
                    <span className="block truncate font-semibold text-foreground">
                      {companyInfo.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">WhatsApp</span>
                    <span className="block truncate font-semibold text-foreground">Chat with us</span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field, i) => (
              <motion.div
                key={field}
                {...anim(i)}
                className={field === "message" || field === "service" ? "sm:col-span-2" : ""}
              >
                <label
                  htmlFor={field}
                  className="mb-2 block text-xs font-semibold tracking-wide text-foreground/80 uppercase"
                >
                  {field === "service" ? "Service / Product" : field}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}
                    required
                    placeholder="Tell us about your requirement"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                ) : field === "service" ? (
                  <select
                    id={field}
                    name={field}
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>
                      Select a service or product
                    </option>
                    {[...serviceLinks, ...productLinks].map((option) => (
                      <option key={option.name} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={field}
                    name={field}
                    required
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    placeholder={
                      field === "name"
                        ? "Your name"
                        : field === "email"
                          ? "you@example.com"
                          : "+91 00000 00000"
                    }
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  />
                )}
              </motion.div>
            ))}
            <motion.div {...anim(5)} className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-[image:var(--gradient-solar)] px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Request A Quote"}
              </button>
            </motion.div>
          </div>
        </form>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <Reveal direction="zoom">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title={`${companyInfo.name} location on Google Maps`}
              src={companyInfo.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
