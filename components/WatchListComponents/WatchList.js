import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const WatchList = ({ data }) => {
  const rendercarauselItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.title}</Text>
        <Feather  name="check-circle" size={18} color="green"></Feather>
      </View>
    );
  };
  return (
    <FlatList
      contentContainerStyle={{
        marginTop:15,
        paddingHorizontal: 20,
      }}
      data={data}
      renderItem={rendercarauselItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default WatchList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
