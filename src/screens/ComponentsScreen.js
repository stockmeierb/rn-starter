import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const Name = "Brett Stockmeier";
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyle1}>Getting Started with React Native!</Text>
      <Text style={styles.textStyle2}>My Name is {Name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  textStyle1: {
    fontSize: 45
  },
  textStyle2: {
    fontSize: 20
  }
});

export default ComponentScreen;
