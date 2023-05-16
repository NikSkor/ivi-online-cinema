import React from 'react'
import Layout from '@/components/layout/Layout'
import './film.module.scss'
import Film from '@/components/screens/film/Film'
import { Context } from 'vm'
import { IFilm } from '@/components/screens/film/film.data'
const FilmPage = (film: IFilm) => {
  return (
    <Layout title="Фильм">
        <Film film={film}/> 
    </Layout>
  )
}
FilmPage.getInitialProps = async (context: Context) => {
	const id = context.query
  const response = await fetch(`http://localhost:5000/api/movie/find-by-id/${id.id}`)
	const film = await response.json()
  console.log(film)
  return film
}

export default FilmPage