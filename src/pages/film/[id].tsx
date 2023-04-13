import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from './film.module.sass'
import Link from 'next/link'

const FilmPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <Layout title="Фильм">
      <main className={`container ${styles.film__container}`}>
        <div className={styles.film__navbar}>
          <ul className={styles.film__navigation}>
            <li><Link href={'/movies'}>Фильмы</Link></li>
            <li><Link href={asPath}>Название</Link></li>
          </ul>
          <div className={styles.film__badge}>бесплатно</div>
        </div>

      </main>
    </Layout>

  )
}

export default FilmPage