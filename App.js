import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Map, CustomModal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [pointName, setPointName] = useState("");
  const [tempPoint, setTempPoint] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);
  const [visibilityFilter, setVisibilityFilter] = useState("new_point");

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setPointName(text);
  };

  const handleCancelPoint = () => {
    setPointName("");
    setTempPoint({});
    setVisibility(false);
  };

  const handleSubmit = () => {
    const newPoint = points.concat({ name: pointName, coordinate: tempPoint });
    setPoints(newPoint);
    setVisibility(false);
    setPointName("");
  };
  
  const handleList = () => {
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  const togglePointsFilter = () => {
    setPointsFilter(!pointsFilter);
  };
  
  const modalNewPoint = (
    <View style={styles.form}>
      <Input
        title="New Point"
        placeholder="Name"
        onChangeText={handleChangeText}
      ></Input>
      <View style={styles.formBottom}>
        <Button title="Save" onPress={handleSubmit}></Button>
        <Button
          title="Cancel"
          onPress={handleCancelPoint}
          color={"red"}
        ></Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        showPoints={pointsFilter}
      ></Map>
      <Panel
        onPressLeft={handleList}
        textLeft="List"
        onPressRight={togglePointsFilter}
        textRight="Show all / Hide"
      ></Panel>
      <CustomModal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          modalNewPoint
        ) : (
          <List points={points} closeModal={() => setVisibility(false)}></List>
        )}
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  formBottom: {
    justifyContent: "flex-end",
    height: "80%",
  },
  form: {
    padding: 20,
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
