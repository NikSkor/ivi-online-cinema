import React, { useState } from 'react';
import { NextPage } from 'next';
import styles from './film.module.sass';
import Link from 'next/link';
import Image from 'next/image';
import play from './icons/play.svg';
import favorite from './icons/favorite.svg';
import share from './icons/share.svg';
import volume from './icons/volume.svg';
import BackLink from '@/components/ui/backLink/BackLink';
import { Comments } from '@/components/ui/comments/Comments';
import { FilmSlider } from './FilmSlider';
import { FilmActors } from './FilmActors';
import { Trailers } from './Trailers/Trailers';
import { ModalActors } from './ModalActors/ModalActors';
import { MainButton } from '@/components/ui/button/MainBtn/MainButton';

import { minutesToHHmm } from '@/functions/minutesToHHmm';

import { IFilm, IPerson } from './film.data';

interface IProps{
    film: IFilm
}
const Film = ( {film} : IProps ) => {
    const year = +film.premiere.slice(0, 4)
    const [showDescription, setShowDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <main className={`container ${styles.film__container}`}>
            <div className={styles.film__navbar}>
                <BackLink />
                <div className={styles.film__badge}>бесплатно</div>
            </div>
            <section className={styles.film__info}>
                <div className={styles.film__trailer}>
                    <div className={styles.video}>
                        <embed src={film.trailer} type='video/webm' width="640" height="480" />
                    </div>
                    <div className={styles.videoBtnBox}>
                        <div className={styles.videoBtnBox__item}><Image src={play} alt='trailer' width={20} height={20} /><a href="#trailers">Трейлер</a> </div>
                        <div className={styles.videoBtnBox__item}><Image src={favorite} alt='trailer' width={30} height={30} /></div>
                        <div className={styles.videoBtnBox__item}><Image src={share} alt='trailer' width={30} height={30} /></div>
                    </div>
                </div>
                <div>
                    <h1 className={styles.title}>{film.name} (Фильм {year})</h1>
                    <h2 className={styles.film__text}>{year}, {minutesToHHmm(film.movieLength)}, {film.ageRating}+</h2>
                    <div>
                        <ul className={styles.film__list}>
                            {
                                film.countries.slice(0, 1).map((item: { countryId: number; name: string  }) => { return <li key={item.countryId}><Link href=''>{item.name}</Link></li> })
                            }
                            {
                                film.genres.slice(0, 4).map((item: { genreId: number; name: string  }) => { return <li key={item.genreId}><Link href=''>{item.name}</Link></li> })
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.film__params}>
                            <li className={styles.label}>FullHD</li>
                            <li><Image src={volume} alt='trailer' width={20} height={20} />Рус</li>
                        </ul>
                    </div>
                    <div className={styles.actor}>
                        <div className={styles.actor__wrapper}>
                            <div className={styles.actor__item}>
                                <div className={
                                    film.rating > 6.99 ? `${styles.actor__raiting} ${styles.raiting__total_green} ` :
                                        film.rating > 4.99 ? `${styles.actor__raiting} ${styles.raiting__total_gray} ` :
                                            `${styles.actor__raiting} ${styles.raiting__total_red} `
                                }>{film.rating.toFixed(1)}</div>
                            </div>
                            <h3>Рейтинг</h3>
                        </div>
                        {
                            film.persons.актеры.slice(0, 4).map((item: IPerson) => <Link key={item.personId} href={`/person/${item.personId}`} className={styles.actor__wrapper}>
                            <div className={styles.actor__item}>
                                <Image loader={() => item.photo} src={item.photo} alt='actor' width={44} height={44} unoptimized={true}/>
                            </div>
                            <h3>{item.name}</h3>
                        </Link>)
                        }

                    </div>
                    {/*                     <div className={styles.premies}>
                        <div className={styles.premies__image}>
                            <Image loader={() => prem} src={prem} alt='prem' width={60} height={60} />
                        </div>
                        <div>
                            <h3 className={styles.premies__title}>Золотой орел</h3>
                            <h4 className={styles.premies__subtitle}>Лучшая мужская роль</h4>
                        </div>
                    </div> */}

                    {
                        !showDescription ?
                            <div className={styles.details} >
                                <p className={styles.details__text}>{film.shortDescription}</p>
                                <h4 className={styles.details__showdes} onClick={() => setShowDescription(true)}>Детали о фильме</h4>
                            </div> :
                            <div className={styles.details}>
                                <p className={styles.details__text}>{film.shortDescription}</p>
                                <p className={styles.details__text}>{film.description}</p>
                                <div className={styles.film__aboutQuality} >
                                    <h3 className={styles.languages} >Языки</h3>
                                    <ul className={styles.languages__list} >
                                        <li className={styles.languages__item} >Русский</li>
                                    </ul>
                                    <h3 className={styles.film__qualityText} ><span>Изображение и звук. </span>Изображение и звук. Фактическое качество зависит от устройства и ограничений правообладателя.</h3>
                                    <div className={styles.film__quality} >
                                        <div className={styles.label}>FullHD</div>
                                        <div className={styles.label}>HD</div>
                                        <div className={styles.label}>1080</div>
                                        <div className={styles.label}>720</div>
                                        <div className={styles.label}>5.1</div>
                                    </div>
                                </div>
                                <h4 className={styles.details__showdes} onClick={() => setShowDescription(false)}>Свернуть детали</h4>
                            </div>
                    }

                    <div className={styles.raiting}>
                        <div className={
                            film.rating > 6.99 ? `${styles.raiting__total} ${styles.raiting__total_green} ` :
                                film.rating > 5 ? `${styles.raiting__total} ${styles.raiting__total_gray} ` :
                                    `${styles.raiting__total} ${styles.raiting__total_red} `
                        }>{film.rating.toFixed(1)}</div>
                        <div className={styles.raiting__des}>
                            <div className={styles.raiting__info}>
                                <h2>Рейтинг Кинопоиск</h2>
                                <h4>{film.votes} оценок</h4>
                            </div>
                            <div className={styles.raiting__estimate}>Оценить</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.secondSection}>
                <h2 className={styles.subtitle}>C фильмом «{film.name}» смотрят</h2>
                <FilmSlider similarMovies={film.similarMovies}/>
            </section>
            <section className={styles.thirdSection}>
                <h2 className={`${styles.subtitle} ${styles.subtitle__link} `} onClick={() => setShowModal(true)}>Актеры и создатели</h2>
                <div className={styles.actors__list}>
                    <FilmActors actor={film.persons.режиссеры[0]} profession={'Режиссер'}/>
                    {
                        film.persons.актеры.slice(0, 9).map((item) => <FilmActors key={item.personId} actor={item} profession={'Актер'}/>)
                    }
                    <div className={styles.actors__showMore} onClick={() => setShowModal(true)}>
                        Ещё
                    </div>
                </div>
                {
                    showModal ? <ModalActors setShowModal={setShowModal} film={film} year={year}/> : null
                }
            </section>
            <section className={styles.trailersSection} id='trailers'>
                <h2 className={`${styles.subtitle} ${styles.subtitle__link} `}>Трейлеры и доп. материалы</h2>
                <div className={styles.trailersSection__list}>
                    <Trailers trailer={film.trailer}/>
                </div>
            </section>
            <section className={styles.commentsSection}>
                <Comments comments={film.comments}/>
            </section>
            <section className={styles.watchSection}>
                <div className={styles.watchSection__leftWrapper}>
                    <h2 className={styles.subtitle}>Cмотреть «{film.name}» на всех устройствах</h2>
                    <p className={styles.text}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
                    <MainButton link='https://www.ivi.ru/devices' text='Подключить устройства' />
                </div>
                <div>
                    <Image loader={() => 'https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'}
                        src={'https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'}
                        alt='prem' width={536} height={272} unoptimized={true}/>
                </div>
            </section>

        </main>
    )
}

export default Film


