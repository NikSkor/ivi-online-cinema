import Layout from '@/components/layout/Layout'
import React, { FC, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Category from './Category/Category'
import WeeklyTop from './WeeklyTop/WeeklyTop'
import Link from 'next/link'
import { LocaleRouteNormalizer } from 'next/dist/server/future/normalizers/locale-route-normalizer'
import { useRouter } from 'next/router'
import axios from 'axios'

const Home: FC = () => {
  const [isClauseOpen, setIsClauseOpen] = useState(false)
  const locale = useRouter().locale

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://195.133.147.66:5000/api/movie')
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])
  return (
    <Layout title="Онлайн-кинотеатр Иви">
      <main className="container">
        <Link href="/" locale={'ru'}>
          <button className={styles.langButton}>Русский язык</button>
        </Link>
        <Link href="/" locale="en">
          <button className={styles.langButton}>Английский язык</button>
        </Link>
        <WeeklyTop />
        <div className={styles.clause}>
          {locale === 'ru' ? <h4 className={styles.clauseTitle}>Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие</h4> : <h4 className={styles.clauseTitle}>Ivi online cinema: movies in high quality always bring real pleasure</h4>}
          {isClauseOpen
            ? <div className={styles.clauseText}>
              {
                locale === 'ru' ? (
                  <>
                    <p>Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.</p>
                    <p>Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.</p>
                    <p>Онлайн-кинотеатр ivi.ru – это:</p>
                    <ol>
                      <li>уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;</li>
                      <li>просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;</li>
                      <li>возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;</li>
                      <li>уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;</li>
                      <li>удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;</li>
                      <li>возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;</li>
                      <li>контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;</li>
                      <li>просмотр онлайн контента хорошего разрешения без регистрации и смс.</li>
                    </ol>
                    <p>Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!</p>
                  </>
                ) : (
                  <>
                  <p>Every day millions of people are looking for movies online, and no one wants to complicate their lives – and you're probably one of them! And if so, then Ivi is exactly the resource that you need. You are literally one click away from the best movies in HD quality. We do not just free you from the need to go to the cinema or study the program of TV shows – visitors to our resource have much more opportunities.</p>
                  <p>The Ivi video library is a constantly growing collection in Runet, which has more than 60 thousand domestic and foreign content available for viewing online. We were the first in Russia to sign contracts with major Hollywood studios (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM and others) and cooperate on an ongoing basis with major Russian companies and TV channels.</p>
                  <p>Online movie theater ivi.ru – this is:</p>
                  <ol>
                    <li>a unique recommendation system that takes into account your preferences and offers to see exactly what you will definitely like;</li>
                    <li>One-touch viewing on any of the devices connected to your Ivi account – from smartphones to TVs with Smart TV technology;</li>
                    <li>the ability to download licensed content to the memory of a mobile device and watch it without Internet access;</li>
                    <li>unique conditions and benefits for the owners of the Ivi subscription, which makes the movie viewing comfortable and enjoyable;</li>
                    <li>a convenient and advanced notification system, you will not miss the release of a cool blockbuster being discussed – we will notify you of the appearance in a way suitable for you;</li>
                    <li>the ability to add movies to "watch later" to return to them in your free time;</li>
                    <li>content that you don't need to install video players or search for codecs to view;</li>
                    <li>viewing online content of good resolution without registration and sms.</li>
                  </ol>
                  <p>Discover the opportunity to watch movies online for free in excellent quality with the Ivi Cinema!</p>
                  </>
                )
              }
            </div>
            : <div className={styles.clauseText}>
              {
                locale === 'ru' 
                ? <p>Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквальн...</p> 
                : <p>Every day millions of people are looking for movies online, and no one wants to complicate their lives – and you're probably one of them! And if so, then Ivi is exactly the resource that you need. You are literally separated from the best films in HD quality...</p>
              }
            </div>}
          {
            isClauseOpen
              ? locale === 'ru' ? <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(false)}>Свернуть</p> : <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(false)}>Roll up</p>
              : locale === 'ru' ? <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(true)}>Развернуть</p> : <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(true)}>Unroll</p> 
          }

        </div>
        <div className={styles.categoryList}>
          <Category title="Фильмы из США" />
          <Category title="Зарубежные мультфильмы" />
        </div>
      </main>
    </Layout>
  )
}

export default Home