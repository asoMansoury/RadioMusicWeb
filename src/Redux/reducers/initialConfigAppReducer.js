import {SET_TLANGUAGE,SET_FILTER_ELEMENT} from '../actions/constantActionss';
const initState = {
    TLanguageID:"ENG",
    key:'Authentication',
    Elements:[]
}

export const configApp = (state=initState,action)=>{
    
    switch (action.type) {
        
        case SET_TLANGUAGE:
        {
            let result = {};
            result = {
                ...state,
                TLanguageID:action.payload     
            }
        return result;
        }
        case SET_FILTER_ELEMENT:
        {
            let elementResult = {
                TLanguageID:state.TLanguageID,
                Elements:action.payload,
            }
            return elementResult;
        }
        default:
            return state;
    }
}