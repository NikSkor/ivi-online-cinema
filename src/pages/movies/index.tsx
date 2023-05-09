import React, { FC, useEffect, useState } from 'react'
import Movies from '@/components/screens/movies/Movies'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'
import { setActor, setVotesCount, setProducer, setRating, setSortProperty } from '@/store/slices/filtersSlice'

const MoviesPage: NextPage = () => {

  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!router.isReady) return

    if (router.query.rating) dispatch(setRating(+router.query.rating))
    if (router.query.votes) dispatch(setVotesCount(+router.query.votes))
    if (router.query.sort) dispatch(setSortProperty(router.query.sort))
    if (router.query.actor) dispatch(setActor(router.query.actor))
    if (router.query.producer) dispatch(setProducer(router.query.producer))
  })


    return (
        <>
          <Movies />
        </>
    )
}

export default MoviesPage
