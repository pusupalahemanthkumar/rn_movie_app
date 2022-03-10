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

const HeaderTop = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {props.moviesScreen ? (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      ) : null}

      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Movie App</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
