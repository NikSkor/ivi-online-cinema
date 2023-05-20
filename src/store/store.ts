import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import { filtersReducer } from './slices/filtersSlice';
import adminReducer from './slices/adminSlice';
import { userReducer } from './slices/userSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  admin: adminReducer,
  user: userReducer
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
};


export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof makeStore>

export type AppDispatch = AppStore['dispatch'];

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
