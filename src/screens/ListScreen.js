import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend0", age: "0" },
    { name: "friend10", age: "10" },
    { name: "friend2", age: "20" },
    { name: "friend3", age: "30" },
    { name: "friend4", age: "40" },
    { name: "friend5", age: "50" },
    { name: "friend6", age: "60" },
    { name: "friend7", age: "70" },
    { name: "friend8", age: "80" },
    { name: "friend9", age: "90" }
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.textStyle}>
                {item.name} - Age {item.age}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
