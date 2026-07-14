"use client";

import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink, mailLink } from "@/data/site";

export function QuickMessageForm() {
  const [name, setName] = useState("");
  const [tour, setTour] = useState("");
  const [message, setMessage] = useState("");

  function buildMessage() {
    const lines = [
      `Namaste! My name is ${name || "[your name]"}.`,
      tour && `I'm interested in: ${tour}.`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink/70">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Ananya Sharma"
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-saffron"
        />
      </div>

      <div>
        <label htmlFor="tour" className="text-sm font-medium text-ink/70">
          Tour of Interest
        </label>
        <input
          id="tour"
          type="text"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          placeholder="e.g. Varanasi 2 Days Tour"
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-saffron"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us your travel dates and group size..."
          className="mt-1.5 w-full resize-none rounded-xl border border-black/10 bg-cream/60 px-4 py-2.5 text-sm text-ink outline-none focus:border-saffron"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          href={whatsappLink(buildMessage())}
          target="_blank"
          variant="whatsapp"
          className="flex-1"
          icon={<MessageCircle className="h-4 w-4" />}
        >
          Send on WhatsApp
        </Button>
        <Button
          href={mailLink("Varanasi Tour Enquiry") + `&body=${encodeURIComponent(buildMessage())}`}
          variant="outline"
          className="flex-1"
          icon={<Mail className="h-4 w-4" />}
        >
          Send by Email
        </Button>
      </div>
    </form>
  );
}
