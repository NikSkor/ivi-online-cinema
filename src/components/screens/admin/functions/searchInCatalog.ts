interface IGenres {
  genreId: number,
  name: string,
  enname: null|string
} 

export const searchInCatalog = (catalog: IGenres[], searchText: string) => {
    if (searchText === '') return catalog;

    let newCatalog: IGenres[] = [];

    catalog.forEach(item => {
      if(item.name.toLowerCase().includes(searchText.toLowerCase())) {
        newCatalog.push(item);
      }
    })

    return newCatalog;
  };