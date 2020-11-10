import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory, useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

function BottomNav() {
  const classes = useStyles();
  const { pathname } = useLocation()
  const history = useHistory()

  const contactsOnClick = () => history.push('/')
  const projectsOnClick = () => history.push('/projects')
  const techOnClick = () => history.push('/technologies')

  const fabBtns = [
    { bgColor: '#CF2C6E', component: <LocationOnIcon />, onClick: contactsOnClick, text: 'Contacts', route: '/' },
    { bgColor: '#5F4EFF', component: <LocationOnIcon />, onClick: projectsOnClick, text: 'Projects', route: '/projects' },
    { bgColor: '#3C78FF', component: <LocationOnIcon />, onClick: techOnClick, text: 'Technologies', route: '/technologies' },
  ]

  return (
    <div
      className={classes.root}
    >
      <Fab
        icon={<MenuIcon />}
        event={'click'}
        alwaysShowTitle={true}
        mainButtonStyles={{ backgroundColor: '#48B5FF' }}
      >
        {fabBtns.map((item) => item.route !== pathname &&
          <Action
            text={item.text}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => item.onClick()}
          >
            <LocationOnIcon />
          </Action>
        )}
      </Fab>
    </div >
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
}));

export default BottomNav