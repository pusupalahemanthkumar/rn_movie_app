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
          <View style={[styles.navBtn]}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.text]}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.navBtn, styles.active]}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.text, styles.activeText]}>Watched</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.navBtn]}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={[styles.text]}>Pending</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 20,
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
    backgroundColor: "#0080BF",
  },
  activeText: {
    color: "#fff",
  },
  text: {
    color: "grey",
  },
});
