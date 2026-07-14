"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { GhatDivider } from "@/components/ui/GhatDivider";
import { whatsappLink, telLink } from "@/data/site";

const slides = [
  {
    image: "/images/hero.jpg",
    caption: "Sunrise Over the Ghats of Varanasi",
  },
  {
    image: "/images/ganga-aarti.jpg",
    caption: "Ganga Aarti, Dashashwamedh Ghat",
  },
  {
    image: "/images/kashi-vishwanath.jpg",
    caption: "Riverside Temples of Kashi",
  },
  {
    image: "/images/boat-ride.jpg",
    caption: "Sunrise Boat Ride on the Ganga",
  },
  {
    image: "/images/sunrise-ghat.jpg",
    caption: "A Boatman on the Ganga at Dusk",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-indigo">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].caption}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-dark via-indigo-dark/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      <Container className="relative z-10 pb-28 pt-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur"
        >
          <FlameIcon className="h-4 w-4 text-saffron" />
          The Eternal City of Kashi
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Walk the Ghats.
          <br />
          Witness the Eternal Flame.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/85"
        >
          Curated Varanasi tours — sunrise boat rides, temple darshans, and the
          Ganga Aarti — planned by locals who know every ghat by name. No
          bookings portal, no back-and-forth. Just message us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button
            href={whatsappLink("Namaste! I'd like to plan a Varanasi tour.")}
            target="_blank"
            variant="whatsapp"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Book on WhatsApp
          </Button>
          <Button href="/packages" variant="outline" className="!bg-white/10 !text-white !border-white/30 hover:!border-saffron hover:!text-saffron-light">
            Explore Packages
          </Button>
          <Button href={telLink()} variant="ghost" className="!text-white" icon={<PhoneCall className="h-4 w-4" />}>
            Call Now
          </Button>
        </motion.div>

        <div className="mt-14 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              onClick={() => setIndex(i)}
              aria-label={`Show slide: ${slide.caption}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-10 bg-saffron" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <GhatDivider toColor="#FFF9F2" />
      </div>
    </section>
  );
}
