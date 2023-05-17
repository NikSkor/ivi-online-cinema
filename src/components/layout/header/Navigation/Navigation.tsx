import Link from 'next/link'
import styles from './Navigation.module.scss'
import { FC } from 'react'
import { useRouter } from 'next/router'
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

  const locale = useRouter().locale
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        {
          locale === 'ru'
          ? `Мой Иви`
          : `My Ivi`
        }
      </Link>
      <Link href="https://www.ivi.ru/new">
        {
          locale === 'ru'
          ? `Что нового`
          : `What's new`
        }
      </Link>
      <Link href="/movies" onMouseEnter={filmsHandler}>
        {
          locale === 'ru'
          ? `Фильмы`
          : `Films`
        }
      </Link>
      <Link href="/series">
        {
          locale === 'ru'
          ? `Сериалы`
          : `Serials`
        }
      </Link>
      <Link href="/animation">
        {
          locale === 'ru'
          ? `Мультфильмы`
          : `Cartoons`
        }
      </Link>
      <Link href="https://www.ivi.ru/tvplus">TV+</Link>
    </nav>
  )
}

export default Navigation