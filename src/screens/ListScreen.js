import React from "React";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" },
    { name: "friend0" }
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={friend => friend.name}
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
