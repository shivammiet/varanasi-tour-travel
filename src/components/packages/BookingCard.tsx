import { MessageCircle, PhoneCall, Mail, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TourPackage } from "@/types";
import { whatsappLink, telLink, mailLink } from "@/data/site";

export function BookingCard({ pkg }: { pkg: TourPackage }) {
  // Dynamically change the WhatsApp message based on the pricing strategy
  const waMessage = pkg.startingPrice === 0
    ? `Namaste! I'd like to book the "${pkg.title}" package. Please share the 10% discounted price!`
    : `Namaste! I'd like to book the "${pkg.title}" package.`;

  return (
    <div className="sticky top-28 rounded-2xl border border-black/5 bg-white p-6 shadow-lg">
      
      {/* Dynamic Pricing Header */}
      {pkg.startingPrice === 0 ? (
        <div className="mb-2">
          <span className="mb-2 inline-flex animate-pulse items-center rounded bg-green-100 px-3 py-1 text-xs font-extrabold text-green-800 border border-green-200">
            🎉 FLAT 10% OFF!
          </span>
          <p className="font-display text-3xl font-bold leading-tight text-indigo">
            Unlock Best Price
          </p>
          <p className="mt-1 text-sm text-ink/70">
            Message us on WhatsApp to get the lowest guaranteed rate directly.
          </p>
        </div>
      ) : (
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/50">Starting from</p>
          <p className="mt-1 font-display text-4xl font-bold text-indigo">
            ₹{pkg.startingPrice.toLocaleString("en-IN")}
            <span className="ml-1 text-sm font-normal text-ink/50">
              {pkg.priceUnit}
            </span>
          </p>
        </div>
      )}

      {/* Package Details */}
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

      {/* Action Buttons */}
      <div className="mt-5 flex flex-col gap-3">
        <Button
          href={whatsappLink(waMessage)}
          target="_blank"
          variant="whatsapp"
          className="w-full"
          icon={<MessageCircle className="h-4 w-4" />}
        >
          {pkg.startingPrice === 0 ? "Get Price on WhatsApp" : "Book on WhatsApp"}
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