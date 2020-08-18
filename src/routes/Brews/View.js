import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button, CircularProgress, Container, Grid, Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get, post } from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 3),
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  submit: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  update: {
    maxWidth: 400,
  }
}));

const ViewBrews = ({ id }) => {
  const [brew, setBrew] = useState(null);
  const [update, setUpdate] = useState({});
  const [updating, setUpdating] = useState(false);
  const classes = useStyles();

  const submitUpdate = async () => {
    setUpdating(true);
    post('/updates', JSON.stringify(update))
      .then(res => {
        const updates = brew.updates;
        updates.push(res);
        setUpdate({});
        setUpdating(false);
        setBrew({ ...brew, updates });
      })
      .catch(console.warn);
  }

  useEffect(() => {
    id && get(`/brews/${id}`)
      .then(res => {
        console.log(res);
        if (!res.detail) {
          //TODO: catch detail
          setBrew(res);
          setUpdate({ brew: res.id });
        }
      })
      .catch(console.warn);
  }, [id]);

  if (!brew) {
    return (
      <CircularProgress />
    );
  }

  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <Paper className={classes.paper}>
            <Grid align="right">{brew.id}</Grid>
            <Grid>{brew.ident}</Grid>
            <Grid>{brew.init_date}</Grid>
            <Grid>{brew.category}</Grid>
        </Paper>
        {brew.updates.map((u) => (
          <Grid key={u.id}>
            <Paper className={clsx(classes.paper, classes.update)}>
              <Grid item>{u.id}</Grid>
              <Grid item>{u.post_date}</Grid>
              <Grid item>{u.body}</Grid>
            </Paper>
          </Grid>
        ))}
        <Paper className={clsx(classes.paper, classes.update)}>
          {updating
            ? <CircularProgress />
            : <>
                <Grid item>New Update</Grid>
                <Grid item>{update.date || new Date().toISOString()}</Grid>
                <TextField
                  multiline
                  onChange={({ target }) => setUpdate({ ...update, body: target.value })}
                  rows={4}
                  value={update.body}
                />
                <Button className={classes.submit} type="submit" onClick={submitUpdate}>
                  Submit
                </Button>
              </>
          }
        </Paper>
      </Grid>
    </Container>
  );
}

export default ViewBrews;
