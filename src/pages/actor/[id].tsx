import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ActorPage: NextPage = () => {

  const { asPath, pathname } = useRouter()

  return (
    <div>ActorPage {asPath}</div>
  )
}

export default ActorPage