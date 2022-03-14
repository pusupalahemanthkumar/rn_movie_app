import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const WatchListSummary = ({ total, pending }) => {
  return (
    <>
      <View style={styles.summaryTop}>
        <LinearGradient
          style={styles.totalBox}
          colors={["#FF9997", "#FF8986", "#FF7974", "#FF6962"]}
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
          <Text style={styles.lText}>{total}</Text>
          <Text style={styles.smText}>Watched</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#55D0FF", "#00ACDF", "#0080BF"]}
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
    marginTop: 15,
  },
  totalBox: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 30,
    height: 100,
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
    height: width / 2 - 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
  },
  lText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#ccc",
  },
  smText: {
    color: "#ccc",
    fontSize: 15,
  },
});
