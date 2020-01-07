import { userConstants } from './login.constants';


let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export function login(state = initialState, action) {
    switch(action.type){
       case userConstants.LOGIN_SUCCESS:
           console.log("hi");
            return {
                ...state,
                loggingIn: true,
                
            };

        default :
         return state;
    }

}