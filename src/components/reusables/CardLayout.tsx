import React from 'react'
import { projectDataT } from '../../reducers/projectDataReducer';
import { techDataT } from '../../reducers/techDataReducer';
import { Paper, Grid, makeStyles } from '@material-ui/core'

interface CardLayoutT {
  projectData: techDataT & projectDataT
}

const CardLayout = ({ firstSection, infoSection, onCardClick }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.card} id='hoverEffect' /*//* hover effect: zoom in and brightness higher */
      onClick={onCardClick}
    >
      <Grid container justify='center' alignItems='center'>{firstSection}</Grid>
      <Grid container>{infoSection}</Grid>
      {/* <div className="absoluteLayer" id='hoverEffect' /> */}
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    transition: 'transform 0.2s ease-in-out',
    position: 'relative',
    margin: '1.5em 0em 1.5em 0em',
    height: '20em',
    width: '600px',
    display: 'flex',
    alignItems: 'normal',
    borderRadius: '1em',
    overflow: 'hidden'
  }
}));

export default CardLayout