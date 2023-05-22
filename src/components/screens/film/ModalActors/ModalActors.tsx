import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './modal.module.sass';
import backIcon from '/public/back_icon.svg'
import { IFilm } from '../film.data';
import { ModalItem } from './ModalItem';

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    film: IFilm,
    year: number
}

export const ModalActors: React.FC<Props> = (props) => {
    const src = 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85';
    const image = "https://thumbs.dfs.ivi.ru/storage30/contents/1/9/5a294806819855bd6238d18d176fdd.jpg/234x360/?q=85";
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
                <p className={styles.back__text}>К фильму</p>
            </div>

            <div className={styles.modalActors__dialog}>
                <div className={styles.modalActors__info}>

                    <h1 className={styles.title}>{film.name} (Фильм {year})</h1>

                    <div className={styles.modalActors__tabs}>
                        <div className={styles.modalActors__creators}>Создатели</div>
                    </div>
                    <div className={styles.modalActors__section}>
                        <div className={styles.modalActors__title}>Режиссер</div>
                        <ul className={styles.modalActors__list}>
                            <li>
                                <ModalItem person={film.persons.режиссеры[0]} />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.modalActors__section}>
                        <div className={styles.modalActors__title}>Актёры</div>
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
                        сюжет
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <h3 className={styles.menu__text} style={{ textTransform: 'capitalize' }}>{year}, {film.countries[0].name}, {film.genres[0].name}</h3>
                    <h3 className={styles.menu__text}>{film.movieLength} минут</h3>
                </div>
            </div>
        </div>
    )
}
