interface IGenres {
  genreId: number,
  name: string
} 

export const sortByName = (catalog: IGenres[], name: string) => {
  if(catalog.length === 0) return catalog;
  catalog = catalog.sort((item1: IGenres, item2: IGenres) => item1.name > item2.name ? 1 : -1);
  return catalog;
}