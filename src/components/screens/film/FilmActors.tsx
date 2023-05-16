import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './film.module.sass';
import { IPerson } from './film.data';
interface IProps {
    actor: IPerson
}
export const FilmActors = ({actor} : IProps) => {

    return (
        <Link href={`/person/${actor.person.personId}`} className={styles.actors__item}>
            <div className={styles.actors__image}>
                 <Image loader={() => actor.person.photo} src={actor.person.photo} alt='actor' width={88} height={88} unoptimized={true}/> 
            </div>
            <div className={styles.actors__info}>
                {
                    actor.person.name.split(' ').map((item, i) => <h3 key={i} className={styles.actors__name}>{item}</h3>)
                }
                <h4 className={styles.actors__post}>{actor.profession.name}</h4>
            </div>
        </Link>
    )
}
