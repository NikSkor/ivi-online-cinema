import { FC, useEffect } from 'react'
import styles from './Filters.module.scss'

// icons
import close from '/public/close.svg'

//components
import Image from 'next/image'
import PlankItem from './plankItem/PlankItem'
import RangeItem from './range/RangeItem'
import Sorting from './sorting/Sorting'
import PersonSearch from './personSearch/PersonSearch'

//data
import { genresData } from './genres.data'
import { countriesData } from './counties.data'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectCountries, selectGenres, setActor, setCountries, setGenres, setProducer, setRating, setVotesCount } from '@/store/slices/filtersSlice'
import { useRouter } from 'next/router'

const Filters: FC = () => {

	const router = useRouter()
	const dispatch = useAppDispatch()

  const genresList = useAppSelector(selectGenres)
  const countriesList = useAppSelector(selectCountries)

	const clickHandle = () => {
		dispatch(setGenres([]))
		dispatch(setCountries([]))
		dispatch(setRating(0))
		dispatch(setVotesCount(0))
		dispatch(setProducer(''))
		dispatch(setActor(''))
		router.push({pathname: '/movies'})
	}

  return (
    <section className={styles.filters__section}>
      <Sorting />
      <div className={styles.filters__container}>
          <PlankItem
            plankName={'Жанры'}
            filterType={'genre'}
            dropDawnList={genresData}
            values={genresList} />

          <PlankItem
            plankName={'Страны'}
            filterType={'country'}
            dropDawnList={countriesData}
            values={countriesList} />

          <RangeItem
            title={'Рейтинг Кинопоиска'}
            maxValue={10}
            step={0.1}
            isFloat={true}
            rangeType={'rating'} />

          <RangeItem
            title={'Количество оценок на Кинопоиске'}
            maxValue={10000000}
            step={1000}
            rangeType={'votes'} />

          <PersonSearch
            placeholder={'Поиск по режиссеру...'}
            searchType={'producer'} />

          <PersonSearch
            placeholder={'Поиск по актеру...'}
            searchType={'actor'} />

					<div
						className={styles.btn__container}
						onClick={() => clickHandle()}>
						<Image
							priority
							height={22}
							width={22}
							src={close}
							alt={'close_icon'} />
						<span className={styles.btn__name}>
							Сбросить фильтры
						</span>
					</div>
      </div>
    </section>)
}

export default Filters
