import { changeFirstChar } from '@/components/screens/admin/functions/changeFirstChar';
import { sortByName } from '@/components/screens/admin/functions/sortByName';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  filmId: number,
  genreId: number,
  // genreValues: IGenreItem,
  // filmValues: IFilmItem,
  genres: IGenres[],
  films: IFilms[],
  page: number,
  genresSize: number
}

interface IFilms {
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

interface IGenres {
  genreId: number,
  name: string,
  enname: null|string
} 

interface IGenreItem {
  id: number,
  name: string,
  enName: string,
}

interface IFilmItem {
  id: number,
  name: string,
  enName: string,
}



const initialState: UserState = {
  filmId: 0,
  genreId: 0,
  // genreValues: {
  //   id: 0,
  //   name: '',
  //   enName: '',
  // },
  // filmValues: {
  //   id: 0,
  //   name: '',
  //   enName: '',
  // },
  genres: [],
  films: [],
  page: 1,
  genresSize: 0,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addFilmId(state, action: PayloadAction<number>) {
      state.filmId = 0;
      state.filmId = action.payload;
    },
    addGenreId(state, action: PayloadAction<number>) {
      state.genreId = 0;
      state.genreId = action.payload;
    },
    // addGenreValues(state, action: PayloadAction<IGenreItem>) {
    //     state.genreValues = {
    //       id: 0,
    //       name: '',
    //       enName: '',
    //     }
    //   Object.assign(state.genreValues, action.payload);
    // },
    // addFilmValues(state, action: PayloadAction<IFilmItem>) {
    //     state.filmValues = {
    //     id: 0,
    //     name: '',
    //     enName: '',
    //   }
    //   Object.assign(state.filmValues, action.payload);
    // },
    addGenres(state, action: PayloadAction<IGenres[]>) {
      state.genres.length = 0;
      state.genres = [...state.genres, ...action.payload];
      changeFirstChar(state.genres);
      sortByName(state.genres, 'name');
    },
    addFilms(state, action: PayloadAction<IFilms[]>) {
      state.films.length = 0;
      state.films = [...state.films, ...action.payload];
    },
    newPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    addGenresSize(state) {
      state.genresSize = 0;
      state.genresSize = state.genres.length;
    },
  }
});

export const { addFilmId, addGenreId, addGenres, addFilms, newPage, addGenresSize} = adminSlice.actions;


export default adminSlice.reducer;