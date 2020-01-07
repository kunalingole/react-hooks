
import { userConstants } from './login.constants';
import  httpService from '../../../services/GlobalService';
const  { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = userConstants;

export const loginAction = user => {
 
    return  dispatch => {
        dispatch({type: LOGIN_REQUEST, payload: null});
          httpService.post('/auth', user)
          .then((res) =>{
              
           localStorage.setItem('user', res.data.token);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
          })
          .catch((error)=> {
             dispatch({type: LOGIN_FAILURE, payload: error});
         })
       }
  }