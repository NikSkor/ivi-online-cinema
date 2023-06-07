import { searchInCatalog } from './searchInCatalog.ts';

describe('test sortByName function', () => {
  test('function search rus name correctly', () => {
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
    expect([
      {
        genreId: 3,
        name: 'Опера',
      },
    ]).toEqual(searchInCatalog(arr, 'опе', 'ru'));
  });
  test('function search eng name correctly', () => {
    let arr = [
      {
        genreId: 1,
        enName: 'Music',
      },
      {
        genreId: 2,
        enName: 'Drama',
      },
      {
        genreId: 3,
        enName: 'Magic',
      },
    ];
    expect([
      {
        genreId: 2,
        enName: 'Drama',
      },
      {
        genreId: 3,
        enName: 'Magic',
      },
    ]).toEqual(searchInCatalog(arr, 'ma', 'eng'));
  });
  test('function gets an empty array', () => {
    let arr = [];
    expect([]).toEqual(searchInCatalog(arr, 'оп', 'ru'));
  });
});