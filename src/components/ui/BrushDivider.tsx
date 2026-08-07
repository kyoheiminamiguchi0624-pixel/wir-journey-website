import { cn } from "@/lib/cn";

interface BrushDividerProps {
  variant?: "ink" | "gold";
  className?: string;
}

/**
 * サイトのシグネチャー要素：一筆書きの筆致を模した罫線。
 * セクション間の区切りとして機能的に使用する。
 */
export function BrushDivider({ variant = "ink", className }: BrushDividerProps) {
  return (
    <svg
      viewBox="0 0 220 16"
      aria-hidden="true"
      className={cn("brush-divider", variant === "gold" && "brush-divider--gold", className)}
    >
      <path
        d="M2 9.5C34 4 62 13 96 7.5C130 2 158 12 188 6.5C200 4.3 210 6 218 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
