/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-const-assign */
import React, { forwardRef ,useImperativeHandle} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import WarningIcon from '@material-ui/icons/Warning';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';



function GrowTransition(props) {
  return <Grow {...props} />;
}


const TransitionsSnackbar =forwardRef((props,ref) =>{
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
        message:"",
        errorType:""
    });

    useImperativeHandle(ref,()=>({
        showSnackBar(message,errorType='error'){
            var colorCode = "#4caf50";
            if(errorType=="error")
              colorCode='#ff9800';
            else if(errorType=='success')
              colorCode = "#4caf50";
            setState({
                open: true,
                Transition:GrowTransition,
                message:message,
                errorType:errorType,
                backgroundColor:colorCode
            });
            
        }
    }));

   const renderIcons=()=>{
     if(state.errorType=="error"){
      return( <WarningIcon></WarningIcon>)
     }else if(state.errorType="success"){
      return (<DoneOutlineIcon></DoneOutlineIcon>)
     }
      
    }
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };
    
      return (
        <div>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            // message={state.message}
          >
            <Grid container>
              <Grid item xs={12} col={1}>
                <Paper style={{padding:8,backgroundColor:state.backgroundColor,color:'white'}}>
                  <div style={{display:'flex'}}>
                    <div>
                      {renderIcons()}
                      
                    </div>
                    <div style={{textAlign:'center',marginLeft:6,marginRight:6}}>
                      <Typography>{state.message}</Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Snackbar>
        </div>
        );
}); 

export default TransitionsSnackbar;