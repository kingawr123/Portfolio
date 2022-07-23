import { StyleSheet, View, Text } from "react-native";

import Header from "../components/CustomHeader";

export default function Models(){
    return(
        <View style={styles.container}>
            <Text>3DMODEL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
      
})