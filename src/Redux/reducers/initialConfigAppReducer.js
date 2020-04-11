import {SET_TLANGUAGE,SET_FILTER_ELEMENT} from '../actions/constantActionss';
import commonUtility from './../../Common/utiliy';
import axios from 'axios';
import {BaseApiUrl} from './../../Common/Constant'
const initState = {
    TLanguageID:2,
    key:'Authentication',
    Elements:[]
}

export const configApp = (state=initState,action)=>{
    let result = {};
    switch (action.type) {
        
        case SET_TLANGUAGE:
        {
            result = {
                ...state,
                TLanguageID:action.payload.TLanguageID
                
            }
        return result;
        }
        case SET_FILTER_ELEMENT:
        {
        let elementResult = {
            ...state,
            Elements:action.payload
        }
        return elementResult;
        }
        default:
            return state;
    }
}