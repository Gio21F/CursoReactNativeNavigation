import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {};

export const Pag1Screen = ( { navigation }: Props ) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title } >Pagina 1</Text>
            <Button 
                title="Ir a la pagina 2"
                onPress={() => navigation.navigate('Pag2Screen') }
            />

            <Text>Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row', marginBottom:10 }}>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'Pedro',
                    }) }
                    style={ styles.botonGrande }
                >
                    <Text style={ styles.botonGrandeText }>Pedro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        name: 'Mária',
                    }) }
                    style={ styles.botonGrande }
                >
                    <Text style={ styles.botonGrandeText }>Mária</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
