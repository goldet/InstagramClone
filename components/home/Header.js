import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/igtitlelogo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-add-new-50.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-heart-32.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={require("../../assets/icons8-chat-bubble-50.png")}
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
  unreadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: 600,
  },
});

export default Header;
