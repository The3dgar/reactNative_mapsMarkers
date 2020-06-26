import React from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";

export default ({onPressLeft, textLeft, onPressRight, textRight}) => (
  <View style={styles.panel}>
    <Button title={textLeft} onPress={onPressLeft}></Button>
    <Button title={textRight} onPress={onPressRight}></Button>
  </View>
);

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
