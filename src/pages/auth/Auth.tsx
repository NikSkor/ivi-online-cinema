import { FC } from "react"
import styles from './Auth.module.scss'
import Image from "next/image"
import Link from "next/link"
const Auth: FC = () => {
  return (
    <div className={styles.authPage}>
      <header>
        <p>Вход или регистрация</p>
        <Link href="/">
          <Image src="/x-icon.svg" width={20} height={20} alt="x" />
        </Link>
        <div className={styles.progressBar}>
          <div className={styles.currentProgress}>

          </div>
        </div>
      </header>
      <main>
        <p>hello</p>
      </main>
    </div>
  )
}

export default Auth