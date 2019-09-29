import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(theme=>({
    modal:{
        display:'flex',
        aligntItems:'center',
        justifyContent:'end',
        maxWidth:'50%',
        maxHeight:'50%'
    },
    paper:{
        backgroundColor:theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}))

export default function(){
    const classes = useStyles();
    const [open , setOpen] = React.useState(true);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            BackdropComponent={Backdrop}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps = {{
                timeout:500
            }}>
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Transition modal</h2>
                    <p id="transition-modal-description">react-transiton-group animates me.</p>
                </div>
                </Fade>
        </Modal>
    )
}