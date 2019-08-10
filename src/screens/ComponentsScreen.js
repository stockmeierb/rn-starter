import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentScreen;
