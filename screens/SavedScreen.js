import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const SavedScreen = () => {
  const navigation = useNavigation();
  return (
    <View  style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>SavedScreen</Text>
      {/* <Button
        title="Detailed View"
        onPress={() => navigation.navigate("SavedDetailView")}
      /> */}
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({})