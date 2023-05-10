import * as React from "react";
import { PostProvider } from "./context/PostContext";
import Homescreen from "./screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./components/home/BottomTab";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PostProvider>
      <NavigationContainer>
          <Homescreen />
      </NavigationContainer>
    </PostProvider>
  );
}
