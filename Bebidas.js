import React from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './src/body/categories/Bebidas/BebidasList';

function Bebidas() {
    return (
        <View>
            <Headers url={require('./assets/bebidas.png')} category={'BEBIDAS'} />
            <Products />
        </View>
    );
}

export default Bebidas;