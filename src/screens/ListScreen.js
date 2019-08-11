import React from "React";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend0" },
    { name: "friend1" },
    { name: "friend2" },
    { name: "friend3" },
    { name: "friend4" },
    { name: "friend5" },
    { name: "friend6" },
    { name: "friend7" },
    { name: "friend8" },
    { name: "friend9" }
  ];
  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
