import { StyleSheet, View, Text } from "react-native";

export default function NavBar(){
    return(
        <View style={styles.container}>
            <Text>HOME</Text>
            <Text>3D MODELS</Text>
            <Text>LINE-ARTS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },    
})