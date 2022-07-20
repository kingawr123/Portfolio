import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";

import Home from './screens/HomeScreen';
import Models from './screens/3DModelsScreen';
import LineArts from './screens/LineArtsScreen';
import Header from './components/CustomHeader';
// import { Header } from './components/CustomHeader';

const screens = {
  Home: {
    screen: Home,
  },
  Models: {
    screen: Models,
  },
  LineArts: {
    screen: LineArts,
  },
}



const AppNavigator = createStackNavigator(screens, {
    defaultNavigationOptions:{ 
      //headerShown: false,
      headerTitle: <Header />,
      headerStyle: {
        height: Dimensions.get('window').height / 3.5,
      }
    },
  },
)


const Navigator = createAppContainer(AppNavigator);


export default function App() {
  return (
    <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
