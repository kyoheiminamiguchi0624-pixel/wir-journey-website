import styles from "./Container.module.css";

export function Container({ children, className = "", maxWidth }) {
  return (
    <div className={`${styles.container} ${className}`} style={maxWidth ? { maxWidth } : undefined}>
      {children}
    </div>
  );
}
