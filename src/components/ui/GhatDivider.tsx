import clsx from "clsx";

/**
 * GhatDivider — the site's signature structural device.
 * Renders a terraced, stepped silhouette that echoes the stone steps
 * (ghats) leading down to the Ganga, used to transition between
 * sections instead of a plain straight edge.
 */
export function GhatDivider({
  flip = false,
  fromColor = "#FFF9F2",
  toColor = "#0B3552",
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}) {
  return (
    <div
      className={clsx("ghat-divider", flip && "rotate-180")}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path
          d="M0,40 L0,26 L100,26 L100,18 L200,18 L200,10 L300,10 L300,4 L400,4 L400,0 L800,0 L800,4 L900,4 L900,10 L1000,10 L1000,18 L1100,18 L1100,26 L1200,26 L1200,40 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
