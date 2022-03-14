import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const WatchListItem = ({ item, toogleStatusHandler }) => {
  const [color, setColor] = useState(
    item.status === "Pending" ? "black" : "green"
  );
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <TouchableOpacity
        onPress={() => {
          toogleStatusHandler(item.id, item.status);
        }}
      >
        <Feather name="check-circle" size={22} color={color}></Feather>
      </TouchableOpacity>
    </View>
  );
};

const WatchList = ({ data, toogleStatusHandler }) => {
  useEffect(() => {}, [data]);
  const rendercarauselItem = ({ item }) => {
    return (
      <WatchListItem item={item} toogleStatusHandler={toogleStatusHandler} />
    );
  };
  return (
    <FlatList
      contentContainerStyle={{
        marginTop: 15,
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
