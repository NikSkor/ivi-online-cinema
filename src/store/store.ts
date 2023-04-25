import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { filtersReducer } from './slices/filtersSlice';
import adminReducer from './slices/adminSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  admin: adminReducer
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
};


export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;