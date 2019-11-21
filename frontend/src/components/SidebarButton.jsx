import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'redux-first-router-link';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import MapRoundedIcon from '@material-ui/icons/MapRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Typography from '@material-ui/core/Typography'



function SidebarButton() {
  const [drawerOpen, setDrawer] = React.useState(false);

  function toggleDrawer() {
    setDrawer(!drawerOpen);
  }

  const activeStyle = {
    fontWeight: 'bold',
    color: '#3f51b5',
    textDecoration: 'none',
    cursor: 'default',
  };

  const inactiveStyle = {
    fontWeight: 'normal',
    color: '#3f51b5',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={toggleDrawer}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ width: 250 }}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <ChevronLeftIcon color="primary"/>
          </IconButton>
          <List>
            <ListItem
              button
              component={NavLink}
              to={{ type: 'DASHBOARD' }}
              activeStyle={activeStyle}
              exact
              strict
              style={inactiveStyle}
            >
              <ListItemIcon>
                <TimelineRoundedIcon color="primary"/>
              </ListItemIcon>
              Dashboard
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to={{ type: 'ISOCHRONE' }}
              activeStyle={activeStyle}
              exact
              strict
              style={inactiveStyle}
            >
              <ListItemIcon>
                <MapRoundedIcon color="primary"/>
              </ListItemIcon>
              Isochrone
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to={{ type: 'DATADIAGNOSTIC' }}
              activeStyle={activeStyle}
              exact
              strict
              style={inactiveStyle}
            >
              <ListItemIcon>
                <CodeRoundedIcon color="primary"/>
              </ListItemIcon>
              Developer Tools
            </ListItem>
          </List>
          {/* Footer content */}
          <List style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
          }} >
            <ListItem
              button
              component="a"
              href="https://sites.google.com/view/opentransit"
              target="_blank"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <InfoRoundedIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="About" color="primary"/>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SidebarButton;
