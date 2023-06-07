import { changeFirstChar } from './changeFirstChar.ts';


describe('test changeFirstChar function', () => {
  test('function changes first letter correctly', ()=> {
    let arr = [
      {
        genreId: 1,
        name: 'мьюзикл',
      },
      {
        genreId: 2,
        name: 'балет',
      },
      {
        genreId: 3,
        name: 'Опера',
      },
      {
        genreId: 4,
        name: '',
      },
      {
        genreId: 5,
        name: 'movie',
      },
    ];
    changeFirstChar(arr);
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
      {
        genreId: 4,
        name: '',
      },
      {
        genreId: 5,
        name: 'Movie',
      },
    ]).toEqual(arr);
  });
  test('function gets an empty array', () => {
    let arr = [];
    changeFirstChar(arr);
    expect([]).toEqual(arr);
  });
});
