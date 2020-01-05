import httpService from '../../services/GlobalService';
import { constDashboard } from './dashboard.constants';
const { FETCH_MOVIES, FAIL_MOVIES } = constDashboard;

export const dashboardAction = () =>{
    return dispatch =>{
        httpService.get('movies')
        .then(res=>{
            dispatch({type:FETCH_MOVIES,payload:res.data});
        })
        .catch(res=>{
            dispatch({type:FAIL_MOVIES,payload:res});
        });
    }
}