/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import AppBarCustom from './Components/AppBarCustom';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
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
import './../../Pages/Styles/commonStyles.css';
import {IconButton,Card, CardHeader,CardContent, Grid} from '@material-ui/core';
import clsx from 'clsx';
import ManageRoles from './Components/ManageRoles';
import {connect} from 'react-redux';
import {isUserLogin,saveUserInformation} from './../../Redux/actions/actionType'
import {Redirect} from 'react-router-dom';

//Import Contexts
import AdminPanelContext from '../Context/AdminPanelContext';


const drawerWidth = 240;
const useStyles =makeStyles(theme=>({
    root:{
        
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
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


const AdminPanel =(props)=>{

    if(props.isLoaded===false){
        return <div>helloooooooooooooooooo</div>
    }else
    {
        const classes = useStyles();
        const [open , setOpen] = useState(false);
        const theme = useTheme();
        const isSMMode =useMediaQuery(theme.breakpoints.down('xs'));
        
        const [width, setWidth] = React.useState(window.innerWidth);
        const handleDrawerOpen = ()=>{
            setOpen(!open)
        }

        const handleDrawerClose =() =>{
            setOpen(false);
        }

        React.useEffect(()=>{
            window.addEventListener('resize',updateWidthAndHeight);
            return () => window.removeEventListener("resize", updateWidthAndHeight);
        })
        const updateWidthAndHeight = () => {
            setWidth(window.innerWidth);
        };
        if(props.isUserLoggedIn===false){
            return <Redirect to="/Authentication"></Redirect>
        }else
        return(
            <AdminPanelContext.Provider value={{
                isSMMode:isSMMode,
                userInformation:props.userInformation,
                setUserLogin:props.setUserLogin,
                saveUserInformation:props.saveUserInformation
                }}>
                    <div className={classes.root} >
                        <AppBarCustom openDrawer={handleDrawerOpen} openVal = {open} userInformation={props.userInformation}></AppBarCustom>
                        <Drawer
                            anchor="right"
                            className={classes.drawerPaper}
                            variant="persistent"
                            open={open}>
                                <div className={classes.drawerHeader}>
                                    
                                    <IconButton onClick={handleDrawerClose} style={{background:"red"}}>
                                            <ChevronRight /> 
                                    </IconButton>
                                </div>
                                <Divider></Divider>
                                <List style={isSMMode?{width:width}:{width:'100%'}}>
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
                                        justify='center'
                                        alignItems='center'>
                                            <Grid item  xs={12} sm={12}>
                                                <Card style={{width:'100%'}}>
                                                    <CardHeader
                                                        style={{backgroundColor:'#3f51b5',fontFamily:'titleFonts'}}
                                                        avatar={
                                                            <Avatar aria-label="recipe">
                                                                AD
                                                            </Avatar>
                                                        }
                                                        action={
                                                            <IconButton aria-label="settings" style={{backgroundColor:'#3f51b5'}}>
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                        }
                                                        title="مدیریت نقش ها"
                                                        // subheader="September 14, 2016"
                                                        >
                                                    </CardHeader>
                                                        <CardContent style={{width:'100%',marginTop:30}}>
                                                            <ManageRoles></ManageRoles>
                                                        </CardContent>
                                                </Card>
                                            </Grid>   
                                    </Grid>
                                </div>
                        </main>
                    </div>           
            </AdminPanelContext.Provider>
        )        
    }
}


const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.UserIsLogin.isUserLoggedIn,
        userInformation:state.UserIsLogin.userInformation,
        isLoaded:state._persist.rehydrated
    };
  };
  
  const mapDispatchToProps = dispath => {
    return {
        setUserLogin:value=>{
            dispath(isUserLogin(value))
        },
        saveUserInformation:value=>{
            dispath(saveUserInformation(value))
        }
    };
  };

export default  connect(mapStateToProps,mapDispatchToProps)(AdminPanel);
