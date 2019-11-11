import React,{useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { async } from 'q';

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
    return ['Email', 'Send', 'Confirm'];
}

export default function StepperComponent(){
    const steps = getSteps();
    const classes = useStyles();
    const [activeBack, setActiveBack] = useState(1);
    const [isCompleted,setIsCompleted] =useState(0);
    const [currentStep,setCurrentStep] = useState(0);
    

    const handleNext = () => {
        let data = isCompleted;
        if(isCompleted<3){
             data = isCompleted+1;
            setIsCompleted(data);
        }

        if(data>0)
            setActiveBack(0);
        else
            setActiveBack(1);
        setCurrentStep(data);

        };

    const handleBack = ()=>{
        let data = isCompleted;
        if(data>0){
            data= isCompleted-1;
            setIsCompleted(data);
        }

        if(data==0)
            setActiveBack(1);
        setCurrentStep(data);

    }

    

    return(
        <div>
            <Grid container component='stepper' wrap='wrap'>
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
                    <Grid item xs={12} sm={12} md={12} lg={12} style={currentStep==0?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    margin='normal'
                                    width="50%"
                                    id="forgotEmail"
                                    label="Email Address"
                            ></TextField>
                        </form>
                    </Grid>
                    <Grid item xs={12} style={{display:'none'}} style={currentStep==1?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <div>
                                <Typography>
                                        We Send Confirmation Code To You'r Email Please Enter It On This Text
                                </Typography>
                            </div>
                            <div>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    margin="normal"
                                    id="confirmCode"
                                    label="Confirm Code"
                                ></TextField>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} style={{display:'none'}} style={currentStep==2?{display:'block'}:{display:'none'}}>
                        <form className={classes.form}>
                            <div>
                                <Typography>
                                        You Password Reseted
                                </Typography>
                            </div>
                            <div>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs={12} style={{marginBottom:'40px',bottom:0,position:'absolute'}}>
                            <Typography>This is</Typography>
                            <div>
                                <Button disabled={activeBack} onClick={handleBack}>Back</Button>
                                {/* <Button className={classes.button} style={skipped==0?{display:'none'}:{display:'absolute'}} variant="contained" color="primary">Skip</Button> */}
                                <Button className={classes.button} variant="contained" color="primary" onClick={handleNext}>Next</Button>
                            </div>
                    </Grid>
                </Grid>
        </div>
    )
}
