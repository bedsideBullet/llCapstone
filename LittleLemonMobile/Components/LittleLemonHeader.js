import { Image, StyleSheet, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.innerContainer}>
        <Image
          style={headerStyles.image}
          source={require("../assets/Logo.svg")}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: "#edefee", 
    padding: 20,
  },
  innerContainer: {
    flex: 1, 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#edefee", 
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  image: {
    width: 300, 
    height: 100,
    marginRight: 8,
  },
  
});