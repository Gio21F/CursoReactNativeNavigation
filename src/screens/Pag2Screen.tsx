import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {};

export const Pag2Screen = ({ navigation }:Props) => {

    const navigator = useNavigation();//Es lo mismo que el de la pagina 1

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras' //Solo IOS
        })
    }, [])
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 2</Text>
            <Button 
                title="Ir a la pagina 3"
                onPress={() => navigator.navigate('Pag3Screen') }
            />
        </View>
    )
}