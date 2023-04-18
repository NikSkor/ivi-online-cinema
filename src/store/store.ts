import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { filtersReducer } from './slices/filtersSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      filters: filtersReducer,
    }
  })
}


export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;