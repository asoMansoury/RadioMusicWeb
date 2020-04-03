import {SET_TLANGUAGE} from '../actions/constantActionss';
const initState = {
    TLanguageID:2
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
        default:
            return state;
    }
}