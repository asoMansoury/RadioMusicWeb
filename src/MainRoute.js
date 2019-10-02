import React from 'react';
import {Route,Switch,Router} from 'react-router-dom';
import SignIn from './Pages/Authentications/SignIn';
import AdminPanel from './Pages/AdminPanel/Index';
import Home from './Pages/Home/Home';
const MainRoute = ()=>{

    return(
        <div>
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/Home" exact={true} component={Home}></Route>
                <Route path="/Authentication" exact={true} component={SignIn}></Route>
                <Route path="/AdminPanel" exact={true} component={AdminPanel}></Route>
            </Switch>
        </div>
    )
}

export default MainRoute;