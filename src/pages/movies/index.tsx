import React, { FC, useEffect, useState } from 'react'
import Movies from '@/components/screens/movies/Movies'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'
import { setGradesCount, setRating } from '@/store/slices/filtersSlice'

const MoviesPage: NextPage = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!router.isReady) return

    if (router.query.rating) dispatch(setRating(+router.query.rating))
    if (router.query.grades) dispatch(setGradesCount(+router.query.grades))
  })


    return (
        <>
          <Movies />
        </>
    )
}

export default MoviesPage