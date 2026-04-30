import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · A Hug Design" },
      {
        name: "description",
        content:
          "A Hug Design was founded by Sandra in 2023 — a woman-owned studio creating intentional pieces that feel like an embrace.",
      },
      { property: "og:title", content: "Our Story · A Hug Design" },
      { property: "og:description", content: "Meet Sandra, the heart behind A Hug Design." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:px-12"
        style={{ background: "var(--linen)" }}
      >
        <div className="absolute inset-0 bg-botanical opacity-30" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            Our Story
          </p>
          <h1
            className="mb-6 font-display"
            style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1 }}
          >
            Crafted with <em className="italic">love</em>,<br />
            sent with <em className="italic">warmth</em>
          </h1>
          <p className="font-display italic text-xl" style={{ color: "var(--sage-dark)" }}>
            "Every meaningful gift should feel like an embrace."
          </p>
        </div>
      </section>

      <BotanicalDivider variant="ornate" />

      {/* Founder block */}
      <section className="grid items-stretch md:grid-cols-2">
        <div className="reveal relative min-h-[480px]">
          <PlaceholderImage
            label="Sandra · founder"
            gradient="linear-gradient(160deg, var(--sage) 0%, var(--sage-light) 100%)"
            className="absolute inset-0"
          />
        </div>
        <div className="reveal reveal-d2 flex flex-col justify-center px-8 py-16 md:px-16" style={{ background: "var(--cream-white)" }}>
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            Meet Sandra
          </p>
          <h2 className="mb-6 font-display" style={{ fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1.1 }}>
            A studio born from a <em className="italic">simple idea</em>
          </h2>
          <div className="space-y-4 text-[15px] font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            <p>
              A Hug Design started in 2023 around a kitchen table, with a stack of fabric, a sketchbook, and the belief
              that the things we wear and carry should mean something.
            </p>
            <p>
              From the first hand-drawn motif to the way each order is wrapped, every step is intentional. We design
              slowly, in small batches, and we treat every package like a letter to a friend.
            </p>
            <p>
              Today the studio celebrates milestones, faith, family and the quiet joy of everyday life — all in pieces
              made to be held, gifted, and remembered.
            </p>
          </div>
          <p className="mt-8 font-script text-4xl" style={{ color: "var(--espresso)" }}>
            Sandra
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-botanical px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <p
            className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--sage)" }}
          >
            What we believe
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(30px, 3.5vw, 44px)", lineHeight: 1 }}>
            Small studio. <em className="italic">Big heart.</em>
          </h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {[
            { t: "Slow & Intentional", b: "We choose substance over volume. Every design earns its place." },
            { t: "Premium Materials", b: "Soft, durable fabrics that get better with every wash and wear." },
            { t: "Made to be Gifted", b: "From the wrap to the note, every detail is part of the gift." },
          ].map((v, i) => (
            <div key={v.t} className={`reveal reveal-d${i + 1} text-center`}>
              <div
                className="mx-auto mb-5 grid size-14 place-items-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--sage) 20%, transparent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" fill="var(--terra)" />
                </svg>
              </div>
              <h3 className="mb-2 font-display italic text-2xl">{v.t}</h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
                {v.b}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="px-6 py-20 md:px-12" style={{ background: "var(--espresso)" }}>
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2
            className="mb-5 font-display italic"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", color: "var(--cream-white)", lineHeight: 1.1 }}
          >
            Want to say hello?
          </h2>
          <p
            className="mb-8 text-base font-light"
            style={{ color: "color-mix(in oklab, var(--cream) 60%, transparent)" }}
          >
            We love hearing from you — collaborations, questions, custom requests, all welcome.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px"
            style={{ background: "var(--terra)" }}
          >
            Send us a note →
          </Link>
        </div>
      </section>
    </>
  );
}
