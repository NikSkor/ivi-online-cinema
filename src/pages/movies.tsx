import Layout from '@/components/layout/Layout'
import React, { FC, useState } from 'react'
import Link from 'next/link'
import Movies from '@/components/screens/movies/Movies'

const MoviesPage: FC = () => {
    const [films, setFilms] = useState([{ id: 1, title: 'Titanik' }, { id: 2, title: 'Brigada' }])
    return (
        <>
          <Movies />
        </>
    )
}

export default MoviesPage