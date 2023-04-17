import { FC } from 'react'
import styles from './Filters.module.scss'
import PlankItem from './plankItem/PlankItem'
import { genresData } from './genres.data'

const Filters: FC = () => {
  return (
    <section className={styles.filters__section}>
      <div className={styles.filters__container}>
        <div className={styles.filters__plankList}>
          <PlankItem 
            plankName={'Жанры'} 
            hasIcon={true} 
            dropDawnList={genresData} />
          <PlankItem 
            plankName={'Страны'} 
            hasIcon={false} 
            dropDawnList={genresData} />
        </div>
      </div>
    </section>)
}

export default Filters