import { StyleSheet, Text, View , ImageBackground, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const TopImageContainer = ({ goBackHandler, imageUrl }) => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground style={styles.image} source={{ uri: imageUrl }} resizeMode="stretch">
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={goBackHandler}>
            <Ionicons name="arrow-back" size={35} color="#f4f4f4" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TopImageContainer;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    position: "relative",
    top: -30,
  },
  image: {
    flex: 1,
    marginTop: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    resizeMode: "stretch",
  },
  backIconContainer: {
    marginTop: 60,
    paddingHorizontal: 35,
  },
});
