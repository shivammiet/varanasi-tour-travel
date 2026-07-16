// Central configuration for site-wide constants.
// Update these values to rebrand or change contact details across the entire site.

export const siteConfig = {
  name: "Divine Yatra Tours",
  tagline: "Walk the Ghats. Witness the Eternal Flame.",
  description:
 "Divine Yatra Tours is a premium travel agency offering curated spiritual journeys across India's holiest destinations. We specialize in seamless, immersive experiences—from the divine Ganga Aarti and sunrise boat rides in Varanasi to heritage sightseeing across Sarnath, Ayodhya, and Prayagraj.",
   url:  "https://www.divineyatratours.com",
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
    instagram: "https://instagram.com/divineyatratours", 
    facebook: "https://facebook.com/divineyatratours",   
    youtube: "https://youtube.com/@divineyatratours",    
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