import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './filmItem.module.sass'
import favorite from './icons/favorite.svg'

export const FilmItemSlider = () => {
    const image = "https://thumbs.dfs.ivi.ru/storage30/contents/1/9/5a294806819855bd6238d18d176fdd.jpg/234x360/?q=85";
    return (
        <Link href='/film/1' className={styles.slider__item}>
            <div className={styles.slider__image}>
                <Image loader={() => image} src={image} alt='actor' width={153} height={235} />
                <div className={styles.menu}>
                    <div className={styles.menu__image}>
                        <Image src={favorite} alt='addToFavorite' width={45} height={45} />
                    </div>
                    <div>
                        <div className={styles.menu__rating}>8.5
                            <div className={styles.menu__ratingBox}>
                                <div><div style={{ width: '50%' }}></div></div>
                                <div><div style={{ width: '70%' }}></div></div>
                                <div><div style={{ width: '30%' }}></div></div>
                                <div><div style={{ width: '60%' }}></div></div>
                            </div>
                        </div>
                        <div className={styles.menu__text}>
                            сюжет
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <h3 className={styles.menu__text}>2019, Россия, Биография</h3>
                        <h3 className={styles.menu__text}>115 минут</h3>
                    </div>
                </div>
            </div>
            <div className={styles.slider__info}>
                <h3>Лев Яшин</h3>
                <h4>Бесплатно</h4>
            </div>
        </Link>
    )
}
