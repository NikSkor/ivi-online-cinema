import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const FilmPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <div>FilmPage</div>
  )
}

export default FilmPage