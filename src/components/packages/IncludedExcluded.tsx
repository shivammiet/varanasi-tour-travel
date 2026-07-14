import { Check, X } from "lucide-react";

export function IncludedExcluded({
  included,
  excluded,
}: {
  included: string[];
  excluded: string[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-indigo">
          What's Included
        </h3>
        <ul className="mt-4 space-y-3">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-black/5 bg-white p-6">
        <h3 className="font-display text-lg font-semibold text-indigo">
          What's Excluded
        </h3>
        <ul className="mt-4 space-y-3">
          {excluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
