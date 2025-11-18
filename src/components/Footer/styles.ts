import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  FooterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  FooterCardContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  FooterText: {
    color: "#E1e1e1",
    fontSize: 14,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
