import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import HeaderMain from "../HeaderMain";
import InputContainer from "../InputContainer";
import Location from "../Location";
import Suggestions from "../Suggestions";
import Banner from "../Banner";
import Footer from "../Footer";

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <HeaderMain />
      <InputContainer />
      <Location />
      <Suggestions />
      <Banner />
      <Footer />
    </View>
  );
};

export default MainScreen;
