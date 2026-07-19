import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages } from "@/data/packages";

export function PopularPackages() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          {/* YAHAN CHANGE KIYA HAI: Description ko teeno cities ke liye update kar diya hai */}
          <SectionHeading
            eyebrow="Handpicked Journeys"
            title="Our Tour Packages" 
            description="From a single day of temple darshan to multi-city pilgrimages, each itinerary is thoughtfully crafted to help you experience the divine essence of Kashi, Ayodhya, and Prayagraj."
          />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
}