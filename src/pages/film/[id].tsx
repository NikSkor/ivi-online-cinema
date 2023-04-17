import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
<<<<<<< HEAD
import { useRouter } from 'next/router'
import './film.module.scss'
=======
import Film from '@/components/screens/film/Film'
>>>>>>> ceaf3fbde14791ce22a1b2eb470ae7e609ecb8b3

const FilmPage: NextPage = () => {

  return (
    <Layout title="Фильм">
<<<<<<< HEAD
      <main className='container'>FilmPage
        <div>
          <ul>
            <li>Фильмы</li>
            <li>Документальные</li>
          </ul>
        </div>

      </main>
=======
      <Film />
>>>>>>> ceaf3fbde14791ce22a1b2eb470ae7e609ecb8b3
    </Layout>

  )
}

export default FilmPage