import { FC, ReactNode } from 'react'
import styles from './SliderItem.module.scss'

const SliderItem:FC<{film: ReactNode}> = ({ film }) => {
  return(
    <div className={styles.sliderItem}>{film}</div>
  )
}

export default SliderItem