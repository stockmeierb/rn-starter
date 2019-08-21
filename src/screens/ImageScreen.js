import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen Component</Text>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={1}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={2}
      />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
