/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {useTheme} from '@material-ui/core/styles'
import SignInIcon from '@material-ui/icons/VpnKey';
import SignUpIcon from '@material-ui/icons/AccountBox';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SingInComponent from './SignInComponent';
import SingUpComponent from './SignUpComponent';
import ForgotPassword from './ForgotPassword';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Copyright from './../CommonComponents/CopyRight';
import Link from '@material-ui/core/Link';
import Settings from '@material-ui/icons/Settings';
import {connect} from 'react-redux';
import {setLanguage,setFilterLanguage} from './../../Redux/actions/actionType';
import commonUtility from './../../Common/utiliy';
import {BaseApiUrl, TLanguageID} from './../../Common/Constant';
import 'react-tiny-fab/dist/styles.css';
import { Fab, Action } from 'react-tiny-fab';
import axios from 'axios';
const useStyles = makeStyles(theme =>({
    root:{
        minHeight:'150vh'
    },
    paper:{
       margin:theme.spacing(8,4) ,
       display:'flex',
       flexDirection:'column',
       alignItems:'center'

    },
    signInStyle:{
        // minHeight: '130vh'
    },
    signUpStyle:{
        // minHeight: '130vh'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    image:{
        backgroundImage:'url(https://source.unsplash.com/random)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(1)
    },
    submit:{
        margin: theme.spacing(3, 0, 2),
    }
}));



function TabPanel(props){
    const {children,value,index,...other} = props;

   return <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`scrollable-force-tabpanel-${index}`}
    aria-labelledby={`scrollable-force-tab-${index}`}
    {...other}
  >
    <Box p={3}>{children}</Box>
  </Typography>
}




const  SignIn=(props)=>{
            const classes = useStyles();
            const [value, setValue] = React.useState(0);
            const theme = useTheme();
            const handleChange =(event,newValue)=>{
                setValue(newValue);
            }
        
            
            const isSMMode =useMediaQuery(theme.breakpoints.down('sm'));
            const [isShowModal,setIsShowModal] = React.useState(false);
            const [languageHook,setLanguageHook] = React.useState([]);
            const  handleClickModal =()=>{
                setIsShowModal(true);
            }
        
            const  handleCloseModal =()=>{
                setIsShowModal(false);
            }

            React.useEffect(()=>{
                axios.get(BaseApiUrl + '/LanguageApi/GetLanguages').then(res => {
                    if(res.data.isError==true){
                    }else{
                        setLanguageHook(res.data.TLanguages);
                    }
                })
                commonUtility.setTLanguageCode(props.configApp.TLanguageID);
                commonUtility.setUIErrorMessages(props.configApp.TLanguageID)
                props.setFilterLanguage({Key:'Authentication',TLanguageID:props.configApp.TLanguageID})
            }, [])
            
            return (
                <div className={classes.root}>
                    <Grid container component='main' className={classes.root} id='headrTab'>
                        <ForgotPassword  isSm={isSMMode} isShowModal={isShowModal} setIshoShowModal={handleCloseModal}></ForgotPassword>
                        <CssBaseline></CssBaseline>
                        <Grid item xs={false} sm={4} md={6} className={classes.image}></Grid>
                        <Grid item xs={12} sm={8} md={6} component={Paper}>
                            <AppBar position="static" color="default">
                                    <Tabs 
                                        value={value}
                                        onChange={handleChange}
                                        scrollButtons="on"
                                        indicatorColor="secondary"
                                        textColor="primary"
                                        aria-label="scrollable force tabs example">
                                        <Tab id="SignInTab" label={commonUtility.getElementTitle("SignInTab")} icon={<SignInIcon></SignInIcon>} style={{maxWidth:'100%',width:"50%"}}></Tab>
                                        <Tab id="SignUpTab" label={commonUtility.getElementTitle("SignUpTab")} icon={<SignUpIcon></SignUpIcon>} style={{maxWidth:'100%',width:"50%"}}></Tab>
                                    </Tabs>
                            </AppBar>
                            <TabPanel className={classes.signInStyle} value={value} index={0} >
                                <SingInComponent >
                                        <Grid container>
                                            <Grid item xs>
                                                <Link href="/Authentication#" variant ="body2" id="forgotPasswordLnk" onClick={handleClickModal}> 
                                                {commonUtility.getElementTitle("forgotPasswordLnk")}
                                                </Link>
                                            </Grid>
                                            <Grid item>
                                                <Link href="#" variant ="body2" id="DontHaveAccountLnk">
                                                    {commonUtility.getElementTitle("DontHaveAccountLnk")}
                                                </Link>
                                            </Grid>
                                        </Grid>
                                        <Box mt={5}>
                                            <Copyright />
                                        </Box>
                                </SingInComponent>
                            </TabPanel>
                            <TabPanel className={classes.signUpStyle} value={value} index={1} >
                                <SingUpComponent >
                                    <Grid container>
                                        <Grid item xs>
                                            <Link id="forgotPasswordLnk" href="/Authentication#" variant ="body2" onClick={handleClickModal}>
                                            {commonUtility.getElementTitle("forgotPasswordLnk")}
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant ="body2" id="DontHaveAccountLnk">
                                                {commonUtility.getElementTitle("DontHaveAccountLnk")}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                        <Box mt={5}>
                                            <Copyright />
                                        </Box>   
                                 </SingUpComponent>           
                            </TabPanel>
                        </Grid>
                    </Grid>
                    <Fab
                        mainButtonStyles={{backgroundColor:'red'}}
                        actionButtonStyles={{backgroundColor:'black'}}
                        icon={<Settings></Settings>}>
                            {
                                languageHook.map(function(item,i){
                                    return <Action
                                    text={item.Language}
                                    style={{backgroundColor:'#f50057'}}
                                    onClick={()=>{
                                        props.setLanguageRedux(item.LanguageCode);
                                        props.setFilterLanguage({TLanguageID:item.LanguageCode,Key:'Authentication'});
                                        commonUtility.setTLanguageCode(item.LanguageCode);
                                        commonUtility.setUIErrorMessages(item.LanguageCode)
                                    }}
                                        
                                />
                                })
                            }
                    </Fab>
                </div>
            )
        
        
    }

const mapStateToProps = state => {
    return {
        configApp: state.configApp,
        isLoaded:state._persist.rehydrated
    };
};
      
const mapDispatchToProps = dispath => {
    return {
        setLanguageRedux:value=>{
            dispath(setLanguage(value))
        },
        setFilterLanguage:value=>{
            var data = {
                TLanguageID: value.TLanguageID,
                Key: value.Key,
                PlatformType:5
            }
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": true,
                    "Access-Control-Allow-Credentials": true,
                }
            };
            axios.post(BaseApiUrl + '/FrontEndApi/inqueryPage', data)
            .then(res => {
              if (res.data.isError === true) {
                dispath(setFilterLanguage(null))
              } else {
                commonUtility.setElements(res.data.FronEndPages)
                dispath(setFilterLanguage(res.data.FronEndPages))
              }
            }).catch(function(error){
                console.log("inquery",error);
            });  
        }
    };
}

export default  connect(mapStateToProps,mapDispatchToProps)(SignIn);