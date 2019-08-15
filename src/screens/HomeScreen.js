import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hello World.</Text>
      <Button
        onPress={() => props.navigation.navigate("ComponentScreen")}
        title="Go to components demo"
      />
      <Button
        onPress={() => props.navigation.navigate("ListScreen")}
        title="Go to list demo"
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
