import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Navbar(props) {

    const { handleClick, language } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
                { language === 'en' ? 'Hotels' : 'Hoteles'}
              </Link>
              </Typography>
              <Button color="inherit" onClick={() => handleClick('en')}>EN</Button>
              <Button color="inherit" onClick={() => handleClick('es')}>SP</Button>
            </Toolbar>
          </AppBar> 
        </div>
    )
}
