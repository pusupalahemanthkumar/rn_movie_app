import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  toogleFavoriteAsync,
  addToWatchListAsync,
} from "../app/reducersAndActions/moviesReducer";
import { useRoute } from "@react-navigation/native";
import Details from "../components/DetailComponents/Details";

const DetailedViewScreen = () => {
  const route = useRoute();
  const { data } = route.params;
  const dispatch = useDispatch();

  const toogleFavoriteHandler = useCallback(
    (id) => {
      dispatch(toogleFavoriteAsync(id));
    },
    [dispatch, data]
  );
  const addToWatchListHandler = (id, title) => {
    dispatch(addToWatchListAsync(id, title));
  };
  return (
    <>
      <Details data={data} toogleFavoriteHandler={toogleFavoriteHandler}  addToWatchListHandler={ addToWatchListHandler} />
      <StatusBar />
    </>
  );
};

export default DetailedViewScreen;

const styles = StyleSheet.create({});
