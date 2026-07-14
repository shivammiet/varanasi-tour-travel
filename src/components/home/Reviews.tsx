import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Reviews() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Traveller Stories"
          title="What Our Guests Say"
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {featured.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-black/5 bg-cream/60 p-7"
            >
              <div className="flex gap-0.5 text-saffron">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-saffron" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                “{t.review}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-black/10 pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo">{t.name}</p>
                  <p className="text-xs text-ink/50">
                    {t.location} · {t.tourTaken}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
