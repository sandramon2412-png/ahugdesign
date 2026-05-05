import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";

const COLLECTIONS = [
  {
    name: "America 250",
    tag: "Patriotic · Limited Edition",
    desc: "Celebrating 250 years of American freedom — vintage-inspired designs in red, white and blue.",
    gradient: "linear-gradient(160deg, #1a2f5c 0%, #2d4f8a 60%, #3a6faa 100%)",
    href: "/collections/america-250",
    available: true,
  },
  {
    name: "Roots & Legacy",
    tag: "Family · Heirloom",
    desc: "Diseños personalizados con apellido familiar — para celebrar la historia de tu familia.",
    gradient: "linear-gradient(160deg, #8a4a2a 0%, var(--terra) 100%)",
    available: false,
  },
  {
    name: "Faith & Freedom",
    tag: "Faith · Liberty",
    desc: "Diseños cristianos + patrióticos — fe y libertad, hechos para llevar todos los días.",
    gradient: "linear-gradient(160deg, #4a5e38 0%, var(--sage) 100%)",
    available: false,
  },
  {
    name: "Born to Celebrate",
    tag: "Birthdays · Milestones",
    desc: "Cumpleaños milestone — 30, 40, 50, 60 años. Celebrando las décadas que marcan generaciones.",
    gradient: "linear-gradient(160deg, #2e2218 0%, var(--umber) 100%)",
    available: false,
  },
  {
    name: "Good Humor",
    tag: "Humor · Everyday",
    desc: "Diseños graciosos y sarcásticos — porque la vida es mejor cuando te ríes un poco.",
    gradient: "linear-gradient(160deg, var(--sage-dark) 0%, var(--sage) 100%)",
    available: false,
  },
];

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections · A Hug Design" },
      {
        name: "description",
        content:
          "Explore every A Hug Design collection — patriotic, faith, family legacy, milestones and more. Designs for every celebration.",
      },
      { property: "og:title", content: "Collections · A Hug Design" },
      { property: "og:description", content: "Designs for every celebration. Explore the studio's collections." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  useReveal();

  return (
    <>
      <section
        className="relative px-6 pb-16 pt-32 text-center md:px-12"
        style={{ background: "var(--linen)" }}
      >
        <div className="absolute inset-0 bg-botanical opacity-30" />
        <div className="relative mx-auto max-w-2xl">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            Our Collections
          </p>
          <h1 className="mb-5 font-display" style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1 }}>
            Designs for every <em className="italic">celebration</em>
          </h1>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            Each collection tells its own story — from the patriotic to the personal. Explore what moves you.
          </p>
        </div>
      </section>

      <BotanicalDivider />

      <section className="px-6 pb-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {COLLECTIONS.map((c, i) => {
            const cardClass = `reveal reveal-d${(i % 5) + 1} group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-card transition-transform hover:-translate-y-1`;
            const inner = (
              <>
                <div className="absolute inset-0" style={{ background: c.gradient }} />
                <div
                  className="absolute inset-0"
                  style={{
                    background: c.available
                      ? "linear-gradient(to top, rgba(35,28,22,0.85) 0%, rgba(35,28,22,0.2) 50%, transparent 100%)"
                      : "linear-gradient(to top, rgba(35,28,22,0.92) 0%, rgba(35,28,22,0.5) 100%)",
                  }}
                />
                <span
                  className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur"
                  style={{ background: "rgba(35,28,22,0.3)" }}
                >
                  {c.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2
                    className="mb-2 font-display italic text-white"
                    style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1.1 }}
                  >
                    {c.name}
                  </h2>
                  <p className="mb-5 text-sm text-white/75 max-w-md">{c.desc}</p>
                  {c.available ? (
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--terra)" }}
                    >
                      Explore Collection →
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        border: "1.5px solid color-mix(in oklab, var(--sage-light) 70%, transparent)",
                        color: "color-mix(in oklab, var(--sage-light) 95%, transparent)",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </>
            );

            return c.available && c.href ? (
              <Link key={c.name} to={c.href} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <div key={c.name} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
