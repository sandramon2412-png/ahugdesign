import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";
import design01 from "@/assets/america-250/design-01.jpg";
import design02 from "@/assets/america-250/design-02.jpg";
import design03 from "@/assets/america-250/design-03.jpg";
import design04 from "@/assets/america-250/design-04.jpg";
import design05 from "@/assets/america-250/design-05.jpg";
import design06 from "@/assets/america-250/design-06.jpg";
import design07 from "@/assets/america-250/design-07.jpg";
import design08 from "@/assets/america-250/design-08.jpg";
import design09 from "@/assets/america-250/design-09.jpg";
import design10 from "@/assets/america-250/design-10.jpg";
import design11 from "@/assets/america-250/design-11.jpg";
import design12 from "@/assets/america-250/design-12.jpg";
import design13 from "@/assets/america-250/design-13.jpg";
import design14 from "@/assets/america-250/design-14.jpg";
import design15 from "@/assets/america-250/design-15.jpg";
import design16 from "@/assets/america-250/design-16.jpg";
import design17 from "@/assets/america-250/design-17.jpg";
import design18 from "@/assets/america-250/design-18.jpg";
import design19 from "@/assets/america-250/design-19.jpg";
import design20 from "@/assets/america-250/design-20.jpg";
import design21 from "@/assets/america-250/design-21.jpg";
import design22 from "@/assets/america-250/design-22.jpg";
import design23 from "@/assets/america-250/design-23.jpg";
import design24 from "@/assets/america-250/design-24.jpg";
import america250HeroVideo from "@/assets/america-250/america-250-hero.mp4?url";

