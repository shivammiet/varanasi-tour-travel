import Image from "next/image";
import Link from "next/link";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { TourPackage } from "@/types";
import { whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo backdrop-blur">
          {pkg.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-saffron-dark">
          <Clock className="h-3.5 w-3.5" />
          {pkg.duration}
        </div>

        <h3 className="mt-2 font-display text-2xl font-semibold text-indigo">
          {pkg.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
          {pkg.summary}
        </p>

        {/* Dynamic Pricing Section */}
        {pkg.startingPrice === 0 ? (
          <div className="mt-4 flex flex-col items-start gap-1">
            <span className="inline-flex animate-pulse items-center rounded bg-green-100 px-2 py-0.5 text-xs font-extrabold text-green-800 border border-green-200">
              🔥 FLAT 10% OFF!
            </span>
            <span className="font-display text-lg font-bold text-indigo">
              
            </span>
          </div>
        ) : (
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-xs text-ink/50">Starting from</span>
            <span className="font-display text-2xl font-bold text-indigo">
              ₹{pkg.startingPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-xs text-ink/50">{pkg.priceUnit}</span>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button
            href={`/packages/${pkg.slug}`}
            variant="outline"
            className="flex-1 !px-4"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            View Details
          </Button>
          <Button
            href={whatsappLink(`Namaste! I'm interested in the "${pkg.title}" package. Please share the discounted price!`)}
            target="_blank"
            variant="whatsapp"
            className="flex-1 !px-4"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}