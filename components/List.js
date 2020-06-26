import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";

export default ({ points, closeModal }) => (
  <>
    <View style={styles.list}>
      <FlatList
        data={points.map((p) => p.name)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item) => item}
      ></FlatList>
    </View>
    <View style={styles.button}>
      <Button onPress={closeModal} title="Close"></Button>
    </View>
  </>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-end",
    padding: 15
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    justifyContent: "center",
  },
  list: {
    height: 300,
  }

});
