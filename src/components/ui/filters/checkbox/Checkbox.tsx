import { FC, useState } from 'react'
import styles from './Checkbox.module.scss'
import Image from 'next/image'
import checkIcon from '/public/check.svg'
import { ICheckbox } from '@/interfaces/filters/ICheckbox'

const Checkbox: FC<ICheckbox> = ({name, value}) => {

  const [hover, setHover] = useState(false)

  return (
    <li 
      key={value} 
      className={styles.dropDawnItem}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <label className={styles.dropDawn_label}>
        <input className={styles.dropDawn_input} type="checkbox" value={value}/>
        <div className={styles.input_text}>{name}</div>
        <div className={`${styles.input_checkbox} ${styles.checkedd}`}>
          <Image
            className={hover ? styles.check_icon : styles.hovered_icon}
            priority
            height={16}
            width={16}
            src={checkIcon}
            alt='check_cion'
          />
        </div>
      </label>
    </li>
  )
}

export default Checkbox