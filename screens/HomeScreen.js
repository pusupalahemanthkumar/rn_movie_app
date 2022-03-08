import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSelector } from "react-redux";

import HeaderTop from "../components/HeaderTop";
import CustomHeaderTitle from "../components/CustomHeaderTitle";
import TrendingMoviesCarousel from "../components/Carousel/TrendingMoviesCarousel";
import MoviesList from "../components/MoviesList/MoviesList";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

  const moviesList= useSelector(state=> state.movies.movies);
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView>
        <HeaderTop />
        <CustomHeaderTitle title="Now Showing" moreText="See More >" />
        <TrendingMoviesCarousel moviesList={moviesList} />
        <CustomHeaderTitle title="Popular" moreText="See More >" />
        <MoviesList  moviesList={moviesList}  />
        <StatusBar />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
