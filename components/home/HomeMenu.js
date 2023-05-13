import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { BottomTabIcons } from "../../assets/BottomTabIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeMenu = () => {
  return (
    <Tab.Navigator
      accessibilityRole="tablist"
      screenOptions={{
        tabBarActiveTintColor: "rgb(255,255,255)",
        tabBarInactiveTintColor: "rgb(133,133,133)",
        tabBarStyle: {
          backgroundColor: "black",
          height: 70,
        },
        tabBarItemStyle: {
          height: 70,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      {BottomTabIcons.map((tab, index) => (
        <Tab.Screen
          accessibilityHint={tab.accessibilityHint}
          key={index}
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
                  accessibilityLabel={tab.accessibilityLabel}
                  key={index}
                  source={tab.imageUrl}
                  style={[
                    { tintColor: color, width: size, height: size },
                    tab.name === "Profile" && { height: 35 },
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
    bottom: 34,
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

export default HomeMenu;
