import React,{forwardRef,useImperativeHandle} from 'react';
import {useTheme} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StepperComponent from './StepperComponent';

const useStyles = makeStyles(theme=>({
    modal:{
        display:'flex',
        aligntItems:'center',
        justifyContent:'center',
        
        
    },
    paper:{
        backgroundColor:theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width:'90%',
        height:'90%'
    }
}))



const ForgotPassword =({setIshoShowModal,isShowModal},props)=>{
    const classes = useStyles();
    const handleOpen = () =>{
        
        
    }
    const handleClose = () =>{
        setIshoShowModal();
    }
    
    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            BackdropComponent={Backdrop}
            open={isShowModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps = {{
                timeout:500
            }}>
                <Fade in={isShowModal}>
                <div className={[classes.paper]} style={props.isSm?{ marginTop:'.2rem'}:{ marginTop:'3rem'}} id="ddd">
                    <StepperComponent></StepperComponent>
                </div>
                </Fade>
        </Modal>
    )
}
export default ForgotPassword;