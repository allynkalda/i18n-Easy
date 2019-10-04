import React from 'react';
import { FormattedMessage } from 'react-intl'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import hotels from '../data/hotels'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Home() {

    const classes = useStyles();

    const renderGrid = (hotel) => {
        return (
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={hotel.image}
                title={hotel.name}
             />
            <Typography gutterBottom variant="h5" component="h2">
                <FormattedMessage id="home.greeting" defaultMessage="Hello World!"/>
            </Typography>
            </CardActionArea>
        </Card>
        )
    }
    return (
        <div>
            { hotels.map( hotel => {
                return renderGrid(hotel);
            })}
        </div>
    )
}
