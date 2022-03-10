import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducersAndActions/moviesReducer";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
