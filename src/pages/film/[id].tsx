import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './film.module.sass'
import Link from 'next/link'

const FilmPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <Layout title="Фильм">
      <main className={`container ${styles.film__container}`}>
        <div className={styles.film__navbar}>
          <ul className={styles.film__navigation}>
            <li><Link href={'/movies'}>Фильмы</Link></li>
            <li><Link href={asPath}>Название</Link></li>
          </ul>
          <div className={styles.film__badge}>бесплатно</div>
        </div>
        <div className={styles.film__info}>
          <div className={styles.film__trailer}>
            <div className={styles.film__video}></div>
            <div className={styles.videoBtnBox}>
              <div className={styles.videoBtnBox__item}>Трейлер</div>
              <div className={styles.videoBtnBox__item}>избр</div>
              <div className={styles.videoBtnBox__item}>подел</div>
            </div>
          </div>
          <div>
            <h1 className={styles.film__title}>Калашников (Фильм 2020)</h1>
            <h2 className={styles.film__text}>2020 1 ч. 44 мин.12+</h2>
            <div>
              <ul className={styles.film__categories}>
                <li>Россия</li>
                <li>Биография</li>
                <li>Драмы</li>
                <li>Военные</li>
              </ul>
            </div>
            <div className={styles.film__categories}>
              <ul className={styles.film__categories}>
                <li>FullHD</li>
                <li>Рус</li>
              </ul>
            </div>
            <div className={styles.actor}>
              <div className={styles.actor__wrapper}><div className={styles.actor__item}></div><h3>123</h3></div>
              <div className={styles.actor__wrapper}><div className={styles.actor__item}></div><h3>123</h3></div>
              <div className={styles.actor__wrapper}><div className={styles.actor__item}></div><h3>123</h3></div>
              <div className={styles.actor__wrapper}><div className={styles.actor__item}></div><h3>123</h3></div>
              <div className={styles.actor__wrapper}><div className={styles.actor__item}></div><h3>123</h3></div>
            </div>
            <div  className={styles.film__premies}>Награды</div>
            <div>
              <p  className={styles.film__text} style={{textAlign: 'left'}}>История советского конструктора-самоучки, создавшего самое распространенное в мире стрелковое оружие АК-47. Покинув фронт из-за тяжелого ранения, молодой сержант Калашников находит другой способ служить Родине. Историко-биографическая драма режиссера Константина Буслова о рождении легендарного автомата и непростом жизненном пути его создателя, в роли которого снялся Юрий Борисов («Бык», «Т-34», «Союз спасения»,</p>
              <div>
                <h3>Языки</h3>
                <ul>
                  <li>Русский</li>
                </ul>
                <h3><span>Изображение и звук. </span>Изображение и звук. Фактическое качество зависит от устройства и ограничений правообладателя.</h3>
                <div>
                  <div>FullHD</div>
                  <div>HD</div>
                  <div>1080</div>
                  <div>720</div>
                  <div>5.1</div>
                </div>
              </div>
            </div>
            <div>
              Рейтинг
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default FilmPage