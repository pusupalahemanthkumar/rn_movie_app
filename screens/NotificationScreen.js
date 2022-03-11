import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTop from "../components/HeaderTop";

const NotificationScreen = () => {
  return (
    <>
      <HeaderTop />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.noNoficationContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/img/tenor.gif")}
              resizeMode="stretch"
              style={styles.image}
            />
          </View>
          <Text style={styles.ntext}> No Notifications</Text>
        </View>
      </View>
      <StatusBar />
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  noNoficationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  ntext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
});
