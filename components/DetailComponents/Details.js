import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import { Feather } from "@expo/vector-icons";
import CastCard from "./CastCard";
import CustomHeaderTitle from "../CustomHeaderTitle";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const rendercarauselItem = ({ item }) => {
  return <CastCard item={item} />;
};

const Details = ({ data, toogleFavoriteHandler }) => {
  const navigation = useNavigation();
  const [detail] = React.useState({
    tableHead: ["Length", "Language", "Rating"],
    tableData: [[data.duration, data.language, data.ratingIssuer]],
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: data.imageUrl,
            }}
            resizeMode="stretch"
          >
            <View
              style={{
                marginTop: 60,
                paddingHorizontal: 35,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={35} color="#f4f4f4" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <TouchableOpacity onPress={() => toogleFavoriteHandler(data.id)}>
            <Feather name="bookmark" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.ratingText}>
          <Entypo name="star" size={18} color="#FFDF00" />
          <Text style={styles.smtext}> {data.rating} / 10 IMDb</Text>
        </View>

        <View style={styles.categoryContainer}>
          {data.category.map((item) => {
            return (
              <View style={styles.category}>
                <Text style={styles.categoryTitle}>{item}</Text>
              </View>
            );
          })}
        </View>
        <Table style={styles.tableContainer}>
          <Row
            data={detail.tableHead}
            textStyle={{ color: "grey" }}
          />
          <Rows
            textStyle={{ fontWeight: "bold" }}
            data={detail.tableData}
          />
        </Table>

        <View style={styles.descriptonContainer}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.descriptionText}>{data.description}</Text>
        </View>

        <CustomHeaderTitle title="Cast" moreText="See More >" />

        <FlatList
          data={data.cast}
          renderItem={rendercarauselItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    position: "relative",
    top: -30,
  },
  image: {
    flex: 1,
    marginTop: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
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
    fontSize: 15,
  },

  categoryTitle: {
    color: "grey",
    fontWeight: "200",
    fontSize: 14,
    paddingTop: 3,
    paddingBottom: 3,
  },
  category: {
    backgroundColor: "#ADD8E6",
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 5,
  },

  tableContainer: {
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  descriptonContainer: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  descriptionText: {
    marginTop: 5,
    color: "grey",
    textAlign: "justify",
  },
});

export default Details;
