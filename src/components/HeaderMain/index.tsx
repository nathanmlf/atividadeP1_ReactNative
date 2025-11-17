import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import fusca from "../../assets/fusca.png";
import cardbox from "../../assets/cardbox.png";

const HeaderMain = () => {
  return (
    <View style={styles.headerMainContainer}>
      <View style={styles.headerSubContainer}>
        <Image source={fusca} style={styles.image} />
        <Text style={styles.headerText}>Uber</Text>
      </View>
      <View style={styles.headerSubContainerUnactive}>
        <Image source={cardbox} style={styles.image} />
        <Text style={styles.headerText}>Envios</Text>
      </View>
    </View>
  );
};

export default HeaderMain;
