import { useState } from 'react'
import styles from './FilmsContent.module.scss'

const FilmsContent = () => {
  const [genres, setGenres] = useState(['Артхаус', 'Боевики', 'Вестерн', 'Военные', 'Детективы', 'Для всей семьи', 'Для детей', 'Документальные', 'Драмы', 'Исторические', 'Катастрофы', 'Комедии', 'Криминальные', 'Мелодрамы', 'Мистические', 'По комиксам', 'Приключения', 'Спорт', 'Триллеры', 'Ужасы', 'Фантастика', 'Фэнтези'])

  const [countries, setCountries] = useState(['Русские', 'Зарубежные', 'Советское кино'])

  const [years, setYears] = useState([2020, 2021, 2022, 2023])
  return (
    <div className={styles.content}>
      <div className={`${styles.genres} ${styles.filmSection}`}>
        <p className={styles.title}>Жанры</p>
        <div className={styles.genreList}>
        {
          genres.map(genre => <p>{genre}</p>)
        }
        </div>
      </div>
      <div>
        <div className={`${styles.countries} ${styles.filmSection}`}>
          <p className={styles.title}>Страны</p>
          {
            countries.map(country => <p>{country}</p>)
          }
        </div>
        <div className={`${styles.years} ${styles.filmSection}`}>
          <p className={styles.title}>Годы</p>
          {
            years.map(year => <p>Фильмы {year} года</p>)
          }
        </div>
      </div>
    </div>
  )
}

export default FilmsContent