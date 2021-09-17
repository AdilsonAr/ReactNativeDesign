import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Item_body from './src/body/containers/Item_body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Item_body />
      <Footer />
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
