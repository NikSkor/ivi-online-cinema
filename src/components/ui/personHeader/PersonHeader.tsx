import { FC, useState } from 'react'
import styles from './PersonHeader.module.scss'
import { IPersonHeader } from '@/interfaces/person/IPersonHeader'

// functions
import { truncateText } from '@/functions/truncateText'

const PersonHeader: FC<IPersonHeader> = ({photoURL, personNameRu, personNameEn, story}) => {

  const [showStory, setShowStory] = useState(false)



  const readmoreStory = truncateText(story, 120)

  return (
    <div className={styles.personHeader}>
      <div className={styles.figure}>

        <div className={styles.photoWrapper}>
          <img className={styles.poster__image} src={photoURL} alt="person_photo" />
        </div>
      </div>
      
      <h1 className={styles.title}>{personNameRu}</h1>
      <p className={styles.alternate}>{personNameEn}</p>

      <div className={styles.story}>
        <p>{showStory ? story : readmoreStory}</p>
        <span 
          className={styles.storyToggle}
          onClick={() => setShowStory(!showStory)}
        >
            {showStory ? 'Свернуть' : 'Развернуть'}
        </span>
      </div>

    </div>)
}

export default PersonHeader