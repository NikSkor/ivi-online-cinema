import MessageModal from '@/components/screens/admin/MessageModal/MessageModal';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));


describe('test MessageModal component', () => {
  afterEach(cleanup);

  test('there is the button', () => {
    render(
      <MessageModal
        active={true}
        setActive={(e) => {}}
        link={'/admin'}
        message={'Всё работает!'}
        isValidName={true}
      ></MessageModal>
    );
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
  });

  test('extBtn returns to admin page', () => {
      mockRouter.push('/initial-path');

      render(
        <MessageModal
          active={true}
          setActive={(e) => {}}
          link={'/foo?bar=baz'}
          message={'Всё работает!'}
          isValidName={true}
        ></MessageModal>
      );

      fireEvent.click(screen.getByRole('button'));

      expect(mockRouter).toMatchObject({
        asPath: '/foo?bar=baz',
        pathname: '/foo',
        query: { bar: 'baz' },
      });
  });

  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <MessageModal
          active={true}
          setActive={(e) => {}}
          link={'/foo?bar=baz'}
          message={'Всё работает!'}
          isValidName={true}
        ></MessageModal>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer.create(<MessageModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});