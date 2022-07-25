import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import EStyleSheet from 'react-native-extended-stylesheet';

import NavBar from "./NavBar";
import { fonts } from "../assets/Assets";



export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.h2}>KINGA WRONA's</Text>
                <Text style={styles.h1}>PORTFOLIO</Text>
            </View>
            <NavBar />
        </View>
    )
}
const styles = EStyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    textContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 'auto',
        paddingTop: 10,
        paddingBottom: 10,
    },

    h1:{
        fontSize: '30rem',
        fontFamily: fonts.h1,
    },


    h2: {
        fontSize: '21rem',
        fontFamily: fonts.h2,
    },      

    '@media (max-width: 950)':{
        container: {
            width: '100%',
            marginTop: 20,
            aspectRatio: 2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        h1: {
            fontSize: 55,
            fontFamily: fonts.h1,
        },
        h2: {
            fontSize: 42,
            fontFamily: fonts.h2,
        }, 
    }
})