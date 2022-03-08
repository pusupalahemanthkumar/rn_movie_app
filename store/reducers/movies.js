import data from "../../assets/data/movies-data";
import { TOGGLE_FAVORITE } from "../actions/movies";

const initialState = {
  movies: data,
  filteredMovies: data,
  savedMovies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.savedMovies.findIndex(
        (m) => m.id === action.movieId
      );
      if (existingIndex >= 0) {
        const updatedSavedMovies = state.savedMovies.filter(
          (m) => m.id !== action.movieId
        );
        return {
          ...state,
          savedMovies: updatedSavedMovies,
        };
      } else {
        const movie = state.movies.find((m) => {
          return m.id === action.movieId;
        });
        return {
          ...state,
          savedMovies: state.savedMovies.concat(movie),
        };
      }

    default:
      return state;
  }
};

export default moviesReducer;
