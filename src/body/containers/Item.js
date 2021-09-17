import React from "react";
import Image_c from "./../components/Image_c";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import Title_c from "./../components/Title_c";
import Icon_c from "../components/Icon_c";
import images from "../services/Images";
import { useNavigation } from "@react-navigation/native";

function Item() {
  let functions = [];
  const navigation = useNavigation();

  functions.push(() => navigation.navigate("Carnes"));
  functions.push(() => navigation.navigate("Mariscos"));
  functions.push(() => navigation.navigate("Ensaladas"));
  functions.push(() => navigation.navigate("Bebidas"));

  let renderIcon = () => {
    let icon = [];
    for (let i = 0; i < 5; i++) {
      icon.push(<Icon_c />);
    }
    return icon;
  };

  let renderCard = () => {
    let card = [];
    let i = 0;
    images.forEach((element) => {
      card.push(
        <ItemShadow>
          <View style={style.icon}>{renderIcon()}</View>
          <View style={style.item} onTouchEnd={functions[i]}>
            <Image_c url={element.imgUri} />
            <Title_c name={element.category} />
          </View>
        </ItemShadow>
      );
      i++;
    });
    return card;
  };

  return <>{renderCard()}</>;
}

export default Item;

const ItemShadow = styled.View`
  border: 1px solid #ccc;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fff;
  width: 43%;
  height: 215px;
  padding: 5px;
`;

const style = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    flexDirection: "row-reverse",
    alignItems: "flex-end",
  },
});
