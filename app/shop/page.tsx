import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PageShell,
  SecondaryButton,
  StatusNote,
  pillDark,
  pillLight,
  pillSolid,
} from "../components/site-ui";
import { ProductMedallion } from "./ProductMedallion";
import { allProducts, formatPrice, productUrl, STORE_URL } from "@/lib/products";

const STORE_LIVE = Boolean(STORE_URL);

export const metadata: Metadata = {
  title: STORE_LIVE
    ? "Faith Reminders — Christian Keepsakes"
    : "Faith Reminders — Coming Soon",
  description:
    "A small, carefully chosen collection of faith keepsakes that point back to Scripture and prayer.",
  alternates: { canonical: "/shop" },
  // Keep the thin preview out of the index until the store is live.
  robots: STORE_LIVE ? undefined : { index: false, follow: true },
};

const intentionLabels: Record<string, string> = {
  peace: "Peace",
  strength: "Strength",
  protection: "Protection",
  hope: "Hope",
  guidance: "Guidance",
  gratitude: "Gratitude",
  healing: "Healing",
  forgiveness: "Forgiveness",
  anxiety: "Anxiety",
  family: "Family",
};

export default function ShopPage() {
  return (
    <PageShell>
      <section className="relative isolate overflow-hidden rounded-[2rem] px-5 py-12 text-cream-fg shadow-[0_28px_90px_rgba(37,65,50,0.22)] sm:px-8 sm:py-16 lg:px-10">
        <Image
          src="/hero-marble.jpg"
          alt="Carrara marble with warm gold veining"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(13,20,15,0.88)_0%,rgba(22,37,29,0.7)_52%,rgba(13,18,14,0.82)_100%)]" />
        <div className="relative z-10">
          <p className={pillDark}>
            {STORE_LIVE ? "Faith Reminders" : "Coming soon"}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-display sm:text-6xl">
            Faith reminders you can keep close.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cream-fg-muted/88 sm:text-lg">
            A small, carefully chosen collection of keepsakes — each one a quiet
            cue to return to Scripture and prayer. The Bible readings, prayers,
            and Faith Quiz stay free, always.
          </p>
          <div className="mt-7">
            <Link
              href="/start"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cream-fg px-5 py-3 text-sm font-semibold text-green-600 transition hover:-translate-y-0.5 hover:bg-cream-fg"
            >
              Find the one for what you carry
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section data-reveal-stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => {
          const href = productUrl(product);
          const cardClass =
            "flex h-full flex-col overflow-hidden rounded-lg border border-line-200 bg-cream-200/78 shadow-elev-3";

          const content = (
            <>
              <div className="relative">
                <ProductMedallion product={product} />
                {href ? null : (
                  <span className={`absolute right-3 top-3 ${pillSolid}`}>
                    Coming soon
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-serif text-2xl font-semibold leading-tight text-ink-900">
                  {product.name}
                </h2>
                <p className="mt-1 text-sm leading-6 text-ink-600">
                  {product.tagline}
                </p>
                <p className="mt-3 text-sm font-semibold text-success">
                  From {formatPrice(product.priceCents)}
                  <span className="ml-2 font-normal text-ink-500">
                    {product.material}
                  </span>
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.intentions.map((intention) => (
                    <span key={intention} className={pillLight}>
                      {intentionLabels[intention] ?? intention}
                    </span>
                  ))}
                </div>
                {href ? (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-600">
                    Shop now
                    <ArrowRight size={15} strokeWidth={1.8} />
                  </p>
                ) : null}
              </div>
            </>
          );

          return href ? (
            <Link
              key={product.slug}
              href={href}
              className={`group transition hover:-translate-y-0.5 hover:border-gold-500 hover:shadow-elev-4 ${cardClass}`}
            >
              {content}
            </Link>
          ) : (
            <article key={product.slug} className={cardClass}>
              {content}
            </article>
          );
        })}
      </section>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <SecondaryButton href="/jewelry">
          Learn what the symbols mean
        </SecondaryButton>
        <SecondaryButton href="/start">Take the Faith Quiz</SecondaryButton>
      </div>

      <div className="mt-7 max-w-4xl">
        <StatusNote>
          These keepsakes are optional reminders that point back to prayer and
          Scripture. They are not charms, and carry no power, luck, or
          guarantee.
        </StatusNote>
      </div>
    </PageShell>
  );
}
