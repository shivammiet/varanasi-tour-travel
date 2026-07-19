import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Photo Gallery | Divine Yatra Tours",
  description:
    "A visual journey through India's holiest cities — featuring the Ganga Aarti in Varanasi, Ram Janmabhoomi in Ayodhya, and Triveni Sangam in Prayagraj.",
  path: "/gallery",
  keywords: [
    "Varanasi gallery",
    "Ayodhya tour photos",
    "Prayagraj images",
    "Ganga Aarti pictures",
    "Ram Mandir Ayodhya",
    "Triveni Sangam Prayagraj",
    "Uttar Pradesh spiritual tour gallery"
  ]
});

const galleryImages = [
  { src: "/images/ganga-aarti.jpg", alt: "Ganga Aarti at dusk in Varanasi", span: "row-span-2" },
  { src: "/images/avatars/ayodha.jpg", alt: "Shri Ram Janmabhoomi, Ayodhya" },
  { src: "/images/pryagg.png", alt: "Holy dip at Triveni Sangam, Prayagraj" },
  { src: "/images/boat-ride.jpg", alt: "Sunrise boat ride on the Ganges", span: "row-span-2" },
  { src: "/images/sarnath.jpg", alt: "Dhamek Stupa, Sarnath" },
  { src: "/images/kashi-vishwanath.jpg", alt: "Kashi Vishwanath Temple" },
  { src: "/images/ChatGPT2.png", alt: "Spiritual heritage of Ayodhya" },
  { src: "/images/varanasi-city.jpg", alt: "Old city lanes of Varanasi", span: "row-span-2" },
  { src: "/images/aarti-lamps.jpg", alt: "Diyas floating on the sacred rivers" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Journey"
        title="Gallery"
        description="Moments from the sacred ghats, ancient temples, and holy rivers that make Kashi, Ayodhya, and Prayagraj unforgettable."
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