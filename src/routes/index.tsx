import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";

import heroVideo from "@/assets/hero.mp4?url";
import processVideo from "@/assets/process.mp4?url";
import ourStoryImage from "@/assets/our-story.png";
import studioShelvesImage from "@/assets/studio-shelves.png";
import etsyMobileImage from "@/assets/etsy-mobile.png";
import instagramGridImage from "@/assets/instagram-grid.png";
import packagingFlatlayImage from "@/assets/packaging-flatlay.png";
import packagingDetailsImage from "@/assets/packaging-details.png";
import packagingRitual2Image from "@/assets/packaging-ritual-2.png";
import packagingRitual3Image from "@/assets/packaging-ritual-3.png";
import america250Video from "@/assets/america-250.mp4?url";

const INSTAGRAM_URL = "https://www.instagram.com/ahugdesign";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590305601722";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Hug Design · Designs That Feel Like a Hug" },
      {
        name: "description",
        content:
          "Tote bags, apparel and personalized gifts designed with intention. Woman-owned, established 2023.",
      },
      { property: "og:title", content: "A Hug Design · Designs That Feel Like a Hug" },
      {
        property: "og:description",
        content: "Designs that celebrate the moments that matter — tote bags, apparel, gifts and personalized keepsakes.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="hero-section relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden" style={{ background: "oklch(0.22 0.018 50)" }}>
        <div className="hero-video-wrap absolute inset-0">
          <video
            className="hero-video absolute inset-0 h-full w-full object-contain"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster=""
          />
        </div>
        <div className="hero-overlay absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="hero-overlay absolute inset-0 bg-grain opacity-[0.06]" />

        <div className="hero-content relative z-10 flex flex-col items-center gap-5 px-6 text-center">
          <p
            className="animate-fade-up text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: "rgba(245,240,232,0.7)", animationDelay: "0.3s" }}
          >
            Woman-Owned · Est. 2023
          </p>
          <h1
            className="hero-title font-script animate-fade-up"
            style={{
              fontSize: "clamp(48px, 11vw, 140px)",
              lineHeight: 1,
              color: "var(--cream-white)",
              animationDelay: "0.5s",
              textShadow: "0 6px 24px rgba(0,0,0,0.45)",
            }}
          >
            A Hug Design
          </h1>
          <div
            className="flex items-center gap-3.5 animate-fade-up text-sm"
            style={{ color: "rgba(245,240,232,0.5)", animationDelay: "0.7s" }}
          >
            <span className="h-px w-12" style={{ background: "rgba(245,240,232,0.35)" }} />
            ✦
            <span className="h-px w-12" style={{ background: "rgba(245,240,232,0.35)" }} />
          </div>
          <p
            className="font-display italic animate-fade-up"
            style={{
              fontSize: "clamp(22px, 3.5vw, 38px)",
              color: "rgba(245,240,232,0.92)",
              lineHeight: 1.2,
              animationDelay: "0.9s",
            }}
          >
            Designs That Feel Like a Hug
          </p>
          <p
            className="animate-fade-up text-[10px] font-normal uppercase tracking-[0.22em]"
            style={{ color: "rgba(245,240,232,0.55)", animationDelay: "1.1s" }}
          >
            Tote Bags · Apparel · Gifts · Personalized
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3.5 animate-fade-up" style={{ animationDelay: "1.3s" }}>
            <a
              href="https://www.etsy.com/shop/AHugDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-soft transition-all hover:-translate-y-0.5"
              style={{ background: "var(--terra)" }}
            >
              Shop on Etsy
            </a>
            <Link
              to="/collections/america-250"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-xs font-normal uppercase tracking-[0.14em] text-white/90 transition-all hover:border-white/70 hover:bg-white/10"
            >
              View America 250
            </Link>
          </div>
        </div>

        <div
          className="hero-scroll absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 animate-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          <div
            className="flex h-10 w-6 justify-center rounded-full pt-2"
            style={{ border: "1.5px solid rgba(245,240,232,0.4)" }}
          >
            <div className="size-1 rounded-full animate-scroll-dot" style={{ background: "rgba(245,240,232,0.6)" }} />
          </div>
          <span className="text-[9px] uppercase tracking-[0.22em]" style={{ color: "rgba(245,240,232,0.4)" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10 px-6 py-5 md:px-12" style={{ background: "var(--cream-white)" }}>
        <div
          className="reveal mx-auto grid max-w-6xl gap-3 rounded-2xl border px-4 py-4 shadow-card sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "color-mix(in oklab, var(--sage) 24%, transparent)", background: "var(--linen)" }}
        >
          {[
            ["Made to order", "Freshly produced for every customer"],
            ["Secure Etsy checkout", "Favorites, reviews and buyer protection"],
            ["Custom orders welcome", "Names, dates and personal details"],
            ["U.S. fulfillment", "Professionally printed and shipped with care"],
          ].map(([title, body]) => (
            <div key={title} className="flex items-start gap-3 px-2 py-1">
              <span
                className="mt-1 size-2.5 rounded-full"
                style={{ background: "var(--terra)", boxShadow: "0 0 0 5px color-mix(in oklab, var(--terra) 12%, transparent)" }}
              />
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--espresso)" }}>
                  {title}
                </span>
                <span className="mt-1 block text-xs font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                  {body}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <BotanicalDivider />

      {/* BRAND PROMISE */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="absolute inset-0 bg-botanical opacity-50 rounded-sm" />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[1fr_1px_1fr_1px_1fr] md:gap-0">
          <BPColumn
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2 C18 2 22 10 28 12 C22 14 18 22 18 22 C18 22 14 14 8 12 C14 10 18 2 18 2Z" fill="var(--sage-light)" opacity=".9" />
                <path d="M18 12 Q20 8 24 10" stroke="var(--sage)" strokeWidth="1" fill="none" />
              </svg>
            }
            title="Intentionally Designed"
            body="Every piece begins with a story worth telling. We design with purpose, celebrating the moments that matter most to the people you love."
            delay=""
          />
          <BPDivider />
          <BPColumn
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 4 C12 4 6 10 6 18 C6 26 12 32 18 32" stroke="var(--sage)" strokeWidth="1.2" fill="none" />
                <path d="M18 4 C24 4 30 10 30 18 C30 26 24 32 18 32" stroke="var(--terra)" strokeWidth="1.2" fill="none" strokeDasharray="3 3" />
                <circle cx="18" cy="18" r="3" fill="var(--beige)" />
              </svg>
            }
            title="Crafted with Care"
            body="From concept to checkout, every detail is guided with the same love you'd put into a handwritten letter, because you deserve nothing less."
            delay="reveal-d2"
          />
          <BPDivider />
          <BPColumn
            icon={
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 30 C18 30 8 22 8 14 C8 9 12 6 18 8 C24 6 28 9 28 14 C28 22 18 30 18 30Z" fill="var(--blush)" stroke="var(--terra)" strokeWidth="1" />
                <circle cx="18" cy="12" r="2" fill="var(--sage-light)" />
              </svg>
            }
            title="Yours to Keep Forever"
            body="These aren't just products. They're keepsakes — designed to be gifted, treasured, and remembered long after the moment has passed."
            delay="reveal-d3"
          />
        </div>
      </section>

      <BotanicalDivider variant="ornate" />

      {/* STORY */}
      <section className="grid min-h-[600px] md:grid-cols-2" id="story">
        <div className="reveal interactive-image-frame relative m-6 min-h-[420px] overflow-hidden rounded-3xl md:m-8">
          <img
            src={ourStoryImage}
            alt="Sandra · founder portrait — A Hug Design"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div
          className="reveal reveal-d2 flex flex-col justify-center px-8 py-16 md:px-16"
          style={{ background: "var(--linen)" }}
        >
          <p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            Our Story
          </p>
          <h2
            className="mb-6 font-display"
            style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1, color: "var(--espresso)" }}
          >
            Behind Every Design,
            <br />
            <em className="italic">a Warm Intention</em>
          </h2>
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px flex-1" style={{ background: "color-mix(in oklab, var(--sage) 30%, transparent)" }} />
            <span className="size-2 rounded-full" style={{ background: "var(--terra)" }} />
            <span className="h-px flex-1" style={{ background: "color-mix(in oklab, var(--sage) 30%, transparent)" }} />
          </div>
          <blockquote
            className="mb-7 border-l-2 pl-5 font-display italic"
            style={{
              fontSize: "clamp(18px, 2vw, 22px)",
              color: "var(--sage-dark)",
              lineHeight: 1.5,
              borderColor: "var(--sage-light)",
            }}
          >
            "I started A Hug Design because I believe every meaningful gift should feel like an embrace."
          </blockquote>
          <p className="mb-4 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            A Hug Design was born from a simple but powerful idea — that the things we carry and wear should tell stories worth telling. Every design begins with intention, celebrating the milestones and moments that define us.
          </p>
          <p className="mb-3 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            From patriotic pride to family legacy, from faith and freedom to the humor in everyday life — we create pieces that feel personal, because they are.
          </p>
          <p className="font-script text-4xl mt-3 mb-6" style={{ color: "var(--espresso)" }}>
            Sandra
          </p>
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium uppercase tracking-[0.12em]"
            style={{ color: "var(--sage-dark)" }}
          >
            <span>5+ Collections</span>
            <span>·</span>
            <span>Premium Quality</span>
            <span>·</span>
            <span>★ 5 Star Shop</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--espresso)" }}>
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <p
            className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage-light)" }}
          >
            Our Creative Process
          </p>
          <h2
            className="mb-4 font-display"
            style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1, color: "var(--cream-white)" }}
          >
            Designed with Heart
            <br />
            &amp; Intention
          </h2>
          <p
            className="font-display italic text-lg"
            style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
          >
            Every design goes through a thoughtful creative process before it ever reaches your door.
          </p>
        </div>

        <div
          className="reveal reveal-d2 interactive-image-frame mx-auto mb-16 aspect-video max-w-3xl overflow-hidden rounded-2xl"
          style={{ border: "1.5px solid color-mix(in oklab, var(--sage) 35%, transparent)" }}
        >
          <video
            className="h-full w-full object-cover"
            src={processVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            { n: "01", l: "We Design", b: "Every collection starts with a story, a feeling, a celebration, a moment worth capturing in cloth." },
            { n: "02", l: "We Prepare", b: "Your piece is professionally printed on quality materials, made to be worn, gifted, and treasured for years." },
            { n: "03", l: "You Celebrate", b: "Ordered securely through Etsy and sent with warmth, so the experience feels thoughtful from start to finish." },
          ].map((s, i) => (
            <div
              key={s.n}
              className={`reveal reveal-d${i + 1} group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-2`}
              style={{
                borderColor: "color-mix(in oklab, var(--sage-light) 18%, transparent)",
                background:
                  "radial-gradient(circle at 18% 12%, color-mix(in oklab, var(--sage-light) 14%, transparent), transparent 38%), linear-gradient(145deg, color-mix(in oklab, var(--espresso) 72%, transparent), color-mix(in oklab, var(--terra) 18%, transparent))",
                boxShadow:
                  "0 30px 80px -46px rgba(0,0,0,0.85), inset 0 1px 0 color-mix(in oklab, white 14%, transparent)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-3 rounded-xl border opacity-45 transition-opacity duration-500 group-hover:opacity-80"
                style={{ borderColor: "color-mix(in oklab, var(--sage-light) 26%, transparent)" }}
              />
              <div
                className="relative mb-3 font-display text-6xl font-light leading-none transition-transform duration-500 group-hover:-translate-y-1"
                style={{ color: "color-mix(in oklab, var(--sage-light) 36%, transparent)" }}
              >
                {s.n}
              </div>
              <p
                className="relative mb-3 text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--sage-light)" }}
              >
                {s.l}
              </p>
              <p
                className="relative text-sm font-light leading-relaxed"
                style={{ color: "color-mix(in oklab, var(--cream) 68%, transparent)" }}
              >
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* THE STUDIO — physical shelves */}
      <section className="grid items-stretch md:grid-cols-2">
        <div
          className="reveal flex flex-col justify-center px-8 py-20 md:px-16"
          style={{ background: "var(--linen)" }}
        >
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            Inside the Studio
          </p>
          <h2
            className="mb-5 font-display"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "var(--espresso)" }}
          >
            A small space, <em className="italic">big intention</em>
          </h2>
          <p className="mb-4 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Our studio is where every idea is sketched, refined and prepared with intention. Sage greens, warm
            linens and terracotta accents shape the same mood you find across the shop.
          </p>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Small shelves, slow rhythms, and a lot of natural light.
          </p>
        </div>
        <div className="reveal reveal-d2 interactive-image-frame relative m-6 min-h-[360px] overflow-hidden rounded-3xl md:m-8">
          <img
            src={studioShelvesImage}
            alt="A Hug Design studio shelves with folded apparel, mugs, totes and caps"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PACKAGING RITUAL */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto mb-12 max-w-2xl text-center">
          <p
            className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            Packaging Ritual
          </p>
          <h2 className="mb-4 font-display" style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1.05 }}>
            The details before it <em className="italic">ships</em>
          </h2>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Ribbons, labels, wax seals and finishing touches are chosen with the same care as the piece itself.
          </p>
        </div>
        <div className="reveal reveal-d2 mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="interactive-image-frame overflow-hidden rounded-2xl">
            <img
              src={packagingFlatlayImage}
              alt="A Hug Design packaging materials laid out on a wooden table with ribbon, labels, boxes and seal stamp"
              className="block aspect-square h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="interactive-image-frame overflow-hidden rounded-2xl">
            <img
              src={packagingRitual2Image}
              alt="Kraft envelope with A Hug Design logo surrounded by twine-tied thank you notes, ribbons and washi tape"
              className="block aspect-square h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="interactive-image-frame overflow-hidden rounded-2xl">
            <img
              src={packagingRitual3Image}
              alt="Flatlay of kraft gift boxes, eucalyptus, twine, wax seal and scissors on a wooden table"
              className="block aspect-square h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="scroll-mt-32 px-6 py-20 md:px-12 md:py-24" style={{ background: "var(--cream-white)" }} id="collections">
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: "var(--terra)" }}>
            Our Collections
          </p>
          <h2 className="mb-4 font-display" style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1 }}>
            Designs for Every
            <br />
            Celebration
          </h2>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Each collection tells a unique story. Explore what moves you.
          </p>
        </div>

        {/* Featured America 250 — horizontal banner */}
        <div className="mx-auto mb-6 max-w-6xl">
          <CollectionCard
            href="/collections/america-250"
            internal
            tag="Patriotic · Limited Edition"
            name="America 250"
            desc="Celebrating 250 years of American freedom"
            cta="View America 250"
            gradient="linear-gradient(145deg, #4f684b 0%, #9a6f4b 48%, #c56f4f 76%, #f2eadc 100%)"
            delay="reveal-d1"
            video={america250Video}
            featured
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CollectionCard
            tag="Family · Heirloom"
            name="Roots & Legacy"
            desc="Personalized family-name designs for heritage keepsakes"
            comingSoon
            gradient="linear-gradient(160deg, #8a4a2a 0%, var(--terra) 100%)"
            delay="reveal-d2"
          />
          <CollectionCard
            tag="Faith · Liberty"
            name="Faith & Freedom"
            desc="Christian and patriotic designs for everyday faith"
            comingSoon
            gradient="linear-gradient(160deg, #4a5e38 0%, var(--sage) 100%)"
            delay="reveal-d3"
          />
          <CollectionCard
            tag="Birthdays · Milestones"
            name="Born to Celebrate"
            desc="Milestone birthday designs for 30, 40, 50 and 60"
            comingSoon
            gradient="linear-gradient(160deg, #2e2218 0%, var(--umber) 100%)"
            delay="reveal-d4"
          />
          <CollectionCard
            tag="Humor · Everyday"
            name="Good Humor"
            desc="Funny, sarcastic designs for everyday gifting"
            comingSoon
            gradient="linear-gradient(160deg, var(--sage-dark) 0%, var(--sage) 100%)"
            delay="reveal-d5"
          />
        </div>
      </section>

      {/* SHOP ON ETSY — mobile lifestyle */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="reveal interactive-image-frame relative aspect-square overflow-hidden rounded-3xl">
            <img
              src={etsyMobileImage}
              alt="Browsing the A Hug Design Etsy shop on a phone over a coffee table"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal reveal-d2">
            <p
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--terra)" }}
            >
              Shop on the go
            </p>
            <h2
              className="mb-5 font-display"
              style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1.05, color: "var(--espresso)" }}
            >
              Find us on <em className="italic">Etsy</em>
            </h2>
            <p className="mb-7 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
              The full collection lives on our Etsy shop — browse, favorite and check out securely from anywhere. Every
              order is professionally produced and shipped with care.
            </p>
            <a
              href="https://www.etsy.com/shop/AHugDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-soft transition-all hover:-translate-y-0.5"
              style={{ background: "var(--terra)" }}
            >
              Open the Etsy Shop →
            </a>
          </div>
        </div>
      </section>

      {/* FOLLOW THE STUDIO — Instagram grid */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream-white)" }}>
        <div className="reveal mx-auto mb-12 max-w-xl text-center">
          <p
            className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            Follow the Studio
          </p>
          <h2 className="mb-4 font-display" style={{ fontSize: "clamp(30px, 3.8vw, 48px)", lineHeight: 1 }}>
            A peek at our <em className="italic">@ahugdesign</em>
          </h2>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Botanicals, mood boards and the little moments behind every collection.
          </p>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal reveal-d2 interactive-image-frame mx-auto block max-w-5xl overflow-hidden rounded-3xl"
        >
          <img
            src={instagramGridImage}
            alt="Instagram mood board grid for A Hug Design — botanicals, totes, stickers and brand quotes"
            className="block h-auto w-full"
            loading="lazy"
          />
        </a>
        <div className="mt-8 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:-translate-y-px"
            style={{ borderColor: "color-mix(in oklab, var(--sage) 50%, transparent)", color: "var(--sage-dark)" }}
          >
            Follow @ahugdesign →
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0 mt-3 inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all hover:-translate-y-px sm:ml-3 sm:mt-0"
            style={{ borderColor: "color-mix(in oklab, var(--terra) 45%, transparent)", color: "var(--terra-dark)" }}
          >
            Visit Facebook →
          </a>
        </div>
      </section>

      {/* WITH EVERY ORDER */}
      <section className="grid items-stretch md:grid-cols-2">
        <div
          className="reveal interactive-image-frame relative m-6 min-h-[360px] overflow-hidden rounded-3xl md:m-8"
          style={{ background: "color-mix(in oklab, var(--linen) 82%, var(--cream-white))" }}
        >
          <img
            src={packagingDetailsImage}
            alt="A Hug Design order packaging with thank-you card, tags, stickers and small gift box"
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <div
          className="reveal reveal-d2 flex flex-col justify-center px-8 py-20 md:px-16"
          style={{ background: "var(--linen)" }}
        >
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            With Every Order
          </p>
          <h2
            className="mb-5 font-display"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)", lineHeight: 1.1, color: "var(--espresso)" }}
          >
            A thank-you note, a soft wrap, a <em className="italic">little ceremony</em>
          </h2>
          <p className="mb-4 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            We want opening your order to feel personal — tissue, tags, stickers and handwritten warmth, all arranged
            to feel thoughtful from the very first glance.
          </p>
          <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Small joys. Big hugs.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-final-cta" />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />
        <div className="reveal relative z-10 px-8 text-center">
          <p
            className="mb-5 text-[10px] font-normal uppercase tracking-[0.3em]"
            style={{ color: "rgba(245,240,232,0.65)" }}
          >
            Ready to celebrate?
          </p>
          <h2
            className="font-display italic"
            style={{
              fontSize: "clamp(52px, 8vw, 96px)",
              color: "var(--cream-white)",
              lineHeight: 0.95,
              letterSpacing: "0",
            }}
          >
            Find a piece that
          </h2>
          <p
            className="font-script mb-7 mt-1"
            style={{
              fontSize: "clamp(56px, 9vw, 110px)",
              color: "rgba(245,240,232,0.95)",
              lineHeight: 1,
            }}
          >
            feels like home
          </p>
          <p
            className="mx-auto mb-10 max-w-xl font-display italic"
            style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "rgba(245,240,232,0.7)" }}
          >
            Every piece is wrapped with intention and sent with warmth — because the way it arrives matters too.
          </p>
          <a
            href="https://www.etsy.com/shop/AHugDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2.5 rounded-full px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] shadow-soft transition-all hover:-translate-y-0.5"
            style={{ background: "var(--cream-white)", color: "var(--espresso)" }}
          >
            Shop on Etsy →
          </a>
          <p className="text-[11px] uppercase tracking-[0.1em]" style={{ color: "rgba(245,240,232,0.45)" }}>
            Made to order through Etsy
          </p>
        </div>
      </section>
    </>
  );
}

