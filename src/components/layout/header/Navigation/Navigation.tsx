import Link from 'next/link'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">Мой Иви</Link>
      <Link href="https://www.ivi.ru/new">Что нового</Link>
      <Link href="/movies">Фильмы</Link>
      <Link href="/series">Сериалы</Link>
      <Link href="/animation">Мультфильмы</Link>
      <Link href="https://www.ivi.ru/tvplus">TV+</Link>
    </nav>
  )
}

export default Navigation