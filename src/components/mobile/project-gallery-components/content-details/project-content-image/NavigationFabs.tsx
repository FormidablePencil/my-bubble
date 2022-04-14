import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { swipebarHeightInPx } from '../../../../../styles/materialUiStyles';
import 'react-tiny-fab/dist/styles.css';

function NavigationFabs({ onClickPrevFab, onClickNextFab }) {
  const classes = useStyles();

  return (
    <div className={classes.fabContainer}>
      <Fab onClick={onClickPrevFab} className={classes.fab}>Prev</Fab>
      <Fab onClick={onClickNextFab} className={classes.fab}>Next</Fab>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  fabContainer: {
    position: 'absolute',
    bottom: swipebarHeightInPx + 10,
    right: 35,
  },
  fab: {
    backgroundColor: "#D2392C",
    '&:hover': {
      backgroundColor: '#FF4040',
    },
    color: 'white',
    margin: '1em'
  }
}));

export default NavigationFabs
