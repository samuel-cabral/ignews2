import Link from "next/link";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" className={styles.logo} width={120} height={40} />
        </Link>
        <nav>
          <Link className={styles.active} href="/">
           Home
          </Link>
          <Link className={styles.link} href="/posts">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
}
