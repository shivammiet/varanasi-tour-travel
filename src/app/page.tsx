import { Hero } from "@/components/home/Hero";
import { PopularPackages } from "@/components/home/PopularPackages";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutVaranasi } from "@/components/home/AboutVaranasi";
import { TopAttractions } from "@/components/home/TopAttractions";
import { Reviews } from "@/components/home/Reviews";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd } from "@/lib/jsonld";
import { faqs } from "@/data/faq";

export const metadata = buildMetadata({
  title: "Kashi Yatra Tours | Premium Varanasi Tour & Travel Packages",
  description:
    "Book Varanasi tour packages for Ganga Aarti, Kashi Vishwanath Temple, Sarnath, sunrise boat rides, and more. Simple WhatsApp booking, no login required.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <Hero />
      <PopularPackages />
      <WhyChooseUs />
      <AboutVaranasi />
      <TopAttractions />
      <Reviews />
      <FAQ />
      <ContactCTA />
    </>
  );
}
