"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Namaste! I'd like to know more about your Varanasi tour packages.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
    </a>
  );
}
