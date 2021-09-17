import React from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './src/body/categories/Mariscos/MariscoList';

function Mariscos() {
    return (
        <View>
            <Headers url={require('./assets/marisco.png')} category={'MARISCOS'} />
            <Products />
        </View>
    );
}

export default Mariscos;