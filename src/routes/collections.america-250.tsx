import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";
import america250Video from "@/assets/america-250.mp4";

const PRODUCTS = [
  { name: "Liberty Tote", desc: "Heavyweight cotton tote · vintage stars print", price: "$32" },
  { name: "Heritage Tee", desc: "Soft ringspun cotton · 250th anniversary mark", price: "$28" },
  { name: "Old Glory Sweatshirt", desc: "Premium fleece · raised flag embroidery", price: "$54" },
  { name: "Freedom Hat", desc: "Washed canvas · script lettering", price: "$26" },
  { name: "Anniversary Mug", desc: "Stoneware · gold rim · gift box", price: "$22" },
  { name: "Independence Print", desc: "Archival giclée · 11×14 hand-numbered", price: "$38" },
];

export const Route = createFileRoute("/collections/america-250")({
  head: () => ({
    meta: [
      { title: "America 250 Collection · A Hug Design" },
      {
        name: "description",
        content:
          "America 250 — a limited-edition collection celebrating 250 years of American freedom. Tote bags, apparel and prints, made with care.",
      },
      { property: "og:title", content: "America 250 · A Hug Design" },
      {
        property: "og:description",
        content: "Limited-edition pieces honoring 250 years of American freedom.",
      },
    ],
  }),
  component: America250Page,
});

function America250Page() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #1a2f5c 0%, #2d4f8a 60%, #3a6faa 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,25,55,0.4) 0%, transparent 50%, rgba(15,25,55,0.6) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grain opacity-[0.06]" />

        <div className="reveal relative z-10 px-6 text-center text-white">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
            Limited Edition · Patriotic
          </p>
          <h1
            className="font-script"
            style={{ fontSize: "clamp(64px, 10vw, 130px)", lineHeight: 1 }}
          >
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
              href="https://www.etsy.com/shop/AHugDesign"
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

      {/* Intro copy */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            About this collection
          </p>
          <h2 className="mb-6 font-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1 }}>
            A quarter-millennium of <em className="italic">freedom</em>, in cloth
          </h2>
          <p className="mb-4 text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            America 250 is our love letter to the country that shaped us. Each piece nods to the iconography of the
            republic — the stars, the stripes, the script of the founders — softened with a vintage hand and a quiet
            sense of reverence.
          </p>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Limited quantities. Numbered drops. Wrapped with care, sent with intention.
          </p>
        </div>
      </section>

      {/* Video showcase */}
      <section className="px-6 pb-8 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-card">
          <video
            src={america250Video}
            autoPlay
            muted
            loop
            playsInline
            className="block h-full w-full object-cover"
          />
        </div>
      </section>

      <BotanicalDivider variant="ornate" />

      {/* Product grid */}
      <section className="px-6 pb-24 md:px-12" style={{ background: "var(--cream-white)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 flex items-end justify-between gap-6">
            <div>
              <p
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: "var(--sage)" }}
              >
                The pieces
              </p>
              <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
                Six designs, one <em className="italic">story</em>
              </h3>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <article
                key={p.name}
                className={`reveal reveal-d${(i % 5) + 1} group overflow-hidden rounded-2xl shadow-card transition-all hover:-translate-y-1`}
                style={{ background: "var(--cream)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <PlaceholderImage
                    label={p.name}
                    gradient={`linear-gradient(160deg, #1a2f5c 0%, #${["2d4f8a", "8a3a3a", "b58c5a", "3a6faa", "5a3a8a", "8a5a3a"][i % 6]} 100%)`}
                    className="size-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-baseline justify-between gap-3">
                    <h4 className="font-display text-xl">{p.name}</h4>
                    <span className="text-sm font-medium" style={{ color: "var(--terra)" }}>
                      {p.price}
                    </span>
                  </div>
                  <p className="mb-4 text-xs font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                    {p.desc}
                  </p>
                  <a
                    href="https://www.etsy.com/shop/AHugDesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                    style={{ background: "var(--espresso)" }}
                  >
                    View on Etsy →
                  </a>
                </div>
              </article>
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
            href="https://www.etsy.com/shop/AHugDesign"
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
