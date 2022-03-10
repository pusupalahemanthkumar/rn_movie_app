import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import CustomHeaderTitle from "../CustomHeaderTitle";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import CastCardList from "./CastCardList";
import DescriptionContainer from "./DescriptionContainer";
import CateoryList from "./CateoryList";
import TopImageContainer from "./TopImageContainer";

const Details = ({ data, toogleFavoriteHandler }) => {
  const navigation = useNavigation();

  const savedList = useSelector((state) => state.movies.savedMoviesList);
  const [isSaved, setIsSaved] = useState(
    savedList.findIndex((m) => m.id === data.id) >= 0 ? true : false
  );
  const [color, setColor] = useState(isSaved ? "black" : "#ccc");

  const [detail] = useState({
    tableHead: ["Length", "Language", "Rating"],
    tableData: [[data.duration, data.language, data.ratingIssuer]],
  });

  const bookmarkClickHandler = async () => {
    if (isSaved) {
      setIsSaved(false);
      setColor("#ccc");
    } else {
      setIsSaved(true);
      setColor("black");
    }
    await toogleFavoriteHandler(data.id);
  };

  const goBackHandler = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TopImageContainer
          imageUrl={data.imageUrl}
          goBackHandler={goBackHandler}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <TouchableOpacity onPress={bookmarkClickHandler}>
            <Entypo name="bookmark" size={24} color={color} />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingText}>
          <Entypo name="star" size={18} color="#FFDF00" />
          <Text style={styles.smtext}> {data.rating} / 10 IMDb</Text>
        </View>
        <CateoryList category={data.category} />
        <Table style={styles.tableContainer}>
          <Row data={detail.tableHead} textStyle={{ color: "grey" }} />
          <Rows textStyle={{ fontWeight: "bold" }} data={detail.tableData} />
        </Table>
        <DescriptionContainer description={data.description} />
        <CustomHeaderTitle title="Cast" moreText="See More >" />
        <CastCardList cast={data.cast} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingText: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
  smtext: {
    color: "grey",
    fontSize: 12,
  },

  tableContainer: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Details;
