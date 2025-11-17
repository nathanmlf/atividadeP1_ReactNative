import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import hotwheels from "../../assets/hotwheels.png";
import entregador from "../../assets/entregador.png";
import moto from "../../assets/moto.png";
import calendario from "../../assets/calendario.png";

const Suggestions = () => {
  return (
    <View style={styles.suggestionsContainer}>
      <View style={styles.suggestionsHeadContainer}>
        <Text style={styles.suggestionsHeadText}>Sugestões</Text>
        <Text style={styles.suggestionsHeadTextAside}>Ver Tudo</Text>
      </View>
      <View style={styles.suggestionsMainContainer}>
        <View style={styles.suggestionsCardContainer}>
          <Image source={hotwheels} style={styles.image} />
          <Text style={styles.suggestionsCardText} numberOfLines={1}>
            Viagem
          </Text>
        </View>
        <View style={styles.suggestionsCardContainer}>
          <Image source={entregador} style={styles.image} />
          <Text style={styles.suggestionsCardText} numberOfLines={1}>
            Enviar Itens
          </Text>
        </View>
        <View style={styles.suggestionsCardContainer}>
          <Image source={moto} style={styles.image} />
          <Text style={styles.suggestionsCardText} numberOfLines={1}>
            Moto
          </Text>
        </View>
        <View style={styles.suggestionsCardContainer}>
          <Image source={calendario} style={styles.image} />
          <Text style={styles.suggestionsCardText} numberOfLines={1}>
            Reserve
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Suggestions;
