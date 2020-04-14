import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SnackBarComponent from './../CommonComponents/SnackBarComponent';
import {Validation} from './../../Common/Validation';
import {BaseApiUrl,UIErrorMessageCode} from './../../Common/Constant';
import commonUtility from './../../Common/utiliy';

import axios from 'axios';

const useStyles = makeStyles(theme=>({
    button:{
        marginRight:theme.spacing(1)
    },
    stepper:{
        padding:'0px'
    },
    buttons:{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding:'20px',
        paddingBottom:'4rem'
    },
    textInputs:{
        position: 'fixed',
        width: '100%',
        padding:'20px',
        paddingTop:'9rem'
    },
    form:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function getSteps() {
    return ['Send', 'Confirm', 'Reset'];
}

export default function StepperComponent(props){
    const snackRef = React.useRef();
    const steps = getSteps();
    const classes = useStyles();
    const [activeBack, setActiveBack] = useState(1);
    const [isCompleted,setIsCompleted] =useState(0);
    const [currentStep,setCurrentStep] = useState(0);
    const [activeNext,setActiveNext] = useState(0);
    const [mobileValue,setMobileValue]=useState("+98")
    const [confirmValue,setConfirmValue]=useState("")
    const [passwordValue,setPasswordValue]=useState("")

    const handleNext = () => 
    {  
        if(currentStep===0){
            SendVerificationCode()
        }else if(currentStep===1){
            CheckConfirmationCode()
        }else if(currentStep===2){
            ResetPassword()
        }

    };

    const ResetPassword =()=>{
        if(passwordValue!=="")
        {
            var data = {
                callNumber: mobileValue,
                confirmationCode: confirmValue,
                password: passwordValue,
                TLID:commonUtility.TLanguageCode
              };
            axios
              .post(BaseApiUrl + '/MessageApi/ResetPassword', data)
            .then(res => {
              if (res.data.isError === true) {
                snackRef.current.showSnackBar(res.data.Errors.Message,"error");
              } else {
                snackRef.current.showSnackBar(res.data.Errors.Message,"success");
                handleOperation();
              }
            })
            .catch(error => {
              snackRef.current.showSnackBar(error,"error");
            });   
        }
        else{
            snackRef.current.showSnackBar(commonUtility.getUIErrorMessagesByCode(UIErrorMessageCode.PasswordMustInputted),"error");
        } 
    }

    const CheckConfirmationCode =()=>{
        if(confirmValue!=="")
        {
            var data = {
                callNumber: mobileValue,
                confirmationCode: confirmValue,
                TLID:commonUtility.TLanguageCode
              };
              axios
              .post(BaseApiUrl + '/MessageApi/ConfirmVerificationCode', data)
            .then(res => {
              if (res.data.isError === true) {
                snackRef.current.showSnackBar(res.data.Errors.Message,"error");
              } else {
                handleOperation();
              }
            })
            .catch(error => {
              snackRef.current.showSnackBar(error,"error");
            });   
        }
        else{
            snackRef.current.showSnackBar(UIErrorMessageCode.InputConfirmationCode,"error");
        } 
    }
    const SendVerificationCode =()=>{
        if(Validation.checkMobile(mobileValue)===true)
        {
            axios.get(BaseApiUrl +'/MessageApi/SendVerificationCode?callNumber=/' +mobileValue+'&TLID='+commonUtility.TLanguageCode)
            .then(res => {
              if (res.data.isError === true) {
                snackRef.current.showSnackBar(res.data.Errors.Message,"error");
              } else {
                handleOperation();
              }
            })
            .catch(error => {
              snackRef.current.showSnackBar(error,"error");
            });   
        }
        else{
            snackRef.current.showSnackBar(commonUtility.getUIErrorMessagesByCode(UIErrorMessageCode.MobileFormat),"error");
        } 
    }
    const handleOperation =()=>{
        let data = isCompleted;
        if(currentStep===2)
            setActiveNext(1)
        if(isCompleted<3){
             data = isCompleted+1;
             setIsCompleted(data);   
        }

        if(data>0)
            setActiveBack(0);
        else
            setActiveBack(1);
        setCurrentStep(data);

        if(currentStep>1){
            setActiveBack(0)
            props.setIshoShowModal(0);
            setActiveBack(1);
            setIsCompleted(0);
            setActiveNext(0);
            setCurrentStep(0);
        }
    }
    const handleBack = ()=>{
        
        let data = isCompleted;
        if(data>0){
            data= isCompleted-1;
            setIsCompleted(data);
        }

        if(data===0)
            setActiveBack(1);
        setCurrentStep(data);
        if(data<2)
            setActiveNext(0)

    }
    return(
        <div>
            <Grid container component='stepper' wrap='wrap' style={{marginleft: '-30px !important'}}>
                <Grid item xs={8} sm={12} md={12}>
                    <Stepper component='stepperContent' activeStep={isCompleted} className={classes.stepper}>
                        {
                            steps.map((label,index)=>{
                                return (
                                    <Step key={index}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>
                </Grid>
            </Grid>
            <Grid  container component='dataInputs' direction='column'style={{marginTop:'40px'}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={currentStep===0?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    margin='normal'
                                    onChange={(e)=>setMobileValue(e.target.value)}
                                    width="50%"
                                    value={mobileValue}
                                    id="mobileReset"
                                    label='Mobile'
                            ></TextField>
                        </form>
                    </Grid>
                    <Grid item xs={12}  style={currentStep===1?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <div>
                                <Typography id="typoGraphySendCode">
                                        We Send Confirmation Code To You'r Email Please Enter It On This Text
                                </Typography>
                            </div>
                            <div>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    value={confirmValue}
                                    onChange={(e)=>setConfirmValue(e.target.value)}
                                    id="confirmCodeReset"
                                    label="Confirm Code"
                                ></TextField>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12}  style={currentStep===2?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <div>
                                <Typography id="typoGraphyDone">
                                        Your Password Reseted
                                </Typography>
                            </div>
                            <div>
                            <form className={classes.form}>
                                <TextField
                                        variant="standard"
                                        required
                                        fullWidth
                                        margin='normal'
                                        onChange={(e)=>setPasswordValue(e.target.value)}
                                        width="50%"
                                        value={passwordValue}
                                        id="passwordReset"
                                        label='Password'
                                ></TextField>
                            </form>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} style={{bottom:0}}>
                            <Typography>This is</Typography>
                            <div>
                                <Button disabled={activeBack} id="btnBackRes" onClick={handleBack}>Back</Button>
                                <Button disabled={activeNext} className={classes.button} id="btnNextRes" variant="contained" color="primary" onClick={handleNext}  >{currentStep>=2?'OK':'Next'}</Button>
                            </div>
                    </Grid>
                </Grid>
                <SnackBarComponent ref={snackRef}></SnackBarComponent>
        </div>
    )
}
