import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { toogleFavorite } from "../app/reducersAndActions/moviesReducer";
import { useRoute } from "@react-navigation/native";
import Details from "../components/DetailComponents/Details";

const DetailedViewScreen = () => {
  const route = useRoute();
  const { data } = route.params;
  const dispatch = useDispatch();

  const toogleFavoriteHandler = useCallback(
    (id) => {
      // dispatch(toogleFavorite(data.id))
      dispatch(toogleFavorite(id));
    },
    [dispatch, data]
  );
  return <Details data={data} toogleFavoriteHandler={toogleFavoriteHandler} />;
};

export default DetailedViewScreen;

const styles = StyleSheet.create({});
