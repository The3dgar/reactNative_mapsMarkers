import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, points, showPoints }) => (
  <MapView onLongPress={onLongPress} style={styles.map}>
    {showPoints &&
      points.map((p) => (
        <Marker coordinate={p.coordinate} key={p.name}></Marker>
      ))}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 100,
    width: Dimensions.get("window").width,
  },
});
