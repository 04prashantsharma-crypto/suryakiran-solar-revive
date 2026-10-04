import { MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/sks-logo-new.png.asset.json";
import { Reveal } from "@/components/motion/Reveal";
import { companyInfo } from "@/config/company";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

const footerProducts = [
  "Solar Panels",
  "Hybrid Inverter",
  "Lithium Inbuilt",
  "Solar MPPT",
  "Solar MPPT PCU",
];

export function Footer() {
  return (
    <footer className="bg-deep px-4 pt-16 pb-8 text-primary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                src={logo.url}
                alt="Surya Kiran Solutions logo"
                loading="lazy"
                width={200}
                height={200}
                className="h-20 w-auto object-contain"
              />
              <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
                Solar energy solutions, products and installation services for homes, businesses and
                industries in Dehradun, Uttarakhand.
              </p>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="link-underline inline-block text-primary-foreground/75 transition-colors hover:text-solar"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Products</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {footerProducts.map((product) => (
                  <li key={product}>
                    <a
                      href="#products"
                      className="link-underline inline-block text-primary-foreground/75 transition-colors hover:text-solar"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Get In Touch</h3>
              <ul className="mt-4 space-y-4 text-sm text-primary-foreground/80">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-solar" />
                  <address className="not-italic">
                    {companyInfo.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-solar transition-transform duration-300 hover:scale-110" />
                  <a href={companyInfo.phoneLink} className="link-underline">
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-solar" />
                  <a
                    href={companyInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-xs text-primary-foreground/70">
          © 2026 {companyInfo.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
