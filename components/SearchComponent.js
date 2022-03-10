import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { FlatList } from 'react-native-gesture-handler';

const SearchComponent = () => {
    
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container} >
        <View style={styles.searchBorder}>
            <Feather name="search" color="grey" size={24}/>
            <TextInput label="title" value={text} style={styles.searchText} onChangeText={text => setText(text)}/>

        </View>
    </View>
  )
}

export default SearchComponent

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:15,
        marginRight:15,
        marginBottom:10,
    },
    searchBorder:{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft:6,
        paddingRight:6,
        height:40,
        alignContent:"center",
        alignItems:"center",

        borderWidth:2,
        borderColor:"grey",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderTopRightRadius:20,

    },
    searchText:{
        marginLeft:8,
        fontSize:16,
        width:"90%",
    }

})