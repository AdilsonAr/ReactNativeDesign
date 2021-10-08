import React from "react";
import Item from "./Item";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Header from "../../../Header";
import Footer from "../../../Footer";

function Item_body() {
  return (
    <View style={style.item}>
      <Header />
      <Item />
      <TouchableOpacity style={style.buttonStyle}>
        <Text style={{ color: '#ffff', fontWeight: 'bold', alignSelf: 'center' }} >registrar platillo/bebida</Text>
      </TouchableOpacity>
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
    backgroundColor:'#FFFF'
  },
  buttonStyle: {
    width: '90%',
    padding: 15,
    alignSelf: 'center',
    backgroundColor: "#33C17D",
    borderRadius: 50,
    marginTop: 10,
    textTransform: 'uppercase'
  },
});
