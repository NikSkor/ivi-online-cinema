import { FC, useEffect, useState } from 'react'
import styles from './FilmsContent.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
interface IFilmsContent {
  genres: any[],
  countries: any[]
}
const FilmsContent:FC<IFilmsContent> = ({ genres, countries }) => {

  const locale = useRouter().locale
  const [years, setYears] = useState([2020, 2021, 2022, 2023])
  return (
    <div className={styles.content}>
      <div className={`${styles.genres} ${styles.filmSection}`}>
        <p className={styles.title}>{locale === 'ru' ? 'Жанры' : 'Genres'}</p>
        <div className={styles.genreList}>
          {
            genres.map(genre => <Link href={`/movies/${genre}`}>{genre.name}</Link>)
          }
        </div>
      </div>
      <div>
        <div className={`${styles.countries} ${styles.filmSection}`}>
          <p className={styles.title}>{locale === 'ru' ? 'Страны' : 'Countries'}</p>
          <Link href={`/movies/abc`}>Русские</Link>
          <Link href={`/movies/def`}>Зарубежные</Link>
          <Link href={`/movies/ghj`}>Советское кино</Link>
        </div>
        <div className={`${styles.years} ${styles.filmSection}`}>
          <p className={styles.title}>{locale === 'ru' ? 'Годы' : 'Years'}</p>
          {
            years.map(year => <Link href={`/movies/${year}`}>{locale === 'ru' ? `Фильмы ${year} года` : `Films of ${year}` }</Link>)
          }
        </div>
      </div>
    </div>
  )
}

export default FilmsContent