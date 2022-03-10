import { StyleSheet, FlatList } from "react-native";
import React from "react";
import CastCard from "./CastCard";

const rendercarauselItem = ({ item }) => {
  return <CastCard item={item} />;
};

const CastCardList = ({ cast }) => {
  return (
    <FlatList
      data={cast}
      renderItem={rendercarauselItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CastCardList;

const styles = StyleSheet.create({});
