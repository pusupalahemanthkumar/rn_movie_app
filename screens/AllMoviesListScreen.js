import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const AllMoviesListScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AllMoviesListScreen</Text>
      {/* <Button
        title="Detailed View"
        onPress={() => navigation.navigate("AllMoviesDetailView")}
      /> */}
    </View>
  )
}

export default AllMoviesListScreen

const styles = StyleSheet.create({})