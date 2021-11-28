import React, { useEffect, useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'
import { RouteStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AuthContext'

interface Props extends NativeStackScreenProps<RouteStackParams, "PersonaScreen"> {};

// interface RouteParams {
//     id: number,
//     name: string,
// }

export const PersonaScreen = ({ navigation, route }:Props) => {
    // const params = route.params as RouteParams;
    const params = route.params
    const { changeUser } = useContext( AuthContext )
    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        })
    }, [])
    useEffect(() => {
        changeUser(params.name)
    }, [])
    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title}>{ JSON.stringify(params, null, 3) }</Text>
        </View>
    )
}
