import { StyleSheet, View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from "../components/CustomHeader";
import React from "react";
import NavBar from "../components/NavBar";


export default function Home(){
    return(
        <View style={styles.container}>
            <Text>HOME</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      width: '100%',
      height: '100%',
   
    },
  });