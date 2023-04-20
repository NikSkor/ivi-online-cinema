import { FC } from 'react'
import styles from './Checkbox.module.scss'
import Image from 'next/image'
import checkIcon from '/public/check.svg'
import { ICheckbox } from '@/interfaces/filters/ICheckbox'
import { setCountries, setGenres, selectGenres, selectCountries } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/router'

const Checkbox: FC<ICheckbox> = ({name, value, filterType}) => {

  const router = useRouter()

  const dispatch = useAppDispatch()
  const genresList = useAppSelector(selectGenres)
  const countriesList = useAppSelector(selectCountries)

  const action = (filterType === 'genre') ? setGenres : setCountries

  let localValues: string[] = []
  let otherValues: string[] = []

  if (filterType === 'genre') {
    localValues = genresList.slice(0)
    otherValues = countriesList.slice(0)
  }
  if (filterType === 'country') {
    localValues = countriesList.slice(0)
    otherValues = genresList.slice(0)
  }
  const clickHandle = () => {
    if (localValues.includes(value)) {
      localValues = localValues.filter((item) => item !== value)
      dispatch(action(localValues))

    } else {
      localValues.push(value)
    }

    const query = router.query
    
    if (!query) router.push({pathname: `/movies`})

    delete query.slug


    const newPath = (filterType === 'genre') 
                    ? `/movies${(localValues.length !== 0) ? ('/' + (localValues.join('+'))) : ''}${(otherValues.length !== 0) ? ('/' + otherValues.slice(0).join('+')) : ''}`
                    : `/movies${(otherValues.length !==0) ? ('/' + (otherValues.slice(0).join('+'))) : ''}${(localValues.length !== 0) ? ('/' + localValues.join('+')) : ''}`

    router.push({pathname: newPath, query: { ...query }})
  }

  let activeCategory = localValues.includes(value)

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