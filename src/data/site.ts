// Central configuration for site-wide constants.
// Update these values to rebrand or change contact details across the entire site.

export const siteConfig = {
  name: "Kashi Yatra Tours",
  tagline: "Walk the Ghats. Witness the Eternal Flame.",
  description:
    "Kashi Yatra Tours is a premium Varanasi tour and travel company offering curated spiritual journeys, Ganga Aarti experiences, sunrise boat rides, and heritage sightseeing across Varanasi, Sarnath, Ayodhya, and Prayagraj.",
  url: "https://www.kashiyatratours.com",
  ogImage: "/images/hero.jpg",
  keywords: [
    "Varanasi tour packages",
    "Kashi Vishwanath tour",
    "Ganga Aarti booking",
    "Varanasi Sarnath tour",
    "Varanasi boat ride",
    "Varanasi travel agency",
    "Banaras tour guide",
    "Varanasi Ayodhya Prayagraj tour",
  ],
  contact: {
    phone: "+91 9118958565",
    phoneRaw: "+919118958565",
    whatsapp: "9118958565",
    email: "shivamwalther@gmail.com",
    address: "D-12/45, Near Dashashwamedh Ghat, Varanasi, Uttar Pradesh 221001, India",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.994!2d83.0068!3d25.3109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzM5LjYiTiA4M8KwMDAnMjQuNSJF!5e0!3m2!1sen!2sin!4v1620000000000",
    mapsLink: "https://maps.google.com/?q=Dashashwamedh+Ghat+Varanasi",
  },
  social: {
    instagram: "https://instagram.com/kashiyatratours",
    facebook: "https://facebook.com/kashiyatratours",
    youtube: "https://youtube.com/@kashiyatratours",
  },
  hours: "Available daily, 6:00 AM – 10:00 PM IST",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${siteConfig.contact.phoneRaw}`;
}

export function mailLink(subject?: string) {
  const base = `mailto:${siteConfig.contact.email}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}
