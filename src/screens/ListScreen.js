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
        horizontal
        data={friends}
        keyExtractor={friend => friend.name}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
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
