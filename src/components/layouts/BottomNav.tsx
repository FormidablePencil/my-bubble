import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'absolute',
    bottom: 0,
  },
});

function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation()
  const history = useHistory()

  const contactsOnClick = () => history.push('/')
  const projectsOnClick = () => history.push('/projects')
  const techOnClick = () => history.push('/technologies')

  const getValue = () => {
    if (pathname === '/')
      return 0
    if (pathname === '/projects')
      return 1
    if (pathname === '/technologies')
      return 2
  }

  return (
    <div
      className={classes.root}

    >
      <BottomNavigation
        value={getValue()}
        showLabels
      // onChange={(event, newValue) => { setValue(newValue) }}
      >
        <BottomNavigationAction
          onClick={contactsOnClick}
          label="Contacts" icon={<RestoreIcon />} />
        <BottomNavigationAction
          onClick={projectsOnClick}
          label="Projects" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          onClick={techOnClick}
          label="Technologies" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default BottomNav