import { FC } from 'react'
import styles from './Filmography.module.scss'
import FilmographyItem from './filmographyItem/FilmographyItem'
import { IFilmographyItem } from '@/interfaces/person/IFilmographyItem'
import { numbersDeclination } from '@/functions/numbersDeclination'

interface filmsArray {
  filmographyArray: IFilmographyItem[]
}

const Filmography: FC<filmsArray> = ({filmographyArray}) => {

  const filmsCount = filmographyArray.length
  const filmsForm = numbersDeclination(filmsCount, ['фильм', 'фильма', 'фильмов'])

  return (
    <div className={styles.personFilmography}>

      <div className={styles.header}>
        <h1 className={styles.title}>Полная фильмография</h1>
        <p className={styles.filmsCounter}>{filmsCount} {filmsForm}</p>
      </div>

      <div className={styles.filmographyList}>
        {
          filmographyArray.map((item) => (
            <FilmographyItem
              key={item.movieId}
              movieId={item.movieId}
              poster={item.poster}
              premiere={item.premiere}
              name={item.name}
              rating={item.rating} />
          ))
        }
      </div>
    </div>)
}

export default Filmography
