import { FC, useEffect, useState } from 'react'
import styles from './RangeItem.module.scss'
import { IRangeItem } from '@/interfaces/filters/IRangeItem'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectVotesCount, selectRating, setRating, setVotesCount } from '@/store/slices/filtersSlice'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter } from 'next/router'


const RangeItem: FC<IRangeItem> = ({ title, step, maxValue, rangeType, isFloat = false }) => {

  const dispatch = useAppDispatch()
  const router = useRouter()

  const [localValue, setLocalValue] = useState(0)

  const startValue = (rangeType === 'rating')
                     ? useAppSelector(selectRating)
                     : useAppSelector(selectVotesCount)

  useEffect(() => {
    if(!router.isReady) return

    setLocalValue(startValue)

  }, [startValue])


  const debounceOnValue = useDebouncedCallback((value: number) => {
    const slug = router.query.slug
    const query = router.query
    delete query.slug

    const path = Array.isArray(slug)
                 ? ('/movies/' + slug.join('/'))
                 : (slug ? ('/movies/' + slug) : '/movies')

    if (rangeType === 'rating') {
     dispatch(setRating(+value))
      router.push({pathname: path, query: {
        ...query,
        rating: value
      }})
    }

    if (rangeType === 'votes') {
      dispatch(setVotesCount(+value))
      router.push({pathname: path, query: {
        ...query,
        votes: value
      }})
    }

  }, 250)

  function valueHandle(value: number) {
    if (!isFloat) return value.toString()
    if (!value.toString().match(/\./)) {
      return value.toString() + ',0'
    }
    return value.toString().replace('.', ',')
  }

  const changeHandle = (value: string) => {
    setLocalValue(+value)
    debounceOnValue(+value)
  }

  return (
    <div className={styles.rangeItem}>
      <h2 className={styles.rangeTitle}>{title}</h2>
      <p className={styles.rangeValue}>От: {valueHandle(localValue)}</p>
      <div className={styles.input__container}>
        <input
          className={styles.range}
          type="range"
          value={localValue}
          min={0}
          max={maxValue}
          step={step}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => changeHandle(event.target.value)}
        />
      </div>
    </div>
  )
}

export default RangeItem
