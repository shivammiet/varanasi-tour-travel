import { MessageCircle, PhoneCall, Mail, MapPin } from "lucide-react";
import { whatsappLink, telLink, mailLink, siteConfig } from "@/data/site";

const cards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: siteConfig.contact.phone,
    // Updated WhatsApp pre-filled message
    href: whatsappLink("Namaste Divine Yatra Tours! 🙏 I am interested in planning a spiritual trip to Kashi, Ayodhya, and Prayagraj. Could you please share some details?"),
    target: "_blank",
    accent: "bg-[#25D366]",
  },
  {
    icon: PhoneCall,
    title: "Call Us",
    value: siteConfig.contact.phone,
    href: telLink(),
    accent: "bg-saffron",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.contact.email,
    // Updated Email subject line
    href: mailLink("Spiritual Tour Enquiry - Kashi, Ayodhya & Prayagraj"),
    accent: "bg-indigo",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: siteConfig.contact.address,
    href: siteConfig.contact.mapsLink,
    target: "_blank",
    accent: "bg-gold",
  },
];

export function ContactCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.href}
          target={card.target}
          rel={card.target === "_blank" ? "noopener noreferrer" : undefined}
          className="group flex flex-col items-start rounded-2xl border border-black/5 bg-white p-6 transition-shadow hover:shadow-lg"
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${card.accent}`}>
            <card.icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-display text-lg font-semibold text-indigo">
            {card.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/65">{card.value}</p>
        </a>
      ))}
    </div>
  );
}