import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import './film.module.scss'

const FilmPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <Layout title="Фильм">
      <main className='container'>FilmPage
        <div>
          <ul>
            <li>Фильмы</li>
            <li>Документальные</li>
          </ul>
        </div>

      </main>
    </Layout>

  )
}

export default FilmPage