import Layout from '@/components/layout/Layout'
import { FC, useEffect } from 'react'
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs'
import styles from './Movies.module.scss'
import MoviesHeaderBar from '@/components/ui/moviesHeaderBar/MoviesHeaderBar'
import { HeaderData } from './Header.data'
import Filters from '@/components/ui/filters/Filters'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'
import { setGenres } from '@/store/slices/filtersSlice'

const Movies: FC = () => {

  const dispatch = useAppDispatch()
  const router = useRouter()

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