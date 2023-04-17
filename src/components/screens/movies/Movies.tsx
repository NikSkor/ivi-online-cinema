import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs'
import styles from './Movies.module.scss'
import MoviesHeaderBar from '@/components/ui/moviesHeaderBar/MoviesHeaderBar'
import { HeaderData } from './Header.data'
import Filters from '@/components/ui/filters/Filters'

const Movies: FC = () => {
  return (
    <Layout title={'Фильмы в хорошем HD качестве'}>
      <main className='container'>
        <MoviesHeaderBar 
          title={HeaderData.title}
          description={HeaderData.description} />

        <Filters />
      </main>
    </Layout>)
}

export default Movies