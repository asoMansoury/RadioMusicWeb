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
    let result = {};
    switch (action.type) {
        
        case SET_USER_LOGIN:
        {
         result = {
                ...state,
                isUserLoggedIn:action.payload
                
            }
            console.log("result : ",action.payload,result);
            return result;
        }
        case SET_USER_INOFORMATION:
        {
            result = {
                ...state,
                userInformation:action.payload
            }   
            return result;
        }
        default:
            return state;
    }
}