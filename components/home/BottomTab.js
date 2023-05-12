import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BottomTabIcons } from "../../assets/BottomTabIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "rgb(255,255,255)",
        inactiveTintColor: "rgb(133,133,133)",
        tabStyle: { backgroundColor: "black" },
        showLabel: false,
        style: { height: 70 },
      }}
      screenOptions={{ headerShown: false }}
    >
      {BottomTabIcons.map((tab, index) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                {tab.name === "Messages" && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                  </View>
                )}
                <Image
                  key={index}
                  source={tab.imageUrl}
                  style={[
                    { tintColor: color, width: size, height: size },
                    tab.name === "Profile" && { borderRadius: 100 },
                  ]}
                />
              </>
            ),
            tabBarColor: "black",
            tabBarSize: 30,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 35,
    bottom: 25,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: 500,
  },
});

export default BottomTab;
