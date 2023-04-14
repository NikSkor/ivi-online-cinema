import React, { FC, MouseEventHandler } from 'react'
import Link from 'next/link'
import { IFilmographyItem } from '@/interfaces/person/IFilmographyItem'
import styles from './FilmographyItem.module.scss'
import { useRouter } from 'next/router'

const FilmographyItem: FC<IFilmographyItem> = ({filmId, posterURL, year, name, rating}) => {

  const strRating = rating.toString().match(/\./) 
                        ? rating.toString().replace('.', ',')
                        : (rating.toString() + ',0' )

  return (
      <div className={styles.filmographyItem}>
        <Link href={`/film/${filmId}`} className={styles.filmographyItem__body}>
          <div className={styles.posterWrapper}>
            <img className={styles.poster__img} src={posterURL} alt="poster" />
          </div>

          <div className={styles.filmographyItem__main}>
            <div className={styles.filmographyItem__info}>
              <p className={styles.title}>{year}</p>
              <p className={styles.title}>{name}</p>
              <p className={styles.rating}>Рейтинг на Кинопоиске: {strRating}</p>
            </div>

            <div className={styles.filmographyItem__action}>
              <span className={styles.btn__text}>Подробнее</span>
            </div>

          </div>
        </Link>
      </div>
    )
}

export default FilmographyItem