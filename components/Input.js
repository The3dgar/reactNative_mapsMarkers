import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet} from "react-native";

export default ({ title, ...rest }) => {
  // this is for the error:
  // *Spread children are not supported in React*
  
  const componentInside = <TextInput {...rest}></TextInput>
  return (  <View style={styles.wrapper}>
    <Text>{title}</Text>
    {componentInside}
  </View>)
}

const styles = StyleSheet.create({
  wrapper:{
    height: 40
  }
})
