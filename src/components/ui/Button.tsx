import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "outline" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-saffron text-white hover:bg-saffron-dark shadow-diya",
  secondary:
    "bg-indigo text-white hover:bg-indigo-dark",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1EBE5A]",
  outline:
    "border border-indigo/20 text-indigo hover:border-saffron hover:text-saffron-dark bg-white",
  ghost: "text-indigo hover:text-saffron-dark",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap";

export function Button({
  children,
  variant = "primary",
  className,
  icon,
  href,
  onClick,
  type = "button",
  target,
}: BaseProps & {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
}) {
  const classes = clsx(baseClasses, variantStyles[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
