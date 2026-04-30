import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/about", label: "Our Story" },
  { to: "/collections", label: "Collections" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-espresso/95 py-3 shadow-soft"
          : "bg-cream/90 py-4"
      }`}
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--espresso) 95%, transparent)"
          : "color-mix(in oklab, var(--cream) 90%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <div
            className="flex size-11 items-center justify-center rounded-full transition-transform group-hover:scale-105"
            style={{
              background: scrolled
                ? "color-mix(in oklab, var(--cream) 15%, transparent)"
                : "color-mix(in oklab, var(--sage) 18%, transparent)",
              border: `1.5px solid ${scrolled ? "color-mix(in oklab, var(--cream) 35%, transparent)" : "color-mix(in oklab, var(--sage) 50%, transparent)"}`,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
              <path
                d="M18 30 C18 30 8 22 8 14 C8 9 12 6 18 8 C24 6 28 9 28 14 C28 22 18 30 18 30Z"
                fill={scrolled ? "var(--blush)" : "var(--terra)"}
                opacity=".9"
              />
            </svg>
          </div>
          <span
            className="font-script text-2xl leading-none transition-colors"
            style={{ color: scrolled ? "var(--cream-white)" : "var(--espresso)" }}
          >
            A Hug Design
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-70"
              style={{
                color: scrolled
                  ? "color-mix(in oklab, var(--cream) 85%, transparent)"
                  : "var(--espresso)",
              }}
              activeProps={{ style: { color: scrolled ? "var(--cream-white)" : "var(--terra)" } }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.etsy.com/shop/AHugDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-px"
            style={{ background: scrolled ? "var(--sage)" : "var(--terra)" }}
          >
            Shop Etsy →
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 md:hidden"
          style={{ color: scrolled ? "var(--cream-white)" : "var(--espresso)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="mx-6 mt-3 rounded-2xl p-5 shadow-soft md:hidden"
          style={{ background: "var(--cream-white)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.18em] text-espresso"
                style={{ color: "var(--espresso)" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.etsy.com/shop/AHugDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white"
              style={{ background: "var(--terra)" }}
            >
              Shop Etsy →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
