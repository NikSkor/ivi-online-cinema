import { cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import UserSwitch from '@/components/screens/admin/UserSwitch/UserSwitch';
import { renderWithProviders } from '../utils/utils-for-tests';

jest.mock('next/router', () => require('next-router-mock'));

describe('test UserSwitch component', () => {
  afterEach(cleanup);

  test('there is the checkbox', () => {
    renderWithProviders(
      <UserSwitch
        firstTitle={'Левый'}
        secondTitle={'Правый'}
        isTrue={true}
        isGenres={false}
      />
    );
    const chk = screen.getByRole('checkbox');
    expect(chk).toBeInTheDocument();
    expect(chk).toMatchSnapshot();
  });

  test('component renders props correctly, truthy values', () => {
    const tree = renderWithProviders(
      <UserSwitch
        firstTitle={'Левый'}
        secondTitle={'Правый'}
        isTrue={true}
        isGenres={false}
      />
    );
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderWithProviders(
      <UserSwitch/>
    );
    expect(tree).toMatchSnapshot();
  });
});
