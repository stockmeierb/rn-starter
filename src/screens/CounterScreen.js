import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CHANGE = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + CHANGE };
    case "sub":
      return { ...state, counter: state.counter - CHANGE };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button
        Text="Increase"
        onPress={() => {
          dispatch({ type: "add", payload: CHANGE });
        }}
      />
      <Button
        Text="Decrease"
        onPress={() => {
          dispatch({ type: "sub", payload: CHANGE });
        }}
      />
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
