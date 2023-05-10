import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BottomTabIcons } from "../../assets/BottomTabIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <View>
      <Tab.Navigator>
        {BottomTabIcons.map((icon) => (
          <Tab.Screen
            key={icon.name}
            name={icon.name}
            component={icon.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={icon.imageUrl}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BottomTab;
