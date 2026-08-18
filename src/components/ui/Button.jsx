import Link from "next/link";
import styles from "./Button.module.css";

export function Button({ href, children, variant = "solid", className = "" }) {
  const variantClass = variant === "outline" ? styles.outline : styles.solid;
  return (
    <Link href={href} className={`${styles.button} ${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
