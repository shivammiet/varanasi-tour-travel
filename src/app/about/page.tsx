import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Divine Yatra Tours — a dedicated travel team offering curated, guide-led tours of the sacred cities of Kashi (Varanasi), Ayodhya, and Prayagraj.",
  path: "/about",
});

const values = [
  {
    title: "Rooted in Sacred Lands",
    description:
      "Our team operates locally across Varanasi, Ayodhya, and Prayagraj. We plan tours the way we'd plan a visit for our own family — embracing the spiritual rhythm of these holy cities, not a fixed script.",
  },
  {
    title: "No Middlemen",
    description:
      "You talk directly to the people running your tour, over WhatsApp or a phone call. No call centres, no third-party booking portals.",
  },
  {
    title: "Respect for Ritual",
    description:
      "The traditions of Kashi, the devotion in Ayodhya, and the sacred Sangam in Prayagraj are revered by millions. We guide travellers to observe respectfully, with deep context.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Divine Yatra Tours"
        description="A local team dedicated to showing you the true spiritual essence of Kashi, Ayodhya, and Prayagraj."
        image="/images/CHATGPT2.png" 
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Connecting You to the Heart of Spiritual India"
            />
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              Divine Yatra Tours began with a simple idea: travellers visiting our sacred cities deserve guides who actually know the region inside out. Whether it's finding the best light at a Varanasi ghat at sunrise, navigating the profound devotion at Ayodhya's Ram Janmabhoomi, or experiencing the spiritual magnitude of the Triveni Sangam in Prayagraj, we bring local expertise to every journey.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We deliberately kept things simple. There's no login, no booking engine, and no call centre. When you message us on WhatsApp, you're talking to someone who will personally be involved in planning your trip.
            </p>
          </div>
          {/* 1. PARENT CONTAINER HEIGHT INCREASED */}
<div className="relative h-[600px] overflow-hidden rounded-3xl"> 
  <Image
    src="/images/CHATGPT2.png"
    alt="Guide leading travellers through sacred spiritual destinations"
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw" // I've also updated the 'sizes' to more standard, working values for the layout described in previous context.
  />
</div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Values"
            align="center"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-black/5 bg-cream/60 p-7"
              >
                <h3 className="font-display text-xl font-semibold text-indigo">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}