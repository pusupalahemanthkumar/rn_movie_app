import { StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
// import movies from "../../assets/data/movies-data";

const rendercarauselItem = ({ item }) => {
  return <MovieCard item={item} />;
};

const TrendingMoviesCarousel = ({moviesList}) => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    setData(moviesList);

  },[])

  return (
    <FlatList
      data={data}
      renderItem={rendercarauselItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TrendingMoviesCarousel;

const styles = StyleSheet.create({});
