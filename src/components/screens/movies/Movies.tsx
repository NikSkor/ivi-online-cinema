import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import styles from './Movies.module.scss'
import MoviesHeaderBar from '@/components/ui/moviesHeaderBar/MoviesHeaderBar'
import { HeaderData } from './Header.data'
import Filters from '@/components/ui/filters/Filters'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'

import { filmographyData } from '@/components/ui/filmography/filmography.data'

import SliderItem from '../home/Category/SliderItem/SliderItem'

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

				<section className={styles.movies__container}>
					{
						filmographyData.map((item) => (
							<SliderItem
								film={item} />
						))
					}
				</section>

      </main>
    </Layout>)
}

export default Movies
