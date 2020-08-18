import React from 'react';
import clsx from 'clsx';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

const categories = [
  {
    id: 'Brews',
    children: [
      {
        id: 'List Brews',
        icon: <ListIcon />,
        path: '/brews',
      },
      {
        id: 'New Brew',
        icon: <AddIcon />,
        path: '/brews/new',
      },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { navigate, ...other } = props;
  const classes = useStyles();
  const { pathname } = window.location;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.title, classes.item, classes.itemCategory)}
        >
          Fermon
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Overview
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary,
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, path }) => (
              <ListItem
                key={childId}
                button
                className={clsx(classes.item, path === pathname && classes.itemActiveItem)}
                onClick={() => navigate(path)}
              >
                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
