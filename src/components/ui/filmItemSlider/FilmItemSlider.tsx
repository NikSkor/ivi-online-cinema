import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './filmItem.module.sass'
import favorite from './icons/favorite.svg'
import { ISimilarFilm } from '@/components/screens/film/film.data'
import { useRouter } from 'next/router'

interface IProps{
    film: ISimilarFilm
}
export const FilmItemSlider = ({film}: IProps) => {
    const year = film.premiere.slice(0, 4)
    const locale = useRouter().locale
    return (
        <Link href={`/film/${film.movieId}`} className={styles.slider__item}>
            <div className={styles.slider__image}>
                <Image loader={() => film.poster} src={film.poster} alt='actor' width={153} height={235} unoptimized={true}/>
                <div className={styles.menu}>
                    <div className={styles.menu__image}>
                        <Image src={favorite} alt='addToFavorite' width={45} height={45} />
                    </div>
                    <div>
                        <div className={styles.menu__rating}>{film.rating.toFixed(1)}
                            <div className={styles.menu__ratingBox}>
                                <div><div style={{ width: '50%' }}></div></div>
                                <div><div style={{ width: '70%' }}></div></div>
                                <div><div style={{ width: '30%' }}></div></div>
                                <div><div style={{ width: '60%' }}></div></div>
                            </div>
                        </div>
                        <div className={styles.menu__text}>
                        {locale === 'ru' ? 'сюжет' : 'plot'}
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <h3 className={styles.menu__text}>{year}</h3>
                        <h3 className={styles.menu__text}>{film.movieLength} {locale === 'ru' ? 'минут' : 'minutes'}</h3>
                    </div>
                </div>
            </div>
            <div className={styles.slider__info}>
                <h3>{film.name}</h3>
                <h4>{locale === 'ru' ? 'Бесплатно' : 'Free'}</h4>
            </div>
        </Link>
    )
}
