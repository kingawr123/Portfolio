import { StyleSheet, View, Text, Image, Dimensions, ScrollView } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors, fonts } from "../assets/Assets";

const Gallery = () => {
    if (Dimensions.get('window').width < 950){
        return(
            <ScrollView>
            <View style={styles.lineArtsMainContainer}>
            <View style={styles.scrollContainer}>
            <View style={[styles.col, styles.leftCol]}>
                    <Text style={styles.h1}>Line - Arts</Text>
                    <Image style={styles.image} source={require("../assets/drzewo.png")}/>
                    <Image style={styles.image} source={require("../assets/sushi.png")}/>
                </View>
                <View style={[styles.col, styles.rightCol]}>
                    <Image style={styles.image} source={require('../assets/lis.png')}/>
                    <Image style={styles.image} source={require("../assets/piwo.png")}/>
                </View>
            </View>
            </View>
            </ScrollView>
        )
    } else{
        return(
            <View style={styles.lineArtsMainContainer}>
            <View style={styles.scrollContainer}>
                <View style={[styles.col, styles.leftCol]}>
                    <Text style={styles.h1}>Line - Arts</Text>
                    <Image style={styles.image} source={require("../assets/drzewo.png")}/>
                    <Image style={styles.image} source={require("../assets/sushi.png")}/>
                </View>
                <View style={[styles.col, styles.rightCol]}>
                    <Image style={styles.image} source={require('../assets/lis.png')}/>
                    <Image style={styles.image} source={require("../assets/piwo.png")}/>
                </View>
            </View>
            </View>
        )
    }
}

export default function LineArts(){
    
    return(
        <Gallery/>
    )
}


const styles = EStyleSheet.create({
    scrollContainer: {
        flex:1,
        height: 'auto',
        flexDirection: 'row',
        width:'100%',
    },
    lineArtsMainContainer:{
        flex:1,
        marginVertical: 0,
        paddingBottom: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image:{
        aspectRatio: 1,
        height: undefined,
        width: '100%',
        //borderWidth:3,
        borderColor: colors.navSeps,
        marginBottom: 20,
        borderRadius:20,
    },
    h1: {
        fontSize: '37rem',
        fontFamily: fonts.h1,
        paddingBottom: 20,
    },   

    col:{
        justifyContent: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal:'5%',
    },
    leftCol:{
        flex: 6,
        alignItems: 'flex-start',
    },
    rightCol:{
        flex: 4,
        alignItems: 'flex-end',
    },


    '@media (max-width: 950)': {
        scrollContainer: {
            flexDirection:'row',
            width:'100%',
        },
        lineArtsMainContainer:{
            marginVertical: 0,
            marginBottom: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
        },
        image:{
            aspectRatio: 1,
            height: undefined,
            width: '100%',
            //borderWidth:3,
            borderColor: colors.navSeps,
            marginBottom: 20,
            borderRadius:6,
        },
        h1: {
            fontSize: '35rem',
            fontFamily: fonts.h1,
            paddingBottom: 20,
        },   
     
        col:{
            justifyContent: 'flex-start',
            paddingVertical: 20,
            paddingHorizontal:'5%',
        },
        leftCol:{
            flex: 6,
            alignItems: 'flex-start',
        },
        rightCol:{
            flex: 4,
            alignItems: 'flex-end',
        },
      }
  });