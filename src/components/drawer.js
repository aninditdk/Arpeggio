import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import piano from '../Images/piano.jpg';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    backgroundColor:'#393e46',
    opacity:"0.8",
    width:"68%",
    
  },
  listItemText: {
    fontSize:"1.5rem",
    textShadow:"2px 2px 4px #000"
  }
});


export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const itemlist = [
      {
        text: "Home",
        icon: <HomeIcon style={{color:"white",fontSize:"2rem", margin:"10px"}}/>
      },
      {
        text: "Photo Gallery",
        icon: <PhotoLibraryIcon style={{color:"white",fontSize:"2rem",margin:"10px"}}/>
      },
      {
        text: "About Us",
        icon: <InfoIcon style={{color:"white",fontSize:"2rem",margin:"10px"}}/>
      },
      {
        text: "Sign In",
        icon: <ExitToAppIcon style={{color:"white",fontSize:"2rem",margin:"10px"}}/>
      },

  ]

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <List >
        {itemlist.map((item, index) => {
            const {text, icon} = item;
            return (
          <ListItem button style={{color:"white"}} key={text} >
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText classes={{primary:classes.listItemText}} primary={text} />
          </ListItem>
        )
            
        })}
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{props.menuicon}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            classes={{paper:classes.paper}}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
