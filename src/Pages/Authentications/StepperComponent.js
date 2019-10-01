import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles(theme=>({
    button:{
        marginRight:theme.spacing(1)
    },
    stepper:{
        padding:'1px'
    },
    buttons:{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding:'20px',
        paddingBottom:'4rem'
    }
}));

function getSteps() {
    return ['Inser Your Email', 'Create an ad group', 'Create an ad'];
}

export default function StepperComponent(){
    const steps = getSteps();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const [skipped, setSkipped] = React.useState(0);
    const [isCompleted,setIsCompleted] =React.useState(0);

    
    const handleNext = () => {
        if(isCompleted<3){
            setIsCompleted(isCompleted+1)
        }
        if(isCompleted>0)
            setSkipped(0);
        else
            setSkipped(1);
        };

    return(
        <div>
            <Stepper activeStep={isCompleted} className={classes.stepper}>
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
            <div className={classes.buttons}>
                <Typography>This is</Typography>
                <div>
                    <Button disabled={activeStep}>Back</Button>
                    {/* <Button className={classes.button} style={skipped==0?{display:'none'}:{display:'absolute'}} variant="contained" color="primary">Skip</Button> */}
                    <Button className={classes.button} variant="contained" color="primary" onClick={handleNext}>Next</Button>
                </div>
            </div>
        </div>
    )
}
