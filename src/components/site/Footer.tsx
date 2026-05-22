import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/ahugdesign";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590305601722";
const SUPPORT_EMAIL = "ahugdesign.support@gmail.com";

export function Footer() {
  return (
    <footer
      className="px-6 pb-8 pt-16 md:px-12"
      style={{ background: "var(--espresso)", color: "var(--cream-white)" }}
    >
      <div
        className="mx-auto grid max-w-6xl gap-10 border-b pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12"
        style={{ borderColor: "color-mix(in oklab, var(--cream) 8%, transparent)" }}
      >
        <div>
          <p className="font-script text-4xl" style={{ color: "color-mix(in oklab, var(--cream) 92%, transparent)" }}>
            A Hug Design
          </p>
          <p
            className="mt-1 font-display italic text-base"
            style={{ color: "color-mix(in oklab, var(--cream) 45%, transparent)" }}
          >
            Designs that feel like a hug.
          </p>
          <p
            className="mt-6 max-w-xs text-sm font-light leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
          >
            Woman-owned studio designing tote bags, apparel and gifts that celebrate the moments that matter.
          </p>
        </div>

        <div>
          <p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em]"
            style={{ color: "color-mix(in oklab, var(--cream) 35%, transparent)" }}
          >
            Explore
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "Our Story" },
              { to: "/collections", label: "Collections" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-light transition-colors hover:text-cream-white"
                  style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em]"
            style={{ color: "color-mix(in oklab, var(--cream) 35%, transparent)" }}
          >
            Connect
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.etsy.com/shop/AHugDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-light transition-colors hover:text-cream-white"
              style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
            >
              <span
                className="grid size-8 place-items-center rounded-full text-[10px] font-bold"
                style={{
                  background: "color-mix(in oklab, var(--cream) 6%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
                }}
              >
                E
              </span>
              Etsy · @AHugDesign
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-light transition-colors hover:text-cream-white"
              style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
            >
              <span
                className="grid size-8 place-items-center rounded-full"
                style={{
                  background: "color-mix(in oklab, var(--cream) 6%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
                }}
              >
                <Instagram size={13} />
              </span>
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-light transition-colors hover:text-cream-white"
              style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
            >
              <span
                className="grid size-8 place-items-center rounded-full text-[13px] font-bold"
                style={{
                  background: "color-mix(in oklab, var(--cream) 6%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
                }}
              >
                f
              </span>
              Facebook
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-3 text-sm font-light transition-colors hover:text-cream-white"
              style={{ color: "color-mix(in oklab, var(--cream) 55%, transparent)" }}
            >
              <span
                className="grid size-8 place-items-center rounded-full"
                style={{
                  background: "color-mix(in oklab, var(--cream) 6%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
                }}
              >
                <Mail size={13} />
              </span>
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-between gap-2 text-[11px] tracking-wider"
        style={{ color: "color-mix(in oklab, var(--cream) 28%, transparent)" }}
      >
        <span>© {new Date().getFullYear()} A Hug Design · Woman-owned · Est. 2023</span>
        <span>Designed in Dallas · Made to order</span>
      </div>
    </footer>
  );
}
