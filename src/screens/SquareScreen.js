import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //action == {color, ammount}

  switch (action.color) {
    case "red":
      return;
    case "blue":
      return;
    case "green":
      return;
    default:
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter onIncrease={() => {}} onDecrease={() => {}} color="Red" />
      <ColorCounter color="Blue" onIncrease={() => {}} onDecrease={() => {}} />
      <ColorCounter color="Green" onIncrease={() => {}} onDecrease={() => {}} />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
