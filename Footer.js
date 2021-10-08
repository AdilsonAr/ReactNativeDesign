import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.nombres}>Grupo # 7</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 8,
  },
  nombres: {
    color: '#005E71',
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom:10
  },
});
