import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  filmId: number,
}

const initialState: UserState = {
  filmId: 0,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addId(state, action: PayloadAction<number>) {
      state.filmId = 0;
      state.filmId = action.payload;
    }
  }
});

export const { addId } = adminSlice.actions;


export default adminSlice.reducer;