import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MovieCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("TrendingDetailView", {
          data: item,
        });
      }}
    >
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
            <Ionicons name="time-outline" size={18} color="grey" />
            <Text style={styles.smtext}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

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
    fontSize: 14,
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
