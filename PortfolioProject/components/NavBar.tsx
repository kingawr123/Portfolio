import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from "../assets/Assets";

export default function NavBar(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.sep}>
                <View>
                    {/* działa ale podkreśla? idk o co chodzi */}
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.text}>HOME</Text></TouchableOpacity>
                </View> 
                <View style={[styles.container, styles.tabs]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Models')}><Text style={styles.text}>3D MODELS</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('LineArts')}><Text style={styles.text}>LINE-ARTS</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

{/* <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={styles.text}>HOME</Text></TouchableOpacity></View> 
<View style={[styles.container, styles.tabs]}>
    <TouchableOpacity onPress={() => navigation.navigate('Models')}><Text style={styles.text}>3D MODELS</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('LineArts')}><Text style={styles.text}>LINE-ARTS</Text></TouchableOpacity> */}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },  
    tabs: {
        justifyContent: 'flex-end',
    }, 
    text: {
        borderRightWidth: 1,
        borderRightColor: colors.navSeps,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 8,
        paddingRight: 8,
        color: colors.navText,
    } ,
    sep: {
        borderBottomWidth: 1,
        borderBottomColor: colors.navSeps,
        width:'100%',
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})