import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-gold-light" : "text-saffron-dark"
          )}
        >
          <span
            className={clsx(
              "h-px w-6",
              light ? "bg-gold-light" : "bg-saffron"
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl",
          light ? "text-white" : "text-indigo"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/80" : "text-ink/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
