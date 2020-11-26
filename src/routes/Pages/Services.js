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

const Services = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h1" align="center" gutterBottom>
        Services
      </Typography>
      <br/>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography className={classes.body}>
            Have a programming idea that needs fabrication? Let's talk! I am very capable of building scalable software systems, and if your idea is something I'm interested in, I would love to be a part of it—whether it be server implementation, API development, web and mobile app creation, or all of the above! Check out my <Link href="/contact">contact</Link> page for how to reach out.
            <br/><br/>
            See a project of mine you want to use? All of my personal undertakings are released as free software, so you are welcome to use any of them as you see fit! Need a feature or don't want to allocate resources to setup and support? <Link href="/contact">Let me know</Link> what functionality you are looking for, and I'm sure we can work out a deal to implement and support it. In addition to support, I can offer hosting for instances of my projects—or any free software project! My hosting offering meets the same freedom standards as the software itself.
            <br/><br/>
            Looking for a computer that is as free/libre as money can buy? Look no further! I have a number of pre-configured, ready-to-use laptops available, free down to the BIOS. I also build-to-order, both laptops and servers/workstations. An online storefront is coming, but in the meantime <Link href="/contact">drop me a line</Link>, and we can talk freedom!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
