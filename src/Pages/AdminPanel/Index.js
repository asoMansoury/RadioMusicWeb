import React, { useState } from 'react';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import AppBarCustom from './Components/AppBarCustom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx'

const drawerWidth = 240;
const useStyles =makeStyles(theme=>({
    root:{
        
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerPaper: {
        width: drawerWidth,
        flexShrink:0,
        
    },
    content: {
        flexGrow:1,
        padding: theme.spacing(10),
        transition:theme.transitions.create('margin',{
            easing:theme.transitions.easing.sharp,
            duration:theme.transitions.duration.leavingScreen
        }),
        marginRight:'-40px'
      },
    contentShif:{
        transition:theme.transitions.create('margin',{
            easing:theme.transitions.easing.easeOut,
            duration:theme.transitions.duration.enteringScreen
        }),
        marginRight:120
    }
}))
const AdminPanel =()=>{
    const classes = useStyles();
    const [open , setOpen] = useState(false);
    const theme = useTheme();
    const isSMMode =useMediaQuery(theme.breakpoints.down('xs'));
    const widthOfWindow = window.innerWidth;

    const handleDrawerOpen = ()=>{
        setOpen(!open)
    }

    const handleDrawerClose =() =>{
        setOpen(false);
    }

    return(
        <div className={classes.root}>
            <AppBarCustom openDrawer={handleDrawerOpen} openVal = {open}></AppBarCustom>
            <Drawer
                anchor="right"
                className={classes.drawerPaper}
                variant="persistent"
                open={open}>
                    <div className={classes.drawerHeader}>
                        
                        <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon /> 
                        </IconButton>
                    </div>
                    <Divider></Divider>
                    <List style={isSMMode?{width:widthOfWindow}:{width:'100%'}}>
                        <ListItem button key="Manage Roles"></ListItem>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary="Manage Roles" />
                            {['Manage Roles', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    
            </Drawer>
            <main 
            className={clsx(classes.content, {
                [classes.contentShif]: open})}>
                    <div>
                        <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography>
                    </div>
            </main>
        </div>
    )
}

export default AdminPanel;