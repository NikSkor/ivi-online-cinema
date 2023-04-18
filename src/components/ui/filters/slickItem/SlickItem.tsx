import { FC } from 'react'
import styles from './SlickItem.module.scss'
import { truncateText } from '@/functions/truncateText'
import Image from 'next/image'
import { addGenre, addCountry, selectGenres, selectCountries } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

interface ISlickItem {
  icon?: string
  name: string
  value: string
  filterType: string
}

const SlickItem: FC<ISlickItem> = ({icon, name, value, filterType}) => {

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
    <div 
      className={styles.slick_item}
      onClick={() => clickHandle()}>
        <div className={`${styles.slick_content} ${icon ? '' : styles.not_icon} ${activeCategory ? styles.active : ''}`}>
          {icon &&
            <Image
              className={styles.slick_icon}
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