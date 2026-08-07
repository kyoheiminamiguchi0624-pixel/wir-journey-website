import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "moss" | "gold" | "stone";
}

const tones = {
  moss: "border-moss text-moss",
  gold: "border-kyo-gold text-kyo-gold",
  stone: "border-stone text-ink-soft",
};

export function Badge({ children, tone = "moss" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-[4px] border px-3 py-1 text-xs tracking-wider",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}
