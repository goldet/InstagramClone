import * as React from "react";
import NewPostScreen from "./screens/NewPostScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./components/home/BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";


const Stack = createStackNavigator();
const SignedInStack = () => {
    return (
<NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />

        </Stack.Navigator>
      </NavigationContainer>
)}

export default SignedInStack