import { paginateCatalog } from './paginateCatalog.ts';

describe('test paginateCatalog function', () => {
  test('function work correctly', () => {
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
      {
        genreId: 4,
        name: 'Танцы',
      },
      {
        genreId: 5,
        name: 'Юмор',
      },
    ];
    expect([
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
    ]).toEqual(paginateCatalog(arr, 3, 1 ));
    expect([
      {
        genreId: 4,
        name: 'Танцы',
      },
      {
        genreId: 5,
        name: 'Юмор',
      },
    ]).toEqual(paginateCatalog(arr, 3, 2));
  });
  test('function gets an empty array', () => {
    let arr = [];
    expect([]).toEqual(paginateCatalog(arr, 3, 2));
  });
});
