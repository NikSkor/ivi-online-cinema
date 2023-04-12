import { FC } from 'react'
import Image from 'next/image'
import { ISocial } from '@/interfaces/footer/ISocial'
import styles from './SocialLink.module.scss'

const SocialLink: FC<ISocial> = ({socialURL, imgURL}) => {
  return (
    <a className={styles.socialLink} href={socialURL} target='_blank'>
      <div className={styles.socialIcon__btn}>
        <Image
          className={styles.socialIcon}
          priority
          height={16}
          width={16}
          src={imgURL} 
          alt="social_icon"
        />
      </div>

    </a>
  )
}

export default SocialLink