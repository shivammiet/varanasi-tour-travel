import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { attractions } from "@/data/attractions";

export function TopAttractions() {
  const featured = attractions.slice(0, 6);

  return (
    <section className="bg-indigo py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Must-See Kashi"
            title="Top Attractions in Varanasi"
            light
          />
          <Link
            href="/places-to-visit"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold-light hover:text-saffron"
          >
            See all places <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((place) => (
            <Link
              key={place.slug}
              href="/places-to-visit"
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <Image
                src={place.image}
                alt={place.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-semibold text-white">
                  {place.name}
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  {place.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
