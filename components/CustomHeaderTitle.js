import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomHeaderTitle = (props) => {
  return (
    <View style={{...styles.container,...props.style }}>
      <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={()=>{}}>
          <Text style={styles.smtext}>{props.moreText}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default CustomHeaderTitle;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        height:60,
        paddingHorizontal:20,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
    },
    btnContainer:{
        paddingHorizontal:15,
        paddingVertical:5,
        // backgroundColor:'#DCDCDC',
        borderRadius:10,
        borderColor:'grey',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smtext:{
        color:'grey',
        fontSize:11
    }
});
