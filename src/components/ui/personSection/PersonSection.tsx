import { FC, PropsWithChildren } from 'react'
import styles from './PersonSection.module.scss'

const PersonSection: FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <section className={styles.pageSection}>
      <div className={styles.pageSection_container}>
        <div className={styles.pageSection_innerContainer}>
          <div className={styles.personContent}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonSection