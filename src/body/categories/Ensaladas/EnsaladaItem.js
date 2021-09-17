import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon_c from '../../components/Icon_c';
import Title_c from '../../components/Title_c';
import ensalada from './../../services/EnsaladaService';


function EnsaladaItem() {
    let renderIcon = () => {
        let icon = [];
        for (let i = 0; i < 5; i++) {
            icon.push(
                <Icon_c />
            );
        }
        return icon;
    }

    let renderCard = () => {
        let card = [];

        ensalada.forEach(element => {
            card.push(
                <ItemShadow>
                    <View style={style.icon}>
                        {renderIcon()}
                    </View>
                    <View style={style.item}>
                        <Title_c name={element.nombre} />
                    </View>
                    <View style={style.main}>
                        <View style={style.description}>
                            <Text style={style.textDescription}>{element.descripcion}</Text>
                        </View>
                        <View style={style.price}>
                            <Text style={style.textPrice}>{element.precio}</Text>
                        </View>
                    </View>
                </ItemShadow>
            )
        });
        return card;
    }

    return (
        <>
            {renderCard()}
        </>
    )

}

export default EnsaladaItem

const ItemShadow = styled.View`
    border:1px solid #ccc;
    margin:5px;
    border-radius:10px;
    box-shadow:0 0 18px #ccc;
    background-color:#fff;
    width:100%;
    height:170px;
    padding:5px;
`

const style = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    main: {
        overflow: 'hidden',
        margin: 10,
        flexDirection: 'row'
    },
    icon: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    description: {
        width: '70%',
        justifyContent: 'flex-start'
    },
    price: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 20,
    },
    textPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#11B637'
    },
    textDescription: {
        fontSize: 15,

    }
})
