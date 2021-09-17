import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Headers(props) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props.url} style={styles.logo} />
            </View>
            <Text style={styles.text}>{props.category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 5,
        marginTop:5
    },
    logo: {
        marginTop: 5,
        width: 224.5,
        height: 120,
    },
    text: {
        textTransform: "uppercase",
        color: '#11B637',
        fontWeight: "bold",
        fontSize: 25,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 10,
    }
});
