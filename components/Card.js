import React from "react";
import { StyleSheet, View, TouchableHighlight, Image } from "react-native";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let card_source = require("../assets/todo.png");
    let icon_name = "question-circle";

    if (this.props.is_open) {
      card_source = this.props.src;
      icon_name = this.props.name;
    }

    return (
      <View style={styles.card}>
        <TouchableHighlight
          onPress={this.props.clickCard}
          activeOpacity={0.75}
          underlayColor={"#f1f1f1"}
        >
          <Image source={card_source} style={styles.imagen} name={icon_name} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
  },
  card_text: {
    fontSize: 50,
    fontWeight: "bold",
  },
  imagen: {
    width: 50,
    height: 50,
  },
});
