import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pag1Screen } from '../screens/Pag1Screen';
import { Pag2Screen } from '../screens/Pag2Screen';
import { Pag3Screen } from '../screens/Pag3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RouteStackParams = {
    Pagina1Screen?: undefined;
    Pagina2Screen?: undefined;
    Pagina3Screen?: undefined;
    PersonaScreen: { id:number, name:string };
}
const Stack = createNativeStackNavigator<RouteStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
            //initialRouteName="Pag1Screen" //Elegir la pagina principal e inicial 
            screenOptions={{
                //headerShown: false,//Ocultar el header
                headerStyle: {
                    backgroundColor: '#3d8613',
                },


            }}
            
        >
            <Stack.Screen name="Pag1Screen" options={{ title:"Página 1" }} component={Pag1Screen} />
            <Stack.Screen name="Pag2Screen" options={{ title:"Página 2" }} component={Pag2Screen} />
            <Stack.Screen name="Pag3Screen" options={{ title:"Página 3" }} component={Pag3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title:"Persona" }} component={PersonaScreen} />
        </Stack.Navigator>
    )
}