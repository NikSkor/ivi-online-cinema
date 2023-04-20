import { FC, useEffect, useState } from 'react'
import styles from './MoviesHeaderBar.module.scss'

// interfaces
import { IHeaderBar } from '@/interfaces/movies/IHeaderBar'

// components
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'

// functions
import { truncateText } from '@/functions/truncateText'
import { useRouter } from 'next/router'
import { filtersMap } from '../filters/filters.data'

const MoviesHeaderBar: FC<IHeaderBar> = ({title, description}) => {

  const router = useRouter()

  const descriptionParagraphs = description.split('\n')
  const readmoreDescription = truncateText(descriptionParagraphs[0], 230)

  const [showDescription, setShowDescription] = useState(false)
  const [filters, setFilters] = useState('')
  const [slugReady, setSlugReady] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    let filtersList: string[] = []

    if (Array.isArray(router.query.slug)) {
      for (let item of router.query.slug) {
        let itemList = item.split('+')
        itemList.forEach((item: string) => filtersList.push(item))
      }
    }
    
    setSlugReady(true)
    setFilters(filtersList.map((item: string) => filtersMap.get(item)).join(', '))
  })


  return (
    <section className={styles.headerBar}>
      <div className={styles.headerBar__container}>

        <div className={styles.headerBar__controls}>
          {slugReady &&
          <BreadCrumbs 
            pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
            slug={`Фильмы ${filters ? '/ ' + filters : '/ Все'}`} /> 
          }

        </div>

        <div className={styles.headerBar__textInfo}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <div className={styles.descriptionWrapper}>
            <p className={styles.descriptionParagraph}>{showDescription ? descriptionParagraphs[0] : readmoreDescription}</p>
            {showDescription &&
              descriptionParagraphs.slice(1).map((item, id) => (
                <p key={id} className={styles.descriptionParagraph}>{item}</p>
              ))
            }
            <span 
              className={styles.descriptionToggle}
              onClick={() => setShowDescription(!showDescription)}
            >
                {showDescription ? 'Свернуть' : 'Развернуть'}
            </span>
          </div>
        </div>
      </div>

    </section>
    )
}

export default MoviesHeaderBar