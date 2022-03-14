import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const WatchListSummary = ({ total, pending, watchList }) => {
  return (
    <>
      <View style={styles.summaryTop}>
        <LinearGradient
          style={styles.totalBox}
          colors={["#55D0FF", "#00ACDF", "#0080BF"]}
        >
          <Text style={styles.lText}>{total}</Text>
          <Text style={styles.smText}>Total</Text>
        </LinearGradient>
      </View>

      <View style={styles.summaryContainer}>
        <LinearGradient
          colors={["#FF9997", "#FF8986", "#FF7974", "#FF6962"]}
          style={[styles.box, styles.totalContainer]}
        >
          <Text style={styles.lText}>{watchList}</Text>
          <Text style={styles.smText}>Watched</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#6FDFE4","#50C8CC", "#35A4A7"]}
          style={[styles.box, styles.pendingContainer]}
        >
          <Text style={styles.lText}>{pending}</Text>
          <Text style={styles.smText}>Pending</Text>
        </LinearGradient>
      </View>
    </>
  );
};

export default WatchListSummary;

const styles = StyleSheet.create({
  summaryTop: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  totalBox: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 30,
    height: 90,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },
  summaryContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingVertical: 15,
    marginTop: 0,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 2 - 20,
    height: width / 2 - 25,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },
  lText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#DBE8EA",
  },
  smText: {
    color:"#DBE8EA", 
    fontSize: 15,
  },
});
