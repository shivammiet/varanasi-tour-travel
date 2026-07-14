import { MessageCircle, PhoneCall, Mail, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TourPackage } from "@/types";
import { whatsappLink, telLink, mailLink } from "@/data/site";

export function BookingCard({ pkg }: { pkg: TourPackage }) {
  return (
    <div className="sticky top-28 rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
      <p className="text-xs uppercase tracking-wide text-ink/50">Starting from</p>
      <p className="mt-1 font-display text-4xl font-bold text-indigo">
        ₹{pkg.startingPrice.toLocaleString("en-IN")}
        <span className="ml-1 text-sm font-normal text-ink/50">
          {pkg.priceUnit}
        </span>
      </p>

      <div className="mt-5 space-y-3 border-y border-black/10 py-5 text-sm text-ink/70">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-saffron-dark" />
          {pkg.groupSize}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-saffron-dark" />
          {pkg.pickupPoint}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Button
          href={whatsappLink(`Namaste! I'd like to book the "${pkg.title}" package.`)}
          target="_blank"
          variant="whatsapp"
          className="w-full"
          icon={<MessageCircle className="h-4 w-4" />}
        >
          Book on WhatsApp
        </Button>
        <Button
          href={telLink()}
          variant="outline"
          className="w-full"
          icon={<PhoneCall className="h-4 w-4" />}
        >
          Call Now
        </Button>
        <Button
          href={mailLink(`Enquiry: ${pkg.title}`)}
          variant="ghost"
          className="w-full"
          icon={<Mail className="h-4 w-4" />}
        >
          Email Inquiry
        </Button>
      </div>
    </div>
  );
}
