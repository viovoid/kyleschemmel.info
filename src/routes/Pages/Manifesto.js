import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

const Manifesto = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        Manifesto
      </header>
    </div>
  );
}

export default Manifesto;
