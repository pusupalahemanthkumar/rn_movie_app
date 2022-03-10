import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import HeaderTop from "../components/HeaderTop";

const NotificationScreen = () => {
  return (
    <>
      <HeaderTop />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>NotificationScreen</Text>
      </View>
      <StatusBar />
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
