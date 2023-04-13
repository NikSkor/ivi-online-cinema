import Layout from '@/components/layout/Layout'
import React, { FC, useState } from 'react'
import Link from 'next/link'

const Movies: FC = () => {
    const [films, setFilms] = useState([{ id: 1, title: 'Titanik' }, { id: 2, title: 'Brigada' }])
    return (
        <Layout title="Онлайн-кинотеатр Иви">
            <main className='container'>
                Контент Фильмы
                <ul>
                    {
                        films.map(el => (<li key={el.id}><Link href={`/film/${el.id}`} >{el.title}</Link></li>))
                    }
                </ul>
            </main>
        </Layout>
    )
}

export default Movies