type Props = {
  variant?: "simple" | "ornate" | "minimal";
  className?: string;
};

export function BotanicalDivider({ variant = "simple", className = "" }: Props) {
  if (variant === "ornate") {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <svg width="400" height="40" viewBox="0 0 400 40" fill="none" className="opacity-60">
          <line x1="0" y1="20" x2="150" y2="20" stroke="var(--sage)" strokeWidth=".8" strokeDasharray="2 6" />
          <path d="M155 20 C160 10 165 8 170 12 C165 16 160 20 155 20Z" fill="var(--sage-light)" opacity=".7" />
          <path d="M175 20 C170 10 165 8 160 12" stroke="var(--sage)" strokeWidth="1" fill="none" />
          <circle cx="200" cy="20" r="4" fill="none" stroke="var(--terra)" strokeWidth="1.2" opacity=".8" />
          <circle cx="200" cy="20" r="2" fill="var(--terra)" opacity=".6" />
          <path d="M225 20 C230 10 235 8 240 12 C235 16 230 20 225 20Z" fill="var(--sage-light)" opacity=".7" />
          <line x1="250" y1="20" x2="400" y2="20" stroke="var(--sage)" strokeWidth=".8" strokeDasharray="2 6" />
        </svg>
      </div>
    );
  }
  if (variant === "minimal") {
    return (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <svg width="280" height="36" viewBox="0 0 280 36" fill="none" className="opacity-60">
          <line x1="0" y1="18" x2="120" y2="18" stroke="var(--sage)" strokeWidth=".8" />
          <circle cx="140" cy="18" r="3.5" fill="var(--beige)" opacity=".9" />
          <line x1="160" y1="18" x2="280" y2="18" stroke="var(--sage)" strokeWidth=".8" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <svg width="320" height="32" viewBox="0 0 320 32" fill="none" className="opacity-60">
        <line x1="0" y1="16" x2="118" y2="16" stroke="var(--sage)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M128 16 Q134 8 140 16 Q146 24 152 16" stroke="var(--sage)" strokeWidth="1.2" fill="none" />
        <circle cx="160" cy="16" r="3" fill="var(--terra)" opacity=".8" />
        <path d="M168 16 Q174 8 180 16 Q186 24 192 16" stroke="var(--sage)" strokeWidth="1.2" fill="none" />
        <line x1="202" y1="16" x2="320" y2="16" stroke="var(--sage)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M144 10 Q148 4 152 10 Q148 14 144 10Z" fill="var(--sage-light)" opacity=".7" />
        <path d="M168 22 Q172 28 176 22 Q172 18 168 22Z" fill="var(--sage-light)" opacity=".7" />
      </svg>
    </div>
  );
}
