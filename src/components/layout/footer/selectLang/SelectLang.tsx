import { useRouter } from 'next/router'
import styles from './SelectLang.module.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const SelectLang = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const locale = useRouter().locale

  return (
    <div className={styles.dropdown}>
      <div className={`${styles.dropdownButton} ${isOpen ? styles.active : null}`} onClick={() => setIsOpen(!isOpen)}> {locale === 'ru' ? 'Русский' : 'English'}</div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {locale === 'ru' ? 
          <Link href="/" locale={'en'}>
            <div className={styles.dropdownItem}>English</div>
          </Link>
          :
          <Link href="/" locale={'ru'}>
            <div className={styles.dropdownItem}>Русский</div>
          </Link>}
      </div>
      )}
    </div>
  )
}

export default SelectLang