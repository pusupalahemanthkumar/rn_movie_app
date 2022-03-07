import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const HeaderTop = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Movie App</Text>
      <Feather name="bell" size={24} color="black" />
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    marginTop: Platform.OS === "android" ? 35 : null,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
  },
});
