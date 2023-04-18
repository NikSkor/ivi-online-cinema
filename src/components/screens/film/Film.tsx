import React, { useState } from 'react';
import { NextPage } from 'next';
import styles from './film.module.sass';
import Link from 'next/link';
import Image from 'next/image';
import play from './icons/play.svg';
import playTrailer from './icons/play-trailer.svg';
import favorite from './icons/favorite.svg';
import share from './icons/share.svg';
import volume from './icons/volume.svg';
import { Comments } from '@/components/ui/comments/Comments';
import BackLink from '@/components/ui/backLink/BackLink';
import { FilmSlider } from './FilmSlider';
import { FilmActors } from './FilmActors';
import { Trailers } from './Trailers/Trailers';
import { ModalActors } from './ModalActors/ModalActors';
import { MainButton } from '@/components/ui/button/MainBtn/MainButton';

const Film: NextPage = () => {

    const [showDescription, setShowDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const src = 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85';
    const bgImage = "https://thumbs.dfs.ivi.ru/storage38/contents/9/2/1da99afee8d958162fbb8faad3a24b.jpg";
    const prem = "https://thumbs.dfs.ivi.ru/storage33/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85";
    return (
        <main className={`container ${styles.film__container}`}>
            <div className={styles.film__navbar}>
                <BackLink />
                <div className={styles.film__badge}>бесплатно</div>
            </div>
            <section className={styles.film__info}>
                <div className={styles.film__trailer}>
                    <div className={styles.video}>
                        <Image loader={() => bgImage} src={bgImage} alt='trailer' width={1920} height={1080} />
                        <div className={styles.video__play}>
                            <Image src={playTrailer} alt='trailer' width={34} height={34} />
                        </div>
                    </div>
                    <div className={styles.videoBtnBox}>
                        <div className={styles.videoBtnBox__item}><Image src={play} alt='trailer' width={20} height={20} />Трейлер</div>
                        <div className={styles.videoBtnBox__item}><Image src={favorite} alt='trailer' width={30} height={30} /></div>
                        <div className={styles.videoBtnBox__item}><Image src={share} alt='trailer' width={30} height={30} /></div>
                    </div>
                </div>
                <div>
                    <h1 className={styles.title}>Калашников (Фильм 2020)</h1>
                    <h2 className={styles.film__text}>2020 1 ч. 44 мин.12+</h2>
                    <div>
                        <ul className={styles.film__list}>
                            <li><Link href=''>Россия</Link></li>
                            <li><Link href=''>Биография</Link></li>
                            <li><Link href=''>Драмы</Link></li>
                            <li><Link href=''>Военные</Link></li>
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
                                <div className={styles.actor__raiting}>8.7</div>
                            </div>
                            <h3>Рейтинг</h3>
                        </div>
                        <Link href='/person/1' className={styles.actor__wrapper}><div className={styles.actor__item}>
                            <Image loader={() => src} src={src} alt='actor' width={44} height={44} />
                        </div><h3>Оскар Айзек</h3></Link>

                    </div>
                    <div className={styles.premies}>
                        <div className={styles.premies__image}>
                            <Image loader={() => prem} src={prem} alt='prem' width={60} height={60} />
                        </div>
                        <div>
                            <h3 className={styles.premies__title}>Золотой орел</h3>
                            <h4 className={styles.premies__subtitle}>Лучшая мужская роль</h4>
                        </div>
                    </div>
                    {
                        !showDescription ?
                            <div className={styles.details} >
                                <p className={styles.details__text}>История советского конструктора-самоучки, создавшего самое распространенное в мире стрелковое оружие АК-47. Покинув фронт из-за тяжелого ранения, молодой сержант Калашников находит другой способ служить Родине. Историко-биографическая драма режиссера Константина Буслова о рождении легендарного автомата и непростом жизненном пути его создателя, в роли которого снялся Юрий Борисов («Бык», «Т-34», «Союз спасения»,...</p>
                                <h4 className={styles.details__showdes} onClick={() => setShowDescription(true)}>Детали о фильме</h4>
                            </div> :
                            <div className={styles.details}>
                                <p className={styles.details__text}>История советского конструктора-самоучки, создавшего самое распространенное в мире стрелковое оружие АК-47. Покинув фронт из-за тяжелого ранения, молодой сержант Калашников находит другой способ служить Родине. Историко-биографическая драма режиссера Константина Буслова о рождении легендарного автомата и непростом жизненном пути его создателя, в роли которого снялся Юрий Борисов («Бык», «Т-34», «Союз спасения», История советского конструктора-самоучки, создавшего самое распространенное в мире стрелковое оружие АК-47. Покинув фронт из-за тяжелого ранения, молодой сержант Калашников находит другой способ служить Родине. Историко-биографическая драма режиссера Константина Буслова о рождении легендарного автомата и непростом жизненном пути его создателя, в роли которого снялся Юрий Борисов («Бык», «Т-34», «Союз спасения»</p>
                                <div className={styles.film__aboutQuality} >
                                    <h3 className={styles.languages} >Языки</h3>
                                    <ul className={styles.languages__list} >
                                        <li className={styles.languages__item} >Русский</li>
                                        <li className={styles.languages__item} >БелоРусский</li>
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
                        <div className={styles.raiting__total}>8,7</div>
                        <div className={styles.raiting__des}>
                            <div className={styles.raiting__info}>
                                <h2>Рейтинг Кинопоиск</h2>
                                <h3>Интересный сюжет</h3>
                                <h4>404 111 оценок</h4>
                            </div>
                            <div className={styles.raiting__estimate}>Оценить</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.secondSection}>
                <h2 className={styles.subtitle}>C фильмом &quot;Калашников&quot; смотрят</h2>
                <FilmSlider />
            </section>
            <section className={styles.thirdSection}>
                <h2 className={`${styles.subtitle} ${styles.subtitle__link} `} onClick={() => setShowModal(true)}>Актеры и создатели</h2>
                <div className={styles.actors__list}>
                    <FilmActors />
                    <div className={styles.actors__showMore} onClick={() => setShowModal(true)}>
                        Ещё
                    </div>
                </div>
                {
                    showModal ? <ModalActors setShowModal={setShowModal} /> : null
                }
            </section>
            <section className={styles.trailersSection}>
                <h2 className={`${styles.subtitle} ${styles.subtitle__link} `}>Трейлеры и доп. материалы</h2>
                <div className={styles.trailersSection__list}>
                    <Trailers />
                </div>
            </section>
            <section className={styles.commentsSection}>
                <Comments />
            </section>
            <section className={styles.watchSection}>
                <div className={styles.watchSection__leftWrapper}>
                    <h2 className={styles.subtitle}>Cмотреть «Непослушная» на всех устройствах</h2>
                    <p className={styles.text}>Приложение доступно для скачивания на iOS, Android, SmartTV и приставках</p>
                    <MainButton link='https://www.ivi.ru/devices' text='Подключить устройства' />
                </div>
                <div>
                    <Image loader={() => 'https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'}
                        src={'https://www.ivi.ru/images/_ds/watchAllDevices/tv-without-poster.png'}
                        alt='prem' width={536} height={272} />
                </div>
            </section>

        </main>
    )
}

export default Film