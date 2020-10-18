import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Grid } from '@material-ui/core';
import projects from './Projects';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
    textAlign: 'center',
  },
  project: {
    margin: 4,
    padding: 8,
  },
  image: {
    width: 256,
  },
}));

const Portfolio = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        Projects
      </header>
      {projects.map((p, i) => (
        <Card className={classes.project} key={i}>
          <Grid container direction="row">
            <Grid container item direction="column" sm={12} md={8}>
              <h4>{p.title}</h4>
              <h6>{p.link}</h6>
              <p>{p.description}</p>
            </Grid>
            <Grid item sm={12} md={4}>
              <img src={`/img/${p.image}.png`} alt={p.title} className={classes.image} />
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
}

export default Portfolio;
