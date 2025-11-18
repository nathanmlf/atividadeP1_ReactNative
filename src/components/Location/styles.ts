import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  locationMainContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    borderColor: "#282828",
    borderWidth: 2,
    paddingRight: 60,
    paddingLeft: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  locationSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "#292929",
    borderRadius: 10,
  },
  locationSubContainerAside: {
    flex: 1,
    gap: 5,
  },
  locationMainText: {
    color: "#e1e1e1",
    fontSize: 16,
    fontWeight: 600,
  },
  locationSubText: {
    color: "#CCCCCC",
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
});
