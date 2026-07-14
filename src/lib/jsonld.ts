import { siteConfig } from "@/data/site";
import { TourPackage } from "@/types";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    image: siteConfig.ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Dashashwamedh Ghat",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      postalCode: "221001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.3109,
      longitude: 83.0107,
    },
    areaServed: "Varanasi",
    priceRange: "₹₹",
  };
}

export function tourPackageJsonLd(pkg: TourPackage) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: "Pilgrim, Sightseer",
    itinerary: pkg.itinerary.map((stop) => ({
      "@type": "TouristAttraction",
      name: stop.title,
      description: stop.description,
    })),
    offers: {
      "@type": "Offer",
      price: pkg.startingPrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
