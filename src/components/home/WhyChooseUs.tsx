import { Compass, ShieldCheck, Users, MessageCircleHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Compass,
    title: "Local, On-Ground Guides",
    description:
      "Every guide has grown up in Varanasi's lanes and ghats — you get history, ritual context, and honest local recommendations, not a script.",
  },
  {
    icon: MessageCircleHeart,
    title: "Book Without the Hassle",
    description:
      "No accounts, no payment gateways to fight with. Message us on WhatsApp, confirm your dates, and you're booked.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Vehicles & Drivers",
    description:
      "All pickups run on verified AC vehicles with drivers who know the city's traffic patterns, so you're never late for the Aarti.",
  },
  {
    icon: Users,
    title: "Small, Attentive Groups",
    description:
      "We keep group sizes manageable so every traveller gets time with the guide, not just a wave from the back of a bus.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Travel With Us"
          title="Planned Like Locals, Delivered Like Family"
          align="center"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-black/5 bg-cream/60 p-7 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/15 text-saffron-dark">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-indigo">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
