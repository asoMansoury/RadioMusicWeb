import React from 'react';
import {connect} from 'react-redux';
import MainPage from './Pages/MainPage';
import SignIn from './Pages/Authentications/SignIn';
class App extends React.Component {
  render(){
    return <SignIn></SignIn>
  }
}

const mapStateToProps = (state)=>{
  return {
    userStatus:state.UserIsLogin
  }
}
export default connect(mapStateToProps,null)(App);

