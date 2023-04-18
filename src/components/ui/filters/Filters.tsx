import { FC } from 'react'
import styles from './Filters.module.scss'
import PlankItem from './plankItem/PlankItem'
import { genresData } from './genres.data'
import { countriesData } from './counties.data'

const Filters: FC = () => {
  return (
    <section className={styles.filters__section}>
      <div className={styles.filters__container}>
        <div className={styles.filters__plankList}>
          <PlankItem 
            plankName={'Жанры'} 
            filterType={'genre'} 
            dropDawnList={genresData} />
          <PlankItem 
            plankName={'Страны'} 
            filterType={'country'} 
            dropDawnList={countriesData} />
        </div>

         <div className={styles.filters__rangeList}>

         </div>
      </div>
    </section>)
}

export default Filters