import React, { useState} from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
import Navigation from './Navigation/Navigation'
import Dropdown from './Dropdown/Dropdown'
import Link from 'next/link'


const Header = () => {

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isFilmsOpen, setIsFilmsOpen] = useState(false)
  const isDropdownOpen = isNotificationsOpen || isProfileOpen || isFilmsOpen


  const notificationHandler = () => {
    setIsNotificationsOpen(true)
    setIsProfileOpen(false)
    setIsFilmsOpen(false)
  }


  const profileHandler = () => {
    setIsProfileOpen(true)
    setIsNotificationsOpen(false)
    setIsFilmsOpen(false)
  }

  const headerMouseLeaveHandler = () => {
    setIsProfileOpen(false);
    setIsNotificationsOpen(false)
    setIsFilmsOpen(false)
  }
  
  return (
    <header className={``container ${styles.header} ${isDropdownOpen ? styles.dropdownOpen : ''}`} onMouseLeave={headerMouseLeaveHandler}>
      <div className={styles.headerTop}>
        <Link href="/">
          <Image className={styles.logo} src="/iviLogo.svg" width={66} height={48} alt='logo' />
        </Link>
        <div className={styles.menuContainer}>
          <Navigation setIsProfileOpen={setIsProfileOpen} setIsNotificationsOpen={setIsNotificationsOpen} setIsFilmsOpen={setIsFilmsOpen}/>
        </div>
        <div className={styles.wideArea}>
          <div className={styles.additionalButton}>
            <button>Оплатить подписку</button>
          </div>
          <button className={`${styles.searchButton} ${styles.headerIcon}`}>
            <svg className={styles.searchLink} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" /></svg>
            Поиск
          </button>
        </div>
        <div className={`${styles.notificationButton} ${styles.headerIcon}`} onMouseEnter={!isProfileOpen ? notificationHandler : () => {}}>
          <svg onMouseEnter={notificationHandler} className={styles.notificationLink} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25px" height="25px"><path d="M 32 10 C 29.662 10 28.306672 11.604938 27.638672 13.085938 C 24.030672 13.809937 17.737984 16.956187 16.958984 24.742188 C 16.665984 29.334188 16.1185 37.883781 13.0625 39.300781 C 12.8505 39.398781 12.655234 39.533219 12.490234 39.699219 C 12.235234 39.954219 10 42.294 10 46 C 10 47.104 10.896 48 12 48 L 25.257812 48 C 25.652433 51.372928 28.522752 54 32 54 C 35.477248 54 38.347567 51.372928 38.742188 48 L 52 48 C 53.104 48 54 47.104 54 46 C 54 42.294 51.764766 39.954219 51.509766 39.699219 C 51.344766 39.534219 51.1495 39.397828 50.9375 39.298828 C 47.8825 37.881828 47.333203 29.333922 47.033203 24.669922 C 46.258203 16.945922 39.966375 13.806984 36.359375 13.083984 C 35.692375 11.603984 34.338 10 32 10 z M 32 14 C 32.603 14 32.766719 14.619859 32.886719 15.255859 C 33.063719 16.190859 33.884422 16.914062 34.857422 16.914062 C 34.931422 16.914063 42.311828 17.650047 43.048828 24.998047 C 43.557828 32.932047 44.389891 40.250797 48.837891 42.716797 C 49.024891 42.956797 49.333937 43.401 49.585938 44 L 14.414062 44 C 14.667063 43.397 14.976203 42.95375 15.158203 42.71875 C 19.609203 40.25475 20.442312 32.935313 20.945312 25.070312 C 21.688313 17.650312 29.068578 16.914062 29.142578 16.914062 C 30.099578 16.914062 30.934375 16.156391 31.109375 15.275391 C 31.232375 14.660391 31.396 14 32 14 z M 29.335938 48 L 34.664062 48 C 34.319789 49.152328 33.262739 50 32 50 C 30.737261 50 29.680211 49.152328 29.335938 48 z" /></svg>
        </div>

        <div className={`${styles.avatar} ${styles.headerIcon}`} onMouseEnter={profileHandler}>
          <div className={styles.avatarButton}>
            <svg className={styles.avatarLink} width="25" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" />
            </svg>

          </div>
        </div>
      </div>
      <Dropdown 
      isProfileOpen={isProfileOpen} 
      isNotificationsOpen={isNotificationsOpen}
      isFilmsOpen={isFilmsOpen}/>
    </header>
  )
}

export default Header