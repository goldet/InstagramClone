import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container} accessibilityRole="header">
      <TouchableOpacity accessibilityLabel="Instagram logo">
        <Image
          style={styles.logo}
          source={require("../../assets/igtitlelogo.png")}
          accessibilityLabel="Instagram logo"
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.push("NewPostScreen")}
          accessibilityLabel="New post"
          accessibilityHint="Tap to Add New Post"
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-add-new-50.png")}
            accessibilityLabel="Plus Sign for Adding Posts"
            accessibilityRole="button"
          />
        </TouchableOpacity>

        <TouchableOpacity accessibilityLabel="Likes" accessibilityHint="Tap to check your likes">
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-heart-32.png")}
            accessibilityRole="button"
            accessibilityLabel="Heart Image for likes"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
});

export default Header;
