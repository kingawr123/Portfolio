import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import ImageView from "react-native-image-viewing";
import { colors } from "../assets/Assets";

import Header from "../components/CustomHeader";

const images = [
    {
        uri: "../assets/drzewo.png",
    },
    {
        uri: "../assets/lis.png",
    },
    {
        uri: "../sushi.png",
    },
    {
        uri: "../piwo.png",
    }
]

export default function LineArts(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/lis.png')}/>
            <Image style={styles.image} source={require("../assets/drzewo.png")}/>
            <Image style={styles.image} source={require("../assets/sushi.png")}/>
            <Image style={styles.image} source={require("../assets/piwo.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
    },
    image:{
        height: 300,
        width:300,
        borderWidth:0.5,
        borderColor: colors.navSeps,
        marginBottom: 10,
        borderRadius:10,
    }
  });