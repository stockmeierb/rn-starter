import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ imageScore, imageSource, title }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score: {imageScore}</Text>
    </View>
  );
};

const styles = new StyleSheet.create({});

export default ImageDetail;
