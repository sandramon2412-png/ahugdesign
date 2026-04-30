type Props = {
  label?: string;
  gradient?: string;
  className?: string;
  ratio?: string;
};

/**
 * Elegant brand-colored placeholder used wherever a real photo or video
 * will be wired in later. Keeps the layout looking finished, not broken.
 */
export function PlaceholderImage({
  label = "Image",
  gradient = "linear-gradient(160deg, var(--sage) 0%, var(--sage-light) 100%)",
  className = "",
  ratio,
}: Props) {
  return (
    <div
      className={`relative flex size-full items-center justify-center overflow-hidden ${className}`}
      style={{ background: gradient, aspectRatio: ratio }}
    >
      <div className="absolute inset-0 bg-grain opacity-[0.08]" />
      <div className="absolute inset-0 bg-botanical opacity-30 mix-blend-soft-light" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <svg width="40" height="40" viewBox="0 0 36 36" fill="none" className="opacity-70">
          <path
            d="M18 30 C18 30 8 22 8 14 C8 9 12 6 18 8 C24 6 28 9 28 14 C28 22 18 30 18 30Z"
            fill="rgba(255,255,255,0.85)"
          />
        </svg>
        <span
          className="text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
