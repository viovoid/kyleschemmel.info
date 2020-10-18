import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';
import posts from './Posts';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  post: {
    margin: 4,
  },
}));

const Blog = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {posts.map((p, i) => p.live && (
        <Card className={classes.post} key={i}>
          <h4>{p.title}</h4>
          <h6>{p.publishDate}</h6>
          <p>{p.body}</p>
        </Card>
      ))}
    </div>
  );
}

export default Blog;
