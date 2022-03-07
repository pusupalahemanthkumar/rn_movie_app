import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreeen from "../screens/SavedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WatchListScreen from "../screens/WatchListScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
          headerShown: false,
        }}
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
};

export default MainNavigator;
