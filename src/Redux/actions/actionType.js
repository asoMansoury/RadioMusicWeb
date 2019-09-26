export const userLogin = (isLogin=false,userInformation)=>{
    return {
        type:"userLogin",
        isLogin:isLogin,
        userInformation:userInformation
    }
}