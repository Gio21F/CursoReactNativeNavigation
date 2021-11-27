import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerNavigationOptions  } from '@react-navigation/drawer';
import { Text, Image, View } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabs } from './BottomTabs';
import { TopTabs } from './TopTabs';
import { Icon } from 'react-native-elements'

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={props => <MenuInterno {...props} />}
        >
        <Drawer.Screen name="StackNavigator" options={{ title:'Home' }} component={StackNavigator} />
        <Drawer.Screen name="SettingsScreen" options={{ title:'Settings' }} component={ SettingsScreen } />
        <Drawer.Screen name="BottomTabs" options={{ title:'Bottom Tabs' }} component={ BottomTabs } />
        <Drawer.Screen name="TopTabs" options={{ title:'Top Tabs' }} component={ TopTabs } />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}
                    style={ styles.avatar }
                />
            </View>
            {/* Opciones de menu */}
            <View style={ styles.menuContainer }>
                {/* Navegacion Stack */}
                <TouchableOpacity 
                    style={{ 
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('StackNavigator')}
                >

                    <Icon name='home' style={{ padding: 5 }} size={25} type="font-awesome" color='black' tvParallaxProperties /> 
                    <Text style={ styles.menuTexto }>Navegacion Stack</Text>
                </TouchableOpacity>

                {/* Navegacion Settings */}
                <TouchableOpacity 
                    style={{ 
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Icon name='cog' style={{ padding: 5 }} size={25} type="font-awesome" color='black' tvParallaxProperties /> 
                    <Text style={ styles.menuTexto }>Settings</Text>
                </TouchableOpacity>

                {/* Navegacion a Bottom Tabs */}
                <TouchableOpacity 
                    style={{ 
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('BottomTabs')}
                >
                    <Icon name='sort-down' style={{ padding: 5 }} size={25} type="font-awesome" color='black' tvParallaxProperties /> 
                    <Text style={ styles.menuTexto }>Bottom Tabs</Text>
                </TouchableOpacity>

                {/* Navegacion a Top Tabs */}
                <TouchableOpacity 
                    style={{ 
                        ...styles.menuButton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('TopTabs')}
                >
                    <Icon name='sort-up' style={{ padding: 5 }} size={25} type="font-awesome" color='black' tvParallaxProperties />
                    <Text style={ styles.menuTexto }>Top Tabs</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}