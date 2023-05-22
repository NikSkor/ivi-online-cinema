export interface IFilm{
    movieId: number,
    name: string,
    enName: null,
    type: string,
    rating: number,
    votes: number,
    movieLength: number,
    description: string,
    premiere: string,
    slogan: string,
    shortDescription: string,
    ageRating: number,
    poster: string,
    trailer: string,
    genres: IGenres[],
    countries: IContries[],
    comments: IComments[],
    languages: ILanguages[],
    facts: IFacts[],
    similarMovies: IMovie2[],
    persons: IPersons
}
interface IGenres {
    genreId: number,
    name: string
}

interface IFacts {
    factId: number,
    value: string,
    type: string,
    spoiler: boolean
}
interface IContries {
    countryId: number,
    name: string
}
interface ILanguages {
    languageId: number,
    name: string
}

export interface IComments {
    commentId: number,
    userName: string,
    publishDate: string,
    value: string,
    parentId: null | number,
    childComments: IComments[]
}

export interface IPerson {
        personId: number,
        name: string,
        enName: string,
        photo: string
}
export interface IPersons {
        актеры: IPerson[],
        режиссеры: IPerson[],
}

export interface ISimilarFilms {
    similarMovies: IMovie2[]
}
  
export interface IMovie2 {
    movie2: ISimilarFilm
}
export interface ISimilarFilm{
    movieId: number,
    name: string,
    enName: string | null,
    type: string,
    rating: number,
    votes: number,
    movieLength: number,
    description: string,
    premiere: string,
    slogan: string,
    shortDescription: string,
    ageRating: number,
    poster: string,
    trailer: string
}
