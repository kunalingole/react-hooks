import { jwtDecode } from 'jwt-decode';

export function getCurrentUser(){
    try{
        const jwt = localStorage.getItem('user')
        const user = jwtDecode(jwt)
        return user;
    }catch(ex){

    }
}

export function getJwt(){
    return localStorage.getItem('user')
}