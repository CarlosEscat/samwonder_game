import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function WelcomeScreen({ navigation }) {
  // const supportedURL = "https://google.com";
  // const handlePress = useCallback(async () => {
  //   await Linking.openURL(supportedURL);
  // }
  let [fontsLoaded] = useFonts({
    KGPrimaryPenmanshipAlt: require("../assets/fonts/KGPrimaryPenmanshipAlt.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
          <Text style={styles.welcome_text}>Memory Game</Text>
        </View>
        <View style={styles.middle}>
          <TouchableOpacity
            style={styles.start_button}
            onPress={() => navigation.navigate("Game")}
          >
            <Text style={styles.start_text}>Start</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.samwonder.com");
            }}
          >
            <Text style={styles.link_text}>SamWonder.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    backgroundColor: "#2EA3CC",
    alignItems: "center",
    //justifyContent: "center",
  },

  top: { flex: 0.6 },
  middle: {
    flex: 0.3,
    alignItems: "center",
  },
  bottom: { flex: 0.1 },

  welcome_text: {
    // fontWeight: "bold",
    fontFamily: "KGPrimaryPenmanshipAlt",
    fontSize: 35,
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
    fontFamily: "KGPrimaryPenmanshipAlt",
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },

  link_text: {
    fontSize: 25,
    textAlign: "center",
    color: "#1B1464",
    fontFamily: "KGPrimaryPenmanshipAlt",
  },

  all: {
    width: 310,
    height: 80,
    marginTop: 10,
    resizeMode: "contain",
  },
});
