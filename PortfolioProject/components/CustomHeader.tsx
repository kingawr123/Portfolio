import { StyleSheet, View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

import NavBar from "./NavBar";
import { fonts } from "../assets/Assets";


export default function Header(){

    return(
        <View style={Dimensions.get('window').width<800 ? styles.containerPhone : styles.container}>
            <View style={styles.textContainer}>
                <Text style={Dimensions.get('window').width<800 ? styles.h2Phone : styles.h2 }>KINGA WRONA's</Text>
                <Text style={Dimensions.get('window').width<800 ? styles.h1Phone : styles.h1 }>PORTFOLIO</Text>
            </View>
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    containerPhone: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        height: Dimensions.get('window').height /3.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        width: '100%',
        marginTop: 20,
        marginBottom: 10,
        height: Dimensions.get('window').height /4,
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
        fontSize: 78,
        fontFamily: fonts.h1,
    },

    h1Phone: {
        fontSize: 55,
        fontFamily: fonts.h1,
    },

    h2: {
        fontSize: 54,
        fontFamily: fonts.h2,
    },   

    h2Phone: {
        fontSize: 42,
        fontFamily: fonts.h2,
    },      
})