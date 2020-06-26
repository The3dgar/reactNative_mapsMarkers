import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default () => (
  <View style={styles.panel}>
    <Button title="List"></Button>
    <Button title="Show all"></Button>
  </View>
);

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
