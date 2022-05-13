import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailedViewScreen from "../screens/DetailedViewScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import NotificationScreen from "../screens/NotificationScreen";
import DashBoardScreen from "../screens/DashBoardScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// Trending Stack Nav
const StackNavTrending = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TrendingScreen" component={HomeScreen} />
      <Stack.Screen name="TrendingDetailView" component={DetailedViewScreen} />
    </Stack.Navigator>
  );
};

// Drawer Nav
const DrawerMoviesNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Trending" component={StackNavTrending} />
      <Drawer.Screen name="WatchList" component={DashBoardScreen} />
    </Drawer.Navigator>
  );
};

// Stack Nav

const StackNavSearch = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchDetailView" component={DetailedViewScreen} />
    </Stack.Navigator>
  );
};

const StackNavSaved = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SavedScreen" component={SavedScreen} />
      <Stack.Screen name="SavedDetailView" component={DetailedViewScreen} />
    </Stack.Navigator>
  );
};

// Tab Nav
const MainTabNav = (Tab) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ADD8E6",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Movies"
        component={DrawerMoviesNav}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="movie-roll"
              size={24}
              color="#ADD8E6"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={StackNavSearch}
        options={{
          tabBarIcon: () => <Feather name="search" size={24} color="#ADD8E6" />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={StackNavSaved}
        options={{
          tabBarIcon: () => (
            <Feather name="bookmark" size={24} color="#ADD8E6" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => <Feather name="bell" size={24} color="#ADD8E6" />,
        }}
      />
    </Tab.Navigator>
  );
};



export default MainTabNav;
