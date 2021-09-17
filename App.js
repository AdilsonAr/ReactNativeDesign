import React from "react";
import { StyleSheet, View } from "react-native";
import Bebidas from './Bebidas';
import Carnes from './Carnes';
import Ensaladas from './Ensaladas';
import Mariscos from './Mariscos';

export default function App() {
  return (
    <View style={styles.container}>
      <Mariscos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  footer: {
    justifyContent: "flex-end",
  },
});
