 
 import { constDashboard } from './dashboard.constants';
 const initialstate = [];
 const { FETCH_MOVIES } = constDashboard;
 export const dashboard = ( state = initialstate, action) =>{
  switch(action.type){
    case FETCH_MOVIES:
        return {
            ...state,
            data:action.payload
        };
        default:
        return state;

   }

}