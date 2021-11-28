import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { AuthContext } from '../context/AuthContext'

export const Tab1Screen = () => {
    const iconOne = "home"
    const iconTwo = "apple"
    const iconThree = "bell"
    const { changeFavIcon } = useContext( AuthContext )
    return (
        <View>
            <Icon name={iconOne} onPress={() => changeFavIcon(iconOne)} type="font-awesome" color="black" tvParallaxProperties />
            <Icon name={iconTwo} onPress={() => changeFavIcon(iconTwo)} type="font-awesome" color="black" tvParallaxProperties />
            <Icon name={iconThree} onPress={() => changeFavIcon(iconThree)} type="font-awesome" color="black" tvParallaxProperties />
        </View>
    )
}
