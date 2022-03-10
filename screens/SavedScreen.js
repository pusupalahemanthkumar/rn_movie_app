import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchComponent from "../components/SearchComponent";
import HeaderTop from "../components/HeaderTop";
import MoviesList from "../components/MoviesList/MoviesList";

const SavedScreen = () => {
  const savedList = useSelector((state) => state.movies.savedMoviesList);

  const [searchkey, setSearchKey] = useState("");
  const [movies, setMovies] = useState(savedList);

  useEffect(() => {
    setMovies(savedList);
  }, [savedList]);

  const searchkeyChangeHandler = (value) => {
    setSearchKey(value);
    const pattern = new RegExp(value.toLowerCase());
    const d = [...savedList];
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
      <MoviesList movies={movies}  viewMoreScreen="SavedDetailView"/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default SavedScreen;
