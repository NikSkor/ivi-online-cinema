export interface IGenres {
  genreId: number,
  name: string,
  enName: string|null
} 

export interface IGenreItem {
  id: number,
  name: string,
  enName: string,
}

export interface IFilmItem {
  id: number,
  name: string,
  enName: string,
}

export interface IFilms {
  ageRating: null|number,
  countries: [],
  description: string,
  enName: null|string,
  genres: [],
  movieId: number,
  movieLength: number,
  name: string,
  persons: {},
  poster: string,
  premiere: string,
  rating: number,
  shortDescription: null|string,
  slogan: string,
  trailer: string,
  type: string,
  votes: number
}

