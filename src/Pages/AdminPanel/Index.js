import React, { useState } from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import AppBarCustom from './Components/AppBarCustom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {IconButton,Card, CardHeader,CardContent,CardActionArea,CardActions, Grid} from '@material-ui/core';
import clsx from 'clsx'

const drawerWidth = 240;
const useStyles =makeStyles(theme=>({
    root:{
        
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerPaper: {
        width: drawerWidth,
        flexShrink:0,
        
    },
    content: {
        flexGrow:1,
        padding: theme.spacing(10),
        transition:theme.transitions.create('margin',{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen
        }),
      },
    contentShif:{
        transition:theme.transitions.create('margin',{
            easing:theme.transitions.easing.easeOut,
            duration:theme.transitions.duration.enteringScreen
        }),
        marginRight:120
    },
    contentXsMode:{
        padding:10,
        paddingTop:80
    }
}))
const AdminPanel =()=>{
    const classes = useStyles();
    const [open , setOpen] = useState(false);
    const theme = useTheme();
    const isSMMode =useMediaQuery(theme.breakpoints.down('xs'));
    const widthOfWindow = window.innerWidth;

    const handleDrawerOpen = ()=>{
        setOpen(!open)
    }

    const handleDrawerClose =() =>{
        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <AppBarCustom openDrawer={handleDrawerOpen} openVal = {open}></AppBarCustom>
            <Drawer
                anchor="right"
                className={classes.drawerPaper}
                variant="persistent"
                open={open}>
                    <div className={classes.drawerHeader}>
                        
                        <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon /> 
                        </IconButton>
                    </div>
                    <Divider></Divider>
                    <List style={isSMMode?{width:widthOfWindow}:{width:'100%'}}>
                        <ListItem button key="Manage Roles"></ListItem>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Manage Roles" />
                            {['Manage Roles', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    
            </Drawer>
            <main 
            className={clsx(classes.content,"CardBody", {
                [classes.contentShif]: open}, {
                    [classes.contentXsMode]: isSMMode})}>
                    <div style={{direction:'rtl'}}>
                        <Grid container
                              style={{margin:'0 auto'}}
                              direction="row"
                              justify='ceenter'
                              alignItems='center'
                              xs={12}
                              sm={12}
                        >

                        <Card style={{width:'100%'}}>
                            <CardHeader
                                style={{backgroundColor:'#e91e63'}}
                                avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings" style={{backgroundColor:'#e91e63'}}>
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016">
                            </CardHeader>
                            <CardContent style={{width:'100%',marginTop:30}}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                        
                        </Grid>
                    </div>
            </main>
        </div>
    )
}

export default AdminPanel;