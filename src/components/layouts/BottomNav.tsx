import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import useNavigateWithAnim from '../../hooks/useNavigateWithAnim';

function BottomNav() {
  const classes = useStyles();
  const { pathname } = useLocation()

  const onClickNavigateWithAnim = useNavigateWithAnim()

  const fabBtns = [
    { bgColor: '#CF2C6E', component: <LocationOnIcon />, onClickValue: '/', text: 'Contacts', route: '/' },
    { bgColor: '#5F4EFF', component: <LocationOnIcon />, onClickValue: '/projects', text: 'Projects', route: '/projects' },
    { bgColor: '#3C78FF', component: <LocationOnIcon />, onClickValue: '/technologies', text: 'Technologies', route: '/technologies' },
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
            key={item.text}
            text={item.text}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => onClickNavigateWithAnim(item.onClickValue)}
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