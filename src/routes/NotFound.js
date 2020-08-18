import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const NotFound = ({ navigate }) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      style={{ minHeight: '100vh' }}
    >
      Not Found
      <Button
        variant="outlined"
        style={{ margin: 16 }}
        onClick={() => 
          //navigate(-1) //XXX: router bug: https://github.com/reach/router/issues/44
          window.history.back()
        }
      >
        Go Back
      </Button>
    </Grid>
  );
}

export default NotFound;
