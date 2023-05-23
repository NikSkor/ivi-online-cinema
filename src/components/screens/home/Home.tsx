import Layout from '@/components/layout/Layout'
import React, { FC, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import Category from './Category/Category'
import WeeklyTop from './WeeklyTop/WeeklyTop'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useAppDispatch } from '@/store/hooks'
import { setLoading } from '@/store/slices/loadingSlice'
import SelectLang from '@/components/layout/footer/selectLang/SelectLang'


const Home: FC = () => {
  const [isClauseOpen, setIsClauseOpen] = useState(false)

  const [dramaMovies, setDramaMovies] = useState([])

  const [moviesWithActor, setMoviesWithActor] = useState([])
  const actor = 'Леонардо Дикаприо'
  const enActor = 'Leonardo DiCaprio'
  const dispatch = useAppDispatch()
  
  const locale = useRouter().locale
  useEffect(() => {
    const getDramas = async () => {
      try {
        const genreResponse = await axios.get('http://localhost:5000/api/movie/genre')
        const genre = genreResponse.data.find((genre: any) => genre.genreId === 1)
        const response = await axios.get('http://localhost:5000/api/movie', {
          params: {
            page: 1,
            genres: genre.name,
            rating: 8
          }
        })
        setDramaMovies(response.data.movies)
      } catch (error) {
        console.log(error)
      }
    }
    const getMoviesWithActor = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movie', {
          params: {
            page: 1,
            person: actor
          }
        })
        setMoviesWithActor(response.data.movies)
      } catch (error) {
        console.log(error)
      }
    }

    const getData = async () => {
      try {
        dispatch(setLoading(true))
        await getDramas()
        await getMoviesWithActor()
      } catch (error) {
        console.log(error)
      } finally {
        dispatch(setLoading(false))
      }
    }
    getData()
  }, [])
  
  return (
    <Layout title="Онлайн-кинотеатр Иви">
      <main className={`${styles.main} container`}>
        <WeeklyTop />
        <div className={styles.clause}>
          <h4 className={styles.clauseTitle}>
            {
              locale === 'ru'
              ? `Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие`
              : `Ivi online cinema: movies in high quality always bring real pleasure`
            }
          </h4>
          {isClauseOpen
            ? <div className={styles.clauseText}>
              <p>
                {locale === 'ru' 
                ? `Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.`
                : `Every day millions of people are looking for movies online, and no one wants to complicate their lives – and you're probably one of them! And if so, then Ivi is exactly the resource that you need. You are literally one click away from the best movies in HD quality. We do not just free you from the need to go to the cinema or study the program of TV shows – visitors to our resource have much more opportunities.`}
              </p>
              <p>
                {locale === 'ru'
                ? `Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.`
                : `The Ivi video library is a constantly growing collection in Runet, which has more than 60 thousand domestic and foreign content available for viewing online. We were the first in Russia to sign contracts with major Hollywood studios (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM and others) and cooperate on an ongoing basis with major Russian companies and TV channels.`
                }
              </p>
              <p>
                {locale === 'ru' 
                ? `Онлайн-кинотеатр ivi.ru – это:`
                : `Online movie theater ivi.ru – this is:`
                }
              </p>
              <ol>
                <li>
                  {
                    locale === 'ru'
                    ? `уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;`
                    : `a unique recommendation system that takes into account your preferences and offers to see exactly what you will definitely like;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;`
                    : `One-touch viewing on any of the devices connected to your Ivi account – from smartphones to TVs with Smart TV technology;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;`
                    : `the ability to download licensed content to the memory of a mobile device and watch it without Internet access;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;`
                    : `unique conditions and benefits for the owners of the Ivi subscription, which makes the movie viewing comfortable and enjoyable;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;`
                    : `a convenient and advanced notification system, you will not miss the release of a cool blockbuster being discussed – we will notify you of the appearance in a way suitable for you;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;`
                    : `the ability to add movies to "watch later" to return to them in your free time;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;`
                    : `content that you don't need to install video players or search for codecs to view;`
                  }
                </li>
                <li>
                  {
                    locale === 'ru'
                    ? `просмотр онлайн контента хорошего разрешения без регистрации и смс.`
                    : `viewing online content of good resolution without registration and sms.`
                  }
                </li>
              </ol>
              <p>
                {
                  locale === 'ru'
                  ? `Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!`
                  : `Discover the opportunity to watch movies online for free in excellent quality with the Ivi Cinema!`
                }
              </p>
            </div>
            : <div className={styles.clauseText}>
              <p>
                {
                  locale === 'ru' 
                  ? `Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквальн...`
                  : `Every day millions of people are looking for movies online, and no one wants to complicate their lives – and you're probably one of them! And if so, then Ivi is exactly the resource that you need. You are literally one click away from...`
                }
              </p>
            </div>}
          {
            isClauseOpen
              ? <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(false)}>{locale === 'ru' ? 'Свернуть' : 'Roll'}</p>
              : <p className={styles.clauseToggle} onClick={() => setIsClauseOpen(true)}>{locale === 'ru' ? 'Развернуть' : 'Unroll'}</p>
          }

        </div>
        <div className={styles.categoryList}>
          <Category title={locale === 'ru' ? "Лучшие драмы" : 'The best dramas'} items={dramaMovies}/>
          <Category title={locale === 'ru' ? `Фильмы с ${actor}` : `Films with ${enActor}`} items={moviesWithActor} />
        </div>
        <SelectLang />
      </main>
    </Layout>
  )
}

export default Home