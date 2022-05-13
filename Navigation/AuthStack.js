import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';


const AuthStack=(Stack)=>{
    return (
        <Stack.Navigator  
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    );

}

export default AuthStack;