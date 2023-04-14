import { FC } from 'react'
import Image from 'next/image'
import styles from './BackLink.module.scss'
import { useRouter } from 'next/router'
import backIcon from '/public/back_icon.svg'

/*

*/

const BackLink: FC = () => {

  const router = useRouter()

  return (
    <section className={styles.backLink__section}>
      <div className={styles.controlButton}
          onClick={() => router.back()}>
        <div className={styles.controlButton__content}>
          <Image
            className={styles.back__icon}
            priority
            height={25}
            width={25}
            src={backIcon} 
            alt="back_lcon"
            />
          <p className={styles.controlButton__caption}>Назад</p>
        </div>
      </div>
    </section>
  )
}

export default BackLink