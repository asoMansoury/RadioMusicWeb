import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import Settings from '@material-ui/icons/Settings';

const FabCustom =(props)=>{

    return(
        <Fab
        mainButtonStyles={{backgroundColor:'red'}}
        actionButtonStyles={{backgroundColor:'black'}}
        icon={<Settings></Settings>}>
            {
                props.language.map(function(item,i){
                    return <Action
                    text={item.Language}
                    style={{backgroundColor:'#f50057'}}
                    // onClick={onClickEvent}
                />
                })
            }
    </Fab>
    )

    // onClick={()=>{props.setLanguage({TLanguageID:item.LanguageCode});props.setFilterLanguage({Key:'Authentication',TLanguageID:item.LanguageCode});commonUtility.setTLanguageCode(item.LanguageCode);}}
}

export default FabCustom;
