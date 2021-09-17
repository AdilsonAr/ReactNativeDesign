import React from 'react';
import { View, StyleSheet } from 'react-native';
import EnsaladaItem from './EnsaladaItem';

function CarneList() {
    return (
        <View style={style.item} >
            <EnsaladaItem />
        </View>
    );
}

export default CarneList;

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
