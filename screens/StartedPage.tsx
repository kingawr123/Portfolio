import { StyleSheet } from "react-native";

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from "../types";

export default function({navigation} :  RootTabScreenProps<'StarterPage'>){
    return(
        <View style={styles.container}>
            <Text style={styles.textBasic}>
                Działa?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    textBasic:{
        color: "#ffafcc",
        fontSize: 20,
    },
})