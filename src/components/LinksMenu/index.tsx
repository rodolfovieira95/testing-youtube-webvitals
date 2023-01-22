import Link from "next/link";
import styles from "./styles.module.css";

export const LinksMenu = () => {
  return (
    <ul className={styles.ul}>
      <Link href="/" className={styles.link}>
        <li>Home</li>
      </Link>
      <Link href="/generic" className={styles.link}>
        <li>Partners</li>
      </Link>
      <Link href="/generic" className={styles.link}>
        <li>Blog</li>
      </Link>
      <Link href="/generic" className={styles.link}>
        <li>Contact</li>
      </Link>
    </ul>
  );
};
