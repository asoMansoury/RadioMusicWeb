import {combineReducers} from 'redux';
import {UserIsLogin} from './UserAuthenticationReducer';
import {configApp} from './initialConfigAppReducer';

export default combineReducers({
    UserIsLogin,
    configApp
})