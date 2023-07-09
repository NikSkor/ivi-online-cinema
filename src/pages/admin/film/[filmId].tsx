import { NextPage } from 'next'
import { useRouter } from 'next/router';
import EditMovie from '@/components/screens/admin/editMovie/EditMovie';
import Layout from '@/components/layout/Layout';
import { useAppDispatch } from '@/store/hooks';
import { addFilmId } from '@/store/slices/adminSlice';


const FilmEditPage: NextPage = () => {

  const { asPath } = useRouter();
  const filmId = asPath.match(/\d+$/)?.toString();

  const dispatch = useAppDispatch();

  if(typeof filmId !== 'undefined') {
    dispatch(addFilmId(+filmId));
  }


    return (
        <>
        <Layout title={'Редактируем данные'}>
          <EditMovie/>
        </Layout>
        </>
    )
}

export default FilmEditPage;
