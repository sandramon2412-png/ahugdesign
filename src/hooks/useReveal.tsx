import { useEffect } from "react";

/**
 * Adds an IntersectionObserver that toggles the `in` class on elements with
 * `.reveal`, animating them as they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in)");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
