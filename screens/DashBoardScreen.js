import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import { useSelector } from "react-redux";
import WatchListSummary from "../components/WatchListComponents/WatchListSummary";
import WatchList from "../components/WatchListComponents/WatchList";

const DashBoardScreen = () => {
  const moviesList = useSelector((state) => state.movies.moviesList);
  return (
    <>
      <HeaderTop moviesScreen={true} />
      <ScrollView>
        <WatchListSummary total={20} pending={10} />
        <View style={styles.internalNavContainer}>
            <TouchableOpacity style={[styles.navBtn]} onPress={() => {}}>
              <Text style={[styles.text]}>All</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={[styles.navBtn, styles.active]} onPress={() => {}}>
              <Text style={[styles.text, styles.activeText]}>Watched</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={[styles.navBtn]} onPress={() => {}}>
              <Text style={[styles.text]}>Pending</Text>
            </TouchableOpacity>
        </View>
        <WatchList data={moviesList} />
      </ScrollView>
    </>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  internalNavContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  navBtn: {
    paddingHorizontal: 20,
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    
  },
  active: {
    backgroundColor: "grey"
    // "black"
    // "#0080BF",
  },
  activeText: {
    color: "#ffffff",
  },
  text: {
    color: "grey",
    fontWeight: "bold",
  },
});
