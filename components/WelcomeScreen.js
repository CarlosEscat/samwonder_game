import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcome}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/SamWonder_simbolo.png")}
        />
        <Image
          style={styles.samwonder}
          source={require("../assets/Sam-Wonder_wordlogo-white.png")}
        />
        {/* <Text style={styles.welcome_text}>Memory Game</Text> */}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.start_button}
          onPress={() => navigation.navigate("Game")}
        >
          <Text style={styles.start_text}>Start</Text>
        </TouchableOpacity>
        {/* <Image
          style={styles.all}
          source={require("../assets/animales/SW_all_blue_smiling2020.png")}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#2EA3CC",
    alignItems: "center",
    //justifyContent: "center",
  },

  top: { flex: 0.6 },
  bottom: {
    flex: 0.4,
    alignItems: "center",
  },

  welcome_text: {
    fontWeight: "bold",
    // fontFamily:
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },

  logo: {
    marginTop: 60,
    width: 280,
    height: 220,
    resizeMode: "contain",
  },

  samwonder: {
    width: 280,
    height: 80,
    paddingTop: 100,
    resizeMode: "contain",
  },

  start_button: {
    elevation: 8,
    backgroundColor: "#F7931E",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 12,
    width: 120,
  },

  start_text: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },

  all: {
    width: 310,
    height: 80,
    marginTop: 10,
    resizeMode: "contain",
  },
});
