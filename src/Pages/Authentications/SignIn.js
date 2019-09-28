import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


export default function SignIn(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange =(event,newValue)=>{
        setValue(newValue);
    }
    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.root}>
                <CssBaseline></CssBaseline>
                <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper}>
                <AppBar position="static" color="default">
                    <Tabs 
                        value={value}
                        onChange={handleChange}
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                    >
                        <Tab label="Sign In" icon={<PhoneIcon></PhoneIcon>} style={{width:"50%"}}></Tab>
                        <Tab label="Sign Out" icon={<PhoneIcon></PhoneIcon>} style={{width:"50%"}}></Tab>
                    </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon></LockOutlinedIcon>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            ></TextField>
                            <TextField 
                                variant="outlined"
                                required
                                margin="normal"
                                security
                                fullWidth
                                id="password"
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
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant ="body2">
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
                        </form>
                    </div>
                    
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon></LockOutlinedIcon>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Out
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            ></TextField>
                            <TextField 
                                variant="outlined"
                                required
                                margin="normal"
                                security
                                fullWidth
                                id="password"
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
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant ="body2">
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
                        </form>
                    </div>             
                    </TabPanel>
                </Grid>
            </Grid>
        </div>
    )
    
}