import React, { useContext, useRef } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import ChackPageContext from '../../Context/AdminPanelContext';
import SnackBarComponent from '../../CommonComponents/SnackBarComponent';
import axios from 'axios';
import {PlatformType,BaseApiUrl} from './../../../Common/Constant';

import ManageRolesComponent from './../Components/ManageRolesComponent';
// const theme = createMuiTheme({
//     palette:{
//         primary:green
//     },
//     direction:'ltr',
// })


const ManageRoles = (props) =>{
    const context =useContext(ChackPageContext);
    const [roleName,setRoleName] = React.useState("");
    const [activeNewRole,setActiveNewRole] = React.useState(true);
    let {isSMMode} = context;
    const childRef = useRef();
    console.log(props.controllerData)
    const handleClick = childRef =>()=>{
      let data = {
        Role: {
          RoleName:roleName,
          IsEnable:true
        }
      }
      console.log("Props: ",props)
      axios.post(BaseApiUrl+"/RolesApi/CreateNewRole",data,
      {
      headers: { 
         PlatformType: PlatformType,
         TLanguageCode:props.configApp.TLanguageID,
         WebToken:props.userInformation.WebToken,
         IsEnable:activeNewRole
        }
      }).
      then(function (response) {
        if(response.data.isError!=true){
          childRef.current.showSnackBar(response.data.Errors.Message,"success");
        }else{
          childRef.current.showSnackBar(response.data.Errors.Message,"error");
        }
      })
      .catch(function (error) {
        childRef.current.showSnackBar("hello");
      });;

    }
    if(props.controllerData==undefined){
      return (<div>loading component</div>)
    }else
    return (
        <div>
            <ExpansionPanel>

              {
               props.controllerData.Methods.map(item=>{
                 return  <ManageRolesComponent key={item.id} item ={item}></ManageRolesComponent>
               })
               
              }
            </ExpansionPanel>
            <SnackBarComponent ref={childRef}></SnackBarComponent>
        </div>
          
    )
}

export default ManageRoles;