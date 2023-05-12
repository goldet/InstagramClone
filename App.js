import * as React from "react";
import { PostProvider } from "./context/PostContext";
import AddPhototoScreen from "./screens/AddPhototoScreen";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./components/home/BottomTab";
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <PostProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Profile" component={AddPhototoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PostProvider>
  );
}
