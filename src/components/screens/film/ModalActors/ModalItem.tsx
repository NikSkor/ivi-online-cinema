import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './modal.module.sass';
import { IPerson } from '../film.data';
import { useRouter } from 'next/router';

interface Props {
    person: IPerson
}

export const ModalItem: React.FC<Props> = ({ person }) => {
    const locale = useRouter().locale
    const personName = locale === 'ru' ? person.name : person.enName
    return (
        <li>
            <Link href={`/person/${person.personId}`} className={styles.modalActors__item}>
                <div className={styles.modalActors__itemImage}>
                    <Image loader={() => person.photo} src={person.photo} alt='person' width={120} height={120} unoptimized={true} />
                </div>
                <div className={styles.actors__info}>
                    {
                        personName.split(' ').map((item, i) => <h3 key={i} className={styles.actors__name}>{item}</h3>)
                    }
                </div>
            </Link>
        </li>
    )
}
