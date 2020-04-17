import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import {} from './../../Common/Constant';

const useStyles = makeStyles(theme=>({
    modal:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'0 auto'
        
    },
    paper:{
        backgroundColor:theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}))



const LoadingModal =({setIshoShowModal,isShowModal},props)=>{
    const classes = useStyles();

    
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
            
            closeAfterTransition
            BackdropProps = {{
                timeout:500
            }}>
                <div style={{width:'60%',margin:'0 auto',borderRadius:18}}>
                    <Fade in={isShowModal}>
                        <div>
                            <div className={[classes.paper],{width:'500'}} style={props.isSm?{ marginTop:'.2rem'}:{ marginTop:'3rem'}} id="ddd">
                                <img style={{width:'100%',height:'150px',borderRadius:12}} src='\assets\images\PageLoading.gif'></img>
                            </div>
                        </div>
                    </Fade>

                </div>

                
        </Modal>
    )
}
export default LoadingModal;