import { TourPackage } from "@/types";

export const packages: TourPackage[] = [
  // 1. Kashi Spiritual Tour
  {
    slug: "kashi-spiritual-tour",
    title: "Kashi Spiritual Tour",
    shortTitle: "Kashi Spiritual Tour",
    duration: "1 Day",
    nights: 0,
    days: 1,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/mobile3.jpg",
    gallery: [
      "/images/mobile3.jpg",
      "/images/mobile1.jpg",
      "/images/dashashwamedh-ghat.jpg",
    ],
    category: "Day Tour",
    summary:
      "Discover the spiritual heart of Varanasi with a full-day tour covering its most sacred temples, iconic ghats, and the mesmerizing Ganga Aarti.",
    description:
      "A comprehensive single-day spiritual journey through Varanasi. Experience the divine energy of Kashi by visiting its most important temples and concluding the day with the spectacular evening Ganga Aarti.",
    highlights: [
      "Kashi Vishwanath Temple",
      "Annapurna Temple",
      "Vishalakshi Temple",
      "Kal Bhairav Temple",
      "Sankat Mochan Temple",
      "Durga Kund Temple",
      "Banaras Hindu University (BHU)",
      "Assi Ghat",
      "Dashashwamedh Ghat",
      "Evening Ganga Aarti",
    ],
    included: [
      "Pickup & Drop",
      "AC Transportation",
      "Local Sightseeing",
      "Tour Assistance",
    ],
    excluded: [
      "Meals and beverages",
      "Temple donation / VIP Darshan tickets",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Full Day Temple Circuit & Ganga Aarti",
        description:
          "Full day temple tour covering Kashi Vishwanath, Annapurna, Vishalakshi, Kal Bhairav, Sankat Mochan, Durga Kund, and BHU. Concludes in the evening with the mesmerizing Ganga Aarti at Dashashwamedh Ghat.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: true,
  },

  // 2. Kashi Heritage Tour
  {
    slug: "kashi-heritage-tour",
    title: "Kashi Heritage Tour",
    shortTitle: "Kashi Heritage Tour",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/boat-ride.jpg",
    gallery: [
      "/images/boat-ride.jpg",
      "/images/sar4.jpg",
      "/images/varanasi-city.jpg",
    ],
    category: "Spiritual",
    summary:
      "Experience the spiritual and cultural heritage of Varanasi with temple visits, sunrise boat ride, heritage landmarks, and vibrant ghats.",
    description:
      "A perfect blend of spirituality and history over two days. Witness the evening Aarti, visit ancient temples, enjoy a serene sunrise boat ride, and explore the rich heritage of Sarnath and Ramnagar.",
    highlights: [
      "Kashi Vishwanath & Kal Bhairav Darshan",
      "Mesmerizing Evening Ganga Aarti",
      "Sunrise Boat Ride on the Ganges",
      "Ramnagar Fort & BHU Campus visit",
      "Sarnath Buddhist heritage excursion",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Sightseeing",
    ],
    excluded: [
      "Lunch and Dinner",
      "Monument entry fees",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kashi Temples & Evening Aarti",
        description:
          "Visit Kashi Vishwanath, Annapurna, Vishalakshi, and Kal Bhairav temples. The evening concludes with the spectacular Ganga Aarti.",
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Heritage Sites",
        description:
          "Start with a Sunrise Boat Ride, followed by visits to Sankat Mochan, Durga Temple, BHU, Ramnagar Fort, and Sarnath before departure.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: false,
  },

  // 3. Ayodhya Divine Darshan Tour
  {
    slug: "ayodhya-divine-darshan-tour",
    title: "Ayodhya Divine Darshan Tour",
    shortTitle: "Ayodhya Darshan",
    duration: "2 Days / 1 Night",
    nights: 1,
    days: 2,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/avatars/ayodha.jpg",
    gallery: [
      "/images/avatars/ayodha.jpg",
      "/images/Hanka.png",
      "/images/ay2.jpg",
    ],
    category: "Spiritual",
    summary:
      "Visit the sacred city of Ayodhya and experience the birthplace of Lord Shri Ram through its renowned temples, ghats, and spiritual landmarks.",
    description:
      "A dedicated two-day pilgrimage to Ayodhya, offering complete darshan of Ram Janmabhoomi and key spiritual sites, highlighted by the divine Saryu River Aarti.",
    highlights: [
      "Ram Janmabhoomi Mandir Darshan",
      "Hanuman Garhi & Kanak Bhawan",
      "Divine Evening Saryu Aarti",
      "Nageshwarnath Temple & Guptar Ghat",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Local Sightseeing",
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry and donation tickets",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ram Janmabhoomi & Saryu Aarti",
        description:
          "Visit Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and Dashrath Mahal. End the day witnessing the divine Saryu Aarti.",
      },
      {
        day: 2,
        title: "Temples, Ghats & Local Market",
        description:
          "Explore Nageshwarnath Temple, Guptar Ghat, Tulsi Smarak Bhawan, and Mani Parvat. Spend some time at the Local Market before departure.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: false,
  },

  // 4. Kashi & Prayagraj Pilgrimage Tour
  {
    slug: "kashi-prayagraj-pilgrimage-tour",
    title: "Kashi & Prayagraj Pilgrimage Tour",
    shortTitle: "Kashi + Prayagraj",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/pryagg.png",
    gallery: [
      "/images/pryagg.png",
      "/images/sunrise-ghat.jpg",
      "/images/mobile1.jpg",
    ],
    category: "Multi-City",
    summary:
      "Explore two of India's holiest destinations with a journey through Varanasi and Prayagraj, combining temple visits, sacred ghats, and the Triveni Sangam.",
    description:
      "A profound three-day journey covering the spiritual essence of Kashi alongside a sacred excursion to Prayagraj to witness the holy Triveni Sangam.",
    highlights: [
      "Varanasi Temple Circuit",
      "Evening Ganga Aarti",
      "Sunrise Boat Ride in Varanasi",
      "Holy dip at Triveni Sangam in Prayagraj",
      "Bade Hanuman Temple & Anand Bhavan",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Guided Sightseeing",
    ],
    excluded: [
      "Prayagraj Sangam boat charges",
      "Lunch and Dinner",
      "Temple VIP queues",
    ],
    itinerary: [
      {
        day: 1,
        title: "Varanasi Temple Tour & Aarti",
        description:
          "Check-in followed by a comprehensive Varanasi Temple Tour and the spectacular evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Prayagraj Excursion",
        description:
          "Early Sunrise Boat Ride. Travel to Prayagraj for a holy dip at Triveni Sangam, followed by visits to Bade Hanuman Temple and Anand Bhavan.",
      },
      {
        day: 3,
        title: "Local Sightseeing & Departure",
        description:
          "Enjoy local sightseeing and shopping in Varanasi before your departure.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: false,
  },

  // 5. Kashi & Ayodhya Divine Tour
  {
    slug: "kashi-ayodhya-divine-tour",
    title: "Kashi & Ayodhya Divine Tour",
    shortTitle: "Kashi + Ayodhya",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/ChatGPT2.png",
    gallery: [
      "/images/ChatGPT2.png",
      "/images/Hanka.png",
      "/images/kashi6.jpg",
    ],
    category: "Multi-City",
    summary:
      "Experience the divine connection between Kashi and Ayodhya with visits to the sacred temples of Lord Shiva and Lord Ram.",
    description:
      "Connect the realms of Lord Shiva and Lord Ram with this beautiful three-day spiritual passage between the holy cities of Varanasi and Ayodhya.",
    highlights: [
      "Kashi Vishwanath & Annapurna Temple Darshan",
      "Evening Ganga Aarti at Dashashwamedh Ghat",
      "Ram Janmabhoomi & Hanuman Garhi",
      "Divine Saryu Aarti in Ayodhya",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Tour Assistance",
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry fees and donation tickets",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kashi Vishwanath & Ganga Aarti",
        description:
          "Darshan at Kashi Vishwanath and Annapurna Temple, followed by the majestic Ganga Aarti.",
      },
      {
        day: 2,
        title: "Travel to Ayodhya & Saryu Aarti",
        description:
          "Travel to Ayodhya. Visit Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan. Conclude the day with the Saryu Aarti.",
      },
      {
        day: 3,
        title: "Ayodhya Local Sightseeing & Departure",
        description:
          "Final morning for Ayodhya local sightseeing before your scheduled departure.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: false,
  },

  // 6. Divine Uttar Pradesh Tour
  {
    slug: "divine-uttar-pradesh-tour",
    title: "Divine Uttar Pradesh Tour",
    shortTitle: "Divine UP Tour",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/varanasi-city.jpg",
    gallery: [
      "/images/mobile3.jpg",
      "/images/pryagg.png",
      "/images/avatars/ayodha.jpg",
    ],
    category: "Multi-City",
    summary:
      "A complete spiritual journey covering Varanasi, Prayagraj, and Ayodhya, offering a perfect blend of faith, culture, and heritage.",
    description:
      "Our most comprehensive 5-day circuit covering the three crown jewels of spiritual Uttar Pradesh: Kashi, Prayagraj, and Ayodhya.",
    highlights: [
      "Kashi Vishwanath Temple",
      "Sunrise Boat Ride",
      "Ganga Aarti",
      "Triveni Sangam",
      "Ram Janmabhoomi",
      "Hanuman Garhi",
      "Kanak Bhawan",
      "Saryu Aarti",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Guided Sightseeing",
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry and donation tickets",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kashi Temples",
        description:
          "Check-in and darshan at Kashi Vishwanath and Annapurna Temple, followed by the evening Ganga Aarti at Dashashwamedh Ghat.",
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Varanasi Heritage",
        description:
          "Sunrise boat ride along the ghats, followed by a visit to Kaal Bhairav Temple, BHU, and Ramnagar Fort.",
      },
      {
        day: 3,
        title: "Prayagraj Excursion",
        description:
          "Drive to Prayagraj for a holy dip at the Triveni Sangam, followed by Anand Bhavan and Bade Hanuman Temple, before returning to Varanasi.",
      },
      {
        day: 4,
        title: "Travel to Ayodhya & Saryu Aarti",
        description:
          "Highway drive to Ayodhya. Darshan at Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan, followed by the evening Saryu Aarti.",
      },
      {
        day: 5,
        title: "Ayodhya Sightseeing & Departure",
        description:
          "Final morning for local sightseeing and shopping in Ayodhya before your comfortable drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: true,
  },

  // 7. Spiritual Circuit Tour
  {
    slug: "spiritual-circuit-tour",
    title: "Spiritual Circuit Tour",
    shortTitle: "Spiritual Circuit",
    duration: "6 Days / 5 Nights",
    nights: 5,
    days: 6,
    startingPrice: 0,
    priceUnit: "",
    image: "/images/sarnath.jpg",
    gallery: [
      "/images/sarnath.jpg",
      "/images/pryagg.png",
      "/images/sunrise-ghat.jpg",
    ],
    category: "Spiritual",
    summary:
      "Embark on a comprehensive pilgrimage through North India's most sacred destinations, including Varanasi, Bodh Gaya, Prayagraj, Ayodhya, and Sarnath.",
    description:
      "An ultimate 6-day pilgrimage spanning Hindu and Buddhist sacred sites across Uttar Pradesh and Bihar, ensuring a complete and transformative spiritual experience.",
    highlights: [
      "Kashi Vishwanath Temple",
      "Mahabodhi Temple",
      "Triveni Sangam",
      "Ram Janmabhoomi",
      "Sarnath",
      "Ganga Aarti",
      "Sunrise Boat Ride",
    ],
    included: [
      "Hotel Accommodation",
      "Breakfast",
      "AC Transportation",
      "Tour Assistance",
      "Guided Sightseeing",
    ],
    excluded: [
      "Lunch and Dinner",
      "Entry and donation tickets",
      "Personal expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kashi Temples",
        description:
          "Check-in and darshan at Kashi Vishwanath and Annapurna Temple, followed by the evening Ganga Aarti.",
      },
      {
        day: 2,
        title: "Sunrise Boat Ride & Sarnath",
        description:
          "Sunrise boat ride along the ghats, followed by an excursion to Sarnath, site of Buddha's first sermon.",
      },
      {
        day: 3,
        title: "Bodh Gaya Excursion",
        description:
          "Drive to Bodh Gaya to visit the Mahabodhi Temple and the sacred Bodhi Tree.",
      },
      {
        day: 4,
        title: "Return to Varanasi & Prayagraj",
        description:
          "Return drive toward Varanasi with a stop in Prayagraj for a holy dip at the Triveni Sangam and a visit to Anand Bhavan.",
      },
      {
        day: 5,
        title: "Travel to Ayodhya & Saryu Aarti",
        description:
          "Highway drive to Ayodhya. Darshan at Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan, followed by the evening Saryu Aarti.",
      },
      {
        day: 6,
        title: "Ayodhya Sightseeing & Departure",
        description:
          "Final morning for local sightseeing before your comfortable drop-off.",
      },
    ],
    groupSize: "1–15 travellers",
    pickupPoint: "Varanasi hotel or Varanasi Junction / Babatpur Airport",
    featured: false,
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): TourPackage[] {
  return packages.filter((p) => p.featured);
}