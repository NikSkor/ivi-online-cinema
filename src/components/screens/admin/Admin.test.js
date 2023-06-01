import { Provider } from 'react-redux';
import Admin from './Admin';
import { cleanup } from '@testing-library/react';
import Layout from '@/components/layout/Layout';
import BreadCrumbs from '@/components/ui/breadCrumbs/BreadCrumbs';
import { store } from '@/store/store';
import { MemoryRouter } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import '@testing-library/jest-dom';



describe('test EditGenre component', () => {
  afterEach(cleanup);

  test('there is the button', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Layout title={'Панель администратора'}>
            <Admin>
            </Admin>
          </Layout>
        </Provider>
      </MemoryRouter>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });
});
