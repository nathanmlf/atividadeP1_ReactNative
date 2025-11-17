import React from "react";
import { Image, View } from "react-native";
import logo from "../../assets/uberLogo.png";
import { styles } from "./styles";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Logo;
