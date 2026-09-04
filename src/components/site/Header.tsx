import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import logo from "@/assets/sks-logo.png.asset.json";
import { companyInfo, productLinks, serviceLinks } from "@/config/company";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products", children: productLinks },
  { name: "Services", href: "#services", children: serviceLinks },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#portfolio" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-[var(--shadow-soft)] backdrop-blur"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Surya Kiran Solutions logo"
            className="h-12 w-auto shrink-0 object-contain sm:h-14"
            width={160}
            height={160}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold text-primary sm:text-base">
              {companyInfo.name}
            </span>
            <span className="hidden text-[11px] tracking-wide text-muted-foreground sm:block">
              {companyInfo.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 rounded-xl border border-border bg-card p-2 opacity-0 shadow-[var(--shadow-lift)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ),
          )}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-solar)] px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Let's Talk
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="max-h-[75vh] space-y-1 overflow-y-auto px-4 py-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(openGroup === item.name ? null : item.name)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openGroup === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openGroup === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground"
                            >
                              {child.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold"
                  >
                    {item.name}
                  </a>
                ),
              )}
              <div className="grid gap-2 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-[image:var(--gradient-solar)] px-5 py-3 text-center text-sm font-bold text-accent-foreground"
                >
                  Let's Talk
                </a>
                <a
                  href={companyInfo.phoneLink}
                  className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-primary"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
