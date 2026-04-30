type Props = {
  variant?: "simple" | "ornate" | "minimal";
  className?: string;
};

function LeafDivider({ width = 540 }: { width?: number }) {
  const h = 60;
  const cx = 270;
  const cy = 30;
  return (
    <svg
      width={width}
      height={h}
      viewBox={`0 0 540 ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left dotted line */}
      <line
        x1="20"
        y1={cy}
        x2="220"
        y2={cy}
        stroke="var(--terra)"
        strokeWidth="1.4"
        strokeDasharray="1.5 8"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Right dotted line */}
      <line
        x1="320"
        y1={cy}
        x2="520"
        y2={cy}
        stroke="var(--terra)"
        strokeWidth="1.4"
        strokeDasharray="1.5 8"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Left leaf */}
      <g transform={`translate(${cx - 38}, ${cy - 8}) rotate(-25)`} opacity="0.95">
        <path
          d="M0 8 Q12 -4 26 2 Q20 12 4 12 Z"
          fill="var(--sage-light)"
          stroke="var(--sage)"
          strokeWidth="0.9"
        />
        <path
          d="M2 10 Q14 4 24 4"
          stroke="var(--sage-dark)"
          strokeWidth="0.7"
          fill="none"
          opacity="0.7"
        />
      </g>

      {/* Right leaf */}
      <g transform={`translate(${cx + 12}, ${cy - 8}) rotate(25)`} opacity="0.95">
        <path
          d="M0 8 Q12 -4 26 2 Q20 12 4 12 Z"
          fill="var(--sage-light)"
          stroke="var(--sage)"
          strokeWidth="0.9"
        />
        <path
          d="M2 10 Q14 4 24 4"
          stroke="var(--sage-dark)"
          strokeWidth="0.7"
          fill="none"
          opacity="0.7"
        />
      </g>

      {/* Center circle */}
      <circle
        cx={cx}
        cy={cy}
        r="6"
        fill="none"
        stroke="var(--terra)"
        strokeWidth="1.4"
        opacity="0.95"
      />
      <circle cx={cx} cy={cy} r="1.6" fill="var(--terra)" />
    </svg>
  );
}

export function BotanicalDivider({ variant = "simple", className = "" }: Props) {
  const width = variant === "ornate" ? 620 : variant === "minimal" ? 420 : 540;
  return (
    <div className={`flex items-center justify-center py-10 ${className}`}>
      <LeafDivider width={width} />
    </div>
  );
}
