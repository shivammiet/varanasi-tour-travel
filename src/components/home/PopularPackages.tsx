import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/packages/PackageCard";
import { getFeaturedPackages } from "@/data/packages";

export function PopularPackages() {
  const featured = getFeaturedPackages();

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Handpicked Journeys"
            title="Popular Tour Packages"
            description="From a single day of temple darshan to multi-city pilgrimages, each itinerary is built around the real rhythm of Varanasi's ghats."
          />
          <Button href="/packages" variant="outline" className="shrink-0">
            View All Packages
          </Button>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
}
