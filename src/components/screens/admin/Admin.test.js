import Admin from './Admin';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { renderHook } from '@testing-library/react';
import { renderWithProviders } from './utils/utils-for-tests';
import { screen } from '@testing-library/react';


jest.mock('next/router', () => require('next-router-mock'));


describe('test Admin component', () => {
  afterEach(cleanup);

  test('there is the button', () => {
    renderWithProviders(<Admin/>);
    const btns = screen.getAllByRole('button');
    btns.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    })
  });
});
