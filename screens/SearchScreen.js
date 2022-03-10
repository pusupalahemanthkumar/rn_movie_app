import { StyleSheet, Text, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import HeaderTop from "../components/HeaderTop";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";

const SearchScreen = () => {
  const moviesList = useSelector((state) => state.movies.moviesList);
  const [searchkey, setSearchKey] = useState("");
  const [movies, setMovies] = useState(moviesList);

  useEffect(() => {
    setMovies(moviesList);
  }, []);

  const searchkeyChangeHandler = (value) => {
    setSearchKey(value);
    const pattern = new RegExp(value.toLowerCase());
    const d = [...moviesList];
    const filteredMoviesList = d.filter((m) => {
      return pattern.test(m.title.toLowerCase());
    });
    console.log(filteredMoviesList.length);
    setMovies(filteredMoviesList);
  };

  return (
    <>
      <HeaderTop />
      <SearchComponent
        searchkeyChangeHandler={searchkeyChangeHandler}
        searchkey={searchkey}
      />
      <MoviesList movies={movies} viewMoreScreen="SearchDetailView" />
      <StatusBar />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
