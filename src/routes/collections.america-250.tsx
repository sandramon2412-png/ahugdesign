import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { BotanicalDivider } from "@/components/site/BotanicalDivider";
import design01 from "@/assets/america-250/design-01.jpg";
import design02 from "@/assets/america-250/design-02.jpg";
import design03 from "@/assets/america-250/design-03.jpg";
import design04 from "@/assets/america-250/design-04.jpg";

// 👇 Para agregar más diseños: copia el archivo a src/assets/america-250/design-XX.jpg
//    importa arriba y agrega un objeto aquí. Cualquier tamaño/proporción funciona.
const REAL_DESIGNS: { src: string; name: string }[] = [
  { src: design01, name: "America 1776 — Born in Liberty" },
  { src: design02, name: "Born in 1976 · Double Celebration" },
  { src: design03, name: "Faith & Freedom" },
  { src: design04, name: "Descendant of a Patriot" },
  // { src: design05, name: "Nombre del diseño" },
];

const PRODUCT_TYPES = [
  {
    id: "tees",
    name: "T-Shirts",
    desc: "Camisetas suaves de algodón ringspun · estampado vintage",
    price: "Desde $28",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    gradient: "linear-gradient(160deg, #1a2f5c 0%, #2d4f8a 100%)",
  },
  {
    id: "sweatshirts",
    name: "Sweatshirts",
    desc: "Fleece premium · diseños bordados y estampados",
    price: "Desde $54",
    sizes: ["S", "M", "L", "XL", "2XL"],
    gradient: "linear-gradient(160deg, #8a3a3a 0%, var(--terra) 100%)",
  },
  {
    id: "totes",
    name: "Tote Bags",
    desc: "Algodón pesado · ideal para el día a día",
    price: "Desde $32",
    sizes: ["Tamaño único"],
    gradient: "linear-gradient(160deg, #b58c5a 0%, #8a5a3a 100%)",
  },
  {
    id: "mugs",
    name: "Mugs",
    desc: "Cerámica de gres · 11 oz · caja de regalo incluida",
    price: "Desde $22",
    sizes: ["11 oz", "15 oz"],
    gradient: "linear-gradient(160deg, #3a6faa 0%, #1a2f5c 100%)",
  },
  {
    id: "hats",
    name: "Hats & Caps",
    desc: "Lona lavada · letras tipo script · ajustable",
    price: "Desde $26",
    sizes: ["Ajustable"],
    gradient: "linear-gradient(160deg, #5a3a8a 0%, #2d4f8a 100%)",
  },
  {
    id: "prints",
    name: "Art Prints",
    desc: "Giclée de archivo · numerado a mano",
    price: "Desde $38",
    sizes: ["8×10", "11×14", "16×20"],
    gradient: "linear-gradient(160deg, #2e2218 0%, var(--umber) 100%)",
  },
];

const FAQ = [
  {
    q: "¿Cuántos diseños hay en la colección?",
    a: "24 diseños únicos disponibles en cada tipo de producto: camisetas, sweatshirts, totes, tazas, gorras y prints.",
  },
  {
    q: "¿Cuánto demora el envío?",
    a: "Procesamos cada pedido en 2–4 días hábiles. El envío dentro de EE.UU. toma 3–7 días adicionales.",
  },
  {
    q: "¿Puedo personalizar un diseño?",
    a: "Sí — escríbenos por Etsy o desde la página de contacto y armamos algo único para ti.",
  },
  {
    q: "¿Cómo cuido mis prendas?",
    a: "Lavar en frío, ciclo suave, secar al aire. No usar blanqueador. Planchar al revés.",
  },
];

