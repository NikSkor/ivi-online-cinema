import { cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditGenre from '@/components/screens/admin/EditGenre/EditGenre';
import { renderWithProviders } from '../utils/utils-for-tests';
import mockRouter from 'next-router-mock';


jest.mock('next/router', () => require('next-router-mock'));

describe('test EditGenre component', () => {
  afterEach(cleanup);

  test('there are the arrow btns', () => {
    renderWithProviders(
      <EditGenre/>
    );
    const btns = screen.getAllByRole('button');
    btns.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    });
  });

  test('extBtn returns to admin page', () => {
    mockRouter.push('/admin');

    renderWithProviders(<EditGenre />);

    fireEvent.click(screen.getByText('Back'));

    expect(mockRouter).toMatchObject({
      asPath: '/admin',
      pathname: '/admin',
    });
  });
});