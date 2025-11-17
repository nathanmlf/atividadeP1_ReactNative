import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import clock from "../../assets/clock.png";

const Location = () => {
  return (
    <View style={styles.locationMainContainer}>
      <View style={styles.locationSubContainer}>
        <Image source={clock} style={styles.image} />
      </View>
      <View style={styles.locationSubContainerAside}>
        <Text style={styles.locationMainText}>
          Rua Doutor Hans Chucrute, 666 - Muquifo
        </Text>
        <Text style={styles.locationSubText}>Risópolis - RJ, 22333-456</Text>
      </View>
    </View>
  );
};

export default Location;
