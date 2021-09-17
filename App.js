import React from "react";
import { StyleSheet } from "react-native";
import Bebidas from "./Bebidas";
import Carnes from "./Carnes";
import Ensaladas from "./Ensaladas";
import Mariscos from "./Mariscos";
import Item_body from "./src/body/containers/Item_body";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Item_body} />
        <Stack.Screen name="Carnes" component={Carnes} />
        <Stack.Screen name="Mariscos" component={Mariscos} />
        <Stack.Screen name="Ensaladas" component={Ensaladas} />
        <Stack.Screen name="Bebidas" component={Bebidas} />
      </Stack.Navigator>
    </NavigationContainer>
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
