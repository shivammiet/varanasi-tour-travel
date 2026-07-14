import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GhatDivider } from "@/components/ui/GhatDivider";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[46vh] min-h-[340px] items-end overflow-hidden bg-indigo">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-dark via-indigo-dark/60 to-black/20" />
      <Container className="relative z-10 pb-16 pt-24">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-xl text-white/80">{description}</p>
        )}
      </Container>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <GhatDivider toColor="#FFF9F2" />
      </div>
    </section>
  );
}
