import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import HeaderTop from "../components/HeaderTop";
import CustomHeaderTitle from "../components/CustomHeaderTitle";
import TrendingMoviesCarousel from "../components/Carousel/TrendingMoviesCarousel";
import MoviesList from "../components/MoviesList/MoviesList";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView >
      <SafeAreaView>
        <HeaderTop />
        <CustomHeaderTitle title="Now Showing" moreText="See More >" />
        <TrendingMoviesCarousel />
        <CustomHeaderTitle title="Popular" moreText="See More >" />
        <MoviesList />
        <StatusBar />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
