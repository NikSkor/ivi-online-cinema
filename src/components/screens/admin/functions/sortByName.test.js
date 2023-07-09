import { sortByName } from './sortByName.ts';

describe('test sortByName function', () => {
  test('function sort correctly', () => {
    let arr = [
      {
        genreId: 1,
        name: 'Мьюзикл',
      },
      {
        genreId: 2,
        name: 'Балет',
      },
      {
        genreId: 3,
        name: 'Опера',
      },
    ];
    sortByName(arr);
    expect([
      {
        genreId: 2,
        name: 'Балет',
      },
      {
        genreId: 1,
        name: 'Мьюзикл',
      },
      {
        genreId: 3,
        name: 'Опера',
      },
    ]).toEqual(arr);
  });
  test('function gets an empty array', () => {
    let arr = [];
    sortByName(arr);
    expect([]).toEqual(arr);
  });
});
