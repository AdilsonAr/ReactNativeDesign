import React from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './src/body/categories/Ensaladas/EnsaladaList';

function Ensaladas() {
    return (
        <View>
            <Headers url={require('./assets/ensalada.png')} category={'ENSALADAS'} />
            <Products />
        </View>
    );
}

export default Ensaladas;