import React from 'react';


const AdminPanelContext = React.createContext({
    isSMMode:false,
    userInformation:{},
    setUserLogin:function(value){},
    saveUserInformation:function(value){}
});

export default AdminPanelContext;