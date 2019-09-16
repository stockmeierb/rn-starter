import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //action == {color, ammount}

  switch (action.color) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };

    case "green":
      return { ...state, green: state.green + action.amount };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, blue, green } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ color: "red", amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ color: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ color: "blue", amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ color: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ color: "green", amount: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ color: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
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
