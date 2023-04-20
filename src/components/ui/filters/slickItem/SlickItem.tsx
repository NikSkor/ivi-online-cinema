import { FC } from 'react'
import styles from './SlickItem.module.scss'
import { truncateText } from '@/functions/truncateText'
import Image from 'next/image'
import { selectGenres, selectCountries, setGenres, setCountries } from '@/store/slices/filtersSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/router'
import { ISlickItem } from '@/interfaces/filters/ISlickItem'

const SlickItem: FC<ISlickItem> = ({icon, name, value, filterType}) => {

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
            {truncateText(name, 9, 'break-word')}
          </p>
        </div>
    </div>
  )
}

export default SlickItem