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
    slug: "sarnath",
    name: "Sarnath",
    image: "/images/sarnath.jpg",
    shortDescription: "The site of Buddha's first sermon, 10 km from Varanasi.",
    description:
      "Sarnath is where Gautama Buddha delivered his first teaching after attaining enlightenment. The site is home to the towering Dhamek Stupa, the ruins of ancient monasteries, and a museum housing the Lion Capital of Ashoka, India's national emblem.",
    bestTimeToVisit: "Morning, to avoid the midday heat",
    timeNeeded: "2–3 hours",
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
