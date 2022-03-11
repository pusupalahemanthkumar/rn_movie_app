import { View, Text, FlatList, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import moviesData from '../../assets/data/movies-data';
// import { ScrollView } from 'react-native-gesture-handler';

import { Feather } from "@expo/vector-icons";

const renderMovieNames = ({item}) => {
    return (
        <View style={styles.movieContainer}>
            <Text style={styles.movieText}>{item.title}</Text>
            <Feather  name="check-circle" size={18} color="green"></Feather>
        </View>
    );
}
const MovieNameList = () => {
    return (
      <ScrollView>
      <FlatList
          data={moviesData}
          renderItem={renderMovieNames}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
      />
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
      borderBottomColor: "#ddd",
      borderBottomWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    movieText:{
        fontSize:18,
    },

});
export default MovieNameList