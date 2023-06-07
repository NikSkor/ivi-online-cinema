interface IGenres {
  genreId: number,
  name: string,
  enName: null|string
} 

export const searchInCatalog = (catalog: IGenres[], searchText: string, locale: string='ru') => {
    if (searchText === '') return catalog;

    let newCatalog: IGenres[] = [];

    if (locale === 'ru') {
      catalog.forEach(item => {
        if(item.name.toLowerCase().includes(searchText.toLowerCase())) {
          newCatalog.push(item);
        }
      })
    } else {
      catalog.forEach(item => {
        if (item.enName !== null) {
          if(item.enName.toLowerCase().includes(searchText.toLowerCase())) {
          newCatalog.push(item);
        }
        }
      })
    }
    return newCatalog;
  };