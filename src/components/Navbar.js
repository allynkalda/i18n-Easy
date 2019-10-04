import React from 'react';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props) {

    const { handleClick, language, history } = props;
    const classes = useStyles();
    const pushPage = (lang) => {
      history.push(`/${lang}`);
    }

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                {language === 'en' ? 'Hotels' : 'Hoteles'}
              </Typography>
              <Button color="inherit" onClick={() => {pushPage('en'); handleClick('en')}}>EN</Button>
              <Button color="inherit" onClick={() => {pushPage('es'); handleClick('es');}}>ES</Button>
            </Toolbar>
          </AppBar> 
        </div>
    )
}

export default compose(
  withRouter,
)(Navbar);