import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import heroVideo from "@/assets/hero.mp4?url";


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
              Shop the Collection
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-xs font-normal uppercase tracking-[0.14em] text-white/90 transition-all hover:border-white/70 hover:bg-white/10"
            >
              Explore Our Story
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

      <BotanicalDivider />

      {/* BRAND PROMISE */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12">
        <div className="absolute inset-0 bg-botanical opacity-50" />
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
            body="From concept to doorstep, every detail is handled with the same love you'd put into a handwritten letter — because you deserve nothing less."
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
        <div className="reveal relative min-h-[420px] overflow-hidden">
          <PlaceholderImage
            label="Sandra · founder portrait"
            gradient="linear-gradient(160deg, var(--sage) 0%, var(--sage-light) 100%)"
            className="absolute inset-0"
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
            How It's Made
          </p>
          <h2
            className="mb-4 font-display"
            style={{ fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1, color: "var(--cream-white)" }}
          >
            Made with Hands,
            <br />
            Heart &amp; Intention
          </h2>
          <p
            className="font-display italic text-lg"
            style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
          >
            Every design goes through a thoughtful creative process before it ever reaches your door.
          </p>
        </div>

        <div
          className="reveal reveal-d2 mx-auto mb-16 aspect-video max-w-3xl overflow-hidden rounded-2xl"
          style={{ border: "1.5px solid color-mix(in oklab, var(--sage) 35%, transparent)" }}
        >
          <PlaceholderImage
            label="Process · video"
            gradient="linear-gradient(160deg, var(--sage-dark) 0%, var(--espresso) 100%)"
          />
        </div>

        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
          {[
            { n: "01", l: "We Design", b: "Every collection starts with a story — a feeling, a celebration, a moment worth capturing in cloth." },
            { n: "02", l: "We Craft", b: "Printed on premium materials with care, each piece is made to be worn, gifted, and treasured for years." },
            { n: "03", l: "You Celebrate", b: "Delivered with love straight to your door — wrapped with intention, sent with warmth." },
          ].map((s, i) => (
            <div key={s.n} className={`reveal reveal-d${i + 1}`}>
              <div
                className="mb-2 font-display text-6xl font-light leading-none"
                style={{ color: "color-mix(in oklab, var(--sage) 25%, transparent)" }}
              >
                {s.n}
              </div>
              <p
                className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "var(--sage-light)" }}
              >
                {s.l}
              </p>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
              >
                {s.b}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream-white)" }} id="collections">
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

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <CollectionCard
            href="/collections/america-250"
            internal
            tag="Patriotic · Limited Edition"
            name="America 250"
            desc="Celebrating 250 years of American freedom"
            cta="Explore Collection →"
            gradient="linear-gradient(160deg, #1a2f5c 0%, #2d4f8a 60%, #3a6faa 100%)"
            delay="reveal-d1"
          />
          <CollectionCard
            tag="Faith & Liberty"
            name="Faith & Freedom"
            desc="Designs rooted in faith and liberty"
            comingSoon
            gradient="linear-gradient(160deg, #4a5e38 0%, var(--sage) 100%)"
            delay="reveal-d2"
          />
          <CollectionCard
            tag="Family · Heirloom"
            name="Family Legacy"
            desc="Personalized heirlooms for your family story"
            comingSoon
            gradient="linear-gradient(160deg, #8a4a2a 0%, var(--terra) 100%)"
            delay="reveal-d3"
          />
          <CollectionCard
            tag="Birthdays · Milestones"
            name="Milestone Moments"
            desc="Celebrating the birthdays that define generations"
            comingSoon
            gradient="linear-gradient(160deg, #2e2218 0%, var(--umber) 100%)"
            delay="reveal-d4"
          />
        </div>
      </section>

      {/* GALLERY (bento) */}
      <section className="bg-cream">
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "minmax(180px, 220px)",
          }}
        >
          <BentoCell area="1 / 1 / 4 / 6" label="Packaging with Purpose" tone="var(--sage)" />
          <BentoCell area="1 / 6 / 2 / 9" label="Every Detail Intentional" tone="var(--terra)" />
          <BentoCell area="1 / 9 / 2 / 13" label="Made with Hands" tone="var(--sage-light)" />
          <BentoCell area="2 / 6 / 4 / 9" label="A Studio Note" tone="var(--umber)" />
          <BentoCell area="2 / 9 / 3 / 11" label="Linen & Cream" tone="var(--blush)" />
          <BentoCell area="2 / 11 / 3 / 13" label="Sun-Soaked" tone="var(--beige)" />
          <BentoCell area="3 / 9 / 4 / 13" label="Behind the Scenes" tone="var(--sage-dark)" />
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
              letterSpacing: "-0.02em",
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
            Free U.S. shipping on orders over $50
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
    <div className={`reveal ${delay} px-6 text-center md:px-12`}>
      <div className="mb-5 flex justify-center">{icon}</div>
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
  );
}

function BPDivider() {
  return (
    <div
      className="hidden self-center md:block"
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
}) {
  const inner = (
    <>
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="absolute inset-0"
        style={{
          background: comingSoon
            ? "linear-gradient(to top, rgba(35,28,22,0.92) 0%, rgba(35,28,22,0.5) 100%)"
            : "linear-gradient(to top, rgba(35,28,22,0.85) 0%, rgba(35,28,22,0.2) 50%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />
      <span
        className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur"
        style={{ background: "rgba(35,28,22,0.3)" }}
      >
        {tag}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3
          className="mb-1.5 font-display italic text-white"
          style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1 }}
        >
          {name}
        </h3>
        <p className="mb-5 text-xs text-white/70">{desc}</p>
        {comingSoon ? (
          <span
            className="inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{
              border: "1.5px solid color-mix(in oklab, var(--sage-light) 70%, transparent)",
              color: "color-mix(in oklab, var(--sage-light) 95%, transparent)",
            }}
          >
            Coming Soon
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
            style={{ background: "var(--terra)" }}
          >
            {cta}
          </span>
        )}
      </div>
    </>
  );

  const className = `reveal ${delay} group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-card transition-transform hover:-translate-y-1`;

  if (comingSoon) {
    return <div className={className}>{inner}</div>;
  }
  if (internal && href) {
    return (
      <Link to={href as string} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {inner}
    </a>
  );
}

function BentoCell({ area, label, tone }: { area: string; label: string; tone: string }) {
  return (
    <div className="group relative overflow-hidden" style={{ gridArea: area }}>
      <PlaceholderImage
        label={label}
        gradient={`linear-gradient(160deg, ${tone} 0%, color-mix(in oklab, ${tone} 60%, white) 100%)`}
        className="size-full transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top, color-mix(in oklab, ${tone} 80%, transparent), transparent)` }}
      >
        <span className="font-display italic text-white" style={{ fontSize: 16 }}>
          {label}
        </span>
      </div>
    </div>
  );
}
