import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import MainRoute from './MainRoute';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainRoute></MainRoute>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
