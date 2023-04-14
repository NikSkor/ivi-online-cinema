import { FC } from 'react'
import Link from 'next/link'
import styles from './PersonBreadCrumbs.module.scss'

interface IBreadCrumbs {
  personName: string
}

const PersonBreadCrumbs: FC<IBreadCrumbs> = ({personName}) => {
  return (
    <div className={styles.breadCrumbs__container}>
      <ul className={styles.person__breadCrumbs}>
        <li className={styles.breadCrumbs__item}>
          <Link className={styles.breadCrumbs__link} href={'/'}>Мой Иви</Link>
        </li>
        <li className={styles.breadCrumbs__item}>
          <span className={styles.breadCrumbs__name}>{personName}</span>
        </li>
      </ul>
    </div>
  )
}

export default PersonBreadCrumbs