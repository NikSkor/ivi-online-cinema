import Link from 'next/link'
import styles from './Drawer.module.scss'
import { useState } from 'react'
import SocialLink from '../../footer/socialLink/SocialLink'
import { socials } from '../../footer/socialLink/social.data';
const Drawer = () => {
  const [isFilmsOpen, setIsFilmsOpen] = useState(true)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isSupportOpen, setIsSupportOpen] = useState(false)

  return (
    <div className={styles.drawer}>
      <div className={styles.drawerContent}>
        <div className={styles.drawerHeader}>
          <img src="/iviLogo.svg" alt="" />
          <button>Смотреть 30 дней за 1 &#8381;</button>
        </div>
        <div className={styles.services}>
          <button>
            <img src="/diamond-icon.svg" alt="" />
            <p>Подключить подписку</p>
          </button>
          <button>
            <img src="/badge-icon.svg" alt="" />
            <p>Активация сертификата</p>
          </button>
        </div>
        <div className={`${styles.navigationItem} ${styles.profileBlock}`}>
          <div className={styles.profile}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.243 2 7 4.243 7 7C7 9.757 9.243 12 12 12C14.757 12 17 9.757 17 7C17 4.243 14.757 2 12 2ZM12 10C10.346 10 9 8.654 9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7C15 8.654 13.654 10 12 10ZM21 21V20C21 16.141 17.859 13 14 13H10C6.14 13 3 16.141 3 20V21H5V20C5 17.243 7.243 15 10 15H14C16.757 15 19 17.243 19 20V21H21Z" fill="#fff" />
            </svg>
            <p>Профиль</p>
          </div>
        </div>
        <div className={`${styles.navigationItem} ${styles.notificationBlock}`}>
          <div className={styles.notifications}>
            <img src="/notification-icon.svg" width={26} height={26} alt="" />
            <p>Уведомления</p>
          </div>
        </div>
        <p className={styles.navigationItem}>Мой иви</p>
        <p className={styles.navigationItem}>Что нового</p>
        <div className={`${styles.navigationItem} ${styles.filmsBlock}`}>
          <div className={styles.filmsToggle} onClick={() => setIsFilmsOpen(!isFilmsOpen)}>
            <svg width="20px" height="20px" viewBox="0 0 512 512">
            <g>
              <path fill="rgba(255, 255, 255, 1)" d="M480,0H32C14.313,0,0,14.328,0,32v448c0,17.688,14.313,32,32,32h448c17.688,0,32-14.312,32-32V32
                C512,14.328,497.688,0,480,0z M320,32l32,64h-64l-32-64H320z M192,32l32,64h-64l-32-64H192z M32,32h32l32,64H32V32z M480,480H32
                V128h448V480z M480,96h-64l-32-64h64l32,32V96z M355.375,289.688c15.75,7.875,15.75,20.75,0,28.625l-166.75,83.375
                C172.875,409.562,160,401.594,160,384V224c0-17.594,12.875-25.563,28.625-17.688L355.375,289.688z" />
            </g>
            </svg>
            <p>Фильмы</p>
          </div>
          <div className={`${styles.hideBlock} ${isFilmsOpen ? styles.open : ''}`}>
            <div className={styles.category}>
              <p className={styles.title}>Жанры</p>
              {
                // render
              }
            </div>
            <div className={styles.category}>
              <p className={styles.title}>Страны</p>
              {
                // render
              }
            </div>
            <div className={styles.category}>
              <p className={styles.title}>Годы</p>
              {
                // render
              }
            </div>
            <div className={styles.others}>
              <div className={styles.linkList}>
              <Link className={styles.link} href="/">Новинки</Link>
              <Link className={styles.link} href="/">Подборки</Link>
              <Link className={styles.link} href="/">Иви.Рейтинг</Link>
              <Link className={styles.link} href="/">Скоро на Иви</Link>
              <Link className={styles.link} href="/">Трейлеры</Link>
              <Link className={styles.link} href="/">Что посмотреть</Link>
              <Link className={styles.link} href="/">Фильмы в HD</Link>
              <Link className={styles.link} href="/">Выбор Иви</Link>
              <Link className={styles.link} href="/">Новинки подписки</Link>
              <Link className={styles.link} href="/">Фильмы Amediateka</Link>
              <Link className={styles.link} href="/">Популярные фильмы</Link>
              <Link className={styles.link} href="/">Фильмы Иви</Link>
              </div>
            </div>
          </div>
        </div>
        <p className={styles.navigationItem}>Что посмотреть</p>
        <div className={styles.ratingBlock}>
          <p>Иви.Рейтинг фильмы</p>
          <p>Иви.Рейтинг сериалы</p>
        </div>
        <div className={styles.navigationItem}>
          <div className={styles.aboutUsToggle} onClick={() => setIsInfoOpen(!isInfoOpen)}>
            <img src="info-icon.svg" width={22} height={22} alt="" />
            <p>О нас</p>
          </div>
          <div className={`${styles.hideBlock} ${isInfoOpen ? styles.open : ''}`}>
            <div className={styles.linkList}>
              <p className={styles.link}>О компании</p>
              <p className={styles.link}>Вакансии</p>
              <p className={styles.link}>Программа бета-тестирования</p>
              <p className={styles.link}>Общая информация для партнеров</p>
              <p className={styles.link}>Размещение рекламы</p>
              <p className={styles.link}>Пользовательское соглашение</p>
              <p className={styles.link}>Политика конфиденциальности</p>
              <p className={styles.link}>Комплаенс</p>
            </div>
          </div>

        </div>
        <div className={styles.navigationItem}>
          <div className={styles.codeLogin}>
          <svg width={22} height={22} viewBox="0 0 64.347 64.347">
            <g>
              <path fill="rgba(255,255,255, 1)" d="M60.097,15.186H31.621c4.203-4.028,8.405-8.057,12.608-12.085c1.164-1.115-0.606-2.882-1.768-1.768
		c-4.607,4.416-9.214,8.832-13.821,13.248c-2.251-2.891-4.502-5.781-6.753-8.672c-0.987-1.268-2.745,0.513-1.768,1.768
		c1.949,2.503,3.898,5.006,5.847,7.509H4.25c-2.343,0-4.25,1.906-4.25,4.25v36.048c0,2.344,1.907,4.25,4.25,4.25h0.809
		c0,0.809,0,1.618,0,2.427c0,1.609,2.5,1.611,2.5,0c0-0.809,0-1.618,0-2.427h49.229c0,0.809,0,1.618,0,2.427
		c0,1.609,2.5,1.611,2.5,0c0-0.809,0-1.618,0-2.427h0.809c2.343,0,4.25-1.906,4.25-4.25V19.436
		C64.347,17.092,62.44,15.186,60.097,15.186z M61.847,55.484c0,0.965-0.785,1.75-1.75,1.75H4.25c-0.965,0-1.75-0.785-1.75-1.75
		V19.436c0-0.965,0.785-1.75,1.75-1.75h55.847c0.965,0,1.75,0.785,1.75,1.75V55.484z"/>
              <path fill="rgba(255,255,255, 1)" d="M45.176,21.731H10.782c-2.343,0-4.25,1.906-4.25,4.25v24.06c0,2.344,1.907,4.25,4.25,4.25h34.394
		c2.343,0,4.25-1.906,4.25-4.25v-24.06C49.426,23.637,47.519,21.731,45.176,21.731z M46.926,50.04c0,0.965-0.785,1.75-1.75,1.75
		H10.782c-0.965,0-1.75-0.785-1.75-1.75v-24.06c0-0.965,0.785-1.75,1.75-1.75h34.394c0.965,0,1.75,0.785,1.75,1.75V50.04z"/>
              <circle fill="rgba(255,255,255, 1)" cx="56.468" cy="26.726" r="2.404" />
              <circle fill="rgba(255,255,255, 1)" cx="56.468" cy="34.25" r="2.404" />
              <path fill="rgba(255,255,255, 1)" d="M20.002,47.334c-1.614,0-3.632,0.359-5.198-0.081c-2.305-0.648-1.654-4.064-1.654-5.879c0-0.965-1.5-0.967-1.5,0
		c0,2.251-0.543,5.203,1.541,6.73c1.759,1.288,4.767,0.73,6.811,0.73C20.968,48.834,20.969,47.334,20.002,47.334z"/>
            </g>
          </svg>
          <p>Вход по коду</p>
          </div>
        </div>
        <div className={styles.choiceDevice}>
          <button>
            <img src="/appleLogo.svg" alt="" />
            <div className={styles.textContent}>
              <span>Загрузите в </span>
              <p>App Store</p>
            </div>
          </button>
          <button>
            <img src="/smartTVLogo.svg" alt="" />
            <div className={styles.textContent}>
              <span>Смотрите на</span>
              <p>Smart TV</p>
            </div>
          </button>
          <button>
            <img src="/devicesIcon.svg" alt="" />
            <p>Все устройства</p>
          </button>
        </div>
        <div className={`${styles.navigationItem} ${styles.supportBlock}`}>
          <div className={styles.supportToggle} onClick={() => setIsSupportOpen(!isSupportOpen)}>
            <img src="/email_icon.svg" width={20} height={20} alt="" />
            <p>Служба поддержки</p>
          </div>
          <div className={`${styles.hideBlock} ${isSupportOpen ? styles.open : ''}`}>
            <div className={styles.textContent}>
            <p>Мы всегда готовы вам помочь.</p>
            <p>Наши операторы онлайн 24/7</p>
            </div>
            <button>Написать в чате</button>
            <div className={styles.icons}>
              <div className={styles.iconContainer}>
                <img src="/email_icon.svg" width={20} height={20} alt="" />
              </div>
              <div className={styles.iconContainer}>
              <img src="/phone_icon.svg" width={20} height={20} alt="" />
              </div>
            </div>
            <p>ask.ivi.ru</p>
            <span>Ответы на вопросы</span>
          </div>
        </div>
        <div className={styles.socials}>
        {
                  socials.map((item) => (
                    <SocialLink 
                      key={item.socialURL} 
                      socialURL={item.socialURL} 
                      imgURL={item.imgURL}
                    />
                  ))
                }
        </div>
        <div className={styles.copyright}>
        <p>© 2023 ООО «Иви.ру»</p>
        <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
        </div>
      </div>

    </div>
  )
}

export default Drawer