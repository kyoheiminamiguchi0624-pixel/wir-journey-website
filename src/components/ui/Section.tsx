import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "paper" | "deep" | "ink";
  narrow?: boolean;
  as?: "section" | "div";
}

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-paper text-ink",
  deep: "bg-paper-deep text-ink",
  ink: "bg-ink text-paper",
};

export function Section({
  className,
  children,
  tone = "paper",
  narrow = false,
  as = "section",
  ...props
}: SectionProps) {
  const Comp = as;
  return (
    <Comp className={cn("py-20 md:py-28 lg:py-32", toneClasses[tone], className)} {...props}>
      <Container narrow={narrow}>{children}</Container>
    </Comp>
  );
}
