import React,{useRef,useImperativeHandle,forwardRef} from 'react';
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

const useStyles = makeStyles(theme =>({
    root:{
        height:'100vh'
    },
    paper:{
       margin:theme.spacing(8,4) ,
       display:'flex',
       flexDirection:'column',
       alignItems:'center'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    image:{
        backgroundImage:'url(https://source.unsplash.com/random)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
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




const  SignIn=()=>{
    const myRef = React.createRef();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const handleChange =(event,newValue)=>{
        setValue(newValue);
    }

    const isSMMode =useMediaQuery(theme.breakpoints.down('sm'));
    const [isShowModal,setIsShowModal] = React.useState(false);
    const  handleClickModal =()=>{
        setIsShowModal(true);
    }

    const  handleCloseModal =()=>{
        setIsShowModal(false);
    }
    

    
    
    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.root}>
            <ForgotPassword  ref={myRef} isSm={isSMMode} isShowModal={isShowModal} setIshoShowModal={handleCloseModal}></ForgotPassword>
                <CssBaseline></CssBaseline>
                <Grid item xs={false} sm={4} md={6} className={classes.image}></Grid>
                <Grid item xs={12} sm={8} md={6} component={Paper}>
                    <AppBar position="static" color="default">
                            <Tabs 
                                value={value}
                                onChange={handleChange}
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                                aria-label="scrollable force tabs example">
                                <Tab label="Sign In" icon={<SignInIcon></SignInIcon>} style={{width:"50%"}}></Tab>
                                <Tab label="Sign UP" icon={<SignUpIcon></SignUpIcon>} style={{width:"50%"}}></Tab>
                            </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <SingInComponent>
                                <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant ="body2" onClick={handleClickModal}> 
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant ="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                        </SingInComponent>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SingUpComponent>
                        <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant ="body2" onClick={handleClickModal}>
                                    Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant ="body2">
                                        {"Don't have an account? Sign Up"}
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
        </div>
    )
    
}

export default  SignIn;