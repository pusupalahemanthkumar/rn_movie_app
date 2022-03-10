import { StyleSheet,Text, View,ScrollView,SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import MoviesCard from "../components/MoviesList/MovieCard";
import SearchComponent from "../components/SearchComponent";

const SavedScreen = () => {
  const navigation = useNavigation();

  const savedList = useSelector((state) => state.movies.savedMovies);
  useEffect(() => {
    console.log(savedList);
  }, []);

  return (
    <View>
      <SearchComponent/>
      <ScrollView>
        <SafeAreaView>
          {savedList.map((s) => {
          return (
          <MoviesCard item={s}/>
          );
          })}
        </SafeAreaView>
        </ScrollView>
        </View>
  );
};

const styles= StyleSheet.create({
  container:{
    marginTop:30,
  }
});

export default SavedScreen;


