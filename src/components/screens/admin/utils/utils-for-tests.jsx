import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import adminReducer from '../../../../store/slices/adminSlice';


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { admin: adminReducer},
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}