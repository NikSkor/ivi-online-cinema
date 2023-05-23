export interface IMovie {
    movieId: number
    name: string
    enName: string
    type: string
    rating: number
    votes: number
    movieLength: number
    description: string
    premiere: string
    slogan: string
    shortDescription: string
    ageRating: number
    poster: string
    trailer: string
    countries: {
      countryId: number
      name: string
    }[],
    persons: any
    genres: {
      genreId: number,
      name: string
    }
  }