import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border border-stone-light bg-white p-7 md:p-8",
        "transition-shadow duration-300 hover:shadow-[0_8px_24px_-12px_rgba(34,38,31,0.18)]",
        className
      )}
      {...props}
    />
  );
}
