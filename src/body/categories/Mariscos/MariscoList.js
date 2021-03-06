import React from 'react';
import { View, StyleSheet } from 'react-native';
import MariscoItem from './MariscoItem';

function MariscoList() {
    return (
        <View style={style.item} >
            <MariscoItem />
        </View>
    );
}

export default MariscoList;

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
