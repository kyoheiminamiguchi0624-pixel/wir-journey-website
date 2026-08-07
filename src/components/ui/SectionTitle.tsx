import { cn } from "@/lib/cn";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-display-en text-sm italic tracking-[0.18em]",
            tone === "inverted" ? "text-kyo-gold" : "text-moss"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif-jp text-3xl leading-snug md:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 leading-8",
            tone === "inverted" ? "text-paper/80" : "text-ink-soft"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
