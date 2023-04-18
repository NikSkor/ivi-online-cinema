import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppThunk, RootState } from "../store";

export interface filtersState {
  genres: string[]
  countries: string[]
}

const initialState: filtersState = {
  genres: [],
  countries: []
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addGenre(state, action) {
      if (state.genres.includes(action.payload)) {
        state.genres = state.genres.filter(item => item !== action.payload)
      } else {    
        state.genres.push(action.payload);
      }
      console.log(state.genres)
    },

    addCountry(state, action) {
      if (state.countries.includes(action.payload)) {
        state.countries = state.countries.filter(item => item !== action.payload)
      } else {    
        state.countries.push(action.payload);
      }
    },
  }
})

export const { addGenre, addCountry } = filtersSlice.actions;

export const selectGenres = (state: RootState) => state.filters.genres
export const selectCountries = (state: RootState) => state.filters.countries

export const filtersReducer =  filtersSlice.reducer;