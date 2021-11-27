import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const stack = createNativeStackNavigator();//Como una nuevo juego de cartas

  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SafeAreaProvider>
        <MenuLateral />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

