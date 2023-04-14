import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Person from '@/components/screens/person/Person'

const PersonPage: NextPage = () => {

  const { asPath } = useRouter()
  const id = asPath.match(/\d+$/)?.toString()

  return (
    <>
      <Person path={id} />
    </>
  )
}

export default PersonPage