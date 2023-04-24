import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import EditMovie from '@/components/screens/admin/editMovie/EditMovie';
import Layout from '@/components/layout/Layout';


const FilmEditPage: NextPage = () => {

  const { asPath } = useRouter();
  const filmId = asPath.match(/\d+$/)?.toString();

    return (
        <>
        <Layout title={'Редактируем данные'}>
          <EditMovie id={filmId}/>
        </Layout>
        </>
    )
}

export default FilmEditPage;