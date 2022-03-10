import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigation/MainNavigator";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import  {store} from "./app/store";

// import moviesReducer from "./store/reducers/movies";

// const rootReducer = combineReducers({
//   movies: moviesReducer,
// });
// const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
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
