import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreeen from "../screens/SavedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import WatchListScreen from "../screens/WatchListScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Trending"
      screenOptions={{
        tabBarActiveTintColor: "#ADD8E6",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Trending" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="WatchList" component={WatchListScreen} />
    </Drawer.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ADD8E6",
          tabBarInactiveTintColor: "grey",

          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={DrawerNav}
          options={{
            tabBarIcon: () => <Feather name="home" size={24} color="#ADD8E6" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: () => <Feather name="search" size={24} color="#ADD8E6" />,
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreeen}
          options={{
            tabBarIcon: () => (
              <Feather name="bookmark" size={24} color="#ADD8E6" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
