import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Movies from '@/components/screens/movies/Movies'
import { useAppDispatch } from '@/store/hooks'
import { setCountries, setGenres, setRating, setGradesCount, selectGenres, selectCountries } from '@/store/slices/filtersSlice'
import { slugHandler } from '@/functions/slugHandler'

const MoviesQueryPage: NextPage = () => {
  
  const router = useRouter()
  const dispatch = useAppDispatch()

  function setState(slugList: string[], slugType: string) {
    if (slugType === 'genres') {
      dispatch(setGenres(slugList))
    }
  
    if (slugType === 'countries') {
      dispatch(setCountries(slugList))
    }
  }

  useEffect(() => {
    if(!router.isReady) return

    if (router.query.rating) dispatch(setRating(+router.query.rating))
    if (router.query.grades) dispatch(setGradesCount(+router.query.grades))

    if (router.query.slug) {
      const slugValues =  slugHandler(router.query.slug)

      if (slugValues) {
        slugValues.forEach((item) => {
          setState(item.slugList, item.slugType)
        })
      }
      
    }
  })

  return (
    <>
      <Movies />
    </>
  )
}

export default MoviesQueryPage