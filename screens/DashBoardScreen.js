import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTop from "../components/HeaderTop";
import { useSelector, useDispatch } from "react-redux";
import WatchListSummary from "../components/WatchListComponents/WatchListSummary";
import WatchList from "../components/WatchListComponents/WatchList";
import { toogleWatchListStatusAsync } from "../app/reducersAndActions/moviesReducer";

const DashBoardScreen = () => {
  const allWatchList = useSelector((state) => state.movies.watchList);
  const watchedList = allWatchList.filter((item) => item.status === "Watched");
  const PendingList = allWatchList.filter((item) => item.status === "Pending");

  const [list, setList] = useState(allWatchList);

  const [activeLink, setActiveLink] = useState("All");
  const navClickHandler = (value) => {
    setActiveLink(value);
    if (value === "All") {
      setList(allWatchList);
    } else if (value == "Pending") {
      setList(PendingList);
    } else {
      setList(watchedList);
    }
  };
  const dispatch = useDispatch();
  const toogleStatusHandler = (id, status) => {
    console.log(id, status);
    if (status === "Pending") {
      dispatch(toogleWatchListStatusAsync(id, "Watched"));
    } else {
      dispatch(toogleWatchListStatusAsync(id, "Pending"));
    }
  };
  return (
    <>
      <HeaderTop moviesScreen={true} />
      <ScrollView>
        <WatchListSummary total={22} pending={10} watchList={12} />
        <View style={styles.internalNavContainer}>
          <TouchableOpacity
            style={[styles.navBtn, activeLink === "All" ? styles.active : null]}
            onPress={() => {
              navClickHandler("All");
            }}
          >
            <Text
              style={[
                styles.text,
                activeLink === "All" ? styles.activeText : null,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navBtn,
              activeLink === "Watched" ? styles.active : null,
            ]}
            onPress={() => {
              navClickHandler("Watched");
            }}
          >
            <Text
              style={[
                styles.text,
                activeLink === "Watched" ? styles.activeText : null,
              ]}
            >
              Watched
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.navBtn,
              activeLink === "Pending" ? styles.active : null,
            ]}
            onPress={() => {
              navClickHandler("Pending");
            }}
          >
            <Text
              style={[
                styles.text,
                activeLink === "Pending" ? styles.activeText : null,
              ]}
            >
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <WatchList
          data={list}
          toogleStatusHandler={toogleStatusHandler}
        />
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
    backgroundColor: "grey",
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
