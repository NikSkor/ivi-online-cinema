import React, { FC, useEffect, useState } from 'react'
import Admin from '@/components/screens/admin/Admin';
import { NextPage } from 'next'
import Layout from '@/components/layout/Layout';


const AdminPage: NextPage = () => {

    return (
        <>
          <Layout title={'Панель администратора'}>
            <Admin />
          </Layout>
        </>
    )
}

export default AdminPage;