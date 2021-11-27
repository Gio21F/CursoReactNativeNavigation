import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab1Screen } from '../screens/Tab1SScreen';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { TopTabs } from './TopTabs';

export const BottomTabs = () => {
    return Platform.OS === 'ios' 
        ? <TabsIOS />
        : <TabsAndroid />
}

// Bottom Tabs Android
const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: colors.primary }}
        screenOptions={ ({ route }) => ({
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.gray,
            tabBarLabelStyle: {
                fontSize: 14,
            },
            tabBarIcon: ( { color } ) => {
                let icoName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        icoName = "T1"
                    break;
                    case 'Tab2Screen':
                        icoName = "T2"
                    break;
                    case 'Tab3Screen':
                        icoName = "T3"
                    break;
                }
                return <Text style={{ color }}>{ icoName }</Text>
            }
        })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={ TopTabs } />
      <BottomTabAndroid.Screen name="Tab3Screen" options={{title:'Tab 3'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}


// Bottom Tabs Android
const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{ backgroundColor: colors.background }}
        screenOptions={ ({ route }) => ({
            tabBarActiveTintColor: colors.secondary,
            tabBarInactiveTintColor: colors.gray,
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopColor: colors.secondary,
            }, 
            tabBarLabelStyle: {
                fontSize: 14,
            },
            tabBarIcon: ( { color, focused, size } ) => {
                let icoName: string = '';
                switch (route.name) {
                    case 'Tab1Screen':
                        icoName = "T1"
                    break;
                    case 'Tab2Screen':
                        icoName = "T2"
                    break;
                    case 'Tab3Screen':
                        icoName = "T3"
                    break;
                }
                return <Text style={{ color }}>{ icoName }</Text>
            }
        })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab 2'}} component={TopTabs} />
      <BottomTabIOS.Screen name="Tab3Screen" options={{title:'Tab 3'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}
