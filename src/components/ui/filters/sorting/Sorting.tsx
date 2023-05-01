import { FC, useState } from 'react'
import styles from './Sorting.module.scss'

// components
import Image from 'next/image'

// icons
import downArrow from '/public/down-arrow.svg'
import upArrow from '/public/up-arrow.svg'
import sortingIcon from '/public/sorting.svg'
import { useOutside } from '@/hooks/useOutside'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/store/hooks'
import { selectSortProperty } from '@/store/slices/filtersSlice'

const Sorting: FC = () => {

  const router = useRouter()
  const sortProperty = useAppSelector(selectSortProperty)
  const [sortValue, setSortValue] = useState(sortProperty ? sortProperty : 'rat')

  const { show, setShow, ref } = useOutside(false)

  const sortingPropertiesList = [
    {value: 'rat', name: 'рейтингу'},
    {value: 'count', name: 'количеству оценок'},
    {value: 'new', name: 'дате выхода'},
    {value: 'alphabet', name: 'алфавиту'}
  ]

  const getPropertyName = (value: string) => {
    const selectedProperty = sortingPropertiesList.find((item) => item.value === value)
    return selectedProperty ? selectedProperty.name : 'рейтингу'
  }

  const clickHandle = (value: string) => {
    const slug = router.query.slug
    const query = router.query
    delete query.slug

    const path = Array.isArray(slug)
                 ? ('/movies/' + slug.join('/'))
                 : (slug ? ('/movies/' + slug) : '/movies')

    router.push({pathname: path, query: {
      ...query,
      sort: value
    }})
    setSortValue(value)
    setShow(false)

  }
  
  return (
    <div 
      className={styles.sorting}
      ref={ref} >
      <div className={styles.sorting_btn}
           onClick={() => setShow(!show)}>
        <Image
          priority
          height={16}
          width={16}
          src={sortingIcon}
          alt="sorting_cion"
        />
        <span className={styles.caption}>По {getPropertyName(sortProperty)}</span>
        <Image
          priority
          height={16}
          width={16}
          src={show ? upArrow : downArrow}
          alt="arrow_icon"
        />
      </div>

      {show &&
      <div className={styles.sorting_dropDawn}>
        <div className={styles.dropDawn_title}>Сортировать по:</div>
        <ul className={styles.sorting_list}>
          {
            sortingPropertiesList.map((item) => (
              <li 
                key={item.value} 
                className={`${styles.sorting_property} ${item.value === sortValue ? styles.selected : ''}`}
                onClick={() => clickHandle(item.value)}
              >
                  {item.name}
              </li>
            ))
          }    
        </ul>
      </div>
      }
    </div>
  )
}

export default Sorting