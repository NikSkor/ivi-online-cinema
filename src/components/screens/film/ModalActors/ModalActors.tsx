import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './modal.module.sass';
import backIcon from '/public/back_icon.svg'
import { IFilm } from '../film.data';
import { ModalItem } from './ModalItem';
import { useRouter } from 'next/router';

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    film: IFilm,
    year: number
}

export const ModalActors: React.FC<Props> = (props) => {
    const locale = useRouter().locale
    const { setShowModal, film, year } = props
    return (
        <div className={styles.modalActors}>
            <div className={styles.back} onClick={() => setShowModal(false)}>
                <Image
                    height={25}
                    width={25}
                    src={backIcon}
                    alt="back_lcon"
                />
                <p className={styles.back__text}>{locale === 'ru' ? 'К фильму' : 'Back to film'}</p>
            </div>

            <div className={styles.modalActors__dialog}>
                <div className={styles.modalActors__info}>

                    <h1 className={styles.title}>{locale === 'ru' ? film.name : film.enName} ({locale === 'ru' ? 'Фильм' : 'Movie'} {year})</h1>

                    <div className={styles.modalActors__tabs}>
                        <div className={styles.modalActors__creators}>{locale === 'ru' ? 'Создатели' : 'Creators'}</div>
                    </div>
                    <div className={styles.modalActors__section}>
                        <div className={styles.modalActors__title}>{locale === 'ru' ? 'Режиссер' : 'Director'}</div>
                        <ul className={styles.modalActors__list}>
                            <li>
                                <ModalItem person={film.persons.режиссеры[0]} />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.modalActors__section}>
                        <div className={styles.modalActors__title}>{locale === 'ru' ? 'Актёры' : 'Actors'}</div>
                        <ul className={styles.modalActors__list}>
                                {film.persons.актеры.slice(0, 12).map(item => <ModalItem key={item.personId} person={item}/>)}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={styles.modalActors__image}>
                        <Image loader={() => film.poster} src={film.poster} alt='actor' width={153} height={235} unoptimized={true} />
                    </div>
                    <div className={styles.menu__rating}>{film.rating.toFixed(1)}
                        <div className={styles.menu__ratingBox}>
                            <div><div style={{ width: '40%' }}></div></div>
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
                    <h3 className={styles.menu__text} style={{ textTransform: 'capitalize' }}>{year}, {film.countries[0].name}, {film.genres[0].name}</h3>
                    <h3 className={styles.menu__text}>{film.movieLength} {locale === 'ru' ? 'минут' : 'minutes'}</h3>
                </div>
            </div>
        </div>
    )
}
