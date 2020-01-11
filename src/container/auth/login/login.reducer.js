import { userConstants } from './login.constants';


let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
    switch(action.type){
       case userConstants.LOGIN_SUCCESS:
            localStorage.setItem('user', action.payload);
            return {
                ...state,
                loggingIn: true,
                token:action.payload
            };

        default :
         return state;
    }

}