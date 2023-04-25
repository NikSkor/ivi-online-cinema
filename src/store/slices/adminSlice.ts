import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  filmId: number,
  filmValues: IFilmItem,
}

interface IFilmItem {
  name: string,
  foreignName: string,
  posterURL: string,
  year: number,
  rating: number,
}

const initialState: UserState = {
  filmId: 0,
  filmValues: {
    name: '',
    foreignName: '',
    posterURL: '',
    year: 0,
    rating: 0,
  }
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addId(state, action: PayloadAction<number>) {
      state.filmId = 0;
      state.filmId = action.payload;
    },
    addFilmValues(state, action: PayloadAction<IFilmItem>) {
        state.filmValues = {
        name: '',
        foreignName: '',
        posterURL: '',
        year: 0,
        rating: 0,
      }
      Object.assign(state, action.payload);
    }
  }
});

export const { addId, addFilmValues } = adminSlice.actions;


export default adminSlice.reducer;