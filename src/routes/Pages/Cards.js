import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  cards: {
    textAlign: 'left',
    whiteSpace: 'pre',
  },
}));

const cards = [
  '1 Blatant Thievery [ONS]',
  '1 Lazav, Dimir Mastermind [GTC] *FOIL*',
  '1 Mishra\'s Workshop',
];

const Cards = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        Welcome to mirrod.in
      </header>
      <h1>Cards I am looking for</h1>
      <Grid container direction="row">
        <Grid item lg />
        <Grid item xs>
          <pre className={classes.cards}>
            {cards.map(c => `${c}\n`)}
          </pre>
        </Grid>
        <Grid item lg />
      </Grid>
      <br />
      <div>
        I'll probably put some decks here too
      </div>
    </div>
  );
}

export default Cards;
