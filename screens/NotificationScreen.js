import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";

const NotificationScreen = () => {
  return (
    <>
      <HeaderTop />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>NotificationScreen</Text>
      </View>
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
