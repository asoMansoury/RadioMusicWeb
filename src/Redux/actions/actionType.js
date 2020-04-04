import {SET_USER_INOFORMATION,SET_USER_LOGIN,SET_TLANGUAGE} from './constantActionss';
import {TLanguageID} from './../../Common/Constant'

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

export const setLanguage = (value)=>{
    return {
        type:SET_TLANGUAGE,
        payload:value
    }
}