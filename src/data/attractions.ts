import { Attraction } from "@/types";

export const attractions: Attraction[] = [
  {
    slug: "kashi-vishwanath-temple",
    name: "Shri Kashi Vishwanath Temple",
    image: "/images/kashi5.jpg", // Update with your actual image path
    shortDescription: "One of the twelve Jyotirlingas, the spiritual heart of Varanasi.",
    description: "Dedicated to Lord Shiva, this ancient temple is the most sacred destination in Varanasi. Rebuilt multiple times throughout history, its current structure features a stunning gold-plated spire. A visit here is considered a must for any Hindu pilgrim.",
    bestTimeToVisit: "Early morning (Mangala Aarti) or late evening",
    timeNeeded: "2-3 Hours",
  },
  {
    slug: "dashashwamedh-ghat-aarti",
    name: "Dashashwamedh Ghat & Ganga Aarti",
    image: "/images/dashashwamedh-ghat.jpg",
    shortDescription: "The main ghat in Varanasi, famous for its mesmerizing evening fire ritual.",
    description: "Legend has it that Lord Brahma created this ghat to welcome Lord Shiva. Every evening, it hosts the grand Ganga Aarti, a highly choreographed ritual of fire, chanting, and incense that draws thousands of devotees and travelers.",
    bestTimeToVisit: "Sunset (around 6:00 PM)",
    timeNeeded: "1-2 Hours",
  },
  {
    slug: "ram-janmabhoomi",
    name: "Shri Ram Janmabhoomi Mandir",
    image: "/images/avatars/ayodha.jpg",
    shortDescription: "The grand temple built at the sacred birthplace of Lord Ram in Ayodhya.",
    description: "A monumental symbol of faith, this magnificent temple complex is dedicated to Lord Ram. Featuring intricate Nagara-style architecture, beautifully carved sandstone, and a deeply peaceful atmosphere, it is the crown jewel of Ayodhya.",
    bestTimeToVisit: "Morning to afternoon",
    timeNeeded: "2-4 Hours",
  },
  {
    slug: "hanuman-garhi",
    name: "Hanuman Garhi",
    image: "/images/ChatGPT2.png", // Update with your actual image path
    shortDescription: "A 10th-century temple dedicated to Lord Hanuman in Ayodhya.",
    description: "Approached by a flight of 76 steps, this massive fort-like temple is a key pilgrimage site. Custom dictates that devotees must visit Hanuman Garhi to seek Lord Hanuman's permission before proceeding to the Ram Janmabhoomi.",
    bestTimeToVisit: "Early morning",
    timeNeeded: "1-2 Hours",
  },
  {
    slug: "triveni-sangam",
    name: "Triveni Sangam",
    image: "/images/pryagg.png",
    shortDescription: "The holy confluence of three sacred rivers in Prayagraj.",
    description: "The meeting point of the Ganga, the Yamuna, and the mythical Saraswati rivers. Taking a holy dip here is believed to wash away sins. It is also the site of the legendary Kumbh Mela, the largest religious gathering on Earth.",
    bestTimeToVisit: "Early morning at sunrise",
    timeNeeded: "2-3 Hours",
  },
  {
    slug: "sarnath",
    name: "Sarnath Buddhist Complex",
    image: "/images/varanasi-city.jpg", // Update with your actual image path
    shortDescription: "The historical site where Lord Buddha gave his first sermon.",
    description: "Located just outside Varanasi, Sarnath is a peaceful escape featuring the massive Dhamek Stupa, ancient ruins, and a museum housing the famous Ashoka Pillar. It is one of the four most important Buddhist pilgrimage sites in the world.",
    bestTimeToVisit: "Late afternoon",
    timeNeeded: "2-3 Hours",
  }
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}