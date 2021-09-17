import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("./assets/logo.jpg")} style={styles.logo} />
        <Text style={styles.text}>nuestra carta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom:5
  },
  logo: {
    marginTop: 5,
    width: 224.5,
    height: 120,
  },
  text: {
    textTransform: "uppercase",
    color: '#11B637',
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
  }
});
