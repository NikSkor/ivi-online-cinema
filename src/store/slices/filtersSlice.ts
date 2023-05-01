import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

import type { AppThunk, RootState } from "../store";

export interface filtersState {
  genres: string[]
  countries: string[]
  rating: number
  votesCount: number
  sortProperty: string
  producer: string
  actor: string
}

const initialState: filtersState = {
  genres: [],
  countries: [],
  rating: 0,
  votesCount: 0,
  sortProperty: '',
  producer: '',
  actor: ''
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres(state, action) {
      state.genres = action.payload.slice(0)
    },

    setCountries(state, action) {
      state.countries = action.payload.slice(0)
    },

    setRating(state, action) {
      state.rating = action.payload
    },

    setVotesCount(state, action) {
      state.votesCount = action.payload
    },

    setSortProperty(state, action) {
      state.sortProperty = action.payload
    },

    setProducer(state, action) {
      state.producer = action.payload
    },

    setActor(state, action) {
      state.actor = action.payload
    }
  }
})

export const { setGenres, setCountries, setRating, setVotesCount, setSortProperty, setProducer, setActor } = filtersSlice.actions;

export const selectGenres = (state: RootState) => state.filters.genres
export const selectCountries = (state: RootState) => state.filters.countries
export const selectRating = (state: RootState) => state.filters.rating
export const selectVotesCount = (state: RootState) => state.filters.votesCount
export const selectSortProperty = (state: RootState) => state.filters.sortProperty
export const selectProducer = (state: RootState) => state.filters.producer
export const selectActor = (state: RootState) => state.filters.actor


export const filtersReducer =  filtersSlice.reducer;
