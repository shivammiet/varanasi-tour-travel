"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { Button } from "@/components/ui/Button";
import { siteConfig, telLink } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Places to Visit", href: "/places-to-visit" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <FlameIcon className="h-7 w-7 text-saffron" />
          <span className="font-display text-xl font-bold text-indigo sm:text-2xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-saffron-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm font-semibold text-indigo hover:text-saffron-dark"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <Button href="/packages" variant="primary">
            View Packages
          </Button>
        </div>

        <button
          className="p-2 text-indigo lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-saffron/10 hover:text-saffron-dark"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={telLink()}
              className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-indigo"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
