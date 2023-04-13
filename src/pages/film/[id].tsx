import React from 'react'
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const FilmPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <Layout title="Онлайн-кинотеатр Иви">
      <div>FilmPage</div>
    </Layout>
    
  )
}

export default FilmPage