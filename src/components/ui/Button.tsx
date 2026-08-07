import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[4px] px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-moss text-paper hover:bg-moss-deep",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline underline-offset-4 decoration-stone hover:decoration-ink",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function LinkButton({ href, variant = "primary", className, children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
