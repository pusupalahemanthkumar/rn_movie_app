import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HeaderTop from "../components/HeaderTop";
import { LinearGradient } from 'expo-linear-gradient';
import MovieNameList from "../components/MoviesList/MovieNameList";
import movies from '../assets/data/movies-data'


const ViewCount = () => {
  return (
    <View style={styles.viewCountContainer}>
      <LinearGradient 
        colors={[ '#FF9997', '#FF8986','#FF7974','#FF6962']} style={styles.gradientContainer}>
          <Text style={styles.viewCountText}>Total 10</Text>
      </LinearGradient>

      <LinearGradient 
        colors={[ '#55D0FF','#00ACDF','#0080BF']} style={styles.gradientContainer}>
        <Text style={styles.viewCountText}>Pending 20</Text>
        </LinearGradient>
    </View>  
  );
}

const RenderNavbar = () => {
  return (
    <View style={styles.navbarContainer}> 
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navbarText}>WatchList</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navbarText}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const WatchListScreen = () => {

  return (
    <>
      <HeaderTop moviesScreen={true} />
      <View style={styles.container}>
          <ViewCount/> 
          <RenderNavbar/>
          <View style={styles.moviesContainer}>
            <MovieNameList />
          </View>
      <StatusBar />

          <StatusBar />
      </View>

      
    </>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
  container:{
    margin:20,
  },
 
  viewCountContainer:{
    height:200,
    flexDirection:"row",
    justifyContent: "space-between",
    marginBottom:20,
  },
  gradientContainer:{
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    flex:0.49,
  },
  viewCountText:{
    color:"#FFFFFF",
    fontWeight:"bold",
    fontSize:24
  },
  navbarContainer:{
    height:40,
    flexDirection:"row",
    justifyContent: "space-between",
    marginBottom:10,

  },
  navbar:{
    alignItems:"center",
    justifyContent:"center",
    flex:0.5,
    borderWidth:2,
  },
  navbarText:{
    fontSize:18,
    fontWeight:"bold",
  },
  moviesContainer:{
    borderWidth:2,
    height:370,
  }

});
