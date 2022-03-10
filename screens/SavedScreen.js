import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const SavedScreen = () => {
  const navigation = useNavigation();

  let savedList = useSelector((state) => state.movies.savedMoviesList);
  console.log("test" + savedList);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SavedScreen</Text>
      {savedList.map((s) => {
        return <Text key={s.id}>{s.title}</Text>;
      })}
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
