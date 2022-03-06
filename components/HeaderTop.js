import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 

const HeaderTop = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.title}>Movie App</Text>
        <Feather name="bell" size={24} color="black" />
    </SafeAreaView>
  )
}

export default HeaderTop

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        marginTop: Platform.OS==='android'? 40 : null,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:10,
  
    },
    title:{
        fontWeight:'500',
        fontSize:16,
    }
})