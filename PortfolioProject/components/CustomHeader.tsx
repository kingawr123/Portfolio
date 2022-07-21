import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

import NavBar from "./NavBar";


export default function Header(){
    return(
        <View style={styles.container}>
            <View style={[styles.container, styles.textContainer]}>
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
        height: Dimensions.get('window').height /4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textContainer: {
        paddingTop: 20,
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