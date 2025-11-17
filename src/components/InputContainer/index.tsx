import React from "react";
import { View, TextInput, Image, Text } from "react-native";
import { styles } from "./styles";
import search from "../../assets/search.png";
import calendar from "../../assets/calendar.png";

const inputContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputSubContainer}>
        <Image source={search} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Para onde?"
          placeholderTextColor="#AAAAAA"
        />
        <View style={styles.inputSubContainerAside}>
          <Image source={calendar} style={styles.image} />
          <Text style={styles.inputCalendarText}>Mais tarde</Text>
        </View>
      </View>
    </View>
  );
};

export default inputContainer;
