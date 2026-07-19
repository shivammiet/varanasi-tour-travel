import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function AboutVaranasi() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]">
          {/* Aap chaho toh baad mein image change kar sakte ho, abhi wahi rakhi hai */}
          <Image
            src="/images/ChatGPT.png"
            alt="Spiritual journey across Varanasi, Ayodhya, and Prayagraj"
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 40vw"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Divine Destinations"
            title="Varanasi, Ayodhya & Prayagraj: The Spiritual Heart of India"
          />
          <p className="mt-6 text-base leading-relaxed text-ink/75">
            While <strong>Varanasi (Kashi)</strong> anchors your spiritual journey as the ancient city of Lord Shiva—famous for its 80+ ghats, Kashi Vishwanath Temple, and the mesmerizing evening Ganga Aarti—your pilgrimage extends beyond its sacred waters.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/75">
            Experience the divine tranquility of <strong>Ayodhya</strong>, the revered birthplace of Lord Rama and home to the grand Ram Janmabhoomi Mandir. Complete the holy trinity at <strong>Prayagraj</strong>, where the sacred Ganga, Yamuna, and mythical Saraswati rivers converge at the Triveni Sangam. Together, these cities form the ultimate spiritual pilgrimage.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-indigo">3</p>
              <p className="mt-1 text-xs text-ink/60">Sacred Cities</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-indigo">80+</p>
              <p className="mt-1 text-xs text-ink/60">Ghats in Kashi</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-indigo">1</p>
              <p className="mt-1 text-xs text-ink/60">Triveni Sangam</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}