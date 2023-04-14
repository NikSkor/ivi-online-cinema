import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './film.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import backIcon from '/public/back_icon.svg'
import play from './icons/play.svg'
import playTrailer from './icons/play-trailer.svg'
import favorite from './icons/favorite.svg'
import share from './icons/share.svg'
import volume from './icons/volume.svg'

const Film: NextPage = () => {
    const [showDescription, setShowDescription] = useState(false);
    const router = useRouter();
    const { asPath, pathname } = useRouter();
    const src = 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85';
    const bgImage = "https://thumbs.dfs.ivi.ru/storage38/contents/9/2/1da99afee8d958162fbb8faad3a24b.jpg";
    const prem = "https://thumbs.dfs.ivi.ru/storage33/contents/9/9/ccf5c60716958180b98b81a6a4b447.png?q=85";
    const image = "https://thumbs.dfs.ivi.ru/storage30/contents/1/9/5a294806819855bd6238d18d176fdd.jpg/234x360/?q=85";
    return (
        <main className={`container ${styles.film__container}`}>
            <div className={styles.film__navbar}>
                {/*                 <ul className={styles.film__navigation}>
                    <li><Link href={'/movies'}>Фильмы</Link></li>
                    <li><Link href={asPath}>Название</Link></li>
                </ul> */}
                <div className={styles.back} onClick={() => router.back()}>
                    <Image
                        priority
                        height={25}
                        width={25}
                        src={backIcon}
                        alt="back_lcon"
                    />
                    <p className={styles.back__text}>Назад</p>
                </div>
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
                    <h1 className={styles.film__title}>Калашников (Фильм 2020)</h1>
                    <h2 className={styles.film__text}>2020 1 ч. 44 мин.12+</h2>
                    <div>
                        <ul className={styles.film__categories}>
                            <li>Россия</li>
                            <li>Биография</li>
                            <li>Драмы</li>
                            <li>Военные</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.params}>
                            <li className={styles.params__quality}>FullHD</li>
                            <li><Image src={volume} alt='trailer' width={20} height={20} />Рус</li>
                        </ul>
                    </div>
                    <div className={styles.actor}>
                        <div className={styles.actor__wrapper}>
                            <div className={styles.actor__item}>
                                <div className={styles.actor__raiting}>8.7</div>
                            </div>
                            <h3>Рейтинг <br /> Иви</h3>
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
                                <div className={styles.film__quality} >
                                    <h3 className={styles.languages} >Языки</h3>
                                    <ul className={styles.languages__list} >
                                        <li className={styles.languages__item} >Русский</li>
                                        <li className={styles.languages__item} >БелоРусский</li>
                                    </ul>
                                    <h3 className={styles.quality__text} ><span>Изображение и звук. </span>Изображение и звук. Фактическое качество зависит от устройства и ограничений правообладателя.</h3>
                                    <div className={styles.quality} >
                                        <div className={styles.params__quality}>FullHD</div>
                                        <div className={styles.params__quality}>HD</div>
                                        <div className={styles.params__quality}>1080</div>
                                        <div className={styles.params__quality}>720</div>
                                        <div className={styles.params__quality}>5.1</div>
                                    </div>
                                </div>
                                <h4 className={styles.details__showdes} onClick={() => setShowDescription(false)}>Свернуть детали</h4>
                            </div>
                    }

                    <div className={styles.raiting}>
                        <div className={styles.raiting__total}>8,7</div>
                        <div className={styles.raiting__des}>
                            <div className={styles.raiting__info}>
                                <h2>Рейтинг Иви</h2>
                                <h3>Интересный сюжет</h3>
                                <h4>404 111 оценок</h4>
                            </div>
                            <div className={styles.raiting__estimate}>Оценить</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.secondSection}>
                <h2 className={styles.secondSection__title}>C фильмом &quot;Калашников&quot; смотрят</h2>
                <div className={styles.secondSection__list}>
                    <Link href='/film/1' className={styles.secondSection__item}>
                        <div className={styles.secondSection__image}>
                            <Image loader={() => image} src={image} alt='actor' width={153} height={235} />
                            <div className={styles.secondSection__menu}>
                                <div className={styles.menu}>
                                    <div className={styles.menu__image}>
                                        <Image src={favorite} alt='trailer' width={45} height={45} />
                                    </div>
                                    <div>
                                        <div className={styles.menu__rating}>8.5
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
                                        <h3 className={styles.menu__text}>2019, Россия, Биография</h3>
                                        <h3 className={styles.menu__text}>115 минут</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondSection__info}>
                            <h3>Лев Яшин</h3>
                            <h4>Бесплатно</h4>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Film