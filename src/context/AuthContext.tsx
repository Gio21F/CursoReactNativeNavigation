import React,{ createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//Definir que informacion tendremos en el contexto
export interface AuthState {
    isLogged: boolean;
    username?: string;
    favoritIcon?: string;
}

//Definir estado inicial
export const authInitialSate:AuthState = {
    isLogged: false,
}

//Como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState; //Estado
    signIn: () => void; //Cambiar el estado del usuario a logeado
    signOut: () => void; //Cambiar el estado del usuario a no logeado
    changeFavIcon: (icon: string) => void; //Cambiar el icono de favoritos
    changeUser: (username: string) => void; //Cambiar el nombre de usuario
}

//Definir el context
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del contect
export const AuthContextProvider = ({ children }: { children:JSX.Element}) => {
    const [ authState, dispatch] = useReducer(authReducer, authInitialSate);
    const signIn = () => {
        dispatch({ type: "signIn" })
    }
    const signOut = () => {
        dispatch({ type: "signOut" })
    }
    const changeFavIcon = (icon:string) => {
        dispatch({ type: "changeFavIcon", payload: icon })
    }
    const changeUser = (username:string) => {
        dispatch({ type: "changeUser", payload: username })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut,
            changeFavIcon,
            changeUser
        }}>
            { children }
        </AuthContext.Provider>
    )
}