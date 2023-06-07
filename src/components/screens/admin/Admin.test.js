import Admin from './Admin';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from './utils/utils-for-tests';
import { screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';



jest.mock('next/router', () => require('next-router-mock'));


describe('test Admin component', () => {
  afterEach(cleanup);

  test('there is the buttons', () => {
    renderWithProviders(<Admin/>);
    const btns = screen.getAllByRole('button');
    btns.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    })
  });

  test('there is the search input', async () => {
    renderWithProviders(<Admin/>);
    const input = screen.getByPlaceholderText('Search by name...');
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('extBtn returns to main page', () => {
    mockRouter.push('/');

    renderWithProviders(<Admin />);

    fireEvent.click(screen.getByText('Back'));

    expect(mockRouter).toMatchObject({
      asPath: '/',
      pathname: '/',

    });
  });
});