function BPColumn({
  icon,
  title,
  body,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: string;
}) {
  return (
    <div className={`order-glass-card reveal ${delay} group rounded-2xl p-7 text-center md:p-8`}>
      <div className="relative z-10">
      <div className="mb-5 flex justify-center transition-transform duration-500 group-hover:-translate-y-1">{icon}</div>
      <h3
        className="mb-4 font-display italic"
        style={{ fontSize: "clamp(22px, 2.5vw, 30px)", color: "var(--espresso)", lineHeight: 1.2 }}
      >
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
        {body}
      </p>
      </div>
    </div>
  );
}

function BPDivider() {
  return (
    <div
      className="hidden self-center opacity-60 md:block"
      style={{
        width: 1,
        height: 160,
        background: "color-mix(in oklab, var(--sage) 30%, transparent)",
      }}
    />
  );
}

function CollectionCard({
  href,
  internal = false,
  tag,
  name,
  desc,
  cta,
  comingSoon = false,
  gradient,
  delay,
  video,
  featured = false,
}: {
  href?: string;
  internal?: boolean;
  tag: string;
  name: string;
  desc: string;
  cta?: string;
  comingSoon?: boolean;
  gradient: string;
  delay: string;
  video?: string;
  featured?: boolean;
}) {
  const inner = (
    <>
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: gradient }} />
      {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: comingSoon
            ? "linear-gradient(to top, rgba(35,28,22,0.92) 0%, rgba(35,28,22,0.5) 100%)"
            : "linear-gradient(to top, rgba(35,28,22,0.85) 0%, rgba(35,28,22,0.2) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.08) 24%, transparent 45%)",
        }}
      />
      <div
        className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-45"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.34) 50%, transparent 100%)" }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <span
        className="absolute left-5 top-5 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/15"
        style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.16)" }}
      >
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <div
          className="rounded-2xl border p-5 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/13"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,255,255,0.16)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
          }}
        >
          <h3
            className="mb-1.5 font-display italic text-white"
            style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1 }}
          >
            {name}
          </h3>
          <p className="mb-5 text-xs text-white/75">{desc}</p>
          {comingSoon ? (
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 group-hover:bg-white/10"
              style={{
                border: "1.5px solid color-mix(in oklab, var(--sage-light) 70%, transparent)",
                color: "color-mix(in oklab, var(--sage-light) 95%, transparent)",
              }}
            >
              Coming Soon
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 group-hover:translate-x-1"
              style={{ background: "var(--terra)" }}
            >
              {cta}
            </span>
          )}
        </div>
      </div>
    </>
  );

  const ratio = featured ? "aspect-[1.12/1] sm:aspect-[760/468]" : "aspect-[1.08/1] sm:aspect-[4/5]";
  const className = `reveal ${delay} group relative block ${ratio} overflow-hidden rounded-3xl border shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_-34px_rgba(46,34,24,0.7)]`;
  const cardStyle = {
    borderColor: "rgba(255,255,255,0.34)",
    background: "rgba(255,255,255,0.08)",
    boxShadow: "0 18px 48px -34px rgba(46,34,24,0.55), inset 0 1px 0 rgba(255,255,255,0.2)",
  };

  if (comingSoon) {
    return (
      <div className={className} style={cardStyle}>
        {inner}
      </div>
    );
  }
  if (internal && href) {
    return (
      <Link to={href as string} className={className} style={cardStyle}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={className} style={cardStyle}>
      {inner}
    </a>
  );
}

