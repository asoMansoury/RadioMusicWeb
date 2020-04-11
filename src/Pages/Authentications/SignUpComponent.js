import React from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SnackBarComponent from './../CommonComponents/SnackBarComponent';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import {BaseApiUrl} from './../../Common/Constant';
import axios from 'axios';
import {Validation} from './../../Common/Validation';
import commonUtility from './../../Common/utiliy';
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



export default function SignInComponent(props) {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette:green
    })

    const snackRef = React.useRef();
    const [emailValue,setEmail] = React.useState("")
    const [mobileValue,setMobile] = React.useState("+98")
    const [passwordValue,setPassword]= React.useState("")
    const [confirmPasswordValue,setConfirmPassword]= React.useState("")
    const [userNameValue,setUserName]= React.useState("")
    const [disableSignUpBtn,setDisableSignUpBtn]=React.useState(true)


    const checkMobileValid = () => {
        if(mobileValue!==""){
            if(Validation.checkMobile(mobileValue)===false){
                snackRef.current.showSnackBar("فرمت موبایل صحیح نمی باشد","error");
                setDisableSignUpBtn(true)
            }else{
                var data = {
                    Mobile: mobileValue,
                  };
                  axios.post(BaseApiUrl + '/UserApi/CheckMobile', data).then(res => {
                    if (res.data.isError === true) {
                      snackRef.current.showSnackBar(res.data.Errors.Message,"error");
                    } else {
                      if (res.data.isUserNameExist === true) {
                        snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"error");
                      } else {
                        snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"success");
                        checkDisableBtn();
                      }
                    }
                  });
                    
            }

        }
      };
    const  CheckUserName = () => {
        if(userNameValue!==''){
            var data = {
                userName: userNameValue,
              };
              axios.post(BaseApiUrl + '/UserApi/CheckUserName', data).then(res => {
                if (res.data.isError === true) {
                  snackRef.current.showSnackBar(res.data.Errors.Message,"error");
                } else {
                  if (res.data.isUserNameExist === true) {
                    snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"error");
                  } else {
                    snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"success");
                    checkDisableBtn();
                  }
                }
              });
                
        }
      };
    const checkEmailValid = () => {
        if(emailValue!==''){
            if(Validation.validEmail(emailValue)===false){
                snackRef.current.showSnackBar("فرمت ایمیل صحیح نمی باشد","error");
                setDisableSignUpBtn(true)
            }else{
                var data = {
                    email: emailValue,
                  };
                axios.post(BaseApiUrl + '/UserApi/CheckEmail', data).then(res => {
                    if (res.data.isError === true) {
                    snackRef.current.showSnackBar(res.data.Errors.Message,"error");
                    } else {
                    if (res.data.isUserNameExist === true) {
                        snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"error");
                    } else {
                        snackRef.current.showSnackBar(res.data.isUserNameExistMessage,"success");
                        checkDisableBtn();
                    }
                    }
                });
            }
            checkDisableBtn();  
        }
      };
    const checkConfirmPassword=()=>{
        if(passwordValue!==''&&confirmPasswordValue!==''){
            if(Validation.checkPassword(passwordValue,confirmPasswordValue)===false){
                snackRef.current.showSnackBar("پسورد به درستی وارد نشده است","error");
                setDisableSignUpBtn(true)
            }else{
                snackRef.current.showSnackBar("پسورد به درستی وارد شده است","success");
                checkDisableBtn(); 
            }
           
        }
    }

   const checkDisableBtn=()=>{
        if(
            emailValue === '' ||
            passwordValue === '' ||
            mobileValue === '' ||
            userNameValue === '' ||
            confirmPasswordValue === ''
          ) {
            setDisableSignUpBtn(true)
          }else{
            setDisableSignUpBtn(false)
          }
        
    }

    const SignUpEvent =(event)=>{
        var data = {
            email: emailValue,
            password: passwordValue,
            Mobile: mobileValue,
            userName: userNameValue,
          };
      
          if(
            data.email === '' ||
            data.password === '' ||
            data.Mobile === '' ||
            data.userName === '' ||
            confirmPasswordValue === ''
          ) {
            return;
          }
        
          axios
            .post(BaseApiUrl + '/UserApi/RegisterUser', data)
            .then(res => {
              if (res.data.isError === true) {
                snackRef.current.showSnackBar(res.data.Errors.Message,"error");
                // this.props.setUserLogging(false);
              } else {
                snackRef.current.showSnackBar( 'عملیات با موفقیت انجام گردید',"success");
      
                // const userInformation = {
                //   mobile: data.Mobile,
                //   userName: data.userName,
                //   email: data.email,
                // };
                // this.props.saveUserInformation(userInformation);
              }
            });
    }

    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <form className={classes.form} noValidate>
                <ThemeProvider theme={theme}>
                    <TextField
                        onBlur={(event)=>checkMobileValid()}
                        variant="standard"
                        required
                        margin="normal"
                        fullWidth
                        id="mobileReg"
                        label={commonUtility.getElementTitle("mobileReg")}
                        name="mobile"
                        autoComplete="mobile"
                        onChange={(event)=>setMobile(event.target.value)}
                        value={mobileValue}
                    ></TextField>
                    <TextField
                        onBlur={(event)=>CheckUserName()}
                        variant="standard"
                        required
                        margin="normal"
                        fullWidth
                        label={commonUtility.getElementTitle("usernameReg")}
                        id="usernameReg"
                        name="userName"
                        autoComplete="username"
                        onChange={(event)=>setUserName(event.target.value)}
                        value={userNameValue}
                    ></TextField>
                    <TextField
                        onBlur={(event)=>checkEmailValid()}
                        variant="standard"
                        required
                        margin="normal"
                        fullWidth
                        id="emailReg"
                        label={commonUtility.getElementTitle("emailReg")}
                        name="email"
                        autoComplete="email"
                        onChange={(event)=>setEmail(event.target.value)}
                        value={emailValue}
                    ></TextField>
                    <TextField 
                        variant="standard"
                        onBlur={(event)=>checkConfirmPassword(event.target.value)}
                        required
                        margin="normal"
                        security="true"
                        fullWidth
                        id="passwordReg"
                        label={commonUtility.getElementTitle("passwordReg")}
                        name="password"
                        onChange={(event)=>setPassword(event.target.value)}
                        autoComplete="current-password"
                        value={passwordValue}
                        >
                    </TextField>
                    <TextField 
                        variant="standard"
                        required
                        onBlur={(event)=>checkConfirmPassword(event.target.value)}
                        margin="normal"
                        security="true"
                        fullWidth
                        id="confirmPasswordReg"
                        label={commonUtility.getElementTitle("confirmPasswordReg")}
                        onChange={(event)=>setConfirmPassword(event.target.value)}
                        name="confirmPassword"
                        autoComplete="current-password"
                        value={confirmPasswordValue}
                        >
                    </TextField>
                </ThemeProvider>
                <Button
                disabled={disableSignUpBtn}
                    type="button"
                    fullWidth
                    id="btnRegister"
                    variant="contained"
                    className={classes.submit}
                    onClick={(event)=>SignUpEvent(event)}
                >
                    {commonUtility.getElementTitle("btnRegister")}
                </Button>
                {props.children}
            </form>
            <SnackBarComponent ref={snackRef}></SnackBarComponent>
    </div>   
    )
}