import React from 'react';
import {Route,Switch,Router} from 'react-router-dom';
import SignIn from './Pages/Authentications/SignIn';
import Index from './Pages/AdminPanel/Index';
const MainRoute = ()=>{

    return(
        <div>
            <Switch>
                <Route path="/" exact={true} component={Index}></Route>
                <Route path="/Home" exact={true} component={Index}></Route>
                <Route path="/Authentication" exact={true} component={SignIn}></Route>
            </Switch>
        </div>
    )
}

export default MainRoute;