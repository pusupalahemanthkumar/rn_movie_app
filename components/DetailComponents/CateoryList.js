import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CateoryList = ({ category }) => {
  return (
    <View style={styles.categoryContainer}>
      {category.map((item) => {
        return (
          <View style={styles.category} key={item}>
            <Text style={styles.categoryTitle}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CateoryList;

const styles = StyleSheet.create({
  categoryTitle: {
    color: "grey",
    fontWeight: "200",
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 3,
  },
  category: {
    backgroundColor: "#ADD8E6",
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 5,
  },
});
