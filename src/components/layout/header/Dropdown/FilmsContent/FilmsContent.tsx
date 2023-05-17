import { FC, useEffect, useState } from 'react'
import styles from './FilmsContent.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'

const FilmsContent = () => {


  /*

  */
 const [genres, setGenres] = useState([
  {
    name: 'Артхаус',
    enTitle: 'Art House'
  },
  {
    name: 'Боевики',
    enTitle: 'Fighters'
  },
  {
    name: 'Вестерн',
    enTitle: 'Western'
  },
  {
    name: 'Военные',
    enTitle: 'Military'
  },
  {
    name: 'Детективы',
    enTitle: 'Detectives'
  },
  {
    name: 'Для всей семьи',
    enTitle: 'For family'
  },
  {
    name: 'Для детей',
    enTitle: 'For children'
  },
  {
    name: 'Документальные',
    enTitle: 'Documentary'
  },
  {
    name: 'Драмы',
    enTitle: 'Dramas'
  },
  {
    name: 'Исторические',
    enTitle: 'Historical'
  },
  {
    name: "Катастрофы",
    enTitle: 'Disasters'
  },
  {
    name: 'Комедии',
    enTitle: 'Comedies'
  },
  {
    name: 'Криминальные',
    enTitle: 'Criminal'
  },
  {
    name: 'Мелодрамы',
    enTitle: 'Melodramas'
  },
  {
    name: 'Мистические',
    enTitle: 'Mystical'
  },
  {
    name: 'По комиксам',
    enTitle: 'By comics'
  },
  {
    name: 'Приключения',
    enTitle: 'Adventures'
  },
  {
    name: 'Спорт',
    enTitle: 'Sport'
  },
  {
    name: 'Триллеры',
    enTitle: 'Thrillers'
  },
  {
    name: 'Ужасы',
    enTitle: 'Horrors'
  },
  {
    name: 'Фантастика',
    enTitle: 'Fantasy'
  }])
  const [countries, setCountries] = useState( [
    {
      name: 'Русские',
      enTitle: 'Russians'
    },
    {
      name: 'Зарубежные',
      enTitle: 'Foreign'
    },
    {
      name: 'Советское кино',
      enTitle: 'Soviet cinema'
    }
  ])
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
          {
            countries.map(country => <Link href={`/movies/${country}`}>{country.name}</Link>)
          }
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