import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#080808',
    secondary: '#00a680',
    gray: '#828282',
    background: '#080808',

}


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 5,
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: '#00D0D2',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,

    },
    botonGrandeText: {
        color: '#0D0D0D',
        fontSize: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,

    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,

    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
    },
    menuTexto: {
        fontSize: 20,
    },
    menuButton: {
        marginVertical: 10,
    },
});