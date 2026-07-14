import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { IncludedExcluded } from "@/components/packages/IncludedExcluded";
import { Itinerary } from "@/components/packages/Itinerary";
import { BookingCard } from "@/components/packages/BookingCard";
import { PackageCard } from "@/components/packages/PackageCard";
import { packages, getPackageBySlug } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { tourPackageJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};

  return buildMetadata({
    title: pkg.title,
    description: pkg.summary,
    path: `/packages/${pkg.slug}`,
    image: pkg.image,
  });
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const otherPackages = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourPackageJsonLd(pkg)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: siteConfig.url },
              { name: "Packages", url: `${siteConfig.url}/packages` },
              { name: pkg.title, url: `${siteConfig.url}/packages/${pkg.slug}` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow={pkg.category}
        title={pkg.title}
        description={pkg.summary}
        image={pkg.image}
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <nav className="mb-6 text-sm text-ink/50">
              <Link href="/" className="hover:text-saffron-dark">Home</Link>
              {" / "}
              <Link href="/packages" className="hover:text-saffron-dark">Packages</Link>
              {" / "}
              <span className="text-ink/80">{pkg.title}</span>
            </nav>

            <div className="grid grid-cols-3 gap-3">
              {pkg.gallery.map((image, i) => (
                <div key={image + i} className="relative h-32 overflow-hidden rounded-xl sm:h-44">
                  <Image
                    src={image}
                    alt={`${pkg.title} photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 260px"
                  />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed text-ink/75">{pkg.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 rounded-xl border border-black/5 bg-white p-4 text-sm text-ink/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Itinerary
              </h2>
              <div className="mt-5 rounded-2xl border border-black/5 bg-white p-6">
                <Itinerary stops={pkg.itinerary} />
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-5 font-display text-2xl font-semibold text-indigo">
                Inclusions & Exclusions
              </h2>
              <IncludedExcluded included={pkg.included} excluded={pkg.excluded} />
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-indigo">
                Meeting Point
              </h2>
              <div className="mt-4 flex items-center gap-2 text-sm text-ink/75">
                <MapPin className="h-4 w-4 text-saffron-dark" />
                {pkg.pickupPoint}
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-black/5">
                <iframe
                  src={siteConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Meeting point on Google Maps"
                />
              </div>
            </div>
          </div>

          <div>
            <BookingCard pkg={pkg} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-indigo">
            You Might Also Like
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherPackages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
