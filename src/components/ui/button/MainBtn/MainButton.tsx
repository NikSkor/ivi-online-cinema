import React from 'react'
import styles from './btn.module.sass'
interface Props {
  link: string,
  text: string
}
export const MainButton: React.FC<Props> = ({ link, text }) => {
  return (
    <a className={`${styles.btn} ${styles.btn__main}`} href={link} target='_blank'><div className={styles.btn__text}>{text}</div> </a>
  )
}
