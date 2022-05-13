import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthStack from "./AuthStack";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <NavigationContainer >
      
      { userData && userData.token ? MainNavigator(Tab) : AuthStack(Stack)  }
    </NavigationContainer>
  );
};

export default Route;
