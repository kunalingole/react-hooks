import { combineReducers } from 'redux';
import { login } from './auth/login/login.reducer';
import { dashboard } from './dashboard/dashboard.reducer';
export default combineReducers({
    user:login,
    movies:dashboard
})