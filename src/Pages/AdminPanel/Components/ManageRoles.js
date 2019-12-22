import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import {fade,MuiThemeProvider,withStyles,makeStyles,createMuiTheme} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary:green
    },
    direction:'ltr',
})
const textFieldStyles = {
    labelTag:{
        fontSize:30,
        color:'red'
    }
}

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
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
          borderColor: 'red',
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


const ManageRoles = () =>{

    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    style={{backgroundColor:'#E91E63'}}
                    expandIcon ={<ExpandMoreIcon></ExpandMoreIcon>}
                >
                    <Typography className="font-title">تعریف نقش جدید</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                        <CssTextField
                            label ="نام نقش"
                            variant="outlined"
                            id="lblCreateRole"
                        ></CssTextField>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export default ManageRoles;