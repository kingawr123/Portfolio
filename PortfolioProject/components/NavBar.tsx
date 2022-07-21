import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


import Home from "../screens/HomeScreen";
import Models from "../screens/3DModelsScreen";
import LineArts from "../screens/LineArtsScreen";


export default function NavBar(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.text}>HOME</Text></TouchableOpacity></View>
            <View style={[styles.container, styles.tabs]}>
                <TouchableOpacity onPress={() => navigation.navigate('Models')}><Text style={styles.text}>3D MODELS</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LineArts')}><Text style={styles.text}>LINE-ARTS</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    tabs: {
        justifyContent: 'flex-end',
    }, 
    text: {
        borderRightWidth: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 8,
        paddingRight: 8,

    } 
})