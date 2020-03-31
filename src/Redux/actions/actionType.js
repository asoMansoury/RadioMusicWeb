import {SET_USER_INOFORMATION,SET_USER_LOGIN} from './constantActionss';

export const isUserLogin = (isLogin=false)=>{
    return {
        type:SET_USER_LOGIN,
        payload:isLogin
    }
}

export const saveUserInformation = (userInformation)=>{
    return{
        type:SET_USER_INOFORMATION,
        payload:userInformation
    }
}