import { useState } from 'react'
import styles from './FilmsContent.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FilmsContent = () => {
  const [genres, setGenres] = useState([
    {
      title: 'Артхаус',
      enTitle: 'Art House'
    },
    {
      title: 'Боевики',
      enTitle: 'Fighters'
    },
    {
      title: 'Вестерн',
      enTitle: 'Western'
    },
    {
      title: 'Военные',
      enTitle: 'Military'
    },
    {
      title: 'Детективы',
      enTitle: 'Detectives'
    },
    {
      title: 'Для всей семьи',
      enTitle: 'For family'
    },
    {
      title: 'Для детей',
      enTitle: 'For children'
    },
    {
      title: 'Документальные',
      enTitle: 'Documentary'
    },
    {
      title: 'Драмы',
      enTitle: 'Dramas'
    },
    {
      title: 'Исторические',
      enTitle: 'Historical'
    },
    {
      title: "Катастрофы",
      enTitle: 'Disasters'
    },
    {
      title: 'Комедии',
      enTitle: 'Comedies'
    },
    {
      title: 'Криминальные',
      enTitle: 'Criminal'
    },
    {
      title: 'Мелодрамы',
      enTitle: 'Melodramas'
    },
    {
      title: 'Мистические',
      enTitle: 'Mystical'
    },
    {
      title: 'По комиксам',
      enTitle: 'By comics'
    },
    {
      title: 'Приключения',
      enTitle: 'Adventures'
    },
    {
      title: 'Спорт',
      enTitle: 'Sport'
    },
    {
      title: 'Триллеры',
      enTitle: 'Thrillers'
    },
    {
      title: 'Ужасы',
      enTitle: 'Horrors'
    },
    {
      title: 'Фантастика',
      enTitle: 'Fantasy'
    }])
  const [countries, setCountries] = useState([
    {
      title: 'Русские',
      enTitle: 'Russians'
    },
    {
      title: 'Зарубежные',
      enTitle: 'Foreign'
    },
    {
      title: 'Советское кино',
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
            genres.map(genre => <Link href={`/movies/${genre}`}>{locale === 'ru' ? genre.title : genre.enTitle}</Link>)
          }
        </div>
      </div>
      <div>
        <div className={`${styles.countries} ${styles.filmSection}`}>
          <p className={styles.title}>{locale === 'ru' ? 'Страны' : 'Countries'}</p>
          {
            countries.map(country => <Link href={`/movies/${country}`}>{locale === 'ru' ? country.title : country.enTitle}</Link>)
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