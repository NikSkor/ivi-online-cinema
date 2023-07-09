interface IGenres {
  genreId: number,
  name: string,
  enName: string|null
} 

export const paginateCatalog = (catalog: IGenres[], paginSize: number, pageNumber: number)=> {
  let resultCatalog: IGenres[] = [];

  for (let i = 0;  i < catalog.length; i++) {
    if(paginSize*(pageNumber) <= catalog.length) {
      if (i+1+(pageNumber-1)*paginSize > paginSize*pageNumber) break;
    } else {
      if (i+1+(pageNumber-1)*paginSize > (paginSize*(pageNumber-1) + (catalog.length - (pageNumber-1)*paginSize)) ) break;
    }

    resultCatalog.push(catalog[i+(pageNumber-1)*paginSize]);
}
  return resultCatalog;
}