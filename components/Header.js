import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.samwonder}
        source={require("../assets/Sam-Wonder_wordlogo-white.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    // alignSelf: "stretch",
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: "#2EA3CC",
  },

  samwonder: {
    width: 200,
    height: 80,
    resizeMode: "contain",
  },
});
