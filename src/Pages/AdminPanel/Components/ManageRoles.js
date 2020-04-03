import React, { useContext, useRef } from 'react';
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import ChackPageContext from '../../Context/AdminPanelContext';
import SnackBarComponent from '../../CommonComponents/SnackBarComponent';
import axios from 'axios';


// const theme = createMuiTheme({
//     palette:{
//         primary:green
//     },
//     direction:'ltr',
// })

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

    const childRef = useRef();


    const handleClick = childRef =>()=>{
      axios.post("http://localhost:53094/api/userapi/Login",{
        userName: 'usernameL',
        password: 'passwordL'
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });;
      childRef.current.showSnackBar("hello");
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
                                label ="Role Name"
                                variant="outlined"
                                id="lblCreateRole"
                            ></CssTextField>
                    </div>
                    <div style={Object.assign(isSMMode?{justifyContent:'center'}:{justifyContent:'right'},{marginTop:'10px',display: 'flex'})}>
                        <Button onClick={handleClick(childRef)} variant="contained" color="secondary">Create Role</Button>
                    </div>
                  </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <SnackBarComponent ref={childRef}></SnackBarComponent>
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