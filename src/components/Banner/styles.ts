import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  BannerContainer: {
    backgroundColor: "#144CAB",
    marginTop: 20,
    height: 160,
    borderRadius: 20,
    flexDirection: "row",
  },
  BannerTextContainer: {
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingLeft: 20,
  },
  BannerText: {
    fontSize: 20,
    color: "#e1e1e1",
    fontWeight: 600,
    width: 160,
  },
  BannerButtonContainer: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
    borderRadius: 20,
  },
  BannerButtonText: {
    color: "#e1e1e1",
  },
  BannerImageContainer: {
    backgroundColor: "#144CAB",
  },
  image: {
    width: 140,
    height: 160,
  },
});
