import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  //array destructuring

  //useState(x) - where x is an initial value. returns a variable and a function which can be used to modify the variable, all in an array

  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button
        Text="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        Text="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
