import React from 'react';
import { FormattedMessage } from 'react-intl';
import hotels from '../data/hotels';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    grid: {
        padding: '20px',
        width: '100%',
        margin: '0 auto',
    },
    rank: {
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#C63A63',
        padding: '10px'
    },
    text: {
        paddingTop: '1em'
    },
    box: {
        backgroundColor: '#E3E3E3',
        padding: '13px 0px 10px 0px',
        margin: '20px 0px 50px 0px'
    },
    container1: {
        marginTop: '1em',
    },
    container2: {
        marginTop: '1em',
    },
    button: {
        marginBottom: '50px'
    }
  });

export default function Item(props) {

    const classes = useStyles();
    const { id } = props.match.params;
    const filtered = hotels.filter(hotel => hotel.id == id);

    return (
        <div className="center">
        <Grid container className={classes.grid} direction="column" justify="center" alignItems="center">
                <img className="responsive" src={filtered[0].image} alt="hotel" />
            <Grid container className={classes.container1} direction="column" justify="center" alignItems="center">
                <Typography variant="h5" gutterBottom>{filtered[0].name}</Typography>
                <Typography variant="subtitle1" gutterBottom>{filtered[0].city}</Typography>
            </Grid> 
            <Grid container className={classes.container2} direction="row" justify="space-around" alignItems="center">
            <Grid item lg={9} md={9} sm={9} xs={9}>
                <Typography variant="subtitle2" gutterBottom>{filtered[0].description}</Typography>
            </Grid> 
            <Grid item className={classes.item} lg={3} md={3} sm={3} xs={3} >
                <Avatar className={classes.rank} >
                 {filtered[0].rating}
                </Avatar>
                <Typography className={classes.text} variant="body2" gutterBottom>
                    <FormattedMessage id="home.rating" defaultMessage="Excellent"/>
                </Typography>
            </Grid>
            </Grid> 
                <Container className={classes.box} maxWidth="lg">
                <Typography variant="body1" gutterBottom>
                    <FormattedMessage id="home.price" defaultMessage="Starting from "/>
                    {filtered[0].price} euros!
                </Typography>
                </Container>
                <Button className={classes.button} variant="contained" color="secondary">
                    <FormattedMessage id="home.book" defaultMessage="Starting from "/>
                </Button>

        </Grid>
        </div>
    )
}
