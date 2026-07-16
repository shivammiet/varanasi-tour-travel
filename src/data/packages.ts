import { TourPackage } from "@/types";

export const packages: TourPackage[] = [
  {
    slug: "1-day-divine-kashi-glimpse",
    title: "The 1-Day Divine Kashi Glimpse",
    shortTitle: "1-Day Express Tour",
    duration: "1 Day",
    nights: 0,
    days: 1,
    startingPrice: 0, 
    priceUnit: "",
    image: "/images/hero.jpg",
    gallery: [
      "/images/hero.jpg",
      "/images/kashi-vishwanath.jpg",
      "/images/ganga-aarti.jpg",
    ],
    category: "Day Tour",
    summary: "Zero stress express tour. 🔥 Message us on WhatsApp for the guaranteed lowest price & get a FLAT 10% OFF!",
    description:
      "Perfect for short visits, layovers, or quick weekend blessings. From the moment you arrive, your AC cab is waiting. We handle the logistics so you can focus entirely on your devotion. 💬 Reach out on WhatsApp today to claim your exclusive 10% discount and get the cheapest B2B rates directly!",
    highlights: [
      "Fast-track Kashi Vishwanath Darshan",
      "Sarnath archaeological excursion",
      "Mesmerizing Evening Ganga Aarti at Dashashwamedh Ghat",
      "Dedicated AC Cab for 12 Hours",
    ],
    included: [
      "AC Transit Room (Day use 6-8 hours)",
      "Private AC Sedan (12 hours / 80km limit)",
      "Airport/Railway Station Pick-up & Drop-off",
      "Toll taxes and parking",
    ],
    excluded: [
      "Meals and beverages",
      "Temple donation/VIP Darshan tickets",
      "Boat ride charges (payable directly)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Temples & The Grand Aarti",
        description:
          "Pickup by private AC cab. Refresh at your transit room. Visit Kashi Vishwanath Temple, followed by an afternoon trip to Sarnath. End the day with the spectacular Ganga Aarti before your drop-off.",
      },
    ],
    groupSize: "1–4 travellers",
    pickupPoint: "Varanasi Junction / Babatpur Airport",
    featured: true,
  },
  {
    slug: "2-day-kashi-heritage-escape",
    title: "The 2-Day Kashi Heritage Escape",
    shortTitle: "2-Day Value Tour",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/boat-ride.jpg",
    gallery: [
      "/images/boat-ride.jpg",
      "/images/sunrise-ghat.jpg",
      "/images/varanasi-city.jpg",
    ],
    category: "Spiritual",
    summary: "The ultimate balance of comfort and culture. 🔥 WhatsApp us to unlock the lowest budget rates + 10% extra discount!",
    description:
      "Our best-selling affordable weekend plan. Great for families and couples on a budget wanting the complete Varanasi experience. 💬 Stop searching for better prices—message us on WhatsApp right now to get the cheapest rate in the market with an instant 10% extra discount!",
    highlights: [
      "Subah-e-Banaras morning boat ride",
      "Kashi Vishwanath & Kaal Bhairav Darshan",
      "Guided heritage alley walks",
      "1-Night Comfortable AC Stay",
    ],
    included: [
      "1 Night accommodation in a Budget AC Hotel/Homestay",
      "Breakfast at the hotel",
      "Private AC Sedan for 2 days",
      "All transfers and local sightseeing",
    ],
    excluded: [
      "Lunch and Dinner",
      "Monument entry fees",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ancient Lanes & Evening Aarti",
        description:
          "Arrival & check-in. Rest briefly before exploring the vibrant galis (alleys). Experience the world-famous Evening Ganga Aarti from a boat, followed by local street food.",
      },
      {
        day: 2,
        title: "Sunrise River Ride & Buddhist History",
        description:
          "Early morning boat cruise along the 84 ghats. Visit the main Kashi Vishwanath Temple. Afternoon excursion to Sarnath before your departure drop-off.",
      },
    ],
    groupSize: "1–4 travellers",
    pickupPoint: "Varanasi Junction / Babatpur Airport",
    featured: true,
  },
  {
    slug: "3-day-soul-of-banaras",
    title: "The 3-Day Soul of Banaras Immersion",
    shortTitle: "3-Day Explorer",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/dashashwamedh-ghat.jpg",
    gallery: [
      "/images/dashashwamedh-ghat.jpg",
      "/images/aarti-night-close.jpg",
      "/images/aarti-lamps.jpg",
    ],
    category: "Spiritual",
    summary: "A completely immersive, unhurried journey. 🔥 Get the cheapest 3-day package via WhatsApp + 10% instant off!",
    description:
      "A complete Varanasi experience that stretches the budget to cover more days and more sights comfortably. 💬 Don't pay premium portal prices. Reach out to us on WhatsApp to grab this entire package at rock-bottom local rates, plus a 10% discount on your first booking!",
    highlights: [
      "Extended Sarnath & Ramnagar Fort tour",
      "Banaras Hindu University (BHU) campus visit",
      "Local silk weaving tour",
      "Unlimited City AC Cab for 3 Days",
    ],
    included: [
      "2 Nights accommodation in a standard AC Hotel",
      "Daily Breakfast",
      "Private AC Sedan for 3 full days",
      "Dedicated trip coordinator support",
    ],
    excluded: [
      "Lunch and Dinner",
      "Guide charges (if required)",
      "Boat ride tickets",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & The Sacred River",
        description:
          "Smooth airport reception and check-in. Relax in the afternoon. Witness the spectacular evening rituals at the ghats.",
      },
      {
        day: 2,
        title: "The Spiritual Heart of Kashi",
        description:
          "Morning boat ride from Assi to Manikarnika. Visit Kashi Vishwanath and Durga Kund. Afternoon visit to the sprawling BHU Campus and New Vishwanath temple. Evening local shopping.",
      },
      {
        day: 3,
        title: "Forts, Antiquities & Sarnath",
        description:
          "Drive across the Malviya Bridge to Ramnagar Fort. Afternoon extended tour of Sarnath monasteries before evening departure.",
      },
    ],
    groupSize: "1–4 travellers",
    pickupPoint: "Varanasi Junction / Babatpur Airport",
    featured: false,
  },
  {
    slug: "3-day-kashi-prayagraj-sangam",
    title: "The 3-Day Kashi & Prayagraj Sangam Special",
    shortTitle: "Kashi + Prayagraj",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/aarti-night-close.jpg",
    gallery: [
      "/images/aarti-night-close.jpg",
      "/images/sunrise-ghat.jpg",
      "/images/prayag.jpeg",
    ],
    category: "Multi-City",
    summary: "Two holy cities, zero stress. 🔥 WhatsApp us for 10% Off and the lowest double-city package deal!",
    description:
      "Perfect for pilgrims wanting to cover the two most sacred cities in one seamless trip. 💬 We guarantee the lowest transport and hotel combo rates. Tap the WhatsApp button to get your custom discounted quote and save a flat 10% instantly!",
    highlights: [
      "Holy dip at Triveni Sangam in Prayagraj",
      "Anand Bhavan historic visit",
      "Varanasi Basecamp - no packing/unpacking twice",
      "Comfortable intercity AC highway transport",
    ],
    included: [
      "2 Nights accommodation in Varanasi",
      "Daily Breakfast",
      "Private AC Sedan including Prayagraj Highway Excursion",
      "All driver allowances and state taxes",
    ],
    excluded: [
      "Prayagraj Sangam boat charges",
      "Lunch and Dinner",
      "Temple VIP queues",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & The Spirit of Kashi",
        description:
          "Arrival in Varanasi, smooth hotel check-in. Evening visit to Dashashwamedh Ghat for the mesmerizing Ganga Aarti.",
      },
      {
        day: 2,
        title: "The Prayagraj Day Trip",
        description:
          "Early morning drive to Prayagraj. Take a boat to the Triveni Sangam for a holy dip. Visit Anand Bhavan and Bade Hanuman Ji Temple before driving back to Varanasi.",
      },
      {
        day: 3,
        title: "Sunrise, Temples & Departure",
        description:
          "Early morning Subah-e-Banaras boat ride. Visit the Kashi Vishwanath Temple and Kaal Bhairav Temple. Quick afternoon trip to Sarnath before drop-off.",
      },
    ],
    groupSize: "1–4 travellers",
    pickupPoint: "Varanasi Junction / Babatpur Airport",
    featured: false,
  },
  {
    slug: "4-day-kashi-ayodhya-yatra",
    title: "The 4-Day Kashi & Ram Janmabhoomi Yatra",
    shortTitle: "Kashi + Ayodhya",
    duration: "4 Days / 3 Nights",
    nights: 3,
    days: 4,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/avatars/ayodha.jpg",
    gallery: [
      "/images/avatars/ayodha.jpg",
      "/images/varanasi-city.jpg",
      "/images/boat-ride.jpg",
    ],
    category: "Multi-City",
    summary: "Your ultimate pilgrimage made effortless. 🔥 Message on WhatsApp for our best price guarantee & 10% discount!",
    description:
      "Our smart itinerary allows you to enjoy a beautiful highway road trip to the grand Ram Mandir without changing hotels. 💬 Skip the overpriced travel agents! WhatsApp us to lock in the absolute lowest rate for this premium journey, plus a 10% special devotee discount.",
    highlights: [
      "Ram Janmabhoomi Temple Darshan in Ayodhya",
      "Saryu River Ghats (Naya Ghat) visit",
      "Complete Kashi temple and ghat experience",
      "Premium Basecamp Stay in Varanasi",
    ],
    included: [
      "3 Nights accommodation in Varanasi",
      "Daily Breakfast",
      "Private AC Sedan including Ayodhya Highway Excursion",
      "Toll taxes, parking, and driver allowance",
    ],
    excluded: [
      "Meals other than breakfast",
      "Entry fees and donation tickets",
      "Personal shopping",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & The Spirit of Kashi",
        description:
          "Arrival in Varanasi and hotel check-in. Evening visit to Dashashwamedh Ghat for the mesmerizing Ganga Aarti.",
      },
      {
        day: 2,
        title: "The Ayodhya Day Trip",
        description:
          "Early morning highway drive to Ayodhya. Visit the grand Ram Mandir, Hanuman Garhi, and Kanak Bhawan. Spend time at the Saryu River before returning to Varanasi.",
      },
      {
        day: 3,
        title: "Sunrise, Temples & Heritage",
        description:
          "Subah-e-Banaras boat ride at Assi Ghat. Visit the Kashi Vishwanath Temple and Kaal Bhairav Temple. Afternoon trip to Sarnath.",
      },
      {
        day: 4,
        title: "Final Blessings & Departure",
        description:
          "Relaxed breakfast and local shopping for Banarasi silk or souvenirs. Comfortable drop-off at the Varanasi airport/station.",
      },
    ],
    groupSize: "1–4 travellers",
    pickupPoint: "Varanasi Junction / Babatpur Airport",
    featured: true,
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): TourPackage[] {
  return packages.filter((p) => p.featured);
}