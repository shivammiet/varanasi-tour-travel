import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function AboutVaranasi() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]">
          <Image
            src="/images/aarti-night-close.jpg"
            alt="View of the ghats of Varanasi along the Ganga"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="About the City"
            title="Varanasi: Where Every Sunrise Feels Ancient"
          />
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            Also known as Kashi and Banaras, Varanasi is one of the oldest
            continuously inhabited cities in the world, sitting on the western
            bank of the Ganga. Its 80-plus ghats — stone steps leading down to
            the river — are the stage for daily rituals that have continued,
            largely unchanged, for centuries.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            The city is anchored by the Kashi Vishwanath Temple, one of the
            twelve Jyotirlingas of Lord Shiva, and by the nightly Ganga Aarti
            at Dashashwamedh Ghat — a synchronised fire ritual that draws
            pilgrims and travellers alike to the water's edge every evening.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-indigo">80+</p>
              <p className="mt-1 text-xs text-ink/60">Ghats along the Ganga</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-indigo">3000+</p>
              <p className="mt-1 text-xs text-ink/60">Years of continuous history</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-indigo">12</p>
              <p className="mt-1 text-xs text-ink/60">Jyotirlinga, right here</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
