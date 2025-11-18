import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import entregador from "../../assets/entregador2.png";

const Banner = () => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.BannerContainer}>
        <View style={styles.BannerTextContainer}>
          <Text style={styles.BannerText}>Receba itens no mesmo dia</Text>
          <View style={styles.BannerButtonContainer}>
            <Text style={styles.BannerButtonText}>Envie um item</Text>
          </View>
        </View>
        <View style={styles.BannerImageContainer}>
          <Image source={entregador} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;
