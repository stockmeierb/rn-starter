import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen Component</Text>
      <ImageDetail title="forest" />
      <ImageDetail title="beach" />
      <ImageDetail title="mountain" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
