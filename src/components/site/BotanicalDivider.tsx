type Props = {
  variant?: "simple" | "ornate" | "minimal";
  className?: string;
};

function OrbitMark({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vertical dashed line */}
      <line
        x1="60"
        y1="0"
        x2="60"
        y2="180"
        stroke="var(--sage)"
        strokeWidth="1.2"
        strokeDasharray="4 6"
        opacity="0.85"
      />
      {/* Top circle */}
      <circle
        cx="60"
        cy="50"
        r="7"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="1.4"
        opacity="0.9"
      />
      {/* Bottom circle */}
      <circle
        cx="60"
        cy="130"
        r="7"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="1.4"
        opacity="0.9"
      />
      {/* Two crossed ellipses (orbit) */}
      <ellipse
        cx="60"
        cy="90"
        rx="38"
        ry="42"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="1.4"
        opacity="0.9"
        transform="rotate(20 60 90)"
      />
      <ellipse
        cx="60"
        cy="90"
        rx="38"
        ry="42"
        fill="none"
        stroke="var(--sage)"
        strokeWidth="1.4"
        opacity="0.9"
        transform="rotate(-20 60 90)"
      />
    </svg>
  );
}

export function BotanicalDivider({ variant = "simple", className = "" }: Props) {
  const size = variant === "ornate" ? 140 : variant === "minimal" ? 90 : 120;
  return (
    <div className={`flex items-center justify-center py-10 ${className}`}>
      <OrbitMark size={size} />
    </div>
  );
}
