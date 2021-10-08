import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, useWindowDimensions, TouchableOpacity } from 'react-native';
import textStyle from './assets/styles/Text.Component.Styles';
import styled from "styled-components/native";
import { Picker } from '@react-native-picker/picker';

function Register() {
    const window = useWindowDimensions();
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={[estilo.container, { height: window.height }]}>
            <View style={estilo.containerView}>
                <Text style={[estilo.labelText, textStyle.colorPrimary, { marginTop: 10 }]}>Nombre de platillo/Bebida</Text>
                <ItemShadow>
                    <TextInput style={[estilo.textInput, { outlineStyle: 'none' }]} />
                </ItemShadow>

                <Text style={[estilo.labelText, textStyle.colorPrimary, { marginTop: 10 }]}>Descripción</Text>
                <ItemShadow>
                    <TextInput style={[estilo.textInput, { outlineStyle: 'none', height: 50 }]} multiline={true} numberOfLines={4} />
                </ItemShadow>

                <Text style={[estilo.labelText, textStyle.colorPrimary, { marginTop: 10 }]}>Precio</Text>
                <ItemShadow>
                    <TextInput style={[estilo.textInput, { outlineStyle: 'none' }]} />
                </ItemShadow>

                <Text style={[estilo.labelText, textStyle.colorPrimary, { marginTop: 10 }]}>Categoría</Text>
                <ItemShadow>
                    <Picker
                        selectedValue={selectedLanguage}
                        style={estilo.dropdown}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="Carnes" value="Carnes" />
                        <Picker.Item label="Mariscos" value="Mariscos" />
                        <Picker.Item label="Ensaladas" value="Ensaladas" />
                        <Picker.Item label="Bebidas" value="Bebidas" />
                    </Picker>
                </ItemShadow>

                <TouchableOpacity style={estilo.buttonStyle}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold', alignSelf: 'center' }} >registrar</Text>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default Register

const ItemShadow = styled.View`
  margin: 8px;
  border-radius: 10px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fff;
`;

const estilo = StyleSheet.create({
    containerView: {
        margin: 10
    },
    buttonStyle: {
        width: '50%',
        padding: 15,
        alignSelf: 'center',
        backgroundColor: "#33C17D",
        borderRadius: 50,
        marginTop: 10,
        textTransform: 'uppercase'
    },
    dropdown: {
        height: 50,
        width: '95%',
        borderColor: '#ffff',
        borderRadius: 10,
        marginStart: 10,
        marginEnd: 15
    },
    container: {
        flexDirection: 'column',
        backgroundColor: '#FAFAFA',
        width: '100%'
    },

    textInput: {
        width: '100%',
        height: 28,
        marginBottom: 10,
        paddingLeft: 25,
        padding: 10,
        borderWidth: 0,
        borderRadius: 20,
        marginTop: 10,
        color: '#38304B',
        backgroundColor: '#FFFFFF'
    },

    labelText: {
        marginStart: 8,
        fontWeight: 'bold'
    },
});
