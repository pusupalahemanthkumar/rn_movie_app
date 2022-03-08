import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Details from "../components/DetailComponents/Details"

const DetailedViewScreen = () => {
  const route = useRoute();
  const { data} = route.params;
  return (
    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //   <Text>DetailedViewScreen</Text>
    //   <Text>{data.title}</Text>
    // </View>
    <Details  data={data} />
  )
}

export default DetailedViewScreen

const styles = StyleSheet.create({})