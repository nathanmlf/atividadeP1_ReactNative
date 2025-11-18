import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerMainContainer: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    marginTop: 10,
  },
  headerSubContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#292929",
    borderRadius: 40,
  },
  headerSubContainerUnactive: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
    backgroundColor: "#161616",
    borderRadius: 40,
  },
  headerText: {
    color: "#DEDEDE",
    fontWeight: "600",
    fontSize: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
});
