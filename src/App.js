import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    console.log(this.props.userStatus.isLogin);
  }

  render(){
    return (
      <div >
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    userStatus:state.UserIsLogin
  }
}
export default connect(mapStateToProps,null)(App);

