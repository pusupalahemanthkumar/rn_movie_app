import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>SearchScreen</Text>
      {/* <Button
        title="Detailed View"
        onPress={() => navigation.navigate("SearchDetailView")}
      /> */}
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})