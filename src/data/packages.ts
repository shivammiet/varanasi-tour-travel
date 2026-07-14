import { TourPackage } from "@/types";

export const packages: TourPackage[] = [
  {
    slug: "varanasi-1-day-tour",
    title: "Varanasi 1 Day Tour",
    shortTitle: "1 Day Tour",
    duration: "1 Day",
    nights: 0,
    days: 1,
    startingPrice: 1999,
    priceUnit: "per person",
    image: "/images/ganga-aarti.jpg",
    gallery: [
      "/images/ganga-aarti.jpg",
      "/images/aarti-night-close.jpg",
      "/images/aarti-lamps.jpg",
    ],
    category: "Day Tour",
    summary: "A compact sunrise-to-sunset introduction to Kashi's ghats, temples, and evening Aarti.",
    description:
      "Perfect for travellers passing through Varanasi with limited time. This tour covers the essential spiritual and cultural landmarks of the holy city in a single, well-paced day — from a sunrise boat ride on the Ganga to the mesmerising Ganga Aarti at dusk.",
    highlights: [
      "Sunrise boat ride along the ghats",
      "Kashi Vishwanath Temple darshan",
      "Walking tour of Dashashwamedh & Assi Ghat",
      "Evening Ganga Aarti viewing",
    ],
    included: [
      "AC vehicle for pickup and drop",
      "Sunrise boat ride (shared boat)",
      "English/Hindi speaking local guide",
      "Bottled drinking water",
    ],
    excluded: [
      "Temple donation or priority darshan fees",
      "Meals and personal expenses",
      "Camera fees at monuments",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ghats, Temple & Aarti",
        description:
          "Early morning pickup from your hotel, sunrise boat ride past the ghats, breakfast break, Kashi Vishwanath Temple darshan, visit to Manikarnika and Assi Ghat, afternoon at leisure, and evening Ganga Aarti at Dashashwamedh Ghat before drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: true,
  },
  {
    slug: "varanasi-2-days-tour",
    title: "Varanasi 2 Days Tour",
    shortTitle: "2 Days Tour",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 4499,
    priceUnit: "per person",
    image: "/images/boat-ride.jpg",
    gallery: [
      "/images/boat-ride.jpg",
      "/images/sunrise-ghat.jpg",
      "/images/varanasi-city.jpg",
    ],
    category: "Multi-City",
    summary: "An unhurried two-day journey through Varanasi's ghats, alleys, temples, and local flavours.",
    description:
      "This tour gives you a relaxed pace to experience both the spiritual rhythm of the ghats and the everyday life of Varanasi's old city — its narrow lanes, silk weaving houses, street food, and two evenings of Ganga Aarti.",
    highlights: [
      "Two evenings of Ganga Aarti",
      "Old city walking & silk weaving village visit",
      "Sunrise boat ride with flower offering",
      "Local street food trail",
    ],
    included: [
      "1 night hotel accommodation (3-star, twin sharing)",
      "Daily breakfast",
      "AC vehicle for all transfers and sightseeing",
      "Boat ride and local guide",
    ],
    excluded: [
      "Lunch and dinner (except where mentioned)",
      "Entry fees at monuments",
      "Anything not mentioned under Included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Old City",
        description:
          "Check-in, visit Kashi Vishwanath Temple, explore the old city lanes and a silk weaving workshop, street food trail in the evening, followed by Ganga Aarti at Dashashwamedh Ghat.",
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Departure",
        description:
          "Early sunrise boat ride with flower and diya offering, visit Assi Ghat and Sarnath (optional add-on), breakfast, leisure time for shopping, and drop-off at your hotel, station, or airport.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: true,
  },
  {
    slug: "varanasi-sarnath-tour",
    title: "Varanasi + Sarnath Tour",
    shortTitle: "Varanasi + Sarnath",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 5299,
    priceUnit: "per person",
    image: "/images/kashi-vishwanath.jpg",
    gallery: [
      "/images/kashi-vishwanath.jpg",
      "/images/sarnath.jpg",
      "/images/dashashwamedh-ghat.jpg",
    ],
    category: "Multi-City",
    summary: "Combine the ghats of Kashi with Sarnath, the site of Buddha's first sermon.",
    description:
      "Ideal for travellers interested in both Hindu and Buddhist heritage. This tour pairs the temples and ghats of Varanasi with a half-day dedicated to Sarnath's stupas, monasteries, and archaeological museum.",
    highlights: [
      "Dhamek Stupa & Sarnath Museum",
      "Kashi Vishwanath Temple darshan",
      "Sunrise boat ride",
      "Evening Ganga Aarti",
    ],
    included: [
      "1 night hotel accommodation",
      "Daily breakfast",
      "AC vehicle including Sarnath transfer (10 km each way)",
      "Guide and boat ride",
    ],
    excluded: [
      "Sarnath Museum camera fee",
      "Lunch and dinner",
      "Personal expenses and tips",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kashi Darshan & Aarti",
        description:
          "Check-in, Kashi Vishwanath Temple, Dashashwamedh and Manikarnika Ghat walk, evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Sarnath Excursion",
        description:
          "Sunrise boat ride, breakfast, half-day trip to Sarnath covering Dhamek Stupa, Chaukhandi Stupa, and the Archaeological Museum, followed by drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
  },
  {
    slug: "varanasi-ayodhya-tour",
    title: "Varanasi + Ayodhya Tour",
    shortTitle: "Varanasi + Ayodhya",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 8999,
    priceUnit: "per person",
    image: "/images/kashi-vishwanath.jpg",
    gallery: [
      "/images/kashi-vishwanath.jpg",
      "/images/varanasi-city.jpg",
      "/images/boat-ride.jpg",
    ],
    category: "Multi-City",
    summary: "A pilgrimage circuit connecting Kashi Vishwanath with the Ram Janmabhoomi in Ayodhya.",
    description:
      "This tour connects two of North India's most significant pilgrimage sites — the temples of Varanasi and the Ram Mandir in Ayodhya — with a comfortable overland transfer and dedicated darshan time at both cities.",
    highlights: [
      "Ram Janmabhoomi Mandir darshan",
      "Hanuman Garhi & Saryu Ghat, Ayodhya",
      "Kashi Vishwanath Temple, Varanasi",
      "Evening Ganga Aarti",
    ],
    included: [
      "2 nights hotel accommodation (Varanasi & Ayodhya)",
      "Daily breakfast",
      "AC vehicle for inter-city transfer and sightseeing",
      "Guide services in both cities",
    ],
    excluded: [
      "Lunch and dinner",
      "Entry and darshan priority fees",
      "Any airfare or train fare",
    ],
    itinerary: [
      {
        day: 1,
        title: "Varanasi Darshan & Aarti",
        description:
          "Check-in Varanasi, Kashi Vishwanath Temple, ghat walk, evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Transfer to Ayodhya",
        description:
          "Morning drive to Ayodhya (approx. 4.5 hours), check-in, evening Saryu Aarti at the ghat.",
      },
      {
        day: 3,
        title: "Ayodhya Darshan & Return",
        description:
          "Ram Janmabhoomi Mandir, Hanuman Garhi, Kanak Bhawan, then drive back to Varanasi for drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: true,
  },
  {
    slug: "varanasi-prayagraj-tour",
    title: "Varanasi + Prayagraj Tour",
    shortTitle: "Varanasi + Prayagraj",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 6499,
    priceUnit: "per person",
    image: "/images/aarti-night-close.jpg",
    gallery: [
      "/images/aarti-night-close.jpg",
      "/images/sunrise-ghat.jpg",
      "/images/sarnath.jpg",
    ],
    category: "Multi-City",
    summary: "Visit the sacred Triveni Sangam at Prayagraj alongside the temples of Kashi.",
    description:
      "A pilgrimage tour combining Varanasi with Prayagraj, home to the Triveni Sangam — the confluence of the Ganga, Yamuna, and the mythical Saraswati rivers — along with the historic Allahabad Fort area.",
    highlights: [
      "Triveni Sangam boat ride",
      "Hanuman Mandir, Prayagraj",
      "Kashi Vishwanath Temple, Varanasi",
      "Evening Ganga Aarti",
    ],
    included: [
      "1 night hotel accommodation in Prayagraj or Varanasi",
      "Breakfast",
      "AC vehicle for the full circuit (approx. 130 km each way)",
      "Sangam boat ride and local guide",
    ],
    excluded: [
      "Lunch and dinner",
      "Entry fees at forts and monuments",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Varanasi to Prayagraj",
        description:
          "Morning Kashi Vishwanath darshan, drive to Prayagraj (approx. 2.5 hours), Triveni Sangam boat ride, evening at leisure.",
      },
      {
        day: 2,
        title: "Prayagraj Sightseeing & Return",
        description:
          "Visit Hanuman Mandir and Anand Bhawan, drive back to Varanasi, evening Ganga Aarti before drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
  },
  {
    slug: "spiritual-kashi-yatra",
    title: "Spiritual Kashi Yatra",
    shortTitle: "Spiritual Kashi Yatra",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 9499,
    priceUnit: "per person",
    image: "/images/aarti-lamps.jpg",
    gallery: [
      "/images/aarti-lamps.jpg",
      "/images/varanasi-city.jpg",
      "/images/dashashwamedh-ghat.jpg",
    ],
    category: "Spiritual",
    summary: "An in-depth pilgrimage covering all Panchakroshi temples, ghat rituals, and Sarnath.",
    description:
      "Designed for pilgrims who wish to go deeper than a standard sightseeing tour. This yatra includes ritual guidance, visits to lesser-known temples along the Panchakroshi route, a Pandit-assisted puja at the ghat, and a full day at Sarnath.",
    highlights: [
      "Pandit-assisted Ganga puja",
      "Kashi Vishwanath & Kaal Bhairav Temple",
      "Panchakroshi Yatra temple circuit",
      "Full-day Sarnath excursion",
    ],
    included: [
      "2 nights hotel accommodation",
      "Daily breakfast",
      "Pandit and puja samagri for Ganga puja",
      "AC vehicle for the entire yatra including Sarnath",
    ],
    excluded: [
      "Temple donations",
      "Lunch and dinner",
      "Personal shopping and tips",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ganga Puja & Kashi Vishwanath",
        description:
          "Pandit-assisted Ganga puja at sunrise, Kashi Vishwanath Temple darshan, Kaal Bhairav Temple, evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Panchakroshi Temple Circuit",
        description:
          "Full day covering key temples along the traditional Panchakroshi Yatra route, with a local pandit guide explaining the significance of each stop.",
      },
      {
        day: 3,
        title: "Sarnath & Departure",
        description:
          "Full-day Sarnath excursion covering Dhamek Stupa, Mulagandha Kuti Vihar, and the museum, followed by drop-off.",
      },
    ],
    groupSize: "1–10 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
  },
  {
    slug: "sunrise-boat-ride-experience",
    title: "Sunrise Boat Ride Experience",
    shortTitle: "Sunrise Boat Ride",
    duration: "2 Hours",
    nights: 0,
    days: 1,
    startingPrice: 899,
    priceUnit: "per person",
    image: "/images/sunrise-ghat.jpg",
    gallery: [
      "/images/sunrise-ghat.jpg",
      "/images/ganga-aarti.jpg",
      "/images/boat-ride.jpg",
    ],
    category: "Experience",
    summary: "A single, unforgettable ride on the Ganga as the sun rises over the ghats.",
    description:
      "A standalone experience for travellers who want just one thing done perfectly — the classic sunrise boat ride, gliding past Assi Ghat to Manikarnika Ghat as the city wakes and the first rituals of the day begin.",
    highlights: [
      "Ride from Assi Ghat to Manikarnika Ghat",
      "Flower and diya offering included",
      "Small-group wooden boat",
      "Photography stops at key ghats",
    ],
    included: [
      "Shared wooden boat ride (approx. 1 hour on water)",
      "Flower and diya (lamp) offering",
      "Pickup from nearby hotels within Varanasi city",
    ],
    excluded: [
      "Private boat upgrade (available on request)",
      "Breakfast",
      "Hotel pickup outside city limits",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise on the Ganga",
        description:
          "Pickup before sunrise, board the boat at Assi Ghat, glide past the major ghats while the morning rituals unfold, offer a flower and diya to the river, disembark near Manikarnika Ghat, and return transfer.",
      },
    ],
    groupSize: "1–20 travellers",
    pickupPoint: "Any hotel within Varanasi city limits",
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): TourPackage[] {
  return packages.filter((p) => p.featured);
}
