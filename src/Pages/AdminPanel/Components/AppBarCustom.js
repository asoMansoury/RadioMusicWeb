import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, } from '@material-ui/core';
import clsx from 'clsx'
import AdminPanelContext from '../../Context/AdminPanelContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles =makeStyles(theme=>({
    root:{
    },

    menuButton:{
        marginRight:theme.spacing(2),
        marginLeft:theme.spacing(1)
    },
    menuButtonL:{
        marginRight:theme.spacing(2),
        marginLeft:theme.spacing(-3)
    },
    title:{
        flexGrow:1
    },
    titleShift:{
        flexGrow:1,
        transition:theme.transitions.create(['margin','margin-right'],{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.standard
        }),
        marginRight:40
    },
    appBar:{
        transition:theme.transitions.create(['margin','width'],{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen
        }),
        backgroundColor: '#388E3C'
    },
    appBarShift:{
        width:`calc(100% - ${170}px)`,
        marginRight:190,
        transition:theme.transitions.create(['margin','width'],{
            easing:theme.transitions.easing.easeInOut,
            duration:theme.transitions.duration.enteringScreen
        }),
    },
}))
const AppBarCustom =({openDrawer,openVal},props)=>{
    const classes = useStyles();
    const handleDrawerOpen = () =>{
        openDrawer();
    }
    return(
        <AdminPanelContext.Consumer>
            {value =>(
                <AppBar position="fixed" 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openVal,
                })}>
                <Toolbar style={{direction:"rtl"}}>
                    <IconButton className={clsx(classes.menuButton,{
                        [classes.menuButtonL]:openVal,
                    })}  edge="start" onClick={handleDrawerOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <div  className={clsx(classes.title,{
                        [classes.titleShift]:openVal
                    })}>
                        {value.userInformation.email}
                    </div>
                    <div ><Button style={{transform: `rotate(180deg)`}}  color="inherit" onClick={()=>{value.setUserLogin(false);value.saveUserInformation({})}}><ExitToAppIcon fontSize='large' ></ExitToAppIcon></Button></div>
                </Toolbar>
            </AppBar>
            )}
        </AdminPanelContext.Consumer>
    )
}

export default AppBarCustom;