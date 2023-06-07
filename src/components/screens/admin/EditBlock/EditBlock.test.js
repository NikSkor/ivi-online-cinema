import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditBlock from '@/components/screens/admin/EditBlock/EditBlock';
import { renderWithProviders } from '../utils/utils-for-tests';

jest.mock('next/router', () => require('next-router-mock'));

describe('test EditBlock component', () => {
  afterEach(cleanup);

  test('component renders props correctly, truthy values', () => {
    const tree = renderWithProviders(
      <EditBlock
        titleName={'Название'}
        name={'Жанр'}
        enName={'Genre'}
        getName={() => {}}
        getEnName={() => {}}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderWithProviders(<EditBlock />);
    expect(tree).toMatchSnapshot();
  });
});
