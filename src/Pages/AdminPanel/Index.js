/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import AppBarCustom from './Components/AppBarCustom';
import Drawer from '@material-ui/core/Drawer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {IconButton,Card, CardHeader,CardContent, Grid} from '@material-ui/core';
import clsx from 'clsx';
import ManageRoles from './Components/ManageRoles';
import {connect} from 'react-redux';
import {isUserLogin,saveUserInformation} from './../../Redux/actions/actionType'
import {Redirect} from 'react-router-dom';
import {BaseApiUrl,PlatformType} from './../../Common/Constant';
import SideBarComponent from './SideBar/SideBarData';
import AdminPanelContext from '../Context/AdminPanelContext';
import axios from 'axios';

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
        const [menuItems,setMenuItems] = useState([]);
        const [width, setWidth] = React.useState(window.innerWidth);
        const handleDrawerOpen = ()=>{
            setOpen(!open)
        }

        React.useEffect(()=>{
            axios.post(BaseApiUrl+"/ControllersApi/GetMenus",{},
            {
                headers: { 
                    PlatformType: PlatformType, 
                    TLanguageCode:props.configApp.TLanguageID,
                    WebToken:props.userInformation.WebToken
                }})
                .then(response=>{
                    console.log("reponse: ",response.data);
                    setMenuItems(response.data);
                }).catch((error)=>{
                    console.log(error);
            })
            window.addEventListener('resize',updateWidthAndHeight);
            return () => window.removeEventListener("resize", updateWidthAndHeight);
        },[])
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
                                <SideBarComponent menuItems={menuItems} width={width} isSMMode={isSMMode} setOpen={setOpen}></SideBarComponent>
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
                                                            <ManageRoles {...props}></ManageRoles>
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
        isLoaded:state._persist.rehydrated,
        configApp: state.configApp,
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
