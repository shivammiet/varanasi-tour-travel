import Image from "next/image";
import { Star } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/data/testimonials";

export const metadata = buildMetadata({
  title: "Testimonials",
  description:
    "Read what travellers say about their Varanasi tours with Divine Yatra Tours — Ganga Aarti, sunrise boat rides, Sarnath, Ayodhya, and more.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Traveller Stories"
        title="Testimonials"
        description="Real experiences from travellers who walked the ghats with us."
        image="/images/boat-ride.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7"
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

      <ContactCTA />
    </>
  );
}
