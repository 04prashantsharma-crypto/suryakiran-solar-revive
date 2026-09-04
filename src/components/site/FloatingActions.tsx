import { MessageCircle, Phone } from "lucide-react";
import { companyInfo } from "@/config/company";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={companyInfo.phoneLink}
        aria-label={`Call ${companyInfo.phone}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-solar)] text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
