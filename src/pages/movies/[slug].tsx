import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Category from '@/components/screens/movies/Movies'

const CategoryPage: NextPage = () => {

  const { asPath } = useRouter()
  const categoryName = asPath.match(/\w+$/)?.toString()

  return (
    <>
      <Category />
    </>
  )
}

export default CategoryPage