import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const Header = ({navigation}) => {


  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/igtitlelogo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
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
