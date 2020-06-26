import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Map, CustomModal, Panel } from "./components";
export default function App() {
  return (
    <View style={styles.container}>
      <Map></Map>
      <CustomModal></CustomModal>
      <Panel></Panel>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
