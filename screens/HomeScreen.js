import { StyleSheet, Text, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import CustomHeaderTitle from "../components/CustomHeaderTitle";
import TrendingMoviesCarousel from "../components/Carousel/TrendingMoviesCarousel";

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderTop />
      <CustomHeaderTitle title="Now Showing" moreText="See More >" />
      <TrendingMoviesCarousel />
      <CustomHeaderTitle title="Popular" moreText="See More >" />
      <StatusBar />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
