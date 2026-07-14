import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for booking Varanasi tour packages with ${siteConfig.name}.`,
  path: "/terms-and-conditions",
});

const sections = [
  {
    title: "Booking & Confirmation",
    body: "Tours featured on this website are booked directly through WhatsApp, phone, or email. A booking is considered confirmed only once our team has verbally or in writing confirmed your dates, group size, and any advance payment terms.",
  },
  {
    title: "Pricing",
    body: "Prices listed on this website are starting prices per person and may vary based on group size, season, hotel category, and customisation. Final pricing will always be confirmed with you before your booking is finalised.",
  },
  {
    title: "Payments",
    body: "We do not process payments through this website. Any advance payment or balance payment terms will be communicated directly by our team via WhatsApp, phone, or email, using methods such as UPI, bank transfer, or cash.",
  },
  {
    title: "Cancellations & Rescheduling",
    body: "Cancellation and rescheduling terms depend on the specific package and how close to the tour date the change is requested. Please discuss cancellation terms with our team at the time of booking.",
  },
  {
    title: "Traveller Conduct",
    body: "Varanasi's ghats and temples are active sites of religious practice. Travellers are expected to dress modestly, follow guide instructions, and behave respectfully at all times, particularly at cremation ghats and inside temples.",
  },
  {
    title: "Liability",
    body: `${siteConfig.name} acts as a facilitator of local tours, transport, and guiding services. While we take care in selecting reliable vehicles, guides, and partner hotels, we are not liable for delays, losses, or incidents arising from circumstances beyond our reasonable control, including weather, traffic, or third-party service providers.`,
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time to reflect changes in our services. Please review this page periodically for updates.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        image="/images/kashi-vishwanath.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="max-w-3xl">
          <p className="text-sm text-ink/50">Last updated: July 2026</p>

          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl font-semibold text-indigo">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink/80">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-black/10 pt-8">
            <h2 className="font-display text-2xl font-semibold text-indigo">
              Questions?
            </h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              For any questions about these terms, contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-saffron-dark underline">
                {siteConfig.contact.email}
              </a>{" "}
              or {siteConfig.contact.phone}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
