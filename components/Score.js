import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Score extends React.Component {
  render() {
    return (
      <View style={styles.score_container}>
        {/* <Text style={styles.score}>{this.props.score}</Text> */}
        <Image
          source={require("../assets/animales/SW_all_blue_smiling2020.png")}
          style={styles.img_all}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score_container: {
    flex: 1,
    alignItems: "center",
    // padding: 10,
    paddingBottom: 40,
    //backgroundColor: "red",
  },
  score: {
    fontSize: 40,
    fontWeight: "bold",
  },
  img_all: {
    width: 280,
    height: 90,
    marginBottom: 20,
  },
});
