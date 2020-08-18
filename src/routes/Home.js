import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        {JSON.stringify(props.auth)}
      </header>
    </div>
  );
}

export default Home;
