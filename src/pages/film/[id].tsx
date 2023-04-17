import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import './film.module.scss'
import Film from '@/components/screens/film/Film'

const FilmPage: NextPage = () => {

  return (
    <Layout title="Фильм">
      <Film />
    </Layout>

  )
}

export default FilmPage