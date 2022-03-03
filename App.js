import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
// <Feather name="home" size={24} color="black" />

// <Feather name="search" size={24} color="black" />

// <Feather name="bookmark" size={24} color="black" />

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SavedScreeen from "./screens/SavedScreeen";
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

       screenOptions={
        {
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'grey',
          headerShown:false,
        }
       }
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Feather name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <Feather name="search" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreeen}
          options={{
            tabBarIcon: () => (
              <Feather name="bookmark" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
