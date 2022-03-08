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

data = [
  {
    id: "1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvS4v-9xFvuhZNZ-OLFVI8SBKYlKGCCBmJZw&usqp=CAU",
    name: "Tom Holland",
  },
  {
    id: "2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Oz2QxWdkn_1oWf4a9-ZPg1gVHbk4KocB6UYu4UIxlyrw4J9fl4CL9N4D3hQwqOgHGKY&usqp=CAU",
    name: "Zendaya",
  },
  {
    id: "3",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaanh6STVkzi_E2pV-7zQD9Nk7cJrbzwUhoA&usqp=CAU",
    name: "Benedict Cumberbatch",
  },
  {
    id: "4",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQll1xC4oyI7NckF_sUlLMSv0mtmIuyvFnYnA&usqp=CAU",
    name: "Marisa Tomei",
  },
  {
    id: "5",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5Wyap9hGDwKR5vHxwClw-RTaiu9g-G0G4w&usqp=CAU",
    name: "Jon Favreau",
  },
];
const rendercarauselItem = ({ item }) => {
  return <CastCard item={item} />;
};

const Details = () => {
  const navigation = useNavigation();
  const [detail] = React.useState({
    tableHead: ["Length", "Language", "Rating"],
    tableData: [["2hr 40 min", "English", "PG-13"]],
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sffh_london-high-res.jpg",
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
                <Ionicons name="arrow-back" size={40} color="#f4f4f4" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Spider Man : No Way Home</Text>
          <Feather name="bookmark" size={24} color="black" />
        </View>
        <View style={styles.ratingText}>
          <Entypo name="star" size={18} color="#FFDF00" />
          <Text style={styles.smtext}> 8 / 10 IMDb</Text>
        </View>

        <View style={styles.categoryContainer}>
          <View key="1" style={styles.category}>
            <Text style={styles.categoryTitle}>Action</Text>
          </View>
          <View key="2" style={styles.category}>
            <Text style={styles.categoryTitle}>Featured</Text>
          </View>
          <View key="3" style={styles.category}>
            <Text style={styles.categoryTitle}>Popular</Text>
          </View>
          <View key="4" style={styles.category}>
            <Text style={styles.categoryTitle}>Animation</Text>
          </View>
          <View key="5" style={styles.category}>
            <Text style={styles.categoryTitle}>Thriller</Text>
          </View>
        </View>

        <Table style={styles.tableContainer}>
          <Row data={detail.tableHead} textStyle={{ color: "grey" }} />
          <Rows textStyle={{ fontWeight: "bold" }} data={detail.tableData} />
        </Table>

        <View style={styles.descriptonContainer}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.descriptionText}>
            With Spider-Man's identity now revealed,our friendly neighborhood
            web-slinger is unmasked and no longer able to separate his normal
            life as Peter Parker from the high stakes of being a superhero. When
            Peter asks for help from Doctor Strange, the stakes become even more
            dangerous, forcing him to discover what it truly means to be
            Spider-Man.
          </Text>
        </View>

        <CustomHeaderTitle title="Cast" moreText="See More >" />

        <FlatList
          data={data}
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
    marginBottom: 10,
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
    paddingTop: 2,
    paddingBottom: 4,
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
  category: {
    backgroundColor: "#ADD8E6",
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 4,
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
