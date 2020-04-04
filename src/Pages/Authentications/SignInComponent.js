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
import commonUtility from './../../Common/utiliy';
import {connect} from 'react-redux';
import {saveUserInformation,isUserLogin} from './../../Redux/actions/actionType';
import { Redirect} from 'react-router-dom';
import {Validation} from './../../Common/Validation';
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
    const [emailIsValid,setEmailIsValid]= React.useState(true);
    const [passwordIsValid,setPasswordIsValid]= React.useState(true);
    const handleEmailText= (value)=>{
        setEmail(value)

        if(Validation.validEmail(value)===false){
            setEmailIsValid(true)
        }else{
            setEmailIsValid(false)
        }
        handleDisableSignInBtn(value,passwordValue)
    }


    const handlePasswordTxt = (value)=>{
        setPassword(value)
        if(value!=''){
            setPasswordIsValid(false)
        }else{
            setPasswordIsValid(true)
        }
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
    if(props.isLoaded==false){
        return <div style={{backgroundColor:'black',height:2000,width:2000}}>loading ...</div>
    }else{
    if(props.isUserLoggedIn){
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
                    id="emailSignIn"
                    label={commonUtility.getElementTitle("emailSignIn")}
                    name="email"
                    autoComplete="email"
                    error={emailIsValid}
                    value={emailValue}
                    autoFocus
                ></TextField>
                <TextField 
                    variant="standard"
                    required
                    margin="normal"
                    security="true"
                    fullWidth
                    error={passwordIsValid}
                    value={passwordValue}
                    onChange={(event)=>handlePasswordTxt(event.target.value)}
                    id="passwordSignIn"
                    label={commonUtility.getElementTitle("passwordSignIn")}
                    name="password"
                    autoComplete="current-password">
                </TextField>
                <FormControlLabel id="chkRememberMe"
                    control={<Checkbox onChange={handleRememberMe}  checked={rememberMeValue} ></Checkbox>}
                    label={commonUtility.getElementTitle("chkRememberMe")} style={{color:'black'}}
                ></FormControlLabel>
                <Button
                    type="button"
                    fullWidth
                    id="btnLogin"
                    disabled={isDisableSignInBtn}
                    variant="contained"
                    onClick={signInEvent(snackRef)}
                    className={classes.submit}>
                    {commonUtility.getElementTitle("btnLogin")}
                </Button>
                    {props.children}
            </form>
            <SnackBarComponent ref={snackRef}></SnackBarComponent>
    </div>   
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

export default  connect(mapStateToProps,mapDispatchToProps)(SignInComponent);