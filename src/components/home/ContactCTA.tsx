import { MessageCircle, PhoneCall, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { whatsappLink, telLink, mailLink } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-indigo py-20 sm:py-28">
      <div className="absolute inset-0 bg-ripple-texture opacity-20" />
      <Container className="relative text-center">
        <FlameIcon className="mx-auto h-10 w-10 text-saffron" />
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
          Ready to Experience the Ghats of Kashi?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Tell us your travel dates and group size on WhatsApp, and we'll plan
          the rest — from pickup to Aarti seating.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button
            href={whatsappLink("Namaste! I'd like to plan a Varanasi tour.")}
            target="_blank"
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Book on WhatsApp
          </Button>
          <Button
            href={telLink()}
            variant="outline"
            className="!bg-white/10 !text-white !border-white/30 hover:!border-saffron hover:!text-saffron-light"
            icon={<PhoneCall className="h-4 w-4" />}
          >
            Call Now
          </Button>
          <Button
            href={mailLink("Varanasi Tour Enquiry")}
            variant="ghost"
            className="!text-white"
            icon={<Mail className="h-4 w-4" />}
          >
            Email Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
