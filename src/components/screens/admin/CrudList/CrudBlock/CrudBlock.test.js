import CrudBlock from '@/components/screens/admin/CrudList/CrudBlock/CrudBlock';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => require('next-router-mock'));

describe('test CrudBlock component', () => {
  afterEach(cleanup);

  test('there are the buttons', () => {
    render(
      <CrudBlock
        key={1}
        item={{
          id: 1,
          name: 'Имя',
          enName: 'Name',
        }}
        adress={'/foo'}
      />
    );
    const btns = screen.getAllByRole('button');
    btns.forEach((item) => {
      expect(item).toBeInTheDocument();
      expect(item).toMatchSnapshot();
    });
  });

  test('btn go to edit page', () => {
    mockRouter.push('/foo');

    render(
      <CrudBlock
        key={1}
        item={{
          id: 1,
          name: 'Имя',
          enName: 'Name',
        }}
        adress={'/'}
      />
    );

    fireEvent.click(screen.getByText('Redact'));

    expect(mockRouter).toMatchObject({
      asPath: '/foo',
      pathname: '/foo',
    });
  });

  test('component renders props correctly, truthy values', () => {
    const tree = renderer
      .create(
        <CrudBlock
          key={1}
          item={{
            id: 1,
            name: 'Имя',
            enName: 'Name',
          }}
          adress={'/foo'}
        ></CrudBlock>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('component renders props correctly, falsy values', () => {
    const tree = renderer
      .create(
        <CrudBlock
          key={''}
          item={{
            id: '',
            name: '',
            enName: '',
          }}
          adress={''}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
