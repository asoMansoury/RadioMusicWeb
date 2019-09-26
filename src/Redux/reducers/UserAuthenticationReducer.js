
const initState = {
    isLogin:false,
    userInformation:{}
}

export const UserIsLogin = (state=initState,action)=>{
    switch (action.type) {
        case "s":
            state={
                isLogin:true
            }
            return state;
    
        default:
            return initState;
    }
}