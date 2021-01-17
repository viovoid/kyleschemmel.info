import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Grid, Link, Typography } from '@material-ui/core';
import projects from './Projects';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
  },
  project: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  image: {
    width: 256,
  },
}));

const Portfolio = (props) => {
  const classes = useStyles();
  return (
   <div className={classes.root}>
      <Typography component="h1" align="center" gutterBottom>
        Projects
      </Typography>
      <br/>
      {projects.map((p, i) => (
        <Card className={classes.project} key={i}>
          <Grid container direction="row">
            <Grid container item direction="column" sm={12} md={8}>
              <Typography component="h2" variant="h6">{p.title}</Typography>
              <Link href={p.link}>{p.link}</Link>
              {p.link2 && 
                <Link href={p.link2}>{p.link2}</Link>
              }
              <Typography>{p.description}</Typography>
            </Grid>
            <Grid item sm={12} md={4}>
              {p.image && <img src={`/img/${p.image}.png`} alt={p.title} className={classes.image} />}
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
}

export default Portfolio;
