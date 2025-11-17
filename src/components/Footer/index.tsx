import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import home from "../../assets/home.png";
import options from "../../assets/options.png";
import activity from "../../assets/activity.png";
import account from "../../assets/account.png";

const Footer = () => {
  return (
    <View style={styles.FooterContainer}>
      <View style={styles.FooterCardContainer}>
        <Image source={home} style={styles.image} />
        <Text style={styles.FooterText}>Página inicial</Text>
      </View>
      <View style={styles.FooterCardContainer}>
        <Image source={options} style={styles.image} />
        <Text style={styles.FooterText}>Opções</Text>
      </View>
      <View style={styles.FooterCardContainer}>
        <Image source={activity} style={styles.image} />
        <Text style={styles.FooterText}>Atividade</Text>
      </View>
      <View style={styles.FooterCardContainer}>
        <Image source={account} style={styles.image} />
        <Text style={styles.FooterText}>Conta</Text>
      </View>
    </View>
  );
};

export default Footer;
