import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  inputSubContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#161616",
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#C5C5C5",
  },
  inputSubContainerAside: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#292929",
    borderRadius: 40,
    marginLeft: 20,
  },
  image: {
    width: 20,
    height: 20,
  },
  input: {
    fontSize: 25,
    fontWeight: 600,
  },
  inputCalendarText: {
    fontSize: 15,
    color: "#e1e1e1",
  },
});
