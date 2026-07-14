export interface ItineraryStop {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  nights: number;
  days: number;
  startingPrice: number;
  priceUnit: string;
  image: string;
  gallery: string[];
  category: "Day Tour" | "Multi-City" | "Spiritual" | "Experience";
  summary: string;
  description: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryStop[];
  groupSize: string;
  pickupPoint: string;
  featured?: boolean;
}

export interface Attraction {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  bestTimeToVisit: string;
  timeNeeded: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  tourTaken: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