export const Route = createFileRoute("/collections/america-250")({
  head: () => ({
    meta: [
      { title: "America 250 Collection · A Hug Design" },
      {
        name: "description",
        content:
          "America 250 — colección limitada celebrando 250 años de libertad americana. 24 diseños en camisetas, sweatshirts, totes, tazas, gorras y prints.",
      },
      { property: "og:title", content: "America 250 · A Hug Design" },
      {
        property: "og:description",
        content: "Edición limitada honrando 250 años de libertad americana.",
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

      {/* Intro */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="reveal mx-auto max-w-3xl text-center">
          <p
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em]"
            style={{ color: "var(--terra)" }}
          >
            Sobre la colección
          </p>
          <h2 className="mb-6 font-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1 }}>
            Un cuarto de milenio de <em className="italic">libertad</em>, en tela
          </h2>
          <p className="mb-4 text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            America 250 es nuestra carta de amor al país que nos formó. Cada pieza rinde homenaje a la
            iconografía de la república — las estrellas, las franjas, la caligrafía de los fundadores —
            suavizado con un toque vintage y un sentido tranquilo de reverencia.
          </p>
          <p className="text-base font-light leading-relaxed" style={{ color: "var(--umber)" }}>
            <strong>24 diseños únicos</strong> disponibles en cada tipo de producto. Cantidades limitadas.
            Empacado con cuidado, enviado con intención.
          </p>
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
              Productos disponibles
            </p>
            <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              6 productos, <em className="italic">24 diseños</em> cada uno
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_TYPES.map((p, i) => (
              <article
                key={p.id}
                className={`reveal reveal-d${(i % 5) + 1} group overflow-hidden rounded-2xl shadow-card transition-all hover:-translate-y-1`}
                style={{ background: "var(--cream)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <PlaceholderImage
                    label={p.name}
                    gradient={p.gradient}
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
                  <a
                    href="https://www.etsy.com/shop/AHugDesign"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors"
                    style={{ background: "var(--espresso)" }}
                  >
                    Ver 24 diseños en Etsy →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Designs gallery — 24 designs */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="reveal mb-12 text-center">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--terra)" }}
            >
              The designs
            </p>
            <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              Los <em className="italic">24 diseños</em> de la colección
            </h3>
            <p className="mt-3 text-sm font-light" style={{ color: "var(--umber)" }}>
              Cada diseño está disponible en los 6 productos de arriba.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            {Array.from({ length: 24 }).map((_, i) => {
              const real = REAL_DESIGNS[i];
              return (
                <div
                  key={i}
                  className={`reveal reveal-d${(i % 5) + 1} group aspect-square overflow-hidden rounded-xl shadow-card bg-white`}
                >
                  {real ? (
                    <img
                      src={real.src}
                      alt={real.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImage
                      label={`Design ${String(i + 1).padStart(2, "0")}`}
                      gradient={`linear-gradient(${135 + i * 7}deg, #1a2f5c 0%, ${i % 2 === 0 ? "#8a3a3a" : "#3a6faa"} 100%)`}
                      className="size-full transition-transform duration-700 group-hover:scale-105"
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
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div className="reveal">
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--terra)" }}
            >
              Tallas
            </p>
            <h3 className="mb-5 font-display" style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>
              Guía de <em className="italic">tallas</em>
            </h3>
            <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--sage-light)" }}>
              <table className="w-full text-sm">
                <thead style={{ background: "var(--cream)" }}>
                  <tr className="text-left">
                    <th className="px-4 py-3 font-medium" style={{ color: "var(--espresso)" }}>Talla</th>
                    <th className="px-4 py-3 font-medium" style={{ color: "var(--espresso)" }}>Pecho (in)</th>
                    <th className="px-4 py-3 font-medium" style={{ color: "var(--espresso)" }}>Largo (in)</th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--umber)" }}>
                  {[
                    ["S", "34–36", "28"],
                    ["M", "38–40", "29"],
                    ["L", "42–44", "30"],
                    ["XL", "46–48", "31"],
                    ["2XL", "50–52", "32"],
                    ["3XL", "54–56", "33"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t" style={{ borderColor: "var(--sage-light)" }}>
                      <td className="px-4 py-2.5 font-medium">{row[0]}</td>
                      <td className="px-4 py-2.5">{row[1]}</td>
                      <td className="px-4 py-2.5">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reveal reveal-d2">
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--terra)" }}
            >
              Materiales y cuidado
            </p>
            <h3 className="mb-5 font-display" style={{ fontSize: "clamp(24px, 2.6vw, 32px)" }}>
              Hechos para <em className="italic">durar</em>
            </h3>
            <ul className="space-y-3 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
              <li>• <strong>Camisetas:</strong> 100% algodón ringspun, 5.3 oz</li>
              <li>• <strong>Sweatshirts:</strong> 50% algodón / 50% poliéster, fleece premium</li>
              <li>• <strong>Totes:</strong> Lona de algodón pesado, 12 oz</li>
              <li>• <strong>Mugs:</strong> Cerámica de gres apta para microondas y lavavajillas</li>
              <li>• <strong>Lavado:</strong> Frío, ciclo suave, secar al aire</li>
              <li>• <strong>Plancha:</strong> Al revés, temperatura media</li>
              <li>• Sin blanqueador ni limpieza en seco</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-12" style={{ background: "var(--cream)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-10 text-center">
            <p
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "var(--sage)" }}
            >
              Preguntas frecuentes
            </p>
            <h3 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
              Lo que más nos <em className="italic">preguntan</em>
            </h3>
          </div>
          <div className="space-y-4">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className={`reveal reveal-d${(i % 4) + 1} group rounded-xl border bg-white px-5 py-4 transition-shadow hover:shadow-card`}
                style={{ borderColor: "var(--sage-light)" }}
              >
                <summary className="cursor-pointer list-none font-display text-base" style={{ color: "var(--espresso)" }}>
                  <span className="mr-2" style={{ color: "var(--terra)" }}>+</span>
                  {f.q}
                </summary>
                <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: "var(--umber)" }}>
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
