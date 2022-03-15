import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../assets/data/movies-data";

const initialState = {
  moviesList: data,
  filteredLanguage: "",
  savedMoviesList: [],
  watchList: [],
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
    const response = id;
    dispatch(toogleFavorite(response));
  };
};

export const addToWatchListAsync = (id, title) => {
  return async (dispatch, getState) => {
    const response = {
      id: id,
      title: title,
      status: "Pending",
    };
    dispatch(addToWatchList(response));
  };
};

export const toogleWatchListStatusAsync = (id, status) => {
  return async (dispatch, getState) => {
    const response = {
      id: id,
      status: status,
    };
    console.log(response);
    dispatch(toogleWatchListStatus(response));
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
    addToWatchList: (state, action) => {
      const oldwatchList = state.watchList;
      state.watchList = [...oldwatchList, action.payload];
    },
    toogleWatchListStatus: (state, action) => {
      const i = state.watchList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.watchList[i].status=action.payload.status;
      }
  },
});

export const {
  getMoviesList,
  toogleFavorite,
  addToWatchList,
  toogleWatchListStatus,
} = moviesSlice.actions;

export const allWatchList = (state) => {
  return  state.movies.watchList;
}

export const pendingwatchList = (state) => {
  return state.movies.watchList.filter((item) => {
    return item.status === "Pending";
  });
};
export const completedList = (state) => {
  return state.movies.watchList.filter((item) => {
    return item.status === "Watched";
  });
};

export default moviesSlice.reducer;
