import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../assets/mountains.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '1rem'
  },
  text: {
    color: 'white',
    textAlign: 'start',
    marginTop: 0
  },
  image: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 120,
    width: 325,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          image={image}
          title="image"
        />
        <div className={classes.image}>
          <img src={image} alt ="imagen" />
        </div>
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            Lunes 21 Diciembre 2020
          </Typography>
          <Typography gutterBottom variant="h2">
            10:40am
          </Typography>
          <br/>
          <br/>
          <br/>
          <Typography variant="body2">
            ¿Qué planeas hacer el día de hoy?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}