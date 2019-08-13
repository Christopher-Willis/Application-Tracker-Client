import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import {Link } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  login:{
    color:"white"
  }
}));


function Nav(props){
  const classes = useStyles();
  return(
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Menu>
          <MenuItem >
            <Link  to="/">Home</Link>
          </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Application Tracker
          </Typography>
          <Link style={{ textDecoration: 'none' }} to="/account/login/">
            <Button className={classes.login} >Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;