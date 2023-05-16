import { NextPage } from 'next'
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { useAppDispatch } from '@/store/hooks';
import { addGenreId} from '@/store/slices/adminSlice';
import EditGenre from '@/components/screens/admin/editGenre/EditGenre';
// import { addId } from '../../store/slices/adminSlice';


const GenreEditPage: NextPage = () => {

  const { asPath } = useRouter();
  const genreId = asPath.match(/\d+$/)?.toString();

  const dispatch = useAppDispatch();

  if(typeof genreId !== 'undefined') {
    dispatch(addGenreId(+genreId));
  }


    return (
        <>
        <Layout title={'Редактируем данные'}>
          <EditGenre/>
        </Layout>
        </>
    )
}

export default GenreEditPage;