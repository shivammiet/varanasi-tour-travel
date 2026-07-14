import { ItineraryStop } from "@/types";

export function Itinerary({ stops }: { stops: ItineraryStop[] }) {
  return (
    <div className="space-y-0">
      {stops.map((stop, index) => (
        <div key={stop.day} className="relative flex gap-5 pb-8 last:pb-0">
          {index !== stops.length - 1 && (
            <span className="absolute left-[19px] top-10 h-full w-px bg-gold/30" />
          )}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-saffron bg-white font-display text-sm font-bold text-saffron-dark">
            {stop.day}
          </div>
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-saffron-dark">
              Day {stop.day}
            </p>
            <h4 className="mt-1 font-display text-lg font-semibold text-indigo">
              {stop.title}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
              {stop.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
