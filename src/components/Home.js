import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import hotels from '../data/hotels';

const useStyles = makeStyles({
    grid: {
        padding: '10px'
      },
    container: {
        paddingTop: '20px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    },
    rank: {
        margin: '10',
        color: '#fff',
        backgroundColor: '#C63A63'
    },
    box: {
        display: 'flex',
    },
    inner: {
        flexDirection: 'row'
    },
    price: {
        backgroundColor: 'pink',
        borderRadius: '10px',
        marginTop: '2em'
    },
    text: {
        padding: '1em 0em .8em 0em',
    }
  });

function Home(props) {

    const classes = useStyles();
    const { language } = props;

    const renderGrid = (hotel) => {
        return (
            <Grid item className={classes.grid} xl={4} lg={4} md={4} sm={6} xs={12} >
            <Link style={{ textDecoration: 'none' }} to={`/${language}/` + `${hotel.id}`}>
            <Card>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={hotel.image}
                    title={hotel.name}
                />
                <CardContent>
                <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item direction="column" justify="center" alignItems="center">
                <Typography variant="subtitle1" gutterBottom>{hotel.name}</Typography>
                <Typography variant="subtitle2" gutterBottom>{hotel.city}</Typography>
                </Grid>
                <Avatar className={classes.rank} >
                 {hotel.rating}
                </Avatar>
                </Grid>
                <Grid className={classes.price} container justify="center" alignItems="center">
                <Typography className={classes.text} variant="button" display="block" gutterBottom>
                    <FormattedMessage id="home.price" defaultMessage="Starting from"/>
                    {hotel.price}
                </Typography>
                </Grid>
                </CardContent>
                </CardActionArea>
            </Card>
            </Link>
            </Grid>
            
        
        )
    };

    return (
        <Grid container className={classes.container} direction="row" justify="center" alignItems="center">
            { hotels.map( hotel => {
                return renderGrid(hotel);
            })}
        </Grid>
    )
}

export default Home;