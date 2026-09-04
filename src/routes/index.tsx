import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { About } from "@/components/site/About";
import { Sectors } from "@/components/site/Sectors";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { companyInfo } from "@/config/company";

const title = "Solar Company in Dehradun | Surya Kiran Solutions";
const description =
  "Surya Kiran Solutions offers solar panel installation, rooftop solar, hybrid inverters and solar energy solutions in Dehradun, Uttarakhand. Call +91 70171 73974.";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Solar Company in Dehradun, Solar Panel Installation in Dehradun, Solar Energy Solutions in Dehradun, Rooftop Solar in Dehradun, Solar Products in Uttarakhand",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: companyInfo.name,
          description,
          telephone: companyInfo.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: companyInfo.street,
            addressLocality: companyInfo.city,
            addressRegion: companyInfo.state,
            postalCode: companyInfo.postalCode,
            addressCountry: companyInfo.country,
          },
          areaServed: "Dehradun, Uttarakhand",
        }),
      },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Sectors />
        <Products />
        <Process />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" />
    </div>
  );
}
