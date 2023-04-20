import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

import type { AppThunk, RootState } from "../store";

export interface filtersState {
  genres: string[]
  countries: string[]
  rating: number
  gradesCount: number
}

const initialState: filtersState = {
  genres: [],
  countries: [],
  rating: 0,
  gradesCount: 0
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload.slice(0)
      /*if (state.genres.includes(action.payload)) {
        state.genres = state.genres.filter(item => item !== action.payload)
      } else {    
        state.genres.push(action.payload);
      }*/
    },

    setCountries(state, action) {
      state.countries = action.payload.slice(0)
      /*if (state.countries.includes(action.payload)) {
        state.countries = state.countries.filter(item => item !== action.payload)
      } else {    
        state.countries.push(action.payload);
      }*/
    },

    setRating(state, action) {
      state.rating = action.payload
    },
    setGradesCount(state, action) {
      state.gradesCount = action.payload
    }
  }
})

export const { setGenres, setCountries, setRating, setGradesCount } = filtersSlice.actions;

export const selectGenres = (state: RootState) => state.filters.genres
export const selectCountries = (state: RootState) => state.filters.countries
export const selectRating = (state: RootState) => state.filters.rating
export const selectGradesCount = (state: RootState) => state.filters.gradesCount


export const filtersReducer =  filtersSlice.reducer;