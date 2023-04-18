import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './film.module.sass';
export const FilmActors = () => {
    const src = 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85';
    return (
        <Link href='/person/1' className={styles.actors__item}>
            <div className={styles.actors__image}>
                <Image loader={() => src} src={src} alt='actor' width={88} height={88} />
            </div>
            <div className={styles.actors__info}>
                <h3 className={styles.actors__name}>Айзек</h3>
                <h3 className={styles.actors__name}>Оскар</h3>
                <h4 className={styles.actors__post}>Актер</h4>
            </div>
        </Link>
    )
}
