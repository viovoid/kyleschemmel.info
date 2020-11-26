import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  header: {
  },
  body: {
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h1" align="center" gutterBottom>
        Contact Me
      </Typography>
      <br/>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography className={classes.body}>
            Questions? Comments? Proposition for work? The easiest way to get ahold of me is to <Link href="mailto:kyle.schemmel+mirrod.in@gmail.com">email me</Link>.
            <br/><br/>
            I also encourage you to connect on <Link href="https://www.linkedin.com/in/kyle-schemmel-ba2aa858/">LinkedIn</Link>, and check out my <Link href="https://github.com/viovoid">GitHub</Link> profile.
            <br/><br/>
            You can also find me on IRC as <code>biovoid</code>—I hang out in the <code>#parabola</code> and <code>#libreboot</code> channels on Freenode.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
