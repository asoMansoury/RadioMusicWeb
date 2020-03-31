import {SET_USER_INOFORMATION,SET_USER_LOGIN} from '../actions/constantActionss';
const initState = {
    isUserLoggedIn:false,
    userInformation:{
        userName:'',
        mobile:'',
        email:''
    }
}

export const UserIsLogin = (state=initState,action)=>{
    switch (action.type) {
        case SET_USER_LOGIN:
        {
            let result ={
                isUserLoggedIn:true,
                ...state
            }
            return result;
        }
        case SET_USER_INOFORMATION:
        {
            let resultUser = {
                ...state,
                userInformation:action.payload
            }   
            return resultUser;
        }
        default:
            return initState;
    }
}