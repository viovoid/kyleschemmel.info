import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  body: {
  },
  headshot: {
    width: 128,
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h1" align="center" gutterBottom>
        About Me
      </Typography>
      <br/>
      <Grid container direction="row">
        <Grid item xs={12} sm={9}>
          <Typography className={classes.body}>
            Hello! My name is Kyle Schemmel. I am a software developer and free software enthusiast from the Midwestern United States. I hold a Computer Science degree from the University of Michigan.
            <br/><br/>
            I have 5+ years of industry experience, covering backend and frontend development as well as system administration and DevOps. I have seen through entire products from start to finish, across a number of languages in multiple sectors.
            <br/><br/>
            Beyond product creation, I maintain a side project preparing and selling "liberated" computers—machines with all but the lowest level of nonfree software components removed.
            <br/><br/>
            On this website, I promote projects I am currently working on, and showcase older undertakings which I am proud of.
            <br/><br/>
            Would you like to hire me? Please visit my <Link href="/contact">contact page</Link> for information on getting ahold of me.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <img src="/img/headshot.jpg" alt="Headshot" className={classes.headshot} />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
