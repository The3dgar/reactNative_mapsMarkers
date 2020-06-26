import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default () => <MapView style={styles.map}></MapView>;

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 100,
    width: Dimensions.get("window").width,
  },
});
