import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import CopyRight from './../CommonComponents/CopyRight';
import Link from '@material-ui/core/Link';

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
        return(
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon></LockOutlinedIcon>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        required
                        margin="normal"
                        fullWidth
                        id="RegEmail"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    ></TextField>
                    <TextField 
                        variant="outlined"
                        required
                        margin="normal"
                        security
                        fullWidth
                        id="RegPassword"
                        label = "Password"
                        name="password"
                        autoComplete="current-password">
                    </TextField>
                    <FormControlLabel
                        control={<Checkbox value="remember"  color="primary"></Checkbox>}
                        label="Remember me"
                    ></FormControlLabel>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    {props.children}
                </form>
        </div>   
        )
}