interface IGenres {
  genreId: number,
  name: string
} 

export const changeFirstChar = (arr: IGenres[]) => {
  arr.forEach(elem => {
    let str = elem.name.charAt(0).toUpperCase() + elem.name.slice(1);
    elem.name = str;
  });
}