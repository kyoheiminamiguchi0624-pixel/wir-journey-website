import Link from "next/link";
import { Container } from "./Container";
import styles from "./Breadcrumb.module.css";

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="パンくずリスト" className={styles.wrap}>
      <Container>
        <ol className={styles.list}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          {items.map((item) => (
            <li key={item.path}>
              <span className={styles.sep} aria-hidden="true">
                /
              </span>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
