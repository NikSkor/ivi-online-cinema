import Link from 'next/link'
import styles from './Navigation.module.scss'
import { FC } from 'react'
interface NavigationProps {
  setIsProfileOpen: Function,
  setIsNotificationsOpen: Function,
  setIsFilmsOpen: Function
}
const Navigation:FC<NavigationProps> = ({ setIsProfileOpen, setIsNotificationsOpen, setIsFilmsOpen }) => {
  const filmsHandler = () => {
    setIsProfileOpen(false)
    setIsNotificationsOpen(false)
    setIsFilmsOpen(true)
  }
  return (
    <nav className={styles.navigation}>
      <Link href="/">Мой Иви</Link>
      <Link href="https://www.ivi.ru/new">Что нового</Link>
      <Link href="/movies" onMouseEnter={filmsHandler}>Фильмы</Link>
      <Link href="/series">Сериалы</Link>
      <Link href="/animation">Мультфильмы</Link>
      <Link href="https://www.ivi.ru/tvplus">TV+</Link>
    </nav>
  )
}

export default Navigation