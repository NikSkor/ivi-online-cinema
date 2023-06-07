import CrudList from '@/components/screens/admin/CrudList/CrudList';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => require('next-router-mock'));

describe('test CrudList component', () => {
  afterEach(cleanup);

  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <CrudList
          catalog = {[
            {
              genreId: 1,
              name: 'Аниме',
              enName: 'Anime'
            },
            {
              genreId: 2,
              name: 'Аниме2',
              enName: 'Anime2'
            }
            ]}
          adress = {'/foo'}
          isLoaded = {true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer
      .create(
        <CrudList
          catalog = {[]}
          adress = ''
          isLoaded = ''
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
