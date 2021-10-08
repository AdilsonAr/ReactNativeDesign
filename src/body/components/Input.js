import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import textStyle from '../../../assets/styles/Text.Component.Styles';
import loginData from '../../../assets/Services/Text';
import styled from "styled-components/native";

const Input = () => {
    return (
        <View style={estilo.loginContainer}>
            <Text style={[estilo.loginText, textStyle.colorOther]}>Login</Text>
            <Text style={[estilo.labelText, textStyle.colorPrimary]}>{loginData.user}</Text>
            <ItemShadow>
                <TextInput style={[estilo.textInput, { outlineStyle: 'none' }]} placeholder="correo@any.com" placeholderTextColor="#38304B" />
            </ItemShadow>
            <Text style={[estilo.labelText, textStyle.colorPrimary]}>{loginData.Pass}</Text>
            <ItemShadow>
                <TextInput style={[estilo.textInput, { outlineStyle: 'none' }]} placeholder="*******" placeholderTextColor="#38304B" />
            </ItemShadow>
            <TouchableOpacity style={estilo.buttonStyle}>
                <Text style={{ color: '#ffff', fontWeight: 'bold', alignSelf: 'center' }} >LOGIN</Text>
            </TouchableOpacity>
            <Text style={[estilo.forgotText, textStyle.colorDefault]}>{loginData.ForgotPass}</Text>
        </View>
    )
}

export default Input

const ItemShadow = styled.View`
  margin: 8px;
  border-radius: 10px;
  box-shadow: 0 0 18px #ccc;
  background-color: #fff;
`;

const estilo = StyleSheet.create({
    labelText: {
        alignSelf: 'flex-start',
    },
    loginText: {
        fontSize: 30,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    loginContainer: {
        marginEnd: 20,
        marginBottom: 20,
        marginStart: 20,
        marginTop: 0
    },
    textInput: {
        width: '100%',
        height: 30,
        marginBottom: 15,
        paddingLeft: 20,
        padding: 10,
        borderWidth: 0,
        borderRadius: 20,
        marginTop: 10,

        fontWeight: 'bold',
        color: '#38304B',
        backgroundColor: '#FFFFFF'
    },
    buttonStyle: {
        width: '50%',
        padding: 15,
        alignSelf: 'center',
        backgroundColor: "#33C17D",
        borderRadius: 50,
        marginTop: 10
    },
    forgotText: {
        fontSize: 12,
        marginTop: 15,
        marginBottom: 30,
        alignSelf: 'center',
    }
})