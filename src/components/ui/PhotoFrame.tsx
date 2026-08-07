import Image from "next/image";
import { cn } from "@/lib/cn";

interface PhotoFrameProps {
  src?: string;
  alt: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  priority?: boolean;
}

const ratioClasses: Record<NonNullable<PhotoFrameProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * 写真フレーム。src未指定時は本番写真の差し込み待ちであることが分かる
 * プレースホルダーを表示する（ダミー画像やストック写真は使用しない）。
 */
export function PhotoFrame({ src, alt, ratio = "landscape", className, priority }: PhotoFrameProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "relative flex items-end overflow-hidden border border-stone-light",
          "bg-[linear-gradient(135deg,#efe9dc_0%,#e4dfd2_45%,#d8d2c2_100%)]",
          ratioClasses[ratio],
          className
        )}
      >
        <span className="m-4 max-w-[85%] font-display-en text-xs italic leading-relaxed text-ink-soft/70">
          Photo: {alt}
        </span>
      </div>
    );
  }
  return (
    <div className={cn("relative overflow-hidden border border-stone-light", ratioClasses[ratio], className)}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority={priority} />
    </div>
  );
}
