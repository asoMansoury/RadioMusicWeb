import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {Store} from './Redux/store';
import MainRoute from './MainRoute';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <MainRoute></MainRoute>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
