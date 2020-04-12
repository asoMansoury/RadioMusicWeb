import {SET_TLANGUAGE,SET_FILTER_ELEMENT} from '../actions/constantActionss';
const initState = {
    TLanguageID:"ENG",
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
                TLanguageID:action.payload     
        }
        
        return result;
        }
        case SET_FILTER_ELEMENT:
        {
            let elementResult = {
                ...state,
                Elements:action.payload,
            }
        return elementResult;
        }
        default:
            return state;
    }
}