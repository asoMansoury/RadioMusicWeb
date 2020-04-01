import {createStore,applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import {persistReducer,persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key:'rootReducer',
    storage:storage
}
const persisReducer = persistReducer(persistConfig,rootReducer);

const middlware = applyMiddleware(thunk,logger);


const  store = createStore(persisReducer,middlware);
const persistor = persistStore(store);

export {persistor,store}