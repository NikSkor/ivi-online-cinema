import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '@/components/screens/admin/Pagination/Pagination';
import { renderWithProviders } from '../utils/utils-for-tests';

jest.mock('next/router', () => require('next-router-mock'));

describe('test Pagination component', () => {
  afterEach(cleanup);

  test('there are the arrow btns', () => {
    renderWithProviders(
      <Pagination pagesSum={5} pageActive={2} getPage={() => {}} />
    );
    const btns = screen.getAllByRole('button');
    btns.forEach((item)=> {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    })
  });

  test('component renders props correctly, truthy values', () => {
    const tree = renderWithProviders(
      <Pagination pagesSum={5} pageActive={2} getPage={()=>{}} />
    );
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderWithProviders(<Pagination />);
    expect(tree).toMatchSnapshot();
  });
});
