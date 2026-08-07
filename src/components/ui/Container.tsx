import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
}

export function Container({ className, narrow, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        narrow ? "max-w-[780px]" : "max-w-[1280px]",
        className
      )}
      {...props}
    />
  );
}
