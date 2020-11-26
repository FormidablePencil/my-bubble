import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { swipebarHeightInPx } from '../../../../../styles/materialUiStyles';

import 'react-tiny-fab/dist/styles.css';
import useNavigateProjects from './useNavigateProjects';

function NavigationFabs() {
  const classes = useStyles();
  const { navigateToNextProject, navigateToPrevProject } = useNavigateProjects()

  return (
    <div className={classes.fabContainer}>
      <Fab onClick={navigateToPrevProject} className={classes.fab}>Prev</Fab>
      <Fab onClick={navigateToNextProject} className={classes.fab}>Next</Fab>
      {/* <Fab
        icon={<MenuIcon />}
        event={'click'}
        alwaysShowTitle={true}
        mainButtonStyles={{ backgroundColor: '#48B5FF' }}
      >
        {fabBtns.map((item) => item.route !== pathname && */}
      {/* <Action
            // key={item.text}
            text={'item.text'}
            style={{ backgroundColor: 'red' }}
            // onClick={() => onClickFab(item.onClickValue)}
          >
            <LocationOnIcon />
          </Action> */}
      {/* )}
      </Fab> */}
    </div>
  )
}

const useStyles = makeStyles(() => ({
  fabContainer: {
    position: 'absolute',
    bottom: swipebarHeightInPx + 10,
    right: 35,
  },
  fab: {
    margin: '1em'
  }
}));

export default NavigationFabs
