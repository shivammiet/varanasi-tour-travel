import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { ContactCTA } from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Divine Yatra Tours — a Varanasi-based travel team offering curated, guide-led tours of the ghats, temples, and spiritual heart of Kashi.",
  path: "/about",
});

const values = [
  {
    title: "Rooted in Kashi",
    description:
      "Our team lives and works in Varanasi. We plan tours the way we'd plan a visit for our own family — around the rhythm of the ghats, not a fixed script.",
  },
  {
    title: "No Middlemen",
    description:
      "You talk directly to the people running your tour, over WhatsApp or a phone call. No call centres, no third-party booking portals.",
  },
  {
    title: "Respect for Ritual",
    description:
      "Varanasi's rituals are sacred to millions. We guide travellers to observe respectfully, with context, rather than treating the ghats as a photo backdrop.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Divine Yatra Tours"
        description="A local team dedicated to showing you Varanasi the way it deserves to be seen."
        image="/images/varanasi-city.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Small Team That Knows Every Ghat by Name"
            />
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              Divine Yatra Tours began with a simple idea: travellers visiting
              Varanasi deserve guides who actually live here — who know which
              ghat gets the best light at sunrise, which lane leads to the
              best kachori shop, and how to move respectfully through a
              cremation ghat without disrupting a family's grief.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We deliberately kept things simple. There's no login, no
              booking engine, and no call centre. When you message us on
              WhatsApp, you're talking to someone who will personally be
              involved in planning your trip.
            </p>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="/images/dashashwamedh-ghat.jpg"
              alt="Guide leading travellers through Varanasi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
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
