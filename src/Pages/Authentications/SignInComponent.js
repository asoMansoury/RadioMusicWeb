/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import {BaseApiUrl} from './../../Common/Constant';
import SnackBarComponent from './../CommonComponents/SnackBarComponent';
import {connect} from 'react-redux';
import {saveUserInformation,isUserLogin} from './../../Redux/actions/actionType';
import { Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme =>({
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
    form:{
        width:'100%',
        marginTop:theme.spacing(1)
    },
    submit:{
        margin: theme.spacing(3, 0, 2),
    }
}));



function SignInComponent(props) {
    const snackRef = React.useRef();
    const [emailValue,setEmail] = React.useState("")
    const [passwordValue,setPassword]= React.useState("")
    const handleEmailText= (value)=>{
        setEmail(value)
        handleDisableSignInBtn(value,passwordValue)
    }


    const handlePasswordTxt = (value)=>{
        setPassword(value)
        handleDisableSignInBtn(emailValue,value)
    }

    const [rememberMeValue,setRememberMeValue] = React.useState(false)
    const handleRememberMe = ()=>{
        setRememberMeValue(!rememberMeValue)
    }

    const [isDisableSignInBtn,setIsDisableSignInBtn] = React.useState(true)
    const handleDisableSignInBtn = (email,password)=>{
        if(email!=''&&password!='')
            setIsDisableSignInBtn(false)
        else
            setIsDisableSignInBtn(true)
    }

    const signInEvent = (childRef) =>()=>{
        var data = {
            email: emailValue,
            password: passwordValue,
            isRemember:rememberMeValue
          };
        axios.post(BaseApiUrl + '/UserApi/Login', data).then(res => {
            if(res.data.isError==true){
                childRef.current.showSnackBar(res.data.Errors.Message,"error");
            }else{
                var userInfo = {
                    mobile:res.data.Mobile,
                    userName:res.data.userName,
                    email:res.data.email
                }
                props.setUserLogin(true);
                props.saveUserInformation(userInfo);
            }
        });
    }

    
    const classes = useStyles();
    if(props.isUserLoggedIn){
    // if(isUserLoggedIn){
       return <Redirect to="/AdminPanel"></Redirect>
    }else
    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="standard"
                    required
                    margin="normal"
                    fullWidth
                    onChange={(event)=>handleEmailText(event.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={emailValue}
                    autoFocus
                ></TextField>
                <TextField 
                    variant="standard"
                    required
                    margin="normal"
                    security="true"
                    fullWidth
                    value={passwordValue}
                    onChange={(event)=>handlePasswordTxt(event.target.value)}
                    id="password"
                    label = "Password"
                    name="password"
                    autoComplete="current-password">
                </TextField>
                <FormControlLabel
                    control={<Checkbox onChange={handleRememberMe}  checked={rememberMeValue} ></Checkbox>}
                    label="Remember me" style={{color:'black'}}
                ></FormControlLabel>
                <Button
                    type="button"
                    fullWidth
                    disabled={isDisableSignInBtn}
                    variant="contained"
                    onClick={signInEvent(snackRef)}
                    className={classes.submit}>
                    Sign In
                </Button>
                    {props.children}
            </form>
            <SnackBarComponent ref={snackRef}></SnackBarComponent>
    </div>   
    )
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.UserIsLogin.isUserLoggedIn,
      userInformation:state.UserIsLogin.userInformation
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

export default  connect(mapStateToProps,mapDispatchToProps)(SignInComponent);