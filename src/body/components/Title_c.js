import { Text, StyleSheet } from 'react-native'

import React from 'react'
function Title_c(props) {
    return (
        <Text style={style.text}>{props.name}</Text>
    )
}

export default Title_c

const style = StyleSheet.create({
    text: {
        color: '#fff',
        backgroundColor: '#F33B45',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 6,
        paddingBottom: 6,
        textTransform:'uppercase',
        fontWeight:'bold',
        borderRadius:30,
        marginTop:10,
    }
})