import { StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";



const MoviesList = ({ movies , viewMoreScreen}) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(movies);
  }, [movies, data]);

  const rendercarauselItem = ({ item }) => {
    return <MovieCard item={item}  viewMoreScreen={viewMoreScreen} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={rendercarauselItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
