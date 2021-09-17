import React from 'react'
import Item from './Item'
import { StyleSheet, View } from 'react-native';

function Item_body() {
    return (
        <View style={style.item} >
            <Item />
        </View>

    )
}

export default Item_body

const style = StyleSheet.create({
    item: {
        display: 'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent: 'center'
    }
})
