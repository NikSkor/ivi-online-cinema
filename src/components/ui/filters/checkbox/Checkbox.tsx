import { FC } from 'react'
import styles from './Checkbox.module.scss'
import Image from 'next/image'
import checkIcon from '/public/check.svg'
import { ICheckbox } from '@/interfaces/filters/ICheckbox'
import { addGenre, addCountry, selectGenres, selectCountries } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Checkbox: FC<ICheckbox> = ({name, value, filterType}) => {

  const dispatch = useAppDispatch()
  const genresList = useAppSelector(selectGenres)
  const countriesList = useAppSelector(selectCountries)

  const clickHandle = () => {
    if (filterType === 'genre') {
      dispatch(addGenre(value))
    }
    if (filterType === 'country') {
      dispatch(addCountry(value))
    }
  }

  let activeCategory
  if (filterType === 'genre') {
    activeCategory = genresList.includes(value)
  }
  if (filterType === 'country') {
    activeCategory = countriesList.includes(value)
  }

  return (
    <li className={styles.dropDawnItem}>
      <label className={`${styles.dropDawn_label} ${activeCategory ? styles.checked : ''}`}>
        <input className={styles.dropDawn_input}
               type="checkbox" 
               value={value}
               onChange={() => clickHandle()}/>
        <div className={styles.input_text}>{name}</div>
        <div className={styles.input_checkbox}>
          <Image
            className={styles.checkbox_icon}
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