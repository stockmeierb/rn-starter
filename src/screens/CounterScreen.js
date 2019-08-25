import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //fix this later
  let counter = 0;

  return (
    <View>
      <Text>Count: {counter}</Text>
      <Button
        Text="Increase"
        onPress={() => {
          counter++;
        }}
      />
      <Button
        Text="Decrease"
        onPress={() => {
          counter--;
        }}
      />
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
