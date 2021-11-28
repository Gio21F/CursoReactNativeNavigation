import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/appTheme';


export const ContactScreen = () => {
    const { signIn, signOut, authState: { isLogged } } = useContext(AuthContext);
    return (
        <View style={ styles.globalMargin }>
            <Text style={styles.title}>Contact Screen</Text>
            { isLogged 
                ? (
                    <Button
                        title="SigOut"
                        onPress={ signOut }
                    />
                )
                : (
                    <Button
                        title="SingIn"
                        onPress={ signIn }
                    />
                )
            }
        </View>
    )
}