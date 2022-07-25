import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';





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