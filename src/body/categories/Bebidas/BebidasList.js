import React from 'react';
import Product from './BebidasItem';
import { View, StyleSheet } from 'react-native';

function Products() {
    return (
        <View style={style.item} >
            <Product />
        </View>
    );
}

export default Products;

const style = StyleSheet.create({
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginEnd: 10,
        marginStart: 10
    }
})
