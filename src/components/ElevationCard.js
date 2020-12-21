import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/desgrr.jpg"
          title="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lunes 21 Diciembre 2020
          </Typography>
          <Typography gutterBottom variant="h2" component="h2">
            10:40am
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p">
            ¿Qué planeas hacer el día de hoy?
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}