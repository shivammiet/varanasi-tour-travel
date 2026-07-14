import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — how we handle information shared when you contact us about Varanasi tours.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        image="/images/varanasi-city.jpg"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="max-w-3xl">
          <div className="prose-content space-y-8 text-ink/80">
            <p className="text-sm text-ink/50">Last updated: July 2026</p>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed">
                {siteConfig.name} ("we," "us," or "our") operates this
                website as an informational and contact platform for Varanasi
                tour and travel services. This website does not have a
                backend database, user accounts, or online booking system.
                All bookings and enquiries are handled directly through
                WhatsApp, phone calls, or email.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Information We Collect
              </h2>
              <p className="mt-3 leading-relaxed">
                Because this website has no forms that submit to a server, we
                do not automatically collect or store personal information
                through the site itself. When you choose to contact us via
                WhatsApp, phone, or email, any information you share — such
                as your name, travel dates, or group size — is received
                directly on that platform (WhatsApp, your phone's dialer, or
                your email provider) and is subject to that platform's own
                privacy practices.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                How We Use Your Information
              </h2>
              <p className="mt-3 leading-relaxed">
                Any information you share with us over WhatsApp, phone, or
                email is used solely to plan, confirm, and deliver the tour
                or service you have enquired about. We do not sell or rent
                your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Cookies & Analytics
              </h2>
              <p className="mt-3 leading-relaxed">
                This website may use standard, privacy-respecting analytics
                to understand how visitors use the site (e.g. which pages are
                viewed) in order to improve content. No personally
                identifiable information is collected through analytics.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Third-Party Links
              </h2>
              <p className="mt-3 leading-relaxed">
                Our site links to third-party platforms such as WhatsApp,
                Google Maps, Instagram, Facebook, and YouTube. We are not
                responsible for the privacy practices of these external
                platforms and encourage you to review their respective
                privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Contact Us
              </h2>
              <p className="mt-3 leading-relaxed">
                If you have questions about this Privacy Policy, please reach
                us at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-saffron-dark underline">
                  {siteConfig.contact.email}
                </a>{" "}
                or {siteConfig.contact.phone}.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
