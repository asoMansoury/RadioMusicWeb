import React from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import {InboxOutlined } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {IconButton} from '@material-ui/core';

 const sideBarComponent=(props)  =>{



    const handleDrawerClose =() =>{
        props.setOpen(false);
    }
    console.log(props.menuItems)
    return (
        <div>
            <div >
                <IconButton onClick={handleDrawerClose} className="cheverlotIcon" >
                        <ChevronRight style={{color:'rgba(0, 0, 0, 0.54) !important'}} /> 
                </IconButton>
            </div>
            <Divider></Divider>
            <List style={props.isSMMode?{width:props.width}:{width:'100%'}}>
                    {props.menuItems.map((data,index) => (
                    <ListItem button key={data.ID}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxOutlined /> : <InboxOutlined />}</ListItemIcon>
                    <ListItemText primary={data.ControllerName} />
                    </ListItem>
                ))}
            </List>
            <Divider></Divider>
        </div>
    )
}

export default sideBarComponent;