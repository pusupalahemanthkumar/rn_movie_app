import "react-native-gesture-handler";
import { StatusBar , useState} from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import Route from "./navigation/Route"
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import  {store} from "./app/store";

export default function App() {

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
