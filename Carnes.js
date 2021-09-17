import React from 'react';
import Headers from './Headers';
import { View } from 'react-native';
import Products from './src/body/categories/Carnes/CarneList';

function Carnes() {
    return (
        <View>
            <Headers url={require('./assets/carnes.png')} category={'CARNES'} />
            <Products />
        </View>
    );
}

export default Carnes;