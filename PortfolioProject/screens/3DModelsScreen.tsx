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
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      width: '100%',
      height: '100%',
   
    },
  });