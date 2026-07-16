import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { ContactCards } from "@/components/contact/ContactCards";
import { QuickMessageForm } from "@/components/contact/QuickMessageForm";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Divine Yatra Tours via WhatsApp, phone, or email to plan your Varanasi tour. Located near Dashashwamedh Ghat, Varanasi.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="No booking portal, no login — just message us and we'll take it from there."
        image="/images/kashi-vishwanath.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <ContactCards />

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-7">
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Send a Quick Message
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Fill this in and it opens directly in WhatsApp or your email
                app — nothing is stored on our servers.
              </p>
              <div className="mt-6">
                <QuickMessageForm />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/5">
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                title="Our location on Google Maps"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
