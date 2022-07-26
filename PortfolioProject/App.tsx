import 'react-native-gesture-handler';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionSpecs } from '@react-navigation/stack';

import Home from './screens/HomeScreen';
import Models from './screens/3DModelsScreen';
import LineArts from './screens/LineArtsScreen';
import Header from './components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export type RootStackParamList = {
  Home: undefined;
  Models: undefined;
  LineArts: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
    <NavigationContainer>
      <Header/>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false, animation: 'fade'}}></Stack.Screen>
        <Stack.Group>
          <Stack.Screen name='Models' component={Models} options={{headerShown: false, animation: 'fade'}}/>
          <Stack.Screen name='LineArts' component={LineArts} options={{headerShown: false, animation: 'fade'}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    // </ScrollView>
  );
}

