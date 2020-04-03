import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SignIn from './Pages/Authentications/SignIn';
import AdminPanel from './Pages/AdminPanel/Index';
import Home from './Pages/Home/Home';
import {RoutesKey} from './Common/Constant';
const MainRoute = ()=>{

    return(
        <div>
            <Switch>
                <Route path={RoutesKey.Root} exact={true} component={Home}></Route>
                <Route path={RoutesKey.Home} exact={true} component={Home}></Route>
                <Route path={RoutesKey.Authentication} exact={true} component={SignIn}></Route>
                <Route path={RoutesKey.AdminPanel} exact={true} component={AdminPanel}></Route>
            </Switch>
        </div>
    )
}

export default MainRoute;