import React from 'react';
import { FormattedMessage } from 'react-intl';
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

    const { handleClick } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>
              <FormattedMessage id="home.title" defaultMessage="Hotel"/>
              </Link>
              </Typography>
              <Button color="inherit" onClick={() => handleClick('en')}>EN</Button>
              <Button color="inherit" onClick={() => handleClick('es')}>SP</Button>
            </Toolbar>
          </AppBar> 
        </div>
    )
}
