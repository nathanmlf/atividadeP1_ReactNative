import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const HomeScreen = ({ children }) => {
  return <View style={styles.homeContainer}>{children}</View>;
};

export default HomeScreen;
