import Image from "next/image";
import { Clock, Sunrise } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { attractions } from "@/data/attractions";

export const metadata = buildMetadata({
  title: "Places to Visit in Varanasi, Ayodhya & Prayagraj",
  description:
    "Explore Kashi Vishwanath Temple, Ram Janmabhoomi in Ayodhya, Triveni Sangam in Prayagraj, and more divine destinations across these sacred cities.",
  path: "/places-to-visit",
});

export default function PlacesToVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Sacred Landmarks"
        title="Must-Visit Divine Destinations"
        description="From the ancient ghats of Kashi to the grand Ram Mandir in Ayodhya and the holy Triveni Sangam in Prayagraj, explore the spiritual heart of India."
        image="/images/dashashwamedh-ghat.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="space-y-16">
          {attractions.map((place, index) => (
            <div
              key={place.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-semibold text-indigo">
                  {place.name}
                </h2>
                <p className="mt-4 leading-relaxed text-ink/75">
                  {place.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-ink/60">
                  <div className="flex items-center gap-2">
                    <Sunrise className="h-4 w-4 text-saffron-dark" />
                    Best time: {place.bestTimeToVisit}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-saffron-dark" />
                    {place.timeNeeded}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}