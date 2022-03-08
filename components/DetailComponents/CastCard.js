import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";

const CastCard = ({item}) => {
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
          <Text style={styles.smtext}>{item.name}</Text>
      </View>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 85,
    marginHorizontal: 5,
    marginLeft:10,
  },
  cardImageContainer: {
    width: 80,
    height: 100,
    
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 20,
  },
  cardContentContainer: {},
  smtext: {
    paddingTop:5,
    paddingLeft:5,
    color: "grey",
    fontSize: 12,
  },
});