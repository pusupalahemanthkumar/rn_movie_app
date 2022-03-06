import { StyleSheet, Text, View,Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const MovieCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardText}>
          <Entypo name="star" size={18} color="#FFDF00" />
          <Text style={styles.smtext}>{` ${item.rating} / 10 IMDb`}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    marginHorizontal: 10,
  },
  cardImageContainer: {
    width: 180,
    height: 250,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardContentContainer: {},
  cardTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  cardText: {
    flexDirection: "row",
    paddingTop: 2,
  },
  smtext: {
    color: "grey",
    fontSize: 12,
  },
});
