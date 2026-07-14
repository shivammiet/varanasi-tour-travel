import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery",
  description:
    "A visual journey through Varanasi — Ganga Aarti, Kashi Vishwanath Temple, Assi Ghat, Sarnath, and sunrise boat rides.",
  path: "/gallery",
});

const galleryImages = [
  { src: "/images/ganga-aarti.jpg", alt: "Ganga Aarti at dusk", span: "row-span-2" },
  { src: "/images/kashi-vishwanath.jpg", alt: "Kashi Vishwanath Temple spire" },
  { src: "/images/sunrise-ghat.jpg", alt: "Boats along Assi Ghat" },
  { src: "/images/boat-ride.jpg", alt: "Sunrise boat ride", span: "row-span-2" },
  { src: "/images/sarnath.jpg", alt: "Dhamek Stupa, Sarnath" },
  { src: "/images/dashashwamedh-ghat.jpg", alt: "Ramnagar Fort exterior" },
  { src: "/images/aarti-night-close.jpg", alt: "Ghats along the Ganga" },
  { src: "/images/varanasi-city.jpg", alt: "Old city lanes of Varanasi", span: "row-span-2" },
  { src: "/images/aarti-lamps.jpg", alt: "Diyas floating on the Ganga" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Journey"
        title="Gallery"
        description="Moments from the ghats, temples, and river that make Varanasi unforgettable."
        image="/images/aarti-lamps.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl ${img.span ?? ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
