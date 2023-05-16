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
    persons: IPerson[]
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
    value: string,
  parentId: number
}

export interface IPerson {
    person: {
        personId: number,
        name: string,
        enName: string,
        photo: string
    },
    profession: {
        professionId: number,
        name: string
    },
    MoviePerson: {
        id: number,
        movieId: number,
        personProfessionId: number
    }
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
