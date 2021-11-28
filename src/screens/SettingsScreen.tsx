import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
    const { authState } = useContext( AuthContext );
    return (
        <View>
            <Text>{ JSON.stringify( authState, null, 3 ) }</Text>
        </View>
    )
}
