import Admin from './Admin';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';


jest.mock('next/router', () => require('next-router-mock'));


describe('test EditGenre component', () => {
  afterEach(cleanup);

  renderHook(() => useAppDispatch());
  renderHook(() => useAppSelector());


  test('there is the button', () => {
    render(
      <Admin>
      </Admin>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });
});
