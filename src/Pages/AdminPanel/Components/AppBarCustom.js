import React, { useState } from 'react';
import {makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, } from '@material-ui/core';
import clsx from 'clsx'

const useStyles =makeStyles(theme=>({
    root:{
        flexGrow:1
    },

    menuButton:{
        marginRight:theme.spacing(2)
    },
    title:{
        flexGrow:1
    },
    appBar:{
        transition:theme.transitions.create(['margin','widt'],{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen
        })
    },
    appBarShift:{
        width:`calc(100% - ${165}px)`,
        marginLeft:120,
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
        <div className={classes.root}>
            <AppBar position="fixed" 
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openVal,
                })}
                color="primary">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" onClick={handleDrawerOpen}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Log Out</Button>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default AppBarCustom;