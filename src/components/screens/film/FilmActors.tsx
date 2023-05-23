import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './film.module.sass';
import { IPerson } from './film.data';
import { useRouter } from 'next/router';
interface IProps {
    actor: IPerson
    profession: string
}
export const FilmActors = ({actor, profession} : IProps) => {
    const locale = useRouter().locale
    const personName = locale === 'ru' ? actor.name : actor.enName
    return (
        <Link href={`/person/${actor.personId}`} className={styles.actors__item}>
            <div className={styles.actors__image}>
                 <Image loader={() => actor.photo} src={actor.photo} alt='actor' width={88} height={88} unoptimized={true}/> 
            </div>
            <div className={styles.actors__info}>
                {
                    personName.split(' ').map((item, i) => <h3 key={i} className={styles.actors__name}>{item}</h3>)
                }
                <h4 className={styles.actors__post}>{profession}</h4>
            </div>
        </Link>
    )
}
