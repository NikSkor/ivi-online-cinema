import { FC } from 'react'
import styles from './SlickItem.module.scss'
import { truncateText } from '@/functions/truncateText'
import Image from 'next/image'

interface ISlickItem {
  icon?: string
  name: string
}

const SlickItem: FC<ISlickItem> = ({icon, name}) => {

  return (
    <div className={styles.slick_item}>
        <div className={styles.slick_content}>
          {icon &&
            <Image
              priority
              height={32}
              width={32}
              src={icon}
              alt="genre_icon"
            />
          }
          <p className={styles.slick_text}>
            {truncateText(name, 9)}
          </p>
        </div>
    </div>
  )
}

export default SlickItem