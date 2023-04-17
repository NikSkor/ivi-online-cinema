import { FC, useState } from 'react'
import styles from './MoviesHeaderBar.module.scss'

// interfaces
import { IHeaderBar } from '@/interfaces/movies/IHeaderBar'

// components
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'

// functions
import { truncateText } from '@/functions/truncateText'

const MoviesHeaderBar: FC<IHeaderBar> = ({title, description}) => {

  const descriptionParagraphs = description.split('\n')
  const readmoreDescription = truncateText(descriptionParagraphs[0], 230)

  const [showDescription, setShowDescription] = useState(false)



  return (
    <section className={styles.headerBar}>
      <div className={styles.headerBar__container}>

        <div className={styles.headerBar__controls}>
          <BreadCrumbs 
          pathList={[{pathLink: '/', pathName: 'Мой Иви'}]} 
          slug={'Фильмы'} />
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