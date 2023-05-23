import { FC } from 'react'
import Image from 'next/image'
import styles from './BackLink.module.scss'
import { useRouter } from 'next/router'
import backIcon from '/public/back_icon.svg'

const BackLink: FC = () => {
  const locale = useRouter().locale
  const router = useRouter()

  return (
      <div className={styles.backLink__section_inner}>
        <div 
          className={styles.controlButton__content}
          onClick={() => router.back()}>
          <Image
            className={styles.back__icon}
            priority
            height={25}
            width={25}
            src={backIcon} 
            alt="back_lcon"
            />
          <p className={styles.controlButton__caption}>{locale === 'ru' ? 'Назад' : 'Back'}</p>
        </div>
      </div>
  )
}

export default BackLink