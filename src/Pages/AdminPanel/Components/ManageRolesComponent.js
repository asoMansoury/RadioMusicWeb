import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {FormControlLabel,Checkbox} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import commonUtility from './../../../Common/utiliy';
import ListItemComponent from './../Components/ListItemsComponent';
import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& label.MuiInputLabel-outlined.MuiInputLabel-shrink':{
        transform: 'translate(5px, -6px) scale(0.95)',
        right:0
    },
    '& .MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline':{
        borderColor:'green'
    },
    '& label.MuiInputLabel-outlined':{
        transform: 'translate(-10px, 20px) scale(1)',
        backgroundColor:'white',
        maxWidth:'70%',
        right:0
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'green',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
          outline:'none'
        },
      },
    },
  })(TextField);



export default function ManageRolesComponent(props) {
    console.log(props);
    return(
    <div key={props.item.id}>
        <ExpansionPanelSummary
        style={{backgroundColor:'#E91E63'}}
        expandIcon ={<ExpandMoreIcon></ExpandMoreIcon>}>
            <Typography className="font-title">{props.item.ActionName}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
              <div style={{display: 'flex',flexDirection:'row',width:'100%',justifyContent: 'space-between'}}>
                  <div style={{flexDirection:'column'}}>
                      <div>
                          <CssTextField
                                  label ="Role Name"
                                  variant="outlined"
                                  id="lblCreateRole"
                                  // value={roleName}
                                  // onChange={(event)=>setRoleName(event.target.value)}
                              ></CssTextField>
                              {/* <FormControlLabel 
                                    id="chkActive"
                                    control={<Checkbox onChange={()=>setActiveNewRole(!activeNewRole)}  checked={activeNewRole} ></Checkbox>}
                                    label="Is Active" style={{color:'black'}}
                                ></FormControlLabel> */}
                      </div>
                      {/* <div style={Object.assign(isSMMode?{justifyContent:'center'}:{justifyContent:'right'},{marginTop:'10px',display: 'flex'})}>
                          <Button onClick={handleClick(childRef)} variant="contained" color="secondary">Create Role</Button>
                      </div>                    */}
                  </div>
                  <div>
                    <ListItemComponent></ListItemComponent>
                  </div>  
              </div>
        </ExpansionPanelDetails>
</div>
    );
}