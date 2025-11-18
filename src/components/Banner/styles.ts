import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  BannerContainer: {
    backgroundColor: "#144CAB",
    marginTop: 20,
    height: 140,
    borderRadius: 20,
    flexDirection: "row",
    borderWidth: 2,
    overflow: "hidden",
  },
  BannerTextContainer: {
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingLeft: 20,
    gap: 20,
  },
  BannerText: {
    fontSize: 20,
    color: "#e1e1e1",
    fontWeight: 600,
    width: 160,
  },
  BannerButtonContainer: {
    width: 120,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
    borderRadius: 20,
  },
  BannerButtonText: {
    color: "#e1e1e1",
    fontSize: 14,
  },
  BannerImageContainer: {
    width: 180,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
