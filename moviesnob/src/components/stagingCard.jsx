import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 440,
  },
});

export default function StagingCard(props) {
  const classes = useStyles();
  if (props.currentMovie.Title === undefined) {
    return (
      <div>Search for a movie up above!
        <img className="theater-img" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F11%2Famc-cinemark-theater-stock-surge-pfizer-covid19-vaccine-news3.jpg?q=75&w=800&cbr=1&fit=max"/>
      </div>
    )
  } else {
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${props.currentMovie.Poster}`}
          title={`${props.currentMovie.Title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.currentMovie.Title}
          </Typography>
          <Typography>{props.currentMovie.Year}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.currentMovie.Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={ () => props.addToFavorites(props.currentMovie)}>
          Add to your Favorites!
        </Button>
      </CardActions>
    </Card>
  )}
}