import styles from './SentMessage.module.scss'

const SentMessage = ({ title, extra } : { title: string, extra?: string }) => {
  return(
    <div className={styles.messageWrapper}>
      <div className={styles.messageBody}>
        <p>{title}</p>
        {
          extra && <span>{extra}</span>
        }
      </div>
    </div>
  )
}

export default SentMessage