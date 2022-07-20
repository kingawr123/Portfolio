import { StyleSheet, View, Text } from "react-native";
import React from "react";

import NavBar from "./NavBar";


export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.h2}>KINGA WRONA's</Text>
                <Text style={styles.h1}>PORTFOLIO</Text>
            </View>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 72,
        fontFamily: 'cambria-math',
    },

    h2: {
        fontSize: 50,
        fontFamily: 'sans-serif',
    },      
})