import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={120} height={40} />
        </Link>
        <nav>
          <Link className={styles.active} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/posts">
            Posts
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