const designModules = import.meta.glob("../assets/america-250/printify/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const sweatshirtModules = import.meta.glob("../assets/america-250/sweatshirts/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const toteModules = import.meta.glob("../assets/america-250/totes/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const mugModules = import.meta.glob("../assets/america-250/mugs/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const hatModules = import.meta.glob("../assets/america-250/hats/*.png", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const REAL_DESIGNS: { src: string; name: string; number: number }[] = Object.entries(designModules)
  .map(([path, src]) => {
    const number = Number(path.match(/design-art-(\d+)\.webp$/)?.[1] ?? 0);
    return { src, name: `America 250 design ${String(number).padStart(2, "0")}`, number };
  })
  .filter((design) => design.number > 0)
  .sort((a, b) => a.number - b.number);

const TSHIRT_MOCKUPS = [
  { src: design01, name: "America 1776 Born in Liberty tee" },
  { src: design02, name: "Born in 1976 double celebration tee" },
  { src: design03, name: "Faith and Freedom cross tee" },
  { src: design04, name: "Descendant of a Patriot tee" },
  { src: design05, name: "Faith Freedom 250 tee" },
  { src: design06, name: "Botanical America 250 tee" },
  { src: design07, name: "America 250 historical couple tee" },
  { src: design08, name: "Floral semiquincentennial tee" },
  { src: design09, name: "Still arguing 250 years later tee" },
  { src: design10, name: "Family name proudly American tee" },
  { src: design11, name: "Born 1976 age 50 birthday tee" },
  { src: design12, name: "Still arguing about taxes tee" },
  { src: design13, name: "Faith and Freedom 250 years tee" },
  { src: design14, name: "Party like it's 1776 tee" },
  { src: design15, name: "One Nation Under God flag tee" },
  { src: design16, name: "Faith and Freedom stained glass tee" },
  { src: design17, name: "1776 America Independence tee" },
  { src: design18, name: "America 1776 Independence quill tee" },
  { src: design19, name: "Born in 1976 double milestone tee" },
  { src: design20, name: "Celebrating Fifty Years tee" },
  { src: design21, name: "Patriotic family name tee" },
  { src: design22, name: "America 250 watercolor floral tee" },
  { src: design23, name: "Born in Liberty forged in fire tee" },
  { src: design24, name: "Still arguing since 1776 tee" },
];

const SWEATSHIRT_NAMES = [
  "Born in 1976 double celebration sweatshirt",
  "Faith and Freedom cross sweatshirt",
  "Party like it's 1776 sweatshirt",
  "Still arguing about taxes sweatshirt",
  "Botanical family name proudly American sweatshirt",
  "1776 America Independence sweatshirt",
  "America 1776 Independence quill sweatshirt",
  "Faith and Freedom stained glass sweatshirt",
  "One Nation Under God flag sweatshirt",
  "Still arguing since 1776 tea party sweatshirt",
  "Celebrating Fifty Years sweatshirt",
  "America 250 watercolor floral sweatshirt",
  "Floral semiquincentennial sweatshirt",
  "Born in 1976 double milestone sweatshirt",
  "Faith and Freedom 250 years sweatshirt",
  "Descendant of a Patriot sweatshirt",
  "Faith Freedom 250 sweatshirt",
  "Born in Liberty forged in fire sweatshirt",
  "America 250 historical couple sweatshirt",
  "Born 1976 age 50 birthday sweatshirt",
  "Patriotic family name sweatshirt",
  "Family name proudly American sweatshirt",
  "Still arguing 250 years later sweatshirt",
  "Botanical America 250 sweatshirt",
];

const SWEATSHIRT_MOCKUPS = Object.entries(sweatshirtModules)
  .map(([path, src]) => {
    const number = Number(path.match(/sweatshirt-(\d+)\.jpg$/)?.[1] ?? 0);
    return {
      src,
      name: SWEATSHIRT_NAMES[number - 1] ?? `America 250 sweatshirt ${String(number).padStart(2, "0")}`,
      number,
    };
  })
  .filter((mockup) => mockup.number > 0)
  .sort((a, b) => a.number - b.number);

const TOTE_NAMES = [
  "Faith and Freedom tote",
  "One Nation flag tote",
  "America 250 watercolor floral tote",
  "Born in Liberty forged in fire tote",
  "1776 America Independence tote",
  "Still arguing about taxes tote",
  "America 1776 Independence quill tote",
  "Born in 1976 double celebration tote",
  "Faith and Freedom cross tote",
  "America 1776 Born in Liberty tote",
  "Faith and Freedom stained glass tote",
  "Faith Freedom 250 tote",
  "America 250 historical couple tote",
  "Family name proudly American tote",
  "Party like it's 1776 tote",
  "Born 1976 age 50 birthday tote",
  "Botanical America 250 tote",
  "Descendant of a Patriot tote",
  "Born in 1976 double milestone tote",
  "Celebrating Fifty Years tote",
  "Floral semiquincentennial tote",
  "Still arguing 250 years later tote",
  "Botanical family name proudly American tote",
  "Still arguing about taxes since 1776 tote",
];

const TOTE_MOCKUPS = Object.entries(toteModules)
  .map(([path, src]) => {
    const number = Number(path.match(/tote-(\d+)\.jpg$/)?.[1] ?? 0);
    return { src, name: TOTE_NAMES[number - 1] ?? `America 250 tote ${String(number).padStart(2, "0")}`, number };
  })
  .filter((mockup) => mockup.number > 0)
  .sort((a, b) => a.number - b.number);

const MUG_NAMES = [
  "Faith and Freedom mug",
  "Still arguing about taxes mug",
  "Botanical family name proudly American mug",
  "Born 1976 double celebration mug",
  "1776 America Independence mug",
  "America 1776 Independence quill mug",
  "Faith and Freedom stained glass mug",
  "One Nation Under God flag mug",
  "Still arguing since 1776 tea party mug",
  "Born in 1976 double milestone mug",
  "America 250 watercolor floral mug",
  "America 1776 Born in Liberty mug",
  "Family name proudly American mug",
  "Faith and Freedom cross mug",
  "Descendant of a Patriot mug",
  "Faith Freedom 250 mug",
  "Born in Liberty forged in fire mug",
  "Floral semiquincentennial mug",
  "America 250 historical couple mug",
  "Born 1976 age 50 birthday mug",
  "Patriotic family name mug",
  "Still arguing 250 years later mug",
  "Botanical America 250 mug",
  "Party like it's 1776 mug",
];

const MUG_MOCKUPS = Object.entries(mugModules)
  .map(([path, src]) => {
    const number = Number(path.match(/mug-(\d+)\.jpg$/)?.[1] ?? 0);
    return { src, name: MUG_NAMES[number - 1] ?? `America 250 mug ${String(number).padStart(2, "0")}`, number };
  })
  .filter((mockup) => mockup.number > 0)
  .sort((a, b) => a.number - b.number);

const HAT_NAMES = [
  "Party Like It's 1776 embroidered hat",
  "Still Arguing About Taxes embroidered hat",
  "Personalized Family America 250 embroidered hat",
  "Born in 1976 Turning 50 embroidered hat",
  "Faith Freedom 250 embroidered hat",
  "One Nation Under God flag embroidered hat",
  "America 1776 Independence embroidered hat",
  "America 250 Years of Freedom floral embroidered hat",
];

const HAT_MOCKUPS = Object.entries(hatModules)
  .map(([path, src]) => {
    const number = Number(path.match(/hat-(\d+)\.png$/)?.[1] ?? 0);
    return { src, name: HAT_NAMES[number - 1] ?? `America 250 hat ${String(number).padStart(2, "0")}`, number };
  })
  .filter((mockup) => mockup.number > 0)
  .sort((a, b) => a.number - b.number);

type ProductMockup = { src: string; name: string };

const ETSY_SHOP_URL = "https://www.etsy.com/shop/AHugDesign";
const ETSY_AMERICA_250_HATS_MUGS_URL =
  "https://www.etsy.com/shop/AHugDesign?ref=seller-platform-mcnav&section_id=58575726";
const ETSY_AMERICA_250_TEES_TOTES_URL =
  "https://www.etsy.com/shop/AHugDesign?ref=seller-platform-mcnav&section_id=58575726&page=2#items";
const ETSY_AMERICA_250_SWEATSHIRTS_URL =
  "https://www.etsy.com/shop/AHugDesign?ref=seller-platform-mcnav&page=3#items";

// Replace these with the final Etsy listing URLs once each product type is published.
const ETSY_PRODUCT_LINKS = {
  tees: ETSY_AMERICA_250_TEES_TOTES_URL,
  sweatshirts: ETSY_AMERICA_250_SWEATSHIRTS_URL,
  totes: ETSY_AMERICA_250_TEES_TOTES_URL,
  mugs: ETSY_AMERICA_250_HATS_MUGS_URL,
  hats: ETSY_AMERICA_250_HATS_MUGS_URL,
  prints: ETSY_AMERICA_250_HATS_MUGS_URL,
} as const;

const PRODUCT_TYPES = [
  {
    id: "tees",
    name: "T-Shirts",
    desc: "Soft ringspun cotton tees · available in multiple colors on Etsy",
    price: "$24.99",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    gradient: "linear-gradient(160deg, #1a2f5c 0%, #2d4f8a 100%)",
  },
  {
    id: "sweatshirts",
    name: "Sweatshirts",
    desc: "Premium fleece · embroidered and printed designs",
    price: "$38.99",
    sizes: ["S", "M", "L", "XL", "2XL"],
    gradient: "linear-gradient(160deg, #8a3a3a 0%, var(--terra) 100%)",
  },
  {
    id: "totes",
    name: "Tote Bags",
    desc: "Heavy cotton canvas · available in multiple colors on Etsy",
    price: "$24.99",
    sizes: ["One size"],
    gradient: "linear-gradient(160deg, #b58c5a 0%, #8a5a3a 100%)",
  },
  {
    id: "mugs",
    name: "Mugs",
    desc: "Stoneware ceramic · 11 oz · gift box included",
    price: "$18.99",
    sizes: ["11 oz", "15 oz"],
    gradient: "linear-gradient(160deg, #3a6faa 0%, #1a2f5c 100%)",
  },
  {
    id: "hats",
    name: "Hats & Caps",
    desc: "Washed canvas - adjustable - available in multiple colors on Etsy",
    price: "$34.99",
    sizes: ["Adjustable"],
    gradient: "linear-gradient(160deg, #5a3a8a 0%, #2d4f8a 100%)",
  },
  {
    id: "prints",
    name: "Art Prints",
    desc: "Wall art and keepsake prints · coming soon",
    price: "Coming soon",
    sizes: ["8×10", "11×14", "16×20"],
    gradient: "linear-gradient(160deg, #2e2218 0%, var(--umber) 100%)",
  },
];

const FAQ = [
  {
    q: "How many designs are in the collection?",
    a: "24 unique designs are available across T-shirts, sweatshirts, totes, and mugs, plus a curated 8-design embroidered hat selection. Art prints are planned as a coming-soon option.",
  },
  {
    q: "How long does shipping take?",
    a: "Each order is processed in 2-4 business days. U.S. shipping usually takes an additional 3-7 days.",
  },
  {
    q: "Can I personalize a design?",
    a: "Yes. Message us on Etsy or through the contact page and we can create something personal for you.",
  },
  {
    q: "How should I care for apparel?",
    a: "Wash cold on a gentle cycle and air dry. Do not bleach. Iron inside out on medium heat.",
  },
];

export const Route = createFileRoute("/collections/america-250")({
  head: () => ({
    meta: [
      { title: "America 250 Collection · A Hug Design" },
      {
        name: "description",
        content:
          "America 250 is a limited-edition collection celebrating 250 years of American freedom. 24 designs across T-shirts, sweatshirts, totes, and mugs, plus a curated embroidered hat selection.",
      },
      { property: "og:title", content: "America 250 · A Hug Design" },
      {
        property: "og:description",
        content: "A limited-edition collection honoring 250 years of American freedom.",
      },
    ],
  }),
  component: America250Page,
});

function America250Page() {
  useReveal();
  const [isTShirtGalleryOpen, setIsTShirtGalleryOpen] = useState(false);
  const [selectedMockup, setSelectedMockup] = useState<ProductMockup>(TSHIRT_MOCKUPS[0]);
  const [isSweatshirtGalleryOpen, setIsSweatshirtGalleryOpen] = useState(false);
  const [selectedSweatshirtMockup, setSelectedSweatshirtMockup] = useState<ProductMockup>(SWEATSHIRT_MOCKUPS[0]);
  const [isToteGalleryOpen, setIsToteGalleryOpen] = useState(false);
  const [selectedToteMockup, setSelectedToteMockup] = useState<ProductMockup>(TOTE_MOCKUPS[0]);
  const [isHatGalleryOpen, setIsHatGalleryOpen] = useState(false);
  const [selectedHatMockup, setSelectedHatMockup] = useState<ProductMockup>(HAT_MOCKUPS[0]);
  const [isMugGalleryOpen, setIsMugGalleryOpen] = useState(false);
  const [selectedMugMockup, setSelectedMugMockup] = useState<ProductMockup>(MUG_MOCKUPS[0]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, #4f684b 0%, #9a6f4b 42%, #c56f4f 68%, #f2eadc 100%)",
          }}
        />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={america250HeroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(46,34,24,0.72) 0%, rgba(46,34,24,0.22) 48%, rgba(46,34,24,0.74) 100%)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(21, 18, 14, 0.18)" }} />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />

        <div className="reveal relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
            Limited Edition · Patriotic
          </p>
          <h1 className="font-script" style={{ fontSize: "clamp(64px, 10vw, 130px)", lineHeight: 1 }}>
            America 250
          </h1>
          <p
            className="mt-4 font-display italic"
            style={{ fontSize: "clamp(20px, 2.6vw, 30px)", color: "rgba(255,255,255,0.85)" }}
          >
            Celebrating 250 years of American freedom
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href={ETSY_AMERICA_250_HATS_MUGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-soft transition-all hover:-translate-y-0.5"
              style={{ background: "var(--terra)" }}
            >
              Shop the Collection
            </a>
            <Link
              to="/collections"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-xs font-normal uppercase tracking-[0.14em] text-white/90 transition-all hover:border-white/70 hover:bg-white/10"
            >
              ← All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            About the collection
          </p>
          <h2 className="mb-6 font-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1 }}>
            A quarter millennium of <em className="italic">freedom</em>, made wearable
          </h2>
          <p className="mb-4 text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            America 250 is our love letter to the country that shaped us. Each piece honors the symbols of the
            republic: stars, stripes, founding-era lettering, and heirloom details softened with a vintage touch.
          </p>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            <strong>24 unique designs</strong> across tees, sweatshirts, totes, and mugs, plus a curated embroidered hat
            selection. Limited quantities, packed with care, and shipped with intention.
          </p>
        </div>
      </section>

      {/* How to order */}
      <section className="px-6 pb-20 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div
            className="order-glass-card reveal rounded-2xl p-7 md:p-8"
            style={{
              background:
                "radial-gradient(circle at 12% 12%, color-mix(in oklab, var(--terra) 20%, transparent), transparent 34%), radial-gradient(circle at 88% 8%, color-mix(in oklab, var(--sage) 22%, transparent), transparent 35%), linear-gradient(145deg, color-mix(in oklab, var(--linen) 84%, white), color-mix(in oklab, var(--cream-white) 78%, var(--sage-light)))",
            }}
          >
            <div className="relative z-10">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--terra)" }}>
                Easy ordering
              </p>
              <h3 className="font-display" style={{ fontSize: "clamp(28px, 3.2vw, 42px)", lineHeight: 1.05, color: "var(--espresso)" }}>
                Choose the design here,
                <br />
                finish the order on <em className="italic">Etsy</em>
              </h3>
              <p className="mt-5 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                Use this page as your visual catalog. Open a product type, preview the mockups, then select color, size,
                personalization and checkout details securely on Etsy.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Pick a product", "T-shirt, sweatshirt, tote, mug or hat.", "var(--sage)"],
              ["02", "Preview the mockups", "Tap a card to see the full design gallery.", "var(--terra)"],
              ["03", "Buy on Etsy", "Choose size, color and personalization at checkout.", "var(--espresso)"],
            ].map(([step, title, body, accent]) => (
              <div
                key={step}
                className="order-glass-card reveal rounded-2xl p-5"
                style={{
                  background: `radial-gradient(circle at 20% 12%, color-mix(in oklab, ${accent} 18%, transparent), transparent 34%), linear-gradient(145deg, color-mix(in oklab, var(--cream-white) 80%, transparent), color-mix(in oklab, var(--linen) 76%, transparent))`,
                }}
              >
                <div className="relative z-10">
                  <span className="font-display text-5xl leading-none" style={{ color: `color-mix(in oklab, ${accent} 48%, transparent)` }}>
                    {step}
                  </span>
                  <h4 className="mt-4 font-display text-xl" style={{ color: "var(--espresso)" }}>
                    {title}
                  </h4>
                  <p className="mt-2 text-xs font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BotanicalDivider variant="ornate" />

      {/* Product types */}
      <section className="px-6 pb-12 md:px-12" style={{ background: "var(--cream-white)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--sage)" }}
            >
              Available products
            </p>
            <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              Shop by <em className="italic">Product Type</em>
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
              T-Shirts · Sweatshirts · Tote Bags · Mugs · Hats &amp; Caps · Art Prints coming soon
            </p>
          </div>

          <div
            className="reveal reveal-d2 mx-auto mb-10 grid max-w-5xl gap-3 rounded-2xl border px-4 py-4 shadow-card sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: "color-mix(in oklab, var(--sage) 24%, transparent)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.74), color-mix(in oklab, var(--sage-light) 16%, var(--cream-white)))",
            }}
          >
            {["Made to order", "Sizes S-3XL", "Multiple colors", "Secure Etsy checkout"].map((item) => (
              <div
                key={item}
                className="rounded-full px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--espresso)", background: "rgba(255,255,255,0.52)" }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_TYPES.map((p, i) => (
              <article
                key={p.id}
                className={`reveal reveal-d${(i % 5) + 1} group interactive-image-frame overflow-hidden rounded-2xl transition-all`}
                style={{ background: "var(--cream)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  {p.id === "tees" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMockup(TSHIRT_MOCKUPS[0]);
                        setIsTShirtGalleryOpen(true);
                      }}
                      className="block size-full text-left"
                      aria-label="View T-shirt mockups"
                    >
                      <MockupPreview mockups={TSHIRT_MOCKUPS} />
                    </button>
                  ) : p.id === "sweatshirts" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSweatshirtMockup(SWEATSHIRT_MOCKUPS[0]);
                        setIsSweatshirtGalleryOpen(true);
                      }}
                      className="block size-full text-left"
                      aria-label="View sweatshirt mockups"
                    >
                      <MockupPreview mockups={SWEATSHIRT_MOCKUPS} />
                    </button>
                  ) : p.id === "totes" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedToteMockup(TOTE_MOCKUPS[0]);
                        setIsToteGalleryOpen(true);
                      }}
                      className="block size-full text-left"
                      aria-label="View tote bag mockups"
                    >
                      <MockupPreview mockups={TOTE_MOCKUPS} />
                    </button>
                  ) : p.id === "hats" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedHatMockup(HAT_MOCKUPS[0]);
                        setIsHatGalleryOpen(true);
                      }}
                      className="block size-full text-left"
                      aria-label="View hat mockups"
                    >
                      <MockupPreview mockups={HAT_MOCKUPS} />
                    </button>
                  ) : p.id === "mugs" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMugMockup(MUG_MOCKUPS[0]);
                        setIsMugGalleryOpen(true);
                      }}
                      className="block size-full text-left"
                      aria-label="View mug mockups"
                    >
                      <MockupPreview mockups={MUG_MOCKUPS} />
                    </button>
                  ) : (
                    <PlaceholderImage
                      label={p.name}
                      gradient={p.gradient}
                      className="size-full transition-transform duration-700"
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-xl">{p.name}</h4>
                    <span className="text-sm font-medium" style={{ color: "var(--terra)" }}>
                      {p.price}
                    </span>
                  </div>
                  <p className="mb-3 text-xs font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                    {p.desc}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {p.sizes.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium"
                        style={{ borderColor: "var(--sage-light)", color: "var(--umber)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.id === "tees" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMockup(TSHIRT_MOCKUPS[0]);
                        setIsTShirtGalleryOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                      style={{ background: "var(--espresso)" }}
                    >
                      View T-shirt mockups
                    </button>
                  ) : p.id === "sweatshirts" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSweatshirtMockup(SWEATSHIRT_MOCKUPS[0]);
                        setIsSweatshirtGalleryOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                      style={{ background: "var(--espresso)" }}
                    >
                      View sweatshirt mockups
                    </button>
                  ) : p.id === "totes" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedToteMockup(TOTE_MOCKUPS[0]);
                        setIsToteGalleryOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                      style={{ background: "var(--espresso)" }}
                    >
                      View tote mockups
                    </button>
                  ) : p.id === "hats" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedHatMockup(HAT_MOCKUPS[0]);
                        setIsHatGalleryOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                      style={{ background: "var(--espresso)" }}
                    >
                      View hat mockups
                    </button>
                  ) : p.id === "mugs" ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedMugMockup(MUG_MOCKUPS[0]);
                        setIsMugGalleryOpen(true);
                      }}
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                      style={{ background: "var(--espresso)" }}
                    >
                      View mug mockups
                    </button>
                  ) : (
                    <span
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                      style={{ background: "color-mix(in oklab, var(--espresso) 74%, var(--sage))" }}
                    >
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductMockupModal
        open={isTShirtGalleryOpen}
        title="Choose your T-shirt mockup"
        productLabel="T-Shirts"
        ctaLabel="Buy this tee on Etsy"
        etsyUrl={ETSY_PRODUCT_LINKS.tees}
        helperText="Pick the design you like here. Multiple shirt colors and sizes are available on Etsy."
        mockups={TSHIRT_MOCKUPS}
        selected={selectedMockup}
        onSelect={setSelectedMockup}
        onClose={() => setIsTShirtGalleryOpen(false)}
      />
      <ProductMockupModal
        open={isSweatshirtGalleryOpen}
        title="Choose your sweatshirt mockup"
        productLabel="Sweatshirts"
        ctaLabel="Buy this sweatshirt on Etsy"
        etsyUrl={ETSY_PRODUCT_LINKS.sweatshirts}
        helperText="Pick the sweatshirt design you like here. Multiple colors and sizes are available on Etsy."
        mockups={SWEATSHIRT_MOCKUPS}
        selected={selectedSweatshirtMockup}
        onSelect={setSelectedSweatshirtMockup}
        onClose={() => setIsSweatshirtGalleryOpen(false)}
      />
      <ProductMockupModal
        open={isToteGalleryOpen}
        title="Choose your tote mockup"
        productLabel="Tote Bags"
        ctaLabel="Buy this tote on Etsy"
        etsyUrl={ETSY_PRODUCT_LINKS.totes}
        helperText="Pick the tote design you like here, then choose color and checkout details on Etsy."
        mockups={TOTE_MOCKUPS}
        selected={selectedToteMockup}
        onSelect={setSelectedToteMockup}
        onClose={() => setIsToteGalleryOpen(false)}
      />
      <ProductMockupModal
        open={isHatGalleryOpen}
        title="Choose your hat mockup"
        productLabel="Hats & Caps"
        ctaLabel="Buy this hat on Etsy"
        etsyUrl={ETSY_PRODUCT_LINKS.hats}
        helperText="Pick the hat design you like here. Multiple cap colors are available on Etsy."
        mockups={HAT_MOCKUPS}
        selected={selectedHatMockup}
        onSelect={setSelectedHatMockup}
        onClose={() => setIsHatGalleryOpen(false)}
      />
      <ProductMockupModal
        open={isMugGalleryOpen}
        title="Choose your mug mockup"
        productLabel="Mugs"
        ctaLabel="Buy this mug on Etsy"
        etsyUrl={ETSY_PRODUCT_LINKS.mugs}
        helperText="Pick the mug design you like here, then choose size and checkout details on Etsy."
        mockups={MUG_MOCKUPS}
        selected={selectedMugMockup}
        onSelect={setSelectedMugMockup}
        onClose={() => setIsMugGalleryOpen(false)}
      />

      {/* Designs gallery — 24 designs */}
      <section className="px-6 py-24 md:px-12" style={{ background: "oklch(0.9 0.018 80)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--terra)" }}
            >
              The designs
            </p>
            <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              The collection's <em className="italic">24 designs</em>
            </h3>
            <p className="mt-3 text-sm font-light" style={{ color: "var(--umber)" }}>
              Most designs are available across apparel, totes, and mugs. Hats are a curated 8-design embroidered
              selection.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {Array.from({ length: 24 }).map((_, i) => {
              const real = REAL_DESIGNS[i];
              return (
                <div
                  key={i}
                  className={`reveal reveal-d${(i % 5) + 1} group interactive-image-frame aspect-square overflow-hidden rounded-xl`}
                  style={{ background: "oklch(0.95 0.012 80)" }}
                >
                  {real ? (
                    <img
                      src={real.src}
                      alt={real.name}
                      loading="lazy"
                      className="size-full object-contain p-2 transition-transform duration-700"
                    />
                  ) : (
                    <PlaceholderImage
                      label={`Design ${String(i + 1).padStart(2, "0")}`}
                      gradient={`linear-gradient(${135 + i * 7}deg, #1a2f5c 0%, ${i % 2 === 0 ? "#8a3a3a" : "#3a6faa"} 100%)`}
                      className="size-full transition-transform duration-700"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BotanicalDivider variant="minimal" />

      {/* Sizes & Care */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream-white)" }}>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div
            className="order-glass-card reveal rounded-2xl p-6 md:p-8"
            style={{
              background:
                "radial-gradient(circle at 12% 12%, color-mix(in oklab, var(--sage) 18%, transparent), transparent 34%), linear-gradient(145deg, color-mix(in oklab, var(--cream-white) 82%, transparent), color-mix(in oklab, var(--linen) 74%, transparent))",
            }}
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p
                    className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
                    style={{ color: "var(--terra)" }}
                  >
                    Sizes
                  </p>
                  <h3 className="font-display" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", color: "var(--espresso)" }}>
                    Size <em className="italic">guide</em>
                  </h3>
                </div>
                <span
                  className="rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ background: "color-mix(in oklab, var(--sage) 16%, white)", color: "var(--sage-dark)" }}
                >
                  S-3XL
                </span>
              </div>
              <div
                className="overflow-hidden rounded-xl border shadow-sm"
                style={{
                  borderColor: "color-mix(in oklab, var(--sage) 34%, transparent)",
                  background: "color-mix(in oklab, var(--cream-white) 72%, transparent)",
                }}
              >
                <table className="w-full text-sm">
                  <thead style={{ background: "linear-gradient(90deg, color-mix(in oklab, var(--sage) 17%, white), color-mix(in oklab, var(--terra) 10%, white))" }}>
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold" style={{ color: "var(--espresso)" }}>Size</th>
                      <th className="px-4 py-3 font-semibold" style={{ color: "var(--espresso)" }}>Chest (in)</th>
                      <th className="px-4 py-3 font-semibold" style={{ color: "var(--espresso)" }}>Length (in)</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: "var(--umber)" }}>
                    {[
                      ["S", "34-36", "28"],
                      ["M", "38-40", "29"],
                      ["L", "42-44", "30"],
                      ["XL", "46-48", "31"],
                      ["2XL", "50-52", "32"],
                      ["3XL", "54-56", "33"],
                    ].map((row, index) => (
                      <tr
                        key={row[0]}
                        className="border-t transition-colors hover:bg-white/50"
                        style={{
                          borderColor: "color-mix(in oklab, var(--sage) 24%, transparent)",
                          background: index % 2 === 0 ? "color-mix(in oklab, var(--cream) 44%, transparent)" : "transparent",
                        }}
                      >
                        <td className="px-4 py-3 font-semibold" style={{ color: "var(--espresso)" }}>{row[0]}</td>
                        <td className="px-4 py-3">{row[1]}</td>
                        <td className="px-4 py-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs font-light" style={{ color: "var(--umber)" }}>
                Measurements are approximate and may vary slightly by product style.
              </p>
            </div>
          </div>

          <div
            className="order-glass-card reveal reveal-d2 rounded-2xl p-6 md:p-8"
            style={{
              background:
                "radial-gradient(circle at 86% 14%, color-mix(in oklab, var(--terra) 18%, transparent), transparent 34%), linear-gradient(145deg, color-mix(in oklab, var(--linen) 78%, transparent), color-mix(in oklab, var(--cream-white) 82%, transparent))",
            }}
          >
            <div className="relative z-10">
              <p
                className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: "var(--terra)" }}
              >
                Materials and care
              </p>
              <h3 className="mb-6 font-display" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", color: "var(--espresso)" }}>
                Made to <em className="italic">last</em>
              </h3>
              <div className="grid gap-3 text-sm" style={{ color: "var(--umber)" }}>
                {[
                  ["T-shirts", "100% ringspun cotton, 5.3 oz"],
                  ["Sweatshirts", "50% cotton / 50% polyester, premium fleece"],
                  ["Totes", "Heavy cotton canvas, 12 oz"],
                  ["Mugs", "Stoneware ceramic, microwave and dishwasher safe"],
                  ["Wash", "Cold water, gentle cycle, air dry"],
                  ["Iron", "Inside out on medium heat"],
                ].map(([label, detail]) => (
                  <div
                    key={label}
                    className="flex gap-3 rounded-xl border px-4 py-3 transition-all hover:-translate-y-0.5 hover:bg-white/55"
                    style={{ borderColor: "color-mix(in oklab, var(--sage) 20%, transparent)" }}
                  >
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: "color-mix(in oklab, var(--terra) 72%, var(--sage))" }}
                    />
                    <p className="font-light leading-relaxed">
                      <strong style={{ color: "var(--espresso)" }}>{label}:</strong> {detail}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em]"
                style={{
                  borderColor: "color-mix(in oklab, var(--terra) 28%, transparent)",
                  background: "color-mix(in oklab, var(--terra) 10%, white)",
                  color: "var(--espresso)",
                }}
              >
                No bleach or dry cleaning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="relative overflow-hidden px-6 py-24 md:px-12"
        style={{
          background:
            "radial-gradient(circle at 14% 16%, color-mix(in oklab, var(--terra) 18%, transparent), transparent 34%), radial-gradient(circle at 86% 10%, color-mix(in oklab, var(--sage) 24%, transparent), transparent 34%), linear-gradient(145deg, color-mix(in oklab, var(--linen) 82%, var(--sage-light)), color-mix(in oklab, var(--cream) 70%, var(--terra)))",
        }}
      >
        <div className="absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="relative mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "color-mix(in oklab, var(--sage-dark) 78%, var(--terra))" }}
            >
              FAQ
            </p>
            <h3
              className="font-display"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "var(--espresso)" }}
            >
              What customers <em className="italic">ask most</em>
            </h3>
          </div>
          <div className="space-y-4">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className={`order-glass-card reveal reveal-d${(i % 4) + 1} group rounded-2xl px-5 py-4 transition-all duration-500 open:shadow-card`}
              >
                <summary className="relative z-10 flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base" style={{ color: "var(--espresso)" }}>
                  <span>
                    <span className="mr-2 inline-flex size-6 items-center justify-center rounded-full text-sm transition-transform duration-300 group-open:rotate-45" style={{ background: "color-mix(in oklab, var(--terra) 14%, white)", color: "var(--terra)" }}>+</span>
                    {f.q}
                  </span>
                </summary>
                <p className="relative z-10 mt-4 border-t pt-4 text-sm font-light leading-relaxed" style={{ borderColor: "color-mix(in oklab, var(--sage) 22%, transparent)", color: "var(--umber)" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1a2f5c 0%, var(--terra) 100%)" }}
        />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />
        <div className="reveal relative z-10 px-8 text-center text-white">
          <h2
            className="mb-3 font-display italic"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1 }}
          >
            Wear a piece of
          </h2>
          <p className="font-script mb-8" style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1 }}>
            history
          </p>
          <a
            href={ETSY_AMERICA_250_HATS_MUGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] shadow-soft transition-all hover:-translate-y-0.5"
            style={{ color: "var(--espresso)" }}
          >
            Shop America 250 →
          </a>
        </div>
      </section>
    </>
  );
}

