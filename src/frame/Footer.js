import React from 'react';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
  },
}));

const Footer = (props) => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://kyleschemmel.info">
            Kyle Schemmel
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Built and hosted using free software exclusively
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Source available <Link href="https://gitlab.com/biovoid/kyleschemmel.info">here</Link>
        </Typography>
      </footer>
    </>
  );
}

export default Footer;
