import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import MainRoute from './MainRoute';
import {BrowserRouter} from 'react-router-dom';
import {Component} from 'react';
import { persistStore } from 'redux-persist';
import {connect} from 'react-redux';

export default class Preloader extends Component{
    constructor(){
        super()
        this.state ={rehydrated:false}
    }
    componentWillMount(){
        persistStore(this.props.store,{},()=>{
            this.setState({
                rehydrated:true
            })
        })
    }

    render(){
        if(!this.state.rehydrated){
            return<div>helloooo</div>
        }
        return (    
        <Provider  store={store}>
            <BrowserRouter>
                <MainRoute></MainRoute>
            </BrowserRouter>
        </Provider>)
    }
}

ReactDOM.render(
    <Preloader store={store}></Preloader>
    , document.getElementById('root'));
