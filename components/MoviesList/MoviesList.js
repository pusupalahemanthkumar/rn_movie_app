import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    title: "Venom Let There Be Carnage",
    imageUrl:
      "https://www.awn.com/sites/default/files/styles/original/public/image/attached/1055429-newposterresized.jpg?itok=ZnKDv33F",
    duration: "1H 47M",
    rating: "8.7",
    category: ["HORROR", "MYSTERY", "THRILLER"],
  },
  {
    id: "2",
    title: "Spider Man Far from Home",
    imageUrl:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sffh_london-high-res.jpg",
    duration: "2H 30M",
    rating: "9",
    category: ["Action", "FANTASY"],
  },
  {
    id: "3",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fae382-e99a-475a-9e3c-314aea101da4/despdmj-8538c0d9-3720-4bbc-8b32-82415d74bf7f.jpg/v1/fill/w_1280,h_2014,q_75,strp/the_eternals_poster__fanart__alternate_version_by_shathit_despdmj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxNCIsInBhdGgiOiJcL2ZcLzExZmFlMzgyLWU5OWEtNDc1YS05ZTNjLTMxNGFlYTEwMWRhNFwvZGVzcGRtai04NTM4YzBkOS0zNzIwLTRiYmMtOGIzMi04MjQxNWQ3NGJmN2YuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hHvdPL9-sepFqMCKIRk3wDlhHRmfKe2blI2JLpkPDZs",
    title: "Eternals",
    duration: "3H 30M",
    category: ["HORROR", "MYSTERY", "THRILLER"],
    rating: "9.5",
  },
];

const rendercarauselItem = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.cardContentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.cardText}>
          <Entypo name="star" size={18} color="#FFDF00" />
          <Text style={styles.smtext}>{` ${item.rating} / 10 IMDb`}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.categoryContainer}>
          {item.category.map((d, idx) => {
            return (
              <View key={idx} style={styles.category}>
                <Text style={styles.categoryTitle}>{d}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.cardText}>
          <Ionicons name="time-outline" size={20} color="grey" />
          <Text style={styles.smtext}>{item.duration}</Text>
        </View>
      </View>
    </View>
  );
};

const MoviesList = () => {
  return (
    <FlatList
      data={data}
      renderItem={rendercarauselItem}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  cardContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
  },
  cardImageContainer: {
    width: 120,
    height: 150,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardContentContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  cardText: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 2,
  },
  categoryContainer: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 15,
  },
  smtext: {
    color: "grey",
    fontSize: 12,
  },
  category: {
    backgroundColor: "#ADD8E6",
    marginHorizontal: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  categoryTitle: {
    color: "grey",
    fontWeight: "200",
    fontSize: 11,
  },
});
