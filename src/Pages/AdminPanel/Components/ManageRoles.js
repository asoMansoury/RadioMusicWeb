import React, { useContext } from 'react';
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import {fade,MuiThemeProvider,withStyles,makeStyles,createMuiTheme} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ChackPageContext from './../../Context/PageSizeChecking';
import SnackBarComponent from './SnackBarComponent';

const theme = createMuiTheme({
    palette:{
        primary:green
    },
    direction:'ltr',
})

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


const ManageRoles = () =>{
    const context =useContext(ChackPageContext);
    let {isSMMode} = context;

    const handleClick = ()=>{
      console.log("Clicked");
    }

    
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
                  <div style={{display: 'flex',flexDirection:'column'}}>
                    <div>
                        <CssTextField
                                label ="نام نقش"
                                variant="outlined"
                                id="lblCreateRole"
                            ></CssTextField>
                    </div>
                    <div style={Object.assign(isSMMode?{justifyContent:'center'}:{justifyContent:'right'},{marginTop:'10px',display: 'flex'})}>
                        <Button variant="contained" color="secondary" onClick={handleClick}>Secondary</Button>
                    </div>
                  </div>

                </ExpansionPanelDetails>

            </ExpansionPanel>
            <SnackBarComponent></SnackBarComponent>
        </div>
          
    )
    // return (
    //   <ChackPageContext.Consumer>
    //     {
    //       context =>(
    //         <>

    //     <div>
    //         <ExpansionPanel>
    //             <ExpansionPanelSummary
    //                 style={{backgroundColor:'#E91E63'}}
    //                 expandIcon ={<ExpandMoreIcon></ExpandMoreIcon>}
    //             >
    //                 <Typography className="font-title">تعریف نقش جدید</Typography>
    //             </ExpansionPanelSummary>
    //             <ExpansionPanelDetails >
    //               <div style={{display: 'flex',flexDirection:'column'}}>
    //                 <div>
    //                     <CssTextField
    //                             label ="نام نقش"
    //                             variant="outlined"
    //                             id="lblCreateRole"
    //                         ></CssTextField>
    //                 </div>
    //                 <div style={Object.assign(context.isSMMode?{justifyContent:'center'}:{justifyContent:'right'},{marginTop:'10px',display: 'flex'})}>
    //                     <Button variant="contained" color="secondary">Secondary</Button>
    //                 </div>
    //               </div>

    //             </ExpansionPanelDetails>
    //         </ExpansionPanel>
    //     </div>
                    
    //     </>
    //       )
    //     }
    //   </ChackPageContext.Consumer>
    // )
}

export default ManageRoles;