import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DescriptionContainer = ({ description }) => {
  return (
    <View style={styles.descriptonContainer}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default DescriptionContainer;

const styles = StyleSheet.create({
  descriptonContainer: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  descriptionText: {
    marginTop: 5,
    color: "grey",
    textAlign: "justify",
  },
});
