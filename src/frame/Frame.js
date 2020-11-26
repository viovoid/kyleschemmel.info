import React from 'react';
import { CssBaseline, Link, Hidden, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import Sidebar from './Sidebar';
import Header from './Header';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
    bg0: '#18202c',
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
//    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: theme.palette.bg0,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.bg0,
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
  },
  footer: {
    padding: theme.spacing(2),
  },
}));

const Frame = (props) => {
  const { navigate } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Hidden mdUp>
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              navigate={navigate}
            />
          </Hidden>
          <Hidden smDown>
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              navigate={navigate}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            {props.children}
          </main>
          <footer className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://mirrod.in/">
                Kyle Schemmel
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Built and hosted using free software exclusively
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Source available <a href="https://gitlab.com/biovoid/kyleschemmel.info">here</a>.
            </Typography>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Frame;