function ProductMockupModal({
  open,
  title,
  productLabel,
  ctaLabel,
  etsyUrl,
  helperText,
  mockups,
  selected,
  onSelect,
  onClose,
}: {
  open: boolean;
  title: string;
  productLabel: string;
  ctaLabel: string;
  etsyUrl: string;
  helperText: string;
  mockups: ProductMockup[];
  selected: ProductMockup;
  onSelect: (mockup: ProductMockup) => void;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-espresso/70 px-4 py-6 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${productLabel} mockup gallery`}
      onClick={onClose}
    >
      <div
        className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl bg-cream-white shadow-soft">
          <div className="flex items-center justify-between gap-4 border-b border-sage-light/40 px-5 py-4 md:px-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: "var(--terra)" }}>
                {productLabel}
              </p>
              <h3 className="font-display text-2xl italic md:text-3xl" style={{ color: "var(--espresso)" }}>
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="grid size-10 place-items-center rounded-full border text-sm font-semibold transition-colors hover:bg-cream"
              style={{ borderColor: "var(--sage-light)", color: "var(--espresso)" }}
              aria-label={`Close ${productLabel} mockups`}
            >
              X
            </button>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-white p-4 md:p-6">
              <div className="interactive-image-frame mx-auto max-h-[68vh] overflow-hidden rounded-xl">
                <img
                  src={selected.src}
                  alt={selected.name}
                  className="mx-auto block max-h-[68vh] w-full object-contain"
                />
              </div>
            </div>
            <div className="flex max-h-[78vh] flex-col p-5 md:p-6">
              <div>
                <h4 className="font-display text-2xl" style={{ color: "var(--espresso)" }}>
                  {selected.name}
                </h4>
                <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                  {helperText}
                </p>
                <a
                  href={etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px"
                  style={{ background: "var(--terra)" }}
                >
                  {ctaLabel}
                </a>
              </div>

              <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                  {mockups.map((mockup) => {
                    const active = mockup.src === selected.src;
                    return (
                      <button
                        key={mockup.name}
                        type="button"
                        onClick={() => onSelect(mockup)}
                        className="overflow-hidden rounded-xl border-2 p-1 text-left shadow-card transition-all hover:-translate-y-0.5 hover:shadow-soft"
                        style={{
                          background: active ? "color-mix(in oklab, var(--terra) 18%, white)" : "white",
                          borderColor: active ? "var(--terra)" : "color-mix(in oklab, var(--sage-light) 45%, transparent)",
                          boxShadow: active ? "0 16px 36px color-mix(in oklab, var(--terra) 24%, transparent)" : "none",
                        }}
                        aria-pressed={active}
                      >
                        <img
                          src={mockup.src}
                          alt={mockup.name}
                          loading="lazy"
                          className="aspect-[4/5] w-full rounded-lg object-cover"
                        />
                        <span
                          className="block truncate px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                          style={{ color: active ? "var(--terra)" : "var(--umber)" }}
                        >
                          {mockup.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupPreview({ mockups }: { mockups: ProductMockup[] }) {
  return (
    <div className="relative grid size-full grid-cols-2 gap-1.5 bg-white p-1.5">
      {mockups.slice(0, 4).map((shirt) => (
        <img
          key={shirt.name}
          src={shirt.src}
          alt={shirt.name}
          loading="lazy"
          className="size-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ))}
      <span
        className="absolute bottom-3 right-3 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-soft"
        style={{ background: "color-mix(in oklab, var(--espresso) 78%, transparent)" }}
      >
        {mockups.length} mockups
      </span>
    </div>
  );
}
