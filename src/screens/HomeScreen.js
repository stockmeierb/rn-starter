import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ naviagtion }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World.</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to list demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to image demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
