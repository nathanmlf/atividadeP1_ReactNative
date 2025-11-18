import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  suggestionsContainer: {
    marginTop: 20,
    padding: 4,
  },
  suggestionsHeadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  suggestionsHeadText: {
    color: "#e1e1e1",
    fontSize: 20,
    fontWeight: 600,
  },
  suggestionsHeadTextAside: {
    color: "#e1e1e1",
    fontSize: 14,
  },
  suggestionsMainContainer: {
    marginTop: 20,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  suggestionsCardContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#292929",
    borderRadius: 10,
    gap: 10,
    width: 75,
    height: 80,
  },
  suggestionsCardText: {
    color: "#e1e1e1",
    fontSize: 14,
  },
  image: {
    width: 40,
    height: 40,
  },
});
