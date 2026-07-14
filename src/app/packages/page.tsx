import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { PackageCard } from "@/components/packages/PackageCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { packages } from "@/data/packages";

export const metadata = buildMetadata({
  title: "Varanasi Tour Packages",
  description:
    "Browse Varanasi tour packages including 1-day and 2-day tours, Varanasi + Sarnath, Ayodhya, and Prayagraj combos, the Spiritual Kashi Yatra, and the Sunrise Boat Ride Experience.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Choose Your Journey"
        title="Varanasi Tour Packages"
        description="Every package includes local guiding and clear WhatsApp support — pick the pace that suits your trip."
        image="/images/aarti-lamps.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
