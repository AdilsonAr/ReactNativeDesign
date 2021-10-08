import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './assets/styles/Container.Styles';
import Input from './src/body/components/Input';
import Avatar from './src/body/components/Avatar';


function Login() {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <Text style={estilo.texto}>Bienvenidos!</Text>
            <View style={estilo.avatar}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={estilo.restaurantName}>Restaurante</Text>
                    <Text style={[estilo.restaurantName, { color: '#F57615' }]}>El</Text>
                    <Text style={[estilo.restaurantName, { color: '#14BE3B' }]}>Gran</Text>
                    <Text style={[estilo.restaurantName, { color: '#F33B45' }]}>Abuelo</Text>
                </View>
                <Avatar />
            </View>

            <Input />
        </View>
    )
}

export default Login

const estilo = StyleSheet.create({
    avatar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        marginTop: 5,
        marginStart: 5,
        width: 224.5,
        height: 120,
    },

    texto: {
        color: '#33C17D',
        marginStart: 10,
        marginTop: 15,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 25

    },
    restaurantName: {
        marginStart: 20,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 25
    },
    logoName: {
        color: '#33C17D',
        marginStart: 10,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 25
    }
})
