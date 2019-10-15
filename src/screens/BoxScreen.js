import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child No 1</Text>
      <Text style={styles.textStyle}>Child No 2</Text>
      <Text style={styles.textStyle}>Child No 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: { borderWidth: 3, borderColor: "black", alignItems: "flex-end" },
  textStyle: { borderWidth: 3, borderColor: "red" }
});

export default BoxScreen;
