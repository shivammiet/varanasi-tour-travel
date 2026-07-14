import clsx from "clsx";

export function FlameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("flame-glow", className)}
      aria-hidden="true"
    >
      <path
        d="M12 2c1.2 2.4-0.6 3.6-1.4 5C9.4 8.6 8 10.4 8 13a4 4 0 0 0 8 0c0-1.6-0.8-2.6-1.4-3.6-0.3 1-1 1.6-1.8 1.6-1 0-1.6-0.8-1.4-1.8 0.3-1.4 1.6-2.6 1.6-4.6C13 3.2 12.6 2.5 12 2Z"
        fill="currentColor"
        className="animate-flicker"
      />
    </svg>
  );
}
