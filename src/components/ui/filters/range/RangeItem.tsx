import { FC } from 'react'
import styles from './RangeItem.module.scss'
import { IRangeItem } from '@/interfaces/filters/IRangeItem'

const RangeItem: FC<IRangeItem> = ({ title, step, maxValue }) => {
  return (
    <div className={styles.rangeItem}>
      <span className={styles.rangeTitle}>{title}</span>
      <div className={styles.rangeTitle}>

      </div>
    </div>
  )
}

export default RangeItem