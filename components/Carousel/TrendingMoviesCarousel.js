import { StyleSheet,FlatList } from "react-native";
import React from "react";

import MovieCard from "./MovieCard";

const data = [
  {
    id: "1",
    imageUrl:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sffh_london-high-res.jpg",
    title: "Spider Man Far from Home",
    rating: "8",
  },
  {
    id: "2",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11fae382-e99a-475a-9e3c-314aea101da4/despdmj-8538c0d9-3720-4bbc-8b32-82415d74bf7f.jpg/v1/fill/w_1280,h_2014,q_75,strp/the_eternals_poster__fanart__alternate_version_by_shathit_despdmj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjAxNCIsInBhdGgiOiJcL2ZcLzExZmFlMzgyLWU5OWEtNDc1YS05ZTNjLTMxNGFlYTEwMWRhNFwvZGVzcGRtai04NTM4YzBkOS0zNzIwLTRiYmMtOGIzMi04MjQxNWQ3NGJmN2YuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hHvdPL9-sepFqMCKIRk3wDlhHRmfKe2blI2JLpkPDZs",
    title: "Eternals",
    rating: "9.5",
  },
  {
    id: "3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    title: "Iron Man",
    rating: "9.5",
  },
  {
    id: "4",
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_captainamericathewintersoldier_20531_5668124f.jpeg",
    title: "Iron Man",
    rating: "9.5",
  },
  {
    id: "5",
    imageUrl:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sffh_london-high-res.jpg",
    title: "Spider Man Far from Home",
    rating: "8",
  },
  {
    id: "6",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    title: "Iron Man",
    rating: "9.5",
  },
  {
    id: "7",
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_captainamericathewintersoldier_20531_5668124f.jpeg",
    title: "Iron Man",
    rating: "9.5",
  },
];

const rendercarauselItem = ({ item }) => {
  return <MovieCard item={item} />;
};

const TrendingMoviesCarousel = () => {
  return (
    <FlatList
      data={data}
      renderItem={rendercarauselItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TrendingMoviesCarousel;

const styles = StyleSheet.create({});
