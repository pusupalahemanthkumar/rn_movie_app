import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../assets/data/movies-data";

const initialState = {
  moviesList: data,
  filteredLanguage: "",
  savedMoviesList: [],
};

export const getMoviesListAsync = () => {
  return async (dispatch, getState) => {
    const response = data;
    console.log("movies Data");
    dispatch(getMoviesList(response));
  };
};
export const toogleFavoriteAsync = (id) => {
  return async (dispatch, getState) => {
    const response = data;
    dispatch(toogleFavorite(response));
  };
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },
    toogleFavorite: (state, action) => {
      const existingIndex = state.savedMoviesList.findIndex(
        (m) => m.id === action.payload
      );
      if (existingIndex >= 0) {
        const updatedSavedMovies = state.savedMoviesList.filter(
          (m) => m.id !== action.payload
        );
        state.savedMoviesList = updatedSavedMovies;
      } else {
        const movie = state.moviesList.find((m) => {
          return m.id === action.payload;
        });
        state.savedMoviesList = state.savedMoviesList.concat(movie);
      }
    },
  },
});

export const { getMoviesList, toogleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
