import { FC } from 'react'
import Link from 'next/link'
import styles from './BreadCrumbs.module.scss'
import { IBreadCrumbs } from '@/interfaces/breadCrumbs/IBreadCrumbs'

const BreadCrumbs: FC<IBreadCrumbs> = ({pathList, slug}) => {
  return (

      <ul className={styles.breadCrumbs}>
        {
          pathList.map((item) => (
            <li key={item.pathName} className={styles.breadCrumbs__item}>
              <Link 
                className={styles.breadCrumbs__link}
                href={item.pathLink}>{item.pathName}
              </Link>
            </li>
          ))
        }
        <li className={styles.breadCrumbs__item}>
          <span className={styles.breadCrumbs__name}>{slug}</span>
        </li>
      </ul>
  )
}

export default BreadCrumbs