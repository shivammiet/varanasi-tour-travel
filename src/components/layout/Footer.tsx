import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { siteConfig, telLink, mailLink } from "@/data/site";

const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Places to Visit", href: "/places-to-visit" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-indigo text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <FlameIcon className="h-6 w-6 text-saffron" />
            <span className="font-display text-xl font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2 hover:border-saffron hover:text-saffron"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2 hover:border-saffron hover:text-saffron"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full border border-white/20 p-2 hover:border-saffron hover:text-saffron"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold-light">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-saffron">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold-light">Legal</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-saffron">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-gold-light">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              {siteConfig.contact.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-saffron" />
              <a href={telLink()} className="hover:text-saffron">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-saffron" />
              <a href={mailLink()} className="hover:text-saffron">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Made with reverence for the ghats of Kashi.</p>
        </Container>
      </div>
    </footer>
  );
}
