import React from "react";
import Item from "./Item";
import { StyleSheet, View } from "react-native";
import Header from "../../../Header";
import Footer from "../../../Footer";

function Item_body() {
  return (
    <View style={style.item}>
      <Header />
      <Item />
      <Footer />
    </View>
  );
}

export default Item_body;

const style = StyleSheet.create({
  item: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
});
