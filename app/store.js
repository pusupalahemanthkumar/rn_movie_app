import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducersAndActions/moviesReducer";
import userReducer from "./reducersAndActions/userReducer";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer
  },
});
