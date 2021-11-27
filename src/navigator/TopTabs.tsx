import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/top/ChatScreen';
import { ContactScreen } from '../screens/top/ContactScreen';
import { AlbumScreen } from '../screens/top/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Icon } from 'react-native-elements'

export const TopTabs = () => {
    return (
        <Top />
    )
}

const TopTab = createMaterialTopTabNavigator();
const Top = () => {
    const { top:paddingTop } = useSafeAreaInsets(); //Usar en ios evitar que se pierda con la forma de una Iphone 10
    return (
        <TopTab.Navigator
            sceneContainerStyle={{ backgroundColor: colors.primary }}
            screenOptions={ ({ route }) => ({
                tabBarPressColor: colors.secondary,
                tabBarShowIcon: true,
                tabBarActiveTintColor: colors.secondary, //Color a props
                tabBarIndicatorStyle: { backgroundColor: colors.secondary },
                tabBarStyle: {
                    backgroundColor: colors.primary,
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                tabBarLabelStyle: {
                    color: colors.secondary,
                    fontSize: 14,
                },
                tabBarIcon: ( { color, focused} ) => {
                    let icoName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            icoName = "home"
                        break;
                        case 'ContactScreen':
                            icoName = "list"
                        break;
                        case 'AlbumScreen':
                            icoName = "image"
                        break;
                    }
                    return <Icon name={icoName} size={20} type="font-awesome" color={color} tvParallaxProperties />

                }
            })}          
        >
        <TopTab.Screen name="ChatScreen" options={{ title:'Chat' }} component={ ChatScreen } />
        <TopTab.Screen name="ContactScreen" options={{ title:'Contact' }} component={ ContactScreen } />
        <TopTab.Screen name="AlbumScreen" options={{ title:'Album' }} component={ AlbumScreen } />
        </TopTab.Navigator>
    );
}
