import { FC, ReactNode } from 'react'
import styles from './SliderItem.module.scss'

const SliderItem:FC<{film: ReactNode}> = ({ film }) => {
  return(
    <div className={styles.sliderItem}>
      <div className={styles.image}>{film}</div>
      <p>qweqeqwewqewqeффффыффqqq</p>
    </div>
  )
}

export default SliderItem