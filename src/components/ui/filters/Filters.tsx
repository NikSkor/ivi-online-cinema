import { FC, useEffect } from 'react'
import styles from './Filters.module.scss'

//components
import PlankItem from './plankItem/PlankItem'
import RangeItem from './range/RangeItem'

//data
import { genresData } from './genres.data'
import { countriesData } from './counties.data'

//redux
import { setCountries, setGenres, setRating, setGradesCount, selectGenres, selectCountries } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/router'

const Filters: FC = () => {

  const genresList = useAppSelector(selectGenres)
  const countriesList = useAppSelector(selectCountries)


  return (
    <section className={styles.filters__section}>
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
            rangeType={'grades'} />
      </div>
    </section>)
}

export default Filters