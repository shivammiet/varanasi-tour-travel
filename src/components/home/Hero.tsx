"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FlameIcon } from "@/components/ui/FlameIcon";
import { GhatDivider } from "@/components/ui/GhatDivider";
import { whatsappLink, telLink } from "@/data/site";

const slides = [
  {
    image: "/images/boat-ride.jpg",
    caption: "Sunrise Boat Ride on the Ganga",
  },
  {
    image: "/images/hero.jpg",
    caption: "Sunrise Over the Ghats of Varanasi",
  },
  {
    image: "/images/kashii.jpg",
    caption: "A Boatman on the Ganga at Dusk",
  },
  {
    image: "/images/avatars/ayodha.jpg",
    caption: "The Grand Ram Janmabhoomi Mandir, Ayodhya",
  },
  {
    image: "/images/boat-ride.jpg",
    caption: "Morning Serenity on the Sacred River",
  }
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
    // FIX 1: Responsive Height (85vh for mobile, 92vh for desktop)
    <section className="relative flex min-h-[85vh] md:min-h-[92vh] items-end overflow-hidden bg-indigo">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
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
            // FIX 2: Added object-center to keep focus in the middle on mobile
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-dark via-indigo-dark/70 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* FIX 3: Responsive Padding (Less padding on mobile) */}
      <Container className="relative z-10 pb-20 pt-32 md:pb-28 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur">
            <FlameIcon className="h-4 w-4 text-saffron" />
            Kashi & Ayodhya
          </span>
          <span className="inline-flex animate-pulse items-center gap-1.5 rounded-full bg-green-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-300 border border-green-400/30 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Flat 10% Off via WhatsApp
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // FIX 4: Responsive Text Size (text-4xl on mobile, text-6xl/7xl on larger screens)
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl drop-shadow-lg"
        >
          Journey to the Heart <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-light to-gold-light">
            of Divine India.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          // FIX 5: Slightly smaller text on mobile
          className="mt-4 md:mt-6 max-w-xl text-base md:text-lg text-white/90 font-medium leading-relaxed drop-shadow-md"
        >
          Experience curated spiritual tours across Varanasi, Ayodhya, and Prayagraj. Zero stress, no hidden fees. Message us directly for local B2B rates and seamless planning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 items-center"
        >
          <Button
            href={whatsappLink("Namaste! I'd like to plan a tour and claim my 10% discount.")}
            target="_blank"
            variant="whatsapp"
            className="shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 w-full sm:w-auto"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            Claim 10% Off on WhatsApp
          </Button>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button 
              href="/packages" 
              variant="outline" 
              className="flex-1 sm:flex-none !bg-white/10 !text-white !border-white/30 hover:!bg-white/20 hover:!border-saffron-light hover:!text-white backdrop-blur transition-all"
            >
              View Packages
            </Button>
            <Button 
              href={telLink()} 
              variant="ghost" 
              className="flex-1 sm:flex-none !text-white/80 hover:!text-white hover:bg-white/10" 
              icon={<PhoneCall className="h-4 w-4" />}
            >
              Call Us
            </Button>
          </div>
        </motion.div>

        <motion.p
          key={`caption-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 md:mt-12 text-xs md:text-sm font-medium tracking-wide text-white/60"
        >
          Currently viewing: {slides[index].caption}
        </motion.p>

        <div className="mt-4 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.caption}
              onClick={() => setIndex(i)}
              aria-label={`Show slide: ${slide.caption}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-12 bg-saffron shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <GhatDivider toColor="#FFF9F2" />
      </div>
    </section>
  );
}