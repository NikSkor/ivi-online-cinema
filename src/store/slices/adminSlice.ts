import { changeFirstChar } from '@/components/screens/admin/functions/changeFirstChar';
import { sortByName } from '@/components/screens/admin/functions/sortByName';
import { IFilms, IGenres } from '@/components/screens/admin/interfaces/interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  filmId: number,
  genreId: number,
  genres: IGenres[],
  films: IFilms[],
  pageCount: number,
  page: number,
  genresSize: number,
  isGenre: boolean
}


const initialState: UserState = {
  filmId: 0,
  genreId: 0,
  pageCount: 0,
  genres: [],
  films: [],
  page: 1,
  genresSize: 0,
  isGenre: true
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
    addPageCount(state, action: PayloadAction<number>) {
      state.pageCount = 0;
      state.pageCount = action.payload;
    },
    toggleSwitch(state, action: PayloadAction<boolean>) {
      state.isGenre = action.payload;
    }
  }
});

export const { addFilmId, addGenreId, addGenres, addFilms, newPage, addGenresSize, addPageCount, toggleSwitch} = adminSlice.actions;


export default adminSlice.reducer;