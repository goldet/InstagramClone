import * as React from "react";
import NewPostScreen from "./screens/NewPostScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeMenu from "./components/home/HomeMenu";


const Stack = createStackNavigator();
const SignedInStack = () => {
    return (
<NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeMenu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeMenu" component={HomeMenu} />
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />

        </Stack.Navigator>
      </NavigationContainer>
)}

export default SignedInStack