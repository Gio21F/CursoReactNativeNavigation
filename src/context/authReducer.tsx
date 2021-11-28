import { AuthState } from "./AuthContext";

type AuthReducerAction = { type: 'signIn' } | { type: 'signOut' } | { type: 'signUp' } |
                        { type: 'changeFavIcon', payload: string } | { type: 'changeUser', payload: string };

export const authReducer = (state:AuthState, action: AuthReducerAction):AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLogged: true,
                username: 'test',
                favoritIcon: 'star',
            }        
        case 'signOut':
            return {
                ...state,
                isLogged: false,
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoritIcon: action.payload,
            }
        case 'changeUser':
            return {
                ...state,
                username: action.payload,
            }
        default:
            return state;
    }
}