import { Attraction } from "@/types";

export const attractions: Attraction[] = [
  {
    slug: "kashi-vishwanath-temple",
    name: "Kashi Vishwanath Temple",
    image: "/images/kashi-vishwanath.jpg",
    shortDescription: "One of the twelve Jyotirlingas, dedicated to Lord Shiva.",
    description:
      "The golden-spired Kashi Vishwanath Temple stands on the western bank of the Ganga and is among the holiest Shiva shrines in India. Rebuilt in its current form in 1780, the temple's inner sanctum houses the Vishwanath Jyotirlinga, drawing pilgrims from across the country every day.",
    bestTimeToVisit: "Early morning (Mangala Aarti) or late evening",
    timeNeeded: "1–2 hours",
  },
  {
    slug: "ganga-aarti-dashashwamedh-ghat",
    name: "Ganga Aarti at Dashashwamedh Ghat",
    image: "/images/ganga-aarti.jpg",
    shortDescription: "The nightly fire ritual offered to the river Ganga.",
    description:
      "Every evening at sunset, priests at Dashashwamedh Ghat perform a synchronised Aarti with multi-tiered brass lamps, conch shells, and chanting, honouring the Ganga as a living goddess. It is one of the most photographed and spiritually charged moments in Varanasi.",
    bestTimeToVisit: "Sunset, arrive 45 minutes early for a good spot",
    timeNeeded: "1 hour",
  },
  {
    slug: "ram-janmabhoomi-ayodhya",
    name: "Ram Janmabhoomi, Ayodhya",
    // Fix: Naya aur clean naam jisme capital/small letter ka koi chakkar nahi
    image: "/images/ayodhya-ram-mandir.jpg", 
    shortDescription: "The sacred birthplace of Lord Ram and the grand Ram Mandir.",
    description:
      "Ayodhya is the spiritual heart of the Ramayana. The newly built grand Ram Mandir at the Ram Janmabhoomi site attracts millions of devotees. The city is also famous for Hanuman Garhi and the serene evening aarti at the Saryu River ghats.",
    bestTimeToVisit: "Early morning for darshan",
    timeNeeded: "3–4 hours",
  },
  {
    slug: "triveni-sangam-prayagraj",
    name: "Triveni Sangam, Prayagraj",
    image: "/images/mobile5.jpg",
    shortDescription: "The holy confluence of the Ganga, Yamuna, and Saraswati rivers.",
    description:
      "Located in Prayagraj, the Triveni Sangam is one of the most sacred pilgrimage destinations in Hinduism. Taking a holy dip here is believed to wash away sins. You can take a boat ride to the exact point where the differently colored waters of the rivers meet.",
    bestTimeToVisit: "Early morning",
    timeNeeded: "2–3 hours",
  },
  {
    slug: "assi-ghat",
    name: "Assi Ghat",
    image: "/images/sunrise-ghat.jpg",
    shortDescription: "The southernmost ghat, popular for sunrise yoga and boat rides.",
    description:
      "Located at the confluence of the Assi and Ganga rivers, this ghat is where many boat rides begin. Mornings here are calm and unhurried, with locals bathing, priests performing rituals, and a relaxed café culture along the adjoining lanes.",
    bestTimeToVisit: "Sunrise",
    timeNeeded: "1 hour",
  },
  
  {
    slug: "ramnagar-fort",
    name: "Ramnagar Fort",
    image: "/images/dashashwamedh-ghat.jpg",
    shortDescription: "A 17th-century sandstone fort on the eastern bank of the Ganga.",
    description:
      "Home to the erstwhile royal family of Varanasi, this fort houses a museum of vintage cars, weaponry, and royal palanquins. Its riverside courtyards offer a quieter, more historical counterpoint to the ghats.",
    bestTimeToVisit: "Afternoon",
    timeNeeded: "1–2 hours",
  },
  {
    slug: "sunrise-boat-ride",
    name: "Sunrise Boat Ride",
    image: "/images/boat-ride.jpg",
    shortDescription: "A wooden boat ride past the ghats as the city wakes.",
    description:
      "A ride on the Ganga at first light is often described as the defining Varanasi experience — watching the ghats come alive with prayer, bathing, and the soft light of a rising sun over the river.",
    bestTimeToVisit: "30 minutes before sunrise",
    timeNeeded: "1 hour",
  },
  
  
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}