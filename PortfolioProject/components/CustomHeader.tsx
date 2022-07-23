import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        height: Dimensions.get('window').height /3.5,
        // na laptopie /4
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
    h1: {
        fontSize: 66, //na telefonach
        // 70 na laptopach
        fontFamily: fonts.h1,
    },

    h2: {
        fontSize: 50,
        fontFamily: fonts.h2,
    },      
})