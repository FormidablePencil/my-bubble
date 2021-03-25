import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import { useLocation } from 'react-router-dom';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import useNavigateWithAnim from '../../hooks/useNavigateWithAnim';

function BottomNav() {
  const classes = useStyles();
  const { pathname } = useLocation()

  const onClickNavigateWithAnim = useNavigateWithAnim()

  const fabBtns = [
    { bgColor: '#FF0C67', component: <HomeIcon />, onClickValue: '/', text: 'Contacts', route: '/' },
    { bgColor: '#8143DA', component: <ImportantDevicesIcon />, onClickValue: '/projects', text: 'Projects', route: '/projects' },
    { bgColor: '#246DFF', component: <GrainIcon />, onClickValue: '/technologies', text: 'Technologies', route: '/technologies' },
  ]

  return (
    <div
      className={classes.root}
    >
      <Fab
        icon={<MenuIcon />}
        event={'click'}
        alwaysShowTitle={true}
        mainButtonStyles={{ backgroundColor: '#7FA96D' }}
      >
        {fabBtns.map((item) => item.route !== pathname &&
          <Action
            key={item.text}
            text={item.text}
            style={{ backgroundColor: item.bgColor }}
            onClick={() => onClickNavigateWithAnim(item.onClickValue)}
          >
            {item.component}
          </Action>
        )}
      </Fab>
    </div >
  );
}


const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
}));

export default BottomNav
